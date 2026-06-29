// src/services/combat.js
/**
 * Simple deterministic (with small random variance) combat simulator.
 * - player: Mongoose User document
 * - enemy: { name, level, maxHp, attack, defense, expReward, goldReward }
 * Returns result object and mutates player (exp, gold) but DOES NOT save.
 */

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computePlayerAtk(player) {
  // Simple formula: base 10 + level*5
  return 10 + (player.level - 1) * 5;
}

function computeDamage(attackerAtk, defenderDef) {
  // Basic damage: atk - def + small variance
  const base = Math.max(1, attackerAtk - Math.floor(defenderDef / 2));
  const variance = randInt(-2, 3);
  return Math.max(1, base + variance);
}

module.exports.simulateCombat = function simulateCombat(player, enemyTemplate) {
  const log = [];
  let playerHp = player.currentHp ?? player.maxHp;
  let enemyHp = enemyTemplate.maxHp;
  const playerAtk = computePlayerAtk(player);
  const enemyAtk = enemyTemplate.attack;

  log.push(`A wild **${enemyTemplate.name}** (Lv ${enemyTemplate.level}) appears!`);

  let turn = 0;
  while (playerHp > 0 && enemyHp > 0 && turn < 50) {
    turn += 1;
    // Player attacks first
    const dmgToEnemy = computeDamage(playerAtk, enemyTemplate.defense || 0);
    enemyHp -= dmgToEnemy;
    log.push(`You hit ${enemyTemplate.name} for ${dmgToEnemy} damage. (Enemy HP: ${Math.max(0, enemyHp)})`);
    if (enemyHp <= 0) break;

    // Enemy attacks
    const dmgToPlayer = computeDamage(enemyAtk, 0);
    playerHp -= dmgToPlayer;
    log.push(`${enemyTemplate.name} hits you for ${dmgToPlayer} damage. (Your HP: ${Math.max(0, playerHp)})`);
  }

  const victory = playerHp > 0 && enemyHp <= 0;
  const expGain = victory ? enemyTemplate.expReward : Math.floor((enemyTemplate.expReward || 10) * 0.2);
  const goldGain = victory ? enemyTemplate.goldReward : Math.floor((enemyTemplate.goldReward || 5) * 0.1);

  // Apply to player (mutate doc)
  player.currentHp = Math.max(0, playerHp);
  // For simplicity, we don't consume MP in this basic flow
  player.currentMp = player.currentMp ?? player.maxMp;

  // Grant gold
  player.gold = (player.gold || 0) + goldGain;

  // Grant EXP and compute level ups
  const levelResult = player.gainExp(expGain);

  log.push(victory ? `Victory! You gained ${expGain} EXP and ${goldGain} gold.` : `Defeated... You survived but only gained ${expGain} EXP and ${goldGain} gold.`);
  if (levelResult.leveled) {
    log.push(`You leveled up! New level: ${player.level}`);
  }

  return {
    victory,
    expGain,
    goldGain,
    log,
    turns: turn,
    leveled: levelResult.leveled,
    levelsGained: levelResult.levelsGained || 0
  };
};
