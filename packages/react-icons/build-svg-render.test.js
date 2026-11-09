// @ts-check
/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { createElement } from 'react';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
