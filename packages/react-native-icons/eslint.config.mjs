// @ts-check
import { dependencyChecks } from '../../eslint.config.base.mjs';

export default [
  dependencyChecks({
    // @fluentui/svg-icons and @svgr/plugin-jsx are optional peers that codegen loads by name at runtime, so they are never imported.
    ignoredDependencies: ['@types/react-native', '@fluentui/svg-icons', '@svgr/plugin-jsx'],
  }),
];
