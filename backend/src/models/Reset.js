const mongoose = require('mongoose');

const resetPassword = new mongoose.Schema({
    email: { type: String, required: true },
    resetToken: { type: String, required: true },
    otp: { type: Number, required: true },
    resetPasswordExpires: { type: Date },
});

const ResetPassword = mongoose.model('ResetPassword', resetPassword);


module.exports = ResetPassword;
