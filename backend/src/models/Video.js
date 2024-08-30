const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  topic: String,
  score: Number,
  link: String,
  image: String,
  completed: Boolean,
  progress: { type: Number, default: 0 } // Progress in percentage
});

module.exports = mongoose.model('Video', videoSchema);
