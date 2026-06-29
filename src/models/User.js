// src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true, index: true },
  username: { type: String, required: true },
  exp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  maxHp: { type: Number, default: 100 },
  maxMp: { type: Number, default: 50 },
  currentHp: { type: Number, default: 100 },
  currentMp: { type: Number, default: 50 },
  gold: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// Simple instance method to compute EXP required for next level
UserSchema.methods.expToNextLevel = function () {
  // Simple formula: 100 * current level
  return 100 * this.level;
};

// Level up routine
UserSchema.methods.gainExp = function (amount) {
  this.exp += amount;
  const results = { leveled: false, levelsGained: 0 };
  while (this.exp >= this.expToNextLevel()) {
    this.exp -= this.expToNextLevel();
    this.level += 1;
    results.leveled = true;
    results.levelsGained += 1;
    // Increase stats on level up
    this.maxHp += 20;
    this.maxMp += 10;
    this.gold += 0; // placeholder
  }
  // Heal player a bit on level up
  if (results.leveled) {
    this.currentHp = Math.min(this.currentHp + 20 * results.levelsGained, this.maxHp);
    this.currentMp = Math.min(this.currentMp + 10 * results.levelsGained, this.maxMp);
  }
  return results;
};

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
