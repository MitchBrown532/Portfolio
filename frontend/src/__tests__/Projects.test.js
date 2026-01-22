import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react';
import Projects from '../pages/Projects';

// Mock fetch
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

// Suppress expected console.error logs from the component during tests
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});
afterAll(() => {
  console.error.mockRestore();
});

test('renders Projects component and fetches data', async () => {
  const mockData = [
    { name: 'repo1', description: 'desc1', html_url: 'url1', language: 'JS', created_at: '2023-01-01' }
  ];
  fetch.mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve(mockData)
  });

  act(() => {
    render(<Projects />);
  });

  expect(screen.getByText(/My GitHub Projects/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('repo1')).toBeInTheDocument();
  });
});

test('shows error on fetch failure', async () => {
  fetch.mockRejectedValueOnce(new Error('Network error'));

  act(() => {
    render(<Projects />);
  });

  await waitFor(() => {
    expect(screen.getByText(/Failed to load projects/i)).toBeInTheDocument();
  });
});