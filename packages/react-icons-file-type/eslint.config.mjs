// @ts-check
import tseslint from 'typescript-eslint';
import griffelPlugin from '@griffel/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nxPlugin from '@nx/eslint-plugin';
import * as jsoncParser from 'jsonc-eslint-parser';

export default tseslint.config(
  {
    ignores: ['lib/', 'lib-cjs/', 'node_modules/', 'scripts/**', '*.js', '*.config.js'],
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@griffel': griffelPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      '@griffel/no-shorthands': 'error',
      '@griffel/styles-file': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
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
          ignoredFiles: [
            '{projectRoot}/scripts/**/*',
            '{projectRoot}/*.js',
            '{projectRoot}/*.config.{js,mjs,ts}',
            '{projectRoot}/**/*.test.{js,ts,tsx}',
            '{projectRoot}/**/*.spec.{js,ts,tsx}',
            '{projectRoot}/vitest.config.{js,ts}',
            '{projectRoot}/eslint.config.mjs',
          ],
          ignoredDependencies: ['tslib', '@types/react'],
        },
      ],
    },
  },
);
