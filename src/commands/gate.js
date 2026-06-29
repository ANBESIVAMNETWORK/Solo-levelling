// src/commands/gate.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const GATES = require('../data/gates');
const MONSTERS = require('../data/monsters');
const { simulateCombat } = require('../services/combat');

function getMonstersByRank(rank) {
  const rankMap = { E: 'E', D: 'D', C: 'C', B: 'B', A: 'A', S: 'S' };
  return MONSTERS.filter((m) => m.rank === rankMap[rank] || (rank === 'E' && m.rank === 'E'));
}

function pickRandomMonster(monsters) {
  return monsters[Math.floor(Math.random() * monsters.length)];
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gate')
    .setDescription('Enter a gate and fight multiple monsters')
    .addStringOption((option) =>
      option
        .setName('rank')
        .setDescription('Gate rank')
        .addChoices(
          { name: 'E-Rank', value: 'E' },
          { name: 'D-Rank', value: 'D' },
          { name: 'C-Rank', value: 'C' },
          { name: 'B-Rank', value: 'B' },
          { name: 'A-Rank', value: 'A' },
          { name: 'S-Rank', value: 'S' }
        )
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;
    const gateRank = interaction.options.getString('rank');

    const user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    // Pick a random gate of this rank
    const gatesOfRank = GATES.filter((g) => g.rank === gateRank);
    if (gatesOfRank.length === 0) {
      await interaction.editReply(`No gates found for rank ${gateRank}.`);
      return;
    }
    const gate = gatesOfRank[Math.floor(Math.random() * gatesOfRank.length)];

    // Generate 3-5 monsters for this gate
    const monsterCount = 3 + Math.floor(Math.random() * 3);
    const availableMonsters = getMonstersByRank(gateRank);
    if (availableMonsters.length === 0) {
      await interaction.editReply(`No monsters found for rank ${gateRank}.`);
      return;
    }

    const gateLog = [`**Entering Gate: ${gate.name}**\n`];
    let totalExpGain = 0;
    let totalGoldGain = 0;
    let playerDefeated = false;

    // Fight each monster in sequence
    for (let i = 0; i < monsterCount; i++) {
      const monster = pickRandomMonster(availableMonsters);
      const combatResult = simulateCombat(user, monster);
      totalExpGain += combatResult.expGain;
      totalGoldGain += combatResult.goldGain;

      gateLog.push(`\n**Wave ${i + 1}: ${monster.name}**`);
      gateLog.push(combatResult.log.join('\n'));

      if (!combatResult.victory) {
        playerDefeated = true;
        break;
      }
    }

    // Apply multiplier based on gate rank
    const multiplier = gate.rewardExpMultiplier || 1.0;
    const finalExp = Math.floor(totalExpGain * multiplier);
    const finalGold = Math.floor(totalGoldGain * multiplier);

    // Grant rewards
    user.gold += finalGold;
    const levelResult = user.gainExp(finalExp);
    await user.save();

    gateLog.push(`\n**Gate Summary**`);
    gateLog.push(`EXP Gained: ${finalExp} (x${multiplier})`);
    gateLog.push(`Gold Gained: ${finalGold}`);
    gateLog.push(playerDefeated ? '❌ Gate Failed' : '✅ Gate Cleared');

    const embed = new EmbedBuilder()
      .setTitle(`Gate Exploration: ${gate.name}`)
      .setDescription(gateLog.join('\n'))
      .addFields(
        { name: 'Gate Rank', value: gateRank, inline: true },
        { name: 'Monsters Defeated', value: playerDefeated ? `${monsterCount - 1}/${monsterCount}` : `${monsterCount}/${monsterCount}`, inline: true },
        { name: 'Your Level', value: String(user.level), inline: true }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  }
};
