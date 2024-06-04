import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Hi hello" text', () => {
  render(<App />);
  const hiHelloText = screen.getByText(/Hi hello/i);
  expect(hiHelloText).toBeInTheDocument();
});
