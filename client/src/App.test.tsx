import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';

import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent('Vite + React');

    // screen.debug();
  });
});
