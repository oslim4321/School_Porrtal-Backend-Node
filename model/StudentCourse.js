const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
  course: {
    type: String,
    required: [true, 'course name must be provided'],
  },
  cutOffMark: {
    type: String,
    required: [true, 'cutOffMark must be provided'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  type: {
    type: String,
    enum: {
      values: ['ND', 'HND',],
      message: '{VALUE} is not supported',
    },
  },
})

module.exports = mongoose.model('CourseSchema', CourseSchema)

