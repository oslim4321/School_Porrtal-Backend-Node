require('dotenv').config();
require('express-async-errors');
const cors = require('cors')
const connectDB = require('./db/connect')
const cookieParser = require('cookie-parser');
const {VarifyToken, VarifyTokenAdmin} = require('./middleware/VarifyToken')
const StudentApplyForm = require('./model/StudentApplyForm')
/* import Extra security middleware */
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')


const express = require('express');
const app = express();
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};
app.use(cors(corsOptions))


const route = require('./routes/main')
const Quizroute = require('./routes/quiz')

// middleware
app.use(express.static('../Client'));
app.use(express.json());
app.use(cookieParser())

app.use('/api/v1/jwt', route)
app.use('/api/v1/quiz', VarifyToken, Quizroute)

/*Use Extra security middleware */
app.set('trust proxy', 1)
app.use(rateLimit({
  window: 15 * 6 * 1000,
  max: 100
}))
app.use(helmet())
app.use(xss())


// app.use('*', VarifyToken)

app.get('/userdasboard',VarifyToken, async(req, res) => {
 
    res.send(req.user)
    // console.log('hii', req.user)
   
})
// How to fetch base on nested document in an array object 
// app.get('/doSom', async(req, res) => {
//   const data = await StudentApplyForm.find({"QuizScore.Course":'geography'})
// })
// How to fetch base on nested document in an array object end

/* How to delete an array object  */
app.get('/doSom', async(req, res) => {
  // const data = await StudentApplyForm.find({"QuizScore.Course":'geography'})
  const data = await StudentApplyForm.update({_id:('63303bc64f56ac2eb80ccba8')}, {$pull:{QuizScore:{Course: "history"}}})
  console.log(data)
  res.json({data})
})

app.get('/', async(req, res)=> {
  res.send('This is backend ruuning on node.js')
})

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MANGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
