const mongoose = require('mongoose')

const StudentApplyForm = new mongoose.Schema({
    program: {
    type: String,
    required: [true, 'program type must be provided'],
  },
  course: {
    type: String,
    required: [true, 'course type must be provided'],
  },
  email: {
    type: String,
      required: [true, 'email must be provided'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
      unique: true,
  },
  name: {
    type: String,
      required: [true, 'name must be provided'],
      maxlength: 50,
      minlength: 3,
  },
  lastName: {
    type: String,
      required: [true, 'lastName must be provided'],
      maxlength: 50,
      minlength: 3,
  },
  mobile: {
    type: Number,
    required: [true, 'mobile price must be provided'],
  },
  addmited: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  studentID:{
    type: Number,
  },
  isAdmin: {
    type: Boolean,
    defaults: false
  },
  QuizScore: {
    type: Array,
  }
})

module.exports = mongoose.model('StudentApplyForm', StudentApplyForm)

