// src/commands/inventory.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const Inventory = require('../models/Inventory');
const Item = require('../models/Item');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('inventory')
    .setDescription('View your inventory'),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;
    const user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    let inv = await Inventory.findOne({ userId: user._id }).populate('items.itemId');
    if (!inv) {
      inv = new Inventory({ userId: user._id, items: [] });
      await inv.save();
    }

    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Inventory`)
      .setDescription(inv.items.length === 0 ? 'Empty' : `You have ${inv.items.length} unique item type(s)`);

    if (inv.items.length > 0) {
      const itemDescriptions = inv.items.map(
        (slot) => `**${slot.itemId.name}** (${slot.itemId.rarity}) x${slot.amount}`
      );
      embed.addFields(
        { name: 'Items', value: itemDescriptions.join('\n'), inline: false }
      );
    }

    embed.setTimestamp();
    await interaction.editReply({ embeds: [embed] });
  }
};
