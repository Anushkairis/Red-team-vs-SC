// profileController.js
const User = require('../models/User'); // Adjust the path to your User model

// Profile controller
async function getProfile(req, res) {
    const { userId } = req.params; // Get userId from request parameters

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        // If the user is not found, return an error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Destructure the required fields from the user object
        const { name, team, email } = user;

        // Send the response with name, team, and email
        res.status(200).json({ name, team, email });
    } catch (error) {
        console.error('Error retrieving profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { getProfile };
