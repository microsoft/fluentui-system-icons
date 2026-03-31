// @ts-check

/**
 * @fileoverview
 * Build-time import transform helper for `@fluentui/react-icons`.
 *
 * This module is the **single source of truth** for the transform logic
 * documented in the package README (§ "Using API via Build Transform").
 * It is NOT published with the package — consumers should copy the snippet
 * from the README into their own repo (e.g. as `fluent-icons-transform.js`).
 *
 * It lives here so the build-transforms test (`build-transforms.test.js`)
 * can import and validate it against every generated atom export, ensuring
 * the documented snippet stays correct as icons are added or renamed.
 *
 * @example <caption>Babel — babel-plugin-transform-imports</caption>
 * // .babelrc.js
 * const { resolveFluentIconImport } = require('./fluent-icons-transform');
 *
 * module.exports = {
 *   plugins: [
 *     ['transform-imports', {
 *       '@fluentui/react-icons': {
 *         transform: resolveFluentIconImport,
 *         preventFullImport: false,
 *         skipDefaultConversion: true,
 *       },
 *     }],
 *   ],
 * };
 *
 * @example <caption>Mapping examples</caption>
 * resolveFluentIconImport('AccessTime24Filled')
 * // → '@fluentui/react-icons/svg/access-time'
 *
 * resolveFluentIconImport('useIconContext')
 * // → '@fluentui/react-icons/providers'
 *
 * resolveFluentIconImport('bundleIcon')
 * // → '@fluentui/react-icons/utils'
 */

/**
 * Resolves a @fluentui/react-icons import name to its atomic module path.
 * @param {string} importName - The named export being imported.
 * @returns {string} The resolved module path.
 */
function resolveFluentIconImport(importName) {
  if (importName === 'useIconContext' || importName === 'IconDirectionContextProvider') {
    return '@fluentui/react-icons/providers';
  }

  // (.+?) lazily captures the icon base name (may contain digits,
  // e.g. "Space3D", "Rotate315Right"), (\d+)? greedily strips any
  // trailing all-digit segment (size suffixes like 16/20/24, but
  // also level indicators like Battery0) — this mirrors the
  // normalizeBaseName logic used by the generation pipeline.
  const match = importName.match(/^(.+?)(\d+)?(Regular|Filled|Light|Color)$/);
  if (!match) {
    return '@fluentui/react-icons/utils';
  }

  return `@fluentui/react-icons/svg/${kebabCase(match[1])}`;
}

/** Simplified lodash.kebabCase – handles PascalCase icon names with digits. */
function kebabCase(/** @type {string} */ str) {
  return str.replace(/[a-z\d](?=[A-Z])|[a-zA-Z](?=\d)|[A-Z](?=[A-Z][a-z])/g, '$&-').toLowerCase();
}

module.exports = { resolveFluentIconImport };
