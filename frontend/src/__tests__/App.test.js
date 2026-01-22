import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import '@testing-library/jest-dom';
import App from '../App';

// Helper to render wrapped in act
const renderAct = (component) => {
  let result;
  act(() => {
    result = render(component);
  });
  return result;
};

test('renders App and navigates to home', () => {
  renderAct(<App />);
  expect(screen.getByText(/Welcome to My Website!/i)).toBeInTheDocument();
});

test('navigates to About page', () => {
  renderAct(<App />);
  const aboutLink = screen.getByRole('link', { name: /about/i });
  fireEvent.click(aboutLink);
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
});

test('navigates to Projects page', () => {
  renderAct(<App />);
  const projectsLink = screen.getByRole('link', { name: /projects/i });
  fireEvent.click(projectsLink);
  expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
});

test('navigates to Skills page', () => {
  renderAct(<App />);
  const skillsLink = screen.getByRole('link', { name: /skills/i });
  fireEvent.click(skillsLink);
  expect(screen.getByText(/My Skills/i)).toBeInTheDocument();
});

test('navigates to Resume page', () => {
  renderAct(<App />);
  const resumeLink = screen.getByRole('link', { name: /^Resume$/ });
  fireEvent.click(resumeLink);
  expect(screen.getByRole('heading', { level: 1, name: /resume/i })).toBeInTheDocument();
});

test('navigates to Contact page', () => {
  renderAct(<App />);
  const contactLink = screen.getByRole('link', { name: /contact/i });
  fireEvent.click(contactLink);
  expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
});