// src/commands/quest.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const Quest = require('../models/Quest');
const QUESTS = require('../data/quests');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quest')
    .setDescription('View and manage quests')
    .addSubcommand((subcommand) =>
      subcommand
        .setName('list')
        .setDescription('List all available quests')
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName('accept')
        .setDescription('Accept a quest')
        .addStringOption((option) =>
          option
            .setName('questname')
            .setDescription('Name of quest to accept')
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName('progress')
        .setDescription('View your active quests')
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;
    const subcommand = interaction.options.getSubcommand();

    const user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    if (subcommand === 'list') {
      const embed = new EmbedBuilder()
        .setTitle('Available Quests')
        .setDescription('Story, Daily, and Side Quests');

      const storyQuests = QUESTS.filter((q) => q.type === 'story').slice(0, 5);
      const dailyQuests = QUESTS.filter((q) => q.type === 'daily').slice(0, 3);

      if (storyQuests.length > 0) {
        const storyList = storyQuests.map((q) => `**${q.name}** - ${q.description}`).join('\n');
        embed.addFields({ name: 'Story Quests', value: storyList, inline: false });
      }

      if (dailyQuests.length > 0) {
        const dailyList = dailyQuests.map((q) => `**${q.name}** - ${q.description}`).join('\n');
        embed.addFields({ name: 'Daily Quests', value: dailyList, inline: false });
      }

      embed.setTimestamp();
      await interaction.editReply({ embeds: [embed] });
    } else if (subcommand === 'accept') {
      const questName = interaction.options.getString('questname');
      const questTemplate = QUESTS.find((q) => q.name.toLowerCase() === questName.toLowerCase());

      if (!questTemplate) {
        await interaction.editReply(`Quest **${questName}** not found.`);
        return;
      }

      // Check if already accepted
      const alreadyAccepted = await Quest.findOne({ userId: user._id, questId: questTemplate.id });
      if (alreadyAccepted) {
        await interaction.editReply(`You've already accepted quest **${questTemplate.name}**.`);
        return;
      }

      const newQuest = new Quest({
        userId: user._id,
        questId: questTemplate.id,
        name: questTemplate.name,
        type: questTemplate.type,
        stage: questTemplate.stage || 0
      });
      await newQuest.save();

      const embed = new EmbedBuilder()
        .setTitle('Quest Accepted')
        .addFields(
          { name: 'Quest', value: questTemplate.name, inline: true },
          { name: 'Type', value: questTemplate.type, inline: true },
          { name: 'Description', value: questTemplate.description, inline: false },
          { name: 'Objectives', value: questTemplate.objectives.join('\n'), inline: false }
        )
        .setTimestamp();

      await interaction.editReply({ embeds: [embed] });
    } else if (subcommand === 'progress') {
      const activeQuests = await Quest.find({ userId: user._id, isCompleted: false });

      const embed = new EmbedBuilder()
        .setTitle('Your Active Quests')
        .setDescription(`Total: ${activeQuests.length}`);

      if (activeQuests.length === 0) {
        embed.addFields({ name: 'Quests', value: 'No active quests. Use /quest accept to start!', inline: false });
      } else {
        const questList = activeQuests.map((q) => `**${q.name}** (${q.type}) - Progress: ${q.progress}%`).join('\n');
        embed.addFields({ name: 'Active Quests', value: questList, inline: false });
      }

      embed.setTimestamp();
      await interaction.editReply({ embeds: [embed] });
    }
  }
};
