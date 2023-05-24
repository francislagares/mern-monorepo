import { defineConfig } from 'vitest/config';
import path from 'path';
/// <reference types="vitest" />
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [viteTsconfigPaths()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // you can replace this port with any port
  },
  test: {
    name: 'api',
    globals: true,
    environment: 'node',
  },
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, './src'),
    },
  },
});
