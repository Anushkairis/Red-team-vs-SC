// quizRoutes.js

const express = require('express');
const router = express.Router();
const {getQuizzes} = require('../controllers/quizController');

router.get('/',getQuizzes);

module.exports = router;