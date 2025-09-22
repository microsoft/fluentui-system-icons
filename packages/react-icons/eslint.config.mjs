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
      // FIXME: replace with '@typescript-eslint/no-restricted-types' -> needs tseslint v8
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            'JSX.IntrinsicElements': {
              message:
                '`JSX.IntrinsicElements` is not compatible with @types/react@>=19.'
            },
            'React.JSX.IntrinsicElements': {
              message:
                '`React.JSX.IntrinsicElements` is not backwards compatible with @types/react@17'
            },
            'JSX.Element': {
              message:
                '`JSX.Element` is not compatible with @types/react@>=19. Use `React.ReactElement` instead',
              fixWith: 'React.ReactElement',
            },
            'React.JSX.Element': {
              message:
                '`React.JSX.Element` is not backwards compatible with @types/react@17. Use `React.ReactElement` instead',
              fixWith: 'React.ReactElement',
            },
          },
        },
      ],
    },
  },
);
