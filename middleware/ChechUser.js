const jwt = require('jsonwebtoken');
const StudentApplyForm = require('../model/StudentApplyForm')



const VarifyUser = async(req,res,next) => {
    const token =  req.cookies.StudentInfo;
    // console.log(token)
  
        try {
            const payload = jwt.verify(token, process.env.JWT_SEC)
            // console.log(payload)
            const user = await StudentApplyForm.findById(payload.id).select('-password')
            req.user = user
            // console.log(user)
            next()
          } catch (error) {
            console.log(error)
            next()
          }
}

module.exports = {VarifyUser}