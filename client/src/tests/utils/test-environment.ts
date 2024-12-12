import '@testing-library/jest-dom/vitest';
import { afterEach } from 'node:test';

import { cleanup } from '@testing-library/react';
import { beforeAll, vi } from 'vitest';

// mocking methods which are not implemented in JSDOM
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

// runs a cleanup after each test case (e.g. clearing jsdom || happy-dom)
afterEach(() => {
  cleanup();
});
