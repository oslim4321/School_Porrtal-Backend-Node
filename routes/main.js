const express = require('express')
const route = express.Router()
const main = require('../controllers/main')
const login = require('../controllers/Login')
const { VarifyToken, VarifyTokenAdmin } = require('../middleware/VarifyToken')
const  Stripe  = require('../controllers/Stripe')
/* VarifyTokenAdmin,VarifyToken, */

route.get('/getAllCourse', main.GetCourse)
route.get('/GetAllApplyStudent',VarifyTokenAdmin, main.GetAllApplyStudent)
route.get('/DeleteUnAdmittedUsers', main.DeleteUnAdmittedUsers)
route.get('/logout', login.logout)
route.patch('/UpdateAndGiveAddmission/:id',VarifyTokenAdmin, main.UpdateAndGiveAddmission)
route.delete('/DeleteUserApply/:id',VarifyTokenAdmin, main.DeleteUserApply)
route.post('/ApplySchool', main.ApplySchool)
route.post('/StudentLogin',login.StudentLogin)
route.get('/getUser', login.getuser)
route.get('/getSingleUsers/:id',VarifyTokenAdmin, main.getSingleUsers)
route.post('/payment', Stripe.Stripe)



module.exports = route