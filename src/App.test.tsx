import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('./components/Mapbox', () => ({
  Mapbox: () => <div>Map Mock</div>,
  default: () => <div>Map Mock</div>
}));

test('renders dashboard content', () => {
  render(<App />);
  expect(screen.getAllByText('Chart')).toHaveLength(2);
  expect(screen.getByText('Map Mock')).toBeInTheDocument();
});
