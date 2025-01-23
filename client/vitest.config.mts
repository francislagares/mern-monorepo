/// <reference types="vitest" />
import path from 'path';

import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgrPlugin()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // you can replace this port with any port
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/tests/utils/test-environment.ts'],
    include: ['./src/**/*.{spec,test}.{ts,tsx}'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        '.next/',
        '.storybook/',
        'public/',
        'prisma/',
        '**/stories/*.{js,ts,mjs,mts,tsx}',
        '**/*.{config,stories}.{js,ts,mjs,mts,tsx}',
        ...coverageConfigDefaults.exclude
      ],
    },
  },
  resolve: {
    alias: {
      '@/*': path.resolve(__dirname, './src'),
    },
  },
});
