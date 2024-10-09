import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { act } from 'react';

test('App', async () => {
  await act(async () => {
    render(<App />);
  });
  const title = await waitFor(() => screen.getByRole("heading",  { name: "Alkachof" }) );
  expect(title).toHaveTextContent("Alkachof");

}); 