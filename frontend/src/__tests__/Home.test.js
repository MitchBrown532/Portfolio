import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from '../pages/Home';

// Helper to render with router using React.act
const renderWithRouter = (component) => {
  let result;
  act(() => {
    result = render(<BrowserRouter>{component}</BrowserRouter>);
  });
  return result;
};

test('renders Home component with title and description', () => {
  renderWithRouter(<Home />);
  expect(screen.getByText(/Welcome to My Website!/i)).toBeInTheDocument();
  expect(screen.getByText(/Mitchell Brown/i)).toBeInTheDocument();
});

test('renders home cards', () => {
  renderWithRouter(<Home />);
  expect(screen.getByRole('heading', { level: 3, name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /skills/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /projects/i })).toBeInTheDocument();
});