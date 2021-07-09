import React from 'react';
import Header from './Header';
import PubControl from './PubControl'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header/>
        <Row className="justify-content-md-center">
          <Col sm={8}>
        <PubControl/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
