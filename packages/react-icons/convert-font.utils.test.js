// @ts-check
import { describe, it, expect } from 'vitest';

import { getCreateFluentIconHeader, getReactIconNameFromGlyphName, buildFontIconExport } from './convert-font.utils';

describe('convert font utils', () => {
  describe(`getCreateFluentIconHeader`, () => {
    it('returns expected header lines from getCreateFluentIconHeader', () => {
      const header = getCreateFluentIconHeader('../utils/createFluentIcon');
      expect(Array.isArray(header)).toBe(true);
      expect(header).toHaveLength(3);
      expect(header).toMatchInlineSnapshot(`
        [
          ""use client";",
          "import type { FluentFontIcon } from '../utils/createFluentIcon';",
          "import { createFluentFontIcon } from '../utils/createFluentIcon';",
        ]
      `);
    });
  });

  describe('getReactIconNameFromGlyphName', () => {
    it('converts standard filled glyph name', () => {
      expect(getReactIconNameFromGlyphName('ic_fluent_access_time_20_filled', true)).toBe('AccessTimeFilled');
    });
    it('preserves size when not resizable', () => {
      // For sized run, size token should remain (e.g. AccessTime20Filled)
      expect(getReactIconNameFromGlyphName('ic_fluent_access_time_20_filled', false)).toBe('AccessTime20Filled');
    });
  });

  describe('buildFontIconExport', () => {
    it('builds export with resizable flag', () => {
      const code = buildFontIconExport('AccessTimeFilled', 0xe001, true, false, 'ic_fluent_access_time_20_filled');
      expect(code).toContain('AccessTimeFilled');
      expect(code).toContain('createFluentFontIcon');
      // style param should be 2 (resizable) and no size argument value
      expect(code).toMatch(/, 2, undefined/);
    });
    it('builds export with sized style and size', () => {
      const code = buildFontIconExport('AccessTime20Filled', 0xe001, false, false, 'ic_fluent_access_time_20_filled');
      // Regular style detection: filled -> style 0
      expect(code).toMatch(/, 0, 20/);
    });
    it('adds flipInRtl option when requested', () => {
      const code = buildFontIconExport('ArrowReply', 0xe002, true, true, 'ic_fluent_arrow_reply_20_filled');
      expect(code).toContain('{ flipInRtl: true }');
    });
  });
});
