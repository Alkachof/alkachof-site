import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { act } from 'react';

test('App Component Test - Example', async () => {
  await act(async () => {
    render(<App />);
  });
  const linkElement = await waitFor(() => screen.getByText(/Alkachof/i));
  expect(linkElement).toBeInTheDocument();
});