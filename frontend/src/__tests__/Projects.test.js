import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../pages/Projects';

// Mock fetch
global.fetch = jest.fn();

test('renders Projects component and fetches data', async () => {
  const mockData = [
    { name: 'repo1', description: 'desc1', html_url: 'url1', language: 'JS', created_at: '2023-01-01' }
  ];
  fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve(mockData)
  });

  render(<Projects />);

  expect(screen.getByText(/My GitHub Projects/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('repo1')).toBeInTheDocument();
  });
});

test('shows error on fetch failure', async () => {
  fetch.mockRejectedValueOnce(new Error('Network error'));

  render(<Projects />);

  await waitFor(() => {
    expect(screen.getByText(/Failed to load projects/i)).toBeInTheDocument();
  });
});