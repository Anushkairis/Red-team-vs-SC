import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const { userId } = useParams(); // Extract userId from URL params
  const [profile, setProfile] = useState({ name: '', team: '', email: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch the user's profile data
        const response = await axios.get(`http://localhost:5000/api/profile/${userId}`);
        console.log(response.data); // Debugging: Ensure data is being received
        setProfile(response.data);  // Update state with the profile data
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  return (
    <div>
      <h1>Welcome, {profile.name || 'Loading...'}</h1>
      <p>Team: {profile.team || 'Loading...'}</p>
      <p>Email: {profile.email || 'Loading...'}</p>
    </div>
  );
}

export default Profile;
