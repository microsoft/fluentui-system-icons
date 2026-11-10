// @ts-check
/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseIconSource } from './scripts/convert.utils';
import { parseIconName } from '../../importer/icon-name';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgIconsDir = path.join(__dirname, '../svg-icons/icons');

describe('Monochrome SVG integration', () => {
  it('never converts definition geometry into painted paths in any generated SVG', () => {
    const files = readdirSync(svgIconsDir, { recursive: true })
      .filter((file) => file.endsWith('.svg') && parseIconName(file).style !== 'color')
      .sort();
    expect(files.length).toBeGreaterThan(0);

    const parser = new DOMParser();
    for (const file of files) {
      const srcFile = path.join(svgIconsDir, file);
      const source = readFileSync(srcFile, 'utf8');
      // Avoid parsing thousands of plain-path SVGs; only definition containers can hide geometry.
      if (!/<(?:defs|clipPath|mask|pattern|marker|symbol)\b/.test(source)) continue;
      const svg = parser.parseFromString(source, 'image/svg+xml');
      expect(svg.querySelector('parsererror'), file).toBeNull();
      const paintedPaths = Array.from(svg.querySelectorAll('path'))
        .filter((element) => !element.closest('defs, clipPath, mask, pattern, marker, symbol'))
        .map((element) => element.getAttribute('d'));

      // Both standard and headless generators consume this same monochrome path data.
      const parsed = parseIconSource({ file, srcFile, resizable: false, metadata: {} });
      expect(parsed?.iconData, `${file}: definition geometry must not become painted React paths`).toEqual({
        paths: paintedPaths,
      });
    }
  }, 30_000);
});
