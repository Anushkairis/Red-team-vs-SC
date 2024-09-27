const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController'); // Adjust path

// Define the route for fetching the user's profile
router.get('/profile/:userId', getProfile);

module.exports = router;
