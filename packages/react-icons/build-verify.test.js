// @ts-check
import { describe, it, expect } from 'vitest';
import { readdir, stat, readFile } from 'node:fs/promises';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Trims content to first N lines for snapshot testing
 * @param {string} content - The content to trim
 * @param {number} threshold - The maximum number of lines to include (default: 30)
 * @returns {string} The trimmed content
 */
function trimContentForSnapshot(content, threshold = 30) {
  const lines = content.split('\n');
  const voidExportRegex = /^\s*exports\.[a-zA-Z0-9_]+ = .*void 0;\s*$/;
  // Count and filter out verbose CJS export declarations to reduce churn
  const { filteredLines, voidExportCount } = lines.reduce((acc, line) => {
    // Check for lines that are just "exports.SomeName = void 0;" declarations
    const isVoidExport = voidExportRegex.test(line);
    if (isVoidExport) {
      acc.voidExportCount++;
    } else {
      acc.filteredLines.push(line);
    }
    return acc;
  }, /** @type {{ filteredLines: string[], voidExportCount: number }} */ ({ filteredLines: [], voidExportCount: 0 }));

  // Add filtering message at the beginning if exports were filtered
  if (voidExportCount > 0) {
    filteredLines.splice(
      0,
      0,
      `... (${voidExportCount} export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))`,
    );
  }

  const trimmedLines = filteredLines.slice(0, threshold);

  // Add truncation message at the end if content was truncated
  if (filteredLines.length > threshold) {
    trimmedLines.push('... (content truncated for snapshot)');
  }

  return trimmedLines.join('\n');
}

