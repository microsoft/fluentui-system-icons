import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@fluentui/react-icons-file-type': fileURLToPath(
        new URL('../react-icons-file-type/src/index.ts', import.meta.url),
      ),
    },
  },
  test: {
    environment: 'jsdom',
  },
});
