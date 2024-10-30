// components/Guider/Guider.tsx
import { useState } from 'react';
import styles from './Guider.module.css';

const Guider = () => {
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
    <div className={styles.guider}>
      <h2>Telescope Guider</h2>
      <div className={styles.controls}>
        <button onClick={() => moveTelescope('up')}>Up</button>
        <button onClick={() => moveTelescope('down')}>Down</button>
        <button onClick={() => moveTelescope('left')}>Left</button>
        <button onClick={() => moveTelescope('right')}>Right</button>
      </div>
      <div className={styles.position}>
        <p>Current Position: X: {position.x}, Y: {position.y}</p>
      </div>
    </div>
  );
};

export default Guider;

