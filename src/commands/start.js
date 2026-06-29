// src/commands/start.js
const { SlashCommandBuilder } = require('discord.js');
const User = require('../models/User');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('start')
    .setDescription('Create your hunter profile'),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const discordId = interaction.user.id;
    let user = await User.findOne({ discordId });

    if (user) {
      await interaction.editReply('You already have a profile. Use /profile to view it.');
      return;
    }

    user = new User({
      discordId,
      username: interaction.user.tag,
      exp: 0,
      level: 1,
      hp: 100,
      mp: 50,
      gold: 100
    });

    await user.save();
    await interaction.editReply('Profile created! Welcome, Hunter. Use /profile to view your stats.');
  }
};
