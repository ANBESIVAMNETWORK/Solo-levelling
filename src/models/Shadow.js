// src/models/Shadow.js
const mongoose = require('mongoose');

const ShadowSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  shadowId: { type: String, required: true }, // Reference to shadow template
  name: { type: String, required: true },
  title: { type: String, required: true },
  rarity: { type: String, enum: ['common', 'rare', 'epic', 'legendary'], default: 'rare' },
  level: { type: Number, default: 1 },
  exp: { type: Number, default: 0 },
  maxHp: { type: Number, default: 100 },
  currentHp: { type: Number, default: 100 },
  attack: { type: Number, default: 20 },
  defense: { type: Number, default: 5 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Shadow || mongoose.model('Shadow', ShadowSchema);
