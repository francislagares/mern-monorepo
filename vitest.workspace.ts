import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  'server/vitest.config.ts',
  'client/vitest.config.ts',
  {
    extends: './vitest.config.ts',
    test: {
      include: ['tests/**/*.test.{ts,tsx}'],
    },
  },
]);
