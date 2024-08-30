// consoleRoutes.js

const express = require('express');
const router = express.Router();
const { compileCode } = require('../controllers/consoleController');

// Define the route for code compilation
router.post('/compile', compileCode);

module.exports = router;
