// @ts-check
import { describe, it, expect } from 'vitest';

const core = require('./convert-font.utils');

describe('convert-font-core', () => {
  describe('getReactIconNameFromGlyphName', () => {
    it('converts standard filled glyph name', () => {
      expect(core.getReactIconNameFromGlyphName('ic_fluent_access_time_20_filled', true)).toBe('AccessTimeFilled');
    });
    it('preserves size when not resizable', () => {
      // For sized run, size token should remain (e.g. AccessTime20Filled)
      expect(core.getReactIconNameFromGlyphName('ic_fluent_access_time_20_filled', false)).toBe('AccessTime20Filled');
    });
  });

  describe('buildFontIconExport', () => {
    it('builds export with resizable flag', () => {
      const code = core.buildFontIconExport('AccessTimeFilled', 0xe001, true, false, 'ic_fluent_access_time_20_filled');
      expect(code).toContain('AccessTimeFilled');
      expect(code).toContain('createFluentFontIcon');
      // style param should be 2 (resizable) and no size argument value
      expect(code).toMatch(/, 2, undefined/);
    });
    it('builds export with sized style and size', () => {
      const code = core.buildFontIconExport(
        'AccessTime20Filled',
        0xe001,
        false,
        false,
        'ic_fluent_access_time_20_filled',
      );
      // Regular style detection: filled -> style 0
      expect(code).toMatch(/, 0, 20/);
    });
    it('adds flipInRtl option when requested', () => {
      const code = core.buildFontIconExport('ArrowReply', 0xe002, true, true, 'ic_fluent_arrow_reply_20_filled');
      expect(code).toContain('{ flipInRtl: true }');
    });
  });
});
