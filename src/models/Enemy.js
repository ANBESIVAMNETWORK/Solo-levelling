// src/models/Enemy.js
const mongoose = require('mongoose');

const EnemySchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  maxHp: { type: Number, default: 50 },
  attack: { type: Number, default: 10 },
  defense: { type: Number, default: 0 },
  expReward: { type: Number, default: 20 },
  goldReward: { type: Number, default: 10 },
  lootTable: [{ itemId: mongoose.Schema.Types.ObjectId, rarity: String, chance: Number }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Enemy || mongoose.model('Enemy', EnemySchema);
