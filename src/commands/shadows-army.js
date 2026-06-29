// src/commands/shadows-army.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const Shadow = require('../models/Shadow');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shadows-army')
    .setDescription('View your summoned shadows'),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;

    const user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    const shadows = await Shadow.find({ userId: user._id, isActive: true });

    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Shadow Army`)
      .setDescription(`Total Shadows: ${shadows.length}`);

    if (shadows.length === 0) {
      embed.addFields({ name: 'Shadows', value: 'None summoned yet. Use /summon', inline: false });
    } else {
      const shadowList = shadows
        .map((s) => `**${s.name}** (${s.title}) - Lv ${s.level} | HP: ${s.maxHp} | ATK: ${s.attack}`)
        .join('\n');
      embed.addFields({ name: 'Shadows', value: shadowList, inline: false });
    }

    embed.setTimestamp();
    await interaction.editReply({ embeds: [embed] });
  }
};
