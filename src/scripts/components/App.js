import React from 'react';
import GameBoard from './GameBoard';
import GameControl from './GameControls';

const App = () => {
  return(
    <div className="container">
      <GameBoard/>
      <GameControl />
    </div>
  );
}

export default App;
