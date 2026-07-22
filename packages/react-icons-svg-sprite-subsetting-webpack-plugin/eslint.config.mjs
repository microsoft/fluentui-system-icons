// @ts-check
import { dependencyChecks } from '../../eslint.config.base.mjs';

// `html-webpack-plugin` is an optional integration required lazily at runtime.
export default [dependencyChecks({ ignoredDependencies: ['html-webpack-plugin'] })];
