import React from 'react';
import Header from './Header';
import PubControl from './PubControl'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header/>
        <PubControl/>
      </Container>
    </React.Fragment>
  );
}

export default App;
