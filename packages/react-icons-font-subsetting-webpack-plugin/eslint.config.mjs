// @ts-check
import { dependencyChecks, privateMemberNaming } from '../../eslint.config.base.mjs';

// Both bundlers are optional peers reached at runtime via `compiler.webpack`; neither is imported,
// not even for types, so the public `.d.ts` stays usable with only one of them installed.
export default [privateMemberNaming(), dependencyChecks({ ignoredDependencies: ['@rspack/core', 'webpack'] })];
