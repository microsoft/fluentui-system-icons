import type { TSESLint } from '@typescript-eslint/utils';

/**
 * Registry of all rules exposed by this plugin.
 *
 * Add new rules here as they are authored, e.g.:
 *   'my-rule': myRule,
 */
export const rules: Record<string, TSESLint.RuleModule<string, unknown[]>> = {};
