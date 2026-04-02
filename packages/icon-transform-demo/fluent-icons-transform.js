// @ts-check

/**
 * Resolves a @fluentui/react-icons import name to its atomic module path.
 * @param {string} importName - The named export being imported.
 * @param {'svg' | 'svg-sprite' | 'fonts'} [target='svg'] - The target subpath (e.g. 'svg', 'svg-sprite', 'fonts',
 *   'base/svg', 'base/svg-sprite', 'base/fonts').
 * @returns {string} The resolved module path.
 */
function resolveFluentIconImport(importName, target = 'svg') {
  if (importName === 'useIconContext' || importName === 'IconDirectionContextProvider') {
    return '@fluentui/react-icons/providers';
  }

  const match = importName.match(/^(.+?)(\d+)?(Regular|Filled|Light|Color)$/);
  if (!match) {
    return '@fluentui/react-icons/utils';
  }

  return `@fluentui/react-icons/${target}/${kebabCase(match[1])}`;
}

/** Simplified lodash.kebabCase – handles PascalCase icon names with digits. */
function kebabCase(/** @type {string} */ str) {
  return str.replace(/[a-z\d](?=[A-Z])|[a-zA-Z](?=\d)|[A-Z](?=[A-Z][a-z])/g, '$&-').toLowerCase();
}

module.exports = { resolveFluentIconImport };
