import React from 'react';
import styles from './Target.module.css';

interface TargetProps {
  starList: ParsedTarget[]; // Change from string to an array of ParsedTarget
}

interface ParsedTarget {
  targetName: string;
  ra: string;
  dec: string;
  equinox: string;
  optionalFields?: { [key: string]: string }; // Optional fields
}

export const Target: React.FC<TargetProps> = ({ starList }) => {
  // You can assume starList is already parsed and valid JSON
  if (!starList || starList.length === 0) {
    return <div className={styles.container}>No star targets found.</div>;
  }

  return (
    <div className={styles.container}>
      <h2>Star Targets</h2>
      <table className={styles.targetTable}>
        <thead>
          <tr>
            <th>Target Name</th>
            <th>RA</th>
            <th>Dec</th>
            <th>Equinox</th>
          </tr>
        </thead>
        <tbody>
          {starList.map((target) => (
            <tr key={target.targetName}>
              <td>{target.targetName}</td>
              <td>{target.ra}</td>
              <td>{target.dec}</td>
              <td>{target.equinox}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
