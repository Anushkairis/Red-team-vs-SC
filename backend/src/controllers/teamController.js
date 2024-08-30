// teamController.js

const Team = require('../models/Team');

exports.getTeams = async (req,res) => {
    try{
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error){
        res.status(400).json({ error: error.message});
    }
};