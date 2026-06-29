// src/commands/hunters.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const HUNTERS = require('../data/hunters');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hunters')
    .setDescription('View Solo Leveling hunters')
    .addStringOption((option) =>
      option
        .setName('rank')
        .setDescription('Filter by rank')
        .addChoices(
          { name: 'S-Rank', value: 'S' },
          { name: 'A-Rank', value: 'A' },
          { name: 'B-Rank', value: 'B' },
          { name: 'C-Rank', value: 'C' },
          { name: 'E-Rank', value: 'E' }
        )
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const rank = interaction.options.getString('rank');

    let filtered = HUNTERS;
    if (rank) {
      filtered = HUNTERS.filter((h) => h.rank === rank);
    }

    const embed = new EmbedBuilder()
      .setTitle(`Hunters ${rank ? `(${rank}-Rank)` : ''}`)
      .setDescription(`Total: ${filtered.length} hunter(s)`);

    const hunterList = filtered
      .slice(0, 10)
      .map((h) => `**${h.name}** (${h.rank}-Rank, Lv ${h.level}) - ${h.nation}`)
      .join('\n');

    embed.addFields(
      { name: 'Hunters', value: hunterList || 'None found', inline: false }
    );

    if (filtered.length > 10) {
      embed.setFooter({ text: `Showing 10 of ${filtered.length} hunters` });
    }

    embed.setTimestamp();
    await interaction.editReply({ embeds: [embed] });
  }
};
