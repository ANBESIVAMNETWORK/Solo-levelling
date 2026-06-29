// src/commands/skills.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const Skill = require('../models/Skill');
const SKILLS = require('../data/skills');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('skills')
    .setDescription('View and learn skills'),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;

    const user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    // Get player's learned skills
    const playerSkills = await Skill.find({ userId: user._id, isLearned: true });

    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Skills`)
      .setDescription(`Level ${user.level} - Skills Learned: ${playerSkills.length}`);

    if (playerSkills.length === 0) {
      embed.addFields({ name: 'Skills', value: 'No skills learned yet. Complete quests to unlock skills!', inline: false });
    } else {
      const skillList = playerSkills
        .map((s) => `**${s.name}** (${s.type}) - Lv ${s.level}`)
        .join('\n');
      embed.addFields({ name: 'Learned Skills', value: skillList, inline: false });
    }

    // Show available skills to learn
    const availableSkills = SKILLS.filter((s) => s.level <= user.level).slice(0, 10);
    if (availableSkills.length > 0) {
      const availableList = availableSkills
        .map((s) => `**${s.name}** (Lv ${s.level})${playerSkills.find((ps) => ps.skillId === s.id) ? ' ✅' : ''}`)
        .join('\n');
      embed.addFields({ name: 'Available Skills', value: availableList, inline: false });
    }

    embed.setTimestamp();
    await interaction.editReply({ embeds: [embed] });
  }
};
