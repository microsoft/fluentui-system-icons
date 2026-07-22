// @ts-check
import nxPlugin from '@nx/eslint-plugin';
import * as jsoncParser from 'jsonc-eslint-parser';

export default [
  {
    // Single version policy: enforce that runtime dependencies are declared with
    // versions matching the workspace root package.json. Build tooling lives in
    // the workspace root, so only shipped library source is analyzed.
    files: ['**/package.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { '@nx': nxPlugin },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/*.js',
            '{projectRoot}/*.config.{js,mjs,ts}',
            '{projectRoot}/**/*.test.{js,ts,tsx}',
          ],
          ignoredDependencies: ['tslib', '@types/react-native'],
        },
      ],
    },
  },
];
