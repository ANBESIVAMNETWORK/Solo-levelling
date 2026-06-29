// src/commands/shop.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const Item = require('../models/Item');
const Inventory = require('../models/Inventory');

// Sample shop items
const SHOP_ITEMS = [
  { name: 'Health Potion', description: 'Restore 50 HP', rarity: 'common', type: 'consumable', price: 50 },
  { name: 'Mana Potion', description: 'Restore 30 MP', rarity: 'common', type: 'consumable', price: 50 },
  { name: 'Iron Sword', description: '+5 attack', rarity: 'uncommon', type: 'weapon', price: 200, equippable: true, equipSlot: 'weapon', attributes: { attack: 5 } },
  { name: 'Leather Armor', description: '+3 defense', rarity: 'uncommon', type: 'armor', price: 250, equippable: true, equipSlot: 'armor', attributes: { defense: 3 } }
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shop')
    .setDescription('View and buy items'),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;
    const user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    const embed = new EmbedBuilder()
      .setTitle('Shop')
      .setDescription('Available items for purchase');

    const itemList = SHOP_ITEMS.map(
      (item) => `**${item.name}** - ${item.price} gold\n${item.description}`
    );
    embed.addFields(
      { name: 'Items', value: itemList.join('\n\n'), inline: false },
      { name: 'Your Gold', value: String(user.gold), inline: true }
    );
    embed.setFooter({ text: 'Use /buy [itemname] to purchase' });
    embed.setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  }
};
