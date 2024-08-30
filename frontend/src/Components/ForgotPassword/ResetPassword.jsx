import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const ResetPassword = () => {
    const { resetToken } = useParams(); // Extract token from URL
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/auth/resetpassword/${resetToken}`, { password, otp });
            setMessage('Password has been reset successfully');
        } catch (error) {
            setMessage('Error resetting password. Ensure OTP and token are valid.');
        }
    };

    return (
        <div>
            <h2>Reset Your Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="otp">OTP:</label>
                    <input
                        type="text"
                        id="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">New Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;