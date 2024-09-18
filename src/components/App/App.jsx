import { useState } from 'react';
import Cell from '../Cell';

import './App.scss';
import ColorPicker from './ColorPicker';

function App() {
  // State
  const [userColor, setUserColor] = useState('#000000');

  // Functions

  // Handles user's color change
  function handleColorChange(e) {
    console.log(e.target.value);
    console.log('colorchange');
    setUserColor(e.target.value);
  }

  // Grid size in squares
  const gridSize = 50;
  // Making the grid
  const array = [];
  for (let i = 0; i < gridSize; i += 1) {
    const currentRow = [];
    for (let j = 0; j < gridSize; j += 1) {
      currentRow.push({ i });
    }
    array.push(currentRow);
  }
  // Rendering
  return (
    <div>
      <ColorPicker onChange={handleColorChange} />
      <div className="grid">
        {array.map((row, rowId) => {
          return (
            <div className="row" key={rowId}>
              {row.map((cell, cellId) => {
                return <Cell key={cellId} userColor={userColor} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
