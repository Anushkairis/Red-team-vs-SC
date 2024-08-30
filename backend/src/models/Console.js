// Console.js

const mongoose = require('mongoose');

const ConsoleSchema = new mongoose.Schema({
    title: {type: String,required: true},
    content: {type: String} 
 });

module.exports = mongoose.model('Console',ConsoleSchema);