describe('Build Verification', () => {
  describe('Build Directories', () => {
    it('should have lib and lib-cjs directories', async () => {
      const directories = ['lib', 'lib-cjs'];

      for (const dir of directories) {
        const dirPath = path.join(__dirname, dir);
        expect(fs.existsSync(dirPath)).toBe(true);

        const stats = await stat(dirPath);
        expect(stats.isDirectory()).toBe(true);
      }
    });
  });

  describe('Library Directory Structure', () => {
    it.each(['lib', 'lib-cjs'])('should have correct structure in %s', async (libDir) => {
      const libPath = path.join(__dirname, libDir);

      // Check main structure
      const requiredDirs = ['icons', 'sizedIcons', 'fonts', 'utils', 'atoms'];
      const requiredFiles = ['index.js', 'index.d.ts', 'providers.js', 'providers.d.ts'];

      for (const dir of requiredDirs) {
        const dirPath = path.join(libPath, dir);
        expect(fs.existsSync(dirPath)).toBe(true);

        const stats = await stat(dirPath);
        expect(stats.isDirectory()).toBe(true);
      }

      for (const file of requiredFiles) {
        const filePath = path.join(libPath, file);
        expect(fs.existsSync(filePath)).toBe(true);

        const stats = await stat(filePath);
        expect(stats.isFile()).toBe(true);
      }

      // Check fonts directory structure
      const fontsDir = path.join(libPath, 'fonts');
      const fontRequiredDirs = ['icons', 'sizedIcons'];
      const fontRequiredFiles = ['index.js', 'index.d.ts'];

      for (const dir of fontRequiredDirs) {
        const dirPath = path.join(fontsDir, dir);
        expect(fs.existsSync(dirPath)).toBe(true);
      }

      for (const file of fontRequiredFiles) {
        const filePath = path.join(fontsDir, file);
        expect(fs.existsSync(filePath)).toBe(true);
      }

      // Check atoms directory structure
      const atomsDirSvg = path.join(libPath, 'atoms/svg');
      const atomRequiredFiles = ['access-time.js', 'access-time.d.ts'];

      for (const file of atomRequiredFiles) {
        const filePath = path.join(atomsDirSvg, file);
        expect(fs.existsSync(filePath)).toBe(true);
      }

      const atomsDirFonts = path.join(libPath, 'atoms/fonts');

      for (const file of atomRequiredFiles) {
        const filePath = path.join(atomsDirFonts, file);
        expect(fs.existsSync(filePath)).toBe(true);
      }
    });
  });

  describe('Package.json Exports', () => {
    it('should have all exported files exist', async () => {
      const packageJsonPath = path.join(__dirname, 'package.json');
      /** @type {{main:string;module:string;typings:string;exports:Record<string,string>}} */
      const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));

      // Check main, module, and typings fields
      const mainFields = {
        main: packageJson.main,
        module: packageJson.module,
        typings: packageJson.typings,
      };

      for (const filePath of Object.values(mainFields)) {
        if (filePath) {
          const fullPath = path.join(__dirname, filePath);
          expect(fs.existsSync(fullPath)).toBe(true);

          const stats = await stat(fullPath);
          expect(stats.isFile()).toBe(true);
        }
      }

      // Check all exports paths

      /** @type {string[]} */
      const exportPaths = [];

      function extractPaths(/**@type {Record<string,string>} */ obj, currentPath = '') {
        for (const value of Object.values(obj)) {
          if (typeof value === 'string') {
            exportPaths.push(value);
          } else if (typeof value === 'object' && value !== null) {
            extractPaths(value, currentPath);
          }
        }
      }

      extractPaths(packageJson.exports);

      // Remove duplicates
      const uniquePaths = Array.from(new Set(exportPaths));

      for (const exportPath of uniquePaths) {
        // Wildcard support: we only handle simple trailing patterns like *.js or *.d.ts via a directory scan.
        // This avoids heavy glob expansion (tens of thousands of files) and keeps logic minimal.
        if (exportPath.includes('*')) {
          const relative = exportPath.slice(2); // remove ./
          const lastSlash = relative.lastIndexOf('/');
          const dirPart = relative.slice(0, lastSlash);
          const patternPart = relative.slice(lastSlash + 1); // e.g. *.js or *.d.ts
          const dirAbs = path.join(__dirname, dirPart);
          expect(fs.existsSync(dirAbs), `Directory for pattern missing: ${dirPart}`).toBe(true);

          // Support only simple patterns starting with *.
          if (!patternPart.startsWith('*.')) {
            throw new Error(`Unsupported wildcard pattern (only leading *.<ext> supported): ${exportPath}`);
          }
          const ext = patternPart.slice(1); // keep the dot(s), e.g. '.js', '.d.ts'
          const entries = await readdir(dirAbs);
          const matchName = entries.find((e) => e.endsWith(ext));
          expect(
            matchName,
            `No file ending with '${ext}' found in ${dirPart} for export pattern ${exportPath}`,
          ).toBeTruthy();
          if (matchName) {
            const full = path.join(dirAbs, matchName);
            const s = await stat(full);
            expect(s.isFile(), `Matched path is not a file: ${full}`).toBe(true);
          }
        } else {
          const fullPath = path.join(__dirname, exportPath.slice(2));
          expect(fs.existsSync(fullPath)).toBe(true);
          const stats = await stat(fullPath);
          expect(stats.isFile()).toBe(true);
        }
      }
    });
  });

  describe('Styles Files', () => {
    it(`should produce griffel processed .styles.js and unprocessed .styles.raw.js [lib]`, () => {
      const root = path.join(__dirname, 'lib');
      const processed = 'utils/useIconStyles.styles.js';
      const unprocessed = 'utils/useIconStyles.styles.raw.js';
      expect(fs.readFileSync(path.join(root, processed), 'utf8')).toMatchInlineSnapshot(`
        "import { __styles } from '@griffel/react';
        export const useStyles = __styles({
          "root": {
            "mc9l5x": "f1w7gpdv",
            "Bg96gwp": "fez10in"
          },
          "rtl": {
            "Bz10aip": "f13rod7r"
          }
        }, {
          "d": [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}", ".f13rod7r{transform:scaleX(-1);}"]
        });"
      `);
      expect(fs.readFileSync(path.join(root, unprocessed), 'utf8')).toMatchInlineSnapshot(`
        "import { makeStyles } from '@griffel/react';
        export const useStyles = makeStyles({
            root: {
                display: 'inline',
                lineHeight: 0,
            },
            rtl: {
                transform: 'scaleX(-1)',
            },
        });
        "
      `);
    });

    it(`should produce griffel processed .styles.js and unprocessed .styles.raw.js [lib-cjs]`, () => {
      const root = path.join(__dirname, 'lib-cjs');
      const processed = 'utils/useIconStyles.styles.js';
      const unprocessed = 'utils/useIconStyles.styles.raw.js';
      expect(fs.readFileSync(path.join(root, processed), 'utf8')).toMatchInlineSnapshot(`
       ""use strict";

       Object.defineProperty(exports, "__esModule", {
         value: true
       });
       exports.useStyles = void 0;
       const react_1 = require("@griffel/react");
       exports.useStyles = react_1.__styles({
         "root": {
           "mc9l5x": "f1w7gpdv",
           "Bg96gwp": "fez10in"
         },
         "rtl": {
           "Bz10aip": "f13rod7r"
         }
       }, {
         "d": [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}", ".f13rod7r{transform:scaleX(-1);}"]
       });"
     `);
      expect(fs.readFileSync(path.join(root, unprocessed), 'utf8')).toMatchInlineSnapshot(`
        ""use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.useStyles = void 0;
        const react_1 = require("@griffel/react");
        exports.useStyles = react_1.makeStyles({
            root: {
                display: 'inline',
                lineHeight: 0,
            },
            rtl: {
                transform: 'scaleX(-1)',
            },
        });
        "
      `);
    });

    it.each(['lib', 'lib-cjs'])('should have required styles files in utils (%s)', async (libDir) => {
      const utilsPath = path.join(__dirname, libDir, 'utils');
      const files = await readdir(utilsPath);

      // Check for .styles.raw.js files
      const rawStylesFiles = files.filter((file) => file.endsWith('.styles.raw.js'));
      expect(rawStylesFiles.length).toBeGreaterThan(0);

      // Check for .styles.js files
      const stylesFiles = files.filter((file) => file.endsWith('.styles.js') && !file.endsWith('.raw.js'));
      expect(stylesFiles.length).toBeGreaterThan(0);

      // Verify specific expected files exist
      const expectedStylesFiles = [
        'createFluentIcon.styles.raw.js',
        'createFluentIcon.styles.js',
        'bundleIcon.styles.raw.js',
        'bundleIcon.styles.js',
        'useIconStyles.styles.raw.js',
        'useIconStyles.styles.js',
      ];

      for (const file of expectedStylesFiles) {
        const filePath = path.join(utilsPath, file);
        expect(fs.existsSync(filePath)).toBe(true);
      }
    });

    it.each(['lib', 'lib-cjs'])('should have required font styles files in utils/fonts (%s)', async (libDir) => {
      const fontsUtilsPath = path.join(__dirname, libDir, 'utils', 'fonts');
      const expectedFontsStylesFiles = ['createFluentFontIcon.styles.raw.js', 'createFluentFontIcon.styles.js'];

      for (const file of expectedFontsStylesFiles) {
        const filePath = path.join(fontsUtilsPath, file);
        expect(fs.existsSync(filePath)).toBe(true);
      }
    });
  });

  describe('Chunk Files', () => {
    it.each(['lib', 'lib-cjs'])('should have chunk files with correct structure in %s', async (libDir) => {
      const iconsPath = path.join(__dirname, libDir, 'icons');
      const sizedIconsPath = path.join(__dirname, libDir, 'sizedIcons');

      // Check icons chunks
      const iconFiles = await readdir(iconsPath);
      const iconChunks = iconFiles.filter((file) => file.startsWith('chunk-'));
      expect(iconChunks.length).toBeGreaterThan(0);

      // Verify each chunk has both .js and .d.ts files
      const chunkNumbers = new Set();
      for (const file of iconChunks) {
        const match = file.match(/chunk-(\d+)\.(js|d\.ts)$/);
        if (match) {
          chunkNumbers.add(match[1]);
        }
      }

      for (const chunkNum of Array.from(chunkNumbers)) {
        const jsFile = path.join(iconsPath, `chunk-${chunkNum}.js`);
        const dtsFile = path.join(iconsPath, `chunk-${chunkNum}.d.ts`);

        expect(fs.existsSync(jsFile)).toBe(true);
        expect(fs.existsSync(dtsFile)).toBe(true);
      }

      // Check sizedIcons chunks
      const sizedIconFiles = await readdir(sizedIconsPath);
      const sizedIconChunks = sizedIconFiles.filter((file) => file.startsWith('chunk-'));
      expect(sizedIconChunks.length).toBeGreaterThan(0);

      // Verify each chunk has both .js and .d.ts files
      const sizedChunkNumbers = new Set();
      for (const file of sizedIconChunks) {
        const match = file.match(/chunk-(\d+)\.(js|d\.ts)$/);
        if (match) {
          sizedChunkNumbers.add(match[1]);
        }
      }

      for (const chunkNum of Array.from(sizedChunkNumbers)) {
        const jsFile = path.join(sizedIconsPath, `chunk-${chunkNum}.js`);
        const dtsFile = path.join(sizedIconsPath, `chunk-${chunkNum}.d.ts`);

        expect(fs.existsSync(jsFile)).toBe(true);
        expect(fs.existsSync(dtsFile)).toBe(true);
      }
    });

    it.each(['lib', 'lib-cjs'])('should have font chunk files with correct structure in %s', async (libDir) => {
      // Check fonts/icons chunks
      const fontsIconsPath = path.join(__dirname, libDir, 'fonts', 'icons');
      const fontsIconFiles = await readdir(fontsIconsPath);
      const fontsIconChunks = fontsIconFiles.filter((file) => file.startsWith('chunk-'));
      expect(fontsIconChunks.length).toBeGreaterThan(0);

      // Verify each font icon chunk has both .js and .d.ts files
      const fontsIconChunkNumbers = new Set();
      for (const file of fontsIconChunks) {
        const match = file.match(/chunk-(\d+)\.(js|d\.ts)$/);
        if (match) {
          fontsIconChunkNumbers.add(match[1]);
        }
      }

      for (const chunkNum of Array.from(fontsIconChunkNumbers)) {
        const jsFile = path.join(fontsIconsPath, `chunk-${chunkNum}.js`);
        const dtsFile = path.join(fontsIconsPath, `chunk-${chunkNum}.d.ts`);

        expect(fs.existsSync(jsFile)).toBe(true);
        expect(fs.existsSync(dtsFile)).toBe(true);
      }

      // Check fonts/sizedIcons chunks
      const fontsSizedIconsPath = path.join(__dirname, libDir, 'fonts', 'sizedIcons');
      const fontsSizedIconFiles = await readdir(fontsSizedIconsPath);
      const fontsSizedIconChunks = fontsSizedIconFiles.filter((file) => file.startsWith('chunk-'));
      expect(fontsSizedIconChunks.length).toBeGreaterThan(0);

      // Verify each font sized icon chunk has both .js and .d.ts files
      const fontsSizedIconChunkNumbers = new Set();
      for (const file of fontsSizedIconChunks) {
        const match = file.match(/chunk-(\d+)\.(js|d\.ts)$/);
        if (match) {
          fontsSizedIconChunkNumbers.add(match[1]);
        }
      }

      for (const chunkNum of Array.from(fontsSizedIconChunkNumbers)) {
        const jsFile = path.join(fontsSizedIconsPath, `chunk-${chunkNum}.js`);
        const dtsFile = path.join(fontsSizedIconsPath, `chunk-${chunkNum}.d.ts`);

        expect(fs.existsSync(jsFile)).toBe(true);
        expect(fs.existsSync(dtsFile)).toBe(true);
      }
    });
  });

  describe('Chunk Contents', () => {
    it(`should have valid generated contents  in entry points (lib)`, async () => {
      const mainEntry = path.join(__dirname, 'lib/index.js');
      const mainEntryDts = path.join(__dirname, 'lib/index.d.ts');
      const jsContent = await readFile(mainEntry, 'utf8');
      const dtsContent = await readFile(mainEntryDts, 'utf8');

      expect(jsContent).toMatchInlineSnapshot(`
        "export * from './icons/chunk-0';
        export * from './icons/chunk-1';
        export * from './icons/chunk-2';
        export * from './icons/chunk-3';
        export * from './icons/chunk-4';
        export * from './icons/chunk-5';
        export * from './icons/chunk-6';
        export * from './icons/chunk-7';
        export * from './icons/chunk-8';
        export * from './icons/chunk-9';
        export * from './icons/chunk-10';
        export * from './icons/chunk-11';
        export * from './icons/chunk-12';
        export * from './icons/chunk-13';
        export * from './icons/chunk-14';
        export * from './icons/chunk-15';
        export * from './icons/chunk-16';
        export * from './icons/chunk-17';
        export * from './icons/chunk-18';
        export * from './icons/chunk-19';
        export * from './icons/chunk-20';
        export * from './icons/chunk-21';
        export * from './icons/chunk-22';
        export * from './icons/chunk-23';
        export * from './icons/chunk-24';
        export * from './icons/chunk-25';
        export * from './icons/chunk-26';
        export * from './icons/chunk-27';
        export * from './icons/chunk-28';
        export * from './icons/chunk-29';
        export * from './sizedIcons/chunk-0';
        export * from './sizedIcons/chunk-1';
        export * from './sizedIcons/chunk-2';
        export * from './sizedIcons/chunk-3';
        export * from './sizedIcons/chunk-4';
        export * from './sizedIcons/chunk-5';
        export * from './sizedIcons/chunk-6';
        export * from './sizedIcons/chunk-7';
        export * from './sizedIcons/chunk-8';
        export * from './sizedIcons/chunk-9';
        export * from './sizedIcons/chunk-10';
        export * from './sizedIcons/chunk-11';
        export * from './sizedIcons/chunk-12';
        export * from './sizedIcons/chunk-13';
        export * from './sizedIcons/chunk-14';
        export * from './sizedIcons/chunk-15';
        export * from './sizedIcons/chunk-16';
        export * from './sizedIcons/chunk-17';
        export * from './sizedIcons/chunk-18';
        export * from './sizedIcons/chunk-19';
        export * from './sizedIcons/chunk-20';
        export * from './sizedIcons/chunk-21';
        export * from './sizedIcons/chunk-22';
        export * from './sizedIcons/chunk-23';
        export * from './sizedIcons/chunk-24';
        export * from './sizedIcons/chunk-25';
        export * from './sizedIcons/chunk-26';
        export * from './sizedIcons/chunk-27';
        export * from './sizedIcons/chunk-28';
        export * from './sizedIcons/chunk-29';
        export { wrapIcon } from './utils/wrapIcon';
        export { bundleIcon } from './utils/bundleIcon';
        export { createFluentIcon } from './utils/createFluentIcon';
        export * from './utils/useIconState';
        export * from './utils/constants';
        export { IconDirectionContextProvider, useIconContext } from './contexts/index';
        "
      `);
      expect(dtsContent).toMatchInlineSnapshot(`
        "export * from './icons/chunk-0';
        export * from './icons/chunk-1';
        export * from './icons/chunk-2';
        export * from './icons/chunk-3';
        export * from './icons/chunk-4';
        export * from './icons/chunk-5';
        export * from './icons/chunk-6';
        export * from './icons/chunk-7';
        export * from './icons/chunk-8';
        export * from './icons/chunk-9';
        export * from './icons/chunk-10';
        export * from './icons/chunk-11';
        export * from './icons/chunk-12';
        export * from './icons/chunk-13';
        export * from './icons/chunk-14';
        export * from './icons/chunk-15';
        export * from './icons/chunk-16';
        export * from './icons/chunk-17';
        export * from './icons/chunk-18';
        export * from './icons/chunk-19';
        export * from './icons/chunk-20';
        export * from './icons/chunk-21';
        export * from './icons/chunk-22';
        export * from './icons/chunk-23';
        export * from './icons/chunk-24';
        export * from './icons/chunk-25';
        export * from './icons/chunk-26';
        export * from './icons/chunk-27';
        export * from './icons/chunk-28';
        export * from './icons/chunk-29';
        export * from './sizedIcons/chunk-0';
        export * from './sizedIcons/chunk-1';
        export * from './sizedIcons/chunk-2';
        export * from './sizedIcons/chunk-3';
        export * from './sizedIcons/chunk-4';
        export * from './sizedIcons/chunk-5';
        export * from './sizedIcons/chunk-6';
        export * from './sizedIcons/chunk-7';
        export * from './sizedIcons/chunk-8';
        export * from './sizedIcons/chunk-9';
        export * from './sizedIcons/chunk-10';
        export * from './sizedIcons/chunk-11';
        export * from './sizedIcons/chunk-12';
        export * from './sizedIcons/chunk-13';
        export * from './sizedIcons/chunk-14';
        export * from './sizedIcons/chunk-15';
        export * from './sizedIcons/chunk-16';
        export * from './sizedIcons/chunk-17';
        export * from './sizedIcons/chunk-18';
        export * from './sizedIcons/chunk-19';
        export * from './sizedIcons/chunk-20';
        export * from './sizedIcons/chunk-21';
        export * from './sizedIcons/chunk-22';
        export * from './sizedIcons/chunk-23';
        export * from './sizedIcons/chunk-24';
        export * from './sizedIcons/chunk-25';
        export * from './sizedIcons/chunk-26';
        export * from './sizedIcons/chunk-27';
        export * from './sizedIcons/chunk-28';
        export * from './sizedIcons/chunk-29';
        export { wrapIcon } from './utils/wrapIcon';
        export { bundleIcon } from './utils/bundleIcon';
        export { createFluentIcon } from './utils/createFluentIcon';
        export * from './utils/useIconState';
        export * from './utils/constants';
        export { IconDirectionContextProvider, useIconContext } from './contexts/index';
        export type { FluentIconsProps } from './utils/FluentIconsProps.types';
        export type { FluentIcon } from './utils/createFluentIcon';
        export type { IconDirectionContextValue } from './contexts/index';
        "
      `);
    });

    it(`should have valid generated contents  in entry points (lib-cjs)`, async () => {
      const mainEntry = path.join(__dirname, 'lib-cjs/index.js');
      const mainEntryDts = path.join(__dirname, 'lib-cjs/index.d.ts');
      const jsContent = await readFile(mainEntry, 'utf8');
      const dtsContent = await readFile(mainEntryDts, 'utf8');
      expect(jsContent).toMatchInlineSnapshot(`
        ""use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.useIconContext = exports.IconDirectionContextProvider = exports.createFluentIcon = exports.bundleIcon = exports.wrapIcon = void 0;
        const tslib_1 = require("tslib");
        tslib_1.__exportStar(require("./icons/chunk-0"), exports);
        tslib_1.__exportStar(require("./icons/chunk-1"), exports);
        tslib_1.__exportStar(require("./icons/chunk-2"), exports);
        tslib_1.__exportStar(require("./icons/chunk-3"), exports);
        tslib_1.__exportStar(require("./icons/chunk-4"), exports);
        tslib_1.__exportStar(require("./icons/chunk-5"), exports);
        tslib_1.__exportStar(require("./icons/chunk-6"), exports);
        tslib_1.__exportStar(require("./icons/chunk-7"), exports);
        tslib_1.__exportStar(require("./icons/chunk-8"), exports);
        tslib_1.__exportStar(require("./icons/chunk-9"), exports);
        tslib_1.__exportStar(require("./icons/chunk-10"), exports);
        tslib_1.__exportStar(require("./icons/chunk-11"), exports);
        tslib_1.__exportStar(require("./icons/chunk-12"), exports);
        tslib_1.__exportStar(require("./icons/chunk-13"), exports);
        tslib_1.__exportStar(require("./icons/chunk-14"), exports);
        tslib_1.__exportStar(require("./icons/chunk-15"), exports);
        tslib_1.__exportStar(require("./icons/chunk-16"), exports);
        tslib_1.__exportStar(require("./icons/chunk-17"), exports);
        tslib_1.__exportStar(require("./icons/chunk-18"), exports);
        tslib_1.__exportStar(require("./icons/chunk-19"), exports);
        tslib_1.__exportStar(require("./icons/chunk-20"), exports);
        tslib_1.__exportStar(require("./icons/chunk-21"), exports);
        tslib_1.__exportStar(require("./icons/chunk-22"), exports);
        tslib_1.__exportStar(require("./icons/chunk-23"), exports);
        tslib_1.__exportStar(require("./icons/chunk-24"), exports);
        tslib_1.__exportStar(require("./icons/chunk-25"), exports);
        tslib_1.__exportStar(require("./icons/chunk-26"), exports);
        tslib_1.__exportStar(require("./icons/chunk-27"), exports);
        tslib_1.__exportStar(require("./icons/chunk-28"), exports);
        tslib_1.__exportStar(require("./icons/chunk-29"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-0"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-1"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-2"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-3"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-4"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-5"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-6"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-7"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-8"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-9"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-10"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-11"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-12"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-13"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-14"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-15"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-16"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-17"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-18"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-19"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-20"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-21"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-22"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-23"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-24"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-25"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-26"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-27"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-28"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-29"), exports);
        var wrapIcon_1 = require("./utils/wrapIcon");
        Object.defineProperty(exports, "wrapIcon", { enumerable: true, get: function () { return wrapIcon_1.wrapIcon; } });
        var bundleIcon_1 = require("./utils/bundleIcon");
        Object.defineProperty(exports, "bundleIcon", { enumerable: true, get: function () { return bundleIcon_1.bundleIcon; } });
        var createFluentIcon_1 = require("./utils/createFluentIcon");
        Object.defineProperty(exports, "createFluentIcon", { enumerable: true, get: function () { return createFluentIcon_1.createFluentIcon; } });
        tslib_1.__exportStar(require("./utils/useIconState"), exports);
        tslib_1.__exportStar(require("./utils/constants"), exports);
        var index_1 = require("./contexts/index");
        Object.defineProperty(exports, "IconDirectionContextProvider", { enumerable: true, get: function () { return index_1.IconDirectionContextProvider; } });
        Object.defineProperty(exports, "useIconContext", { enumerable: true, get: function () { return index_1.useIconContext; } });
        "
      `);
      expect(dtsContent).toMatchInlineSnapshot(`
        "export * from './icons/chunk-0';
        export * from './icons/chunk-1';
        export * from './icons/chunk-2';
        export * from './icons/chunk-3';
        export * from './icons/chunk-4';
        export * from './icons/chunk-5';
        export * from './icons/chunk-6';
        export * from './icons/chunk-7';
        export * from './icons/chunk-8';
        export * from './icons/chunk-9';
        export * from './icons/chunk-10';
        export * from './icons/chunk-11';
        export * from './icons/chunk-12';
        export * from './icons/chunk-13';
        export * from './icons/chunk-14';
        export * from './icons/chunk-15';
        export * from './icons/chunk-16';
        export * from './icons/chunk-17';
        export * from './icons/chunk-18';
        export * from './icons/chunk-19';
        export * from './icons/chunk-20';
        export * from './icons/chunk-21';
        export * from './icons/chunk-22';
        export * from './icons/chunk-23';
        export * from './icons/chunk-24';
        export * from './icons/chunk-25';
        export * from './icons/chunk-26';
        export * from './icons/chunk-27';
        export * from './icons/chunk-28';
        export * from './icons/chunk-29';
        export * from './sizedIcons/chunk-0';
        export * from './sizedIcons/chunk-1';
        export * from './sizedIcons/chunk-2';
        export * from './sizedIcons/chunk-3';
        export * from './sizedIcons/chunk-4';
        export * from './sizedIcons/chunk-5';
        export * from './sizedIcons/chunk-6';
        export * from './sizedIcons/chunk-7';
        export * from './sizedIcons/chunk-8';
        export * from './sizedIcons/chunk-9';
        export * from './sizedIcons/chunk-10';
        export * from './sizedIcons/chunk-11';
        export * from './sizedIcons/chunk-12';
        export * from './sizedIcons/chunk-13';
        export * from './sizedIcons/chunk-14';
        export * from './sizedIcons/chunk-15';
        export * from './sizedIcons/chunk-16';
        export * from './sizedIcons/chunk-17';
        export * from './sizedIcons/chunk-18';
        export * from './sizedIcons/chunk-19';
        export * from './sizedIcons/chunk-20';
        export * from './sizedIcons/chunk-21';
        export * from './sizedIcons/chunk-22';
        export * from './sizedIcons/chunk-23';
        export * from './sizedIcons/chunk-24';
        export * from './sizedIcons/chunk-25';
        export * from './sizedIcons/chunk-26';
        export * from './sizedIcons/chunk-27';
        export * from './sizedIcons/chunk-28';
        export * from './sizedIcons/chunk-29';
        export { wrapIcon } from './utils/wrapIcon';
        export { bundleIcon } from './utils/bundleIcon';
        export { createFluentIcon } from './utils/createFluentIcon';
        export * from './utils/useIconState';
        export * from './utils/constants';
        export { IconDirectionContextProvider, useIconContext } from './contexts/index';
        export type { FluentIconsProps } from './utils/FluentIconsProps.types';
        export type { FluentIcon } from './utils/createFluentIcon';
        export type { IconDirectionContextValue } from './contexts/index';
        "
      `);
    });

    it(`should have valid generated contents  in entry points (lib/fonts)`, async () => {
      const mainEntry = path.join(__dirname, 'lib/fonts/index.js');
      const mainEntryDts = path.join(__dirname, 'lib/fonts/index.d.ts');
      const jsContent = await readFile(mainEntry, 'utf8');
      const dtsContent = await readFile(mainEntryDts, 'utf8');

      expect(jsContent).toMatchInlineSnapshot(`
        "export * from './icons/chunk-0';
        export * from './icons/chunk-1';
        export * from './icons/chunk-2';
        export * from './icons/chunk-3';
        export * from './icons/chunk-4';
        export * from './icons/chunk-5';
        export * from './icons/chunk-6';
        export * from './icons/chunk-7';
        export * from './icons/chunk-8';
        export * from './icons/chunk-9';
        export * from './icons/chunk-10';
        export * from './icons/chunk-11';
        export * from './icons/chunk-12';
        export * from './icons/chunk-13';
        export * from './icons/chunk-14';
        export * from './icons/chunk-15';
        export * from './icons/chunk-16';
        export * from './icons/chunk-17';
        export * from './icons/chunk-18';
        export * from './icons/chunk-19';
        export * from './icons/chunk-20';
        export * from './icons/chunk-21';
        export * from './icons/chunk-22';
        export * from './icons/chunk-23';
        export * from './icons/chunk-24';
        export * from './icons/chunk-25';
        export * from './icons/chunk-26';
        export * from './icons/chunk-27';
        export * from './icons/chunk-28';
        export * from './icons/chunk-29';
        export * from './sizedIcons/chunk-0';
        export * from './sizedIcons/chunk-1';
        export * from './sizedIcons/chunk-2';
        export * from './sizedIcons/chunk-3';
        export * from './sizedIcons/chunk-4';
        export * from './sizedIcons/chunk-5';
        export * from './sizedIcons/chunk-6';
        export * from './sizedIcons/chunk-7';
        export * from './sizedIcons/chunk-8';
        export * from './sizedIcons/chunk-9';
        export * from './sizedIcons/chunk-10';
        export * from './sizedIcons/chunk-11';
        export * from './sizedIcons/chunk-12';
        export * from './sizedIcons/chunk-13';
        export * from './sizedIcons/chunk-14';
        export * from './sizedIcons/chunk-15';
        export * from './sizedIcons/chunk-16';
        export * from './sizedIcons/chunk-17';
        export * from './sizedIcons/chunk-18';
        export * from './sizedIcons/chunk-19';
        export * from './sizedIcons/chunk-20';
        export * from './sizedIcons/chunk-21';
        export * from './sizedIcons/chunk-22';
        export * from './sizedIcons/chunk-23';
        export * from './sizedIcons/chunk-24';
        export * from './sizedIcons/chunk-25';
        export * from './sizedIcons/chunk-26';
        export * from './sizedIcons/chunk-27';
        export * from './sizedIcons/chunk-28';
        export * from './sizedIcons/chunk-29';
        export { wrapIcon } from '../utils/wrapIcon';
        export { bundleIcon } from '../utils/bundleIcon';
        export { createFluentIcon } from '../utils/createFluentIcon';
        export { createFluentFontIcon } from '../utils/fonts/createFluentFontIcon';
        export * from '../utils/useIconState';
        export * from '../utils/constants';
        export { IconDirectionContextProvider, useIconContext } from '../contexts/index';
        "
      `);
      expect(dtsContent).toMatchInlineSnapshot(`
        "export * from './icons/chunk-0';
        export * from './icons/chunk-1';
        export * from './icons/chunk-2';
        export * from './icons/chunk-3';
        export * from './icons/chunk-4';
        export * from './icons/chunk-5';
        export * from './icons/chunk-6';
        export * from './icons/chunk-7';
        export * from './icons/chunk-8';
        export * from './icons/chunk-9';
        export * from './icons/chunk-10';
        export * from './icons/chunk-11';
        export * from './icons/chunk-12';
        export * from './icons/chunk-13';
        export * from './icons/chunk-14';
        export * from './icons/chunk-15';
        export * from './icons/chunk-16';
        export * from './icons/chunk-17';
        export * from './icons/chunk-18';
        export * from './icons/chunk-19';
        export * from './icons/chunk-20';
        export * from './icons/chunk-21';
        export * from './icons/chunk-22';
        export * from './icons/chunk-23';
        export * from './icons/chunk-24';
        export * from './icons/chunk-25';
        export * from './icons/chunk-26';
        export * from './icons/chunk-27';
        export * from './icons/chunk-28';
        export * from './icons/chunk-29';
        export * from './sizedIcons/chunk-0';
        export * from './sizedIcons/chunk-1';
        export * from './sizedIcons/chunk-2';
        export * from './sizedIcons/chunk-3';
        export * from './sizedIcons/chunk-4';
        export * from './sizedIcons/chunk-5';
        export * from './sizedIcons/chunk-6';
        export * from './sizedIcons/chunk-7';
        export * from './sizedIcons/chunk-8';
        export * from './sizedIcons/chunk-9';
        export * from './sizedIcons/chunk-10';
        export * from './sizedIcons/chunk-11';
        export * from './sizedIcons/chunk-12';
        export * from './sizedIcons/chunk-13';
        export * from './sizedIcons/chunk-14';
        export * from './sizedIcons/chunk-15';
        export * from './sizedIcons/chunk-16';
        export * from './sizedIcons/chunk-17';
        export * from './sizedIcons/chunk-18';
        export * from './sizedIcons/chunk-19';
        export * from './sizedIcons/chunk-20';
        export * from './sizedIcons/chunk-21';
        export * from './sizedIcons/chunk-22';
        export * from './sizedIcons/chunk-23';
        export * from './sizedIcons/chunk-24';
        export * from './sizedIcons/chunk-25';
        export * from './sizedIcons/chunk-26';
        export * from './sizedIcons/chunk-27';
        export * from './sizedIcons/chunk-28';
        export * from './sizedIcons/chunk-29';
        export { wrapIcon } from '../utils/wrapIcon';
        export { bundleIcon } from '../utils/bundleIcon';
        export { createFluentIcon } from '../utils/createFluentIcon';
        export { createFluentFontIcon } from '../utils/fonts/createFluentFontIcon';
        export * from '../utils/useIconState';
        export * from '../utils/constants';
        export { IconDirectionContextProvider, useIconContext } from '../contexts/index';
        export type { FluentIconsProps } from '../utils/FluentIconsProps.types';
        export type { FluentIcon } from '../utils/createFluentIcon';
        export type { FluentFontIcon } from '../utils/fonts/createFluentFontIcon';
        export type { IconDirectionContextValue } from '../contexts/index';
        "
      `);
    });

    it(`should have valid generated contents  in entry points (lib-cjs/fonts)`, async () => {
      const mainEntry = path.join(__dirname, 'lib-cjs/fonts/index.js');
      const mainEntryDts = path.join(__dirname, 'lib-cjs/fonts/index.d.ts');
      const jsContent = await readFile(mainEntry, 'utf8');
      const dtsContent = await readFile(mainEntryDts, 'utf8');

      expect(jsContent).toMatchInlineSnapshot(`
        ""use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.useIconContext = exports.IconDirectionContextProvider = exports.createFluentFontIcon = exports.createFluentIcon = exports.bundleIcon = exports.wrapIcon = void 0;
        const tslib_1 = require("tslib");
        tslib_1.__exportStar(require("./icons/chunk-0"), exports);
        tslib_1.__exportStar(require("./icons/chunk-1"), exports);
        tslib_1.__exportStar(require("./icons/chunk-2"), exports);
        tslib_1.__exportStar(require("./icons/chunk-3"), exports);
        tslib_1.__exportStar(require("./icons/chunk-4"), exports);
        tslib_1.__exportStar(require("./icons/chunk-5"), exports);
        tslib_1.__exportStar(require("./icons/chunk-6"), exports);
        tslib_1.__exportStar(require("./icons/chunk-7"), exports);
        tslib_1.__exportStar(require("./icons/chunk-8"), exports);
        tslib_1.__exportStar(require("./icons/chunk-9"), exports);
        tslib_1.__exportStar(require("./icons/chunk-10"), exports);
        tslib_1.__exportStar(require("./icons/chunk-11"), exports);
        tslib_1.__exportStar(require("./icons/chunk-12"), exports);
        tslib_1.__exportStar(require("./icons/chunk-13"), exports);
        tslib_1.__exportStar(require("./icons/chunk-14"), exports);
        tslib_1.__exportStar(require("./icons/chunk-15"), exports);
        tslib_1.__exportStar(require("./icons/chunk-16"), exports);
        tslib_1.__exportStar(require("./icons/chunk-17"), exports);
        tslib_1.__exportStar(require("./icons/chunk-18"), exports);
        tslib_1.__exportStar(require("./icons/chunk-19"), exports);
        tslib_1.__exportStar(require("./icons/chunk-20"), exports);
        tslib_1.__exportStar(require("./icons/chunk-21"), exports);
        tslib_1.__exportStar(require("./icons/chunk-22"), exports);
        tslib_1.__exportStar(require("./icons/chunk-23"), exports);
        tslib_1.__exportStar(require("./icons/chunk-24"), exports);
        tslib_1.__exportStar(require("./icons/chunk-25"), exports);
        tslib_1.__exportStar(require("./icons/chunk-26"), exports);
        tslib_1.__exportStar(require("./icons/chunk-27"), exports);
        tslib_1.__exportStar(require("./icons/chunk-28"), exports);
        tslib_1.__exportStar(require("./icons/chunk-29"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-0"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-1"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-2"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-3"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-4"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-5"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-6"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-7"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-8"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-9"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-10"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-11"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-12"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-13"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-14"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-15"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-16"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-17"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-18"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-19"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-20"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-21"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-22"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-23"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-24"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-25"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-26"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-27"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-28"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-29"), exports);
        var wrapIcon_1 = require("../utils/wrapIcon");
        Object.defineProperty(exports, "wrapIcon", { enumerable: true, get: function () { return wrapIcon_1.wrapIcon; } });
        var bundleIcon_1 = require("../utils/bundleIcon");
        Object.defineProperty(exports, "bundleIcon", { enumerable: true, get: function () { return bundleIcon_1.bundleIcon; } });
        var createFluentIcon_1 = require("../utils/createFluentIcon");
        Object.defineProperty(exports, "createFluentIcon", { enumerable: true, get: function () { return createFluentIcon_1.createFluentIcon; } });
        var createFluentFontIcon_1 = require("../utils/fonts/createFluentFontIcon");
        Object.defineProperty(exports, "createFluentFontIcon", { enumerable: true, get: function () { return createFluentFontIcon_1.createFluentFontIcon; } });
        tslib_1.__exportStar(require("../utils/useIconState"), exports);
        tslib_1.__exportStar(require("../utils/constants"), exports);
        var index_1 = require("../contexts/index");
        Object.defineProperty(exports, "IconDirectionContextProvider", { enumerable: true, get: function () { return index_1.IconDirectionContextProvider; } });
        Object.defineProperty(exports, "useIconContext", { enumerable: true, get: function () { return index_1.useIconContext; } });
        "
      `);
      expect(dtsContent).toMatchInlineSnapshot(`
        "export * from './icons/chunk-0';
        export * from './icons/chunk-1';
        export * from './icons/chunk-2';
        export * from './icons/chunk-3';
        export * from './icons/chunk-4';
        export * from './icons/chunk-5';
        export * from './icons/chunk-6';
        export * from './icons/chunk-7';
        export * from './icons/chunk-8';
        export * from './icons/chunk-9';
        export * from './icons/chunk-10';
        export * from './icons/chunk-11';
        export * from './icons/chunk-12';
        export * from './icons/chunk-13';
        export * from './icons/chunk-14';
        export * from './icons/chunk-15';
        export * from './icons/chunk-16';
        export * from './icons/chunk-17';
        export * from './icons/chunk-18';
        export * from './icons/chunk-19';
        export * from './icons/chunk-20';
        export * from './icons/chunk-21';
        export * from './icons/chunk-22';
        export * from './icons/chunk-23';
        export * from './icons/chunk-24';
        export * from './icons/chunk-25';
        export * from './icons/chunk-26';
        export * from './icons/chunk-27';
        export * from './icons/chunk-28';
        export * from './icons/chunk-29';
        export * from './sizedIcons/chunk-0';
        export * from './sizedIcons/chunk-1';
        export * from './sizedIcons/chunk-2';
        export * from './sizedIcons/chunk-3';
        export * from './sizedIcons/chunk-4';
        export * from './sizedIcons/chunk-5';
        export * from './sizedIcons/chunk-6';
        export * from './sizedIcons/chunk-7';
        export * from './sizedIcons/chunk-8';
        export * from './sizedIcons/chunk-9';
        export * from './sizedIcons/chunk-10';
        export * from './sizedIcons/chunk-11';
        export * from './sizedIcons/chunk-12';
        export * from './sizedIcons/chunk-13';
        export * from './sizedIcons/chunk-14';
        export * from './sizedIcons/chunk-15';
        export * from './sizedIcons/chunk-16';
        export * from './sizedIcons/chunk-17';
        export * from './sizedIcons/chunk-18';
        export * from './sizedIcons/chunk-19';
        export * from './sizedIcons/chunk-20';
        export * from './sizedIcons/chunk-21';
        export * from './sizedIcons/chunk-22';
        export * from './sizedIcons/chunk-23';
        export * from './sizedIcons/chunk-24';
        export * from './sizedIcons/chunk-25';
        export * from './sizedIcons/chunk-26';
        export * from './sizedIcons/chunk-27';
        export * from './sizedIcons/chunk-28';
        export * from './sizedIcons/chunk-29';
        export { wrapIcon } from '../utils/wrapIcon';
        export { bundleIcon } from '../utils/bundleIcon';
        export { createFluentIcon } from '../utils/createFluentIcon';
        export { createFluentFontIcon } from '../utils/fonts/createFluentFontIcon';
        export * from '../utils/useIconState';
        export * from '../utils/constants';
        export { IconDirectionContextProvider, useIconContext } from '../contexts/index';
        export type { FluentIconsProps } from '../utils/FluentIconsProps.types';
        export type { FluentIcon } from '../utils/createFluentIcon';
        export type { FluentFontIcon } from '../utils/fonts/createFluentFontIcon';
        export type { IconDirectionContextValue } from '../contexts/index';
        "
      `);
    });

    it('should have valid chunk contents in lib icons', async () => {
      const iconsPath = path.join(__dirname, 'lib', 'icons');
      const iconFiles = await readdir(iconsPath);
      const iconChunks = iconFiles.filter((file) => file.startsWith('chunk-') && file.endsWith('.js'));

      expect(iconChunks.length).toBeGreaterThan(0);

      // Take the first chunk for content verification
      const firstChunk = iconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        const jsFile = path.join(iconsPath, `chunk-${chunkNumber}.js`);
        const dtsFile = path.join(iconsPath, `chunk-${chunkNumber}.d.ts`);

        // Read and verify JS file content with inline snapshot
        const jsContent = await readFile(jsFile, 'utf8');
        const trimmedJSContent = trimContentForSnapshot(jsContent);
        expect(trimmedJSContent).toMatchInlineSnapshot(`
          ""use client";
          import { createFluentIcon } from '../utils/createFluentIcon';
          export const BackpackFilled = ( /*#__PURE__*/createFluentIcon('BackpackFilled', "1em", ["M8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v2h12v-2a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm0 2c.5 0 1 .06 1.47.18a1.5 1.5 0 0 0-2.94 0C9 4.06 9.5 4 10 4ZM8.7 7h2.6c.94 0 1.7.76 1.7 1.7 0 .72-.58 1.3-1.3 1.3H8.3A1.3 1.3 0 0 1 7 8.7C7 7.76 7.76 7 8.7 7ZM7 14.5V13H4v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2H8v1.5a.5.5 0 0 1-1 0Z"]));
          export const BackpackRegular = ( /*#__PURE__*/createFluentIcon('BackpackRegular', "1em", ["M8.7 7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.4c.72 0 1.3-.58 1.3-1.3 0-.94-.76-1.7-1.7-1.7H8.7ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm5 10H5v-2a5 5 0 0 1 10 0v2Zm-8 2.5a.5.5 0 0 0 1 0V13h7v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h2v1.5ZM10 4c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Z"]));
          export const BackpackAddFilled = ( /*#__PURE__*/createFluentIcon('BackpackAddFilled', "1em", ["M7.5 4.5a2.5 2.5 0 0 1 5 0v.04a6 6 0 0 1 3.45 4.65 5.5 5.5 0 0 0-3.07.05c.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04a5.53 5.53 0 0 0-1.74 2H4v-2a6 6 0 0 1 3.5-5.46V4.5Zm3.97-.32a1.5 1.5 0 0 0-2.94 0 6.01 6.01 0 0 1 2.94 0ZM9 14.5c0-.52.07-1.02.2-1.5H8v1.5a.5.5 0 0 1-1 0V13H4v2a3 3 0 0 0 3 3h3.26A5.48 5.48 0 0 1 9 14.5ZM8.7 8a.7.7 0 0 0-.7.7c0 .17.13.3.3.3h3.4a.3.3 0 0 0 .3-.3.7.7 0 0 0-.7-.7H8.7ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          export const BackpackAddRegular = ( /*#__PURE__*/createFluentIcon('BackpackAddRegular', "1em", ["M10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h3.26a5.5 5.5 0 0 1-.66-1H7a2 2 0 0 1-2-2v-2h2v1.5a.5.5 0 0 0 1 0V13h1.2c.1-.35.24-.68.4-1H5v-2a5 5 0 0 1 9.9-.99c.36.03.71.1 1.05.18a6 6 0 0 0-3.45-4.65V4.5A2.5 2.5 0 0 0 10 2Zm0 2c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Zm1.34 6c.46-.33.98-.59 1.54-.76.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3Zm11 5.8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          export const BackspaceFilled = ( /*#__PURE__*/createFluentIcon('BackspaceFilled', "1em", ["M8.28 4a2.5 2.5 0 0 0-1.7.66L2.8 8.16a2.5 2.5 0 0 0 0 3.68l3.79 3.5a2.5 2.5 0 0 0 1.7.66h7.21a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H8.28Zm.87 3.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7Z"]));
          export const BackspaceRegular = ( /*#__PURE__*/createFluentIcon('BackspaceRegular', "1em", ["M9.15 7.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7ZM6.59 4.66A2.5 2.5 0 0 1 8.29 4h7.21A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5H8.28a2.5 2.5 0 0 1-1.7-.66l-3.78-3.5a2.5 2.5 0 0 1 0-3.68l3.79-3.5Zm1.7.34c-.38 0-.75.14-1.03.4L3.48 8.9a1.5 1.5 0 0 0 0 2.2l3.78 3.5c.28.26.65.4 1.02.4h7.22c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5H8.28Z"]));
          export const CalculatorFilled = ( /*#__PURE__*/createFluentIcon('CalculatorFilled', "1em", ["M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 2Zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1C6 4.67 6.67 4 7.5 4Zm.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"]));
          export const CalculatorRegular = ( /*#__PURE__*/createFluentIcon('CalculatorRegular', "1em", ["M8 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.5 4C6.67 4 6 4.67 6 5.5v1C6 7.33 6.67 8 7.5 8h5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-5ZM7 5.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1Zm9 10a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v11Zm-1-11c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11Z"]));
          export const CalculatorArrowClockwiseFilled = ( /*#__PURE__*/createFluentIcon('CalculatorArrowClockwiseFilled', "1em", ["M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h3.77a5.48 5.48 0 0 1-.64-6.07 1 1 0 1 1 1.17-1.52A5.48 5.48 0 0 1 16 9.19V4.5A2.5 2.5 0 0 0 13.5 2Zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1C6 4.67 6.67 4 7.5 4Zm.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9.5-1.52a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 1 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 1 0 0 1h2Z"]));
          export const CalculatorArrowClockwiseRegular = ( /*#__PURE__*/createFluentIcon('CalculatorArrowClockwiseRegular', "1em", ["M7 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.63-3.07c.3-.58.7-1.1 1.17-1.52a1 1 0 1 0-1.17 1.52ZM6.5 17h3.11c.18.36.4.7.66 1H6.5A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v4.69c-.32-.1-.66-.16-1-.19V4.5c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5ZM6 5.5C6 4.67 6.67 4 7.5 4h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Zm10 7.48a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 1 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 1 0 0 1h2Z"]));
          export const CalculatorMultipleFilled = ( /*#__PURE__*/createFluentIcon('CalculatorMultipleFilled', "1em", ["M5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM5 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7.5 18a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z"]));
          export const CalculatorMultipleRegular = ( /*#__PURE__*/createFluentIcon('CalculatorMultipleRegular', "1em", ["M6 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6Zm0 1h6v2H6V5Zm2 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM4 4.5C4 3.67 4.67 3 5.5 3h7c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 4 13.5v-9ZM7.5 18a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z"]));
          export const CalendarColor = ( /*#__PURE__*/createFluentIcon('CalendarColor', "1em", \`<path d="M17 6H3v8.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V6Z" fill="url(#ic_fluent_calendar_20_color__a)"/><path d="M17 6H3v8.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V6Z" fill="url(#ic_fluent_calendar_20_color__b)"/><g filter="url(#ic_fluent_calendar_20_color__c)"><path d="M8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="url(#ic_fluent_calendar_20_color__d)"/><path d="M8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="url(#ic_fluent_calendar_20_color__e)"/><path d="M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="url(#ic_fluent_calendar_20_color__f)"/><path d="M10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="url(#ic_fluent_calendar_20_color__g)"/><path d="M14 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="url(#ic_fluent_calendar_20_color__h)"/></g><path d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V7h14V5.5Z" fill="url(#ic_fluent_calendar_20_color__i)"/><defs><linearGradient id="ic_fluent_calendar_20_color__a" x1="12.53" y1="18.35" x2="8.5" y2="6.56" gradientUnits="userSpaceOnUse"><stop stop-color="#B3E0FF"/><stop offset="1" stop-color="#B3E0FF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__b" x1="11.5" y1="10.5" x2="13.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop stop-color="#DCF8FF" stop-opacity="0"/><stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__d" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__e" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__f" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__g" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__h" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__i" x1="3" y1="3" x2="15.02" y2="-.77" gradientUnits="userSpaceOnUse"><stop stop-color="#0094F0"/><stop offset="1" stop-color="#2764E7"/></linearGradient><filter id="ic_fluent_calendar_20_color__c" x="4.67" y="8.33" width="10.67" height="7.67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy=".67"/><feGaussianBlur stdDeviation=".67"/><feColorMatrix values="0 0 0 0 0.1242 0 0 0 0 0.323337 0 0 0 0 0.7958 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_378174_9787"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_378174_9787" result="shape"/></filter></defs>\`, { color: true }));
          export const CalendarFilled = ( /*#__PURE__*/createFluentIcon('CalendarFilled', "1em", ["M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7Zm-9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"], { flipInRtl: true }));
          export const CalendarRegular = ( /*#__PURE__*/createFluentIcon('CalendarRegular', "1em", ["M7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5V7Zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Z"], { flipInRtl: true }));
          export const Calendar3DayFilled = ( /*#__PURE__*/createFluentIcon('Calendar3DayFilled', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-8 3a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 6.5 6ZM10 6a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 10 6Zm3.5 0a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41a.5.5 0 0 0-.5-.41Z"]));
          export const Calendar3DayRegular = ( /*#__PURE__*/createFluentIcon('Calendar3DayRegular', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5Zm-8 2a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5ZM10 6a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Zm3.5 0a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Z"]));
          export const CalendarAddFilled = ( /*#__PURE__*/createFluentIcon('CalendarAddFilled', "1em", ["M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          export const CalendarAddRegular = ( /*#__PURE__*/createFluentIcon('CalendarAddRegular', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          export const CalendarAgendaFilled = ( /*#__PURE__*/createFluentIcon('CalendarAgendaFilled', "1em", ["M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9Zm-3-8a.5.5 0 0 0-.41-.5H6.41a.5.5 0 0 0 0 1h7.18a.5.5 0 0 0 .41-.5Zm0 3.5a.5.5 0 0 0-.41-.5H6.41a.5.5 0 0 0 0 1h7.18A.5.5 0 0 0 14 10Zm0 3.5a.5.5 0 0 0-.41-.5H6.41a.5.5 0 0 0 0 1h7.18a.5.5 0 0 0 .41-.5Z"]));
          export const CalendarAgendaRegular = ( /*#__PURE__*/createFluentIcon('CalendarAgendaRegular', "1em", ["M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9Zm-1 0v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5Zm-2-8a.5.5 0 0 1-.41.5H6.5a.5.5 0 0 1-.09-1h7.09c.28 0 .5.22.5.5Zm0 3.5a.5.5 0 0 1-.41.5H6.5a.5.5 0 0 1-.09-1h7.09c.28 0 .5.22.5.5Zm0 3.5a.5.5 0 0 1-.41.5H6.5a.5.5 0 0 1-.09-1h7.09c.28 0 .5.22.5.5Z"]));
          export const CalendarArrowCounterclockwiseFilled = ( /*#__PURE__*/createFluentIcon('CalendarArrowCounterclockwiseFilled', "1em", ["M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H6.11A1.5 1.5 0 0 0 4 5.87V7.3l.65-.64a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7l.65.64V5.5ZM17 7v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V9.92a1.5 1.5 0 0 0 1.55-.36l1.5-1.5c.3-.3.44-.68.44-1.06H17ZM7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"]));
          export const CalendarArrowCounterclockwiseRegular = ( /*#__PURE__*/createFluentIcon('CalendarArrowCounterclockwiseRegular', "1em", ["M5.5 17A2.5 2.5 0 0 1 3 14.5v-4a.5.5 0 0 1 1 0v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H6.5c0-.36-.14-.72-.4-1H16v-.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v1.8l.65-.65a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7l.65.64V5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9ZM8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"]));
          export const CalendarArrowDownFilled = ( /*#__PURE__*/createFluentIcon('CalendarArrowDownFilled', "1em", ["M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6V7Zm2 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z"]));
          export const CalendarArrowDownRegular = ( /*#__PURE__*/createFluentIcon('CalendarArrowDownRegular', "1em", ["M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5Zm15 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z"]));
          export const CalendarArrowRepeatAllFilled = ( /*#__PURE__*/createFluentIcon('CalendarArrowRepeatAllFilled', "1em", ["M17 11V7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.47a1.5 1.5 0 0 1-1.17-.6A3.99 3.99 0 0 1 12 10h.5a1.5 1.5 0 0 1 2.56-1.06l1.5 1.5c.17.16.28.36.36.56H17Zm0-5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm-2.65 4.15a.5.5 0 0 0-.7.7l.64.65H12a3 3 0 0 0-2.4 4.8.5.5 0 1 0 .8-.6A2 2 0 0 1 12 12h2.3l-.65.65a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5Zm3.05 2.55a.5.5 0 0 0-.8.6A2 2 0 0 1 15 16h-2.3l.65-.65a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H15a3 3 0 0 0 2.4-4.8Z"]));
          export const CalendarArrowRepeatAllRegular = ( /*#__PURE__*/createFluentIcon('CalendarArrowRepeatAllRegular', "1em", ["M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.47a1.5 1.5 0 0 1-1.17-.6c-.1-.13-.18-.26-.26-.4H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.88l.56.56c.17.16.28.36.36.56H17V5.5ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Zm8.85 5.65a.5.5 0 0 0-.7.7l.64.65H12a3 3 0 0 0-2.4 4.8.5.5 0 1 0 .8-.6A2 2 0 0 1 12 12h2.3l-.65.65a.5.5 0 0 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5Zm3.05 2.55a.5.5 0 0 0-.8.6A2 2 0 0 1 15 16h-2.3l.65-.65a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H15a3 3 0 0 0 2.4-4.8Z"]));
          export const CalendarArrowRightFilled = ( /*#__PURE__*/createFluentIcon('CalendarArrowRightFilled', "1em", ["M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm0 4.1V7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6Zm2 4.9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from '../utils/createFluentIcon';
          export declare const BackpackFilled: FluentIcon;
          export declare const BackpackRegular: FluentIcon;
          export declare const BackpackAddFilled: FluentIcon;
          export declare const BackpackAddRegular: FluentIcon;
          export declare const BackspaceFilled: FluentIcon;
          export declare const BackspaceRegular: FluentIcon;
          export declare const CalculatorFilled: FluentIcon;
          export declare const CalculatorRegular: FluentIcon;
          export declare const CalculatorArrowClockwiseFilled: FluentIcon;
          export declare const CalculatorArrowClockwiseRegular: FluentIcon;
          export declare const CalculatorMultipleFilled: FluentIcon;
          export declare const CalculatorMultipleRegular: FluentIcon;
          export declare const CalendarColor: FluentIcon;
          export declare const CalendarFilled: FluentIcon;
          export declare const CalendarRegular: FluentIcon;
          export declare const Calendar3DayFilled: FluentIcon;
          export declare const Calendar3DayRegular: FluentIcon;
          export declare const CalendarAddFilled: FluentIcon;
          export declare const CalendarAddRegular: FluentIcon;
          export declare const CalendarAgendaFilled: FluentIcon;
          export declare const CalendarAgendaRegular: FluentIcon;
          export declare const CalendarArrowCounterclockwiseFilled: FluentIcon;
          export declare const CalendarArrowCounterclockwiseRegular: FluentIcon;
          export declare const CalendarArrowDownFilled: FluentIcon;
          export declare const CalendarArrowDownRegular: FluentIcon;
          export declare const CalendarArrowRepeatAllFilled: FluentIcon;
          export declare const CalendarArrowRepeatAllRegular: FluentIcon;
          export declare const CalendarArrowRightFilled: FluentIcon;
          export declare const CalendarArrowRightRegular: FluentIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid chunk contents in lib-cjs icons', async () => {
      const iconsPath = path.join(__dirname, 'lib-cjs', 'icons');
      const iconFiles = await readdir(iconsPath);
      const iconChunks = iconFiles.filter((file) => file.startsWith('chunk-') && file.endsWith('.js'));

      expect(iconChunks.length).toBeGreaterThan(0);

      // Take the first chunk for content verification
      const firstChunk = iconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        const jsFile = path.join(iconsPath, `chunk-${chunkNumber}.js`);
        const dtsFile = path.join(iconsPath, `chunk-${chunkNumber}.d.ts`);

        // Read and verify JS file content with inline snapshot
        const jsContent = await readFile(jsFile, 'utf8');
        const trimmedJSContent = trimContentForSnapshot(jsContent);
        expect(trimmedJSContent).toMatchInlineSnapshot(`
          "... (13 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.BackpackFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackFilled', "1em", ["M8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v2h12v-2a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm0 2c.5 0 1 .06 1.47.18a1.5 1.5 0 0 0-2.94 0C9 4.06 9.5 4 10 4ZM8.7 7h2.6c.94 0 1.7.76 1.7 1.7 0 .72-.58 1.3-1.3 1.3H8.3A1.3 1.3 0 0 1 7 8.7C7 7.76 7.76 7 8.7 7ZM7 14.5V13H4v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2H8v1.5a.5.5 0 0 1-1 0Z"]));
          exports.BackpackRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackRegular', "1em", ["M8.7 7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.4c.72 0 1.3-.58 1.3-1.3 0-.94-.76-1.7-1.7-1.7H8.7ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm5 10H5v-2a5 5 0 0 1 10 0v2Zm-8 2.5a.5.5 0 0 0 1 0V13h7v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h2v1.5ZM10 4c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Z"]));
          exports.BackpackAddFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAddFilled', "1em", ["M7.5 4.5a2.5 2.5 0 0 1 5 0v.04a6 6 0 0 1 3.45 4.65 5.5 5.5 0 0 0-3.07.05c.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04a5.53 5.53 0 0 0-1.74 2H4v-2a6 6 0 0 1 3.5-5.46V4.5Zm3.97-.32a1.5 1.5 0 0 0-2.94 0 6.01 6.01 0 0 1 2.94 0ZM9 14.5c0-.52.07-1.02.2-1.5H8v1.5a.5.5 0 0 1-1 0V13H4v2a3 3 0 0 0 3 3h3.26A5.48 5.48 0 0 1 9 14.5ZM8.7 8a.7.7 0 0 0-.7.7c0 .17.13.3.3.3h3.4a.3.3 0 0 0 .3-.3.7.7 0 0 0-.7-.7H8.7ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          exports.BackpackAddRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAddRegular', "1em", ["M10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h3.26a5.5 5.5 0 0 1-.66-1H7a2 2 0 0 1-2-2v-2h2v1.5a.5.5 0 0 0 1 0V13h1.2c.1-.35.24-.68.4-1H5v-2a5 5 0 0 1 9.9-.99c.36.03.71.1 1.05.18a6 6 0 0 0-3.45-4.65V4.5A2.5 2.5 0 0 0 10 2Zm0 2c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Zm1.34 6c.46-.33.98-.59 1.54-.76.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3Zm11 5.8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          exports.BackspaceFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackspaceFilled', "1em", ["M8.28 4a2.5 2.5 0 0 0-1.7.66L2.8 8.16a2.5 2.5 0 0 0 0 3.68l3.79 3.5a2.5 2.5 0 0 0 1.7.66h7.21a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H8.28Zm.87 3.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7Z"]));
          exports.BackspaceRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackspaceRegular', "1em", ["M9.15 7.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7ZM6.59 4.66A2.5 2.5 0 0 1 8.29 4h7.21A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5H8.28a2.5 2.5 0 0 1-1.7-.66l-3.78-3.5a2.5 2.5 0 0 1 0-3.68l3.79-3.5Zm1.7.34c-.38 0-.75.14-1.03.4L3.48 8.9a1.5 1.5 0 0 0 0 2.2l3.78 3.5c.28.26.65.4 1.02.4h7.22c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5H8.28Z"]));
          exports.CalculatorFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalculatorFilled', "1em", ["M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 2Zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1C6 4.67 6.67 4 7.5 4Zm.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"]));
          exports.CalculatorRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalculatorRegular', "1em", ["M8 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7.5 4C6.67 4 6 4.67 6 5.5v1C6 7.33 6.67 8 7.5 8h5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-5ZM7 5.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1Zm9 10a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v11Zm-1-11c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11Z"]));
          exports.CalculatorArrowClockwiseFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalculatorArrowClockwiseFilled', "1em", ["M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h3.77a5.48 5.48 0 0 1-.64-6.07 1 1 0 1 1 1.17-1.52A5.48 5.48 0 0 1 16 9.19V4.5A2.5 2.5 0 0 0 13.5 2Zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1C6 4.67 6.67 4 7.5 4Zm.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9.5-1.52a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 1 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 1 0 0 1h2Z"]));
          exports.CalculatorArrowClockwiseRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalculatorArrowClockwiseRegular', "1em", ["M7 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.63-3.07c.3-.58.7-1.1 1.17-1.52a1 1 0 1 0-1.17 1.52ZM6.5 17h3.11c.18.36.4.7.66 1H6.5A2.5 2.5 0 0 1 4 15.5v-11A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v4.69c-.32-.1-.66-.16-1-.19V4.5c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5ZM6 5.5C6 4.67 6.67 4 7.5 4h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 6 6.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Zm10 7.48a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 1 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 1 0 0 1h2Z"]));
          exports.CalculatorMultipleFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalculatorMultipleFilled', "1em", ["M5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM5 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7.5 18a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z"]));
          exports.CalculatorMultipleRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalculatorMultipleRegular', "1em", ["M6 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6Zm0 1h6v2H6V5Zm2 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM4 4.5C4 3.67 4.67 3 5.5 3h7c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 4 13.5v-9ZM7.5 18a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z"]));
          exports.CalendarColor = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarColor', "1em", \`<path d="M17 6H3v8.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V6Z" fill="url(#ic_fluent_calendar_20_color__a)"/><path d="M17 6H3v8.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V6Z" fill="url(#ic_fluent_calendar_20_color__b)"/><g filter="url(#ic_fluent_calendar_20_color__c)"><path d="M8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="url(#ic_fluent_calendar_20_color__d)"/><path d="M8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="url(#ic_fluent_calendar_20_color__e)"/><path d="M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="url(#ic_fluent_calendar_20_color__f)"/><path d="M10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="url(#ic_fluent_calendar_20_color__g)"/><path d="M14 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="url(#ic_fluent_calendar_20_color__h)"/></g><path d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V7h14V5.5Z" fill="url(#ic_fluent_calendar_20_color__i)"/><defs><linearGradient id="ic_fluent_calendar_20_color__a" x1="12.53" y1="18.35" x2="8.5" y2="6.56" gradientUnits="userSpaceOnUse"><stop stop-color="#B3E0FF"/><stop offset="1" stop-color="#B3E0FF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__b" x1="11.5" y1="10.5" x2="13.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop stop-color="#DCF8FF" stop-opacity="0"/><stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__d" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__e" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__f" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__g" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__h" x1="9.27" y1="8.42" x2="10.91" y2="18.39" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_calendar_20_color__i" x1="3" y1="3" x2="15.02" y2="-.77" gradientUnits="userSpaceOnUse"><stop stop-color="#0094F0"/><stop offset="1" stop-color="#2764E7"/></linearGradient><filter id="ic_fluent_calendar_20_color__c" x="4.67" y="8.33" width="10.67" height="7.67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy=".67"/><feGaussianBlur stdDeviation=".67"/><feColorMatrix values="0 0 0 0 0.1242 0 0 0 0 0.323337 0 0 0 0 0.7958 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_378174_9787"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_378174_9787" result="shape"/></filter></defs>\`, { color: true }));
          exports.CalendarFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarFilled', "1em", ["M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7Zm-9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"], { flipInRtl: true }));
          exports.CalendarRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarRegular', "1em", ["M7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5V7Zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Z"], { flipInRtl: true }));
          exports.Calendar3DayFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Calendar3DayFilled', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-8 3a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 6.5 6ZM10 6a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 10 6Zm3.5 0a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41a.5.5 0 0 0-.5-.41Z"]));
          exports.Calendar3DayRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Calendar3DayRegular', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5Zm-8 2a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5ZM10 6a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Zm3.5 0a.5.5 0 0 1 .5.41v7.09a.5.5 0 0 1-1 .09V6.5c0-.28.22-.5.5-.5Z"]));
          exports.CalendarAddFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarAddFilled', "1em", ["M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          exports.CalendarAddRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarAddRegular', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          exports.CalendarAgendaFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarAgendaFilled', "1em", ["M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9Zm-3-8a.5.5 0 0 0-.41-.5H6.41a.5.5 0 0 0 0 1h7.18a.5.5 0 0 0 .41-.5Zm0 3.5a.5.5 0 0 0-.41-.5H6.41a.5.5 0 0 0 0 1h7.18A.5.5 0 0 0 14 10Zm0 3.5a.5.5 0 0 0-.41-.5H6.41a.5.5 0 0 0 0 1h7.18a.5.5 0 0 0 .41-.5Z"]));
          exports.CalendarAgendaRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarAgendaRegular', "1em", ["M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9Zm-1 0v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5Zm-2-8a.5.5 0 0 1-.41.5H6.5a.5.5 0 0 1-.09-1h7.09c.28 0 .5.22.5.5Zm0 3.5a.5.5 0 0 1-.41.5H6.5a.5.5 0 0 1-.09-1h7.09c.28 0 .5.22.5.5Zm0 3.5a.5.5 0 0 1-.41.5H6.5a.5.5 0 0 1-.09-1h7.09c.28 0 .5.22.5.5Z"]));
          exports.CalendarArrowCounterclockwiseFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarArrowCounterclockwiseFilled', "1em", ["M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H6.11A1.5 1.5 0 0 0 4 5.87V7.3l.65-.64a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7l.65.64V5.5ZM17 7v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V9.92a1.5 1.5 0 0 0 1.55-.36l1.5-1.5c.3-.3.44-.68.44-1.06H17ZM7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm4-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"]));
          exports.CalendarArrowCounterclockwiseRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarArrowCounterclockwiseRegular', "1em", ["M5.5 17A2.5 2.5 0 0 1 3 14.5v-4a.5.5 0 0 1 1 0v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H6.5c0-.36-.14-.72-.4-1H16v-.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v1.8l.65-.65a.5.5 0 1 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 1 1 .7-.7l.65.64V5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9ZM8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"]));
          exports.CalendarArrowDownFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarArrowDownFilled', "1em", ["M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3h-9ZM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h4.1A5.5 5.5 0 0 1 17 9.6V7Zm2 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z"]));
          exports.CalendarArrowDownRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarArrowDownRegular', "1em", ["M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5Zm15 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from '../utils/createFluentIcon';
          export declare const BackpackFilled: FluentIcon;
          export declare const BackpackRegular: FluentIcon;
          export declare const BackpackAddFilled: FluentIcon;
          export declare const BackpackAddRegular: FluentIcon;
          export declare const BackspaceFilled: FluentIcon;
          export declare const BackspaceRegular: FluentIcon;
          export declare const CalculatorFilled: FluentIcon;
          export declare const CalculatorRegular: FluentIcon;
          export declare const CalculatorArrowClockwiseFilled: FluentIcon;
          export declare const CalculatorArrowClockwiseRegular: FluentIcon;
          export declare const CalculatorMultipleFilled: FluentIcon;
          export declare const CalculatorMultipleRegular: FluentIcon;
          export declare const CalendarColor: FluentIcon;
          export declare const CalendarFilled: FluentIcon;
          export declare const CalendarRegular: FluentIcon;
          export declare const Calendar3DayFilled: FluentIcon;
          export declare const Calendar3DayRegular: FluentIcon;
          export declare const CalendarAddFilled: FluentIcon;
          export declare const CalendarAddRegular: FluentIcon;
          export declare const CalendarAgendaFilled: FluentIcon;
          export declare const CalendarAgendaRegular: FluentIcon;
          export declare const CalendarArrowCounterclockwiseFilled: FluentIcon;
          export declare const CalendarArrowCounterclockwiseRegular: FluentIcon;
          export declare const CalendarArrowDownFilled: FluentIcon;
          export declare const CalendarArrowDownRegular: FluentIcon;
          export declare const CalendarArrowRepeatAllFilled: FluentIcon;
          export declare const CalendarArrowRepeatAllRegular: FluentIcon;
          export declare const CalendarArrowRightFilled: FluentIcon;
          export declare const CalendarArrowRightRegular: FluentIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid chunk contents in lib sizedIcons', async () => {
      const sizedIconsPath = path.join(__dirname, 'lib', 'sizedIcons');
      const sizedIconFiles = await readdir(sizedIconsPath);
      const sizedIconChunks = sizedIconFiles.filter((file) => file.startsWith('chunk-') && file.endsWith('.js'));

      expect(sizedIconChunks.length).toBeGreaterThan(0);

      // Take the first chunk for content verification
      const firstChunk = sizedIconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        const jsFile = path.join(sizedIconsPath, `chunk-${chunkNumber}.js`);
        const dtsFile = path.join(sizedIconsPath, `chunk-${chunkNumber}.d.ts`);

        // Read and verify JS file content with inline snapshot
        const jsContent = await readFile(jsFile, 'utf8');
        const trimmedJSContent = trimContentForSnapshot(jsContent);
        expect(trimmedJSContent).toMatchInlineSnapshot(`
          ""use client";
          import { createFluentIcon } from '../utils/createFluentIcon';
          export const Backpack12Filled = ( /*#__PURE__*/createFluentIcon('Backpack12Filled', "12", ["M4.06 3.5H4v-1C4 1.67 4.67 1 5.5 1h1C7.33 1 8 1.67 8 2.5v1h-.06A4 4 0 0 1 10 7v2.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 2 9.5V7a4 4 0 0 1 2.06-3.5Zm.94-1v.63a4 4 0 0 1 2 0V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm0 3c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"]));
          export const Backpack12Regular = ( /*#__PURE__*/createFluentIcon('Backpack12Regular', "12", ["M5 5.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM4.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-.44-4.5H4v-1C4 1.67 4.67 1 5.5 1h1C7.33 1 8 1.67 8 2.5v1h-.06A4 4 0 0 1 10 7v2.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 2 9.5V7a4 4 0 0 1 2.06-3.5Zm.94-1v.63a4 4 0 0 1 2 0V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM3 7v2.5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5V7a3 3 0 0 0-6 0Z"]));
          export const Backpack16Filled = ( /*#__PURE__*/createFluentIcon('Backpack16Filled', "16", ["M6 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1H6Zm2-7a2 2 0 0 0-2 2v.42A5 5 0 0 0 3 8v2h10V8a5 5 0 0 0-3-4.58V3a2 2 0 0 0-2-2Zm0 2c-.34 0-.68.03-1 .1V3a1 1 0 0 1 2 0v.1c-.32-.07-.66-.1-1-.1ZM7 6h2a2 2 0 0 1 2 2 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1c0-1.1.9-2 2-2Zm-1 6.5V11H3v1.5A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5V11H7v1.5a.5.5 0 0 1-1 0Z"]));
          export const Backpack16Regular = ( /*#__PURE__*/createFluentIcon('Backpack16Regular', "16", ["M7 6a2 2 0 0 0-2 2 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1 2 2 0 0 0-2-2H7ZM6 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1H6Zm2-7a2 2 0 0 0-2 2v.42A5 5 0 0 0 3 8v4.5A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5V8a5 5 0 0 0-3-4.58V3a2 2 0 0 0-2-2Zm4 9H4V8a4 4 0 1 1 8 0v2Zm-6 2.5a.5.5 0 0 0 1 0V11h5v1.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5V11h2v1.5ZM8 3c-.34 0-.68.03-1 .1V3a1 1 0 0 1 2 0v.1c-.32-.07-.66-.1-1-.1Z"]));
          export const Backpack20Filled = ( /*#__PURE__*/createFluentIcon('Backpack20Filled', "20", ["M8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v2h12v-2a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm0 2c.5 0 1 .06 1.47.18a1.5 1.5 0 0 0-2.94 0C9 4.06 9.5 4 10 4ZM8.7 7h2.6c.94 0 1.7.76 1.7 1.7 0 .72-.58 1.3-1.3 1.3H8.3A1.3 1.3 0 0 1 7 8.7C7 7.76 7.76 7 8.7 7ZM7 14.5V13H4v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2H8v1.5a.5.5 0 0 1-1 0Z"]));
          export const Backpack20Regular = ( /*#__PURE__*/createFluentIcon('Backpack20Regular', "20", ["M8.7 7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.4c.72 0 1.3-.58 1.3-1.3 0-.94-.76-1.7-1.7-1.7H8.7ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm5 10H5v-2a5 5 0 0 1 10 0v2Zm-8 2.5a.5.5 0 0 0 1 0V13h7v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h2v1.5ZM10 4c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Z"]));
          export const Backpack24Filled = ( /*#__PURE__*/createFluentIcon('Backpack24Filled', "24", ["M12 2a3.75 3.75 0 0 0-3.74 3.42A8 8 0 0 0 4 12.5V14h16v-1.5a8 8 0 0 0-4.26-7.08A3.75 3.75 0 0 0 12 2Zm8 13.71H9.5v1.54a.75.75 0 0 1-1.5 0v-1.54H4v3.04C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25v-3.04ZM12 4.5c-.7 0-1.37.09-2.02.26a2.25 2.25 0 0 1 4.04 0A8.01 8.01 0 0 0 12 4.5Zm-4 5.92A2.42 2.42 0 0 1 10.42 8h3.16A2.42 2.42 0 0 1 16 10.42c0 .87-.7 1.58-1.58 1.58H9.58C8.71 12 8 11.3 8 10.42Zm2.42-.92c-.51 0-.92.41-.92.92 0 .04.04.08.08.08h4.84c.04 0 .08-.04.08-.08 0-.51-.41-.92-.92-.92h-3.16Z"]));
          export const Backpack24Regular = ( /*#__PURE__*/createFluentIcon('Backpack24Regular', "24", ["M10.42 8A2.42 2.42 0 0 0 8 10.42c0 .87.7 1.58 1.58 1.58h4.84c.87 0 1.58-.7 1.58-1.58A2.42 2.42 0 0 0 13.58 8h-3.16Zm-.92 2.42c0-.51.41-.92.92-.92h3.16c.51 0 .92.41.92.92 0 .04-.04.08-.08.08H9.58a.08.08 0 0 1-.08-.08ZM12 2a3.75 3.75 0 0 0-3.74 3.42A8 8 0 0 0 4 12.5v6.25C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25V12.5a8 8 0 0 0-4.26-7.08A3.75 3.75 0 0 0 12 2Zm6.5 12h-13v-1.5a6.5 6.5 0 0 1 13 0V14ZM8 17.25a.75.75 0 0 0 1.5 0v-1.54h9v3.04c0 .97-.78 1.75-1.75 1.75h-9.5c-.97 0-1.75-.78-1.75-1.75v-3.04H8v1.54ZM12 4.5c-.7 0-1.37.09-2.02.26a2.25 2.25 0 0 1 4.04 0A8.01 8.01 0 0 0 12 4.5Z"]));
          export const Backpack28Filled = ( /*#__PURE__*/createFluentIcon('Backpack28Filled', "28", ["M10.5 12.25c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75 0 .14-.11.25-.25.25h-6.5a.25.25 0 0 1-.25-.25ZM14 2a5.25 5.25 0 0 0-5.19 4.45A10 10 0 0 0 4 15v1h20v-1a10 10 0 0 0-4.81-8.55A5.25 5.25 0 0 0 14 2Zm0 3c-.91 0-1.8.12-2.64.35a3.25 3.25 0 0 1 5.28 0C15.8 5.12 14.9 5 14 5Zm-1.75 4h3.5c1.8 0 3.25 1.46 3.25 3.25 0 .97-.78 1.75-1.75 1.75h-6.5C9.78 14 9 13.22 9 12.25 9 10.45 10.46 9 12.25 9ZM9 19.25V17.5H4V22a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-4.5H10.5v1.75a.75.75 0 0 1-1.5 0Z"]));
          export const Backpack28Regular = ( /*#__PURE__*/createFluentIcon('Backpack28Regular', "28", ["M9 12.25C9 10.45 10.46 9 12.25 9h3.5c1.8 0 3.25 1.46 3.25 3.25 0 .97-.78 1.75-1.75 1.75h-6.5C9.78 14 9 13.22 9 12.25Zm3.25-1.75c-.97 0-1.75.78-1.75 1.75 0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25 0-.97-.78-1.75-1.75-1.75h-3.5ZM14 2a5 5 0 0 0-4.94 4.2A9.75 9.75 0 0 0 4 14.75v7.5A3.75 3.75 0 0 0 7.75 26h12.5A3.75 3.75 0 0 0 24 22.25v-7.5c0-3.69-2.05-6.9-5.06-8.55A5 5 0 0 0 14 2Zm-.25 3c-1 0-1.97.15-2.88.43a3.5 3.5 0 0 1 6.26 0A9.75 9.75 0 0 0 14.25 5h-.5Zm0 1.5h.5c4.56 0 8.25 3.7 8.25 8.25V16h-17v-1.25c0-4.56 3.7-8.25 8.25-8.25ZM9 17.5v1.75a.75.75 0 0 0 1.5 0V17.5h12v4.75c0 1.24-1 2.25-2.25 2.25H7.75c-1.24 0-2.25-1-2.25-2.25V17.5H9Z"]));
          export const Backpack32Filled = ( /*#__PURE__*/createFluentIcon('Backpack32Filled', "32", ["M12 16c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2h-8Zm4-14a4 4 0 0 0-4 4v.83A10 10 0 0 0 6 16v4h20v-4a10 10 0 0 0-6-9.17V6a4 4 0 0 0-4-4Zm0 4c-.68 0-1.35.07-2 .2V6a2 2 0 1 1 4 0v.2c-.65-.13-1.32-.2-2-.2Zm-2 6h4a4 4 0 0 1 4 4 2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2 4 4 0 0 1 4-4Zm-2 13v-3H6v3a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-3H14v3a1 1 0 1 1-2 0Z"]));
          export const Backpack32Regular = ( /*#__PURE__*/createFluentIcon('Backpack32Regular', "32", ["M14 12a4 4 0 0 0-4 4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-4Zm-2 4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2h-8Zm4-14a4 4 0 0 0-4 4v.83A10 10 0 0 0 6 16v9a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-9a10 10 0 0 0-6-9.17V6a4 4 0 0 0-4-4Zm8 18H8v-4a8 8 0 1 1 16 0v4Zm-12 5a1 1 0 1 0 2 0v-3h10v3a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-3h4v3Zm4-19c-.68 0-1.35.07-2 .2V6a2 2 0 1 1 4 0v.2c-.65-.13-1.32-.2-2-.2Z"]));
          export const Backpack48Filled = ( /*#__PURE__*/createFluentIcon('Backpack48Filled', "48", ["M21.18 18.5a2.68 2.68 0 0 0-2.68 2.68c0 .18.14.32.32.32h10.36c.18 0 .32-.14.32-.32 0-1.48-1.2-2.68-2.68-2.68h-5.64ZM24 4a8 8 0 0 0-7.95 7.11A16 16 0 0 0 8 25v3h32v-3a16 16 0 0 0-8.05-13.89A8 8 0 0 0 24 4Zm0 5c-1.76 0-3.46.29-5.05.81a5.5 5.5 0 0 1 10.1 0A15.98 15.98 0 0 0 24 9Zm-8 12.18A5.18 5.18 0 0 1 21.18 16h5.64A5.18 5.18 0 0 1 32 21.18 2.82 2.82 0 0 1 29.18 24H18.82A2.82 2.82 0 0 1 16 21.18Zm0 9.32v3.25a1.25 1.25 0 1 0 2.5 0V30.5H40v8.25c0 2.9-2.35 5.25-5.25 5.25h-21.5A5.25 5.25 0 0 1 8 38.75V30.5h8Z"]));
          export const Backpack48Regular = ( /*#__PURE__*/createFluentIcon('Backpack48Regular', "48", ["M16 21.18A2.82 2.82 0 0 0 18.82 24h10.36A2.82 2.82 0 0 0 32 21.18 5.18 5.18 0 0 0 26.82 16h-5.64A5.18 5.18 0 0 0 16 21.18Zm5.18-2.68h5.64c1.48 0 2.68 1.2 2.68 2.68 0 .18-.14.32-.32.32H18.82a.32.32 0 0 1-.32-.32c0-1.48 1.2-2.68 2.68-2.68ZM24 4a8 8 0 0 0-7.95 7.11A16 16 0 0 0 8 25v13.75c0 2.9 2.35 5.25 5.25 5.25h21.5c2.9 0 5.25-2.35 5.25-5.25V25a16 16 0 0 0-8.05-13.89A8 8 0 0 0 24 4Zm13.5 24h-27v-3a13.5 13.5 0 0 1 27 0v3ZM16 30.5v3.25a1.25 1.25 0 1 0 2.5 0V30.5h19v8.25a2.75 2.75 0 0 1-2.75 2.75h-21.5a2.75 2.75 0 0 1-2.75-2.75V30.5H16ZM24 9c-1.76 0-3.46.29-5.05.81a5.5 5.5 0 0 1 10.1 0A15.98 15.98 0 0 0 24 9Z"]));
          export const BackpackAdd20Filled = ( /*#__PURE__*/createFluentIcon('BackpackAdd20Filled', "20", ["M7.5 4.5a2.5 2.5 0 0 1 5 0v.04a6 6 0 0 1 3.45 4.65 5.5 5.5 0 0 0-3.07.05c.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04a5.53 5.53 0 0 0-1.74 2H4v-2a6 6 0 0 1 3.5-5.46V4.5Zm3.97-.32a1.5 1.5 0 0 0-2.94 0 6.01 6.01 0 0 1 2.94 0ZM9 14.5c0-.52.07-1.02.2-1.5H8v1.5a.5.5 0 0 1-1 0V13H4v2a3 3 0 0 0 3 3h3.26A5.48 5.48 0 0 1 9 14.5ZM8.7 8a.7.7 0 0 0-.7.7c0 .17.13.3.3.3h3.4a.3.3 0 0 0 .3-.3.7.7 0 0 0-.7-.7H8.7ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          export const BackpackAdd20Regular = ( /*#__PURE__*/createFluentIcon('BackpackAdd20Regular', "20", ["M10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h3.26a5.5 5.5 0 0 1-.66-1H7a2 2 0 0 1-2-2v-2h2v1.5a.5.5 0 0 0 1 0V13h1.2c.1-.35.24-.68.4-1H5v-2a5 5 0 0 1 9.9-.99c.36.03.71.1 1.05.18a6 6 0 0 0-3.45-4.65V4.5A2.5 2.5 0 0 0 10 2Zm0 2c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Zm1.34 6c.46-.33.98-.59 1.54-.76.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3Zm11 5.8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          export const BackpackAdd24Filled = ( /*#__PURE__*/createFluentIcon('BackpackAdd24Filled', "24", ["M8.26 5.42a3.75 3.75 0 0 1 7.48 0 8 8 0 0 1 4.2 6.05 6.48 6.48 0 0 0-4.17-.24c.15-.24.23-.52.23-.81A2.42 2.42 0 0 0 13.58 8h-3.16A2.42 2.42 0 0 0 8 10.42c0 .87.7 1.58 1.58 1.58h4.45c-.8.51-1.5 1.2-2 2H4v-1.5a8 8 0 0 1 4.26-7.08Zm1.72-.66a8.01 8.01 0 0 1 4.04 0 2.25 2.25 0 0 0-4.04 0Zm1.27 10.95H9.5v1.54a.75.75 0 0 1-1.5 0v-1.54H4v3.04C4 20.55 5.46 22 7.25 22h5.56a6.48 6.48 0 0 1-1.56-6.29Zm-1.75-5.3c0-.5.41-.91.92-.91h3.16c.51 0 .92.41.92.92 0 .04-.04.08-.08.08H9.58a.08.08 0 0 1-.08-.08Zm8 1.59a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.5 8.5V18h2.5a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.5a.5.5 0 0 0 0 1H17v2.5a.5.5 0 1 0 1 0Z"]));
          export const BackpackAdd24Regular = ( /*#__PURE__*/createFluentIcon('BackpackAdd24Regular', "24", ["M12 2a3.75 3.75 0 0 0-3.74 3.42A8 8 0 0 0 4 12.5v6.25C4 20.55 5.46 22 7.25 22h5.56a6.52 6.52 0 0 1-1.08-1.5H7.25c-.97 0-1.75-.78-1.75-1.75v-3.04H8v1.54a.75.75 0 0 0 1.5 0v-1.54h1.75c.17-.6.44-1.19.77-1.71H5.5v-1.5a6.5 6.5 0 0 1 12.84-1.45c.56.08 1.1.22 1.6.42a8 8 0 0 0-4.2-6.05A3.75 3.75 0 0 0 12 2Zm0 2.5c-.7 0-1.37.09-2.02.26a2.25 2.25 0 0 1 4.04 0A8.01 8.01 0 0 0 12 4.5Zm2.03 7.5c.54-.34 1.12-.6 1.74-.77.15-.24.23-.52.23-.81A2.42 2.42 0 0 0 13.58 8h-3.16A2.42 2.42 0 0 0 8 10.42c0 .87.7 1.58 1.58 1.58h4.45ZM9.5 10.42c0-.51.41-.92.92-.92h3.16c.51 0 .92.41.92.92 0 .04-.04.08-.08.08H9.58a.08.08 0 0 1-.08-.08ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"]));
          export const BackpackAdd28Filled = ( /*#__PURE__*/createFluentIcon('BackpackAdd28Filled', "28", ["M8.81 6.45a5.25 5.25 0 0 1 10.38 0 10 10 0 0 1 4.74 7.38 7.47 7.47 0 0 0-5.22-.62c.18-.27.29-.6.29-.96C19 10.45 17.54 9 15.75 9h-3.5A3.25 3.25 0 0 0 9 12.25c0 .97.78 1.75 1.75 1.75h6c-.87.5-1.64 1.2-2.25 2H4v-1a10 10 0 0 1 4.81-8.55Zm7.83-1.1a3.25 3.25 0 0 0-5.28 0 10.01 10.01 0 0 1 5.28 0ZM13 20.5c0-1.07.22-2.08.62-3H10.5v1.75a.75.75 0 0 1-1.5 0V17.5H4V22a4 4 0 0 0 4 4h7.4a7.48 7.48 0 0 1-2.4-5.5Zm-.75-10c-.97 0-1.75.78-1.75 1.75 0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25 0-.97-.78-1.75-1.75-1.75h-3.5ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"]));
          export const BackpackAdd28Regular = ( /*#__PURE__*/createFluentIcon('BackpackAdd28Regular', "28", ["M14 2a5 5 0 0 0-4.94 4.2A9.75 9.75 0 0 0 4 14.75v7.5A3.75 3.75 0 0 0 7.75 26h7.65c-.48-.44-.9-.95-1.25-1.5h-6.4c-1.24 0-2.25-1-2.25-2.25V17.5H9v1.75a.75.75 0 0 0 1.5 0V17.5h3.12c.24-.54.53-1.04.88-1.5h-9v-1.25c0-4.56 3.7-8.25 8.25-8.25h.5c4.04 0 7.4 2.9 8.11 6.73.56.15 1.1.35 1.6.61a9.75 9.75 0 0 0-5.02-7.64A5 5 0 0 0 14 2Zm-.25 3c-1 0-1.97.15-2.88.43a3.5 3.5 0 0 1 6.26 0A9.75 9.75 0 0 0 14.25 5h-.5Zm3 9c.6-.35 1.27-.62 1.96-.79.18-.27.29-.6.29-.96C19 10.45 17.54 9 15.75 9h-3.5A3.25 3.25 0 0 0 9 12.25c0 .97.78 1.75 1.75 1.75h6Zm-4.5-3.5h3.5c.97 0 1.75.78 1.75 1.75 0 .14-.11.25-.25.25h-6.5a.25.25 0 0 1-.25-.25c0-.97.78-1.75 1.75-1.75ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"]));
          export const BackpackAdd48Filled = ( /*#__PURE__*/createFluentIcon('BackpackAdd48Filled', "48", ["M15.52 11.43a8.5 8.5 0 0 1 16.96 0 16 16 0 0 1 7.39 11.51 12.96 12.96 0 0 0-8.16-.52c.19-.38.29-.8.29-1.24A5.18 5.18 0 0 0 26.82 16h-5.64A5.18 5.18 0 0 0 16 21.18 2.82 2.82 0 0 0 18.82 24h9.25c-1.62 1.02-3 2.39-4.03 4H8v-3c0-5.72 3-10.74 7.52-13.57Zm13.53-1.62a5.5 5.5 0 0 0-10.1 0 15.98 15.98 0 0 1 10.1 0ZM22 35c0-1.58.28-3.1.8-4.5h-4.3v3.25a1.25 1.25 0 1 1-2.5 0V30.5H8v8.25c0 2.9 2.35 5.25 5.25 5.25h12.37A12.96 12.96 0 0 1 22 35Zm-3.5-13.82c0-1.48 1.2-2.68 2.68-2.68h5.64c1.48 0 2.68 1.2 2.68 2.68 0 .18-.14.32-.32.32H18.82a.32.32 0 0 1-.32-.32ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z"]));
          export const BackpackAdd48Regular = ( /*#__PURE__*/createFluentIcon('BackpackAdd48Regular', "48", ["M24 4a8 8 0 0 0-7.95 7.11A16 16 0 0 0 8 25v13.75c0 2.9 2.35 5.25 5.25 5.25h12.37c-.72-.75-1.36-1.6-1.88-2.5H13.25a2.75 2.75 0 0 1-2.75-2.75V30.5H16v3.25a1.25 1.25 0 1 0 2.5 0V30.5h4.3c.33-.88.74-1.72 1.24-2.5H10.5v-3a13.5 13.5 0 0 1 26.7-2.81c.93.15 1.82.41 2.67.75a16 16 0 0 0-7.92-11.83A8 8 0 0 0 24 4Zm0 5c-1.76 0-3.46.29-5.05.81a5.5 5.5 0 0 1 10.1 0A15.98 15.98 0 0 0 24 9Zm4.07 15c1.11-.7 2.34-1.24 3.64-1.58.19-.38.29-.8.29-1.24A5.18 5.18 0 0 0 26.82 16h-5.64A5.18 5.18 0 0 0 16 21.18 2.82 2.82 0 0 0 18.82 24h9.25Zm-6.9-5.5h5.65c1.48 0 2.68 1.2 2.68 2.68 0 .18-.14.32-.32.32H18.82a.32.32 0 0 1-.32-.32c0-1.48 1.2-2.68 2.68-2.68ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z"]));
          export const Backspace16Filled = ( /*#__PURE__*/createFluentIcon('Backspace16Filled', "16", ["M4.59 3.59A2 2 0 0 1 6 3h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3Zm2.76 2.06a.5.5 0 1 0-.7.7L8.29 8 6.65 9.65a.5.5 0 0 0 .7.7L9 8.71l1.65 1.64a.5.5 0 0 0 .7-.7L9.71 8l1.64-1.65a.5.5 0 0 0-.7-.7L9 7.29 7.35 5.65Z"]));
          export const Backspace16Regular = ( /*#__PURE__*/createFluentIcon('Backspace16Regular', "16", ["M6 3a2 2 0 0 0-1.41.59l-3 3a2 2 0 0 0 0 2.82l3 3A2 2 0 0 0 6 13h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6Zm-.7 1.3A1 1 0 0 1 6 4h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-.7-.3l-3-3a1 1 0 0 1 0-1.4l3-3Zm2.05 1.35a.5.5 0 1 0-.7.7L8.29 8 6.65 9.65a.5.5 0 0 0 .7.7L9 8.71l1.65 1.64a.5.5 0 0 0 .7-.7L9.71 8l1.64-1.65a.5.5 0 0 0-.7-.7L9 7.29 7.35 5.65Z"]));
          export const Backspace20Filled = ( /*#__PURE__*/createFluentIcon('Backspace20Filled', "20", ["M8.28 4a2.5 2.5 0 0 0-1.7.66L2.8 8.16a2.5 2.5 0 0 0 0 3.68l3.79 3.5a2.5 2.5 0 0 0 1.7.66h7.21a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H8.28Zm.87 3.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7Z"]));
          export const Backspace20Regular = ( /*#__PURE__*/createFluentIcon('Backspace20Regular', "20", ["M9.15 7.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7ZM6.59 4.66A2.5 2.5 0 0 1 8.29 4h7.21A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5H8.28a2.5 2.5 0 0 1-1.7-.66l-3.78-3.5a2.5 2.5 0 0 1 0-3.68l3.79-3.5Zm1.7.34c-.38 0-.75.14-1.03.4L3.48 8.9a1.5 1.5 0 0 0 0 2.2l3.78 3.5c.28.26.65.4 1.02.4h7.22c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5H8.28Z"]));
          export const Backspace24Filled = ( /*#__PURE__*/createFluentIcon('Backspace24Filled', "24", ["M18.75 4a3.25 3.25 0 0 1 3.24 3.07l.01.18v9.5a3.25 3.25 0 0 1-3.07 3.24l-.18.01h-8.5c-.77 0-1.5-.27-2.09-.76l-.15-.13-5-4.75a3.25 3.25 0 0 1-.11-4.6L3 9.64l5-4.75a3.25 3.25 0 0 1 2.03-.88l.2-.01h8.51Zm-7.3 4.4a.75.75 0 0 0-1.05 1.05l.07.08L12.94 12l-2.47 2.47-.07.08a.75.75 0 0 0 1.05 1.05l.08-.07L14 13.06l2.47 2.47.08.07a.75.75 0 0 0 1.05-1.05l-.07-.08L15.06 12l2.47-2.47.07-.08a.75.75 0 0 0-1.05-1.05l-.08.07L14 10.94l-2.47-2.47-.08-.07Z"]));
          export const Backspace24Regular = ( /*#__PURE__*/createFluentIcon('Backspace24Regular', "24", ["M18.75 4a3.25 3.25 0 0 1 3.24 3.07l.01.18v9.5a3.25 3.25 0 0 1-3.07 3.24l-.18.01h-8.5c-.77 0-1.5-.27-2.09-.76l-.15-.13-5-4.75a3.25 3.25 0 0 1-.11-4.6L3 9.64l5-4.75a3.25 3.25 0 0 1 2.03-.88l.2-.01h8.51Zm0 1.5h-8.5c-.4 0-.77.13-1.08.37l-.13.11-5 4.75-.06.06a1.75 1.75 0 0 0-.05 2.36l.12.12 5 4.75c.28.27.64.43 1.03.47l.17.01h8.5c.92 0 1.67-.7 1.74-1.6l.01-.15v-9.5c0-.92-.7-1.67-1.6-1.74l-.15-.01Zm-7.3 2.9.08.07L14 10.94l2.47-2.47a.75.75 0 0 1 1.13.98l-.07.08L15.06 12l2.47 2.47a.75.75 0 0 1-.98 1.13l-.08-.07L14 13.06l-2.47 2.47a.75.75 0 0 1-1.13-.98l.07-.08L12.94 12l-2.47-2.47a.75.75 0 0 1 .98-1.13Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from '../utils/createFluentIcon';
          export declare const Backpack12Filled: FluentIcon;
          export declare const Backpack12Regular: FluentIcon;
          export declare const Backpack16Filled: FluentIcon;
          export declare const Backpack16Regular: FluentIcon;
          export declare const Backpack20Filled: FluentIcon;
          export declare const Backpack20Regular: FluentIcon;
          export declare const Backpack24Filled: FluentIcon;
          export declare const Backpack24Regular: FluentIcon;
          export declare const Backpack28Filled: FluentIcon;
          export declare const Backpack28Regular: FluentIcon;
          export declare const Backpack32Filled: FluentIcon;
          export declare const Backpack32Regular: FluentIcon;
          export declare const Backpack48Filled: FluentIcon;
          export declare const Backpack48Regular: FluentIcon;
          export declare const BackpackAdd20Filled: FluentIcon;
          export declare const BackpackAdd20Regular: FluentIcon;
          export declare const BackpackAdd24Filled: FluentIcon;
          export declare const BackpackAdd24Regular: FluentIcon;
          export declare const BackpackAdd28Filled: FluentIcon;
          export declare const BackpackAdd28Regular: FluentIcon;
          export declare const BackpackAdd48Filled: FluentIcon;
          export declare const BackpackAdd48Regular: FluentIcon;
          export declare const Backspace16Filled: FluentIcon;
          export declare const Backspace16Regular: FluentIcon;
          export declare const Backspace20Filled: FluentIcon;
          export declare const Backspace20Regular: FluentIcon;
          export declare const Backspace24Filled: FluentIcon;
          export declare const Backspace24Regular: FluentIcon;
          export declare const Calculator16Filled: FluentIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid chunk contents in lib-cjs sizedIcons', async () => {
      const sizedIconsPath = path.join(__dirname, 'lib-cjs', 'sizedIcons');
      const sizedIconFiles = await readdir(sizedIconsPath);
      const sizedIconChunks = sizedIconFiles.filter((file) => file.startsWith('chunk-') && file.endsWith('.js'));

      expect(sizedIconChunks.length).toBeGreaterThan(0);

      // Take the first chunk for content verification
      const firstChunk = sizedIconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        const jsFile = path.join(sizedIconsPath, `chunk-${chunkNumber}.js`);
        const dtsFile = path.join(sizedIconsPath, `chunk-${chunkNumber}.d.ts`);

        // Read and verify JS file content with inline snapshot
        const jsContent = await readFile(jsFile, 'utf8');
        const trimmedJSContent = trimContentForSnapshot(jsContent);
        expect(trimmedJSContent).toMatchInlineSnapshot(`
          "... (45 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.Backpack12Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack12Filled', "12", ["M4.06 3.5H4v-1C4 1.67 4.67 1 5.5 1h1C7.33 1 8 1.67 8 2.5v1h-.06A4 4 0 0 1 10 7v2.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 2 9.5V7a4 4 0 0 1 2.06-3.5Zm.94-1v.63a4 4 0 0 1 2 0V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm0 3c0 .28.22.5.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"]));
          exports.Backpack12Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack12Regular', "12", ["M5 5.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM4.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-.44-4.5H4v-1C4 1.67 4.67 1 5.5 1h1C7.33 1 8 1.67 8 2.5v1h-.06A4 4 0 0 1 10 7v2.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 2 9.5V7a4 4 0 0 1 2.06-3.5Zm.94-1v.63a4 4 0 0 1 2 0V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM3 7v2.5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5V7a3 3 0 0 0-6 0Z"]));
          exports.Backpack16Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack16Filled', "16", ["M6 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1H6Zm2-7a2 2 0 0 0-2 2v.42A5 5 0 0 0 3 8v2h10V8a5 5 0 0 0-3-4.58V3a2 2 0 0 0-2-2Zm0 2c-.34 0-.68.03-1 .1V3a1 1 0 0 1 2 0v.1c-.32-.07-.66-.1-1-.1ZM7 6h2a2 2 0 0 1 2 2 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1c0-1.1.9-2 2-2Zm-1 6.5V11H3v1.5A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5V11H7v1.5a.5.5 0 0 1-1 0Z"]));
          exports.Backpack16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack16Regular', "16", ["M7 6a2 2 0 0 0-2 2 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1 2 2 0 0 0-2-2H7ZM6 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1H6Zm2-7a2 2 0 0 0-2 2v.42A5 5 0 0 0 3 8v4.5A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5V8a5 5 0 0 0-3-4.58V3a2 2 0 0 0-2-2Zm4 9H4V8a4 4 0 1 1 8 0v2Zm-6 2.5a.5.5 0 0 0 1 0V11h5v1.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5V11h2v1.5ZM8 3c-.34 0-.68.03-1 .1V3a1 1 0 0 1 2 0v.1c-.32-.07-.66-.1-1-.1Z"]));
          exports.Backpack20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack20Filled', "20", ["M8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v2h12v-2a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm0 2c.5 0 1 .06 1.47.18a1.5 1.5 0 0 0-2.94 0C9 4.06 9.5 4 10 4ZM8.7 7h2.6c.94 0 1.7.76 1.7 1.7 0 .72-.58 1.3-1.3 1.3H8.3A1.3 1.3 0 0 1 7 8.7C7 7.76 7.76 7 8.7 7ZM7 14.5V13H4v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2H8v1.5a.5.5 0 0 1-1 0Z"]));
          exports.Backpack20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack20Regular', "20", ["M8.7 7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.4c.72 0 1.3-.58 1.3-1.3 0-.94-.76-1.7-1.7-1.7H8.7ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm5 10H5v-2a5 5 0 0 1 10 0v2Zm-8 2.5a.5.5 0 0 0 1 0V13h7v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h2v1.5ZM10 4c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Z"]));
          exports.Backpack24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack24Filled', "24", ["M12 2a3.75 3.75 0 0 0-3.74 3.42A8 8 0 0 0 4 12.5V14h16v-1.5a8 8 0 0 0-4.26-7.08A3.75 3.75 0 0 0 12 2Zm8 13.71H9.5v1.54a.75.75 0 0 1-1.5 0v-1.54H4v3.04C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25v-3.04ZM12 4.5c-.7 0-1.37.09-2.02.26a2.25 2.25 0 0 1 4.04 0A8.01 8.01 0 0 0 12 4.5Zm-4 5.92A2.42 2.42 0 0 1 10.42 8h3.16A2.42 2.42 0 0 1 16 10.42c0 .87-.7 1.58-1.58 1.58H9.58C8.71 12 8 11.3 8 10.42Zm2.42-.92c-.51 0-.92.41-.92.92 0 .04.04.08.08.08h4.84c.04 0 .08-.04.08-.08 0-.51-.41-.92-.92-.92h-3.16Z"]));
          exports.Backpack24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack24Regular', "24", ["M10.42 8A2.42 2.42 0 0 0 8 10.42c0 .87.7 1.58 1.58 1.58h4.84c.87 0 1.58-.7 1.58-1.58A2.42 2.42 0 0 0 13.58 8h-3.16Zm-.92 2.42c0-.51.41-.92.92-.92h3.16c.51 0 .92.41.92.92 0 .04-.04.08-.08.08H9.58a.08.08 0 0 1-.08-.08ZM12 2a3.75 3.75 0 0 0-3.74 3.42A8 8 0 0 0 4 12.5v6.25C4 20.55 5.46 22 7.25 22h9.5c1.8 0 3.25-1.46 3.25-3.25V12.5a8 8 0 0 0-4.26-7.08A3.75 3.75 0 0 0 12 2Zm6.5 12h-13v-1.5a6.5 6.5 0 0 1 13 0V14ZM8 17.25a.75.75 0 0 0 1.5 0v-1.54h9v3.04c0 .97-.78 1.75-1.75 1.75h-9.5c-.97 0-1.75-.78-1.75-1.75v-3.04H8v1.54ZM12 4.5c-.7 0-1.37.09-2.02.26a2.25 2.25 0 0 1 4.04 0A8.01 8.01 0 0 0 12 4.5Z"]));
          exports.Backpack28Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack28Filled', "28", ["M10.5 12.25c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75 0 .14-.11.25-.25.25h-6.5a.25.25 0 0 1-.25-.25ZM14 2a5.25 5.25 0 0 0-5.19 4.45A10 10 0 0 0 4 15v1h20v-1a10 10 0 0 0-4.81-8.55A5.25 5.25 0 0 0 14 2Zm0 3c-.91 0-1.8.12-2.64.35a3.25 3.25 0 0 1 5.28 0C15.8 5.12 14.9 5 14 5Zm-1.75 4h3.5c1.8 0 3.25 1.46 3.25 3.25 0 .97-.78 1.75-1.75 1.75h-6.5C9.78 14 9 13.22 9 12.25 9 10.45 10.46 9 12.25 9ZM9 19.25V17.5H4V22a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-4.5H10.5v1.75a.75.75 0 0 1-1.5 0Z"]));
          exports.Backpack28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack28Regular', "28", ["M9 12.25C9 10.45 10.46 9 12.25 9h3.5c1.8 0 3.25 1.46 3.25 3.25 0 .97-.78 1.75-1.75 1.75h-6.5C9.78 14 9 13.22 9 12.25Zm3.25-1.75c-.97 0-1.75.78-1.75 1.75 0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25 0-.97-.78-1.75-1.75-1.75h-3.5ZM14 2a5 5 0 0 0-4.94 4.2A9.75 9.75 0 0 0 4 14.75v7.5A3.75 3.75 0 0 0 7.75 26h12.5A3.75 3.75 0 0 0 24 22.25v-7.5c0-3.69-2.05-6.9-5.06-8.55A5 5 0 0 0 14 2Zm-.25 3c-1 0-1.97.15-2.88.43a3.5 3.5 0 0 1 6.26 0A9.75 9.75 0 0 0 14.25 5h-.5Zm0 1.5h.5c4.56 0 8.25 3.7 8.25 8.25V16h-17v-1.25c0-4.56 3.7-8.25 8.25-8.25ZM9 17.5v1.75a.75.75 0 0 0 1.5 0V17.5h12v4.75c0 1.24-1 2.25-2.25 2.25H7.75c-1.24 0-2.25-1-2.25-2.25V17.5H9Z"]));
          exports.Backpack32Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack32Filled', "32", ["M12 16c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2h-8Zm4-14a4 4 0 0 0-4 4v.83A10 10 0 0 0 6 16v4h20v-4a10 10 0 0 0-6-9.17V6a4 4 0 0 0-4-4Zm0 4c-.68 0-1.35.07-2 .2V6a2 2 0 1 1 4 0v.2c-.65-.13-1.32-.2-2-.2Zm-2 6h4a4 4 0 0 1 4 4 2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2 4 4 0 0 1 4-4Zm-2 13v-3H6v3a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-3H14v3a1 1 0 1 1-2 0Z"]));
          exports.Backpack32Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack32Regular', "32", ["M14 12a4 4 0 0 0-4 4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-4Zm-2 4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2h-8Zm4-14a4 4 0 0 0-4 4v.83A10 10 0 0 0 6 16v9a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-9a10 10 0 0 0-6-9.17V6a4 4 0 0 0-4-4Zm8 18H8v-4a8 8 0 1 1 16 0v4Zm-12 5a1 1 0 1 0 2 0v-3h10v3a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-3h4v3Zm4-19c-.68 0-1.35.07-2 .2V6a2 2 0 1 1 4 0v.2c-.65-.13-1.32-.2-2-.2Z"]));
          exports.Backpack48Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack48Filled', "48", ["M21.18 18.5a2.68 2.68 0 0 0-2.68 2.68c0 .18.14.32.32.32h10.36c.18 0 .32-.14.32-.32 0-1.48-1.2-2.68-2.68-2.68h-5.64ZM24 4a8 8 0 0 0-7.95 7.11A16 16 0 0 0 8 25v3h32v-3a16 16 0 0 0-8.05-13.89A8 8 0 0 0 24 4Zm0 5c-1.76 0-3.46.29-5.05.81a5.5 5.5 0 0 1 10.1 0A15.98 15.98 0 0 0 24 9Zm-8 12.18A5.18 5.18 0 0 1 21.18 16h5.64A5.18 5.18 0 0 1 32 21.18 2.82 2.82 0 0 1 29.18 24H18.82A2.82 2.82 0 0 1 16 21.18Zm0 9.32v3.25a1.25 1.25 0 1 0 2.5 0V30.5H40v8.25c0 2.9-2.35 5.25-5.25 5.25h-21.5A5.25 5.25 0 0 1 8 38.75V30.5h8Z"]));
          exports.Backpack48Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backpack48Regular', "48", ["M16 21.18A2.82 2.82 0 0 0 18.82 24h10.36A2.82 2.82 0 0 0 32 21.18 5.18 5.18 0 0 0 26.82 16h-5.64A5.18 5.18 0 0 0 16 21.18Zm5.18-2.68h5.64c1.48 0 2.68 1.2 2.68 2.68 0 .18-.14.32-.32.32H18.82a.32.32 0 0 1-.32-.32c0-1.48 1.2-2.68 2.68-2.68ZM24 4a8 8 0 0 0-7.95 7.11A16 16 0 0 0 8 25v13.75c0 2.9 2.35 5.25 5.25 5.25h21.5c2.9 0 5.25-2.35 5.25-5.25V25a16 16 0 0 0-8.05-13.89A8 8 0 0 0 24 4Zm13.5 24h-27v-3a13.5 13.5 0 0 1 27 0v3ZM16 30.5v3.25a1.25 1.25 0 1 0 2.5 0V30.5h19v8.25a2.75 2.75 0 0 1-2.75 2.75h-21.5a2.75 2.75 0 0 1-2.75-2.75V30.5H16ZM24 9c-1.76 0-3.46.29-5.05.81a5.5 5.5 0 0 1 10.1 0A15.98 15.98 0 0 0 24 9Z"]));
          exports.BackpackAdd20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAdd20Filled', "20", ["M7.5 4.5a2.5 2.5 0 0 1 5 0v.04a6 6 0 0 1 3.45 4.65 5.5 5.5 0 0 0-3.07.05c.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04a5.53 5.53 0 0 0-1.74 2H4v-2a6 6 0 0 1 3.5-5.46V4.5Zm3.97-.32a1.5 1.5 0 0 0-2.94 0 6.01 6.01 0 0 1 2.94 0ZM9 14.5c0-.52.07-1.02.2-1.5H8v1.5a.5.5 0 0 1-1 0V13H4v2a3 3 0 0 0 3 3h3.26A5.48 5.48 0 0 1 9 14.5ZM8.7 8a.7.7 0 0 0-.7.7c0 .17.13.3.3.3h3.4a.3.3 0 0 0 .3-.3.7.7 0 0 0-.7-.7H8.7ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          exports.BackpackAdd20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAdd20Regular', "20", ["M10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h3.26a5.5 5.5 0 0 1-.66-1H7a2 2 0 0 1-2-2v-2h2v1.5a.5.5 0 0 0 1 0V13h1.2c.1-.35.24-.68.4-1H5v-2a5 5 0 0 1 9.9-.99c.36.03.71.1 1.05.18a6 6 0 0 0-3.45-4.65V4.5A2.5 2.5 0 0 0 10 2Zm0 2c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Zm1.34 6c.46-.33.98-.59 1.54-.76.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3Zm11 5.8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          exports.BackpackAdd24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAdd24Filled', "24", ["M8.26 5.42a3.75 3.75 0 0 1 7.48 0 8 8 0 0 1 4.2 6.05 6.48 6.48 0 0 0-4.17-.24c.15-.24.23-.52.23-.81A2.42 2.42 0 0 0 13.58 8h-3.16A2.42 2.42 0 0 0 8 10.42c0 .87.7 1.58 1.58 1.58h4.45c-.8.51-1.5 1.2-2 2H4v-1.5a8 8 0 0 1 4.26-7.08Zm1.72-.66a8.01 8.01 0 0 1 4.04 0 2.25 2.25 0 0 0-4.04 0Zm1.27 10.95H9.5v1.54a.75.75 0 0 1-1.5 0v-1.54H4v3.04C4 20.55 5.46 22 7.25 22h5.56a6.48 6.48 0 0 1-1.56-6.29Zm-1.75-5.3c0-.5.41-.91.92-.91h3.16c.51 0 .92.41.92.92 0 .04-.04.08-.08.08H9.58a.08.08 0 0 1-.08-.08Zm8 1.59a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.5 8.5V18h2.5a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.5a.5.5 0 0 0 0 1H17v2.5a.5.5 0 1 0 1 0Z"]));
          exports.BackpackAdd24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAdd24Regular', "24", ["M12 2a3.75 3.75 0 0 0-3.74 3.42A8 8 0 0 0 4 12.5v6.25C4 20.55 5.46 22 7.25 22h5.56a6.52 6.52 0 0 1-1.08-1.5H7.25c-.97 0-1.75-.78-1.75-1.75v-3.04H8v1.54a.75.75 0 0 0 1.5 0v-1.54h1.75c.17-.6.44-1.19.77-1.71H5.5v-1.5a6.5 6.5 0 0 1 12.84-1.45c.56.08 1.1.22 1.6.42a8 8 0 0 0-4.2-6.05A3.75 3.75 0 0 0 12 2Zm0 2.5c-.7 0-1.37.09-2.02.26a2.25 2.25 0 0 1 4.04 0A8.01 8.01 0 0 0 12 4.5Zm2.03 7.5c.54-.34 1.12-.6 1.74-.77.15-.24.23-.52.23-.81A2.42 2.42 0 0 0 13.58 8h-3.16A2.42 2.42 0 0 0 8 10.42c0 .87.7 1.58 1.58 1.58h4.45ZM9.5 10.42c0-.51.41-.92.92-.92h3.16c.51 0 .92.41.92.92 0 .04-.04.08-.08.08H9.58a.08.08 0 0 1-.08-.08ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5v2.5a.5.5 0 1 1-1 0V18h-2.5a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.5a.5.5 0 0 1 0 1H18Z"]));
          exports.BackpackAdd28Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAdd28Filled', "28", ["M8.81 6.45a5.25 5.25 0 0 1 10.38 0 10 10 0 0 1 4.74 7.38 7.47 7.47 0 0 0-5.22-.62c.18-.27.29-.6.29-.96C19 10.45 17.54 9 15.75 9h-3.5A3.25 3.25 0 0 0 9 12.25c0 .97.78 1.75 1.75 1.75h6c-.87.5-1.64 1.2-2.25 2H4v-1a10 10 0 0 1 4.81-8.55Zm7.83-1.1a3.25 3.25 0 0 0-5.28 0 10.01 10.01 0 0 1 5.28 0ZM13 20.5c0-1.07.22-2.08.62-3H10.5v1.75a.75.75 0 0 1-1.5 0V17.5H4V22a4 4 0 0 0 4 4h7.4a7.48 7.48 0 0 1-2.4-5.5Zm-.75-10c-.97 0-1.75.78-1.75 1.75 0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25 0-.97-.78-1.75-1.75-1.75h-3.5ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"]));
          exports.BackpackAdd28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAdd28Regular', "28", ["M14 2a5 5 0 0 0-4.94 4.2A9.75 9.75 0 0 0 4 14.75v7.5A3.75 3.75 0 0 0 7.75 26h7.65c-.48-.44-.9-.95-1.25-1.5h-6.4c-1.24 0-2.25-1-2.25-2.25V17.5H9v1.75a.75.75 0 0 0 1.5 0V17.5h3.12c.24-.54.53-1.04.88-1.5h-9v-1.25c0-4.56 3.7-8.25 8.25-8.25h.5c4.04 0 7.4 2.9 8.11 6.73.56.15 1.1.35 1.6.61a9.75 9.75 0 0 0-5.02-7.64A5 5 0 0 0 14 2Zm-.25 3c-1 0-1.97.15-2.88.43a3.5 3.5 0 0 1 6.26 0A9.75 9.75 0 0 0 14.25 5h-.5Zm3 9c.6-.35 1.27-.62 1.96-.79.18-.27.29-.6.29-.96C19 10.45 17.54 9 15.75 9h-3.5A3.25 3.25 0 0 0 9 12.25c0 .97.78 1.75 1.75 1.75h6Zm-4.5-3.5h3.5c.97 0 1.75.78 1.75 1.75 0 .14-.11.25-.25.25h-6.5a.25.25 0 0 1-.25-.25c0-.97.78-1.75 1.75-1.75ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5Z"]));
          exports.BackpackAdd48Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAdd48Filled', "48", ["M15.52 11.43a8.5 8.5 0 0 1 16.96 0 16 16 0 0 1 7.39 11.51 12.96 12.96 0 0 0-8.16-.52c.19-.38.29-.8.29-1.24A5.18 5.18 0 0 0 26.82 16h-5.64A5.18 5.18 0 0 0 16 21.18 2.82 2.82 0 0 0 18.82 24h9.25c-1.62 1.02-3 2.39-4.03 4H8v-3c0-5.72 3-10.74 7.52-13.57Zm13.53-1.62a5.5 5.5 0 0 0-10.1 0 15.98 15.98 0 0 1 10.1 0ZM22 35c0-1.58.28-3.1.8-4.5h-4.3v3.25a1.25 1.25 0 1 1-2.5 0V30.5H8v8.25c0 2.9 2.35 5.25 5.25 5.25h12.37A12.96 12.96 0 0 1 22 35Zm-3.5-13.82c0-1.48 1.2-2.68 2.68-2.68h5.64c1.48 0 2.68 1.2 2.68 2.68 0 .18-.14.32-.32.32H18.82a.32.32 0 0 1-.32-.32ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z"]));
          exports.BackpackAdd48Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackpackAdd48Regular', "48", ["M24 4a8 8 0 0 0-7.95 7.11A16 16 0 0 0 8 25v13.75c0 2.9 2.35 5.25 5.25 5.25h12.37c-.72-.75-1.36-1.6-1.88-2.5H13.25a2.75 2.75 0 0 1-2.75-2.75V30.5H16v3.25a1.25 1.25 0 1 0 2.5 0V30.5h4.3c.33-.88.74-1.72 1.24-2.5H10.5v-3a13.5 13.5 0 0 1 26.7-2.81c.93.15 1.82.41 2.67.75a16 16 0 0 0-7.92-11.83A8 8 0 0 0 24 4Zm0 5c-1.76 0-3.46.29-5.05.81a5.5 5.5 0 0 1 10.1 0A15.98 15.98 0 0 0 24 9Zm4.07 15c1.11-.7 2.34-1.24 3.64-1.58.19-.38.29-.8.29-1.24A5.18 5.18 0 0 0 26.82 16h-5.64A5.18 5.18 0 0 0 16 21.18 2.82 2.82 0 0 0 18.82 24h9.25Zm-6.9-5.5h5.65c1.48 0 2.68 1.2 2.68 2.68 0 .18-.14.32-.32.32H18.82a.32.32 0 0 1-.32-.32c0-1.48 1.2-2.68 2.68-2.68ZM46 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6v-6Z"]));
          exports.Backspace16Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backspace16Filled', "16", ["M4.59 3.59A2 2 0 0 1 6 3h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3Zm2.76 2.06a.5.5 0 1 0-.7.7L8.29 8 6.65 9.65a.5.5 0 0 0 .7.7L9 8.71l1.65 1.64a.5.5 0 0 0 .7-.7L9.71 8l1.64-1.65a.5.5 0 0 0-.7-.7L9 7.29 7.35 5.65Z"]));
          exports.Backspace16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backspace16Regular', "16", ["M6 3a2 2 0 0 0-1.41.59l-3 3a2 2 0 0 0 0 2.82l3 3A2 2 0 0 0 6 13h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6Zm-.7 1.3A1 1 0 0 1 6 4h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-.7-.3l-3-3a1 1 0 0 1 0-1.4l3-3Zm2.05 1.35a.5.5 0 1 0-.7.7L8.29 8 6.65 9.65a.5.5 0 0 0 .7.7L9 8.71l1.65 1.64a.5.5 0 0 0 .7-.7L9.71 8l1.64-1.65a.5.5 0 0 0-.7-.7L9 7.29 7.35 5.65Z"]));
          exports.Backspace20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Backspace20Filled', "20", ["M8.28 4a2.5 2.5 0 0 0-1.7.66L2.8 8.16a2.5 2.5 0 0 0 0 3.68l3.79 3.5a2.5 2.5 0 0 0 1.7.66h7.21a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H8.28Zm.87 3.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from '../utils/createFluentIcon';
          export declare const Backpack12Filled: FluentIcon;
          export declare const Backpack12Regular: FluentIcon;
          export declare const Backpack16Filled: FluentIcon;
          export declare const Backpack16Regular: FluentIcon;
          export declare const Backpack20Filled: FluentIcon;
          export declare const Backpack20Regular: FluentIcon;
          export declare const Backpack24Filled: FluentIcon;
          export declare const Backpack24Regular: FluentIcon;
          export declare const Backpack28Filled: FluentIcon;
          export declare const Backpack28Regular: FluentIcon;
          export declare const Backpack32Filled: FluentIcon;
          export declare const Backpack32Regular: FluentIcon;
          export declare const Backpack48Filled: FluentIcon;
          export declare const Backpack48Regular: FluentIcon;
          export declare const BackpackAdd20Filled: FluentIcon;
          export declare const BackpackAdd20Regular: FluentIcon;
          export declare const BackpackAdd24Filled: FluentIcon;
          export declare const BackpackAdd24Regular: FluentIcon;
          export declare const BackpackAdd28Filled: FluentIcon;
          export declare const BackpackAdd28Regular: FluentIcon;
          export declare const BackpackAdd48Filled: FluentIcon;
          export declare const BackpackAdd48Regular: FluentIcon;
          export declare const Backspace16Filled: FluentIcon;
          export declare const Backspace16Regular: FluentIcon;
          export declare const Backspace20Filled: FluentIcon;
          export declare const Backspace20Regular: FluentIcon;
          export declare const Backspace24Filled: FluentIcon;
          export declare const Backspace24Regular: FluentIcon;
          export declare const Calculator16Filled: FluentIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid font chunk contents in lib fonts/icons', async () => {
      const fontsIconsPath = path.join(__dirname, 'lib', 'fonts', 'icons');
      const fontsIconFiles = await readdir(fontsIconsPath);
      const fontsIconChunks = fontsIconFiles.filter((file) => file.startsWith('chunk-') && file.endsWith('.js'));

      expect(fontsIconChunks.length).toBeGreaterThan(0);

      // Take the first chunk for content verification
      const firstChunk = fontsIconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        const jsFile = path.join(fontsIconsPath, `chunk-${chunkNumber}.js`);
        const dtsFile = path.join(fontsIconsPath, `chunk-${chunkNumber}.d.ts`);

        // Read and verify JS file content with inline snapshot
        const jsContent = await readFile(jsFile, 'utf8');
        const trimmedJSContent = trimContentForSnapshot(jsContent);
        expect(trimmedJSContent).toMatchInlineSnapshot(`
          ""use client";
          import { createFluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export const BackpackFilled = ( /*#__PURE__*/createFluentFontIcon("BackpackFilled", "", 2, undefined));
          export const BackpackRegular = ( /*#__PURE__*/createFluentFontIcon("BackpackRegular", "", 2, undefined));
          export const BackpackAddFilled = ( /*#__PURE__*/createFluentFontIcon("BackpackAddFilled", "", 2, undefined));
          export const BackpackAddRegular = ( /*#__PURE__*/createFluentFontIcon("BackpackAddRegular", "", 2, undefined));
          export const BackspaceFilled = ( /*#__PURE__*/createFluentFontIcon("BackspaceFilled", "", 2, undefined));
          export const BackspaceRegular = ( /*#__PURE__*/createFluentFontIcon("BackspaceRegular", "", 2, undefined));
          export const CalculatorFilled = ( /*#__PURE__*/createFluentFontIcon("CalculatorFilled", "", 2, undefined));
          export const CalculatorRegular = ( /*#__PURE__*/createFluentFontIcon("CalculatorRegular", "", 2, undefined));
          export const CalculatorArrowClockwiseFilled = ( /*#__PURE__*/createFluentFontIcon("CalculatorArrowClockwiseFilled", "", 2, undefined));
          export const CalculatorArrowClockwiseRegular = ( /*#__PURE__*/createFluentFontIcon("CalculatorArrowClockwiseRegular", "", 2, undefined));
          export const CalculatorMultipleFilled = ( /*#__PURE__*/createFluentFontIcon("CalculatorMultipleFilled", "", 2, undefined));
          export const CalculatorMultipleRegular = ( /*#__PURE__*/createFluentFontIcon("CalculatorMultipleRegular", "", 2, undefined));
          export const CalendarFilled = ( /*#__PURE__*/createFluentFontIcon("CalendarFilled", "", 2, undefined, { flipInRtl: true }));
          export const CalendarRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarRegular", "", 2, undefined, { flipInRtl: true }));
          export const Calendar3DayFilled = ( /*#__PURE__*/createFluentFontIcon("Calendar3DayFilled", "", 2, undefined));
          export const Calendar3DayRegular = ( /*#__PURE__*/createFluentFontIcon("Calendar3DayRegular", "", 2, undefined));
          export const CalendarAddFilled = ( /*#__PURE__*/createFluentFontIcon("CalendarAddFilled", "", 2, undefined));
          export const CalendarAddRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarAddRegular", "", 2, undefined));
          export const CalendarAgendaFilled = ( /*#__PURE__*/createFluentFontIcon("CalendarAgendaFilled", "", 2, undefined));
          export const CalendarAgendaRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarAgendaRegular", "", 2, undefined));
          export const CalendarArrowCounterclockwiseFilled = ( /*#__PURE__*/createFluentFontIcon("CalendarArrowCounterclockwiseFilled", "", 2, undefined));
          export const CalendarArrowCounterclockwiseRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarArrowCounterclockwiseRegular", "", 2, undefined));
          export const CalendarArrowDownFilled = ( /*#__PURE__*/createFluentFontIcon("CalendarArrowDownFilled", "", 2, undefined));
          export const CalendarArrowDownRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarArrowDownRegular", "", 2, undefined));
          export const CalendarArrowRepeatAllFilled = ( /*#__PURE__*/createFluentFontIcon("CalendarArrowRepeatAllFilled", "", 2, undefined));
          export const CalendarArrowRepeatAllRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarArrowRepeatAllRegular", "", 2, undefined));
          export const CalendarArrowRightFilled = ( /*#__PURE__*/createFluentFontIcon("CalendarArrowRightFilled", "", 2, undefined));
          export const CalendarArrowRightRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarArrowRightRegular", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export declare const BackpackFilled: FluentFontIcon;
          export declare const BackpackRegular: FluentFontIcon;
          export declare const BackpackAddFilled: FluentFontIcon;
          export declare const BackpackAddRegular: FluentFontIcon;
          export declare const BackspaceFilled: FluentFontIcon;
          export declare const BackspaceRegular: FluentFontIcon;
          export declare const CalculatorFilled: FluentFontIcon;
          export declare const CalculatorRegular: FluentFontIcon;
          export declare const CalculatorArrowClockwiseFilled: FluentFontIcon;
          export declare const CalculatorArrowClockwiseRegular: FluentFontIcon;
          export declare const CalculatorMultipleFilled: FluentFontIcon;
          export declare const CalculatorMultipleRegular: FluentFontIcon;
          export declare const CalendarFilled: FluentFontIcon;
          export declare const CalendarRegular: FluentFontIcon;
          export declare const Calendar3DayFilled: FluentFontIcon;
          export declare const Calendar3DayRegular: FluentFontIcon;
          export declare const CalendarAddFilled: FluentFontIcon;
          export declare const CalendarAddRegular: FluentFontIcon;
          export declare const CalendarAgendaFilled: FluentFontIcon;
          export declare const CalendarAgendaRegular: FluentFontIcon;
          export declare const CalendarArrowCounterclockwiseFilled: FluentFontIcon;
          export declare const CalendarArrowCounterclockwiseRegular: FluentFontIcon;
          export declare const CalendarArrowDownFilled: FluentFontIcon;
          export declare const CalendarArrowDownRegular: FluentFontIcon;
          export declare const CalendarArrowRepeatAllFilled: FluentFontIcon;
          export declare const CalendarArrowRepeatAllRegular: FluentFontIcon;
          export declare const CalendarArrowRightFilled: FluentFontIcon;
          export declare const CalendarArrowRightRegular: FluentFontIcon;
          export declare const CalendarAssistantFilled: FluentFontIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid font chunk contents in lib-cjs fonts/icons', async () => {
      const fontsIconsPath = path.join(__dirname, 'lib-cjs', 'fonts', 'icons');
      const fontsIconFiles = await readdir(fontsIconsPath);
      const fontsIconChunks = fontsIconFiles.filter((file) => file.startsWith('chunk-') && file.endsWith('.js'));

      expect(fontsIconChunks.length).toBeGreaterThan(0);

      // Take the first chunk for content verification
      const firstChunk = fontsIconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        const jsFile = path.join(fontsIconsPath, `chunk-${chunkNumber}.js`);
        const dtsFile = path.join(fontsIconsPath, `chunk-${chunkNumber}.d.ts`);

        // Read and verify JS file content with inline snapshot
        const jsContent = await readFile(jsFile, 'utf8');
        const trimmedJSContent = trimContentForSnapshot(jsContent);
        expect(trimmedJSContent).toMatchInlineSnapshot(`
          "... (12 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.BackpackFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BackpackFilled", "", 2, undefined));
          exports.BackpackRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BackpackRegular", "", 2, undefined));
          exports.BackpackAddFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BackpackAddFilled", "", 2, undefined));
          exports.BackpackAddRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BackpackAddRegular", "", 2, undefined));
          exports.BackspaceFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BackspaceFilled", "", 2, undefined));
          exports.BackspaceRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BackspaceRegular", "", 2, undefined));
          exports.CalculatorFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalculatorFilled", "", 2, undefined));
          exports.CalculatorRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalculatorRegular", "", 2, undefined));
          exports.CalculatorArrowClockwiseFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalculatorArrowClockwiseFilled", "", 2, undefined));
          exports.CalculatorArrowClockwiseRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalculatorArrowClockwiseRegular", "", 2, undefined));
          exports.CalculatorMultipleFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalculatorMultipleFilled", "", 2, undefined));
          exports.CalculatorMultipleRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalculatorMultipleRegular", "", 2, undefined));
          exports.CalendarFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarFilled", "", 2, undefined, { flipInRtl: true }));
          exports.CalendarRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarRegular", "", 2, undefined, { flipInRtl: true }));
          exports.Calendar3DayFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Calendar3DayFilled", "", 2, undefined));
          exports.Calendar3DayRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Calendar3DayRegular", "", 2, undefined));
          exports.CalendarAddFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarAddFilled", "", 2, undefined));
          exports.CalendarAddRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarAddRegular", "", 2, undefined));
          exports.CalendarAgendaFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarAgendaFilled", "", 2, undefined));
          exports.CalendarAgendaRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarAgendaRegular", "", 2, undefined));
          exports.CalendarArrowCounterclockwiseFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarArrowCounterclockwiseFilled", "", 2, undefined));
          exports.CalendarArrowCounterclockwiseRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarArrowCounterclockwiseRegular", "", 2, undefined));
          exports.CalendarArrowDownFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarArrowDownFilled", "", 2, undefined));
          exports.CalendarArrowDownRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarArrowDownRegular", "", 2, undefined));
          exports.CalendarArrowRepeatAllFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarArrowRepeatAllFilled", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export declare const BackpackFilled: FluentFontIcon;
          export declare const BackpackRegular: FluentFontIcon;
          export declare const BackpackAddFilled: FluentFontIcon;
          export declare const BackpackAddRegular: FluentFontIcon;
          export declare const BackspaceFilled: FluentFontIcon;
          export declare const BackspaceRegular: FluentFontIcon;
          export declare const CalculatorFilled: FluentFontIcon;
          export declare const CalculatorRegular: FluentFontIcon;
          export declare const CalculatorArrowClockwiseFilled: FluentFontIcon;
          export declare const CalculatorArrowClockwiseRegular: FluentFontIcon;
          export declare const CalculatorMultipleFilled: FluentFontIcon;
          export declare const CalculatorMultipleRegular: FluentFontIcon;
          export declare const CalendarFilled: FluentFontIcon;
          export declare const CalendarRegular: FluentFontIcon;
          export declare const Calendar3DayFilled: FluentFontIcon;
          export declare const Calendar3DayRegular: FluentFontIcon;
          export declare const CalendarAddFilled: FluentFontIcon;
          export declare const CalendarAddRegular: FluentFontIcon;
          export declare const CalendarAgendaFilled: FluentFontIcon;
          export declare const CalendarAgendaRegular: FluentFontIcon;
          export declare const CalendarArrowCounterclockwiseFilled: FluentFontIcon;
          export declare const CalendarArrowCounterclockwiseRegular: FluentFontIcon;
          export declare const CalendarArrowDownFilled: FluentFontIcon;
          export declare const CalendarArrowDownRegular: FluentFontIcon;
          export declare const CalendarArrowRepeatAllFilled: FluentFontIcon;
          export declare const CalendarArrowRepeatAllRegular: FluentFontIcon;
          export declare const CalendarArrowRightFilled: FluentFontIcon;
          export declare const CalendarArrowRightRegular: FluentFontIcon;
          export declare const CalendarAssistantFilled: FluentFontIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid font chunk contents in lib fonts/sizedIcons', async () => {
      const fontsSizedIconsPath = path.join(__dirname, 'lib', 'fonts', 'sizedIcons');
      const fontsSizedIconFiles = await readdir(fontsSizedIconsPath);
      const fontsSizedIconChunks = fontsSizedIconFiles.filter(
        (file) => file.startsWith('chunk-') && file.endsWith('.js'),
      );

      expect(fontsSizedIconChunks.length).toBeGreaterThan(0);

      // Take the first chunk for content verification
      const firstChunk = fontsSizedIconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        const jsFile = path.join(fontsSizedIconsPath, `chunk-${chunkNumber}.js`);
        const dtsFile = path.join(fontsSizedIconsPath, `chunk-${chunkNumber}.d.ts`);

        // Read and verify JS file content with inline snapshot
        const jsContent = await readFile(jsFile, 'utf8');
        const trimmedJSContent = trimContentForSnapshot(jsContent);
        expect(trimmedJSContent).toMatchInlineSnapshot(`
          ""use client";
          import { createFluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export const Calendar3Day32Light = ( /*#__PURE__*/createFluentFontIcon("Calendar3Day32Light", "", 3, 32));
          export const CalendarCheckmark32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarCheckmark32Light", "", 3, 32));
          export const CalendarClock32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarClock32Light", "", 3, 32));
          export const CalendarDataBar32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarDataBar32Light", "", 3, 32));
          export const CalendarDay32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarDay32Light", "", 3, 32));
          export const CalendarEdit32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarEdit32Light", "", 3, 32));
          export const CalendarEmpty32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarEmpty32Light", "", 3, 32));
          export const CalendarLtr32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarLtr32Light", "", 3, 32));
          export const CalendarMonth32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarMonth32Light", "", 3, 32));
          export const CalendarMultiple32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarMultiple32Light", "", 3, 32));
          export const CalendarPattern32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarPattern32Light", "", 3, 32));
          export const CalendarReply32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarReply32Light", "", 3, 32));
          export const CalendarSparkle32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarSparkle32Light", "", 3, 32));
          export const CalendarTodo32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarTodo32Light", "", 3, 32));
          export const CalendarWorkWeek32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarWorkWeek32Light", "", 3, 32));
          export const Comment32Light = ( /*#__PURE__*/createFluentFontIcon("Comment32Light", "", 3, 32));
          export const CommentAdd32Light = ( /*#__PURE__*/createFluentFontIcon("CommentAdd32Light", "", 3, 32));
          export const Compose32Light = ( /*#__PURE__*/createFluentFontIcon("Compose32Light", "", 3, 32));
          export const Lasso32Light = ( /*#__PURE__*/createFluentFontIcon("Lasso32Light", "", 3, 32));
          export const Mail32Light = ( /*#__PURE__*/createFluentFontIcon("Mail32Light", "", 3, 32));
          export const MailAlert32Light = ( /*#__PURE__*/createFluentFontIcon("MailAlert32Light", "", 3, 32));
          export const MailArrowClockwise32Light = ( /*#__PURE__*/createFluentFontIcon("MailArrowClockwise32Light", "", 3, 32));
          export const MailArrowDoubleBack32Light = ( /*#__PURE__*/createFluentFontIcon("MailArrowDoubleBack32Light", "", 3, 32));
          export const MailCopy32Light = ( /*#__PURE__*/createFluentFontIcon("MailCopy32Light", "", 3, 32));
          export const MailEdit32Light = ( /*#__PURE__*/createFluentFontIcon("MailEdit32Light", "", 3, 32));
          export const MailList32Light = ( /*#__PURE__*/createFluentFontIcon("MailList32Light", "", 3, 32));
          export const MailMultiple32Light = ( /*#__PURE__*/createFluentFontIcon("MailMultiple32Light", "", 3, 32));
          export const MailRead32Light = ( /*#__PURE__*/createFluentFontIcon("MailRead32Light", "", 3, 32));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export declare const Calendar3Day32Light: FluentFontIcon;
          export declare const CalendarCheckmark32Light: FluentFontIcon;
          export declare const CalendarClock32Light: FluentFontIcon;
          export declare const CalendarDataBar32Light: FluentFontIcon;
          export declare const CalendarDay32Light: FluentFontIcon;
          export declare const CalendarEdit32Light: FluentFontIcon;
          export declare const CalendarEmpty32Light: FluentFontIcon;
          export declare const CalendarLtr32Light: FluentFontIcon;
          export declare const CalendarMonth32Light: FluentFontIcon;
          export declare const CalendarMultiple32Light: FluentFontIcon;
          export declare const CalendarPattern32Light: FluentFontIcon;
          export declare const CalendarReply32Light: FluentFontIcon;
          export declare const CalendarSparkle32Light: FluentFontIcon;
          export declare const CalendarTodo32Light: FluentFontIcon;
          export declare const CalendarWorkWeek32Light: FluentFontIcon;
          export declare const Comment32Light: FluentFontIcon;
          export declare const CommentAdd32Light: FluentFontIcon;
          export declare const Compose32Light: FluentFontIcon;
          export declare const Lasso32Light: FluentFontIcon;
          export declare const Mail32Light: FluentFontIcon;
          export declare const MailAlert32Light: FluentFontIcon;
          export declare const MailArrowClockwise32Light: FluentFontIcon;
          export declare const MailArrowDoubleBack32Light: FluentFontIcon;
          export declare const MailCopy32Light: FluentFontIcon;
          export declare const MailEdit32Light: FluentFontIcon;
          export declare const MailList32Light: FluentFontIcon;
          export declare const MailMultiple32Light: FluentFontIcon;
          export declare const MailRead32Light: FluentFontIcon;
          export declare const MailReadMultiple32Light: FluentFontIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid font chunk contents in lib-cjs fonts/sizedIcons', async () => {
      const fontsSizedIconsPath = path.join(__dirname, 'lib-cjs', 'fonts', 'sizedIcons');
      const fontsSizedIconFiles = await readdir(fontsSizedIconsPath);
      const fontsSizedIconChunks = fontsSizedIconFiles.filter(
        (file) => file.startsWith('chunk-') && file.endsWith('.js'),
      );

      expect(fontsSizedIconChunks.length).toBeGreaterThan(0);

      // Take the first chunk for content verification
      const firstChunk = fontsSizedIconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        const jsFile = path.join(fontsSizedIconsPath, `chunk-${chunkNumber}.js`);
        const dtsFile = path.join(fontsSizedIconsPath, `chunk-${chunkNumber}.d.ts`);

        // Read and verify JS file content with inline snapshot
        const jsContent = await readFile(jsFile, 'utf8');
        const trimmedJSContent = trimContentForSnapshot(jsContent);
        expect(trimmedJSContent).toMatchInlineSnapshot(`
          "... (43 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.Calendar3Day32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Calendar3Day32Light", "", 3, 32));
          exports.CalendarCheckmark32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarCheckmark32Light", "", 3, 32));
          exports.CalendarClock32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarClock32Light", "", 3, 32));
          exports.CalendarDataBar32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarDataBar32Light", "", 3, 32));
          exports.CalendarDay32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarDay32Light", "", 3, 32));
          exports.CalendarEdit32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarEdit32Light", "", 3, 32));
          exports.CalendarEmpty32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarEmpty32Light", "", 3, 32));
          exports.CalendarLtr32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarLtr32Light", "", 3, 32));
          exports.CalendarMonth32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarMonth32Light", "", 3, 32));
          exports.CalendarMultiple32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarMultiple32Light", "", 3, 32));
          exports.CalendarPattern32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarPattern32Light", "", 3, 32));
          exports.CalendarReply32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarReply32Light", "", 3, 32));
          exports.CalendarSparkle32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarSparkle32Light", "", 3, 32));
          exports.CalendarTodo32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarTodo32Light", "", 3, 32));
          exports.CalendarWorkWeek32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarWorkWeek32Light", "", 3, 32));
          exports.Comment32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Comment32Light", "", 3, 32));
          exports.CommentAdd32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CommentAdd32Light", "", 3, 32));
          exports.Compose32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Compose32Light", "", 3, 32));
          exports.Lasso32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Lasso32Light", "", 3, 32));
          exports.Mail32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Mail32Light", "", 3, 32));
          exports.MailAlert32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("MailAlert32Light", "", 3, 32));
          exports.MailArrowClockwise32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("MailArrowClockwise32Light", "", 3, 32));
          exports.MailArrowDoubleBack32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("MailArrowDoubleBack32Light", "", 3, 32));
          exports.MailCopy32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("MailCopy32Light", "", 3, 32));
          exports.MailEdit32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("MailEdit32Light", "", 3, 32));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export declare const Calendar3Day32Light: FluentFontIcon;
          export declare const CalendarCheckmark32Light: FluentFontIcon;
          export declare const CalendarClock32Light: FluentFontIcon;
          export declare const CalendarDataBar32Light: FluentFontIcon;
          export declare const CalendarDay32Light: FluentFontIcon;
          export declare const CalendarEdit32Light: FluentFontIcon;
          export declare const CalendarEmpty32Light: FluentFontIcon;
          export declare const CalendarLtr32Light: FluentFontIcon;
          export declare const CalendarMonth32Light: FluentFontIcon;
          export declare const CalendarMultiple32Light: FluentFontIcon;
          export declare const CalendarPattern32Light: FluentFontIcon;
          export declare const CalendarReply32Light: FluentFontIcon;
          export declare const CalendarSparkle32Light: FluentFontIcon;
          export declare const CalendarTodo32Light: FluentFontIcon;
          export declare const CalendarWorkWeek32Light: FluentFontIcon;
          export declare const Comment32Light: FluentFontIcon;
          export declare const CommentAdd32Light: FluentFontIcon;
          export declare const Compose32Light: FluentFontIcon;
          export declare const Lasso32Light: FluentFontIcon;
          export declare const Mail32Light: FluentFontIcon;
          export declare const MailAlert32Light: FluentFontIcon;
          export declare const MailArrowClockwise32Light: FluentFontIcon;
          export declare const MailArrowDoubleBack32Light: FluentFontIcon;
          export declare const MailCopy32Light: FluentFontIcon;
          export declare const MailEdit32Light: FluentFontIcon;
          export declare const MailList32Light: FluentFontIcon;
          export declare const MailMultiple32Light: FluentFontIcon;
          export declare const MailRead32Light: FluentFontIcon;
          export declare const MailReadMultiple32Light: FluentFontIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    /**
     * @param {string} libDir
     * @param {string} subDir
     */
    async function assertNoEmptyChunks(libDir, subDir) {
      const dirPath = path.join(__dirname, libDir, subDir);
      const files = await readdir(dirPath);
      const jsChunks = files.filter((f) => f.startsWith('chunk-') && f.endsWith('.js'));
      for (const chunk of jsChunks) {
        const chunkPath = path.join(dirPath, chunk);
        const content = await readFile(chunkPath, 'utf-8');
        expect(content.trim().length).toBeGreaterThan(0);
      }
    }

    it.each(['lib', 'lib-cjs'])(`should not have EMPTY chunks in %s/icons`, async (libDir) => {
      await assertNoEmptyChunks(libDir, 'icons');
    });

    it.each(['lib', 'lib-cjs'])(`should not have EMPTY chunks in %s/sizedIcons`, async (libDir) => {
      await assertNoEmptyChunks(libDir, 'sizedIcons');
    });

    it.each(['lib', 'lib-cjs'])(`should not have EMPTY chunks in %s/fonts/icons`, async (libDir) => {
      await assertNoEmptyChunks(libDir, 'fonts/icons');
    });
    it.each(['lib', 'lib-cjs'])(`should not have EMPTY chunks in %s/fonts/sizedIcons`, async (libDir) => {
      await assertNoEmptyChunks(libDir, 'fonts/sizedIcons');
    });
  });

  describe('Font Files', () => {
    it('should have all required font files in utils/fonts', async () => {
      const fontsPath = path.join(__dirname, 'lib', 'utils', 'fonts');

      // Check for different font types
      const fontTypes = ['Regular', 'Filled', 'Light', 'Resizable'];
      const fontExtensions = ['json', 'ttf', 'woff', 'woff2'];

      for (const fontType of fontTypes) {
        for (const ext of fontExtensions) {
          const fileName = `FluentSystemIcons-${fontType}.${ext}`;
          const filePath = path.join(fontsPath, fileName);
          expect(fs.existsSync(filePath)).toBe(true);

          const stats = await stat(filePath);
          expect(stats.isFile()).toBe(true);
          expect(stats.size).toBeGreaterThan(0);
        }
      }
    });

    it('should have all required font creation files', async () => {
      const fontsPath = path.join(__dirname, 'lib', 'utils', 'fonts');

      // Check font creation files
      const fontCreationFiles = [
        'createFluentFontIcon.js',
        'createFluentFontIcon.d.ts',
        'createFluentFontIcon.shared.js',
        'createFluentFontIcon.shared.d.ts',
      ];

      for (const file of fontCreationFiles) {
        const filePath = path.join(fontsPath, file);
        expect(fs.existsSync(filePath)).toBe(true);
      }
    });
  });

  describe(`Atoms`, () => {
    function getAssetPaths() {
      const svgPathEsm = path.join(__dirname, 'lib', 'atoms/svg');
      const svgPathCjs = path.join(__dirname, 'lib-cjs', 'atoms/svg');
      const fontsPathEsm = path.join(__dirname, 'lib', 'atoms/fonts');
      const fontsPathCjs = path.join(__dirname, 'lib-cjs', 'atoms/fonts');
      return { svgPathEsm, svgPathCjs, fontsPathEsm, fontsPathCjs };
    }

    /**
     *
     * @param {string} assetPath
     */
    async function getStats(assetPath) {
      const files = await readdir(assetPath);
      const jsFiles = files.filter((f) => f.endsWith('.js'));
      return { files, jsFiles };
    }

    it(`should have same number of atoms/svg icon files in lib and lib-cjs`, async () => {
      const { svgPathCjs, svgPathEsm } = getAssetPaths();
      const esmStats = await getStats(svgPathEsm);
      const cjsStats = await getStats(svgPathCjs);
      expect(esmStats.jsFiles.length).toMatchInlineSnapshot(`2822`);
      expect(cjsStats.jsFiles.length).toMatchInlineSnapshot(`2822`);
    });
    it(`should have same number of atoms/fonts icon files in lib and lib-cjs`, async () => {
      const { fontsPathCjs, fontsPathEsm } = getAssetPaths();
      const esmStats = await getStats(fontsPathEsm);
      const cjsStats = await getStats(fontsPathCjs);
      expect(esmStats.jsFiles.length).toMatchInlineSnapshot(`2815`);
      expect(cjsStats.jsFiles.length).toMatchInlineSnapshot(`2815`);
    });
    it.each(['lib', 'lib-cjs'])('should have atoms/svg directory with icon files in %s', async (libDir) => {
      const atomsSvgPath = path.join(__dirname, libDir, 'atoms', 'svg');

      // Check atoms/svg directory exists
      expect(fs.existsSync(atomsSvgPath)).toBe(true);
      const stats = await stat(atomsSvgPath);
      expect(stats.isDirectory()).toBe(true);

      const { files, jsFiles } = await getStats(atomsSvgPath);

      // Snapshot the list of .js files to catch any unexpected changes
      expect(jsFiles).toMatchSnapshot();

      // Every .js file should have a corresponding .d.ts file
      for (const jsFile of jsFiles) {
        const baseName = jsFile.replace('.js', '');
        const dtsFile = `${baseName}.d.ts`;
        expect(files).toContain(dtsFile);
      }

      // Sample check: access-time should exist
      expect(files).toContain('access-time.js');
      expect(files).toContain('access-time.d.ts');
    });

    it.each(['lib', 'lib-cjs'])('should have atoms/fonts directory with icon files in %s', async (libDir) => {
      const atomsFontsPath = path.join(__dirname, libDir, 'atoms', 'fonts');

      // Check atoms/fonts directory exists
      expect(fs.existsSync(atomsFontsPath)).toBe(true);
      const stats = await stat(atomsFontsPath);
      expect(stats.isDirectory()).toBe(true);

      const { files, jsFiles } = await getStats(atomsFontsPath);

      // Snapshot the list of .js files to catch any unexpected changes
      expect(jsFiles).toMatchSnapshot();

      // Every .js file should have a corresponding .d.ts file
      for (const jsFile of jsFiles) {
        const baseName = jsFile.replace('.js', '');
        const dtsFile = `${baseName}.d.ts`;
        expect(files).toContain(dtsFile);
      }

      // Sample check: access-time should exist
      expect(files).toContain('access-time.js');
      expect(files).toContain('access-time.d.ts');
    });

    it('atom files should export icon variants correctly [svg]', async () => {
      const atomFilePath = path.join(__dirname, 'lib', 'atoms', 'svg', 'access-time.js');
      expect(fs.existsSync(atomFilePath)).toBe(true);

      const content = await readFile(atomFilePath, 'utf-8');

      // Should contain exports for different variants
      expect(content).toContain('export const AccessTimeFilled');
      expect(content).toContain('export const AccessTimeRegular');

      // Should contain sized variants
      expect(content).toContain('export const AccessTime20Filled');
      expect(content).toContain('export const AccessTime20Regular');
      expect(content).toContain('export const AccessTime24Filled');
      expect(content).toContain('export const AccessTime24Regular');

      // Should use createFluentIcon
      expect(content).toContain('createFluentIcon');
    });

    it('atom files should export icon variants correctly [fonts]', async () => {
      const atomFilePath = path.join(__dirname, 'lib', 'atoms', 'fonts', 'access-time.js');
      expect(fs.existsSync(atomFilePath)).toBe(true);

      const content = await readFile(atomFilePath, 'utf-8');

      // Should contain exports for different variants
      expect(content).toContain('export const AccessTimeFilled');
      expect(content).toContain('export const AccessTimeRegular');

      // Should use createFluentFontIcon
      expect(content).toContain('createFluentFontIcon');
    });

    it('atom TypeScript definition files should have correct exports', async () => {
      const atomDtsPath = path.join(__dirname, 'lib', 'atoms', 'svg', 'access-time.d.ts');
      expect(fs.existsSync(atomDtsPath)).toBe(true);

      const content = await readFile(atomDtsPath, 'utf-8');

      // Should export icon components (using declare const for .d.ts files)
      expect(content).toContain('export declare const AccessTimeFilled');
      expect(content).toContain('export declare const AccessTimeRegular');
      expect(content).toContain('FluentIcon');
    });

    it('atoms exports should be accessible via package.json exports', () => {
      const packageJsonPath = path.join(__dirname, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

      // Check that ./svg/* and ./fonts/* exports are defined
      expect(packageJson.exports['./svg/*']).toBeDefined();
      expect(packageJson.exports['./fonts/*']).toBeDefined();

      // Check that they point to atoms directories
      expect(packageJson.exports['./svg/*'].import).toBe('./lib/atoms/svg/*.js');
      expect(packageJson.exports['./svg/*'].require).toBe('./lib-cjs/atoms/svg/*.js');
      expect(packageJson.exports['./fonts/*'].import).toBe('./lib/atoms/fonts/*.js');
      expect(packageJson.exports['./fonts/*'].require).toBe('./lib-cjs/atoms/fonts/*.js');
    });

    it.each(['svg', 'fonts'])(
      'text-color atoms should be properly separated from text atoms in lib/atoms/%s',
      async (exportKindDir) => {
        const textFile = path.join(__dirname, 'lib', 'atoms', exportKindDir, 'text.js');
        const textColorFile = path.join(__dirname, 'lib', 'atoms', exportKindDir, 'text-color.js');
        // Both files should exist
        expect(fs.existsSync(textFile)).toBe(true);
        expect(fs.existsSync(textColorFile)).toBe(true);

        const textContent = await readFile(textFile, 'utf-8');
        const textColorContent = await readFile(textColorFile, 'utf-8');

        // text-color.js should only contain TextColor* exports
        expect(textColorContent).toContain(`export const TextColorFilled`);
        expect(textColorContent).toContain(`export const TextColorRegular`);
        expect(textColorContent).toContain(`export const TextColor16Regular`);
        expect(textColorContent).toContain(`export const TextColor20Regular`);
        expect(textColorContent).toContain(`export const TextColor24Regular`);

        // text-color.js should NOT contain Text* exports (without Color in the name)
        expect(textColorContent).not.toContain('export const Text12Regular');
        expect(textColorContent).not.toContain('export const Text16Regular');

        // text.js should contain Text* exports
        expect(textContent).toContain('export const Text12Regular');
        expect(textContent).toContain('export const Text16Regular');
        expect(textContent).toContain('export const Text32Regular');

        // text.js should have backward-compatible re-exports for TextColor* with deprecation notice
        expect(textContent).toContain(`@deprecated use \`@fluentui/${exportKindDir}/text-color\` import`);
        expect(textContent).toContain(`export const TextColorFilled`);
        expect(textContent).toContain(`export const TextColorRegular`);
        expect(textContent).toContain(`export const TextColor16Regular`);
        expect(textContent).toContain(`export const TextColor20Regular`);
        expect(textContent).toContain(`export const TextColor24Regular`);
      },
    );
  });

  describe('Metadata Validation', () => {
    it('metadata.json should exist and be valid JSON', () => {
      const metadataPath = path.join(__dirname, 'metadata.json');
      expect(fs.existsSync(metadataPath)).toBe(true);

      // Ensure it's valid JSON
      const content = fs.readFileSync(metadataPath, 'utf-8');
      expect(() => JSON.parse(content)).not.toThrow();
    });

    // The publish pipeline runs `build` (which regenerates metadata.json) followed by
    // `build-verify`. The updated file is committed later in the pipeline, so an uncommitted
    // diff is *expected* there and must not fail the build. Set REACT_ICONS_SKIP_METADATA_DIFF_CHECK=true
    // in that workflow to skip this test.
    // On PR validation and locally, this test must run so stale metadata.json is caught.
    (process.env.REACT_ICONS_SKIP_METADATA_DIFF_CHECK ? it.skip : it)(
      'metadata.json should have no uncommitted changes after build',
      () => {
        const metadataPath = path.join(__dirname, 'metadata.json');
        expect(fs.existsSync(metadataPath)).toBe(true);

        try {
          // Run git diff to check if metadata.json has any uncommitted changes
          const gitDiff = execSync('git diff metadata.json', {
            encoding: 'utf-8',
            cwd: __dirname,
            stdio: 'pipe',
          });

          // If there's a diff, the test should fail with a helpful message
          if (gitDiff.trim()) {
            throw new Error(
              `metadata.json has uncommitted changes after build.\n` +
                `This means the committed metadata.json is out of sync with the current icons.\n` +
                `Please run 'npm run build' and commit the updated metadata.json file.\n\n` +
                `Git diff:\n${gitDiff}`,
            );
          }

          // If no diff, the test passes
          expect(gitDiff.trim()).toBe('');
        } catch (error) {
          // Handle cases where git command fails (e.g., not in a git repo, file not tracked)
          if (error && typeof error === 'object' && 'status' in error && error.status === 128) {
            // Git command failed - this might be expected in some CI environments
            // We'll skip this test with a warning
            console.warn('Git diff check skipped - not in a git repository or metadata.json not tracked');
            return;
          }

          // Re-throw other errors (including our custom error above)
          throw error;
        }
      },
    );
  });
});
