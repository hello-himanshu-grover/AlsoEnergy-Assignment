import { render, screen } from '@testing-library/react';
import App from './App';

test('check demo app rendered or not', () => {
  render(<App />);
  const text = screen.getByText(/demo app/i);
  expect(text).toBeInTheDocument();
});

test('at least one snippet loaded or not', () => {
  const { container } = render(<App />)
  expect(container.getElementsByClassName('snippet').length).toBe(1);
});
