// Backend: userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get user details by email
router.get('/user', async (req, res) => {
  console.log('Received request at /user');  
  const { email } = req.query; // Get email from query parameters

  if (!email) {
    return res.status(400).json({ message: 'Email parameter is required' });
  }

  try {
    const user = await User.findOne({ email }); // Find user by email
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ name: user.name }); // Return user's name
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
