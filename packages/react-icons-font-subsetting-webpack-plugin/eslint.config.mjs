// @ts-check
import { dependencyChecks } from '../../eslint.config.base.mjs';

// @rspack/core is an optional peer reached at runtime via `compiler.webpack`, never imported.
export default [dependencyChecks({ ignoredDependencies: ['@rspack/core'] })];
