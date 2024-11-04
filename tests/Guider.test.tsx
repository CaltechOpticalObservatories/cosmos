// components/Guider/Guider.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Guider } from '../components';

describe('Guider Component', () => {
  beforeEach(() => {
    render(<Guider />);
  });

  test('renders correctly with initial position', () => {
    expect(screen.getByText(/current position: x: 0, y: 0/i)).toBeInTheDocument();
  });

  test('moves telescope up', () => {
    const upButton = screen.getByText(/up/i);
    fireEvent.click(upButton);
    expect(screen.getByText(/current position: x: 0, y: 1/i)).toBeInTheDocument();
  });

  test('moves telescope down', () => {
    const downButton = screen.getByText(/down/i);
    fireEvent.click(downButton);
    expect(screen.getByText(/current position: x: 0, y: -1/i)).toBeInTheDocument();
  });

  test('moves telescope left', () => {
    const leftButton = screen.getByText(/left/i);
    fireEvent.click(leftButton);
    expect(screen.getByText(/current position: x: -1, y: 0/i)).toBeInTheDocument();
  });

  test('moves telescope right', () => {
    const rightButton = screen.getByText(/right/i);
    fireEvent.click(rightButton);
    expect(screen.getByText(/current position: x: 1, y: 0/i)).toBeInTheDocument();
  });
});