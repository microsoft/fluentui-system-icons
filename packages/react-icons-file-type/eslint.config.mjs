// @ts-check
import { tseslint, griffel, reactHooks, dependencyChecks } from '../../eslint.config.base.mjs';

export default tseslint.config(
  {
    ignores: ['lib/', 'lib-cjs/', 'node_modules/', 'scripts/**', '*.js', '*.config.js'],
  },
  ...tseslint.configs.recommended,
  griffel({
    '@griffel/no-shorthands': 'error',
    '@griffel/styles-file': 'error',
  }),
  reactHooks,
  {
    files: ['**/*.test.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  dependencyChecks({ ignoredDependencies: ['@types/react'] }),
);
