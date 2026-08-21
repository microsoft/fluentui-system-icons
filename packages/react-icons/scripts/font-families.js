// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Single source of truth for the icon font families.
 *
 * Everything that names a font family, a font file, a `data-fui-icon-font` value or a
 * `FontFile` enum member is derived from this list — the Griffel `@font-face` block, the
 * headless CSS, the generated per-icon atoms and the font copy step. Keeping them in one
 * place is what makes the headless and non-headless surfaces provably 1:1.
 *
 * @typedef {object} FontFamilyDefinition
 * @property {string} key       `FontFile` enum member name.
 * @property {number} value     `FontFile` enum value. BAKED INTO GENERATED ATOMS — never renumber.
 * @property {string} family    CSS `font-family` name.
 * @property {string} variant   `data-fui-icon-font` attribute value (headless).
 * @property {string} file      Font binary base name, without extension.
 * @property {boolean} resizable Whether this family holds the size-agnostic glyphs.
 */

/** @type {ReadonlyArray<FontFamilyDefinition>} */
const FONT_FAMILIES = [
  {
    key: 'Filled',
    value: 0,
    family: 'FluentSystemIconsFilled',
    variant: 'filled',
    file: 'FluentSystemIcons-Filled',
    resizable: false,
  },
  {
    key: 'Regular',
    value: 1,
    family: 'FluentSystemIconsRegular',
    variant: 'regular',
    file: 'FluentSystemIcons-Regular',
    resizable: false,
  },
  {
    key: 'Resizable',
    value: 2,
    family: 'FluentSystemIcons',
    variant: 'resizable',
    file: 'FluentSystemIcons-Resizable',
    resizable: true,
  },
  {
    key: 'Light',
    value: 3,
    family: 'FluentSystemIconsLight',
    variant: 'light',
    file: 'FluentSystemIcons-Light',
    resizable: false,
  },
];

/** Extensions of the font binaries shipped for every family, in `@font-face` `src` order. */
const FONT_BINARY_EXTENSIONS = /** @type {const} */ (['woff2', 'woff', 'ttf']);

/** CSS `format()` keyword per binary extension. */
const FONT_FORMAT_BY_EXTENSION = /** @type {const} */ ({
  woff2: 'woff2',
  woff: 'woff',
  ttf: 'truetype',
});

/**
 * @param {string} key
 * @returns {FontFamilyDefinition}
 */
function getFontFamilyByKey(key) {
  const found = FONT_FAMILIES.find((definition) => definition.key === key);
  if (!found) {
    throw new Error(`[font-families] unknown font family key: ${key}`);
  }
  return found;
}

module.exports = {
  FONT_FAMILIES,
  FONT_BINARY_EXTENSIONS,
  FONT_FORMAT_BY_EXTENSION,
  getFontFamilyByKey,
};
