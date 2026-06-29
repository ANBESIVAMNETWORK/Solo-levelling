// src/commands/summon.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const Shadow = require('../models/Shadow');
const SHADOWS = require('../data/shadows');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('summon')
    .setDescription('Summon a shadow to join your army')
    .addStringOption((option) =>
      option
        .setName('shadowname')
        .setDescription('Name of shadow to summon')
        .setRequired(false)
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;
    const shadowName = interaction.options.getString('shadowname');

    const user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    // If shadow name provided, try to summon that specific shadow
    if (shadowName) {
      const shadowTemplate = SHADOWS.find((s) => s.name.toLowerCase() === shadowName.toLowerCase());
      if (!shadowTemplate) {
        await interaction.editReply(`Shadow **${shadowName}** not found.`);
        return;
      }

      // Check if already summoned
      const alreadySummoned = await Shadow.findOne({ userId: user._id, shadowId: shadowTemplate.id });
      if (alreadySummoned) {
        await interaction.editReply(`You've already summoned **${shadowTemplate.name}**.`);
        return;
      }

      // Create shadow entry
      const newShadow = new Shadow({
        userId: user._id,
        shadowId: shadowTemplate.id,
        name: shadowTemplate.name,
        title: shadowTemplate.title,
        rarity: shadowTemplate.rarity,
        level: Math.floor(user.level * 0.8), // Shadow levels at 80% of player
        maxHp: shadowTemplate.maxHp || 100,
        attack: shadowTemplate.attack || 20,
        defense: shadowTemplate.defense || 5,
        isActive: true
      });
      await newShadow.save();

      const embed = new EmbedBuilder()
        .setTitle('Shadow Summoned!')
        .setDescription(`You have summoned **${shadowTemplate.name}**!`)
        .setThumbnail(shadowTemplate.image)
        .addFields(
          { name: 'Title', value: shadowTemplate.title, inline: true },
          { name: 'Rarity', value: shadowTemplate.rarity.toUpperCase(), inline: true },
          { name: 'Level', value: String(newShadow.level), inline: true },
          { name: 'Attack', value: String(newShadow.attack), inline: true },
          { name: 'Defense', value: String(newShadow.defense), inline: true }
        )
        .setTimestamp();

      await interaction.editReply({ embeds: [embed] });
      return;
    }

    // Random summon if no shadow specified
    const randomShadow = SHADOWS[Math.floor(Math.random() * SHADOWS.length)];
    const alreadySummoned = await Shadow.findOne({ userId: user._id, shadowId: randomShadow.id });
    
    if (alreadySummoned) {
      await interaction.editReply('Random shadow already summoned. Specify a shadow name to summon a specific one.');
      return;
    }

    const newShadow = new Shadow({
      userId: user._id,
      shadowId: randomShadow.id,
      name: randomShadow.name,
      title: randomShadow.title,
      rarity: randomShadow.rarity,
      level: Math.floor(user.level * 0.8),
      maxHp: randomShadow.maxHp || 100,
      attack: randomShadow.attack || 20,
      defense: randomShadow.defense || 5,
      isActive: true
    });
    await newShadow.save();

    const embed = new EmbedBuilder()
      .setTitle('Random Shadow Summoned!')
      .setDescription(`You have summoned **${randomShadow.name}**!`)
      .setThumbnail(randomShadow.image)
      .addFields(
        { name: 'Title', value: randomShadow.title, inline: true },
        { name: 'Rarity', value: randomShadow.rarity.toUpperCase(), inline: true },
        { name: 'Level', value: String(newShadow.level), inline: true }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  }
};
