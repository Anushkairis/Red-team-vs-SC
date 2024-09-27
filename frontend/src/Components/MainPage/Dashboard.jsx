import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Slide } from 'react-slideshow-image';
import TournamentLogo from '../../assets/TournamentLogo_v19.png';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';

const tournaments = [
  { name: 'Tournament 1', date: '2024-08-01', registerLink: '#' },
  { name: 'Tournament 2', date: '2024-08-15', registerLink: '#' },
  { name: 'Tournament 3', date: '2024-09-01', registerLink: '#' },
  { name: 'Tournament 4', date: '2024-09-11', registerLink: '#' },
];

const slides = [
  'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  'https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
];

const SlideShow = () => (
  <Slide autoplay transitionDuration={500} arrows={false}>
    {slides.map((slideImage, index) => (
      <div className="each-slide-effect" key={index}>
        <button className="nav-button left"></button>
        <div style={{ backgroundImage: `url(${slideImage})` }}>
          <span>Slide {index + 1}</span>  
        </div>
        <button className="nav-button right"></button>
      </div>
    ))}
  </Slide>
);

const TournamentCard = ({ name, date, registerLink }) => (
  <Card style={{ width: '20rem', height: 'auto', margin: '0 10px' }}>
    <Card.Img variant="top" src={TournamentLogo} alt="Tournament Logo" />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{name}</Card.Title>
      <Card.Text>Start Date: {date}</Card.Text>
      <Button variant="primary" href={registerLink}>
        REGISTER
      </Button>
    </Card.Body>
  </Card>
);

const Dashboard = () => {
 // Use location to access passed state (name)
 const location = useLocation();
 const { name } = location.state || { name: 'User' }; // Default to 'User' if name is not provided

  return (
    <div className="dashboard-container">
       <h1><h1>
       Welcome {name}!
      </h1></h1> 
     
      <br />
      <SlideShow />
      <br />
      <h3>Tournaments scheduled</h3>
      <Row className="mt-4 justify-content-center" style={{ marginLeft: '225px' }}>
        {tournaments.map((tournament, index) => (
          <Col key={index} xs={12} md={3} className="mb-4 d-flex justify-content-center">
            <TournamentCard {...tournament} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
