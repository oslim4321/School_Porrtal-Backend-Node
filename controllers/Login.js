const StudentApplyForm = require('../model/StudentApplyForm')
const jwt = require('jsonwebtoken')
const maxAge = 3 * 24 * 60 * 60 

        /* Create token */
const createToken = (id, isAdmin) => {
    return jwt.sign({ id,isAdmin }, process.env.JWT_SEC, {
        expiresIn: process.env.JWT_LIFETIME 
    })
}

    /* GEt all error */
const handleErorFunction = (error) => {
      let errors ={id: '', password: ''}
      // console.log(error.message)
      if(error.message === "Your ID can't be found"){
        errors.id = "Your ID can't be found"
      }
      if(error.message === 'Wrong Password'){
        errors.password = "Wrong Password"
      }
      return errors
    }


module.exports.StudentLogin = async(req, res) => {
  try {
    
    let request = req.body
   
      const check = await StudentApplyForm.findOne({studentID:request.ID })
      if (!check) {
          throw Error("Your ID can't be found")
      } else {
        if (request.password === check.lastName) {
            const token = createToken({ id:check._id, isAdmin:check.isAdmin})
            
            // res.cookie('StudentInfo', token, { httpOnly: true, maxAge: maxAge * 1000 })
            res.json({ success: 'success', success: check, Token: `${token}` })
            console.log('success')
        } else {
            throw Error('Wrong Password')
        }
      }
   
  } catch (error) {
    const Error = handleErorFunction(error)
    console.log(Error)
    if (Error) {
      res.json({Error}) 
    }
        
    }
}

module.exports.getuser = (req, res) => {  
  
}
module.exports.logout = (req, res) => {
  res.cookie('StudentInfo', '', { maxAge: 1 })
  console.log('logout')
  res.send('logout')
}