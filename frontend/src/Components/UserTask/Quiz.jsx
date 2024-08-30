import React from 'react';
import './QuizPage.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import QuizLogo from '../../assets/quiz.jpg';

const quizzes = [
  {
    topic: 'Python',
    level: 'Beginner',
    totalQuestions: 21,
    perQuestionScore: 2,
    link: '/quiz/python',
  },
  {
    topic: 'Linux',
    level: 'Beginner',
    totalQuestions: 20,
    perQuestionScore: 5,
    link: '/quiz/linux',
  },
  {
    topic: 'Operating Systems',
    level: 'Advanced',
    totalQuestions: 15,
    perQuestionScore: 10,
    link: '/quiz/os',
  },
  {
    topic: 'Cyber Security',
    level: 'Beginner',
    totalQuestions: 21,
    perQuestionScore: 2,
    link: '',
  },
  {
    topic: 'C Programming',
    level: 'Beginner',
    totalQuestions: 30,
    perQuestionScore: 5,
    link: '/quiz/c',
  },
  {
    topic: 'nAME',
    level: 'Beginner',
    totalQuestions: 21,
    perQuestionScore: 2,
    link: '',
  },
];

function QuizPage() {
  return (
    <div className="quiz-page">
      <Container className="quiz-cards-container">
        <Row>
          {quizzes.map((quiz, index) => {
            const totalScore = quiz.totalQuestions * quiz.perQuestionScore;

            return (
              <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                <Card className="quiz-card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={QuizLogo} alt="Quiz Logo" className="card-img" />
                  <Card.Body>
                    <Card.Title>{quiz.topic}</Card.Title>
                    <Card.Text>Level: {quiz.level}</Card.Text>
                    <Card.Text>Total Score: {totalScore}</Card.Text>
                    {quiz.link ? (
                      <Link to={quiz.link}>
                        <Button variant="success" className="play-button">
                          Play
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="secondary" className="play-button" disabled>
                        Unavailable
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default QuizPage;
