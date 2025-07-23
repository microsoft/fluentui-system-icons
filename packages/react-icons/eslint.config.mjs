// @ts-check
import tseslint from 'typescript-eslint';
import griffelPlugin from '@griffel/eslint-plugin';

export default tseslint.config(
  {
    ignores: [
       // generated assets
      'lib/',
      'lib-cjs/',
      'intermediate/',
      'src/icons/',
      'src/sizedIcons/',
      'src/fonts/',
      'node_modules/',
      // build scripts and configs
      '*.js',
      '*.config.js',
      'build.js',
      'convert.js',
      'convert-font.js',
    ],
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@griffel': griffelPlugin,
    },
    rules: {
      '@griffel/no-shorthands': 'error',
      '@griffel/styles-file': 'error',
    },
  },
);
