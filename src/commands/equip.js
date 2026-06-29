// src/commands/equip.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const Inventory = require('../models/Inventory');
const Item = require('../models/Item');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('equip')
    .setDescription('Equip an item')
    .addStringOption((option) =>
      option
        .setName('itemname')
        .setDescription('Name of item to equip')
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;
    const itemName = interaction.options.getString('itemname').toLowerCase();
    const user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    // Find item in inventory
    let inv = await Inventory.findOne({ userId: user._id }).populate('items.itemId');
    if (!inv || inv.items.length === 0) {
      await interaction.editReply('Your inventory is empty.');
      return;
    }

    const invSlot = inv.items.find((s) => s.itemId.name.toLowerCase() === itemName);
    if (!invSlot) {
      await interaction.editReply(`Item **${itemName}** not found in inventory.`);
      return;
    }

    const item = invSlot.itemId;
    if (!item.equippable || item.equipSlot === 'none') {
      await interaction.editReply(`**${item.name}** is not equippable.`);
      return;
    }

    // Equip the item
    const slot = item.equipSlot; // weapon, armor, or accessory
    user.equipment[slot] = item._id;
    await user.save();

    const embed = new EmbedBuilder()
      .setTitle('Equipment Updated')
      .addFields(
        { name: 'Item', value: item.name, inline: true },
        { name: 'Slot', value: slot, inline: true },
        { name: 'Attack Bonus', value: String(item.attributes.attack), inline: true },
        { name: 'Defense Bonus', value: String(item.attributes.defense), inline: true }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  }
};
