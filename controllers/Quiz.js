const Quiz = require('../model/Quiz')


module.exports.QuizQuest = async (req, res) => {
    const Qcategory = req.query.category;
    console.log(Qcategory)
    let data;
    if (Qcategory) {
        data = await Quiz.find({ category: Qcategory })
        // console.log(data)
    } else {
         data = await Quiz.find()
    }
    
    res.send(data)
    // console.log(data)
}