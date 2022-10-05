const express = require('express')
const Quizroute = express.Router()
const Quiz = require('../controllers/Quiz')
const UpdateUserQuiz = require('../controllers/UpdateUserQuiz')
// const { VarifyToken } = require('../middleware/VarifyToken')


Quizroute.get('/AllQuiz', Quiz.QuizQuest)
Quizroute.post('/UserScore', UpdateUserQuiz.UpdateUserQuiz)

module.exports = Quizroute