// quizController.js

const Quiz = require('../models/Quiz');

exports.getQuizzes = async (req,res) => {
    try{
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};