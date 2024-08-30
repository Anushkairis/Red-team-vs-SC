// backend/models/QuizResult.js
const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  playerName: String,
  score: Number,
});

module.exports = mongoose.model('QuizResult', quizResultSchema);
