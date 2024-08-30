import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [role] = useState('Player');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        team: selectedTeam,
        role,
      });

      if (response.status === 201) {
        alert('Signup successful!');
        navigate('/userdashboard');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again.');
    }
  };

  const handleTeamSelection = (team) => {
    setSelectedTeam(team);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!password) newErrors.password = 'Password is required';
    if (!repeatPassword) {
      newErrors.repeatPassword = 'Repeat Password is required';
    } else if (password !== repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
    }
    if (!selectedTeam) newErrors.selectedTeam = 'Team selection is required';

    if (Object.keys(newErrors).length === 0) {
      handleSignup(e);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <body className="signup-page">
        <form onSubmit={handleSubmit} className="container-form">
          <center>
            <h1>Create an account</h1>
            <p>Please fill in this form to create an account.</p>
          </center>
          <hr />
          <label htmlFor="name"><b>Name</b></label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email"><b>Email</b></label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            minLength="6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {errors.repeatPassword && <p className="error">{errors.repeatPassword}</p>}

          <label htmlFor="role"><b>Role</b></label>
          <input
            type="text"
            placeholder="Role (default: Player)"
            name="role"
            value={role}
            readOnly
          />

          <div className="team-selection">
            <p>Choose Team:</p>
            <button
              type="button"
              onClick={() => handleTeamSelection('Red')}
              className={selectedTeam === 'Red' ? 'selected' : ''}
            >
              Red
            </button>
            <button
              type="button"
              onClick={() => handleTeamSelection('Blue')}
              className={selectedTeam === 'Blue' ? 'selected' : ''}
            >
              Blue
            </button>
          </div>
          {errors.selectedTeam && <p className="error">{errors.selectedTeam}</p>}

          <center>
            <p>By creating an account you agree to our <Link to="#" style={{ color: "white" }}>Terms & Privacy</Link>.</p>
          </center>

          <div className="text-center">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </body>
    </div>
  );
}

export default Signup;
