/// <reference types="vitest" />
import { defineConfig } from 'vite';
import path from 'path';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [viteTsconfigPaths()],
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
      exclude: ['node_modules/'],
    },
  },
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, './src'),
    },
  },
});
