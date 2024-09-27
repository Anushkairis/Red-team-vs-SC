import React, { useState } from 'react';
import axios from 'axios';

import { Modal, Button, Row, Col, Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizLogo from '../../assets/quiz.jpg';
import './VideoPage.css';

const initialVideos = [
  {
    topic: 'Python',
    score: 90,
    link: 'https://www.youtube.com/watch?v=90RLzVUuXe4', // Use standard YouTube URL
    image: QuizLogo,
  },
  {
    topic: 'Linux',
    score: 85,
    link: 'https://www.youtube.com/watch?v=sJr56wZ4NVc',
    image: QuizLogo,
  },
  {
    topic: 'Operating Systems',
    score: 88,
    link: 'https://www.youtube.com/watch?v=TJkXWElm2e4',
    image: QuizLogo,
  },
  {
    topic: 'JavaScript',
    score: 95,
    link: 'https://www.youtube.com/watch?v=7c34Z3vWjE0',
    image: QuizLogo,
  },
  {
    topic: 'React',
    score: 92,
    link: 'https://www.youtube.com/watch?v=dGcsHMXbSOA',
    image: QuizLogo,
  },
];

function Tutorials() {
  const [videos, setVideos] = useState(initialVideos);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [completedVideos, setCompletedVideos] = useState([]);

  const handlePlayClick = (video) => {
    if (!video.completed) {
      setSelectedVideo(video.link);
      markVideoAsCompleted(video);
    }
  };

  const handleClose = () => {
    setSelectedVideo(null);
    setShowMessage(false);
  };

  const markVideoAsCompleted = (video) => {
    const updatedVideos = videos.map(v =>
      v.link === video.link ? { ...v, progress: 100, completed: true } : v
    );
    setVideos(updatedVideos);
    setCompletedVideos([...completedVideos, video.link]);
    saveVideoToDB({ ...video, progress: 100, completed: true });
  };

  const saveVideoToDB = (videoData) => {
    axios.post('http://localhost:5000/api/videos', videoData)
      .then((response) => {
        console.log('Video updated:', response.data);
      })
      .catch((error) => {
        console.error('There was an error saving the video!', error);
      });
  };

  return (
    <body className="video-container">
      <Row>
        {videos.map((video, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="video-card" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={video.image} alt={`${video.topic} Logo`} className="card-img" />
              <Card.Body>
                <Card.Title>{video.topic}</Card.Title>
                <Card.Text>Score: {video.score}</Card.Text>
                <Button
                  variant="success"
                  className="play-button"
                  onClick={() => handlePlayClick(video)}
                  disabled={video.completed}
                >
                  {video.completed ? 'Completed' : 'Play'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={!!selectedVideo} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedVideo && (
            <ReactPlayer
              url={selectedVideo}
              width="100%"
              height="400px"
              onEnded={() => setShowMessage(true)}
              controls
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showMessage} onHide={() => setShowMessage(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Video Completed!</p>
          <p>Score: {videos.find(v => v.link === selectedVideo)?.score || 'N/A'}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowMessage(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </body>
  );
}

export default Tutorials;
