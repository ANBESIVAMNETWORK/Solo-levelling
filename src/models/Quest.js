// src/models/Quest.js
const mongoose = require('mongoose');

const QuestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  questId: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['story', 'daily', 'side'], default: 'side' },
  stage: { type: Number, default: 0 },
  progress: { type: Number, default: 0 },
  isCompleted: { type: Boolean, default: false },
  startedAt: { type: Date, default: Date.now },
  completedAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Quest || mongoose.model('Quest', QuestSchema);
