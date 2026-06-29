// src/commands/buy.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const Item = require('../models/Item');
const Inventory = require('../models/Inventory');
const WEAPONS = require('../data/weapons');

const SHOP_ITEMS = WEAPONS; // Use weapons as shop items

module.exports = {
  data: new SlashCommandBuilder()
    .setName('buy')
    .setDescription('Buy an item from the shop')
    .addStringOption((option) =>
      option
        .setName('itemname')
        .setDescription('Name of item to buy')
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName('quantity')
        .setDescription('How many to buy (default 1)')
        .setMinValue(1)
        .setMaxValue(100)
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

    // Find item in shop
    const shopItem = SHOP_ITEMS.find((i) => i.name.toLowerCase() === itemName);
    if (!shopItem) {
      await interaction.editReply(`Item **${itemName}** not found in shop.`);
      return;
    }

    const totalCost = shopItem.price * quantity;
    if (user.gold < totalCost) {
      await interaction.editReply(
        `Not enough gold. You need ${totalCost}g but only have ${user.gold}g.`
      );
      return;
    }

    // Deduct gold
    user.gold -= totalCost;
    await user.save();

    // Add to inventory
    let inv = await Inventory.findOne({ userId: user._id });
    if (!inv) {
      inv = new Inventory({ userId: user._id, items: [] });
    }

    // For simplicity, store as { name, quantity } instead of itemId
    const existingItem = inv.items.find((i) => i.name === shopItem.name);
    if (existingItem) {
      existingItem.amount += quantity;
    } else {
      inv.items.push({ name: shopItem.name, amount: quantity, rarity: shopItem.rarity });
    }
    await inv.save();

    const embed = new EmbedBuilder()
      .setTitle('Purchase Successful')
      .addFields(
        { name: 'Item', value: shopItem.name, inline: true },
        { name: 'Quantity', value: String(quantity), inline: true },
        { name: 'Total Cost', value: `${totalCost}g`, inline: true },
        { name: 'Gold Remaining', value: String(user.gold), inline: true }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  }
};
