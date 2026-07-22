// @ts-check
import tseslint from 'typescript-eslint';
import griffelPlugin from '@griffel/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nxPlugin from '@nx/eslint-plugin';
import * as jsoncParser from 'jsonc-eslint-parser';

/**
 * Files excluded from `@nx/dependency-checks` analysis by default. Build scripts,
 * tests and configs rely on tooling that lives in the workspace root package.json,
 * so they must not count towards a package's shipped runtime dependencies.
 */
const DEFAULT_DEPENDENCY_CHECK_IGNORED_FILES = [
  '{projectRoot}/scripts/**/*',
  '{projectRoot}/test/**/*',
  '{projectRoot}/*.js',
  '{projectRoot}/*.mjs',
  '{projectRoot}/*.config.{js,mjs,ts}',
  '{projectRoot}/**/*.test.{js,ts,tsx}',
  '{projectRoot}/**/*.spec.{js,ts,tsx}',
  '{projectRoot}/vitest.config.{js,ts}',
  '{projectRoot}/eslint.config.mjs',
];

/**
 * Single version policy gate: validates that a publishable package declares the
 * runtime dependencies it imports, with versions matching the workspace root
 * package.json. `ignoredFiles` and `ignoredDependencies` are merged with the
 * shared defaults (`tslib` is always ignored — it is injected by `importHelpers`).
 *
 * @param {{ ignoredFiles?: string[], ignoredDependencies?: string[] }} [options]
 * @returns {import('typescript-eslint').ConfigWithExtends}
 */
export function dependencyChecks({ ignoredFiles = [], ignoredDependencies = [] } = {}) {
  return {
    files: ['**/package.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { '@nx': nxPlugin },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [...DEFAULT_DEPENDENCY_CHECK_IGNORED_FILES, ...ignoredFiles],
          ignoredDependencies: ['tslib', ...ignoredDependencies],
        },
      ],
    },
  };
}

/**
 * Shared Griffel + React hooks rules applied to TypeScript/TSX source. Extra
 * rules are merged on top of the shared `react-hooks` baseline.
 *
 * @param {import('eslint').Linter.RulesRecord} [rules]
 * @returns {import('typescript-eslint').ConfigWithExtends}
 */
export function griffelReact(rules = {}) {
  return {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@griffel': griffelPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      ...rules,
    },
  };
}

export { tseslint };
