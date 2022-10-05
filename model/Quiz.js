const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    question: {
    type: String,
    required: [true, 'course name must be provided'],
  },
  answers: {
    type: Array,
    required: [true, 'cutOffMark must be provided'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  category: {
    type: String,
    required: [true, 'course name must be provided'],
  }
})

module.exports = mongoose.model('QuizSchema', QuizSchema)