import type { TSESLint } from '@typescript-eslint/utils';
import { rules } from './rules';

const meta = {
  name: '@fluentui/eslint-plugin-react-icons',
  version: '0.0.0',
} as const;

/**
 * ESLint plugin for `@fluentui/react-icons`.
 *
 * No rules are shipped yet. Rules will be registered in `src/rules/index.ts`
 * and surfaced through the `recommended` config below.
 */
const plugin = {
  meta,
  rules,
  configs: {} as Record<string, TSESLint.FlatConfig.Config | TSESLint.ClassicConfig.Config>,
};

// Flat config (ESLint 9+, recommended).
plugin.configs.recommended = {
  name: '@fluentui/react-icons/recommended',
  plugins: {
    '@fluentui/react-icons': plugin,
  },
  rules: {},
} satisfies TSESLint.FlatConfig.Config;

// Legacy config (ESLint 8 and below).
plugin.configs['recommended-legacy'] = {
  plugins: ['@fluentui/react-icons'],
  rules: {},
} satisfies TSESLint.ClassicConfig.Config;

export = plugin;
