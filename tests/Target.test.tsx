// components/Target.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Target } from '../components';

const starList = [
  {
    targetName: 'Sirius',
    ra: '06 45 08.9',
    dec: '-16 42 58.0',
    equinox: '2000.00',
  },
  {
    targetName: 'Canopus',
    ra: '06 23 57.1',
    dec: '-52 41 44.0',
    equinox: '2000.00',
  },
  {
    targetName: 'Arcturus',
    ra: '14 15 39.7',
    dec: '+19 10 56.7',
    equinox: '2000.00',
  },
  {
    targetName: 'Vega',
    ra: '18 36 56.3',
    dec: '+38 47 01.3',
    equinox: '2000.00',
  },
  {
    targetName: 'Capella',
    ra: '05 16 41.4',
    dec: '+45 59 52.0',
    equinox: '2000.00',
  },
  {
    targetName: 'Rigel',
    ra: '05 14 32.3',
    dec: '-08 12 06.7',
    equinox: '2000.00',
  },
  {
    targetName: 'Procyon',
    ra: '07 39 18.1',
    dec: '+05 13 29.6',
    equinox: '2000.00',
  },
  {
    targetName: 'Betelgeuse',
    ra: '05 55 10.3',
    dec: '+07 24 25.4',
    equinox: '2000.00',
  },
  {
    targetName: 'Aldebaran',
    ra: '04 35 55.2',
    dec: '+16 50 12.4',
    equinox: '2000.00',
  },
  {
    targetName: 'Antares',
    ra: '16 5 10.0',
    dec: '-26 25 55.0',
    equinox: '2000.00',
  },
];

describe('Target Component', () => {
  test('renders the star list correctly', () => {
    render(<Target starList={starList} />);

    // Check if the target names are in the document
    starList.forEach((star) => {
      expect(screen.getByText(star.targetName)).toBeInTheDocument();
      expect(screen.getByText(star.ra)).toBeInTheDocument();
      expect(screen.getByText(star.dec)).toBeInTheDocument();
    });
  });

  test('displays a message when no targets are provided', () => {
    render(<Target starList={[]} />);
    expect(screen.getByText('No star targets found.')).toBeInTheDocument();
  });
});
