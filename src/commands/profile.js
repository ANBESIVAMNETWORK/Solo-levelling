// src/commands/profile.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('Show your hunter profile'),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;
    let user = await User.findOne({ discordId });

    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Profile`)
      .addFields(
        { name: 'Level', value: String(user.level), inline: true },
        { name: 'EXP', value: String(user.exp), inline: true },
        { name: 'HP', value: String(user.hp), inline: true },
        { name: 'MP', value: String(user.mp), inline: true },
        { name: 'Gold', value: String(user.gold), inline: true }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  }
};
