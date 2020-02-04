import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <AppContainer onMouseMove={handleMouseMove}>
      <h1>Move the mouse around!</h1>
      <p>The current mouse position is ({position.x}, {position.y})</p>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 95vh;
  background-color: lightgray;
`;

export default App;
