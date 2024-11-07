// components/Guider/Guider.tsx
import { useState } from 'react';
import styles from './Guider.module.css';

export const Guider = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveTelescope = (direction: 'up' | 'down' | 'left' | 'right') => {
    setPosition((prev) => {
      switch (direction) {
        case 'up':
          return { ...prev, y: prev.y + 1 };
        case 'down':
          return { ...prev, y: prev.y - 1 };
        case 'left':
          return { ...prev, x: prev.x - 1 };
        case 'right':
          return { ...prev, x: prev.x + 1 };
        default:
          return prev;
      }
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Telescope Guider</h2>
      <div className="d-flex flex-column align-items-center mb-4">
        {/* Control Buttons */}
        <div className="btn-group mb-3">
          <button
            className="btn btn-primary"
            onClick={() => moveTelescope('up')}
          >
            Up
          </button>
        </div>
        <div className="btn-group mb-3">
          <button
            className="btn btn-primary"
            onClick={() => moveTelescope('left')}
          >
            Left
          </button>
          <button
            className="btn btn-primary"
            onClick={() => moveTelescope('right')}
          >
            Right
          </button>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-primary"
            onClick={() => moveTelescope('down')}
          >
            Down
          </button>
        </div>
      </div>

      {/* Position Info */}
      <div className="alert alert-info">
        <p>Current Position: X: {position.x}, Y: {position.y}</p>
      </div>
    </div>
  );
};
