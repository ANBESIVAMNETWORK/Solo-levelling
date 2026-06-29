// src/commands/hunt.js
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const User = require('../models/User');
const { simulateCombat } = require('../services/combat');

// Small roster of enemy templates for quick start
const ENEMIES = [
  { name: 'Goblin', level: 1, maxHp: 30, attack: 6, defense: 1, expReward: 20, goldReward: 8 },
  { name: 'Wolf', level: 1, maxHp: 35, attack: 8, defense: 2, expReward: 25, goldReward: 10 },
  { name: 'Skeleton', level: 2, maxHp: 45, attack: 10, defense: 3, expReward: 40, goldReward: 18 },
  { name: 'Cultist', level: 3, maxHp: 65, attack: 14, defense: 4, expReward: 70, goldReward: 35 }
];

function pickEnemyForPlayer(player) {
  // Simple scaling by player level
  const lvl = Math.max(1, player.level);
  const idx = Math.min(ENEMIES.length - 1, Math.floor((lvl - 1) / 2));
  const template = ENEMIES[Math.max(0, idx)];
  // Slight random variation
  const enemy = { ...template };
  enemy.level = Math.max(1, template.level + Math.floor(Math.random() * 2));
  enemy.maxHp = Math.floor(template.maxHp * (1 + Math.random() * 0.3));
  enemy.attack = Math.floor(template.attack * (1 + Math.random() * 0.2));
  enemy.expReward = Math.floor(template.expReward * (1 + Math.random() * 0.25));
  enemy.goldReward = Math.floor(template.goldReward * (1 + Math.random() * 0.3));
  return enemy;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hunt')
    .setDescription('Hunt monsters for EXP and gold'),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const discordId = interaction.user.id;
    let user = await User.findOne({ discordId });
    if (!user) {
      await interaction.editReply('No profile found. Create one with /start');
      return;
    }

    const enemy = pickEnemyForPlayer(user);
    const result = simulateCombat(user, enemy);

    // Save user state (HP, EXP, gold, level)
    await user.save();

    const embed = new EmbedBuilder()
      .setTitle(`Hunt: ${enemy.name}`)
      .setDescription(result.log.join('\n'))
      .addFields(
        { name: 'Result', value: result.victory ? 'Victory' : 'Defeat', inline: true },
        { name: 'EXP Gained', value: String(result.expGain), inline: true },
        { name: 'Gold Gained', value: String(result.goldGain), inline: true },
        { name: 'Turns', value: String(result.turns), inline: true },
        { name: 'Your Level', value: String(user.level), inline: true },
        { name: 'Your EXP', value: `${user.exp}/${user.expToNextLevel()}`, inline: true }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  }
};
