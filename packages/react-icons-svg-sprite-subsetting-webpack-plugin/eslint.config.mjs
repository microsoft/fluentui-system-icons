// @ts-check
import nxPlugin from '@nx/eslint-plugin';
import * as jsoncParser from 'jsonc-eslint-parser';

export default [
  {
    // Single version policy: enforce that runtime dependencies are declared with
    // versions matching the workspace root package.json. Test fixtures and build
    // scripts rely on tooling that lives in the workspace root.
    files: ['**/package.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { '@nx': nxPlugin },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/test/**/*',
            '{projectRoot}/scripts/**/*',
            '{projectRoot}/*.js',
            '{projectRoot}/*.config.{js,mjs,ts}',
          ],
          ignoredDependencies: ['html-webpack-plugin'],
        },
      ],
    },
  },
];
