import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';

test('renders App and navigates to home', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to My Website!/i)).toBeInTheDocument();
});

test('navigates to About page', () => {
  render(<App />);
  const aboutLink = screen.getByRole('link', { name: /about/i });
  fireEvent.click(aboutLink);
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
});

test('navigates to Projects page', () => {
  render(<App />);
  const projectsLink = screen.getByRole('link', { name: /projects/i });
  fireEvent.click(projectsLink);
  expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
});

test('navigates to Skills page', () => {
  render(<App />);
  const skillsLink = screen.getByRole('link', { name: /skills/i });
  fireEvent.click(skillsLink);
  expect(screen.getByText(/My Skills/i)).toBeInTheDocument();
});

test('navigates to Resume page', () => {
  render(<App />);
  const resumeLink = screen.getByRole('link', { name: /^Resume$/ });
  fireEvent.click(resumeLink);
  expect(screen.getByRole('heading', { level: 1, name: /resume/i })).toBeInTheDocument();
});

test('navigates to Contact page', () => {
  render(<App />);
  const contactLink = screen.getByRole('link', { name: /contact/i });
  fireEvent.click(contactLink);
  expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
});