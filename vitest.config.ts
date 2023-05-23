import { defineConfig } from 'vite';
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
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/'],
    },
  },
});
