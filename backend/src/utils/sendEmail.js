// src/utils/sendEmail.js

const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Example service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: options.email,
            subject: options.subject,
            text: options.message
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
};

module.exports = sendEmail;
