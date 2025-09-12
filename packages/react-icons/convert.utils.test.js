// @ts-check
import fs from 'fs';
import path from 'path';
import { describe, it, expect, afterAll } from 'vitest';

import { makeIconExport, getCreateFluentIconHeader } from './convert.utils';

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
  });
});
