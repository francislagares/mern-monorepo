/// <reference types="vitest" />
import path from 'path';

import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineProject } from 'vitest/config';

export default defineProject({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // you can replace this port with any port
  },
  test: {
    name: 'client',
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, './src'),
    },
  },
});
