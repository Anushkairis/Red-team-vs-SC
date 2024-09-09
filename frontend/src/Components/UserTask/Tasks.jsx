import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tasks.css'; 
import QuizLogo from '../../assets/quiz.jpg'; 
import CodeLogo from '../../assets/coding.jpg';
import TutorialLogo from '../../assets/tutorials.webp';

const Tasks = () => {
  return (
   <body className='bg'><h2><b><u>Welcome to tasks!!</u></b></h2>
     <div className="card-con">
       <Row className="justify-content-center">
         <Col md={6} lg={4} className="mb-4">
           <Card className='cc' style={{ width: '18rem', height: 'auto' }}>
             <Card.Img variant="top" src={CodeLogo} alt="Code Logo" className="card-img" />
             <Card.Body>
               <Card.Title>Secure Coding Practice</Card.Title>
                <Link to="/editor">
                  <Button variant="primary">GO</Button>
                </Link>
             </Card.Body>
           </Card>
         </Col>
      
         <Col md={6} lg={4} className="mb-4">
           <Card className='cc' style={{ width: '18rem', height: 'auto' }}>
             <Card.Img variant="top" src={QuizLogo} alt="Quiz Logo" className="card-img" />
             <Card.Body>
               <Card.Title>Quiz</Card.Title>
                <Link to="/quizpage">
                 <Button variant="primary">GO</Button>
               </Link>
             </Card.Body>
           </Card>
         </Col>
      
         <Col md={6} lg={4} className="mb-4">
           <Card className='c' style={{ width: '18rem', height: 'auto' }}>
             <Card.Img variant="top" src={TutorialLogo} alt="Tutorial Logo" className="card-img" />
             <Card.Body>
               <Card.Title>Tutorials</Card.Title>
                 <Link to="/tutorials">
                   <Button variant="primary">GO</Button>
                 </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
           <Card className='c' style={{ width: '18rem', height: 'auto' }}>
             <Card.Img variant="top" src={TutorialLogo} alt="Tutorial Logo" className="card-img" />
             <Card.Body>
               <Card.Title>Course</Card.Title>
                 <Link to="/overview">
                   <Button variant="primary">GO</Button>
                 </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
   </body>
  );
};

export default Tasks;
