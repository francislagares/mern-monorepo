/// <reference types="vitest" />
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
  },
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', ...coverageConfigDefaults.exclude],
    },
  },
  resolve: {
    alias: {
      '@/*': path.resolve(__dirname, './src'),
    },
  },
});
