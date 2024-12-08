import { render, screen, fireEvent } from '@testing-library/react';
import MyButton from './MyButton';

test('renders button', () => {
  render(<MyButton />);
  const button = screen.getByText(/click me/i);
  expect(button).toBeInTheDocument();
});


test('initial text rendered', () => {
  render(<MyButton />);
  const initialText = screen.getByText(/welcome/i);
  expect(initialText).toBeInTheDocument();
});

test('clicks the button and updates the text', () => {
  render(<MyButton />);

  const button = screen.getByText(/click me/i);

  // Simulate a button click
  fireEvent.click(button);

  expect(screen.getByText('Chris')).toBeInTheDocument();
});