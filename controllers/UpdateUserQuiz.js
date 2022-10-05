    const StudentApplyForm = require('../model/StudentApplyForm')


module.exports.UpdateUserQuiz = async (req, res) => {
     console.log(req.body)
    
    const id = req.user._id;
    await StudentApplyForm.update({ _id: id }, { $push: { QuizScore: req.body } })
    console.log('done')
    res.json({success:'Your results havs been Delivered'})
}
