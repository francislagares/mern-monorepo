import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  'api/vitest.config.mts',
  'client/vitest.config.mts',
  {
    extends: './vitest.config.mts',
    test: {
      include: ['tests/**/*.test.{ts,tsx}'],
    },
  },
]);
