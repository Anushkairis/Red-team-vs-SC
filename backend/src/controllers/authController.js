const express = require('express');
const bcryptjs = require('bcryptjs'); // Import bcrypt for hashing passwords
const User = require('../models/User');
const crypto = require('crypto'); // Ensure crypto is imported
const ResetPassword = require('../models/Reset');
const  sendEmail = require('../utils/sendEmail');



// Register logic
async function register(req, res) {
    const { email, password, role, name, team } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, role: role || 'Player', team, name });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

// Login logic
async function signin(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email' });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const { name , role } = user;
        res.status(200).json({ message: 'Sign in successful', name ,role });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

async function ForgotPassword(req, res) {
    const { email } = req.body;
    console.log("Backend call", email);

    // Check if the email exists in the User schema
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).send('User not found');
    }

    // Generate a reset token and OTP
    const resetToken = crypto.randomBytes(32).toString('hex');
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    const resetPasswordExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours


    // Store the reset token, OTP, and email in the ResetPassword schema
    const resetPasswordEntry = new ResetPassword({
        email,
        resetToken,
        otp,
        resetPasswordExpires,
    });

    await resetPasswordEntry.save();

    // Send email with the reset token and OTP
    const resetURL = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
    const message = `You are receiving this email because you (or someone else) has requested to reset the password for your account. Please use the following OTP to verify your request and make a PUT request to: \n\n Reset Link: ${resetURL} \n\n OTP: ${otp}`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Password Reset Request',
            message,
        });
        res.status(200).send('Reset email sent');
    } catch (error) {
        res.status(500).send('Error sending email');
    }
}

// Reset Password

async function resetPassword(req, res) {
    console.log("Reset password request received - Start");

    const { resetToken } = req.params; // Extract reset token from URL params
    const { password, otp } = req.body; // Extract new password and OTP from request body

    console.log("Token and OTP received:", resetToken, otp);

    // Find the reset token entry in the ResetPassword collection
    const resetPasswordEntry = await ResetPassword.findOne({
        resetToken,
        resetPasswordExpires: { $gt: Date.now() } // Check if token is not expired
    });
    console.log("Reset Password Entry:", resetPasswordEntry);


    if (!resetPasswordEntry) {
        console.log("Invalid or expired token");
        return res.status(400).send('Password reset token is invalid or has expired');
    }

    // Check if the OTP matches
    if (resetPasswordEntry.otp != otp) {
        console.log("Invalid OTP");
        return res.status(400).send('Invalid OTP');
    }

    // Find the user by email from the resetPasswordEntry
    const user = await User.findOne({ email: resetPasswordEntry.email });

    if (!user) {
        console.log("User not found");
        return res.status(404).send('User not found');
    }

    // Hash the new password
    user.password = await bcryptjs.hash(password, 12);

    // Save the new password and remove the reset token and OTP
    await user.save();
    await ResetPassword.deleteOne({ _id: resetPasswordEntry._id });

    console.log("Password reset successfully");
    res.status(200).send('Password has been reset successfully');
}

module.exports = { signin, register,ForgotPassword,resetPassword };
