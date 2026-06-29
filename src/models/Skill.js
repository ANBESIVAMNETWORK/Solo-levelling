// src/models/Skill.js
const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  skillId: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['physical', 'shadow', 'magic', 'support', 'ultimate'], default: 'physical' },
  level: { type: Number, default: 1 },
  isLearned: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
