// @ts-check
import { dependencyChecks } from '../../eslint.config.base.mjs';

export default [
  dependencyChecks({
    // @fluentui/svg-icons is an optional peer that codegen resolves by name at runtime, so it is never imported.
    ignoredDependencies: ['@types/react-native', '@fluentui/svg-icons'],
  }),
];
