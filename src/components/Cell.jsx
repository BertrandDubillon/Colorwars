import { useState } from 'react';

const Cell = ({ handle, userColor }) => {
  const [color, setColor] = useState('#24a6e2');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <button
      className="cell"
      style={{ backgroundColor: color }}
      onClick={() => changeColor(userColor)}
      type="button"
    >
      <div></div>
    </button>
  );
};

export default Cell;
