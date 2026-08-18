// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import fs from 'node:fs';
import path from 'node:path';

import { describe, it, expect } from 'vitest';

import { FONT_FAMILIES } from './font-families';
import { buildTargets, cssFontFaces, griffelFontFaces } from './generate-font-styles';

const SRC_DIR = path.join(__dirname, '../src');

describe('font-families manifest', () => {
  it('pins the FontFile enum values baked into the generated atoms', () => {
    // Changing these renumbers ~24k generated `createFluentFontIcon(name, codepoint, <value>, size)` calls.
    expect(Object.fromEntries(FONT_FAMILIES.map(({ key, value }) => [key, value]))).toEqual({
      Filled: 0,
      Regular: 1,
      Resizable: 2,
      Light: 3,
    });
  });

  it('has unique family names, variants and font files', () => {
    for (const field of /** @type {const} */ (['key', 'family', 'variant', 'file'])) {
      const values = FONT_FAMILIES.map((definition) => definition[field]);
      expect(new Set(values).size, `duplicate ${field}`).toBe(values.length);
    }
  });

  it('has exactly one resizable family', () => {
    expect(FONT_FAMILIES.filter((definition) => definition.resizable)).toHaveLength(1);
  });
});

describe('generate-font-styles', () => {
  it('declares every family in both the headless CSS and the Griffel styles', () => {
    const expected = FONT_FAMILIES.map(({ family }) => family).sort();

    expect(familiesOf(cssFontFaces('../../utils/fonts/').join('\n')).sort()).toEqual(expected);
    expect(familiesOf(griffelFontFaces().join('\n')).sort()).toEqual(expected);
  });

  it('gives every @font-face a font-display so no family silently renders unstyled', () => {
    for (const css of [cssFontFaces('./').join('\n'), griffelFontFaces().join('\n')]) {
      const faces = css.split('@font-face').slice(1);
      expect(faces).toHaveLength(FONT_FAMILIES.length);
      for (const face of faces) {
        expect(face).toMatch(/font-display:\s*"?block"?;/);
      }
    }
  });

  it('checked-in sources match the generated regions', () => {
    for (const [relativePath, regions] of Object.entries(buildTargets())) {
      const content = fs.readFileSync(path.join(SRC_DIR, relativePath), 'utf8');
      for (const [name, lines] of Object.entries(regions)) {
        expect(content, `${relativePath} — run \`yarn generate:font-styles\``).toContain(lines.join('\n'));
      }
    }
  });
});

/**
 * @param {string} css
 * @returns {string[]}
 */
function familiesOf(css) {
  return [...css.matchAll(/font-family:\s*'?([\w-]+)'?;/g)].map((match) => match[1]);
}
