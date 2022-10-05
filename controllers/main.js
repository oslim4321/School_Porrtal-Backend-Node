const StudentCourse = require('../model/StudentCourse')
const StudentApplyForm = require('../model/StudentApplyForm')

module.exports.ApplySchool = async (req, res) => {
   try {
     const data = await StudentApplyForm.create(req.body)
     res.status(200).json(data)
     console.log(data)
   } catch (error) {
    console.log(error)
   }
}
module.exports.GetAllApplyStudent = async (req, res) => {
   try {
     const data = await StudentApplyForm.find()
     res.json(data)
   } catch (error) {
    console.log(error)
   }
}
module.exports.GetCourse = async (req, res) => {
   try {
     const data =await StudentCourse.find({})
     res.json(data)
    //  console.log({data})
     res.send('')

   } catch (error) {
    console.log(error)
   }
}
module.exports.UpdateAndGiveAddmission = async (req, res) => {
  try {
    // if (req.user.isAdmin) {
      console.log(req.user)
      const id = req.params.id
    // console.log(req.params.id)
    const data = await StudentApplyForm.findByIdAndUpdate(id,
      req.body, {
        new: true,
        runValidators: true,
    }
    )
    console.log('id', id)
    console.log('body', req.body)
    res.status(200).json(data)
    // } else {
    //   console.log('You are not aloow to do this you are not an admin')
    // }
   } catch (error) {
    console.log(error)
   }
}
module.exports.DeleteUserApply = async (req, res) => {
  try {
    const id = req.params.id
    console.log(req.params.id)
    const data = await StudentApplyForm.findByIdAndDelete(id)
    console.log(data)
    res.status(200).json(data)
     
   } catch (error) {
    console.log(error)
   }
}
module.exports.getSingleUsers = async(req, res) => {
    try {
      let id = req.params.id;
      const data = await StudentApplyForm.findById(id)
      res.status(200).json(data)
    } catch (error) {
      res.status(404).json('sorry cant perform this task')
    }
}





// module.exports.GiveAddmission = async (req, res) => {
//   try {
//     const data = await StudentApplyForm.find({ addmited: true })
//     const result = await UserLogin.create(data)
//     console.log(result)
//     console.log('Success!!!!')
//     // const data = await StudentApplyForm.find({ addmited: true })
//     // console.log(data)
//     //  data.map((elem) => {
//     //    const { course, program, name, lastName } = elem;
//     //   //  console.log( { course, program, name, lastName } )
//     //    UserLogin.create([{ course, program, name, lastName }])
//     //   .then((finalData)=>{
//     //      console.log(finalData)
//     //   }).catch((error) => {
//     //       console.log(error)
//     //   })
//     // })
//   } catch (error) {
//     console.log(error)
//   }
// }
module.exports.DeleteUnAdmittedUsers =async(req, res)=> {
  try {
    // const data = await StudentApplyForm.find({ addmited: true })
    const deleteMany = await StudentApplyForm.deleteMany({ addmited: false })
    console.log(deleteMany)
    res.json({success:'This user have been given addmission the rest have been filter out'})
  } catch (error) {
    console.log(error)
  }
}