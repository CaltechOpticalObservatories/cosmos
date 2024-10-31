// components/Guider/Guider.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Guider from './Guider';

describe('Guider Component', () => {
  beforeEach(() => {
    render(<Guider />);
  });

  test('renders correctly', () => {
    expect(screen.getByText(/telescope guider/i)).toBeInTheDocument();
    expect(screen.getByText(/current position: x: 0, y: 0/i)).toBeInTheDocument();
  });

  test('moves up', () => {
    fireEvent.click(screen.getByText(/up/i));
    expect(screen.getByText(/current position: x: 0, y: 1/i)).toBeInTheDocument();
  });

  test('moves down', () => {
    fireEvent.click(screen.getByText(/down/i));
    expect(screen.getByText(/current position: x: 0, y: -1/i)).toBeInTheDocument();
  });

  test('moves left', () => {
    fireEvent.click(screen.getByText(/left/i));
    expect(screen.getByText(/current position: x: -1, y: 0/i)).toBeInTheDocument();
  });

  test('moves right', () => {
    fireEvent.click(screen.getByText(/right/i));
    expect(screen.getByText(/current position: x: 1, y: 0/i)).toBeInTheDocument();
  });
});
