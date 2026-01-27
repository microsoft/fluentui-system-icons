// @ts-check
import fs from 'fs';
import path from 'path';
import { describe, it, expect, afterAll } from 'vitest';

import { makeIconExport, getCreateFluentIconHeader, generatePerIconFiles } from './convert.utils';

describe(`convert  utils`, () => {
  describe(`getCreateFluentIconHeader`, () => {
    it('returns expected header lines from getCreateFluentIconHeader', () => {
      const header = getCreateFluentIconHeader('../utils/createFluentIcon');
      expect(Array.isArray(header)).toBe(true);
      expect(header).toHaveLength(3);
      expect(header).toMatchInlineSnapshot(`
      [
        ""use client";",
        "import type { FluentIcon } from '../utils/createFluentIcon';",
        "import { createFluentIcon } from '../utils/createFluentIcon';",
      ]
    `);
    });
  });

  describe('makeIconExport', () => {
    const tmpDir = path.join(__dirname, 'tmp-test-icons');

    /**
     * Write a file to the temporary directory.
     * @param {string} name - The name of the file.
     * @param {string} content - The content of the file.
     */
    function writeFile(name, content) {
      if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
      fs.writeFileSync(path.join(tmpDir, name), content, 'utf8');
    }

    afterAll(() => {
      if (fs.existsSync(tmpDir)) {
        fs.rmSync(tmpDir, { recursive: true, force: true });
      }
    });

    it('returns null for non-20 file when resizable', () => {
      writeFile('ic_fluent_test_24.svg', '<svg width="24" d="M0 0" ></svg>');
      const res = makeIconExport({
        file: 'ic_fluent_test_24.svg',
        srcFile: path.join(tmpDir, 'ic_fluent_test_24.svg'),
        resizable: true,
        metadata: {},
      });
      expect(res).toBeNull();
    });

    it('builds export for non-color icon', () => {
      writeFile('ic_fluent_access_time_20.svg', '<svg width="20" d="M1 2 3" ></svg>');
      const res = makeIconExport({
        file: 'ic_fluent_access_time_20.svg',
        srcFile: path.join(tmpDir, 'ic_fluent_access_time_20.svg'),
        resizable: true,
        metadata: {},
      });
      expect(res).toBeTruthy();
      expect(res?.exportName).toBe('AccessTime');
      expect(res?.exportCode).toContain("createFluentIcon('AccessTime'");
    });

    it('builds export for color icon and includes inner svg', () => {
      writeFile('ic_fluent_color_test_20_color.svg', '<svg width="20"><g fill="#000"/><path d="M1 2"/></svg>');
      const res = makeIconExport({
        file: 'ic_fluent_color_test_20_color.svg',
        srcFile: path.join(tmpDir, 'ic_fluent_color_test_20_color.svg'),
        resizable: true,
        metadata: {},
      });
      expect(res).toBeTruthy();
      // resizable strips the size token (20) so expected name is ColorTestColor
      expect(res?.exportName).toBe('ColorTestColor');
      expect(res?.exportCode).toContain('createFluentIcon');
    });

    it('adds rtl mirror option when metadata indicates mirror', () => {
      writeFile('ic_fluent_arrow_20.svg', '<svg width="20" d="M0 0" ></svg>');
      const metadata = /** @type {const} */ ({ Arrow: 'mirror' });
      const res = makeIconExport({
        file: 'ic_fluent_arrow_20.svg',
        srcFile: path.join(tmpDir, 'ic_fluent_arrow_20.svg'),
        resizable: true,
        metadata,
      });
      expect(res).toBeTruthy();
      expect(res?.exportCode).toContain('flipInRtl');
    });

    it('treats TextColor icons as non-color icons (regular/filled)', () => {
      writeFile('ic_fluent_text_color_20_regular.svg', '<svg width="20" d="M1 2 3" ></svg>');
      const res = makeIconExport({
        file: 'ic_fluent_text_color_20_regular.svg',
        srcFile: path.join(tmpDir, 'ic_fluent_text_color_20_regular.svg'),
        resizable: true,
        metadata: {},
      });
      expect(res).toBeTruthy();
      expect(res?.exportName).toBe('TextColorRegular');
      expect(res?.exportCode).toContain('[');
      expect(res?.exportCode).not.toContain('color: true');
    });

    it('treats TextColorAccent icons as non-color icons (regular/filled)', () => {
      writeFile('ic_fluent_text_color_accent_20_filled.svg', '<svg width="20" d="M5 6 7" ></svg>');
      const res = makeIconExport({
        file: 'ic_fluent_text_color_accent_20_filled.svg',
        srcFile: path.join(tmpDir, 'ic_fluent_text_color_accent_20_filled.svg'),
        resizable: true,
        metadata: {},
      });
      expect(res).toBeTruthy();
      expect(res?.exportName).toBe('TextColorAccentFilled');
      expect(res?.exportCode).toContain('[');
      expect(res?.exportCode).not.toContain('color: true');
    });

    it('still treats icons ending with _color as color icons', () => {
      writeFile('ic_fluent_patient_20_color.svg', '<svg width="20"><g fill="#000"/><path d="M1 2"/></svg>');
      const res = makeIconExport({
        file: 'ic_fluent_patient_20_color.svg',
        srcFile: path.join(tmpDir, 'ic_fluent_patient_20_color.svg'),
        resizable: true,
        metadata: {},
      });
      expect(res).toBeTruthy();
      expect(res?.exportName).toBe('PatientColor');
      expect(res?.exportCode).not.toContain('[');
      expect(res?.exportCode).toContain('color: true');
    });
  });

  describe(`generatePerIconFiles`, () => {
    describe(`duplicate export names`, () => {
      const tmpSrc = path.join(__dirname, 'tmp-dup-src');
      const tmpDest = path.join(__dirname, 'tmp-dup-dest');

      /**
       * @param {string} name
       * @param {string} content
       */
      function writeSvg(name, content) {
        if (!fs.existsSync(tmpSrc)) fs.mkdirSync(tmpSrc, { recursive: true });
        fs.writeFileSync(path.join(tmpSrc, name), content, 'utf8');
      }

      it('throws on duplicate export names', async () => {
        try {
          if (fs.existsSync(tmpSrc)) fs.rmSync(tmpSrc, { recursive: true, force: true });
          if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });

          // Two different filenames that will produce the same export name when processed
          writeSvg('ic_fluent_dup_20.svg', '<svg width="20" d="M0"></svg>');
          // this variant without underscore will camelCase to the same export name (Dup20)
          writeSvg('ic_fluent_dup20.svg', '<svg width="20" d="M1"></svg>');

          const files = await import('fs/promises').then((m) => m.readdir(tmpSrc));
          if (!fs.existsSync(tmpDest)) fs.mkdirSync(tmpDest, { recursive: true });
          const srcFiles = files.map((f) => ({ file: f, srcFile: path.join(tmpSrc, f) }));

          // grouping enabled: both map to the same base and exportName -> should throw
          await expect(generatePerIconFiles(srcFiles, tmpDest, {}, false, true)).rejects.toThrow(
            /Duplicate export name/,
          );
        } finally {
          if (fs.existsSync(tmpSrc)) fs.rmSync(tmpSrc, { recursive: true, force: true });
          if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });
        }
      });
    });

    describe('generatePerIconFiles integration', () => {
      const tmpSrc = path.join(__dirname, 'tmp-gen-src');
      const tmpDest = path.join(__dirname, 'tmp-gen-dest');

      /**
       * @param {string} name
       * @param {string} d
       */
      function writeSvg(name, d) {
        if (!fs.existsSync(tmpSrc)) fs.mkdirSync(tmpSrc, { recursive: true });
        fs.writeFileSync(path.join(tmpSrc, name), `<svg width="20" d="${d}"></svg>`, 'utf8');
      }

      afterAll(() => {
        if (fs.existsSync(tmpSrc)) fs.rmSync(tmpSrc, { recursive: true, force: true });
        if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });
      });

      it('groups related icons into one file and deduplicates exports', async () => {
        // prepare source svgs
        writeSvg('ic_fluent_zoom_in_20.svg', 'M0 0');
        writeSvg('ic_fluent_zoom_in_16.svg', 'M1 1');
        writeSvg('ic_fluent_zoom_in_20_filled.svg', 'M2 2');

        const files = await require('fs/promises').readdir(tmpSrc);
        const srcFiles = files.map((f) => ({ file: f, srcFile: path.join(tmpSrc, f) }));

        // ensure destination exists
        if (!fs.existsSync(tmpDest)) fs.mkdirSync(tmpDest, { recursive: true });
        // run generator (groupByBase true) and process all sizes (resizable = false)
        await generatePerIconFiles(srcFiles, tmpDest, {}, false, true);

        // check output
        const outFile = path.join(tmpDest, 'zoom-in.tsx');
        expect(fs.existsSync(outFile)).toBe(true);
        const content = fs.readFileSync(outFile, 'utf8');
        // should contain multiple exports
        expect(content).toContain('export const ZoomIn20Filled');
        // 16px variant should be present after processing sized icons
        expect(content).toMatch(/export const\s+ZoomIn16/);
        // no duplicate export names
        const names = [...content.matchAll(/export const\s+(\w+)\s*:/g)].map((m) => m[1]);
        const unique = new Set(names);
        expect(unique.size).toBe(names.length);
      });

      it('creates separate files when grouping is disabled', async () => {
        // prepare separate tmp dirs
        const tmpSrc2 = path.join(__dirname, 'tmp-gen-src-2');
        const tmpDest2 = path.join(__dirname, 'tmp-gen-dest-2');
        if (!fs.existsSync(tmpSrc2)) fs.mkdirSync(tmpSrc2, { recursive: true });
        if (!fs.existsSync(tmpDest2)) fs.mkdirSync(tmpDest2, { recursive: true });
        fs.writeFileSync(path.join(tmpSrc2, 'ic_fluent_test_20.svg'), '<svg width="20" d="M0"></svg>');
        fs.writeFileSync(path.join(tmpSrc2, 'ic_fluent_test_16_filled.svg'), '<svg width="16" d="M1"></svg>');

        const files = await require('fs/promises').readdir(tmpSrc2);
        const srcFiles = files.map((f) => ({ file: f, srcFile: path.join(tmpSrc2, f) }));

        await generatePerIconFiles(srcFiles, tmpDest2, {}, false, false);

        // expect separate files like test-20-regular.tsx and test-16-filled.tsx (based on kebab-casing)
        const outFiles = fs.readdirSync(tmpDest2);
        expect(outFiles.some((n) => n.startsWith('test-'))).toBeTruthy();

        // cleanup local tmp dirs
        fs.rmSync(tmpSrc2, { recursive: true, force: true });
        fs.rmSync(tmpDest2, { recursive: true, force: true });
      });
    });
  });
});
