import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import './Team.css';

const TeamsPage = () => {
  const [redTeam, setRedTeam] = useState([]);
  const [blueTeam, setBlueTeam] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        const users = response.data;
        const redTeamUsers = users.filter(user => user.team === 'Red');
        const blueTeamUsers = users.filter(user => user.team === 'Blue');
        setRedTeam(redTeamUsers);
        setBlueTeam(blueTeamUsers);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className='team'>
      <h1 className='page-title'>Teams</h1>
      <Row className='team-row'>
        <Col className='team-col'>
          <h2>Red Team</h2>
          <table className='team-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {redTeam.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col className='team-col'>
          <h2>Blue Team</h2>
          <table className='team-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {blueTeam.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
};

export default TeamsPage;
