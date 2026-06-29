// src/commands/shadows.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const SHADOWS = require('../data/shadows');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shadows')
    .setDescription('View Sung Jin-Woo\'s shadow army')
    .addStringOption((option) =>
      option
        .setName('rarity')
        .setDescription('Filter by rarity')
        .addChoices(
          { name: 'Legendary', value: 'legendary' },
          { name: 'Epic', value: 'epic' },
          { name: 'Rare', value: 'rare' },
          { name: 'Common', value: 'common' }
        )
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const rarity = interaction.options.getString('rarity');

    let filtered = SHADOWS;
    if (rarity) {
      filtered = SHADOWS.filter((s) => s.rarity === rarity);
    }

    const embed = new EmbedBuilder()
      .setTitle(`Shadow Army ${rarity ? `(${rarity})` : ''}`)
      .setDescription('Sung Jin-Woo\'s summoned shadows')
      .setThumbnail(filtered[0]?.image || null);

    const shadowList = filtered
      .map((s) => `**${s.name}** (${s.title}) - ${s.rarity.toUpperCase()}`)
      .join('\n');

    embed.addFields(
      { name: 'Shadows', value: shadowList || 'None found', inline: false }
    );

    embed.setTimestamp();
    await interaction.editReply({ embeds: [embed] });
  }
};
