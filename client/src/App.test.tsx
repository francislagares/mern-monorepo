import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Vite + React');
  });
});
