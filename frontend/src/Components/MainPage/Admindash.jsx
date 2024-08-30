import React from 'react';
// import { Card, Row, Col, Table, CardBody, CardTitle, CardText } from 'react-bootstrap';
// import { FaMedal } from 'react-icons/fa';
// import backgroundImage from '../../assets/red.jpg';
// import bgImg from '../../assets/blue.jpg';
import "./Admindash.css";

const Admindashboard = () => {
  // const data = {
  //   labels: ['Tournament 1', 'Tournament 2', 'Tournament 3', 'Tournament 4'],
  //   datasets: [
  //     {
  //       label: '# of Players',
  //       data: [120, 190, 30, 90],
  //       backgroundColor: 'rgba(0, 0, 0, 1)',
  //       borderColor: 'rgba(0, 0, 0, 1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const playerData = [
  //   { name: 'Alice', profilePic: 'url-to-profile-pic', score: 100, rank: 'First' },
  //   { name: 'Bob', profilePic: 'url-to-profile-pic', score: 90, rank: 'Second' },
  //   { name: 'Charlie', profilePic: 'url-to-profile-pic', score: 80, rank: 'Third' },
  // ];

 
 

  return (
    <div className="dashboard">
      <h1>Welcome Admin!!</h1>
      <br />
      <br />
      {/* <Row>
        <Col>
          <Card style={{ width: '18rem', height: '150px', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <CardBody style={{ color: 'white' }}>
              <CardTitle>Red Team</CardTitle>
              <CardText>236 players</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '150px', backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}>
            <CardBody style={{ color: 'white' }}>
              <CardTitle>Blue Team</CardTitle>
              <CardText>569 players</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt">
        <Col md={6}>
          <Card>
            <h3>Top Performers</h3>
            <CardBody>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th colSpan="4" className="text-center">Game 1</th>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <th>Profile Picture</th>
                    <th>Score</th>
                    <th>Rank</th>
                  </tr>
                </thead>
                <tbody>
                  {playerData.map((player, index) => (
                    <tr key={index}>
                      <td>{player.name}</td>
                      <td>
                        <img
                          src={player.profilePic}
                          alt={player.name}
                          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                        />
                      </td>
                      <td>{player.score}</td>
                      <td>
                        <FaMedal color="gold" size="1.5em" /> {player.rank}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card className='mt-0'>
            <h3>Most Played Tournaments</h3>
            <CardBody>
              <Table striped bordered hover className='gt'>
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Name</th>
                    <th>Views</th>
                  </tr>
                </thead>
                <tbody>
                  {gameData.map((game, index) => (
                    <tr key={index}>
                      <td>{game.sl}</td>
                      <td>{game.name}</td>
                      <td>{game.views}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <br />

      {/* <h3><b><u>Game Analysis</u></b></h3>

      <Row className='bar' style={{ marginLeft: '456.36px' }}>
        <Col>
          <div>
            <Bar data={data} />
          </div>
        </Col>
      </Row>  */}
    </div>
  );
}

export default Admindashboard;
