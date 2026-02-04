import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./test-setup.js'],
  },
  plugins: [
    {
      name: 'mock-fonts',
      resolveId(id) {
        if (id.match(/\.(ttf|woff|woff2)$/)) {
          return id;
        }
      },
      load(id) {
        if (id.match(/\.(ttf|woff|woff2)$/)) {
          return 'export default "test-font-file"';
        }
      },
    },
  ],
});
