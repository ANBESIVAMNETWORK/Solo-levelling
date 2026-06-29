// src/commands/sell.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const Inventory = require('../models/Inventory');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sell')
    .setDescription('Sell an item from your inventory')
    .addStringOption((option) =>
      option
        .setName('itemname')
        .setDescription('Name of item to sell')
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName('quantity')
        .setDescription('How many to sell (default 1)')
        .setMinValue(1)
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;
    const itemName = interaction.options.getString('itemname').toLowerCase();
    const quantity = interaction.options.getInteger('quantity') || 1;

    const user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    let inv = await Inventory.findOne({ userId: user._id });
    if (!inv || inv.items.length === 0) {
      await interaction.editReply('Your inventory is empty.');
      return;
    }

    const invSlot = inv.items.find((i) => i.name.toLowerCase() === itemName);
    if (!invSlot) {
      await interaction.editReply(`Item **${itemName}** not found in inventory.`);
      return;
    }

    if (invSlot.amount < quantity) {
      await interaction.editReply(
        `You only have ${invSlot.amount} of **${invSlot.name}**. Cannot sell ${quantity}.`
      );
      return;
    }

    // Estimate sell price at 50% of original (hardcoded for simplicity)
    const basePrice = { 'Health Potion': 50, 'Mana Potion': 50, 'Iron Sword': 100, 'Leather Armor': 125 }[invSlot.name] || 50;
    const sellPrice = Math.floor(basePrice * 0.5);
    const totalEarnings = sellPrice * quantity;

    // Add gold
    user.gold += totalEarnings;
    await user.save();

    // Remove from inventory
    invSlot.amount -= quantity;
    if (invSlot.amount <= 0) {
      inv.items = inv.items.filter((i) => i.name !== invSlot.name);
    }
    await inv.save();

    const embed = new EmbedBuilder()
      .setTitle('Item Sold')
      .addFields(
        { name: 'Item', value: invSlot.name, inline: true },
        { name: 'Quantity', value: String(quantity), inline: true },
        { name: 'Price per Item', value: `${sellPrice}g`, inline: true },
        { name: 'Total Earnings', value: `${totalEarnings}g`, inline: true },
        { name: 'Gold Now', value: String(user.gold), inline: true }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  }
};
