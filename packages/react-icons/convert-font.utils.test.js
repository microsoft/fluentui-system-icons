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
      const res = await generatePerIconFiles(tmpDest, entries, {}, false, true);
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

      const res = await generatePerIconFiles(tmpDest, entries, {}, false, true);
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
