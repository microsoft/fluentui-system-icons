// @ts-check
import { tseslint, dependencyChecks } from '../../eslint.config.base.mjs';

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
  // `eslint` is an intentional peer (the plugin is loaded by ESLint, not imported);
  // `vitest` is test-only tooling that lives in the workspace root.
  dependencyChecks({ ignoredDependencies: ['eslint', 'vitest'] }),
);
