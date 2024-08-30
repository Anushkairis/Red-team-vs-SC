// taskController.js

const Task = require('../models/Task');

exports.getTasks = async (req,res) =>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
};