import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    pool: 'forks',
    coverage: {
      provider: 'v8',
      reporter: ['html'],
      reportsDirectory: './coverage/',
    },
  },
});
