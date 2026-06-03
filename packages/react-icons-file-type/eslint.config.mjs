// @ts-check
import tseslint from 'typescript-eslint';
import griffelPlugin from '@griffel/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

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
);
