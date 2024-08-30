import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CardContent } from "@mui/material";
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/forgotpassword', { email });

            // Assuming the backend returns a success message upon successful email sending
            setMessage(response.data || 'Password reset link sent to your email');
            setError('');
        } catch (err) {
            console.error(err); // Log the error for debugging

            // Handling different types of errors that might occur
            if (err.response && err.response.status === 404) {
                setError('User not found');
            } else if (err.response && err.response.status === 500) {
                setError('Server error. Please try again later.');
            } else {
                setError('Error sending password reset email');
            }
            setMessage('');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Card sx={{ boxShadow: "4" }}>
                    <CardContent sx={{ m: 3 }}>
                        <Avatar sx={{ m: "auto", bgcolor: "primary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
                            Forgot Password
                        </Typography>

                        {/* Attach the onSubmit handler to the form element */}
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Send Link
                            </Button>
                            {message && <Typography color="success.main">{message}</Typography>}
                            {error && <Typography color="error.main">{error}</Typography>}
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default ForgotPassword;
