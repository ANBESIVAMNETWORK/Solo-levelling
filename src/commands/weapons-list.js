// src/commands/weapons-list.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const WEAPONS = require('../data/weapons');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('weapons')
    .setDescription('View available weapons and equipment')
    .addStringOption((option) =>
      option
        .setName('type')
        .setDescription('Filter by type')
        .addChoices(
          { name: 'Weapon', value: 'weapon' },
          { name: 'Armor', value: 'armor' },
          { name: 'Accessory', value: 'accessory' }
        )
    )
    .addStringOption((option) =>
      option
        .setName('rarity')
        .setDescription('Filter by rarity')
        .addChoices(
          { name: 'Legendary', value: 'legendary' },
          { name: 'Epic', value: 'epic' },
          { name: 'Uncommon', value: 'uncommon' },
          { name: 'Common', value: 'common' }
        )
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const type = interaction.options.getString('type');
    const rarity = interaction.options.getString('rarity');

    let filtered = WEAPONS;
    if (type) {
      filtered = filtered.filter((w) => w.type === type);
    }
    if (rarity) {
      filtered = filtered.filter((w) => w.rarity === rarity);
    }

    const embed = new EmbedBuilder()
      .setTitle(`Equipment ${type ? `(${type})` : ''} ${rarity ? `(${rarity})` : ''}`)
      .setDescription(`Total: ${filtered.length} item(s)`);

    const weaponList = filtered
      .slice(0, 15)
      .map(
        (w) =>
          `**${w.name}** (${w.rarity}) - ATK: +${w.attack}, DEF: +${w.defense} | ${w.price}g`
      )
      .join('\n');

    embed.addFields(
      { name: 'Items', value: weaponList || 'None found', inline: false }
    );

    if (filtered.length > 15) {
      embed.setFooter({ text: `Showing 15 of ${filtered.length} items` });
    }

    embed.setTimestamp();
    await interaction.editReply({ embeds: [embed] });
  }
};
