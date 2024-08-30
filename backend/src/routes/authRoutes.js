// authRoute.js

const express = require('express');
const router = express.Router();
const authController= require('../controllers/authController');

router.post('/register', authController.register);
router.post('/signin', authController.signin);
router.post('/forgotpassword', authController.ForgotPassword);
router.put("/resetpassword/:resetToken", authController.resetPassword);


module.exports = router;