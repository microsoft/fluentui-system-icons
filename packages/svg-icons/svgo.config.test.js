// @ts-check
/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest';
import { optimize } from 'svgo';
import config from './svgo.config';
import removeFullViewBoxClip from './remove-full-viewbox-clip';

const artwork = '<path d="M2 2h4v4H2z" fill="#212121"/>';
const source = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip)">${artwork}</g><defs><clipPath id="clip"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>`;

describe('full-viewBox clip normalization', () => {
  it.each([12, 16, 20, 24])('normalizes %ipx artwork before converting clipping rectangles to paths', (size) => {
    const input = source.replaceAll('16', String(size));
    const actual = optimize(input, { ...config, path: `test_${size}_regular.svg` }).data;
    const expected = optimize(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none">${artwork}</svg>`,
      { ...config, path: `test_${size}_regular.svg` },
    ).data;

    expect(actual).toBe(expected);
    const svg = new DOMParser().parseFromString(actual, 'image/svg+xml');
    expect(svg.querySelector('clipPath, [clip-path], defs, g, rect')).toBeNull();
    expect(svg.querySelectorAll('path')).toHaveLength(1);
  });

  it('supports explicit user-space units, non-zero viewBox origins, and multiple direct consumers', () => {
    const input = source
      .replace('viewBox="0 0 16 16"', 'viewBox="-2 1 16 16"')
      .replace('<clipPath id="clip">', '<clipPath id="clip" clipPathUnits="userSpaceOnUse">')
      .replace('<rect ', '<rect x="-2" y="1" ')
      .replace('</g>', `</g><g clip-path="url(#clip)">${artwork}</g>`);
    const actual = optimize(input, { plugins: [removeFullViewBoxClip] }).data;

    expect(actual).not.toMatch(/clip-path|clipPath|<rect/);
    expect(actual.match(/<path /g)).toHaveLength(2);
  });

  it.each([
    ['smaller clip', source.replace('<rect width="16"', '<rect width="8"')],
    ['offset clip', source.replace('<rect ', '<rect x="1" ')],
    ['rounded clip', source.replace('<rect ', '<rect rx="1" ')],
    ['transformed rectangle', source.replace('<rect ', '<rect transform="translate(1)" ')],
    ['transformed clip', source.replace('<clipPath ', '<clipPath transform="translate(1)" ')],
    ['object bounding box units', source.replace('<clipPath ', '<clipPath clipPathUnits="objectBoundingBox" ')],
    ['percentage dimensions', source.replace('<rect width="16"', '<rect width="100%"')],
    ['multiple clipping shapes', source.replace('</clipPath>', '<rect width="8" height="8"/></clipPath>')],
    ['transformed consumer', source.replace('<g ', '<g transform="translate(1)" ')],
    ['filtered consumer', source.replace('<g ', '<g filter="url(#filter)" ')],
    ['nested consumer', source.replace('<g ', '<g transform="translate(1)"><g ').replace('</g>', '</g></g>')],
    ['additional href reference', source.replace('</svg>', '<use href="#clip"/></svg>')],
    [
      'encoded fragment reference',
      source.replace('</svg>', `<g transform="translate(1)" clip-path="url(#%63lip)">${artwork}</g></svg>`),
    ],
    [
      'CSS-escaped reference',
      source.replace('</svg>', `<g transform="translate(1)" style="clip-path:url(#\\63lip)">${artwork}</g></svg>`),
    ],
    ['duplicate IDs', source.replace('</defs>', '<clipPath id="clip"><rect width="8" height="8"/></clipPath></defs>')],
    ['referenced rectangle', source.replace('<rect ', '<rect id="rectangle" ')],
    ['styled root', source.replace('<svg ', '<svg style="overflow:visible" ')],
    ['visible overflow', source.replace('<svg ', '<svg overflow="visible" ')],
    ['transformed root', source.replace('<svg ', '<svg transform="translate(1)" ')],
    ['inherited definition transform', source.replace('<defs>', '<defs transform="translate(1)">')],
    ['stylesheet', source.replace('</svg>', '<style>rect { rx: 2px; }</style></svg>')],
    ['animation', source.replace('</svg>', '<animate attributeName="viewBox" dur="1s"/></svg>')],
    ['missing viewBox', source.replace(' viewBox="0 0 16 16"', '')],
    ['letterboxed viewport', source.replace('width="16" height="16" viewBox', 'width="32" height="16" viewBox')],
    ['relative viewport', source.replace('width="16" height="16" viewBox', 'width="100%" height="100%" viewBox')],
  ])('preserves %s without modifying its definition or references', (_name, input) => {
    const actual = optimize(input, { plugins: [removeFullViewBoxClip] }).data;
    const unchanged = optimize(input, { plugins: [] }).data;

    expect(actual).toBe(unchanged);
  });

  it.each(['test_16_color.svg', 'es/test_16_color.svg', 'test_16_color_es.svg'])(
    'leaves Color asset %s untouched',
    (path) => {
      const actual = optimize(source, {
        plugins: [removeFullViewBoxClip],
        path,
      }).data;

      expect(actual).toBe(optimize(source, { plugins: [] }).data);
    },
  );

  it('normalizes monochrome icons whose base name includes color', () => {
    const actual = optimize(source, { ...config, path: 'text_color_16_regular.svg' }).data;

    expect(actual).not.toMatch(/clip-path|clipPath|<rect/);
  });

  it('preserves unrelated definitions when removing a redundant clip', () => {
    const input = source.replace('</defs>', '<clipPath id="necessary"><rect width="4" height="4"/></clipPath></defs>');
    const actual = optimize(input, { plugins: [removeFullViewBoxClip] }).data;
    const svg = new DOMParser().parseFromString(actual, 'image/svg+xml');

    expect(svg.querySelector('#clip, [clip-path]')).toBeNull();
    expect(svg.querySelector('#necessary rect')?.getAttribute('width')).toBe('4');
  });
});
