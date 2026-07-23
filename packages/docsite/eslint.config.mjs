// @ts-check
import { tseslint, griffel, reactHooks } from '../../eslint.config.base.mjs';

export default tseslint.config(
  {
    ignores: [
      // generated output
      'storybook-static/',
      'public/',
      'node_modules/',
      // build scripts and configs
      '*.js',
      '*.config.js',
    ],
  },
  ...tseslint.configs.recommended,
  griffel({
    // Griffel supports CSS shorthands natively — disallow the deprecated `shorthands.*` helper.
    '@griffel/no-deprecated-shorthands': 'error',
    // Complementary safety-net for the few border-group/`all` shorthands Griffel can't atomically expand.
    '@griffel/no-shorthands': 'error',
    '@griffel/no-invalid-shorthand-argument': 'error',
    '@griffel/hook-naming': 'error',
    '@griffel/pseudo-element-naming': 'error',
  }),
  reactHooks,
);
