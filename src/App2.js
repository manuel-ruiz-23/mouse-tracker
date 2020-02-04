import React, { useState } from 'react';
import styled from 'styled-components';

const Cat = ({ position }) => (
    <div
      style={{
        height: 16,
        width: 16,
        backgroundColor: 'red',
        position: 'absolute',
        left: position.x,
        top: position.y,
      }}
    >Cat</div>
);

const Mouse = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  function handleMouseMove(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
      <div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
        {children(position)}
      </div>
  )
}

function App() {

  return (
    <AppContainer>
      <h1>Move the mouse around!</h1>
      <Mouse>
        {position => (
          <Cat position={position}/>
        )}
      </Mouse>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 95vh;
  background-color: lightgray;
`;

export default App;