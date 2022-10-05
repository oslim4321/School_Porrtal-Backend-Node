const jwt = require('jsonwebtoken');
const StudentApplyForm = require('../model/StudentApplyForm')


const VarifyToken = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    
     if (authHeader == null) return res.status(401).send('no token ')
  
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    console.log('no token provided')
    res.json({ error: 'no token was provided you cant access this routes' })
  } else {
    const token = authHeader.split(' ')[1]
      try {
          const decoded = await jwt.verify(token, process.env.JWT_SEC)
          if (!decoded) {
              res.status(404).json({error:'token not valid pls signup'})
          } else {
            const user = await StudentApplyForm.findById(decoded.id.id)
            req.user = user;
          }
          next()
      } catch (error) {
        res.status(404).json({error:'token not valid'})
          next()
      }
    
    }
   
}
const VarifyTokenAdmin = async(req, res, next) => {
    VarifyToken(req, res, () => {
        console.log('req', req.user.isAdmin)
        if (req.user.isAdmin) {
            console.log('aliamdullais')
            next()
        } else {
            console.log('Sorry you are not allow to access this routes ')
            res.status(404).json({error:'Sorry you are not allow to access this routes ' })
        }
    })
}
module.exports = {VarifyToken,VarifyTokenAdmin}