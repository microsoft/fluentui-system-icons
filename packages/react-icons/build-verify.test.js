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
    filteredLines.splice(0, 0, `... (${voidExportCount} export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))`);
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
      const requiredDirs = ['icons', 'sizedIcons', 'fonts', 'utils'];
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
    });
  });

  describe('Package.json Exports', () => {
    it('should have all exported files exist', async () => {
      const packageJsonPath = path.join(__dirname, 'package.json');
      const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));

      // Check main, module, and typings fields
      const mainFields = {
        main: packageJson.main,
        module: packageJson.module,
        typings: packageJson.typings
      };

      for (const [field, filePath] of Object.entries(mainFields)) {
        if (filePath) {
          const fullPath = path.join(__dirname, filePath);
          expect(fs.existsSync(fullPath)).toBe(true);

          const stats = await stat(fullPath);
          expect(stats.isFile()).toBe(true);
        }
      }

      // Check all exports paths
      if (packageJson.exports) {
        const exportPaths = [];

        function extractPaths(obj, currentPath = '') {
          for (const [key, value] of Object.entries(obj)) {
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
            const matchName = entries.find(e => e.endsWith(ext));
            expect(matchName, `No file ending with '${ext}' found in ${dirPart} for export pattern ${exportPath}`).toBeTruthy();
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
      }
    });
  });

  describe('Styles Files', () => {
   it(`should produce griffel processed .styles.js and unprocessed .styles.raw.js [lib]`, () => {

     const root = path.join(__dirname, 'lib');
     const processed = 'utils/useIconStyles.styles.js'
     const unprocessed = 'utils/useIconStyles.styles.raw.js'
     expect(fs.readFileSync(path.join(root, processed), 'utf8')).toMatchInlineSnapshot(`
       "import { __styles } from "@griffel/react";
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
       "import { makeStyles } from "@griffel/react";
       export const useStyles = makeStyles({
           root: {
               display: 'inline',
               lineHeight: 0
           },
           rtl: {
               transform: 'scaleX(-1)'
           }
       });
       "
     `);

   });

   it(`should produce griffel processed .styles.js and unprocessed .styles.raw.js [lib-cjs]`, () => {

     const root = path.join(__dirname, 'lib-cjs');
     const processed = 'utils/useIconStyles.styles.js'
     const unprocessed = 'utils/useIconStyles.styles.raw.js'
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
               lineHeight: 0
           },
           rtl: {
               transform: 'scaleX(-1)'
           }
       });
       "
     `);

   });

    it.each(['lib', 'lib-cjs'])('should have required styles files in utils (%s)', async (libDir) => {
      const utilsPath = path.join(__dirname, libDir, 'utils');
      const files = await readdir(utilsPath);

      // Check for .styles.raw.js files
      const rawStylesFiles = files.filter(file => file.endsWith('.styles.raw.js'));
      expect(rawStylesFiles.length).toBeGreaterThan(0);

      // Check for .styles.js files
      const stylesFiles = files.filter(file => file.endsWith('.styles.js') && !file.endsWith('.raw.js'));
      expect(stylesFiles.length).toBeGreaterThan(0);

      // Verify specific expected files exist
      const expectedStylesFiles = [
        'createFluentIcon.styles.raw.js',
        'createFluentIcon.styles.js',
        'bundleIcon.styles.raw.js',
        'bundleIcon.styles.js',
        'useIconStyles.styles.raw.js',
        'useIconStyles.styles.js'
      ];

      for (const file of expectedStylesFiles) {
        const filePath = path.join(utilsPath, file);
        expect(fs.existsSync(filePath)).toBe(true);
      }
    });

    it.each(['lib', 'lib-cjs'])('should have required font styles files in utils/fonts (%s)', async (libDir) => {
      const fontsUtilsPath = path.join(__dirname, libDir, 'utils', 'fonts');
      const expectedFontsStylesFiles = [
        'createFluentFontIcon.styles.raw.js',
        'createFluentFontIcon.styles.js'
      ];

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
      const iconChunks = iconFiles.filter(file => file.startsWith('chunk-'));
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
      const sizedIconChunks = sizedIconFiles.filter(file => file.startsWith('chunk-'));
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
      const fontsIconChunks = fontsIconFiles.filter(file => file.startsWith('chunk-'));
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
      const fontsSizedIconChunks = fontsSizedIconFiles.filter(file => file.startsWith('chunk-'));
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
        export { default as wrapIcon } from './utils/wrapIcon';
        export { default as bundleIcon } from './utils/bundleIcon';
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
        export { default as wrapIcon } from './utils/wrapIcon';
        export { default as bundleIcon } from './utils/bundleIcon';
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
        var wrapIcon_1 = require("./utils/wrapIcon");
        Object.defineProperty(exports, "wrapIcon", { enumerable: true, get: function () { return tslib_1.__importDefault(wrapIcon_1).default; } });
        var bundleIcon_1 = require("./utils/bundleIcon");
        Object.defineProperty(exports, "bundleIcon", { enumerable: true, get: function () { return tslib_1.__importDefault(bundleIcon_1).default; } });
        var createFluentIcon_1 = require("./utils/createFluentIcon");
        Object.defineProperty(exports, "createFluentIcon", { enumerable: true, get: function () { return createFluentIcon_1.createFluentIcon; } });
        tslib_1.__exportStar(require("./utils/useIconState"), exports);
        tslib_1.__exportStar(require("./utils/constants"), exports);
        var index_1 = require("./contexts/index");
        Object.defineProperty(exports, "IconDirectionContextProvider", { enumerable: true, get: function () { return index_1.IconDirectionContextProvider; } });
        Object.defineProperty(exports, "useIconContext", { enumerable: true, get: function () { return index_1.useIconContext; } });
        "
      `)
      expect(dtsContent).toMatchInlineSnapshot(`
        "export * from './icons/chunk-0';
        export * from './icons/chunk-1';
        export * from './icons/chunk-2';
        export * from './icons/chunk-3';
        export * from './icons/chunk-4';
        export * from './icons/chunk-5';
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
        export { default as wrapIcon } from './utils/wrapIcon';
        export { default as bundleIcon } from './utils/bundleIcon';
        export { createFluentIcon } from './utils/createFluentIcon';
        export * from './utils/useIconState';
        export * from './utils/constants';
        export { IconDirectionContextProvider, useIconContext } from './contexts/index';
        export type { FluentIconsProps } from './utils/FluentIconsProps.types';
        export type { FluentIcon } from './utils/createFluentIcon';
        export type { IconDirectionContextValue } from './contexts/index';
        "
      `)
     })

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
        export * from './sizedIcons/chunk-30';
        export * from './sizedIcons/chunk-31';
        export * from './sizedIcons/chunk-32';
        export * from './sizedIcons/chunk-33';
        export * from './sizedIcons/chunk-34';
        export * from './sizedIcons/chunk-35';
        export * from './sizedIcons/chunk-36';
        export * from './sizedIcons/chunk-37';
        export { default as wrapIcon } from '../utils/wrapIcon';
        export { default as bundleIcon } from '../utils/bundleIcon';
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
        export * from './sizedIcons/chunk-30';
        export * from './sizedIcons/chunk-31';
        export * from './sizedIcons/chunk-32';
        export * from './sizedIcons/chunk-33';
        export * from './sizedIcons/chunk-34';
        export * from './sizedIcons/chunk-35';
        export * from './sizedIcons/chunk-36';
        export * from './sizedIcons/chunk-37';
        export { default as wrapIcon } from '../utils/wrapIcon';
        export { default as bundleIcon } from '../utils/bundleIcon';
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
        tslib_1.__exportStar(require("./sizedIcons/chunk-30"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-31"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-32"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-33"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-34"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-35"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-36"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-37"), exports);
        var wrapIcon_1 = require("../utils/wrapIcon");
        Object.defineProperty(exports, "wrapIcon", { enumerable: true, get: function () { return tslib_1.__importDefault(wrapIcon_1).default; } });
        var bundleIcon_1 = require("../utils/bundleIcon");
        Object.defineProperty(exports, "bundleIcon", { enumerable: true, get: function () { return tslib_1.__importDefault(bundleIcon_1).default; } });
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
      `)
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
        export * from './sizedIcons/chunk-30';
        export * from './sizedIcons/chunk-31';
        export * from './sizedIcons/chunk-32';
        export * from './sizedIcons/chunk-33';
        export * from './sizedIcons/chunk-34';
        export * from './sizedIcons/chunk-35';
        export * from './sizedIcons/chunk-36';
        export * from './sizedIcons/chunk-37';
        export { default as wrapIcon } from '../utils/wrapIcon';
        export { default as bundleIcon } from '../utils/bundleIcon';
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
      `)
    })

    it('should have valid chunk contents in lib icons', async () => {
      const iconsPath = path.join(__dirname, 'lib', 'icons');
      const iconFiles = await readdir(iconsPath);
      const iconChunks = iconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

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
          export const AccessTimeFilled = ( /*#__PURE__*/createFluentIcon('AccessTimeFilled', "1em", ["M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.99 8.6A.5.5 0 0 1 6 8.4c.02-.07.03-.14.07-.24a2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"]));
          export const AccessTimeRegular = ( /*#__PURE__*/createFluentIcon('AccessTimeRegular', "1em", ["M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"]));
          export const AccessibilityFilled = ( /*#__PURE__*/createFluentIcon('AccessibilityFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l1.4-3.46c.08-.21.38-.21.46 0l1.4 3.46a1.75 1.75 0 0 0 3.24-1.32l-1.83-4.54a.5.5 0 0 1-.04-.19V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57Z"]));
          export const AccessibilityRegular = ( /*#__PURE__*/createFluentIcon('AccessibilityRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 0 0 3.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2ZM4.07 5.44a.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.37l1.87 4.64a.75.75 0 0 1-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99Z"]));
          export const AccessibilityCheckmarkFilled = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmarkFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          export const AccessibilityCheckmarkRegular = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmarkRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          export const AccessibilityErrorFilled = ( /*#__PURE__*/createFluentIcon('AccessibilityErrorFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"]));
          export const AccessibilityErrorRegular = ( /*#__PURE__*/createFluentIcon('AccessibilityErrorRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.5 2.5 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"]));
          export const AccessibilityMoreFilled = ( /*#__PURE__*/createFluentIcon('AccessibilityMoreFilled', "1em", ["M14.87 15.6c.05.11.08.23.1.35a2.24 2.24 0 0 0-1.97-1.2c-.77 0-1.43.4-1.84 1l-.93-2.3a.25.25 0 0 0-.47 0l-.54 1.33c-.07 0-.14-.03-.22-.03a2.25 2.25 0 0 0-2.02 3.23 1.73 1.73 0 0 1-1.86-2.39l1.84-4.55a.5.5 0 0 0 .04-.19V9a.5.5 0 0 0-.3-.46L4.03 7.34a1.74 1.74 0 0 1-.88-2.31 1.76 1.76 0 0 1 2.32-.88l1.27.57c.25.1.43.3.52.52a3 3 0 0 0 5.47 0c.1-.21.27-.41.52-.52l1.27-.57c.89-.4 1.92 0 2.32.88.4.88 0 1.92-.88 2.31L13.3 8.53a.5.5 0 0 0-.3.46v1.87c0 .07.02.13.04.19l1.84 4.54ZM10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-1 9.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"]));
          export const AccessibilityMoreRegular = ( /*#__PURE__*/createFluentIcon('AccessibilityMoreRegular', "1em", ["m9 12.68-.92 2.27c.28-.13.6-.2.92-.2.08 0 .15.03.23.03l.7-1.72c0-.03.01-.04.02-.04L10 13h.04l.03.05 1.1 2.7c.2-.3.46-.55.78-.73L11 12.68c-.37-.9-1.64-.9-2 0Zm7.84-7.65a1.76 1.76 0 0 0-2.31-.88l-2.1.94A2.51 2.51 0 0 0 10 1.99a2.5 2.5 0 0 0-2.43 3.1l-2.1-.94c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29L5.12 15.6a1.75 1.75 0 0 0 1.86 2.38c-.14-.3-.23-.63-.23-.98-.1 0-.2-.02-.29-.05a.75.75 0 0 1-.41-.98l1.88-4.64a1 1 0 0 0 .07-.38V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.98.76.76 0 0 1 1-.38L8.98 6.8a2.5 2.5 0 0 0 2.04 0l3.92-1.74c.38-.17.82 0 1 .38.17.37 0 .81-.38.98L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.38l1.41 3.48c.65.15 1.19.56 1.5 1.13a1.8 1.8 0 0 0-.1-.35L13 10.96v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.3ZM10 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm.25 11a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"]));
          export const AccessibilityQuestionMarkFilled = ( /*#__PURE__*/createFluentIcon('AccessibilityQuestionMarkFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z"]));
          export const AccessibilityQuestionMarkRegular = ( /*#__PURE__*/createFluentIcon('AccessibilityQuestionMarkRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.5 2.5 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z"]));
          export const AddFilled = ( /*#__PURE__*/createFluentIcon('AddFilled', "1em", ["M10 2.25c.41 0 .75.34.75.75v6.25H17a.75.75 0 0 1 0 1.5h-6.25V17a.75.75 0 0 1-1.5 0v-6.25H3a.75.75 0 0 1 0-1.5h6.25V3c0-.41.34-.75.75-.75Z"]));
          export const AddRegular = ( /*#__PURE__*/createFluentIcon('AddRegular', "1em", ["M10 2.5c.28 0 .5.22.5.5v6.5H17a.5.5 0 0 1 0 1h-6.5V17a.5.5 0 0 1-1 0v-6.5H3a.5.5 0 0 1 0-1h6.5V3c0-.28.22-.5.5-.5Z"]));
          export const AddCircleColor = ( /*#__PURE__*/createFluentIcon('AddCircleColor', "1em", \`<path d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="url(#ic_fluent_add_circle_20_color__a)"/><path d="M6 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10Z" fill="url(#ic_fluent_add_circle_20_color__b)"/><defs><linearGradient id="ic_fluent_add_circle_20_color__a" x1="2.57" y1="5" x2="13.61" y2="16.47" gradientUnits="userSpaceOnUse"><stop stop-color="#52D17C"/><stop offset="1" stop-color="#22918B"/></linearGradient><linearGradient id="ic_fluent_add_circle_20_color__b" x1="7.5" y1="6.82" x2="9.95" y2="15.48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#E3FFD9"/></linearGradient></defs>\`, { color: true }));
          export const AddCircleFilled = ( /*#__PURE__*/createFluentIcon('AddCircleFilled', "1em", ["M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM6 10c0 .28.22.5.5.5h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0-.5.5Z"]));
          export const AddCircleRegular = ( /*#__PURE__*/createFluentIcon('AddCircleRegular', "1em", ["M6 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10Zm4 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"]));
          export const AddSquareFilled = ( /*#__PURE__*/createFluentIcon('AddSquareFilled', "1em", ["M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm7.5.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 1 0 1 0v-3h3a.5.5 0 1 0 0-1h-3v-3Z"]));
          export const AddSquareRegular = ( /*#__PURE__*/createFluentIcon('AddSquareRegular', "1em", ["M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm6.5.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 1 0 1 0v-3h3a.5.5 0 1 0 0-1h-3v-3Z"]));
          export const AddSquareMultipleFilled = ( /*#__PURE__*/createFluentIcon('AddSquareMultipleFilled', "1em", ["M16 5.27c.6.34 1 .99 1 1.73v6a4 4 0 0 1-4 4H7a2 2 0 0 1-1.73-1H13a3 3 0 0 0 3-3V5.27ZM15 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V5Zm-3 4a.5.5 0 0 1-.5.5h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 1 1 0-1h2v-2a.5.5 0 1 1 1 0v2h2c.28 0 .5.22.5.5Z"]));
          export const AddSquareMultipleRegular = ( /*#__PURE__*/createFluentIcon('AddSquareMultipleRegular', "1em", ["M16 5.27V13a3 3 0 0 1-3 3H5.27c.34.6.99 1 1.73 1h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.73ZM11.5 9.5a.5.5 0 0 0 0-1h-2v-2a.5.5 0 1 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2ZM13 3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8Zm1 2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5Z"]));
          export const AddStarburstColor = ( /*#__PURE__*/createFluentIcon('AddStarburstColor', "1em", \`<path d="M11.1 1.3a.75.75 0 0 0-1.2 0L8.85 2.65a.5.5 0 0 1-.58.15l-1.6-.65a.75.75 0 0 0-1.03.6l-.24 1.7a.5.5 0 0 1-.42.44l-1.72.23a.75.75 0 0 0-.59 1.03l.65 1.6a.5.5 0 0 1-.15.59L1.79 9.4a.75.75 0 0 0 0 1.18l1.37 1.07a.5.5 0 0 1 .15.58l-.65 1.6c-.18.46.1.96.6 1.03l1.7.24c.23.03.4.2.43.42l.24 1.72c.07.48.57.77 1.03.59l1.6-.65a.5.5 0 0 1 .58.15l1.07 1.37c.3.39.88.39 1.18 0l1.06-1.37a.5.5 0 0 1 .59-.15l1.6.65c.45.18.96-.1 1.03-.6l.23-1.7a.5.5 0 0 1 .43-.43l1.72-.24a.75.75 0 0 0 .59-1.03l-.65-1.6a.5.5 0 0 1 .15-.58l1.37-1.07a.75.75 0 0 0 0-1.18l-1.37-1.06a.5.5 0 0 1-.15-.59l.65-1.6a.75.75 0 0 0-.6-1.03l-1.7-.23a.5.5 0 0 1-.44-.43l-.23-1.72a.75.75 0 0 0-1.03-.59l-1.6.65a.5.5 0 0 1-.59-.15L11.1 1.29Z" fill="url(#ic_fluent_add_starburst_20_color__a)"/><path d="M6.5 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3H7a.5.5 0 0 1-.5-.5Z" fill="url(#ic_fluent_add_starburst_20_color__b)" fill-opacity=".95"/><defs><radialGradient id="ic_fluent_add_starburst_20_color__a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-19.58616 -34.63252 33.172 -18.76018 22.15 21.62)"><stop stop-color="#FFC470"/><stop offset=".25" stop-color="#FF835C"/><stop offset=".55" stop-color="#F24A9D"/><stop offset=".81" stop-color="#B339F0"/></radialGradient><linearGradient id="ic_fluent_add_starburst_20_color__b" x1="13.94" y1="16.26" x2="5.55" y2="10.82" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#FFC8D7"/><stop offset=".81" stop-color="#fff"/></linearGradient></defs>\`, { color: true }));
          export const AddStarburstFilled = ( /*#__PURE__*/createFluentIcon('AddStarburstFilled', "1em", ["M9.4 1.3a.75.75 0 0 1 1.2 0l1.05 1.36a.5.5 0 0 0 .59.15l1.6-.65c.45-.18.96.1 1.03.6l.23 1.7c.04.23.21.4.43.44l1.72.23c.48.07.77.58.59 1.03l-.65 1.6a.5.5 0 0 0 .15.59l1.37 1.06c.39.3.39.88 0 1.18l-1.37 1.07a.5.5 0 0 0-.15.58l.65 1.6c.18.46-.1.96-.6 1.03l-1.7.24a.5.5 0 0 0-.44.42l-.23 1.72a.75.75 0 0 1-1.03.59l-1.6-.65a.5.5 0 0 0-.59.15l-1.06 1.37a.75.75 0 0 1-1.18 0l-1.07-1.37a.5.5 0 0 0-.58-.15l-1.6.65a.75.75 0 0 1-1.03-.6l-.24-1.7a.5.5 0 0 0-.42-.43l-1.72-.24a.75.75 0 0 1-.59-1.03l.65-1.6a.5.5 0 0 0-.15-.58l-1.37-1.07a.75.75 0 0 1 0-1.18l1.37-1.06a.5.5 0 0 0 .15-.59l-.65-1.6a.75.75 0 0 1 .6-1.03l1.7-.23a.5.5 0 0 0 .43-.43l.24-1.72a.75.75 0 0 1 1.03-.59l1.6.65c.2.09.45.02.58-.15l1.07-1.37ZM6.5 9.5a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3a.5.5 0 0 0-1 0v3h-3Z"]));
          export const AddStarburstRegular = ( /*#__PURE__*/createFluentIcon('AddStarburstRegular', "1em", ["M6.5 9.5a.5.5 0 1 0 0 1h3v3a.5.5 0 1 0 1 0v-3h3a.5.5 0 1 0 0-1h-3v-3a.5.5 0 1 0-1 0v3h-3Zm4.1-8.2a.75.75 0 0 0-1.2 0L8.35 2.65a.5.5 0 0 1-.58.15l-1.6-.65a.75.75 0 0 0-1.03.6l-.24 1.7a.5.5 0 0 1-.42.44l-1.72.23a.75.75 0 0 0-.6 1.03l.66 1.6a.5.5 0 0 1-.15.59L1.29 9.4a.75.75 0 0 0 0 1.18l1.37 1.07a.5.5 0 0 1 .15.58l-.65 1.6c-.18.46.1.96.6 1.03l1.7.24c.23.03.4.2.43.42l.24 1.72c.07.48.57.77 1.03.59l1.6-.65a.5.5 0 0 1 .58.15l1.07 1.37c.3.39.88.39 1.18 0l1.06-1.37a.5.5 0 0 1 .59-.15l1.6.65c.45.18.96-.1 1.03-.6l.23-1.7a.5.5 0 0 1 .43-.43l1.72-.24a.75.75 0 0 0 .59-1.03l-.65-1.6a.5.5 0 0 1 .15-.58l1.37-1.07a.75.75 0 0 0 0-1.18l-1.37-1.06a.5.5 0 0 1-.15-.59l.65-1.6a.75.75 0 0 0-.6-1.03l-1.71-.23a.5.5 0 0 1-.43-.43l-.23-1.72a.75.75 0 0 0-1.03-.59l-1.6.65a.5.5 0 0 1-.59-.15L10.6 1.29ZM9.12 3.26 10 2.16l.86 1.11a1.5 1.5 0 0 0 1.75.47l1.31-.53.2 1.4c.08.66.6 1.18 1.27 1.28l1.4.19-.53 1.3a1.5 1.5 0 0 0 .47 1.75l1.11.87-1.11.87a1.5 1.5 0 0 0-.47 1.75l.53 1.3-1.4.2a1.5 1.5 0 0 0-1.28 1.28l-.19 1.4-1.3-.54a1.5 1.5 0 0 0-1.76.47L10 17.84l-.87-1.11a1.5 1.5 0 0 0-1.75-.47l-1.3.53-.2-1.4a1.5 1.5 0 0 0-1.28-1.28l-1.4-.19.54-1.3a1.5 1.5 0 0 0-.47-1.75L2.16 10l1.1-.87a1.5 1.5 0 0 0 .48-1.74L3.2 6.08l1.4-.2a1.5 1.5 0 0 0 1.27-1.27l.2-1.4 1.3.53a1.5 1.5 0 0 0 1.75-.47Z"]));
          export const AddSubtractCircleFilled = ( /*#__PURE__*/createFluentIcon('AddSubtractCircleFilled', "1em", ["M11.5 12a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a6.97 6.97 0 0 1-4.58-1.7l9.87-9.88A7 7 0 0 1 10 17ZM5.5 7c0-.28.22-.5.5-.5h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 1 1 0 1H8v1a.5.5 0 0 1-1 0v-1H6a.5.5 0 0 1-.5-.5Z"]));
          export const AddSubtractCircleRegular = ( /*#__PURE__*/createFluentIcon('AddSubtractCircleRegular', "1em", ["M11 12.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-3-7a.5.5 0 0 0-1 0v1H6a.5.5 0 1 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 1 0 0-1H8v-1ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a6.97 6.97 0 0 1-4.58-1.7l9.87-9.88A7 7 0 0 1 10 17Zm-5.3-2.42a7 7 0 0 1 9.87-9.87l-9.86 9.87Z"]));
          export const AgentsColor = ( /*#__PURE__*/createFluentIcon('AgentsColor', "1em", \`<path d="M13.18 2H10.5C8.77 7.02 6.82 12.62 6.82 18h6.49c.6 0 1.16-.31 1.48-.82l4-6.42c.29-.47.29-1.05 0-1.52l-3.8-6.11A2 2 0 0 0 13.17 2Z" fill="url(#ic_fluent_agents_20_color__a)"/><path d="M13.18 2H10.5C8.77 7.02 6.82 12.62 6.82 18h6.49c.6 0 1.16-.31 1.48-.82l4-6.42c.29-.47.29-1.05 0-1.52l-3.8-6.11A2 2 0 0 0 13.17 2Z" fill="url(#ic_fluent_agents_20_color__b)" fill-opacity=".5"/><path d="M13.25 2H6.68c-.6 0-1.15.3-1.47.82L1.27 9.07c-.36.57-.36 1.3 0 1.86l3.86 6.13c.35.56.96.91 1.62.94h.07a2 2 0 0 0 1.97-1.66l2.4-12.39A2 2 0 0 1 13.24 2Z" fill="url(#ic_fluent_agents_20_color__c)"/><path d="M13.25 2H6.68c-.6 0-1.15.3-1.47.82L1.27 9.07c-.36.57-.36 1.3 0 1.86l3.86 6.13c.35.56.96.91 1.62.94h.07a2 2 0 0 0 1.97-1.66l2.4-12.39A2 2 0 0 1 13.24 2Z" fill="url(#ic_fluent_agents_20_color__d)" fill-opacity=".4"/><defs><radialGradient id="ic_fluent_agents_20_color__a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-87.88 17.7 4.84) scale(23.3302 18.6978)"><stop stop-color="#FFC470"/><stop offset=".25" stop-color="#FF835C"/><stop offset=".58" stop-color="#F24A9D"/><stop offset=".87" stop-color="#B339F0"/><stop offset="1" stop-color="#C354FF"/></radialGradient><radialGradient id="ic_fluent_agents_20_color__b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-9.9932 -9.83058 9.94854 -10.1131 11.78 16.15)"><stop offset=".71" stop-color="#FFB357" stop-opacity="0"/><stop offset=".94" stop-color="#FFB357"/></radialGradient><radialGradient id="ic_fluent_agents_20_color__c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-160.25 10.24 6.67) scale(22.9945 19.4416)"><stop offset=".22" stop-color="#4E46E2"/><stop offset=".58" stop-color="#625DF6"/><stop offset=".95" stop-color="#E37DFF"/></radialGradient><linearGradient id="ic_fluent_agents_20_color__d" x1="4.82" y1="8.63" x2="10.25" y2="9.91" gradientUnits="userSpaceOnUse"><stop stop-color="#7563F7" stop-opacity="0"/><stop offset=".99" stop-color="#4916AE"/></linearGradient></defs>\`, { color: true }));
          export const AgentsFilled = ( /*#__PURE__*/createFluentIcon('AgentsFilled', "1em", ["M9.08 18a3 3 0 0 0 .67-1.24l3.4-12.75V4c.07-.2 0-.53-.31-.6-.36-.09-.55.09-.64.28a1 1 0 0 0-.02.07L8.78 16.5a2.02 2.02 0 0 1-3.65.56l-3.86-6.13a1.75 1.75 0 0 1 0-1.86L5.2 2.82C5.53 2.3 6.09 2 6.69 2h4.23a3 3 0 0 0-.67 1.24l-3.4 12.75V16c-.07.2 0 .53.31.6.36.09.55-.09.63-.28a1 1 0 0 0 .03-.07l3.4-12.76a2.01 2.01 0 0 1 3.64-.55l3.93 6.3c.29.47.29 1.05 0 1.52l-4 6.42c-.32.5-.88.82-1.48.82H9.08Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from '../utils/createFluentIcon';
          export declare const AccessTimeFilled: FluentIcon;
          export declare const AccessTimeRegular: FluentIcon;
          export declare const AccessibilityFilled: FluentIcon;
          export declare const AccessibilityRegular: FluentIcon;
          export declare const AccessibilityCheckmarkFilled: FluentIcon;
          export declare const AccessibilityCheckmarkRegular: FluentIcon;
          export declare const AccessibilityErrorFilled: FluentIcon;
          export declare const AccessibilityErrorRegular: FluentIcon;
          export declare const AccessibilityMoreFilled: FluentIcon;
          export declare const AccessibilityMoreRegular: FluentIcon;
          export declare const AccessibilityQuestionMarkFilled: FluentIcon;
          export declare const AccessibilityQuestionMarkRegular: FluentIcon;
          export declare const AddFilled: FluentIcon;
          export declare const AddRegular: FluentIcon;
          export declare const AddCircleColor: FluentIcon;
          export declare const AddCircleFilled: FluentIcon;
          export declare const AddCircleRegular: FluentIcon;
          export declare const AddSquareFilled: FluentIcon;
          export declare const AddSquareRegular: FluentIcon;
          export declare const AddSquareMultipleFilled: FluentIcon;
          export declare const AddSquareMultipleRegular: FluentIcon;
          export declare const AddStarburstColor: FluentIcon;
          export declare const AddStarburstFilled: FluentIcon;
          export declare const AddStarburstRegular: FluentIcon;
          export declare const AddSubtractCircleFilled: FluentIcon;
          export declare const AddSubtractCircleRegular: FluentIcon;
          export declare const AgentsColor: FluentIcon;
          export declare const AgentsFilled: FluentIcon;
          export declare const AgentsRegular: FluentIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid chunk contents in lib-cjs icons', async () => {
      const iconsPath = path.join(__dirname, 'lib-cjs', 'icons');
      const iconFiles = await readdir(iconsPath);
      const iconChunks = iconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

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
          "... (20 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.AccessTimeFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTimeFilled', "1em", ["M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.99 8.6A.5.5 0 0 1 6 8.4c.02-.07.03-.14.07-.24a2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"]));
          exports.AccessTimeRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTimeRegular', "1em", ["M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"]));
          exports.AccessibilityFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l1.4-3.46c.08-.21.38-.21.46 0l1.4 3.46a1.75 1.75 0 0 0 3.24-1.32l-1.83-4.54a.5.5 0 0 1-.04-.19V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57Z"]));
          exports.AccessibilityRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 0 0 3.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2ZM4.07 5.44a.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.37l1.87 4.64a.75.75 0 0 1-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99Z"]));
          exports.AccessibilityCheckmarkFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmarkFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          exports.AccessibilityCheckmarkRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmarkRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          exports.AccessibilityErrorFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityErrorFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"]));
          exports.AccessibilityErrorRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityErrorRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.5 2.5 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"]));
          exports.AccessibilityMoreFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityMoreFilled', "1em", ["M14.87 15.6c.05.11.08.23.1.35a2.24 2.24 0 0 0-1.97-1.2c-.77 0-1.43.4-1.84 1l-.93-2.3a.25.25 0 0 0-.47 0l-.54 1.33c-.07 0-.14-.03-.22-.03a2.25 2.25 0 0 0-2.02 3.23 1.73 1.73 0 0 1-1.86-2.39l1.84-4.55a.5.5 0 0 0 .04-.19V9a.5.5 0 0 0-.3-.46L4.03 7.34a1.74 1.74 0 0 1-.88-2.31 1.76 1.76 0 0 1 2.32-.88l1.27.57c.25.1.43.3.52.52a3 3 0 0 0 5.47 0c.1-.21.27-.41.52-.52l1.27-.57c.89-.4 1.92 0 2.32.88.4.88 0 1.92-.88 2.31L13.3 8.53a.5.5 0 0 0-.3.46v1.87c0 .07.02.13.04.19l1.84 4.54ZM10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-1 9.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"]));
          exports.AccessibilityMoreRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityMoreRegular', "1em", ["m9 12.68-.92 2.27c.28-.13.6-.2.92-.2.08 0 .15.03.23.03l.7-1.72c0-.03.01-.04.02-.04L10 13h.04l.03.05 1.1 2.7c.2-.3.46-.55.78-.73L11 12.68c-.37-.9-1.64-.9-2 0Zm7.84-7.65a1.76 1.76 0 0 0-2.31-.88l-2.1.94A2.51 2.51 0 0 0 10 1.99a2.5 2.5 0 0 0-2.43 3.1l-2.1-.94c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29L5.12 15.6a1.75 1.75 0 0 0 1.86 2.38c-.14-.3-.23-.63-.23-.98-.1 0-.2-.02-.29-.05a.75.75 0 0 1-.41-.98l1.88-4.64a1 1 0 0 0 .07-.38V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.98.76.76 0 0 1 1-.38L8.98 6.8a2.5 2.5 0 0 0 2.04 0l3.92-1.74c.38-.17.82 0 1 .38.17.37 0 .81-.38.98L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.38l1.41 3.48c.65.15 1.19.56 1.5 1.13a1.8 1.8 0 0 0-.1-.35L13 10.96v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.3ZM10 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm.25 11a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"]));
          exports.AccessibilityQuestionMarkFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityQuestionMarkFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z"]));
          exports.AccessibilityQuestionMarkRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityQuestionMarkRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.5 2.5 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z"]));
          exports.AddFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddFilled', "1em", ["M10 2.25c.41 0 .75.34.75.75v6.25H17a.75.75 0 0 1 0 1.5h-6.25V17a.75.75 0 0 1-1.5 0v-6.25H3a.75.75 0 0 1 0-1.5h6.25V3c0-.41.34-.75.75-.75Z"]));
          exports.AddRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddRegular', "1em", ["M10 2.5c.28 0 .5.22.5.5v6.5H17a.5.5 0 0 1 0 1h-6.5V17a.5.5 0 0 1-1 0v-6.5H3a.5.5 0 0 1 0-1h6.5V3c0-.28.22-.5.5-.5Z"]));
          exports.AddCircleColor = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddCircleColor', "1em", \`<path d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="url(#ic_fluent_add_circle_20_color__a)"/><path d="M6 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10Z" fill="url(#ic_fluent_add_circle_20_color__b)"/><defs><linearGradient id="ic_fluent_add_circle_20_color__a" x1="2.57" y1="5" x2="13.61" y2="16.47" gradientUnits="userSpaceOnUse"><stop stop-color="#52D17C"/><stop offset="1" stop-color="#22918B"/></linearGradient><linearGradient id="ic_fluent_add_circle_20_color__b" x1="7.5" y1="6.82" x2="9.95" y2="15.48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#E3FFD9"/></linearGradient></defs>\`, { color: true }));
          exports.AddCircleFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddCircleFilled', "1em", ["M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM6 10c0 .28.22.5.5.5h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0-.5.5Z"]));
          exports.AddCircleRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddCircleRegular', "1em", ["M6 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10Zm4 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"]));
          exports.AddSquareFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddSquareFilled', "1em", ["M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm7.5.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 1 0 1 0v-3h3a.5.5 0 1 0 0-1h-3v-3Z"]));
          exports.AddSquareRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddSquareRegular', "1em", ["M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm6.5.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 1 0 1 0v-3h3a.5.5 0 1 0 0-1h-3v-3Z"]));
          exports.AddSquareMultipleFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddSquareMultipleFilled', "1em", ["M16 5.27c.6.34 1 .99 1 1.73v6a4 4 0 0 1-4 4H7a2 2 0 0 1-1.73-1H13a3 3 0 0 0 3-3V5.27ZM15 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V5Zm-3 4a.5.5 0 0 1-.5.5h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 1 1 0-1h2v-2a.5.5 0 1 1 1 0v2h2c.28 0 .5.22.5.5Z"]));
          exports.AddSquareMultipleRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddSquareMultipleRegular', "1em", ["M16 5.27V13a3 3 0 0 1-3 3H5.27c.34.6.99 1 1.73 1h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.73ZM11.5 9.5a.5.5 0 0 0 0-1h-2v-2a.5.5 0 1 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2ZM13 3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8Zm1 2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5Z"]));
          exports.AddStarburstColor = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddStarburstColor', "1em", \`<path d="M11.1 1.3a.75.75 0 0 0-1.2 0L8.85 2.65a.5.5 0 0 1-.58.15l-1.6-.65a.75.75 0 0 0-1.03.6l-.24 1.7a.5.5 0 0 1-.42.44l-1.72.23a.75.75 0 0 0-.59 1.03l.65 1.6a.5.5 0 0 1-.15.59L1.79 9.4a.75.75 0 0 0 0 1.18l1.37 1.07a.5.5 0 0 1 .15.58l-.65 1.6c-.18.46.1.96.6 1.03l1.7.24c.23.03.4.2.43.42l.24 1.72c.07.48.57.77 1.03.59l1.6-.65a.5.5 0 0 1 .58.15l1.07 1.37c.3.39.88.39 1.18 0l1.06-1.37a.5.5 0 0 1 .59-.15l1.6.65c.45.18.96-.1 1.03-.6l.23-1.7a.5.5 0 0 1 .43-.43l1.72-.24a.75.75 0 0 0 .59-1.03l-.65-1.6a.5.5 0 0 1 .15-.58l1.37-1.07a.75.75 0 0 0 0-1.18l-1.37-1.06a.5.5 0 0 1-.15-.59l.65-1.6a.75.75 0 0 0-.6-1.03l-1.7-.23a.5.5 0 0 1-.44-.43l-.23-1.72a.75.75 0 0 0-1.03-.59l-1.6.65a.5.5 0 0 1-.59-.15L11.1 1.29Z" fill="url(#ic_fluent_add_starburst_20_color__a)"/><path d="M6.5 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3H7a.5.5 0 0 1-.5-.5Z" fill="url(#ic_fluent_add_starburst_20_color__b)" fill-opacity=".95"/><defs><radialGradient id="ic_fluent_add_starburst_20_color__a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-19.58616 -34.63252 33.172 -18.76018 22.15 21.62)"><stop stop-color="#FFC470"/><stop offset=".25" stop-color="#FF835C"/><stop offset=".55" stop-color="#F24A9D"/><stop offset=".81" stop-color="#B339F0"/></radialGradient><linearGradient id="ic_fluent_add_starburst_20_color__b" x1="13.94" y1="16.26" x2="5.55" y2="10.82" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#FFC8D7"/><stop offset=".81" stop-color="#fff"/></linearGradient></defs>\`, { color: true }));
          exports.AddStarburstFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddStarburstFilled', "1em", ["M9.4 1.3a.75.75 0 0 1 1.2 0l1.05 1.36a.5.5 0 0 0 .59.15l1.6-.65c.45-.18.96.1 1.03.6l.23 1.7c.04.23.21.4.43.44l1.72.23c.48.07.77.58.59 1.03l-.65 1.6a.5.5 0 0 0 .15.59l1.37 1.06c.39.3.39.88 0 1.18l-1.37 1.07a.5.5 0 0 0-.15.58l.65 1.6c.18.46-.1.96-.6 1.03l-1.7.24a.5.5 0 0 0-.44.42l-.23 1.72a.75.75 0 0 1-1.03.59l-1.6-.65a.5.5 0 0 0-.59.15l-1.06 1.37a.75.75 0 0 1-1.18 0l-1.07-1.37a.5.5 0 0 0-.58-.15l-1.6.65a.75.75 0 0 1-1.03-.6l-.24-1.7a.5.5 0 0 0-.42-.43l-1.72-.24a.75.75 0 0 1-.59-1.03l.65-1.6a.5.5 0 0 0-.15-.58l-1.37-1.07a.75.75 0 0 1 0-1.18l1.37-1.06a.5.5 0 0 0 .15-.59l-.65-1.6a.75.75 0 0 1 .6-1.03l1.7-.23a.5.5 0 0 0 .43-.43l.24-1.72a.75.75 0 0 1 1.03-.59l1.6.65c.2.09.45.02.58-.15l1.07-1.37ZM6.5 9.5a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3a.5.5 0 0 0-1 0v3h-3Z"]));
          exports.AddStarburstRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddStarburstRegular', "1em", ["M6.5 9.5a.5.5 0 1 0 0 1h3v3a.5.5 0 1 0 1 0v-3h3a.5.5 0 1 0 0-1h-3v-3a.5.5 0 1 0-1 0v3h-3Zm4.1-8.2a.75.75 0 0 0-1.2 0L8.35 2.65a.5.5 0 0 1-.58.15l-1.6-.65a.75.75 0 0 0-1.03.6l-.24 1.7a.5.5 0 0 1-.42.44l-1.72.23a.75.75 0 0 0-.6 1.03l.66 1.6a.5.5 0 0 1-.15.59L1.29 9.4a.75.75 0 0 0 0 1.18l1.37 1.07a.5.5 0 0 1 .15.58l-.65 1.6c-.18.46.1.96.6 1.03l1.7.24c.23.03.4.2.43.42l.24 1.72c.07.48.57.77 1.03.59l1.6-.65a.5.5 0 0 1 .58.15l1.07 1.37c.3.39.88.39 1.18 0l1.06-1.37a.5.5 0 0 1 .59-.15l1.6.65c.45.18.96-.1 1.03-.6l.23-1.7a.5.5 0 0 1 .43-.43l1.72-.24a.75.75 0 0 0 .59-1.03l-.65-1.6a.5.5 0 0 1 .15-.58l1.37-1.07a.75.75 0 0 0 0-1.18l-1.37-1.06a.5.5 0 0 1-.15-.59l.65-1.6a.75.75 0 0 0-.6-1.03l-1.71-.23a.5.5 0 0 1-.43-.43l-.23-1.72a.75.75 0 0 0-1.03-.59l-1.6.65a.5.5 0 0 1-.59-.15L10.6 1.29ZM9.12 3.26 10 2.16l.86 1.11a1.5 1.5 0 0 0 1.75.47l1.31-.53.2 1.4c.08.66.6 1.18 1.27 1.28l1.4.19-.53 1.3a1.5 1.5 0 0 0 .47 1.75l1.11.87-1.11.87a1.5 1.5 0 0 0-.47 1.75l.53 1.3-1.4.2a1.5 1.5 0 0 0-1.28 1.28l-.19 1.4-1.3-.54a1.5 1.5 0 0 0-1.76.47L10 17.84l-.87-1.11a1.5 1.5 0 0 0-1.75-.47l-1.3.53-.2-1.4a1.5 1.5 0 0 0-1.28-1.28l-1.4-.19.54-1.3a1.5 1.5 0 0 0-.47-1.75L2.16 10l1.1-.87a1.5 1.5 0 0 0 .48-1.74L3.2 6.08l1.4-.2a1.5 1.5 0 0 0 1.27-1.27l.2-1.4 1.3.53a1.5 1.5 0 0 0 1.75-.47Z"]));
          exports.AddSubtractCircleFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddSubtractCircleFilled', "1em", ["M11.5 12a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a6.97 6.97 0 0 1-4.58-1.7l9.87-9.88A7 7 0 0 1 10 17ZM5.5 7c0-.28.22-.5.5-.5h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 1 1 0 1H8v1a.5.5 0 0 1-1 0v-1H6a.5.5 0 0 1-.5-.5Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from '../utils/createFluentIcon';
          export declare const AccessTimeFilled: FluentIcon;
          export declare const AccessTimeRegular: FluentIcon;
          export declare const AccessibilityFilled: FluentIcon;
          export declare const AccessibilityRegular: FluentIcon;
          export declare const AccessibilityCheckmarkFilled: FluentIcon;
          export declare const AccessibilityCheckmarkRegular: FluentIcon;
          export declare const AccessibilityErrorFilled: FluentIcon;
          export declare const AccessibilityErrorRegular: FluentIcon;
          export declare const AccessibilityMoreFilled: FluentIcon;
          export declare const AccessibilityMoreRegular: FluentIcon;
          export declare const AccessibilityQuestionMarkFilled: FluentIcon;
          export declare const AccessibilityQuestionMarkRegular: FluentIcon;
          export declare const AddFilled: FluentIcon;
          export declare const AddRegular: FluentIcon;
          export declare const AddCircleColor: FluentIcon;
          export declare const AddCircleFilled: FluentIcon;
          export declare const AddCircleRegular: FluentIcon;
          export declare const AddSquareFilled: FluentIcon;
          export declare const AddSquareRegular: FluentIcon;
          export declare const AddSquareMultipleFilled: FluentIcon;
          export declare const AddSquareMultipleRegular: FluentIcon;
          export declare const AddStarburstColor: FluentIcon;
          export declare const AddStarburstFilled: FluentIcon;
          export declare const AddStarburstRegular: FluentIcon;
          export declare const AddSubtractCircleFilled: FluentIcon;
          export declare const AddSubtractCircleRegular: FluentIcon;
          export declare const AgentsColor: FluentIcon;
          export declare const AgentsFilled: FluentIcon;
          export declare const AgentsRegular: FluentIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid chunk contents in lib sizedIcons', async () => {
      const sizedIconsPath = path.join(__dirname, 'lib', 'sizedIcons');
      const sizedIconFiles = await readdir(sizedIconsPath);
      const sizedIconChunks = sizedIconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

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
          export const AccessTime20Filled = ( /*#__PURE__*/createFluentIcon('AccessTime20Filled', "20", ["M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.99 8.6A.5.5 0 0 1 6 8.4c.02-.07.03-.14.07-.24a2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"]));
          export const AccessTime20Regular = ( /*#__PURE__*/createFluentIcon('AccessTime20Regular', "20", ["M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"]));
          export const AccessTime24Filled = ( /*#__PURE__*/createFluentIcon('AccessTime24Filled', "24", ["M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0ZM7.5 8.74A2.3 2.3 0 0 1 9.25 8c1.15 0 1.9.8 2.15 1.66.26.85.1 1.9-.62 2.62a8.1 8.1 0 0 1-.79.67l-.04.03c-.28.22-.53.41-.75.63a2.3 2.3 0 0 0-.58.89h2.13a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.25.52-2.08 1.14-2.7.3-.3.62-.55.9-.76.28-.22.5-.4.68-.57.27-.27.37-.72.25-1.13-.12-.38-.37-.59-.72-.59s-.53.14-.64.25a.84.84 0 0 0-.15.23.75.75 0 0 1-1.43-.46l.04-.1.08-.17c.07-.14.18-.32.35-.5ZM13.25 8c.41 0 .75.34.75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5c0-.41.34-.75.75-.75Z"]));
          export const AccessTime24Regular = ( /*#__PURE__*/createFluentIcon('AccessTime24Regular', "24", ["M7.5 8.74A2.3 2.3 0 0 1 9.25 8c1.15 0 1.9.8 2.15 1.66.26.85.1 1.9-.62 2.62a8.1 8.1 0 0 1-.79.67l-.04.03c-.28.22-.53.41-.75.63a2.3 2.3 0 0 0-.58.89h2.13a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.25.52-2.08 1.14-2.7.3-.3.62-.55.9-.76.28-.22.5-.4.68-.57.27-.27.37-.72.25-1.13-.12-.38-.37-.59-.72-.59s-.53.14-.64.25a.84.84 0 0 0-.15.23.75.75 0 0 1-1.43-.46l.04-.1.08-.17c.07-.14.18-.32.35-.5ZM13.25 8c.41 0 .75.34.75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5c0-.41.34-.75.75-.75ZM22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"]));
          export const Accessibility16Filled = ( /*#__PURE__*/createFluentIcon('Accessibility16Filled', "16", ["M8 4.5A1.75 1.75 0 1 0 8 1a1.75 1.75 0 0 0 0 3.5ZM4.2 3.12a1.6 1.6 0 0 0-2.08.87c-.33.81.06 1.74.87 2.07l1.7.68a.5.5 0 0 1 .31.47v1.92a.5.5 0 0 1-.06.23l-1.75 3.3a1.6 1.6 0 1 0 2.8 1.5l1.79-3.35c.1-.18.35-.18.44 0L10 14.16a1.6 1.6 0 1 0 2.81-1.5l-1.75-3.3a.5.5 0 0 1-.06-.23V7.2c0-.2.12-.4.31-.47l1.7-.68c.81-.33 1.2-1.26.87-2.07a1.6 1.6 0 0 0-2.08-.87l-.78.31c-.26.1-.44.3-.54.52a2.75 2.75 0 0 1-4.96 0c-.1-.22-.28-.42-.54-.52l-.78-.31Z"]));
          export const Accessibility16Regular = ( /*#__PURE__*/createFluentIcon('Accessibility16Regular', "16", ["M6.75 3.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM8 1a2.25 2.25 0 0 0-2.19 2.77L4.2 3.12a1.6 1.6 0 0 0-2.08.87c-.33.81.06 1.74.87 2.07l2.01.8v2.4l-1.81 3.4a1.6 1.6 0 1 0 2.8 1.5L8 10.39l2 3.77a1.6 1.6 0 0 0 2.81-1.5L11 9.26v-2.4l2-.8c.82-.33 1.21-1.26.88-2.07a1.6 1.6 0 0 0-2.08-.87l-1.61.65A2.26 2.26 0 0 0 8 1ZM3.05 4.37a.6.6 0 0 1 .77-.33l3.43 1.39a2 2 0 0 0 1.5 0l3.43-1.39a.6.6 0 0 1 .77.33c.13.3-.02.64-.32.76l-2 .81a1 1 0 0 0-.63.93v2.38a1 1 0 0 0 .12.47l1.81 3.41a.6.6 0 0 1-1.04.56l-2-3.77a1 1 0 0 0-1.77 0l-2 3.77a.6.6 0 1 1-1.05-.56l1.81-3.4A1 1 0 0 0 6 9.24V6.87a1 1 0 0 0-.63-.93l-2-.8a.58.58 0 0 1-.32-.77Z"]));
          export const Accessibility20Filled = ( /*#__PURE__*/createFluentIcon('Accessibility20Filled', "20", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l1.4-3.46c.08-.21.38-.21.46 0l1.4 3.46a1.75 1.75 0 0 0 3.24-1.32l-1.83-4.54a.5.5 0 0 1-.04-.19V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57Z"]));
          export const Accessibility20Regular = ( /*#__PURE__*/createFluentIcon('Accessibility20Regular', "20", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 0 0 3.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2ZM4.07 5.44a.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.37l1.87 4.64a.75.75 0 0 1-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99Z"]));
          export const Accessibility24Filled = ( /*#__PURE__*/createFluentIcon('Accessibility24Filled', "24", ["M12 6.5A2.25 2.25 0 1 0 12 2a2.25 2.25 0 0 0 0 4.5ZM6.15 4.18a2.27 2.27 0 0 0-2.96 1.18 2.24 2.24 0 0 0 1.18 2.96L7.39 9.6a1 1 0 0 1 .61.92v3.04l-1.88 5.46a2.25 2.25 0 1 0 4.26 1.46l1.38-4.02c.08-.23.4-.23.48 0l1.38 4.02a2.25 2.25 0 1 0 4.26-1.46L16 13.56v-3.04a1 1 0 0 1 .61-.92l3.02-1.28a2.24 2.24 0 0 0 1.18-2.96 2.27 2.27 0 0 0-2.96-1.18l-1.6.68c-.35.14-.58.42-.7.73a3.8 3.8 0 0 1-7.1 0c-.12-.3-.35-.59-.7-.73l-1.6-.68Z"]));
          export const Accessibility24Regular = ( /*#__PURE__*/createFluentIcon('Accessibility24Regular', "24", ["M10.5 5c0 .64.4 1.19.97 1.4.35.09.71.09 1.06 0A1.5 1.5 0 1 0 10.5 5Zm-1.47.4a3 3 0 1 1 5.95 0l2.87-1.22a2.27 2.27 0 0 1 2.96 1.18 2.24 2.24 0 0 1-1.18 2.96L16 9.86v3.71l1.88 5.45a2.25 2.25 0 1 1-4.26 1.46L12 15.78l-1.62 4.7a2.25 2.25 0 1 1-4.26-1.46L8 13.56v-3.7L4.37 8.32a2.24 2.24 0 0 1-1.18-2.96 2.27 2.27 0 0 1 2.96-1.18L9.03 5.4Zm2 2.44c-.17-.05-.34-.1-.5-.17L5.56 5.56a.77.77 0 0 0-1 .4c-.16.38.02.81.4.98l3.78 1.6c.46.2.76.65.76 1.15v3.91c0 .14-.02.28-.07.4l-1.89 5.5a.75.75 0 1 0 1.42.5l2.1-6.13a.99.99 0 0 1 1.87 0l2.11 6.12a.75.75 0 1 0 1.42-.48l-1.89-5.49a1.25 1.25 0 0 1-.07-.4V9.69c0-.5.3-.95.76-1.15l3.78-1.6c.39-.17.56-.6.4-.98a.77.77 0 0 0-1-.4l-4.97 2.1c-.16.08-.33.13-.5.18a3 3 0 0 1-1.95 0Z"]));
          export const Accessibility28Filled = ( /*#__PURE__*/createFluentIcon('Accessibility28Filled', "28", ["M14 7.5A2.75 2.75 0 1 0 14 2a2.75 2.75 0 0 0 0 5.5ZM6.24 5.12a2.48 2.48 0 1 0-1.53 4.71l4.6 1.5a1 1 0 0 1 .69.95v3.1a1 1 0 0 1-.07.37L7.18 22.6c-.51 1.27.1 2.7 1.36 3.22 1.26.51 2.7-.1 3.21-1.36l1.77-4.41a.5.5 0 0 1 .93 0l1.78 4.4a2.48 2.48 0 1 0 4.59-1.86l-2.75-6.8a1 1 0 0 1-.07-.37v-3.14a1 1 0 0 1 .7-.95l4.59-1.5a2.48 2.48 0 0 0-1.53-4.7l-3.11 1c-.46.15-.8.47-1.01.82a4.25 4.25 0 0 1-7.28 0 1.87 1.87 0 0 0-1-.82l-3.12-1Z"]));
          export const Accessibility28Regular = ( /*#__PURE__*/createFluentIcon('Accessibility28Regular', "28", ["M12 5.5a2 2 0 0 0 1.5 1.93c.33.06.67.06 1 0A2 2 0 1 0 12 5.5Zm-1.34 1.06a3.5 3.5 0 1 1 6.68 0l4.42-1.44a2.48 2.48 0 1 1 1.53 4.71L18 11.55v3.82c0 .16.03.32.1.47l2.72 6.75a2.48 2.48 0 0 1-4.6 1.86l-2.24-5.55-2.23 5.56a2.46 2.46 0 0 1-3.2 1.36 2.48 2.48 0 0 1-1.37-3.22l2.73-6.8c.06-.16.09-.31.09-.47v-3.78L4.71 9.83a2.48 2.48 0 0 1 1.53-4.7l4.42 1.43Zm2.52 2.34c-.22-.03-.43-.09-.65-.16l-6.75-2.2a.98.98 0 0 0-.6 1.87l5.46 1.77c.51.17.86.65.86 1.19v3.96c0 .35-.07.7-.2 1.02l-2.73 6.81c-.2.5.04 1.07.54 1.27a.96.96 0 0 0 1.25-.53l2.46-6.14a1.25 1.25 0 0 1 2.32 0l2.48 6.13a.98.98 0 1 0 1.8-.73L16.7 16.4c-.13-.32-.2-.67-.2-1.03v-4c0-.54.35-1.02.86-1.19l5.46-1.77a.98.98 0 1 0-.6-1.86l-6.75 2.2c-.22.06-.43.12-.65.15a3.5 3.5 0 0 1-1.64 0Z"]));
          export const Accessibility32Filled = ( /*#__PURE__*/createFluentIcon('Accessibility32Filled', "32", ["M16 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM7.07 6.17a3.07 3.07 0 1 0-2 5.8l5.6 1.93c.2.07.33.26.33.48v3.51a.5.5 0 0 1-.05.22L7.3 25.58a3.07 3.07 0 1 0 5.52 2.7l2.72-5.58a.5.5 0 0 1 .9 0l2.71 5.57a3.07 3.07 0 1 0 5.53-2.69l-3.64-7.46a.5.5 0 0 1-.05-.22v-3.52c0-.22.14-.4.34-.48l5.59-1.92a3.07 3.07 0 0 0-2-5.81l-2.98 1.02c-.52.18-.9.55-1.14.97a5.5 5.5 0 0 1-9.62 0 2.1 2.1 0 0 0-1.14-.97L7.07 6.17Z"]));
          export const Accessibility32Regular = ( /*#__PURE__*/createFluentIcon('Accessibility32Regular', "32", ["M13.5 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM16 2a4.5 4.5 0 0 0-4.32 5.75l-4.6-1.58a3.07 3.07 0 0 0-2 5.8L11 14.03v3.76a1 1 0 0 1-.1.44l-3.6 7.36a3.07 3.07 0 0 0 5.53 2.7l3.17-6.5 3.16 6.5a3.07 3.07 0 1 0 5.53-2.7l-3.59-7.35a1 1 0 0 1-.1-.44v-3.77l5.93-2.04a3.07 3.07 0 0 0-2-5.81l-4.6 1.58A4.5 4.5 0 0 0 16 2ZM5.06 8.72c.2-.56.8-.85 1.36-.66l7.63 2.62a6 6 0 0 0 3.9 0l7.63-2.62a1.07 1.07 0 0 1 .7 2.03L20 12.24c-.6.21-1.01.78-1.01 1.42v4.13c0 .45.1.9.3 1.31l3.6 7.36a1.07 1.07 0 1 1-1.94.94l-3.16-6.5a2 2 0 0 0-3.6 0l-3.17 6.5a1.07 1.07 0 1 1-1.93-.94l3.6-7.37a3 3 0 0 0 .3-1.31v-4.12c0-.64-.4-1.2-1.01-1.42L5.72 10.1c-.56-.2-.85-.8-.66-1.37Z"]));
          export const Accessibility48Filled = ( /*#__PURE__*/createFluentIcon('Accessibility48Filled', "48", ["M24 14.5A5.25 5.25 0 1 0 24 4a5.25 5.25 0 0 0 0 10.5Zm-12.3-4.24a4.25 4.25 0 0 0-2.9 7.98l7.87 2.87c.2.07.33.26.33.47v4.44c0 .35-.07.7-.2 1.03l-4.49 11.11a4.25 4.25 0 1 0 7.88 3.18l3.35-8.27a.5.5 0 0 1 .92 0l3.35 8.27a4.25 4.25 0 0 0 7.88-3.18l-4.49-11.1c-.13-.33-.2-.68-.2-1.03v-4.45c0-.21.14-.4.33-.47l7.87-2.87a4.25 4.25 0 1 0-2.9-7.98l-3.81 1.38c-.82.3-1.43.9-1.81 1.55a7.75 7.75 0 0 1-13.35 0 3.52 3.52 0 0 0-1.81-1.55l-3.81-1.38Z"]));
          export const Accessibility48Regular = ( /*#__PURE__*/createFluentIcon('Accessibility48Regular', "48", ["M20 10.5a4 4 0 0 0 2.23 3.59l.49.17c.83.3 1.74.3 2.57 0l.49-.17A4 4 0 1 0 20 10.5Zm-2.2 1.98a6.5 6.5 0 1 1 12.4 0l6.1-2.22a4.25 4.25 0 0 1 2.9 7.99L31 21.23v4.8c0 .35.07.7.2 1.03l4.5 11.1a4.25 4.25 0 1 1-7.9 3.18L24 31.92l-3.8 9.42a4.25 4.25 0 0 1-7.89-3.18l4.5-11.11c.12-.33.2-.68.2-1.03v-4.79l-8.2-2.98a4.25 4.25 0 1 1 2.9-8l6.1 2.23Zm3.45 3.91-10.4-3.78a1.75 1.75 0 0 0-1.2 3.29l8.37 3.04a2.25 2.25 0 0 1 1.48 2.11v4.97c0 .67-.13 1.34-.38 1.96L14.63 39.1a1.75 1.75 0 1 0 3.25 1.3l4.03-9.99a2.25 2.25 0 0 1 4.18 0l4.04 10a1.75 1.75 0 0 0 3.24-1.31L28.9 28a5.25 5.25 0 0 1-.39-1.97v-4.98c0-.94.6-1.79 1.48-2.11l8.37-3.04a1.75 1.75 0 1 0-1.2-3.3l-10.4 3.8a6.48 6.48 0 0 1-5.5 0Z"]));
          export const AccessibilityCheckmark20Filled = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark20Filled', "20", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          export const AccessibilityCheckmark20Regular = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark20Regular', "20", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          export const AccessibilityCheckmark24Filled = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark24Filled', "24", ["M12 6.5A2.25 2.25 0 1 0 12 2a2.25 2.25 0 0 0 0 4.5ZM6.15 4.18a2.27 2.27 0 0 0-2.96 1.18 2.24 2.24 0 0 0 1.18 2.96L7.39 9.6a1 1 0 0 1 .61.92v3.04l-1.88 5.46a2.25 2.25 0 1 0 4.26 1.46l.14-.42A6.5 6.5 0 0 1 16 11.02v-.5a1 1 0 0 1 .61-.92l3.02-1.28a2.24 2.24 0 0 0 1.18-2.96 2.27 2.27 0 0 0-2.96-1.18l-1.6.68c-.35.14-.58.42-.7.73a3.8 3.8 0 0 1-7.1 0c-.12-.3-.35-.59-.7-.73l-1.6-.68ZM22 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z"]));
          export const AccessibilityCheckmark24Regular = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark24Regular', "24", ["M11.47 6.4a1.5 1.5 0 1 1 1.06 0c-.35.09-.71.09-1.06 0ZM9 5c0 .14 0 .27.03.4L6.15 4.18a2.27 2.27 0 0 0-2.96 1.18 2.24 2.24 0 0 0 1.18 2.96L8 9.86v3.7l-1.88 5.46a2.25 2.25 0 1 0 4.26 1.46l.14-.42a6.48 6.48 0 0 1-.5-3.17L8.97 20a.75.75 0 0 1-1.42-.49l1.9-5.5c.04-.12.06-.26.06-.4V9.7c0-.5-.3-.96-.76-1.16l-3.78-1.6a.74.74 0 0 1-.4-.98.77.77 0 0 1 1-.4l4.98 2.1c.15.08.32.13.48.18a3 3 0 0 0 1.96 0c.16-.05.33-.1.49-.17l4.97-2.11a.77.77 0 0 1 1 .4.74.74 0 0 1-.4.98l-3.78 1.6c-.46.2-.76.65-.76 1.15v1.62c.48-.15.98-.25 1.5-.3V9.87l3.63-1.54a2.24 2.24 0 0 0 1.18-2.96 2.27 2.27 0 0 0-2.96-1.18L14.97 5.4A3.02 3.02 0 0 0 12 2a3 3 0 0 0-3 3Zm13 12.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z"]));
          export const AccessibilityCheckmark28Filled = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark28Filled', "28", ["M14 7.5A2.75 2.75 0 1 0 14 2a2.75 2.75 0 0 0 0 5.5ZM6.24 5.12a2.48 2.48 0 1 0-1.53 4.71l4.6 1.5a1 1 0 0 1 .69.95v3.1a1 1 0 0 1-.07.37L7.18 22.6c-.51 1.27.1 2.7 1.36 3.22 1.26.51 2.7-.1 3.21-1.36l.63-1.58A7.5 7.5 0 0 1 18 13.15v-.87a1 1 0 0 1 .7-.95l4.59-1.5a2.48 2.48 0 0 0-1.53-4.7l-3.11 1c-.46.15-.8.47-1.01.82a4.25 4.25 0 0 1-7.28 0 1.87 1.87 0 0 0-1-.82l-3.12-1ZM26 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2.65-2.85a.5.5 0 0 0-.7 0L18 22.29l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 0 0 0-.7Z"]));
          export const AccessibilityCheckmark28Regular = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark28Regular', "28", ["M12 5.5a2 2 0 0 0 1.5 1.93c.33.06.67.06 1 0A2 2 0 1 0 12 5.5Zm-1.34 1.06a3.5 3.5 0 1 1 6.68 0l4.42-1.44a2.48 2.48 0 1 1 1.53 4.71L18 11.55v1.6c-.52.1-1.02.27-1.5.47v-2.25c0-.54.35-1.02.86-1.19l5.46-1.77a.98.98 0 0 0-.6-1.86l-6.75 2.2c-.22.06-.43.12-.65.15a3.5 3.5 0 0 1-1.64 0c-.22-.03-.43-.09-.65-.16l-6.75-2.2a.98.98 0 0 0-.6 1.87l5.46 1.77c.51.17.86.65.86 1.19v3.96c0 .35-.07.7-.2 1.02l-2.73 6.81c-.2.5.04 1.07.54 1.27a.96.96 0 0 0 1.25-.53l1.68-4.2a7.59 7.59 0 0 0 .34 3.18l-.63 1.58a2.46 2.46 0 0 1-3.2 1.36 2.48 2.48 0 0 1-1.37-3.22l2.73-6.8c.06-.16.09-.31.09-.47v-3.78L4.71 9.83a2.48 2.48 0 0 1 1.53-4.7l4.42 1.43ZM26 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2.65-2.85a.5.5 0 0 0-.7 0L18 22.29l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 0 0 0-.7Z"]));
          export const AccessibilityCheckmark32Filled = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark32Filled', "32", ["M16 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM7.07 6.17a3.07 3.07 0 1 0-2 5.8l5.6 1.93c.2.07.33.26.33.48v3.51a.5.5 0 0 1-.05.22L7.3 25.58a3.07 3.07 0 1 0 5.52 2.7l1.46-3a9.02 9.02 0 0 1 6.74-11.06.5.5 0 0 1 .3-.32l5.6-1.92a3.07 3.07 0 0 0-2-5.81l-2.98 1.02c-.52.18-.9.55-1.14.97a5.5 5.5 0 0 1-9.62 0 2.1 2.1 0 0 0-1.14-.97L7.07 6.17ZM23 15.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5.25-5.25c.3-.3.3-.77 0-1.06Z"]));
          export const AccessibilityCheckmark32Light = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark32Light', "32", ["m6.53 7.09 6.56 1.66A3.99 3.99 0 0 1 16 2a4 4 0 0 1 2.9 6.75l6.57-1.66a2.83 2.83 0 1 1 1.32 5.51L21 13.9v.32c-.34.08-.67.18-1 .3V13.5a.5.5 0 0 1 .4-.49l6.17-1.38a1.83 1.83 0 1 0-.85-3.57l-7.87 1.99c-1.21.3-2.49.3-3.7 0l-7.87-2a1.83 1.83 0 1 0-.85 3.57l6.18 1.4a.5.5 0 0 1 .4.48V18a.5.5 0 0 1-.06.22l-3.9 7.8a2.07 2.07 0 1 0 3.7 1.85l2.26-4.5c.02.6.1 1.18.24 1.75l-1.6 3.2a3.07 3.07 0 1 1-5.5-2.75L11 17.88V13.9l-5.79-1.3a2.83 2.83 0 1 1 1.32-5.51ZM16 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 6.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5.25-5.25c.3-.3.3-.77 0-1.06Z"]));
          export const AccessibilityCheckmark32Regular = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark32Regular', "32", ["M13.5 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM16 2a4.5 4.5 0 0 0-4.32 5.75l-4.6-1.58a3.07 3.07 0 0 0-2 5.8L11 14.03v3.76a1 1 0 0 1-.1.44l-3.6 7.36a3.07 3.07 0 0 0 5.53 2.7l1.46-3a9.02 9.02 0 0 1 0-4.53l-.09.15-3.17 6.5a1.07 1.07 0 1 1-1.92-.94l3.59-7.37a3 3 0 0 0 .3-1.31v-4.12c0-.64-.4-1.2-1.01-1.42L5.72 10.1a1.07 1.07 0 1 1 .7-2.03l7.63 2.62a6 6 0 0 0 3.9 0l7.63-2.62a1.07 1.07 0 1 1 .7 2.03L20 12.24c-.6.21-1.01.78-1.01 1.42v1.28c.63-.32 1.3-.56 2-.72v-.2l5.93-2.04a3.07 3.07 0 0 0-2-5.81l-4.6 1.58A4.5 4.5 0 0 0 16 2Zm7 13.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5.25-5.25c.3-.3.3-.77 0-1.06Z"]));
          export const AccessibilityCheckmark48Filled = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark48Filled', "48", ["M24 14.5A5.25 5.25 0 1 0 24 4a5.25 5.25 0 0 0 0 10.5Zm-12.29-4.24a4.25 4.25 0 0 0-2.9 7.98l7.86 2.87c.2.07.33.26.33.47v4.44c0 .35-.06.7-.2 1.03l-4.49 11.11a4.25 4.25 0 1 0 7.88 3.18l1.23-3.04A13.02 13.02 0 0 1 31 22.35v-.77c0-.21.14-.4.33-.47l7.88-2.87a4.25 4.25 0 1 0-2.91-7.98l-3.81 1.38c-.82.3-1.43.9-1.8 1.55a7.75 7.75 0 0 1-13.36 0 3.52 3.52 0 0 0-1.8-1.55l-3.82-1.38ZM45 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-4.3-4.7a1 1 0 0 0-1.4 0L32 37.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8a1 1 0 0 0 0-1.42Z"]));
          export const AccessibilityCheckmark48Regular = ( /*#__PURE__*/createFluentIcon('AccessibilityCheckmark48Regular', "48", ["M20 10.5a4 4 0 0 0 2.23 3.59l.5.17c.82.3 1.73.3 2.56 0l.49-.17A4 4 0 1 0 20 10.5Zm-2.2 1.98a6.5 6.5 0 1 1 12.4 0l6.1-2.22a4.25 4.25 0 0 1 2.9 7.99L31 21.23v1.12c-.87.2-1.7.5-2.5.87v-2.17c0-.94.6-1.79 1.49-2.11l8.36-3.04a1.75 1.75 0 1 0-1.2-3.3l-10.4 3.8a6.48 6.48 0 0 1-5.5 0l-10.4-3.8a1.75 1.75 0 0 0-1.2 3.3l8.37 3.04a2.25 2.25 0 0 1 1.48 2.11v4.97c0 .67-.13 1.34-.38 1.96L14.63 39.1a1.75 1.75 0 1 0 3.25 1.3l3.6-8.9a13.01 13.01 0 0 0-.06 6.8l-1.23 3.04a4.25 4.25 0 0 1-7.88-3.18l4.5-11.11c.13-.33.2-.68.2-1.03v-4.79l-8.2-2.98a4.25 4.25 0 1 1 2.9-8l6.1 2.23ZM45 35a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-4.3-4.7a1 1 0 0 0-1.4 0L32 37.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8a1 1 0 0 0 0-1.42Z"]));
          export const AccessibilityError20Filled = ( /*#__PURE__*/createFluentIcon('AccessibilityError20Filled', "20", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from '../utils/createFluentIcon';
          export declare const AccessTime20Filled: FluentIcon;
          export declare const AccessTime20Regular: FluentIcon;
          export declare const AccessTime24Filled: FluentIcon;
          export declare const AccessTime24Regular: FluentIcon;
          export declare const Accessibility16Filled: FluentIcon;
          export declare const Accessibility16Regular: FluentIcon;
          export declare const Accessibility20Filled: FluentIcon;
          export declare const Accessibility20Regular: FluentIcon;
          export declare const Accessibility24Filled: FluentIcon;
          export declare const Accessibility24Regular: FluentIcon;
          export declare const Accessibility28Filled: FluentIcon;
          export declare const Accessibility28Regular: FluentIcon;
          export declare const Accessibility32Filled: FluentIcon;
          export declare const Accessibility32Regular: FluentIcon;
          export declare const Accessibility48Filled: FluentIcon;
          export declare const Accessibility48Regular: FluentIcon;
          export declare const AccessibilityCheckmark20Filled: FluentIcon;
          export declare const AccessibilityCheckmark20Regular: FluentIcon;
          export declare const AccessibilityCheckmark24Filled: FluentIcon;
          export declare const AccessibilityCheckmark24Regular: FluentIcon;
          export declare const AccessibilityCheckmark28Filled: FluentIcon;
          export declare const AccessibilityCheckmark28Regular: FluentIcon;
          export declare const AccessibilityCheckmark32Filled: FluentIcon;
          export declare const AccessibilityCheckmark32Light: FluentIcon;
          export declare const AccessibilityCheckmark32Regular: FluentIcon;
          export declare const AccessibilityCheckmark48Filled: FluentIcon;
          export declare const AccessibilityCheckmark48Regular: FluentIcon;
          export declare const AccessibilityError20Filled: FluentIcon;
          export declare const AccessibilityError20Regular: FluentIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid chunk contents in lib-cjs sizedIcons', async () => {
      const sizedIconsPath = path.join(__dirname, 'lib-cjs', 'sizedIcons');
      const sizedIconFiles = await readdir(sizedIconsPath);
      const sizedIconChunks = sizedIconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

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
          "... (20 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.AccessTime20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTime20Filled', "20", ["M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.99 8.6A.5.5 0 0 1 6 8.4c.02-.07.03-.14.07-.24a2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"]));
          exports.AccessTime20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTime20Regular', "20", ["M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"]));
          exports.AccessTime24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTime24Filled', "24", ["M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0ZM7.5 8.74A2.3 2.3 0 0 1 9.25 8c1.15 0 1.9.8 2.15 1.66.26.85.1 1.9-.62 2.62a8.1 8.1 0 0 1-.79.67l-.04.03c-.28.22-.53.41-.75.63a2.3 2.3 0 0 0-.58.89h2.13a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.25.52-2.08 1.14-2.7.3-.3.62-.55.9-.76.28-.22.5-.4.68-.57.27-.27.37-.72.25-1.13-.12-.38-.37-.59-.72-.59s-.53.14-.64.25a.84.84 0 0 0-.15.23.75.75 0 0 1-1.43-.46l.04-.1.08-.17c.07-.14.18-.32.35-.5ZM13.25 8c.41 0 .75.34.75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5c0-.41.34-.75.75-.75Z"]));
          exports.AccessTime24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTime24Regular', "24", ["M7.5 8.74A2.3 2.3 0 0 1 9.25 8c1.15 0 1.9.8 2.15 1.66.26.85.1 1.9-.62 2.62a8.1 8.1 0 0 1-.79.67l-.04.03c-.28.22-.53.41-.75.63a2.3 2.3 0 0 0-.58.89h2.13a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.25.52-2.08 1.14-2.7.3-.3.62-.55.9-.76.28-.22.5-.4.68-.57.27-.27.37-.72.25-1.13-.12-.38-.37-.59-.72-.59s-.53.14-.64.25a.84.84 0 0 0-.15.23.75.75 0 0 1-1.43-.46l.04-.1.08-.17c.07-.14.18-.32.35-.5ZM13.25 8c.41 0 .75.34.75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5c0-.41.34-.75.75-.75ZM22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"]));
          exports.Accessibility16Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility16Filled', "16", ["M8 4.5A1.75 1.75 0 1 0 8 1a1.75 1.75 0 0 0 0 3.5ZM4.2 3.12a1.6 1.6 0 0 0-2.08.87c-.33.81.06 1.74.87 2.07l1.7.68a.5.5 0 0 1 .31.47v1.92a.5.5 0 0 1-.06.23l-1.75 3.3a1.6 1.6 0 1 0 2.8 1.5l1.79-3.35c.1-.18.35-.18.44 0L10 14.16a1.6 1.6 0 1 0 2.81-1.5l-1.75-3.3a.5.5 0 0 1-.06-.23V7.2c0-.2.12-.4.31-.47l1.7-.68c.81-.33 1.2-1.26.87-2.07a1.6 1.6 0 0 0-2.08-.87l-.78.31c-.26.1-.44.3-.54.52a2.75 2.75 0 0 1-4.96 0c-.1-.22-.28-.42-.54-.52l-.78-.31Z"]));
          exports.Accessibility16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility16Regular', "16", ["M6.75 3.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM8 1a2.25 2.25 0 0 0-2.19 2.77L4.2 3.12a1.6 1.6 0 0 0-2.08.87c-.33.81.06 1.74.87 2.07l2.01.8v2.4l-1.81 3.4a1.6 1.6 0 1 0 2.8 1.5L8 10.39l2 3.77a1.6 1.6 0 0 0 2.81-1.5L11 9.26v-2.4l2-.8c.82-.33 1.21-1.26.88-2.07a1.6 1.6 0 0 0-2.08-.87l-1.61.65A2.26 2.26 0 0 0 8 1ZM3.05 4.37a.6.6 0 0 1 .77-.33l3.43 1.39a2 2 0 0 0 1.5 0l3.43-1.39a.6.6 0 0 1 .77.33c.13.3-.02.64-.32.76l-2 .81a1 1 0 0 0-.63.93v2.38a1 1 0 0 0 .12.47l1.81 3.41a.6.6 0 0 1-1.04.56l-2-3.77a1 1 0 0 0-1.77 0l-2 3.77a.6.6 0 1 1-1.05-.56l1.81-3.4A1 1 0 0 0 6 9.24V6.87a1 1 0 0 0-.63-.93l-2-.8a.58.58 0 0 1-.32-.77Z"]));
          exports.Accessibility20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility20Filled', "20", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l1.4-3.46c.08-.21.38-.21.46 0l1.4 3.46a1.75 1.75 0 0 0 3.24-1.32l-1.83-4.54a.5.5 0 0 1-.04-.19V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57Z"]));
          exports.Accessibility20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility20Regular', "20", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 0 0 3.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2ZM4.07 5.44a.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.37l1.87 4.64a.75.75 0 0 1-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99Z"]));
          exports.Accessibility24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility24Filled', "24", ["M12 6.5A2.25 2.25 0 1 0 12 2a2.25 2.25 0 0 0 0 4.5ZM6.15 4.18a2.27 2.27 0 0 0-2.96 1.18 2.24 2.24 0 0 0 1.18 2.96L7.39 9.6a1 1 0 0 1 .61.92v3.04l-1.88 5.46a2.25 2.25 0 1 0 4.26 1.46l1.38-4.02c.08-.23.4-.23.48 0l1.38 4.02a2.25 2.25 0 1 0 4.26-1.46L16 13.56v-3.04a1 1 0 0 1 .61-.92l3.02-1.28a2.24 2.24 0 0 0 1.18-2.96 2.27 2.27 0 0 0-2.96-1.18l-1.6.68c-.35.14-.58.42-.7.73a3.8 3.8 0 0 1-7.1 0c-.12-.3-.35-.59-.7-.73l-1.6-.68Z"]));
          exports.Accessibility24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility24Regular', "24", ["M10.5 5c0 .64.4 1.19.97 1.4.35.09.71.09 1.06 0A1.5 1.5 0 1 0 10.5 5Zm-1.47.4a3 3 0 1 1 5.95 0l2.87-1.22a2.27 2.27 0 0 1 2.96 1.18 2.24 2.24 0 0 1-1.18 2.96L16 9.86v3.71l1.88 5.45a2.25 2.25 0 1 1-4.26 1.46L12 15.78l-1.62 4.7a2.25 2.25 0 1 1-4.26-1.46L8 13.56v-3.7L4.37 8.32a2.24 2.24 0 0 1-1.18-2.96 2.27 2.27 0 0 1 2.96-1.18L9.03 5.4Zm2 2.44c-.17-.05-.34-.1-.5-.17L5.56 5.56a.77.77 0 0 0-1 .4c-.16.38.02.81.4.98l3.78 1.6c.46.2.76.65.76 1.15v3.91c0 .14-.02.28-.07.4l-1.89 5.5a.75.75 0 1 0 1.42.5l2.1-6.13a.99.99 0 0 1 1.87 0l2.11 6.12a.75.75 0 1 0 1.42-.48l-1.89-5.49a1.25 1.25 0 0 1-.07-.4V9.69c0-.5.3-.95.76-1.15l3.78-1.6c.39-.17.56-.6.4-.98a.77.77 0 0 0-1-.4l-4.97 2.1c-.16.08-.33.13-.5.18a3 3 0 0 1-1.95 0Z"]));
          exports.Accessibility28Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility28Filled', "28", ["M14 7.5A2.75 2.75 0 1 0 14 2a2.75 2.75 0 0 0 0 5.5ZM6.24 5.12a2.48 2.48 0 1 0-1.53 4.71l4.6 1.5a1 1 0 0 1 .69.95v3.1a1 1 0 0 1-.07.37L7.18 22.6c-.51 1.27.1 2.7 1.36 3.22 1.26.51 2.7-.1 3.21-1.36l1.77-4.41a.5.5 0 0 1 .93 0l1.78 4.4a2.48 2.48 0 1 0 4.59-1.86l-2.75-6.8a1 1 0 0 1-.07-.37v-3.14a1 1 0 0 1 .7-.95l4.59-1.5a2.48 2.48 0 0 0-1.53-4.7l-3.11 1c-.46.15-.8.47-1.01.82a4.25 4.25 0 0 1-7.28 0 1.87 1.87 0 0 0-1-.82l-3.12-1Z"]));
          exports.Accessibility28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility28Regular', "28", ["M12 5.5a2 2 0 0 0 1.5 1.93c.33.06.67.06 1 0A2 2 0 1 0 12 5.5Zm-1.34 1.06a3.5 3.5 0 1 1 6.68 0l4.42-1.44a2.48 2.48 0 1 1 1.53 4.71L18 11.55v3.82c0 .16.03.32.1.47l2.72 6.75a2.48 2.48 0 0 1-4.6 1.86l-2.24-5.55-2.23 5.56a2.46 2.46 0 0 1-3.2 1.36 2.48 2.48 0 0 1-1.37-3.22l2.73-6.8c.06-.16.09-.31.09-.47v-3.78L4.71 9.83a2.48 2.48 0 0 1 1.53-4.7l4.42 1.43Zm2.52 2.34c-.22-.03-.43-.09-.65-.16l-6.75-2.2a.98.98 0 0 0-.6 1.87l5.46 1.77c.51.17.86.65.86 1.19v3.96c0 .35-.07.7-.2 1.02l-2.73 6.81c-.2.5.04 1.07.54 1.27a.96.96 0 0 0 1.25-.53l2.46-6.14a1.25 1.25 0 0 1 2.32 0l2.48 6.13a.98.98 0 1 0 1.8-.73L16.7 16.4c-.13-.32-.2-.67-.2-1.03v-4c0-.54.35-1.02.86-1.19l5.46-1.77a.98.98 0 1 0-.6-1.86l-6.75 2.2c-.22.06-.43.12-.65.15a3.5 3.5 0 0 1-1.64 0Z"]));
          exports.Accessibility32Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility32Filled', "32", ["M16 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM7.07 6.17a3.07 3.07 0 1 0-2 5.8l5.6 1.93c.2.07.33.26.33.48v3.51a.5.5 0 0 1-.05.22L7.3 25.58a3.07 3.07 0 1 0 5.52 2.7l2.72-5.58a.5.5 0 0 1 .9 0l2.71 5.57a3.07 3.07 0 1 0 5.53-2.69l-3.64-7.46a.5.5 0 0 1-.05-.22v-3.52c0-.22.14-.4.34-.48l5.59-1.92a3.07 3.07 0 0 0-2-5.81l-2.98 1.02c-.52.18-.9.55-1.14.97a5.5 5.5 0 0 1-9.62 0 2.1 2.1 0 0 0-1.14-.97L7.07 6.17Z"]));
          exports.Accessibility32Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility32Regular', "32", ["M13.5 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM16 2a4.5 4.5 0 0 0-4.32 5.75l-4.6-1.58a3.07 3.07 0 0 0-2 5.8L11 14.03v3.76a1 1 0 0 1-.1.44l-3.6 7.36a3.07 3.07 0 0 0 5.53 2.7l3.17-6.5 3.16 6.5a3.07 3.07 0 1 0 5.53-2.7l-3.59-7.35a1 1 0 0 1-.1-.44v-3.77l5.93-2.04a3.07 3.07 0 0 0-2-5.81l-4.6 1.58A4.5 4.5 0 0 0 16 2ZM5.06 8.72c.2-.56.8-.85 1.36-.66l7.63 2.62a6 6 0 0 0 3.9 0l7.63-2.62a1.07 1.07 0 0 1 .7 2.03L20 12.24c-.6.21-1.01.78-1.01 1.42v4.13c0 .45.1.9.3 1.31l3.6 7.36a1.07 1.07 0 1 1-1.94.94l-3.16-6.5a2 2 0 0 0-3.6 0l-3.17 6.5a1.07 1.07 0 1 1-1.93-.94l3.6-7.37a3 3 0 0 0 .3-1.31v-4.12c0-.64-.4-1.2-1.01-1.42L5.72 10.1c-.56-.2-.85-.8-.66-1.37Z"]));
          exports.Accessibility48Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility48Filled', "48", ["M24 14.5A5.25 5.25 0 1 0 24 4a5.25 5.25 0 0 0 0 10.5Zm-12.3-4.24a4.25 4.25 0 0 0-2.9 7.98l7.87 2.87c.2.07.33.26.33.47v4.44c0 .35-.07.7-.2 1.03l-4.49 11.11a4.25 4.25 0 1 0 7.88 3.18l3.35-8.27a.5.5 0 0 1 .92 0l3.35 8.27a4.25 4.25 0 0 0 7.88-3.18l-4.49-11.1c-.13-.33-.2-.68-.2-1.03v-4.45c0-.21.14-.4.33-.47l7.87-2.87a4.25 4.25 0 1 0-2.9-7.98l-3.81 1.38c-.82.3-1.43.9-1.81 1.55a7.75 7.75 0 0 1-13.35 0 3.52 3.52 0 0 0-1.81-1.55l-3.81-1.38Z"]));
          exports.Accessibility48Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility48Regular', "48", ["M20 10.5a4 4 0 0 0 2.23 3.59l.49.17c.83.3 1.74.3 2.57 0l.49-.17A4 4 0 1 0 20 10.5Zm-2.2 1.98a6.5 6.5 0 1 1 12.4 0l6.1-2.22a4.25 4.25 0 0 1 2.9 7.99L31 21.23v4.8c0 .35.07.7.2 1.03l4.5 11.1a4.25 4.25 0 1 1-7.9 3.18L24 31.92l-3.8 9.42a4.25 4.25 0 0 1-7.89-3.18l4.5-11.11c.12-.33.2-.68.2-1.03v-4.79l-8.2-2.98a4.25 4.25 0 1 1 2.9-8l6.1 2.23Zm3.45 3.91-10.4-3.78a1.75 1.75 0 0 0-1.2 3.29l8.37 3.04a2.25 2.25 0 0 1 1.48 2.11v4.97c0 .67-.13 1.34-.38 1.96L14.63 39.1a1.75 1.75 0 1 0 3.25 1.3l4.03-9.99a2.25 2.25 0 0 1 4.18 0l4.04 10a1.75 1.75 0 0 0 3.24-1.31L28.9 28a5.25 5.25 0 0 1-.39-1.97v-4.98c0-.94.6-1.79 1.48-2.11l8.37-3.04a1.75 1.75 0 1 0-1.2-3.3l-10.4 3.8a6.48 6.48 0 0 1-5.5 0Z"]));
          exports.AccessibilityCheckmark20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmark20Filled', "20", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          exports.AccessibilityCheckmark20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmark20Regular', "20", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          exports.AccessibilityCheckmark24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmark24Filled', "24", ["M12 6.5A2.25 2.25 0 1 0 12 2a2.25 2.25 0 0 0 0 4.5ZM6.15 4.18a2.27 2.27 0 0 0-2.96 1.18 2.24 2.24 0 0 0 1.18 2.96L7.39 9.6a1 1 0 0 1 .61.92v3.04l-1.88 5.46a2.25 2.25 0 1 0 4.26 1.46l.14-.42A6.5 6.5 0 0 1 16 11.02v-.5a1 1 0 0 1 .61-.92l3.02-1.28a2.24 2.24 0 0 0 1.18-2.96 2.27 2.27 0 0 0-2.96-1.18l-1.6.68c-.35.14-.58.42-.7.73a3.8 3.8 0 0 1-7.1 0c-.12-.3-.35-.59-.7-.73l-1.6-.68ZM22 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z"]));
          exports.AccessibilityCheckmark24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmark24Regular', "24", ["M11.47 6.4a1.5 1.5 0 1 1 1.06 0c-.35.09-.71.09-1.06 0ZM9 5c0 .14 0 .27.03.4L6.15 4.18a2.27 2.27 0 0 0-2.96 1.18 2.24 2.24 0 0 0 1.18 2.96L8 9.86v3.7l-1.88 5.46a2.25 2.25 0 1 0 4.26 1.46l.14-.42a6.48 6.48 0 0 1-.5-3.17L8.97 20a.75.75 0 0 1-1.42-.49l1.9-5.5c.04-.12.06-.26.06-.4V9.7c0-.5-.3-.96-.76-1.16l-3.78-1.6a.74.74 0 0 1-.4-.98.77.77 0 0 1 1-.4l4.98 2.1c.15.08.32.13.48.18a3 3 0 0 0 1.96 0c.16-.05.33-.1.49-.17l4.97-2.11a.77.77 0 0 1 1 .4.74.74 0 0 1-.4.98l-3.78 1.6c-.46.2-.76.65-.76 1.15v1.62c.48-.15.98-.25 1.5-.3V9.87l3.63-1.54a2.24 2.24 0 0 0 1.18-2.96 2.27 2.27 0 0 0-2.96-1.18L14.97 5.4A3.02 3.02 0 0 0 12 2a3 3 0 0 0-3 3Zm13 12.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.15-2.35a.5.5 0 0 0-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 0 0 0-.7Z"]));
          exports.AccessibilityCheckmark28Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmark28Filled', "28", ["M14 7.5A2.75 2.75 0 1 0 14 2a2.75 2.75 0 0 0 0 5.5ZM6.24 5.12a2.48 2.48 0 1 0-1.53 4.71l4.6 1.5a1 1 0 0 1 .69.95v3.1a1 1 0 0 1-.07.37L7.18 22.6c-.51 1.27.1 2.7 1.36 3.22 1.26.51 2.7-.1 3.21-1.36l.63-1.58A7.5 7.5 0 0 1 18 13.15v-.87a1 1 0 0 1 .7-.95l4.59-1.5a2.48 2.48 0 0 0-1.53-4.7l-3.11 1c-.46.15-.8.47-1.01.82a4.25 4.25 0 0 1-7.28 0 1.87 1.87 0 0 0-1-.82l-3.12-1ZM26 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2.65-2.85a.5.5 0 0 0-.7 0L18 22.29l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 0 0 0-.7Z"]));
          exports.AccessibilityCheckmark28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmark28Regular', "28", ["M12 5.5a2 2 0 0 0 1.5 1.93c.33.06.67.06 1 0A2 2 0 1 0 12 5.5Zm-1.34 1.06a3.5 3.5 0 1 1 6.68 0l4.42-1.44a2.48 2.48 0 1 1 1.53 4.71L18 11.55v1.6c-.52.1-1.02.27-1.5.47v-2.25c0-.54.35-1.02.86-1.19l5.46-1.77a.98.98 0 0 0-.6-1.86l-6.75 2.2c-.22.06-.43.12-.65.15a3.5 3.5 0 0 1-1.64 0c-.22-.03-.43-.09-.65-.16l-6.75-2.2a.98.98 0 0 0-.6 1.87l5.46 1.77c.51.17.86.65.86 1.19v3.96c0 .35-.07.7-.2 1.02l-2.73 6.81c-.2.5.04 1.07.54 1.27a.96.96 0 0 0 1.25-.53l1.68-4.2a7.59 7.59 0 0 0 .34 3.18l-.63 1.58a2.46 2.46 0 0 1-3.2 1.36 2.48 2.48 0 0 1-1.37-3.22l2.73-6.8c.06-.16.09-.31.09-.47v-3.78L4.71 9.83a2.48 2.48 0 0 1 1.53-4.7l4.42 1.43ZM26 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2.65-2.85a.5.5 0 0 0-.7 0L18 22.29l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 0 0 0-.7Z"]));
          exports.AccessibilityCheckmark32Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmark32Filled', "32", ["M16 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM7.07 6.17a3.07 3.07 0 1 0-2 5.8l5.6 1.93c.2.07.33.26.33.48v3.51a.5.5 0 0 1-.05.22L7.3 25.58a3.07 3.07 0 1 0 5.52 2.7l1.46-3a9.02 9.02 0 0 1 6.74-11.06.5.5 0 0 1 .3-.32l5.6-1.92a3.07 3.07 0 0 0-2-5.81l-2.98 1.02c-.52.18-.9.55-1.14.97a5.5 5.5 0 0 1-9.62 0 2.1 2.1 0 0 0-1.14-.97L7.07 6.17ZM23 15.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5.25-5.25c.3-.3.3-.77 0-1.06Z"]));
          exports.AccessibilityCheckmark32Light = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmark32Light', "32", ["m6.53 7.09 6.56 1.66A3.99 3.99 0 0 1 16 2a4 4 0 0 1 2.9 6.75l6.57-1.66a2.83 2.83 0 1 1 1.32 5.51L21 13.9v.32c-.34.08-.67.18-1 .3V13.5a.5.5 0 0 1 .4-.49l6.17-1.38a1.83 1.83 0 1 0-.85-3.57l-7.87 1.99c-1.21.3-2.49.3-3.7 0l-7.87-2a1.83 1.83 0 1 0-.85 3.57l6.18 1.4a.5.5 0 0 1 .4.48V18a.5.5 0 0 1-.06.22l-3.9 7.8a2.07 2.07 0 1 0 3.7 1.85l2.26-4.5c.02.6.1 1.18.24 1.75l-1.6 3.2a3.07 3.07 0 1 1-5.5-2.75L11 17.88V13.9l-5.79-1.3a2.83 2.83 0 1 1 1.32-5.51ZM16 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 6.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5.25-5.25c.3-.3.3-.77 0-1.06Z"]));
          exports.AccessibilityCheckmark32Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmark32Regular', "32", ["M13.5 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM16 2a4.5 4.5 0 0 0-4.32 5.75l-4.6-1.58a3.07 3.07 0 0 0-2 5.8L11 14.03v3.76a1 1 0 0 1-.1.44l-3.6 7.36a3.07 3.07 0 0 0 5.53 2.7l1.46-3a9.02 9.02 0 0 1 0-4.53l-.09.15-3.17 6.5a1.07 1.07 0 1 1-1.92-.94l3.59-7.37a3 3 0 0 0 .3-1.31v-4.12c0-.64-.4-1.2-1.01-1.42L5.72 10.1a1.07 1.07 0 1 1 .7-2.03l7.63 2.62a6 6 0 0 0 3.9 0l7.63-2.62a1.07 1.07 0 1 1 .7 2.03L20 12.24c-.6.21-1.01.78-1.01 1.42v1.28c.63-.32 1.3-.56 2-.72v-.2l5.93-2.04a3.07 3.07 0 0 0-2-5.81l-4.6 1.58A4.5 4.5 0 0 0 16 2Zm7 13.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5.25-5.25c.3-.3.3-.77 0-1.06Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from '../utils/createFluentIcon';
          export declare const AccessTime20Filled: FluentIcon;
          export declare const AccessTime20Regular: FluentIcon;
          export declare const AccessTime24Filled: FluentIcon;
          export declare const AccessTime24Regular: FluentIcon;
          export declare const Accessibility16Filled: FluentIcon;
          export declare const Accessibility16Regular: FluentIcon;
          export declare const Accessibility20Filled: FluentIcon;
          export declare const Accessibility20Regular: FluentIcon;
          export declare const Accessibility24Filled: FluentIcon;
          export declare const Accessibility24Regular: FluentIcon;
          export declare const Accessibility28Filled: FluentIcon;
          export declare const Accessibility28Regular: FluentIcon;
          export declare const Accessibility32Filled: FluentIcon;
          export declare const Accessibility32Regular: FluentIcon;
          export declare const Accessibility48Filled: FluentIcon;
          export declare const Accessibility48Regular: FluentIcon;
          export declare const AccessibilityCheckmark20Filled: FluentIcon;
          export declare const AccessibilityCheckmark20Regular: FluentIcon;
          export declare const AccessibilityCheckmark24Filled: FluentIcon;
          export declare const AccessibilityCheckmark24Regular: FluentIcon;
          export declare const AccessibilityCheckmark28Filled: FluentIcon;
          export declare const AccessibilityCheckmark28Regular: FluentIcon;
          export declare const AccessibilityCheckmark32Filled: FluentIcon;
          export declare const AccessibilityCheckmark32Light: FluentIcon;
          export declare const AccessibilityCheckmark32Regular: FluentIcon;
          export declare const AccessibilityCheckmark48Filled: FluentIcon;
          export declare const AccessibilityCheckmark48Regular: FluentIcon;
          export declare const AccessibilityError20Filled: FluentIcon;
          export declare const AccessibilityError20Regular: FluentIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid font chunk contents in lib fonts/icons', async () => {
      const fontsIconsPath = path.join(__dirname, 'lib', 'fonts', 'icons');
      const fontsIconFiles = await readdir(fontsIconsPath);
      const fontsIconChunks = fontsIconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

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
          export const AccessTimeFilled = ( /*#__PURE__*/createFluentFontIcon("AccessTimeFilled", "", 2, undefined));
          export const AccessTimeRegular = ( /*#__PURE__*/createFluentFontIcon("AccessTimeRegular", "", 2, undefined));
          export const AccessibilityFilled = ( /*#__PURE__*/createFluentFontIcon("AccessibilityFilled", "", 2, undefined));
          export const AccessibilityRegular = ( /*#__PURE__*/createFluentFontIcon("AccessibilityRegular", "", 2, undefined));
          export const AccessibilityCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon("AccessibilityCheckmarkFilled", "", 2, undefined));
          export const AccessibilityCheckmarkRegular = ( /*#__PURE__*/createFluentFontIcon("AccessibilityCheckmarkRegular", "", 2, undefined));
          export const AccessibilityErrorFilled = ( /*#__PURE__*/createFluentFontIcon("AccessibilityErrorFilled", "", 2, undefined));
          export const AccessibilityErrorRegular = ( /*#__PURE__*/createFluentFontIcon("AccessibilityErrorRegular", "", 2, undefined));
          export const AccessibilityMoreFilled = ( /*#__PURE__*/createFluentFontIcon("AccessibilityMoreFilled", "", 2, undefined));
          export const AccessibilityMoreRegular = ( /*#__PURE__*/createFluentFontIcon("AccessibilityMoreRegular", "", 2, undefined));
          export const AccessibilityQuestionMarkFilled = ( /*#__PURE__*/createFluentFontIcon("AccessibilityQuestionMarkFilled", "", 2, undefined));
          export const AccessibilityQuestionMarkRegular = ( /*#__PURE__*/createFluentFontIcon("AccessibilityQuestionMarkRegular", "", 2, undefined));
          export const AddFilled = ( /*#__PURE__*/createFluentFontIcon("AddFilled", "", 2, undefined));
          export const AddRegular = ( /*#__PURE__*/createFluentFontIcon("AddRegular", "", 2, undefined));
          export const AddCircleFilled = ( /*#__PURE__*/createFluentFontIcon("AddCircleFilled", "", 2, undefined));
          export const AddCircleRegular = ( /*#__PURE__*/createFluentFontIcon("AddCircleRegular", "", 2, undefined));
          export const AddSquareFilled = ( /*#__PURE__*/createFluentFontIcon("AddSquareFilled", "", 2, undefined));
          export const AddSquareRegular = ( /*#__PURE__*/createFluentFontIcon("AddSquareRegular", "", 2, undefined));
          export const AddSquareMultipleFilled = ( /*#__PURE__*/createFluentFontIcon("AddSquareMultipleFilled", "", 2, undefined));
          export const AddSquareMultipleRegular = ( /*#__PURE__*/createFluentFontIcon("AddSquareMultipleRegular", "", 2, undefined));
          export const AddStarburstFilled = ( /*#__PURE__*/createFluentFontIcon("AddStarburstFilled", "", 2, undefined));
          export const AddStarburstRegular = ( /*#__PURE__*/createFluentFontIcon("AddStarburstRegular", "", 2, undefined));
          export const AddSubtractCircleFilled = ( /*#__PURE__*/createFluentFontIcon("AddSubtractCircleFilled", "", 2, undefined));
          export const AddSubtractCircleRegular = ( /*#__PURE__*/createFluentFontIcon("AddSubtractCircleRegular", "", 2, undefined));
          export const AgentsFilled = ( /*#__PURE__*/createFluentFontIcon("AgentsFilled", "", 2, undefined));
          export const AgentsRegular = ( /*#__PURE__*/createFluentFontIcon("AgentsRegular", "", 2, undefined));
          export const AgentsAddFilled = ( /*#__PURE__*/createFluentFontIcon("AgentsAddFilled", "", 2, undefined));
          export const AgentsAddRegular = ( /*#__PURE__*/createFluentFontIcon("AgentsAddRegular", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export declare const AccessTimeFilled: FluentFontIcon;
          export declare const AccessTimeRegular: FluentFontIcon;
          export declare const AccessibilityFilled: FluentFontIcon;
          export declare const AccessibilityRegular: FluentFontIcon;
          export declare const AccessibilityCheckmarkFilled: FluentFontIcon;
          export declare const AccessibilityCheckmarkRegular: FluentFontIcon;
          export declare const AccessibilityErrorFilled: FluentFontIcon;
          export declare const AccessibilityErrorRegular: FluentFontIcon;
          export declare const AccessibilityMoreFilled: FluentFontIcon;
          export declare const AccessibilityMoreRegular: FluentFontIcon;
          export declare const AccessibilityQuestionMarkFilled: FluentFontIcon;
          export declare const AccessibilityQuestionMarkRegular: FluentFontIcon;
          export declare const AddFilled: FluentFontIcon;
          export declare const AddRegular: FluentFontIcon;
          export declare const AddCircleFilled: FluentFontIcon;
          export declare const AddCircleRegular: FluentFontIcon;
          export declare const AddSquareFilled: FluentFontIcon;
          export declare const AddSquareRegular: FluentFontIcon;
          export declare const AddSquareMultipleFilled: FluentFontIcon;
          export declare const AddSquareMultipleRegular: FluentFontIcon;
          export declare const AddStarburstFilled: FluentFontIcon;
          export declare const AddStarburstRegular: FluentFontIcon;
          export declare const AddSubtractCircleFilled: FluentFontIcon;
          export declare const AddSubtractCircleRegular: FluentFontIcon;
          export declare const AgentsFilled: FluentFontIcon;
          export declare const AgentsRegular: FluentFontIcon;
          export declare const AgentsAddFilled: FluentFontIcon;
          export declare const AgentsAddRegular: FluentFontIcon;
          export declare const AirplaneFilled: FluentFontIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid font chunk contents in lib-cjs fonts/icons', async () => {
      const fontsIconsPath = path.join(__dirname, 'lib-cjs', 'fonts', 'icons');
      const fontsIconFiles = await readdir(fontsIconsPath);
      const fontsIconChunks = fontsIconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

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
          "... (10 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.AccessTimeFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessTimeFilled", "", 2, undefined));
          exports.AccessTimeRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessTimeRegular", "", 2, undefined));
          exports.AccessibilityFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityFilled", "", 2, undefined));
          exports.AccessibilityRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityRegular", "", 2, undefined));
          exports.AccessibilityCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityCheckmarkFilled", "", 2, undefined));
          exports.AccessibilityCheckmarkRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityCheckmarkRegular", "", 2, undefined));
          exports.AccessibilityErrorFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityErrorFilled", "", 2, undefined));
          exports.AccessibilityErrorRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityErrorRegular", "", 2, undefined));
          exports.AccessibilityMoreFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityMoreFilled", "", 2, undefined));
          exports.AccessibilityMoreRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityMoreRegular", "", 2, undefined));
          exports.AccessibilityQuestionMarkFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityQuestionMarkFilled", "", 2, undefined));
          exports.AccessibilityQuestionMarkRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityQuestionMarkRegular", "", 2, undefined));
          exports.AddFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddFilled", "", 2, undefined));
          exports.AddRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddRegular", "", 2, undefined));
          exports.AddCircleFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddCircleFilled", "", 2, undefined));
          exports.AddCircleRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddCircleRegular", "", 2, undefined));
          exports.AddSquareFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddSquareFilled", "", 2, undefined));
          exports.AddSquareRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddSquareRegular", "", 2, undefined));
          exports.AddSquareMultipleFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddSquareMultipleFilled", "", 2, undefined));
          exports.AddSquareMultipleRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddSquareMultipleRegular", "", 2, undefined));
          exports.AddStarburstFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddStarburstFilled", "", 2, undefined));
          exports.AddStarburstRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddStarburstRegular", "", 2, undefined));
          exports.AddSubtractCircleFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddSubtractCircleFilled", "", 2, undefined));
          exports.AddSubtractCircleRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AddSubtractCircleRegular", "", 2, undefined));
          exports.AgentsFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AgentsFilled", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export declare const AccessTimeFilled: FluentFontIcon;
          export declare const AccessTimeRegular: FluentFontIcon;
          export declare const AccessibilityFilled: FluentFontIcon;
          export declare const AccessibilityRegular: FluentFontIcon;
          export declare const AccessibilityCheckmarkFilled: FluentFontIcon;
          export declare const AccessibilityCheckmarkRegular: FluentFontIcon;
          export declare const AccessibilityErrorFilled: FluentFontIcon;
          export declare const AccessibilityErrorRegular: FluentFontIcon;
          export declare const AccessibilityMoreFilled: FluentFontIcon;
          export declare const AccessibilityMoreRegular: FluentFontIcon;
          export declare const AccessibilityQuestionMarkFilled: FluentFontIcon;
          export declare const AccessibilityQuestionMarkRegular: FluentFontIcon;
          export declare const AddFilled: FluentFontIcon;
          export declare const AddRegular: FluentFontIcon;
          export declare const AddCircleFilled: FluentFontIcon;
          export declare const AddCircleRegular: FluentFontIcon;
          export declare const AddSquareFilled: FluentFontIcon;
          export declare const AddSquareRegular: FluentFontIcon;
          export declare const AddSquareMultipleFilled: FluentFontIcon;
          export declare const AddSquareMultipleRegular: FluentFontIcon;
          export declare const AddStarburstFilled: FluentFontIcon;
          export declare const AddStarburstRegular: FluentFontIcon;
          export declare const AddSubtractCircleFilled: FluentFontIcon;
          export declare const AddSubtractCircleRegular: FluentFontIcon;
          export declare const AgentsFilled: FluentFontIcon;
          export declare const AgentsRegular: FluentFontIcon;
          export declare const AgentsAddFilled: FluentFontIcon;
          export declare const AgentsAddRegular: FluentFontIcon;
          export declare const AirplaneFilled: FluentFontIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid font chunk contents in lib fonts/sizedIcons', async () => {
      const fontsSizedIconsPath = path.join(__dirname, 'lib', 'fonts', 'sizedIcons');
      const fontsSizedIconFiles = await readdir(fontsSizedIconsPath);
      const fontsSizedIconChunks = fontsSizedIconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

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
          export const AccessibilityCheckmark32Light = ( /*#__PURE__*/createFluentFontIcon("AccessibilityCheckmark32Light", "", 3, 32));
          export const Add32Light = ( /*#__PURE__*/createFluentFontIcon("Add32Light", "", 3, 32));
          export const Alert32Light = ( /*#__PURE__*/createFluentFontIcon("Alert32Light", "", 3, 32));
          export const AppFolder32Light = ( /*#__PURE__*/createFluentFontIcon("AppFolder32Light", "", 3, 32));
          export const AppGeneric32Light = ( /*#__PURE__*/createFluentFontIcon("AppGeneric32Light", "", 3, 32));
          export const Archive32Light = ( /*#__PURE__*/createFluentFontIcon("Archive32Light", "", 3, 32));
          export const ArchiveSettings32Light = ( /*#__PURE__*/createFluentFontIcon("ArchiveSettings32Light", "", 3, 32));
          export const ArrowClockwise32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowClockwise32Light", "", 3, 32));
          export const ArrowDown32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowDown32Light", "", 3, 32));
          export const ArrowDownload32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowDownload32Light", "", 3, 32));
          export const ArrowForward32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowForward32Light", "", 3, 32));
          export const ArrowHookDownLeft32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowHookDownLeft32Light", "", 3, 32));
          export const ArrowHookDownRight32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowHookDownRight32Light", "", 3, 32));
          export const ArrowHookUpLeft32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowHookUpLeft32Light", "", 3, 32));
          export const ArrowHookUpRight32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowHookUpRight32Light", "", 3, 32));
          export const ArrowRedo32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowRedo32Light", "", 3, 32));
          export const ArrowReply32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowReply32Light", "", 3, 32));
          export const ArrowReplyAll32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowReplyAll32Light", "", 3, 32));
          export const ArrowUndo32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowUndo32Light", "", 3, 32));
          export const Attach32Light = ( /*#__PURE__*/createFluentFontIcon("Attach32Light", "", 3, 32));
          export const AutoFit32Light = ( /*#__PURE__*/createFluentFontIcon("AutoFit32Light", "", 3, 32));
          export const AutoFitWidth32Light = ( /*#__PURE__*/createFluentFontIcon("AutoFitWidth32Light", "", 3, 32));
          export const Autocorrect32Light = ( /*#__PURE__*/createFluentFontIcon("Autocorrect32Light", "", 3, 32));
          export const BookContacts32Light = ( /*#__PURE__*/createFluentFontIcon("BookContacts32Light", "", 3, 32));
          export const BreakoutRoom32Light = ( /*#__PURE__*/createFluentFontIcon("BreakoutRoom32Light", "", 3, 32));
          export const Broom32Light = ( /*#__PURE__*/createFluentFontIcon("Broom32Light", "", 3, 32));
          export const Calendar3Day32Light = ( /*#__PURE__*/createFluentFontIcon("Calendar3Day32Light", "", 3, 32));
          export const CalendarCheckmark32Light = ( /*#__PURE__*/createFluentFontIcon("CalendarCheckmark32Light", "", 3, 32));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export declare const AccessibilityCheckmark32Light: FluentFontIcon;
          export declare const Add32Light: FluentFontIcon;
          export declare const Alert32Light: FluentFontIcon;
          export declare const AppFolder32Light: FluentFontIcon;
          export declare const AppGeneric32Light: FluentFontIcon;
          export declare const Archive32Light: FluentFontIcon;
          export declare const ArchiveSettings32Light: FluentFontIcon;
          export declare const ArrowClockwise32Light: FluentFontIcon;
          export declare const ArrowDown32Light: FluentFontIcon;
          export declare const ArrowDownload32Light: FluentFontIcon;
          export declare const ArrowForward32Light: FluentFontIcon;
          export declare const ArrowHookDownLeft32Light: FluentFontIcon;
          export declare const ArrowHookDownRight32Light: FluentFontIcon;
          export declare const ArrowHookUpLeft32Light: FluentFontIcon;
          export declare const ArrowHookUpRight32Light: FluentFontIcon;
          export declare const ArrowRedo32Light: FluentFontIcon;
          export declare const ArrowReply32Light: FluentFontIcon;
          export declare const ArrowReplyAll32Light: FluentFontIcon;
          export declare const ArrowUndo32Light: FluentFontIcon;
          export declare const Attach32Light: FluentFontIcon;
          export declare const AutoFit32Light: FluentFontIcon;
          export declare const AutoFitWidth32Light: FluentFontIcon;
          export declare const Autocorrect32Light: FluentFontIcon;
          export declare const BookContacts32Light: FluentFontIcon;
          export declare const BreakoutRoom32Light: FluentFontIcon;
          export declare const Broom32Light: FluentFontIcon;
          export declare const Calendar3Day32Light: FluentFontIcon;
          export declare const CalendarCheckmark32Light: FluentFontIcon;
          export declare const CalendarClock32Light: FluentFontIcon;
          ... (content truncated for snapshot)"
        `);
      }
    });

    it('should have valid font chunk contents in lib-cjs fonts/sizedIcons', async () => {
      const fontsSizedIconsPath = path.join(__dirname, 'lib-cjs', 'fonts', 'sizedIcons');
      const fontsSizedIconFiles = await readdir(fontsSizedIconsPath);
      const fontsSizedIconChunks = fontsSizedIconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

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
          "... (10 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.AccessibilityCheckmark32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AccessibilityCheckmark32Light", "", 3, 32));
          exports.Add32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Add32Light", "", 3, 32));
          exports.Alert32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Alert32Light", "", 3, 32));
          exports.AppFolder32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AppFolder32Light", "", 3, 32));
          exports.AppGeneric32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AppGeneric32Light", "", 3, 32));
          exports.Archive32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Archive32Light", "", 3, 32));
          exports.ArchiveSettings32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArchiveSettings32Light", "", 3, 32));
          exports.ArrowClockwise32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowClockwise32Light", "", 3, 32));
          exports.ArrowDown32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowDown32Light", "", 3, 32));
          exports.ArrowDownload32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowDownload32Light", "", 3, 32));
          exports.ArrowForward32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowForward32Light", "", 3, 32));
          exports.ArrowHookDownLeft32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowHookDownLeft32Light", "", 3, 32));
          exports.ArrowHookDownRight32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowHookDownRight32Light", "", 3, 32));
          exports.ArrowHookUpLeft32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowHookUpLeft32Light", "", 3, 32));
          exports.ArrowHookUpRight32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowHookUpRight32Light", "", 3, 32));
          exports.ArrowRedo32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowRedo32Light", "", 3, 32));
          exports.ArrowReply32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowReply32Light", "", 3, 32));
          exports.ArrowReplyAll32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowReplyAll32Light", "", 3, 32));
          exports.ArrowUndo32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowUndo32Light", "", 3, 32));
          exports.Attach32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Attach32Light", "", 3, 32));
          exports.AutoFit32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AutoFit32Light", "", 3, 32));
          exports.AutoFitWidth32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AutoFitWidth32Light", "", 3, 32));
          exports.Autocorrect32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Autocorrect32Light", "", 3, 32));
          exports.BookContacts32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BookContacts32Light", "", 3, 32));
          exports.BreakoutRoom32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BreakoutRoom32Light", "", 3, 32));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from '../../utils/fonts/createFluentFontIcon';
          export declare const AccessibilityCheckmark32Light: FluentFontIcon;
          export declare const Add32Light: FluentFontIcon;
          export declare const Alert32Light: FluentFontIcon;
          export declare const AppFolder32Light: FluentFontIcon;
          export declare const AppGeneric32Light: FluentFontIcon;
          export declare const Archive32Light: FluentFontIcon;
          export declare const ArchiveSettings32Light: FluentFontIcon;
          export declare const ArrowClockwise32Light: FluentFontIcon;
          export declare const ArrowDown32Light: FluentFontIcon;
          export declare const ArrowDownload32Light: FluentFontIcon;
          export declare const ArrowForward32Light: FluentFontIcon;
          export declare const ArrowHookDownLeft32Light: FluentFontIcon;
          export declare const ArrowHookDownRight32Light: FluentFontIcon;
          export declare const ArrowHookUpLeft32Light: FluentFontIcon;
          export declare const ArrowHookUpRight32Light: FluentFontIcon;
          export declare const ArrowRedo32Light: FluentFontIcon;
          export declare const ArrowReply32Light: FluentFontIcon;
          export declare const ArrowReplyAll32Light: FluentFontIcon;
          export declare const ArrowUndo32Light: FluentFontIcon;
          export declare const Attach32Light: FluentFontIcon;
          export declare const AutoFit32Light: FluentFontIcon;
          export declare const AutoFitWidth32Light: FluentFontIcon;
          export declare const Autocorrect32Light: FluentFontIcon;
          export declare const BookContacts32Light: FluentFontIcon;
          export declare const BreakoutRoom32Light: FluentFontIcon;
          export declare const Broom32Light: FluentFontIcon;
          export declare const Calendar3Day32Light: FluentFontIcon;
          export declare const CalendarCheckmark32Light: FluentFontIcon;
          export declare const CalendarClock32Light: FluentFontIcon;
          ... (content truncated for snapshot)"
        `);
      }
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
        'createFluentFontIcon.shared.d.ts'
      ];

      for (const file of fontCreationFiles) {
        const filePath = path.join(fontsPath, file);
        expect(fs.existsSync(filePath)).toBe(true);
      }
    });
  });

  describe('Metadata Validation', () => {
    it('metadata.json should have no uncommitted changes after build', () => {
      // Check if metadata.json exists
      const metadataPath = path.join(__dirname, 'metadata.json');
      expect(fs.existsSync(metadataPath)).toBe(true);

      try {
        // Run git diff to check if metadata.json has any uncommitted changes
        const gitDiff = execSync('git diff metadata.json', {
          encoding: 'utf-8',
          cwd: __dirname,
          stdio: 'pipe'
        });

        // If there's a diff, the test should fail with a helpful message
        if (gitDiff.trim()) {
          throw new Error(
            `metadata.json has uncommitted changes after build.\n` +
            `This means the committed metadata.json is out of sync with the current icons.\n` +
            `Please run 'npm run build' and commit the updated metadata.json file.\n\n` +
            `Git diff:\n${gitDiff}`
          );
        }

        // If no diff, the test passes
        expect(gitDiff.trim()).toBe('');
      } catch (error) {
        // Handle cases where git command fails (e.g., not in a git repo, file not tracked)
        if (error.status === 128) {
          // Git command failed - this might be expected in some CI environments
          // We'll skip this test with a warning
          console.warn('Git diff check skipped - not in a git repository or metadata.json not tracked');
          return;
        }

        // Re-throw other errors (including our custom error above)
        throw error;
      }
    });

  });
});
