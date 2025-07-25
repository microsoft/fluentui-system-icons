// @ts-check
import tseslint from 'typescript-eslint';
import griffelPlugin from '@griffel/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

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
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      '@griffel/no-shorthands': 'error',
      '@griffel/styles-file': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
);
