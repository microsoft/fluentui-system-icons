// @ts-check
import { describe, it, expect } from 'vitest';
import { optimize } from 'svgo';
import config from './svgo.config';
import removeFullViewBoxClip from './remove-full-viewbox-clip';

const source =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z" fill="#212121"/></g><defs><clipPath id="clip"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>';

describe('full-viewBox clip normalization', () => {
  it.each([12, 16, 20, 24])('normalizes %ipx artwork before converting clipping rectangles to paths', (size) => {
    const input = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z" fill="#212121"/></g><defs><clipPath id="clip"><rect width="${size}" height="${size}" fill="white"/></clipPath></defs></svg>`;
    const actual = optimize(input, { ...config, path: `test_${size}_regular.svg` }).data;
    const expected = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 ${size} ${size}"><path fill="#212121" d="M2 2h4v4H2z"/></svg>`;

    expect(actual).toBe(expected);
  });

  it('supports explicit user-space units, non-zero viewBox origins, and multiple direct consumers', () => {
    const input =
      '<svg width="16" height="16" viewBox="-2 1 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><g clip-path="url(#clip)"><path d="M3 3h4v4H3z"/></g><defs><clipPath id="clip" clipPathUnits="userSpaceOnUse"><rect x="-2" y="1" width="16" height="16"/></clipPath></defs></svg>';
    const actual = optimize(input, { plugins: [removeFullViewBoxClip] }).data;

    expect(actual).not.toMatch(/clip-path|clipPath|<rect/);
    expect(actual.match(/<path /g)).toHaveLength(2);
  });

  it.each([
    [
      'smaller clip',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="8" height="16"/></clipPath></defs></svg>',
    ],
    [
      'offset clip',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect x="1" width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'rounded clip',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect rx="1" width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'transformed rectangle',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect transform="translate(1)" width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'transformed clip',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip" transform="translate(1)"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'object bounding box units',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip" clipPathUnits="objectBoundingBox"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'percentage dimensions',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="100%" height="16"/></clipPath></defs></svg>',
    ],
    [
      'multiple clipping shapes',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/><rect width="8" height="8"/></clipPath></defs></svg>',
    ],
    [
      'transformed consumer',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g transform="translate(1)" clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'filtered consumer',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g filter="url(#filter)" clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'nested consumer',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g transform="translate(1)"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'additional href reference',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs><use href="#clip"/></svg>',
    ],
    [
      'encoded fragment reference',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs><g transform="translate(1)" clip-path="url(#%63lip)"><path d="M2 2h4v4H2z"/></g></svg>',
    ],
    [
      'CSS-escaped reference',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs><g transform="translate(1)" style="clip-path:url(#\\63lip)"><path d="M2 2h4v4H2z"/></g></svg>',
    ],
    [
      'duplicate IDs',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath><clipPath id="clip"><rect width="8" height="8"/></clipPath></defs></svg>',
    ],
    [
      'referenced rectangle',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect id="rectangle" width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'styled root',
      '<svg style="overflow:visible" width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'visible overflow',
      '<svg overflow="visible" width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'transformed root',
      '<svg transform="translate(1)" width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'inherited definition transform',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs transform="translate(1)"><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'stylesheet',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs><style>rect { rx: 2px; }</style></svg>',
    ],
    [
      'animation',
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs><animate attributeName="viewBox" dur="1s"/></svg>',
    ],
    [
      'missing viewBox',
      '<svg width="16" height="16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'letterboxed viewport',
      '<svg width="32" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
    [
      'relative viewport',
      '<svg width="100%" height="100%" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath></defs></svg>',
    ],
  ])('preserves %s without modifying its definition or references', (_name, input) => {
    const actual = optimize(input, { plugins: [removeFullViewBoxClip] }).data;
    expect(actual).toBe(input);
  });

  it.each(['test_16_color.svg', 'es/test_16_color.svg', 'test_16_color_es.svg'])(
    'leaves Color asset %s untouched',
    (path) => {
      const actual = optimize(source, {
        plugins: [removeFullViewBoxClip],
        path,
      }).data;

      expect(actual).toBe(source);
    },
  );

  it('normalizes monochrome icons whose base name includes color', () => {
    const actual = optimize(source, { ...config, path: 'text_color_16_regular.svg' }).data;

    expect(actual).not.toMatch(/clip-path|clipPath|<rect/);
  });

  it('preserves unrelated definitions when removing a redundant clip', () => {
    const input =
      '<svg width="16" height="16" viewBox="0 0 16 16"><g clip-path="url(#clip)"><path d="M2 2h4v4H2z"/></g><defs><clipPath id="clip"><rect width="16" height="16"/></clipPath><clipPath id="necessary"><rect width="4" height="4"/></clipPath></defs></svg>';
    const actual = optimize(input, { plugins: [removeFullViewBoxClip] }).data;
    expect(actual).toBe(
      '<svg width="16" height="16" viewBox="0 0 16 16"><g><path d="M2 2h4v4H2z"/></g><defs><clipPath id="necessary"><rect width="4" height="4"/></clipPath></defs></svg>',
    );
  });
});
