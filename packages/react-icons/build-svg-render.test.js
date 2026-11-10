// @ts-check
/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { createElement } from 'react';
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

const cases = [
  ['Mention', 'mention', 12, 'Filled'],
  ['My Location', 'my_location', 12, 'Filled'],
  ['My Location', 'my_location', 12, 'Regular'],
  ['Square Text Arrow Repeat All', 'square_text_arrow_repeat_all', 16, 'Filled'],
  ['Square Text Arrow Repeat All', 'square_text_arrow_repeat_all', 16, 'Regular'],
];

describe.each(cases)('%s %s %i %s artwork', (group, name, size, style) => {
  const file = `${name}_${size}_${String(style).toLowerCase()}.svg`;
  const exportName = `${String(group).replaceAll(' ', '')}${size}${style}`;

  it('has no clipping definitions, references, or leftover containers in the source', () => {
    const source = readFileSync(
      path.join(__dirname, '../../assets', String(group), 'SVG', `ic_fluent_${file}`),
      'utf8',
    );
    const svg = new DOMParser().parseFromString(source, 'image/svg+xml').documentElement;

    expect(svg.querySelector('clipPath, [clip-path], defs, g, rect')).toBeNull();
    expect(svg.querySelectorAll('path')).toHaveLength(1);
    expect(svg.querySelector('path')?.getAttribute('fill')).toBe('#212121');
  });

  it('generates only the painted artwork in the raw SVG', () => {
    const raw = readFileSync(path.join(__dirname, '../svg-icons/icons', file), 'utf8');
    const svg = new DOMParser().parseFromString(raw, 'image/svg+xml').documentElement;

    expect(svg.querySelector('clipPath, [clip-path], defs, rect')).toBeNull();
    expect(svg.querySelectorAll('path')).toHaveLength(1);
    expect(svg.querySelector('path')?.getAttribute('d')).toMatchSnapshot();
  });

  it.each(['svg', 'headless-svg'])('%s renders the raw artwork without an extra painted rectangle', async (target) => {
    const mod = await import(path.join(__dirname, 'lib/atoms', target, `${String(name).replaceAll('_', '-')}.js`));
    const raw = readFileSync(path.join(__dirname, '../svg-icons/icons', file), 'utf8');
    const svg = new DOMParser().parseFromString(raw, 'image/svg+xml').documentElement;
    const paths = Array.from(svg.querySelectorAll('path'), (p) => p.getAttribute('d'));

    try {
      const { container } = render(createElement(mod[exportName]));
      const rendered = container.querySelector('svg');

      expect(rendered).toHaveAttribute('viewBox', `0 0 ${size} ${size}`);
      expect(rendered?.querySelector('clipPath, [clip-path], defs, rect')).toBeNull();
      expect(container.querySelectorAll('path')).toHaveLength(1);
      expect(Array.from(container.querySelectorAll('path'), (p) => p.getAttribute('d'))).toEqual(paths);
    } finally {
      cleanup();
    }
  });
});
