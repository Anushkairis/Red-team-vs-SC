import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the user is an admin
    if (email === 'admin@gmail.com' && password === '123456') {
      // Redirect to AdminDashboard upon successful login
      alert('Admin login successful!');
      navigate('/admindashboard');
      return; // Ensure to exit after handling admin login
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', {
        email,
        password,
      });

      if (response.status === 200) {
        const { userId, name } = response.data;

        // Check the user ID and navigate accordingly
        if (userId) {
          navigate(`/userdashboard/${userId}`,{ state: { name } });
        } else {
          alert('User ID not found');
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} style={{ border: '1px solid #ccc' }}>
        <div className="wrapper">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <box-icon type="solid" name="user"></box-icon>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <box-icon type="solid" name="lock-alt"></box-icon>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgotpassword">Forgot password?</Link>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="remember-link">
            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
