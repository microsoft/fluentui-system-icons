// @ts-check
import tseslint from 'typescript-eslint';
import nxPlugin from '@nx/eslint-plugin';
import * as jsoncParser from 'jsonc-eslint-parser';

export default tseslint.config(
  {
    ignores: ['lib/', 'node_modules/', '*.js', '*.mjs'],
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    // Single version policy: enforce that runtime dependencies are declared with
    // versions matching the workspace root package.json.
    files: ['**/package.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { '@nx': nxPlugin },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/**/*.test.ts', '{projectRoot}/*.mjs'],
          // `eslint` is an intentional peer (the plugin is loaded by ESLint, not imported);
          // `vitest` is test-only tooling that lives in the workspace root.
          ignoredDependencies: ['eslint', 'vitest'],
        },
      ],
    },
  },
);
