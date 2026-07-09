import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders copyright notice', () => {
  render(<App />, { wrapper: MemoryRouter });
  const copyrightElement = screen.getByText(/all rights reserved/i);
  expect(copyrightElement).toBeInTheDocument();
});
