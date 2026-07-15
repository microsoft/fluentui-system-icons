import { createRequire } from 'node:module';

import type { TSESLint } from '@typescript-eslint/utils';

import { RULE_NAME as preferResizableName, rule as preferResizable } from './rules/prefer-resizable';

// Read name/version from package.json. A runtime `require` (relative to the built
// `lib/` output) is used instead of a static `import ... from '../package.json'`
// because the latter is outside tsc's `rootDir` and would break the flat `lib/`
// output layout.
const { name, version } = createRequire(__filename)('../package.json') as { name: string; version: string };

export const meta = {
  name,
  version,
};

export const rules = {
  [preferResizableName]: preferResizable,
};

const plugin = { meta, rules } as TSESLint.FlatConfig.Plugin;

export const configs: Record<string, TSESLint.FlatConfig.Config | TSESLint.ClassicConfig.Config> = {
  // Flat config (ESLint 9+, recommended).
  recommended: {
    name: '@fluentui/react-icons/recommended',
    plugins: {
      '@fluentui/react-icons': plugin,
    },
    rules: {
      [`@fluentui/react-icons/${preferResizableName}`]: 'warn',
    },
  } satisfies TSESLint.FlatConfig.Config,
  // Legacy config (ESLint 8 and below).
  'recommended-legacy': {
    plugins: ['@fluentui/react-icons'],
    rules: {
      [`@fluentui/react-icons/${preferResizableName}`]: 'warn',
    },
  } satisfies TSESLint.ClassicConfig.Config,
};
