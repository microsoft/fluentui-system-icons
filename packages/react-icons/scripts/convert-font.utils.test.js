// @ts-check
import fs from 'fs';
import path from 'path';
import { describe, it, expect, afterAll } from 'vitest';

import {
  getCreateFluentIconHeader,
  getReactIconNameFromGlyphName,
  buildFontIconExport,
  generatePerIconFiles,
} from './convert-font.utils';

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
    it('preserves locale and direction suffixes outside the PascalCase name', () => {
      expect(getReactIconNameFromGlyphName('ic_fluent_text_bold_24_regular_sr_cyrl', false)).toBe(
        'TextBold24Regular_srCyrl',
      );
      expect(getReactIconNameFromGlyphName('ic_fluent_text_bold_20_filled_es_rtl', true)).toBe('TextBoldFilled_esRtl');
    });
    it('converts standard filled glyph name', () => {
      expect(getReactIconNameFromGlyphName('ic_fluent_access_time_20_filled', true)).toBe('AccessTimeFilled');
    });
    it('preserves size when not resizable', () => {
      // For sized run, size token should remain (e.g. AccessTime20Filled)
      expect(getReactIconNameFromGlyphName('ic_fluent_access_time_20_filled', false)).toBe('AccessTime20Filled');
    });
  });

  describe('buildFontIconExport', () => {
    it.each([
      ['filled', 0],
      ['regular', 1],
      ['light', 3],
    ])('selects %s family for a qualified sized glyph', (style, family) => {
      const rawName = `ic_fluent_text_bold_24_${style}_es`;
      const code = buildFontIconExport(getReactIconNameFromGlyphName(rawName, false), 0xf0000, false, false, rawName);
      expect(code).toContain(`, ${family}, 24`);
      expect(code).toContain(String.fromCodePoint(0xf0000));
    });
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

  describe('generatePerIconFiles', () => {
    const tmpSrc = path.join(__dirname, 'tmp-font-src');
    const tmpDest = path.join(__dirname, 'tmp-font-dest');

    /**
     * Helper to write a minimal codepoint map file used by the font per-icon generator.
     * @param {string} name
     * @param {{ [k: string]: number }} map
     */
    function writeMap(name, map) {
      if (!fs.existsSync(tmpSrc)) fs.mkdirSync(tmpSrc, { recursive: true });
      fs.writeFileSync(path.join(tmpSrc, name), JSON.stringify(map), 'utf8');
    }

    afterAll(() => {
      if (fs.existsSync(tmpSrc)) fs.rmSync(tmpSrc, { recursive: true, force: true });
      if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });
    });

    it('groups script locale glyphs under hyphenated paths with camel-cased exports', async () => {
      const iconEntries = { ic_fluent_text_bold_20_regular_sr_cyrl: 0xf0000 };
      const entries = [{ iconEntries, writeProcessedCodepointMap: () => {} }];
      await generatePerIconFiles(
        tmpDest,
        { resizable: entries, sized: entries },
        {},
        '../../utils/fonts/createFluentFontIcon',
      );
      const content = fs.readFileSync(path.join(tmpDest, 'text-bold_sr-cyrl.tsx'), 'utf8');
      expect(content).toContain('export const TextBoldRegular_srCyrl');
      expect(content).toContain('export const TextBold20Regular_srCyrl');
      expect(content).toContain(String.fromCodePoint(0xf0000));
      expect(fs.existsSync(path.join(tmpDest, 'text-bold_sr_cyrl.tsx'))).toBe(false);
    });

    it('groups font icons when grouping enabled and orders variants deterministically', async () => {
      // reset dest
      if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });
      fs.mkdirSync(tmpDest, { recursive: true });

      // create two glyph entries that normalize to same base and will be ordered by style priority
      const map = {
        ic_fluent_dup_20_filled: 0xe000,
        ic_fluent_dup20_regular: 0xe001,
      };
      writeMap('test.json', map);

      const entries = [{ iconEntries: map, writeProcessedCodepointMap: () => {} }];

      // grouping true -> should create one file dup.tsx containing both exports
      const res = await generatePerIconFiles(
        tmpDest,
        { resizable: [], sized: entries },
        {},
        '../../utils/fonts/createFluentFontIcon',
      );
      expect(res.fileCount).toBeGreaterThan(0);
      const files = fs.readdirSync(tmpDest);
      const dupFile = files.find((f) => f.startsWith('dup'));
      expect(dupFile).toBeTruthy();

      const content = fs.readFileSync(path.join(tmpDest, String(dupFile)), 'utf8');

      // regular should come before filled because of style priority in DEFAULT_STYLE_TOKENS
      expect(content).toMatchInlineSnapshot(`
        ""use client";
        import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
        import { createFluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
        export const Dup20Regular: FluentFontIcon = (/*#__PURE__*/createFluentFontIcon("Dup20Regular", "", 1, undefined));
        export const Dup20Filled: FluentFontIcon = (/*#__PURE__*/createFluentFontIcon("Dup20Filled", "", 0, 20));
        "
      `);
    });

    it('orders variants by size when sizes differ (smaller size first)', async () => {
      // reset dest
      if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });
      fs.mkdirSync(tmpDest, { recursive: true });

      const map = {
        ic_fluent_test_20_filled: 0xe010,
        ic_fluent_test_16_regular: 0xe011,
      };
      writeMap('test2.json', map);
      const entries = [{ iconEntries: map, writeProcessedCodepointMap: () => {} }];

      const res = await generatePerIconFiles(
        tmpDest,
        { resizable: [], sized: entries },
        {},
        '../../utils/fonts/createFluentFontIcon',
      );
      expect(res.fileCount).toBeGreaterThan(0);
      const files = fs.readdirSync(tmpDest);
      const testFile = files.find((f) => f.startsWith('test'));
      expect(testFile).toBeTruthy();

      const content = fs.readFileSync(path.join(tmpDest, String(testFile)), 'utf8');

      // smaller size (16) should appear before 20
      expect(content).toMatchInlineSnapshot(`
        ""use client";
        import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
        import { createFluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
        export const Test16Regular: FluentFontIcon = (/*#__PURE__*/createFluentFontIcon("Test16Regular", "", 1, 16));
        export const Test20Filled: FluentFontIcon = (/*#__PURE__*/createFluentFontIcon("Test20Filled", "", 0, 20));
        "
      `);
    });
  });
});
