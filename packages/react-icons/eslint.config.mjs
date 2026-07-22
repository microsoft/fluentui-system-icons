// @ts-check
import { tseslint, griffelReact, dependencyChecks } from '../../eslint.config.base.mjs';

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
      'scripts/**',
      '*.js',
      '*.config.js',
    ],
  },
  ...tseslint.configs.recommended,
  griffelReact({
    '@griffel/no-shorthands': 'error',
    '@griffel/styles-file': 'error',
    // FIXME: replace with '@typescript-eslint/no-restricted-types' -> needs tseslint v8
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'JSX.IntrinsicElements': {
            message: '`JSX.IntrinsicElements` is not compatible with @types/react@>=19.',
          },
          'React.JSX.IntrinsicElements': {
            message: '`React.JSX.IntrinsicElements` is not backwards compatible with @types/react@17',
          },
          'JSX.Element': {
            message: '`JSX.Element` is not compatible with @types/react@>=19. Use `React.ReactElement` instead',
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
  }),
  dependencyChecks(),
);
