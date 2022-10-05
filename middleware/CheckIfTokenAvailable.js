// const jwt = require('jsonwebtoken')




const requireAuth = (req, res, next) => {
    const token = req.cookies.StudentInfo;
    // console.log(token)
        
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token, JWT_SEC, (err, decodedToken) => {
        if (err) {
        //   console.log(err.message);
          res.json('yo are not login');
        } else {
          // console.log(decodedToken);
          next();
        }
      });
    } else {
      res.json('/you are not login');
    }
};