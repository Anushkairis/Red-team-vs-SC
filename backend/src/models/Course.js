const mongoose = require('mongoose');

const submoduleSchema = new mongoose.Schema({
  type: { type: String, required: true },
  content: {
    heading: { type: String },
    description: { type: String },
    videoUrl: { type: String },
    questions: [
      {
        question: { type: String },
        options: [String],
        correctAnswer: { type: String },
      },
    ],
  },
});

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  submodules: [submoduleSchema],
});

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  modules: [moduleSchema],
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
