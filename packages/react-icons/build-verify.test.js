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
          if (exportPath.startsWith('./')) {
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
        export * from './icons/chunk-30';
        export * from './icons/chunk-31';
        export * from './icons/chunk-32';
        export * from './icons/chunk-33';
        export * from './icons/chunk-34';
        export * from './icons/chunk-35';
        export * from './icons/chunk-36';
        export * from './icons/chunk-37';
        export * from './icons/chunk-38';
        export * from './icons/chunk-39';
        export * from './icons/chunk-40';
        export * from './icons/chunk-41';
        export * from './icons/chunk-42';
        export * from './icons/chunk-43';
        export * from './icons/chunk-44';
        export * from './icons/chunk-45';
        export * from './icons/chunk-46';
        export * from './icons/chunk-47';
        export * from './icons/chunk-48';
        export * from './icons/chunk-49';
        export * from './icons/chunk-50';
        export * from './icons/chunk-51';
        export * from './icons/chunk-52';
        export * from './icons/chunk-53';
        export * from './icons/chunk-54';
        export * from './icons/chunk-55';
        export * from './icons/chunk-56';
        export * from './icons/chunk-57';
        export * from './icons/chunk-58';
        export * from './icons/chunk-59';
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
        export * from './sizedIcons/chunk-38';
        export * from './sizedIcons/chunk-39';
        export * from './sizedIcons/chunk-40';
        export * from './sizedIcons/chunk-41';
        export * from './sizedIcons/chunk-42';
        export * from './sizedIcons/chunk-43';
        export * from './sizedIcons/chunk-44';
        export * from './sizedIcons/chunk-45';
        export * from './sizedIcons/chunk-46';
        export * from './sizedIcons/chunk-47';
        export * from './sizedIcons/chunk-48';
        export * from './sizedIcons/chunk-49';
        export * from './sizedIcons/chunk-50';
        export * from './sizedIcons/chunk-51';
        export * from './sizedIcons/chunk-52';
        export * from './sizedIcons/chunk-53';
        export * from './sizedIcons/chunk-54';
        export * from './sizedIcons/chunk-55';
        export * from './sizedIcons/chunk-56';
        export * from './sizedIcons/chunk-57';
        export * from './sizedIcons/chunk-58';
        export * from './sizedIcons/chunk-59';
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
        export * from './icons/chunk-30';
        export * from './icons/chunk-31';
        export * from './icons/chunk-32';
        export * from './icons/chunk-33';
        export * from './icons/chunk-34';
        export * from './icons/chunk-35';
        export * from './icons/chunk-36';
        export * from './icons/chunk-37';
        export * from './icons/chunk-38';
        export * from './icons/chunk-39';
        export * from './icons/chunk-40';
        export * from './icons/chunk-41';
        export * from './icons/chunk-42';
        export * from './icons/chunk-43';
        export * from './icons/chunk-44';
        export * from './icons/chunk-45';
        export * from './icons/chunk-46';
        export * from './icons/chunk-47';
        export * from './icons/chunk-48';
        export * from './icons/chunk-49';
        export * from './icons/chunk-50';
        export * from './icons/chunk-51';
        export * from './icons/chunk-52';
        export * from './icons/chunk-53';
        export * from './icons/chunk-54';
        export * from './icons/chunk-55';
        export * from './icons/chunk-56';
        export * from './icons/chunk-57';
        export * from './icons/chunk-58';
        export * from './icons/chunk-59';
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
        export * from './sizedIcons/chunk-38';
        export * from './sizedIcons/chunk-39';
        export * from './sizedIcons/chunk-40';
        export * from './sizedIcons/chunk-41';
        export * from './sizedIcons/chunk-42';
        export * from './sizedIcons/chunk-43';
        export * from './sizedIcons/chunk-44';
        export * from './sizedIcons/chunk-45';
        export * from './sizedIcons/chunk-46';
        export * from './sizedIcons/chunk-47';
        export * from './sizedIcons/chunk-48';
        export * from './sizedIcons/chunk-49';
        export * from './sizedIcons/chunk-50';
        export * from './sizedIcons/chunk-51';
        export * from './sizedIcons/chunk-52';
        export * from './sizedIcons/chunk-53';
        export * from './sizedIcons/chunk-54';
        export * from './sizedIcons/chunk-55';
        export * from './sizedIcons/chunk-56';
        export * from './sizedIcons/chunk-57';
        export * from './sizedIcons/chunk-58';
        export * from './sizedIcons/chunk-59';
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
        tslib_1.__exportStar(require("./icons/chunk-30"), exports);
        tslib_1.__exportStar(require("./icons/chunk-31"), exports);
        tslib_1.__exportStar(require("./icons/chunk-32"), exports);
        tslib_1.__exportStar(require("./icons/chunk-33"), exports);
        tslib_1.__exportStar(require("./icons/chunk-34"), exports);
        tslib_1.__exportStar(require("./icons/chunk-35"), exports);
        tslib_1.__exportStar(require("./icons/chunk-36"), exports);
        tslib_1.__exportStar(require("./icons/chunk-37"), exports);
        tslib_1.__exportStar(require("./icons/chunk-38"), exports);
        tslib_1.__exportStar(require("./icons/chunk-39"), exports);
        tslib_1.__exportStar(require("./icons/chunk-40"), exports);
        tslib_1.__exportStar(require("./icons/chunk-41"), exports);
        tslib_1.__exportStar(require("./icons/chunk-42"), exports);
        tslib_1.__exportStar(require("./icons/chunk-43"), exports);
        tslib_1.__exportStar(require("./icons/chunk-44"), exports);
        tslib_1.__exportStar(require("./icons/chunk-45"), exports);
        tslib_1.__exportStar(require("./icons/chunk-46"), exports);
        tslib_1.__exportStar(require("./icons/chunk-47"), exports);
        tslib_1.__exportStar(require("./icons/chunk-48"), exports);
        tslib_1.__exportStar(require("./icons/chunk-49"), exports);
        tslib_1.__exportStar(require("./icons/chunk-50"), exports);
        tslib_1.__exportStar(require("./icons/chunk-51"), exports);
        tslib_1.__exportStar(require("./icons/chunk-52"), exports);
        tslib_1.__exportStar(require("./icons/chunk-53"), exports);
        tslib_1.__exportStar(require("./icons/chunk-54"), exports);
        tslib_1.__exportStar(require("./icons/chunk-55"), exports);
        tslib_1.__exportStar(require("./icons/chunk-56"), exports);
        tslib_1.__exportStar(require("./icons/chunk-57"), exports);
        tslib_1.__exportStar(require("./icons/chunk-58"), exports);
        tslib_1.__exportStar(require("./icons/chunk-59"), exports);
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
        tslib_1.__exportStar(require("./sizedIcons/chunk-38"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-39"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-40"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-41"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-42"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-43"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-44"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-45"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-46"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-47"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-48"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-49"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-50"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-51"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-52"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-53"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-54"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-55"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-56"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-57"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-58"), exports);
        tslib_1.__exportStar(require("./sizedIcons/chunk-59"), exports);
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
        export * from './icons/chunk-30';
        export * from './icons/chunk-31';
        export * from './icons/chunk-32';
        export * from './icons/chunk-33';
        export * from './icons/chunk-34';
        export * from './icons/chunk-35';
        export * from './icons/chunk-36';
        export * from './icons/chunk-37';
        export * from './icons/chunk-38';
        export * from './icons/chunk-39';
        export * from './icons/chunk-40';
        export * from './icons/chunk-41';
        export * from './icons/chunk-42';
        export * from './icons/chunk-43';
        export * from './icons/chunk-44';
        export * from './icons/chunk-45';
        export * from './icons/chunk-46';
        export * from './icons/chunk-47';
        export * from './icons/chunk-48';
        export * from './icons/chunk-49';
        export * from './icons/chunk-50';
        export * from './icons/chunk-51';
        export * from './icons/chunk-52';
        export * from './icons/chunk-53';
        export * from './icons/chunk-54';
        export * from './icons/chunk-55';
        export * from './icons/chunk-56';
        export * from './icons/chunk-57';
        export * from './icons/chunk-58';
        export * from './icons/chunk-59';
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
        export * from './sizedIcons/chunk-38';
        export * from './sizedIcons/chunk-39';
        export * from './sizedIcons/chunk-40';
        export * from './sizedIcons/chunk-41';
        export * from './sizedIcons/chunk-42';
        export * from './sizedIcons/chunk-43';
        export * from './sizedIcons/chunk-44';
        export * from './sizedIcons/chunk-45';
        export * from './sizedIcons/chunk-46';
        export * from './sizedIcons/chunk-47';
        export * from './sizedIcons/chunk-48';
        export * from './sizedIcons/chunk-49';
        export * from './sizedIcons/chunk-50';
        export * from './sizedIcons/chunk-51';
        export * from './sizedIcons/chunk-52';
        export * from './sizedIcons/chunk-53';
        export * from './sizedIcons/chunk-54';
        export * from './sizedIcons/chunk-55';
        export * from './sizedIcons/chunk-56';
        export * from './sizedIcons/chunk-57';
        export * from './sizedIcons/chunk-58';
        export * from './sizedIcons/chunk-59';
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
          import { createFluentIcon } from "../utils/createFluentIcon";
          export const AccessibilityRegular = ( /*#__PURE__*/createFluentIcon('AccessibilityRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 0 0 3.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2ZM4.07 5.44a.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.37l1.87 4.64a.75.75 0 0 1-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99Z"]));
          export const AddSquareMultipleRegular = ( /*#__PURE__*/createFluentIcon('AddSquareMultipleRegular', "1em", ["M16 5.27V13a3 3 0 0 1-3 3H5.27c.34.6.99 1 1.73 1h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.73ZM11.5 9.5a.5.5 0 0 0 0-1h-2v-2a.5.5 0 1 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2ZM13 3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8Zm1 2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5Z"]));
          export const AlertColor = ( /*#__PURE__*/createFluentIcon('AlertColor', "1em", \`<path d="M13 15a3 3 0 1 1-6.01 0 3 3 0 0 1 6 0Z" fill="url(#ic_fluent_alert_20_color__a)"/><path d="M9.99 2a5.92 5.92 0 0 1 5.98 5.36l.02.22V11.4l.95 2.6.03.08.01.09.01.09c0 .31-.2.59-.52.7l-.12.04H3.74a.75.75 0 0 1-.74-.76v-.11l.04-.13.95-2.59V7.57A5.9 5.9 0 0 1 10 2Z" fill="url(#ic_fluent_alert_20_color__b)"/><defs><linearGradient id="ic_fluent_alert_20_color__a" x1="10.01" y1="14.5" x2="10.01" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#EB4824"/><stop offset="1" stop-color="#FFCD0F" stop-opacity=".99"/></linearGradient><linearGradient id="ic_fluent_alert_20_color__b" x1="17.01" y1="15" x2="4.51" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6F47"/><stop offset="1" stop-color="#FFCD0F"/></linearGradient></defs>\`, { color: true }));
          export const AlignSpaceAroundVerticalRegular = ( /*#__PURE__*/createFluentIcon('AlignSpaceAroundVerticalRegular', "1em", ["M6 4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2ZM5 6v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Zm8-2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1Zm-1 2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6Z"]));
          export const AppsAddInOffRegular = ( /*#__PURE__*/createFluentIcon('AppsAddInOffRegular', "1em", ["M2.85 2.15a.5.5 0 1 0-.7.7l1.13 1.13A2 2 0 0 0 3 5v10c0 1.1.9 2 2 2h10a2 2 0 0 0 1.02-.28l1.13 1.13a.5.5 0 0 0 .7-.7l-15-15Zm12.4 13.82A1 1 0 0 1 15 16h-4.5v-4.8l4.76 4.77ZM8.8 9.5H4V5a1 1 0 0 1 .03-.26L8.8 9.5ZM9.5 5v2.38l1 1V5a2 2 0 0 0-2-2H5.12l1 1H8.5a1 1 0 0 1 1 1Zm3.12 5.5-1-1H15a2 2 0 0 1 2 2v3.38l-1-1V11.5a1 1 0 0 0-1-1h-2.38Zm1.88-8c.28 0 .5.22.5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0V6h-2a.5.5 0 0 1 0-1h2V3c0-.28.22-.5.5-.5ZM4 10.5h5.5V16H5a1 1 0 0 1-1-1v-4.5Z"]));
          export const ArrowAutofitContentRegular = ( /*#__PURE__*/createFluentIcon('ArrowAutofitContentRegular', "1em", ["M5.35 3.65c.2.2.2.5 0 .7L4.71 5H7.5a.5.5 0 0 1 0 1H4.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM5.5 9A2.5 2.5 0 0 0 3 11.5v3A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 14.5 9h-9ZM4 11.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-3Zm2 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H6Zm8.65-8.15a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H12.5a.5.5 0 0 1 0-1h2.8l-.65-.65Z"]));
          export const ArrowCounterclockwiseRegular = ( /*#__PURE__*/createFluentIcon('ArrowCounterclockwiseRegular', "1em", ["M16 10A6 6 0 0 0 5.53 6H7.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.6a7 7 0 1 1-1.98 4.36.5.5 0 0 1 1 .08L4 10a6 6 0 0 0 12 0Z"]));
          export const ArrowForwardDownPersonRegular = ( /*#__PURE__*/createFluentIcon('ArrowForwardDownPersonRegular', "1em", ["M13.61 4.32 16.3 7h-4.55C8.8 6.9 7 5.27 7 3a.5.5 0 0 0-1 0v.2C6.11 6.03 8.48 8 12 8h4.3l-2.69 2.68-.06.07a.5.5 0 0 0 .77.64l3.55-3.55.05-.07.04-.08.02-.06.02-.09v-.06.02a.5.5 0 0 0-.01-.1v-.03l-.03-.06-.03-.06-.05-.07-3.56-3.57-.07-.06a.5.5 0 0 0-.64.77ZM7.5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 15.5C9 16.74 8 18 5.5 18S2 16.75 2 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"], { flipInRtl: true }));
          export const ArrowRepeatAllOffRegular = ( /*#__PURE__*/createFluentIcon('ArrowRepeatAllOffRegular', "1em", ["M2.15 2.15a.5.5 0 0 1 .63-.06l.07.06 15 15 .06.07a.5.5 0 0 1-.7.7l-.06-.07-3-2.98a5 5 0 0 1-.85.12L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h6l.28-.01-7.72-7.72a4 4 0 0 0-1.66 6.25c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 4.8 5.5L2.15 2.85l-.06-.07a.5.5 0 0 1 .06-.63ZM16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02a4.98 4.98 0 0 1-.83 7.1l-.71-.72a4 4 0 0 0 .76-5.76.5.5 0 0 1 .39-.81ZM12.28 2.6l.07.06 2.5 2.5c.18.17.2.44.06.63l-.06.07-2.5 2.5a.5.5 0 0 1-.76-.63l.06-.07L13.28 6h-.14L13 6H8.1l-1-1h6.2l-1.65-1.65a.5.5 0 0 1-.06-.63l.06-.07a.5.5 0 0 1 .63-.06Z"], { flipInRtl: true }));
          export const ArrowRotateClockwiseFilled = ( /*#__PURE__*/createFluentIcon('ArrowRotateClockwiseFilled', "1em", ["M10 3.5A6.5 6.5 0 0 0 3.5 10 .75.75 0 0 1 2 10a8 8 0 1 1 12.66 6.5h1.09a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.23A6.5 6.5 0 0 0 10 3.5Zm2.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"], { flipInRtl: true }));
          export const ArrowSortFilled = ( /*#__PURE__*/createFluentIcon('ArrowSortFilled', "1em", ["M14.84 16.72a.76.76 0 0 1-.59.28.73.73 0 0 1-.53-.22l-3-3a.75.75 0 0 1 1.06-1.07l1.72 1.73V3.75a.75.75 0 0 1 1.5 0v10.68l1.72-1.71a.75.75 0 1 1 1.06 1.06l-2.94 2.94ZM6.34 3.28A.76.76 0 0 0 5.75 3c-.2 0-.38.07-.53.22l-3 3A.75.75 0 0 0 3.28 7.3L5 5.56v10.69a.75.75 0 0 0 1.5 0V5.57l1.72 1.71a.75.75 0 1 0 1.06-1.06L6.34 3.28Z"]));
          export const ArrowSplitFilled = ( /*#__PURE__*/createFluentIcon('ArrowSplitFilled', "1em", ["M10 3c.41 0 .75.34.75.75V8h2.24a2 2 0 0 1 2 2v4.44l1.23-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5c-.3.3-.77.3-1.07 0l-2.5-2.5a.75.75 0 1 1 1.07-1.06l1.21 1.22V10a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v4.44l1.23-1.22a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L5 14.44V10c0-1.1.9-2 2-2h2.25V3.75c0-.41.34-.75.75-.75Z"]));
          export const ArrowSquareDownFilled = ( /*#__PURE__*/createFluentIcon('ArrowSquareDownFilled', "1em", ["M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm5.5 3.5v5.8l2.65-2.65a.5.5 0 0 1 .7.7l-3.5 3.5a.5.5 0 0 1-.7 0l-3.5-3.5a.5.5 0 0 1 .7-.7l2.65 2.64V6.5a.5.5 0 0 1 1 0Z"]));
          export const ArrowStepInRightFilled = ( /*#__PURE__*/createFluentIcon('ArrowStepInRightFilled', "1em", ["M16 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM2 10c0-.28.22-.5.5-.5h7.8L7.14 6.35a.5.5 0 1 1 .7-.7l4 4c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7-.7l3.14-3.15H2.5A.5.5 0 0 1 2 10Z"]));
          export const ArrowTurnUpDownRegular = ( /*#__PURE__*/createFluentIcon('ArrowTurnUpDownRegular', "1em", ["M15.57 17a.5.5 0 0 0 .4-.31l2-5a.5.5 0 0 0-.93-.38l-1.54 3.84-4.59-11.52a1 1 0 0 0-1.85-.03L4.04 15.3a.5.5 0 0 0 .92.4L9.98 4l4.57 11.47-3.83-1.92a.5.5 0 0 0-.44.9l4.98 2.49c.1.05.2.07.3.06Z"]));
          export const ArrowWrapUpToDownFilled = ( /*#__PURE__*/createFluentIcon('ArrowWrapUpToDownFilled', "1em", ["M4 13.75a3.25 3.25 0 0 0 6.5 0v-7.5a1.75 1.75 0 1 1 3.5 0v9.19l-.22-.22a.75.75 0 1 0-1.06 1.06l1.5 1.5c.3.3.77.3 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.22.22V6.25a3.25 3.25 0 0 0-6.5 0v7.5a1.75 1.75 0 1 1-3.5 0v-10a.75.75 0 0 0-1.5 0v10Z"]));
          export const BackspaceFilled = ( /*#__PURE__*/createFluentIcon('BackspaceFilled', "1em", ["M8.28 4a2.5 2.5 0 0 0-1.7.66L2.8 8.16a2.5 2.5 0 0 0 0 3.68l3.79 3.5a2.5 2.5 0 0 0 1.7.66h7.21a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H8.28Zm.87 3.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7Z"]));
          export const BlurRegular = ( /*#__PURE__*/createFluentIcon('BlurRegular', "1em", ["M10 2a8 8 0 1 0 5.3 14H10v1a7 7 0 1 1 0-14h3.88A7.96 7.96 0 0 0 10 2Zm0 2h5.3c.34.3.66.64.95 1H10V4Zm6.93 2H10v1h7.42c-.14-.35-.3-.68-.49-1ZM10 8h7.75c.08.33.15.66.19 1H10V8Zm8 2h-8v1h7.94c.04-.33.06-.66.06-1Zm-8 2h7.75c-.09.34-.2.68-.33 1H10v-1Zm6.93 2H10v1h6.25a8 8 0 0 0 .68-1Z"]));
          export const BoardGamesFilled = ( /*#__PURE__*/createFluentIcon('BoardGamesFilled', "1em", ["M15.95 5.5a2.6 2.6 0 0 1 .98.18 2.5 2.5 0 1 1-2.29 4.42l.45 1.86c.2.78-.4 1.54-1.21 1.54h-.76c-.81 0-1.41-.76-1.22-1.55l.45-1.85a2.48 2.48 0 0 1-1.41.4 2 2 0 0 0-.7-1.07 3.99 3.99 0 0 0-.4-3.64 2.5 2.5 0 0 1 1.2-.29 2.5 2.5 0 0 1 2.46-3 2.5 2.5 0 0 1 2.45 3ZM6.5 5a3 3 0 0 0-2.24 5H4a1 1 0 1 0 0 2h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1 1 0 1 0 0-2h-.26A3 3 0 0 0 6.5 5Z"]));
          export const BookPulseFilled = ( /*#__PURE__*/createFluentIcon('BookPulseFilled', "1em", ["M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm5.46 2.3a.5.5 0 0 0-.9-.02L7.18 9H6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .45-.28l1.03-2.06 2.06 4.55a.5.5 0 0 0 .89.05L13.28 10h.22a.5.5 0 0 0 0-1H13a.5.5 0 0 0-.43.24l-1 1.69-2.11-4.64Z"]));
          export const BookToolboxFilled = ( /*#__PURE__*/createFluentIcon('BookToolboxFilled', "1em", ["M12 3v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V3h.5c.83 0 1.5.67 1.5 1.5V6h-2v-.5a.5.5 0 0 0-1 0V6h-3v-.5a.5.5 0 0 0-1 0V6h-2V4.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5V3h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM17 7h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 10 8.5V7h2v.5a.5.5 0 0 0 1 0V7h3v.5a.5.5 0 0 0 1 0V7Zm-5.96-4.96.01-.04H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 1 0 0-1H6a1 1 0 0 1-1-1h10.5a.5.5 0 0 0 .5-.5V11h-4.5A2.5 2.5 0 0 1 9 8.5v-4a2.5 2.5 0 0 1 2.04-2.46Z"]));
          export const BoxMultipleSearchFilled = ( /*#__PURE__*/createFluentIcon('BoxMultipleSearchFilled', "1em", ["M11.42 2.38a3 3 0 0 1 2.16 0l3.46 1.33c.58.22.96.78.96 1.4v7.78c0 .07 0 .15-.02.22A4.5 4.5 0 0 0 13.74 9a2.5 2.5 0 0 0-1.34-1.23L8.94 6.44A4 4 0 0 0 7 6.21V5.1c0-.62.38-1.18.96-1.4l3.46-1.33Zm4.67 2.44a.5.5 0 0 0-.64-.29L12.68 5.6a.5.5 0 0 1-.36 0L9.55 4.53a.5.5 0 0 0-.35.94l2.76 1.06c.35.13.73.13 1.08 0l2.76-1.06a.5.5 0 0 0 .3-.65ZM12.6 9.09a1.5 1.5 0 0 0-.56-.38L8.58 7.38a3 3 0 0 0-2.16 0L2.96 8.7A1.5 1.5 0 0 0 2 10.1v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 0 0 2.16 0l1.94-.75a4.49 4.49 0 0 1-1.02-5.43l-1.5.58v2.49a.5.5 0 0 1-1 0V12l-2.8-1.07a.5.5 0 1 1 .35-.93l2.95 1.13L10.45 10a.5.5 0 0 1 .25-.03c.54-.44 1.2-.75 1.9-.9Zm3.7 6.5a3.5 3.5 0 1 0-.7.7l2.55 2.56a.5.5 0 0 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"]));
          export const BoxSearchRegular = ( /*#__PURE__*/createFluentIcon('BoxSearchRegular', "1em", ["M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v7.64a1.5 1.5 0 0 1-.94 1.4l-5.76 2.3c-.48.19-.99.27-1.5.24a1.5 1.5 0 0 0-.24-.32l-.06-.06V8.84L3 6.24v2.79c-.35.04-.68.11-1 .23V6.18c0-.62.37-1.17.94-1.4l5.76-2.3Zm2.23.93a2.5 2.5 0 0 0-1.86 0l-1.35.54 6.16 2.46 2.27-.91-5.22-2.1Zm1.6 3.54L6.38 4.49l-2.53 1L10 7.97l2.53-1.01ZM17 6.24l-6.5 2.6v7.88c.15-.03.29-.07.43-.13l5.76-2.3a.5.5 0 0 0 .31-.47V6.24ZM3.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L6.3 15.6A3.5 3.5 0 1 0 3.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"]));
          export const BrainFilled = ( /*#__PURE__*/createFluentIcon('BrainFilled', "1em", ["M10.5 17.25a2.96 2.96 0 0 0 4.89-1.64l.04-.19a3.25 3.25 0 0 0 .77-6.08c.49-.46.8-1.11.8-1.84v-.2c0-1.28-.9-2.4-2.17-2.64l-.4-.08-.13-.63a2.42 2.42 0 0 0-3.8-1.49v14.8Zm-1-14.79a2.42 2.42 0 0 0-3.8 1.49l-.12.63-.41.08A2.7 2.7 0 0 0 3 7.3v.2c0 .73.31 1.38.8 1.84a3.25 3.25 0 0 0 .78 6.08l.03.19a2.97 2.97 0 0 0 4.89 1.64V2.46Z"]));
          export const BuildingHomeRegular = ( /*#__PURE__*/createFluentIcon('BuildingHomeRegular', "1em", ["M3.25 3a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25H7.5v1H3.25C2.56 15 2 14.44 2 13.75V3.25C2 2.56 2.56 2 3.25 2h5.5C9.44 2 10 2.56 10 3.25v2.5c0 .14.11.25.25.25h1.5c.69 0 1.25.56 1.25 1.25V8c-.35.04-.7.16-1 .37V7.25a.25.25 0 0 0-.25-.25h-1.5C9.56 7 9 6.44 9 5.75v-2.5A.25.25 0 0 0 8.75 3h-5.5Zm10.81 6.28c-.47-.4-1.15-.4-1.62 0l-3.47 2.96c-.3.26-.47.63-.47 1.02v4.61C8.5 18.5 9 19 9.63 19h1.74c.63 0 1.13-.5 1.13-1.13v-1.75c0-.06.06-.12.13-.12h1.24c.07 0 .13.06.13.13v1.74c0 .63.5 1.13 1.13 1.13h1.74c.63 0 1.13-.5 1.13-1.13v-4.61c0-.4-.17-.76-.47-1.02l-3.47-2.96Zm-.97.77c.1-.08.23-.08.32 0L16.88 13c.08.07.12.16.12.26v4.61c0 .07-.06.13-.13.13h-1.75a.12.12 0 0 1-.12-.13v-1.75c0-.62-.5-1.12-1.13-1.12h-1.24c-.63 0-1.13.5-1.13 1.13v1.74c0 .07-.06.13-.13.13H9.63a.12.12 0 0 1-.13-.13v-4.61c0-.1.04-.2.12-.26l3.47-2.95ZM5.5 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.25 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 7a.75.75 0 1 1-1.5 0A.75.75 0 0 1 8 7Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"]));
          export const ButtonRegular = ( /*#__PURE__*/createFluentIcon('ButtonRegular', "1em", ["M2 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Zm3-2a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5Zm4 3.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"]));
          export const Calendar3DayFilled = ( /*#__PURE__*/createFluentIcon('Calendar3DayFilled', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-8 3a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 6.5 6ZM10 6a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41A.5.5 0 0 0 10 6Zm3.5 0a.5.5 0 0 0-.5.41v7.18a.5.5 0 0 0 1 0V6.41a.5.5 0 0 0-.5-.41Z"]));
          export const CalendarQuestionMarkRegular = ( /*#__PURE__*/createFluentIcon('CalendarQuestionMarkRegular', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.62-2a.62.62 0 1 1 1.24 0 .62.62 0 0 1-1.24 0Zm-1.23-3.54c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 0 1-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 1 1-1 0Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AccessibilityRegular: FluentIcon;
          export declare const AddSquareMultipleRegular: FluentIcon;
          export declare const AlertColor: FluentIcon;
          export declare const AlignSpaceAroundVerticalRegular: FluentIcon;
          export declare const AppsAddInOffRegular: FluentIcon;
          export declare const ArrowAutofitContentRegular: FluentIcon;
          export declare const ArrowCounterclockwiseRegular: FluentIcon;
          export declare const ArrowForwardDownPersonRegular: FluentIcon;
          export declare const ArrowRepeatAllOffRegular: FluentIcon;
          export declare const ArrowRotateClockwiseFilled: FluentIcon;
          export declare const ArrowSortFilled: FluentIcon;
          export declare const ArrowSplitFilled: FluentIcon;
          export declare const ArrowSquareDownFilled: FluentIcon;
          export declare const ArrowStepInRightFilled: FluentIcon;
          export declare const ArrowTurnUpDownRegular: FluentIcon;
          export declare const ArrowWrapUpToDownFilled: FluentIcon;
          export declare const BackspaceFilled: FluentIcon;
          export declare const BlurRegular: FluentIcon;
          export declare const BoardGamesFilled: FluentIcon;
          export declare const BookPulseFilled: FluentIcon;
          export declare const BookToolboxFilled: FluentIcon;
          export declare const BoxMultipleSearchFilled: FluentIcon;
          export declare const BoxSearchRegular: FluentIcon;
          export declare const BrainFilled: FluentIcon;
          export declare const BuildingHomeRegular: FluentIcon;
          export declare const ButtonRegular: FluentIcon;
          export declare const Calendar3DayFilled: FluentIcon;
          export declare const CalendarQuestionMarkRegular: FluentIcon;
          export declare const CalendarToolboxFilled: FluentIcon;
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
          "... (5 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.AccessibilityRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 0 0 3.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2ZM4.07 5.44a.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.37l1.87 4.64a.75.75 0 0 1-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99Z"]));
          exports.AddSquareMultipleRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddSquareMultipleRegular', "1em", ["M16 5.27V13a3 3 0 0 1-3 3H5.27c.34.6.99 1 1.73 1h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.73ZM11.5 9.5a.5.5 0 0 0 0-1h-2v-2a.5.5 0 1 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2ZM13 3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8Zm1 2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5Z"]));
          exports.AlertColor = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlertColor', "1em", \`<path d="M13 15a3 3 0 1 1-6.01 0 3 3 0 0 1 6 0Z" fill="url(#ic_fluent_alert_20_color__a)"/><path d="M9.99 2a5.92 5.92 0 0 1 5.98 5.36l.02.22V11.4l.95 2.6.03.08.01.09.01.09c0 .31-.2.59-.52.7l-.12.04H3.74a.75.75 0 0 1-.74-.76v-.11l.04-.13.95-2.59V7.57A5.9 5.9 0 0 1 10 2Z" fill="url(#ic_fluent_alert_20_color__b)"/><defs><linearGradient id="ic_fluent_alert_20_color__a" x1="10.01" y1="14.5" x2="10.01" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#EB4824"/><stop offset="1" stop-color="#FFCD0F" stop-opacity=".99"/></linearGradient><linearGradient id="ic_fluent_alert_20_color__b" x1="17.01" y1="15" x2="4.51" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6F47"/><stop offset="1" stop-color="#FFCD0F"/></linearGradient></defs>\`, { color: true }));
          exports.AlignSpaceAroundVerticalRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignSpaceAroundVerticalRegular', "1em", ["M6 4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2ZM5 6v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Zm8-2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1Zm-1 2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6Z"]));
          exports.AppsAddInOffRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsAddInOffRegular', "1em", ["M2.85 2.15a.5.5 0 1 0-.7.7l1.13 1.13A2 2 0 0 0 3 5v10c0 1.1.9 2 2 2h10a2 2 0 0 0 1.02-.28l1.13 1.13a.5.5 0 0 0 .7-.7l-15-15Zm12.4 13.82A1 1 0 0 1 15 16h-4.5v-4.8l4.76 4.77ZM8.8 9.5H4V5a1 1 0 0 1 .03-.26L8.8 9.5ZM9.5 5v2.38l1 1V5a2 2 0 0 0-2-2H5.12l1 1H8.5a1 1 0 0 1 1 1Zm3.12 5.5-1-1H15a2 2 0 0 1 2 2v3.38l-1-1V11.5a1 1 0 0 0-1-1h-2.38Zm1.88-8c.28 0 .5.22.5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0V6h-2a.5.5 0 0 1 0-1h2V3c0-.28.22-.5.5-.5ZM4 10.5h5.5V16H5a1 1 0 0 1-1-1v-4.5Z"]));
          exports.ArrowAutofitContentRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowAutofitContentRegular', "1em", ["M5.35 3.65c.2.2.2.5 0 .7L4.71 5H7.5a.5.5 0 0 1 0 1H4.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM5.5 9A2.5 2.5 0 0 0 3 11.5v3A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 14.5 9h-9ZM4 11.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-3Zm2 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H6Zm8.65-8.15a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H12.5a.5.5 0 0 1 0-1h2.8l-.65-.65Z"]));
          exports.ArrowCounterclockwiseRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCounterclockwiseRegular', "1em", ["M16 10A6 6 0 0 0 5.53 6H7.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.6a7 7 0 1 1-1.98 4.36.5.5 0 0 1 1 .08L4 10a6 6 0 0 0 12 0Z"]));
          exports.ArrowForwardDownPersonRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowForwardDownPersonRegular', "1em", ["M13.61 4.32 16.3 7h-4.55C8.8 6.9 7 5.27 7 3a.5.5 0 0 0-1 0v.2C6.11 6.03 8.48 8 12 8h4.3l-2.69 2.68-.06.07a.5.5 0 0 0 .77.64l3.55-3.55.05-.07.04-.08.02-.06.02-.09v-.06.02a.5.5 0 0 0-.01-.1v-.03l-.03-.06-.03-.06-.05-.07-3.56-3.57-.07-.06a.5.5 0 0 0-.64.77ZM7.5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 15.5C9 16.74 8 18 5.5 18S2 16.75 2 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"], { flipInRtl: true }));
          exports.ArrowRepeatAllOffRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowRepeatAllOffRegular', "1em", ["M2.15 2.15a.5.5 0 0 1 .63-.06l.07.06 15 15 .06.07a.5.5 0 0 1-.7.7l-.06-.07-3-2.98a5 5 0 0 1-.85.12L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h6l.28-.01-7.72-7.72a4 4 0 0 0-1.66 6.25c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 4.8 5.5L2.15 2.85l-.06-.07a.5.5 0 0 1 .06-.63ZM16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02a4.98 4.98 0 0 1-.83 7.1l-.71-.72a4 4 0 0 0 .76-5.76.5.5 0 0 1 .39-.81ZM12.28 2.6l.07.06 2.5 2.5c.18.17.2.44.06.63l-.06.07-2.5 2.5a.5.5 0 0 1-.76-.63l.06-.07L13.28 6h-.14L13 6H8.1l-1-1h6.2l-1.65-1.65a.5.5 0 0 1-.06-.63l.06-.07a.5.5 0 0 1 .63-.06Z"], { flipInRtl: true }));
          exports.ArrowRotateClockwiseFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowRotateClockwiseFilled', "1em", ["M10 3.5A6.5 6.5 0 0 0 3.5 10 .75.75 0 0 1 2 10a8 8 0 1 1 12.66 6.5h1.09a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.23A6.5 6.5 0 0 0 10 3.5Zm2.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM11 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"], { flipInRtl: true }));
          exports.ArrowSortFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowSortFilled', "1em", ["M14.84 16.72a.76.76 0 0 1-.59.28.73.73 0 0 1-.53-.22l-3-3a.75.75 0 0 1 1.06-1.07l1.72 1.73V3.75a.75.75 0 0 1 1.5 0v10.68l1.72-1.71a.75.75 0 1 1 1.06 1.06l-2.94 2.94ZM6.34 3.28A.76.76 0 0 0 5.75 3c-.2 0-.38.07-.53.22l-3 3A.75.75 0 0 0 3.28 7.3L5 5.56v10.69a.75.75 0 0 0 1.5 0V5.57l1.72 1.71a.75.75 0 1 0 1.06-1.06L6.34 3.28Z"]));
          exports.ArrowSplitFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowSplitFilled', "1em", ["M10 3c.41 0 .75.34.75.75V8h2.24a2 2 0 0 1 2 2v4.44l1.23-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5c-.3.3-.77.3-1.07 0l-2.5-2.5a.75.75 0 1 1 1.07-1.06l1.21 1.22V10a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v4.44l1.23-1.22a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L5 14.44V10c0-1.1.9-2 2-2h2.25V3.75c0-.41.34-.75.75-.75Z"]));
          exports.ArrowSquareDownFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowSquareDownFilled', "1em", ["M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm5.5 3.5v5.8l2.65-2.65a.5.5 0 0 1 .7.7l-3.5 3.5a.5.5 0 0 1-.7 0l-3.5-3.5a.5.5 0 0 1 .7-.7l2.65 2.64V6.5a.5.5 0 0 1 1 0Z"]));
          exports.ArrowStepInRightFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowStepInRightFilled', "1em", ["M16 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM2 10c0-.28.22-.5.5-.5h7.8L7.14 6.35a.5.5 0 1 1 .7-.7l4 4c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7-.7l3.14-3.15H2.5A.5.5 0 0 1 2 10Z"]));
          exports.ArrowTurnUpDownRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowTurnUpDownRegular', "1em", ["M15.57 17a.5.5 0 0 0 .4-.31l2-5a.5.5 0 0 0-.93-.38l-1.54 3.84-4.59-11.52a1 1 0 0 0-1.85-.03L4.04 15.3a.5.5 0 0 0 .92.4L9.98 4l4.57 11.47-3.83-1.92a.5.5 0 0 0-.44.9l4.98 2.49c.1.05.2.07.3.06Z"]));
          exports.ArrowWrapUpToDownFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowWrapUpToDownFilled', "1em", ["M4 13.75a3.25 3.25 0 0 0 6.5 0v-7.5a1.75 1.75 0 1 1 3.5 0v9.19l-.22-.22a.75.75 0 1 0-1.06 1.06l1.5 1.5c.3.3.77.3 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.22.22V6.25a3.25 3.25 0 0 0-6.5 0v7.5a1.75 1.75 0 1 1-3.5 0v-10a.75.75 0 0 0-1.5 0v10Z"]));
          exports.BackspaceFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BackspaceFilled', "1em", ["M8.28 4a2.5 2.5 0 0 0-1.7.66L2.8 8.16a2.5 2.5 0 0 0 0 3.68l3.79 3.5a2.5 2.5 0 0 0 1.7.66h7.21a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H8.28Zm.87 3.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7Z"]));
          exports.BlurRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BlurRegular', "1em", ["M10 2a8 8 0 1 0 5.3 14H10v1a7 7 0 1 1 0-14h3.88A7.96 7.96 0 0 0 10 2Zm0 2h5.3c.34.3.66.64.95 1H10V4Zm6.93 2H10v1h7.42c-.14-.35-.3-.68-.49-1ZM10 8h7.75c.08.33.15.66.19 1H10V8Zm8 2h-8v1h7.94c.04-.33.06-.66.06-1Zm-8 2h7.75c-.09.34-.2.68-.33 1H10v-1Zm6.93 2H10v1h6.25a8 8 0 0 0 .68-1Z"]));
          exports.BoardGamesFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BoardGamesFilled', "1em", ["M15.95 5.5a2.6 2.6 0 0 1 .98.18 2.5 2.5 0 1 1-2.29 4.42l.45 1.86c.2.78-.4 1.54-1.21 1.54h-.76c-.81 0-1.41-.76-1.22-1.55l.45-1.85a2.48 2.48 0 0 1-1.41.4 2 2 0 0 0-.7-1.07 3.99 3.99 0 0 0-.4-3.64 2.5 2.5 0 0 1 1.2-.29 2.5 2.5 0 0 1 2.46-3 2.5 2.5 0 0 1 2.45 3ZM6.5 5a3 3 0 0 0-2.24 5H4a1 1 0 1 0 0 2h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1 1 0 1 0 0-2h-.26A3 3 0 0 0 6.5 5Z"]));
          exports.BookPulseFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BookPulseFilled', "1em", ["M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm5.46 2.3a.5.5 0 0 0-.9-.02L7.18 9H6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .45-.28l1.03-2.06 2.06 4.55a.5.5 0 0 0 .89.05L13.28 10h.22a.5.5 0 0 0 0-1H13a.5.5 0 0 0-.43.24l-1 1.69-2.11-4.64Z"]));
          exports.BookToolboxFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BookToolboxFilled', "1em", ["M12 3v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V3h.5c.83 0 1.5.67 1.5 1.5V6h-2v-.5a.5.5 0 0 0-1 0V6h-3v-.5a.5.5 0 0 0-1 0V6h-2V4.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5V3h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM17 7h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 10 8.5V7h2v.5a.5.5 0 0 0 1 0V7h3v.5a.5.5 0 0 0 1 0V7Zm-5.96-4.96.01-.04H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 1 0 0-1H6a1 1 0 0 1-1-1h10.5a.5.5 0 0 0 .5-.5V11h-4.5A2.5 2.5 0 0 1 9 8.5v-4a2.5 2.5 0 0 1 2.04-2.46Z"]));
          exports.BoxMultipleSearchFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BoxMultipleSearchFilled', "1em", ["M11.42 2.38a3 3 0 0 1 2.16 0l3.46 1.33c.58.22.96.78.96 1.4v7.78c0 .07 0 .15-.02.22A4.5 4.5 0 0 0 13.74 9a2.5 2.5 0 0 0-1.34-1.23L8.94 6.44A4 4 0 0 0 7 6.21V5.1c0-.62.38-1.18.96-1.4l3.46-1.33Zm4.67 2.44a.5.5 0 0 0-.64-.29L12.68 5.6a.5.5 0 0 1-.36 0L9.55 4.53a.5.5 0 0 0-.35.94l2.76 1.06c.35.13.73.13 1.08 0l2.76-1.06a.5.5 0 0 0 .3-.65ZM12.6 9.09a1.5 1.5 0 0 0-.56-.38L8.58 7.38a3 3 0 0 0-2.16 0L2.96 8.7A1.5 1.5 0 0 0 2 10.1v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 0 0 2.16 0l1.94-.75a4.49 4.49 0 0 1-1.02-5.43l-1.5.58v2.49a.5.5 0 0 1-1 0V12l-2.8-1.07a.5.5 0 1 1 .35-.93l2.95 1.13L10.45 10a.5.5 0 0 1 .25-.03c.54-.44 1.2-.75 1.9-.9Zm3.7 6.5a3.5 3.5 0 1 0-.7.7l2.55 2.56a.5.5 0 0 0 .7-.7L16.3 15.6Zm-.3-2.1a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"]));
          exports.BoxSearchRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BoxSearchRegular', "1em", ["M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v7.64a1.5 1.5 0 0 1-.94 1.4l-5.76 2.3c-.48.19-.99.27-1.5.24a1.5 1.5 0 0 0-.24-.32l-.06-.06V8.84L3 6.24v2.79c-.35.04-.68.11-1 .23V6.18c0-.62.37-1.17.94-1.4l5.76-2.3Zm2.23.93a2.5 2.5 0 0 0-1.86 0l-1.35.54 6.16 2.46 2.27-.91-5.22-2.1Zm1.6 3.54L6.38 4.49l-2.53 1L10 7.97l2.53-1.01ZM17 6.24l-6.5 2.6v7.88c.15-.03.29-.07.43-.13l5.76-2.3a.5.5 0 0 0 .31-.47V6.24ZM3.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L6.3 15.6A3.5 3.5 0 1 0 3.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"]));
          exports.BrainFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BrainFilled', "1em", ["M10.5 17.25a2.96 2.96 0 0 0 4.89-1.64l.04-.19a3.25 3.25 0 0 0 .77-6.08c.49-.46.8-1.11.8-1.84v-.2c0-1.28-.9-2.4-2.17-2.64l-.4-.08-.13-.63a2.42 2.42 0 0 0-3.8-1.49v14.8Zm-1-14.79a2.42 2.42 0 0 0-3.8 1.49l-.12.63-.41.08A2.7 2.7 0 0 0 3 7.3v.2c0 .73.31 1.38.8 1.84a3.25 3.25 0 0 0 .78 6.08l.03.19a2.97 2.97 0 0 0 4.89 1.64V2.46Z"]));
          exports.BuildingHomeRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BuildingHomeRegular', "1em", ["M3.25 3a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25H7.5v1H3.25C2.56 15 2 14.44 2 13.75V3.25C2 2.56 2.56 2 3.25 2h5.5C9.44 2 10 2.56 10 3.25v2.5c0 .14.11.25.25.25h1.5c.69 0 1.25.56 1.25 1.25V8c-.35.04-.7.16-1 .37V7.25a.25.25 0 0 0-.25-.25h-1.5C9.56 7 9 6.44 9 5.75v-2.5A.25.25 0 0 0 8.75 3h-5.5Zm10.81 6.28c-.47-.4-1.15-.4-1.62 0l-3.47 2.96c-.3.26-.47.63-.47 1.02v4.61C8.5 18.5 9 19 9.63 19h1.74c.63 0 1.13-.5 1.13-1.13v-1.75c0-.06.06-.12.13-.12h1.24c.07 0 .13.06.13.13v1.74c0 .63.5 1.13 1.13 1.13h1.74c.63 0 1.13-.5 1.13-1.13v-4.61c0-.4-.17-.76-.47-1.02l-3.47-2.96Zm-.97.77c.1-.08.23-.08.32 0L16.88 13c.08.07.12.16.12.26v4.61c0 .07-.06.13-.13.13h-1.75a.12.12 0 0 1-.12-.13v-1.75c0-.62-.5-1.12-1.13-1.12h-1.24c-.63 0-1.13.5-1.13 1.13v1.74c0 .07-.06.13-.13.13H9.63a.12.12 0 0 1-.13-.13v-4.61c0-.1.04-.2.12-.26l3.47-2.95ZM5.5 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.25 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 7a.75.75 0 1 1-1.5 0A.75.75 0 0 1 8 7Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AccessibilityRegular: FluentIcon;
          export declare const AddSquareMultipleRegular: FluentIcon;
          export declare const AlertColor: FluentIcon;
          export declare const AlignSpaceAroundVerticalRegular: FluentIcon;
          export declare const AppsAddInOffRegular: FluentIcon;
          export declare const ArrowAutofitContentRegular: FluentIcon;
          export declare const ArrowCounterclockwiseRegular: FluentIcon;
          export declare const ArrowForwardDownPersonRegular: FluentIcon;
          export declare const ArrowRepeatAllOffRegular: FluentIcon;
          export declare const ArrowRotateClockwiseFilled: FluentIcon;
          export declare const ArrowSortFilled: FluentIcon;
          export declare const ArrowSplitFilled: FluentIcon;
          export declare const ArrowSquareDownFilled: FluentIcon;
          export declare const ArrowStepInRightFilled: FluentIcon;
          export declare const ArrowTurnUpDownRegular: FluentIcon;
          export declare const ArrowWrapUpToDownFilled: FluentIcon;
          export declare const BackspaceFilled: FluentIcon;
          export declare const BlurRegular: FluentIcon;
          export declare const BoardGamesFilled: FluentIcon;
          export declare const BookPulseFilled: FluentIcon;
          export declare const BookToolboxFilled: FluentIcon;
          export declare const BoxMultipleSearchFilled: FluentIcon;
          export declare const BoxSearchRegular: FluentIcon;
          export declare const BrainFilled: FluentIcon;
          export declare const BuildingHomeRegular: FluentIcon;
          export declare const ButtonRegular: FluentIcon;
          export declare const Calendar3DayFilled: FluentIcon;
          export declare const CalendarQuestionMarkRegular: FluentIcon;
          export declare const CalendarToolboxFilled: FluentIcon;
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
          import { createFluentIcon } from "../utils/createFluentIcon";
          export const Accessibility28Regular = ( /*#__PURE__*/createFluentIcon('Accessibility28Regular', "28", ["M12 5.5a2 2 0 0 0 1.5 1.93c.33.06.67.06 1 0A2 2 0 1 0 12 5.5Zm-1.34 1.06a3.5 3.5 0 1 1 6.68 0l4.42-1.44a2.48 2.48 0 1 1 1.53 4.71L18 11.55v3.82c0 .16.03.32.1.47l2.72 6.75a2.48 2.48 0 0 1-4.6 1.86l-2.24-5.55-2.23 5.56a2.46 2.46 0 0 1-3.2 1.36 2.48 2.48 0 0 1-1.37-3.22l2.73-6.8c.06-.16.09-.31.09-.47v-3.78L4.71 9.83a2.48 2.48 0 0 1 1.53-4.7l4.42 1.43Zm2.52 2.34c-.22-.03-.43-.09-.65-.16l-6.75-2.2a.98.98 0 0 0-.6 1.87l5.46 1.77c.51.17.86.65.86 1.19v3.96c0 .35-.07.7-.2 1.02l-2.73 6.81c-.2.5.04 1.07.54 1.27a.96.96 0 0 0 1.25-.53l2.46-6.14a1.25 1.25 0 0 1 2.32 0l2.48 6.13a.98.98 0 1 0 1.8-.73L16.7 16.4c-.13-.32-.2-.67-.2-1.03v-4c0-.54.35-1.02.86-1.19l5.46-1.77a.98.98 0 1 0-.6-1.86l-6.75 2.2c-.22.06-.43.12-.65.15a3.5 3.5 0 0 1-1.64 0Z"]));
          export const AccessibilityError20Filled = ( /*#__PURE__*/createFluentIcon('AccessibilityError20Filled', "20", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"]));
          export const AccessibilityQuestionMark20Regular = ( /*#__PURE__*/createFluentIcon('AccessibilityQuestionMark20Regular', "20", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.5 2.5 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z"]));
          export const AddCircle12Filled = ( /*#__PURE__*/createFluentIcon('AddCircle12Filled', "12", ["M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm5-2.5a.42.42 0 0 0-.42.42v1.66H3.92a.42.42 0 0 0 0 .84h1.66v1.66a.42.42 0 0 0 .84 0V6.42h1.66a.42.42 0 0 0 0-.84H6.42V3.92A.42.42 0 0 0 6 3.5Z"]));
          export const AddCircle32Regular = ( /*#__PURE__*/createFluentIcon('AddCircle32Regular', "32", ["M15 10a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5h-5a1 1 0 1 1 0-2h5v-5Zm15 6a14 14 0 1 1-28 0 14 14 0 0 1 28 0Zm-2 0a12 12 0 1 0-24 0 12 12 0 0 0 24 0Z"]));
          export const AddStarburst16Filled = ( /*#__PURE__*/createFluentIcon('AddStarburst16Filled', "16", ["M8 .02c.16 0 .3.07.4.2l1.3 1.67a.5.5 0 0 0 .53.17l2.03-.6a.5.5 0 0 1 .64.47l.06 2.12c.01.2.14.39.34.45l1.99.72a.5.5 0 0 1 .24.75l-1.19 1.75a.5.5 0 0 0 0 .56l1.2 1.75a.5.5 0 0 1-.25.75l-2 .72a.5.5 0 0 0-.33.45l-.06 2.12a.5.5 0 0 1-.64.46l-2.03-.6a.5.5 0 0 0-.53.18L8.4 15.8a.5.5 0 0 1-.79 0l-1.3-1.68a.5.5 0 0 0-.53-.17l-2.03.6a.5.5 0 0 1-.64-.47l-.06-2.12a.5.5 0 0 0-.33-.45l-2-.72a.5.5 0 0 1-.24-.75l1.2-1.75a.5.5 0 0 0 0-.56L.47 5.97a.5.5 0 0 1 .24-.75l2-.72a.5.5 0 0 0 .33-.45l.06-2.12a.5.5 0 0 1 .64-.46l2.03.6a.5.5 0 0 0 .54-.18L7.6.2a.5.5 0 0 1 .4-.2ZM8 4.5a.5.5 0 0 0-.5.5v2.5H5a.5.5 0 0 0 0 1h2.5V11a.5.5 0 0 0 1 0V8.5H11a.5.5 0 0 0 0-1H8.5V5a.5.5 0 0 0-.5-.5Z"]));
          export const AddSubtractCircle28Regular = ( /*#__PURE__*/createFluentIcon('AddSubtractCircle28Regular', "28", ["M15.2 18.05c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM10.99 7.7a.75.75 0 1 0-1.5 0v1.8H7.75a.75.75 0 0 0 0 1.5H9.5v1.75a.75.75 0 0 0 1.5 0V11h1.75a.75.75 0 0 0 0-1.5h-1.76V7.7ZM14 26a12 12 0 1 1 0-24 12 12 0 0 1 0 24Zm0-1.5a10.5 10.5 0 0 0 7.94-17.38L7.12 21.94A10.46 10.46 0 0 0 14 24.5Zm-7.94-3.62L20.88 6.06A10.5 10.5 0 0 0 6.07 20.87Z"]));
          export const Agents28Filled = ( /*#__PURE__*/createFluentIcon('Agents28Filled', "28", ["M14.8 3a4.38 4.38 0 0 0-.94 1.74l-4.7 17.32a.75.75 0 0 0 1.45.39l4.7-17.32A2.89 2.89 0 0 1 18.09 3h.03c1.16 0 2.23.62 2.81 1.63l4.77 8.25c.4.7.4 1.55 0 2.24l-5.06 8.76c-.4.7-1.14 1.12-1.94 1.12H13.2c.43-.49.75-1.08.93-1.74l4.7-17.31a.75.75 0 1 0-1.45-.4l-4.7 17.32A2.89 2.89 0 0 1 9.92 25h-.03a3.25 3.25 0 0 1-2.82-1.63L2.3 15.13c-.4-.7-.4-1.55 0-2.24l5.05-8.76C7.75 3.42 8.5 3 9.3 3h5.5Z"]));
          export const AirplaneLanding24Regular = ( /*#__PURE__*/createFluentIcon('AirplaneLanding24Regular', "24", ["M11.5 7.49V5.04c0-.58.79-.75 1.03-.22l1.42 3.2h-1a.64.64 0 0 1-.23-.05L11.5 7.5Zm4.1.53-1.7-3.8C13 2.2 10 2.83 10 5.03v1.85l-1.5-.6V4.77a1.75 1.75 0 0 0-3.21-.96L3.38 6.7a2.3 2.3 0 0 0 1.04 3.4l3.5 1.46-2.05 1.9c-1.62 1.5 0 4.16 2.09 3.4l6.76-2.46 3.46 1.44A2.04 2.04 0 0 0 21 13.96v-1.23c0-2.6-2.11-4.71-4.72-4.71h-.69ZM7 6.95c0 .22.13.42.34.5l4.83 1.92c.25.1.52.15.79.15h3.32a3.22 3.22 0 0 1 3.22 3.21v1.23c0 .39-.39.65-.74.5l-3.64-1.52a1 1 0 0 0-.73-.02l-6.95 2.53c-.55.2-.97-.5-.55-.9l2.62-2.42a1 1 0 0 0-.3-1.66L5 8.71a.8.8 0 0 1-.36-1.18l1.91-2.91c.14-.2.46-.11.46.14v2.2Zm-4 13.3c0-.41.34-.75.75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"]));
          export const Album20Regular = ( /*#__PURE__*/createFluentIcon('Album20Regular', "20", ["M8 8.5C8 7.67 8.67 7 9.5 7h4c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 8 9.5v-1ZM9.5 8a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4ZM2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm4 9h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6v10ZM5 5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1V5Z"], { flipInRtl: true }));
          export const AlertSnooze12Filled = ( /*#__PURE__*/createFluentIcon('AlertSnooze12Filled', "12", ["M6.09 1A1.5 1.5 0 0 0 7.5 3L6.3 4.6A1.5 1.5 0 0 0 7.5 7h2.8l.65 1.28a.5.5 0 0 1-.45.72h-9a.5.5 0 0 1-.45-.72L2 6.38V5a4 4 0 0 1 4.09-4Zm-2.03 9a2 2 0 0 0 3.88 0H4.06ZM7.5 1a.5.5 0 0 0 0 1h2L7.1 5.2a.5.5 0 0 0 .4.8h3a.5.5 0 0 0 0-1h-2l2.4-3.2a.5.5 0 0 0-.4-.8h-3Z"]));
          export const AlignLeft48Regular = ( /*#__PURE__*/createFluentIcon('AlignLeft48Regular', "48", ["M6.5 5.25a1.25 1.25 0 1 1 2.5 0v37.5a1.25 1.25 0 1 1-2.5 0V5.25ZM15.75 26a4.25 4.25 0 0 0-4.25 4.25v5.5c0 2.35 1.9 4.25 4.25 4.25h15C33.1 40 35 38.1 35 35.75v-5.5C35 27.9 33.1 26 30.75 26h-15ZM14 30.25c0-.97.78-1.75 1.75-1.75h15c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75h-15c-.97 0-1.75-.78-1.75-1.75v-5.5Zm-2.5-18v5.5c0 2.35 1.9 4.25 4.25 4.25H38c2.35 0 4.25-1.9 4.25-4.25v-5.5C42.25 9.9 40.35 8 38 8H15.75a4.25 4.25 0 0 0-4.25 4.25Zm2.5 5.5v-5.5c0-.97.78-1.75 1.75-1.75H38c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75H15.75c-.97 0-1.75-.78-1.75-1.75Z"]));
          export const AlignSpaceEvenlyVertical20Regular = ( /*#__PURE__*/createFluentIcon('AlignSpaceEvenlyVertical20Regular', "20", ["M4 3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6Z", "M4 15c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1Zm2-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6Z", "M6 7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Z"]));
          export const AlignStartHorizontal20Regular = ( /*#__PURE__*/createFluentIcon('AlignStartHorizontal20Regular', "20", ["M3.5 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Z", "M8 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8ZM7 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6Z"]));
          export const AlignStretchVertical16Filled = ( /*#__PURE__*/createFluentIcon('AlignStretchVertical16Filled', "16", ["M1.5 13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0-11a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm3 10A1.5 1.5 0 0 1 3 10.5v-5C3 4.67 3.67 4 4.5 4h1C6.33 4 7 4.67 7 5.5v5c0 .83-.67 1.5-1.5 1.5h-1ZM9 10.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-1C9.67 4 9 4.67 9 5.5v5Z"]));
          export const AnimalCat20Filled = ( /*#__PURE__*/createFluentIcon('AnimalCat20Filled', "20", ["M4.97 18H13v-1.5a2.5 2.5 0 0 0-2.5-2.5h-1a.5.5 0 0 1 0-1h1a3.5 3.5 0 0 1 3.5 3.5V18h.25c.47 0 .9-.2 1.21-.5h.04v-.04c.29-.3.47-.72.47-1.18v-7.6a2.12 2.12 0 0 0 1.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 0 0-.99-.99 2.45 2.45 0 0 0-2.44 2.45V7.9a4.28 4.28 0 0 0-2.95 1.58 6.69 6.69 0 0 0-1.04 1.8c-.23.46-.39.96-.47 1.49l-.01.06A17.04 17.04 0 0 0 5.63 17h-.66a1.97 1.97 0 0 1-1.44-3.32l.92-.98a3.59 3.59 0 0 0-.09-4.99l-.9-.9a.5.5 0 1 0-.7.7l.9.9a2.59 2.59 0 0 1 .06 3.6l-.92 1A2.97 2.97 0 0 0 4.97 18Z"]));
          export const AnimalPawPrint24Regular = ( /*#__PURE__*/createFluentIcon('AnimalPawPrint24Regular', "24", ["M7.75 5.25c0-.79.54-1.25 1-1.25.46 0 1 .46 1 1.25s-.54 1.25-1 1.25c-.46 0-1-.46-1-1.25Zm1-2.75c-1.47 0-2.5 1.33-2.5 2.75S7.28 8 8.75 8s2.5-1.33 2.5-2.75-1.03-2.75-2.5-2.75Zm-5.25 5c-.46 0-1 .46-1 1.25S3.04 10 3.5 10c.46 0 1-.46 1-1.25s-.54-1.25-1-1.25ZM1 8.75C1 7.33 2.03 6 3.5 6S6 7.33 6 8.75 4.97 11.5 3.5 11.5 1 10.17 1 8.75Zm11 2.75A5.5 5.5 0 0 0 6.5 17c0 .76.38 1.36 1.04 1.8.67.45 1.6.7 2.54.7h3.84c.94 0 1.87-.25 2.54-.7A2.1 2.1 0 0 0 17.5 17a5.5 5.5 0 0 0-5.5-5.5ZM5 17a7 7 0 1 1 14 0 3.6 3.6 0 0 1-1.7 3.04c-.96.65-2.2.96-3.38.96h-3.84a6.17 6.17 0 0 1-3.38-.96A3.6 3.6 0 0 1 5 17ZM15.25 4c-.46 0-1 .46-1 1.25s.54 1.25 1 1.25c.46 0 1-.46 1-1.25S15.71 4 15.25 4Zm-2.5 1.25c0-1.42 1.03-2.75 2.5-2.75s2.5 1.33 2.5 2.75S16.72 8 15.25 8s-2.5-1.33-2.5-2.75Zm6.75 3.5c0-.79.54-1.25 1-1.25.46 0 1 .46 1 1.25s-.54 1.25-1 1.25c-.46 0-1-.46-1-1.25Zm1-2.75C19.03 6 18 7.33 18 8.75s1.03 2.75 2.5 2.75S23 10.17 23 8.75 21.97 6 20.5 6Z"]));
          export const AppsAddIn28Regular = ( /*#__PURE__*/createFluentIcon('AppsAddIn28Regular', "28", ["M21.25 2c.41 0 .75.34.75.75V6h3.25a.75.75 0 0 1 0 1.5H22v3.25a.75.75 0 0 1-1.5 0V7.5h-3.25a.75.75 0 0 1 0-1.5h3.25V2.75c0-.41.34-.75.75-.75ZM5.75 3A2.75 2.75 0 0 0 3 5.75v16.5A2.75 2.75 0 0 0 5.75 25h16.5A2.75 2.75 0 0 0 25 22.25V16a2.75 2.75 0 0 0-2.75-2.75h-7.5v-7.5A2.75 2.75 0 0 0 12 3H5.75Zm7.5 10.25H4.5v-7.5c0-.69.56-1.25 1.25-1.25H12c.69 0 1.25.56 1.25 1.25v7.5Zm1.5 10.25v-8.75h7.5c.69 0 1.25.56 1.25 1.25v6.25c0 .69-.56 1.25-1.25 1.25h-7.5Zm-1.5 0h-7.5c-.69 0-1.25-.56-1.25-1.25v-7.5h8.75v8.75Z"]));
          export const AppsListDetail20Color = ( /*#__PURE__*/createFluentIcon('AppsListDetail20Color', "20", \`<path fill-rule="evenodd" clip-rule="evenodd" d="M9 5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" fill="url(#ic_fluent_apps_list_detail_20_color__a)"/><path d="M3.5 4C2.67 4 2 4.67 2 5.5v2C2 8.33 2.67 9 3.5 9h2C6.33 9 7 8.33 7 7.5v-2C7 4.67 6.33 4 5.5 4h-2Zm0 7c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2Z" fill="url(#ic_fluent_apps_list_detail_20_color__b)"/><defs><linearGradient id="ic_fluent_apps_list_detail_20_color__a" x1="7.65" y1="2.29" x2="17.1" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_20_color__b" x1="3.19" y1="5.6" x2="5.74" y2="15.36" gradientUnits="userSpaceOnUse"><stop offset=".13" stop-color="#9C6CFE"/><stop offset="1" stop-color="#7A41DC"/></linearGradient></defs>\`, { color: true }));
          export const ArchiveSettings32Regular = ( /*#__PURE__*/createFluentIcon('ArchiveSettings32Regular', "32", ["M13 14a1 1 0 1 0 0 2h4.34a8.99 8.99 0 0 1 2.55-1.45A1 1 0 0 0 19 14h-6ZM9.5 27h5.44c.36.73.81 1.4 1.35 2H9.5A5.5 5.5 0 0 1 4 23.5V10.24A3 3 0 0 1 3 8V6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2a3 3 0 0 1-1 2.24v5.28a8.97 8.97 0 0 0-2-1V11H6v12.5A3.5 3.5 0 0 0 9.5 27ZM6 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm12.34 14.04c.26.84-.25 1.73-1.11 1.92l-1.54.35a7.52 7.52 0 0 0-.04 3.2l1.7.42c.83.2 1.33 1.06 1.1 1.89l-.5 1.72a7.5 7.5 0 0 0 2.75 1.6l1.26-1.3c.6-.62 1.6-.62 2.2 0l1.23 1.27a7.5 7.5 0 0 0 2.73-1.63l-.46-1.52a1.52 1.52 0 0 1 1.11-1.92l1.54-.35a7.52 7.52 0 0 0 .04-3.2l-1.7-.42a1.52 1.52 0 0 1-1.1-1.89l.5-1.72a7.5 7.5 0 0 0-2.75-1.6l-1.26 1.3c-.6.62-1.6.62-2.2 0l-1.23-1.27a7.5 7.5 0 0 0-2.73 1.63l.46 1.52ZM25 23a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"]));
          export const ArrowBidirectionalLeftRight28Regular = ( /*#__PURE__*/createFluentIcon('ArrowBidirectionalLeftRight28Regular', "28", ["M10.28 7.22c.3.3.3.77 0 1.06L5.56 13h16.88l-4.72-4.72a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H5.56l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6c.3-.3.77-.3 1.06 0Z"]));
          export const ArrowCircleDownRight12Filled = ( /*#__PURE__*/createFluentIcon('ArrowCircleDownRight12Filled', "12", ["M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1Zm1.5 3a.5.5 0 0 0-.5.5v1.8L4.85 4.14l-.07-.07a.5.5 0 0 0-.7.7l.07.07L6.29 7H4.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"]));
          export const ArrowCircleDownRight16Regular = ( /*#__PURE__*/createFluentIcon('ArrowCircleDownRight16Regular', "16", ["M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm2.5 3.5c.28 0 .5.22.5.5v4.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h3.3L5.64 6.35l-.07-.07a.5.5 0 0 1 .7-.7l.07.07L10 9.29V6c0-.28.22-.5.5-.5Z"]));
          export const ArrowCircleLeft24Regular = ( /*#__PURE__*/createFluentIcon('ArrowCircleLeft24Regular', "24", ["m12.28 16.53.07-.08c.22-.3.2-.71-.07-.98l-2.72-2.72h6.79A.75.75 0 0 0 17 12v-.1a.75.75 0 0 0-.75-.65h-6.7l2.73-2.72.07-.08a.75.75 0 0 0-1.13-.98l-4 4-.07.08c-.22.3-.2.71.07.98l4 4 .08.07c.3.22.71.2.98-.07ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Z"]));
          export const ArrowCircleRight16Regular = ( /*#__PURE__*/createFluentIcon('ArrowCircleRight16Regular', "16", ["m8.85 10.85 2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 1 0-.7.7L9.79 7.5H5a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-7 6A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"]));
          export const ArrowCircleUp20Filled = ( /*#__PURE__*/createFluentIcon('ArrowCircleUp20Filled', "20", ["M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm4.65-.85a.5.5 0 1 0 .7.7L9.5 7.71v5.79a.5.5 0 0 0 1 0V7.7l2.15 2.15a.5.5 0 0 0 .7-.7l-3-3a.5.5 0 0 0-.7 0l-3 3Z"]));
          export const ArrowClockwise16Filled = ( /*#__PURE__*/createFluentIcon('ArrowClockwise16Filled', "16", ["M3.5 8a4.5 4.5 0 0 1 7.85-3h-1.6a.75.75 0 0 0 0 1.5h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-1.5 0v.78a6 6 0 1 0 1.94 5.32.75.75 0 0 0-1.49-.2A4.5 4.5 0 0 1 3.5 8Z"]));
          export const ArrowClockwise48Filled = ( /*#__PURE__*/createFluentIcon('ArrowClockwise48Filled', "48", ["M9 24a15 15 0 0 1 25.2-11h-3.7a1.5 1.5 0 0 0 0 3h7c.83 0 1.5-.67 1.5-1.5v-7a1.5 1.5 0 0 0-3 0v3.08a18 18 0 1 0 5.8 10.7 1.5 1.5 0 1 0-2.97.45A15 15 0 1 1 9 24Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const Accessibility28Regular: FluentIcon;
          export declare const AccessibilityError20Filled: FluentIcon;
          export declare const AccessibilityQuestionMark20Regular: FluentIcon;
          export declare const AddCircle12Filled: FluentIcon;
          export declare const AddCircle32Regular: FluentIcon;
          export declare const AddStarburst16Filled: FluentIcon;
          export declare const AddSubtractCircle28Regular: FluentIcon;
          export declare const Agents28Filled: FluentIcon;
          export declare const AirplaneLanding24Regular: FluentIcon;
          export declare const Album20Regular: FluentIcon;
          export declare const AlertSnooze12Filled: FluentIcon;
          export declare const AlignLeft48Regular: FluentIcon;
          export declare const AlignSpaceEvenlyVertical20Regular: FluentIcon;
          export declare const AlignStartHorizontal20Regular: FluentIcon;
          export declare const AlignStretchVertical16Filled: FluentIcon;
          export declare const AnimalCat20Filled: FluentIcon;
          export declare const AnimalPawPrint24Regular: FluentIcon;
          export declare const AppsAddIn28Regular: FluentIcon;
          export declare const AppsListDetail20Color: FluentIcon;
          export declare const ArchiveSettings32Regular: FluentIcon;
          export declare const ArrowBidirectionalLeftRight28Regular: FluentIcon;
          export declare const ArrowCircleDownRight12Filled: FluentIcon;
          export declare const ArrowCircleDownRight16Regular: FluentIcon;
          export declare const ArrowCircleLeft24Regular: FluentIcon;
          export declare const ArrowCircleRight16Regular: FluentIcon;
          export declare const ArrowCircleUp20Filled: FluentIcon;
          export declare const ArrowClockwise16Filled: FluentIcon;
          export declare const ArrowClockwise48Filled: FluentIcon;
          export declare const ArrowClockwiseDashes20Regular: FluentIcon;
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
          "... (16 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.Accessibility28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility28Regular', "28", ["M12 5.5a2 2 0 0 0 1.5 1.93c.33.06.67.06 1 0A2 2 0 1 0 12 5.5Zm-1.34 1.06a3.5 3.5 0 1 1 6.68 0l4.42-1.44a2.48 2.48 0 1 1 1.53 4.71L18 11.55v3.82c0 .16.03.32.1.47l2.72 6.75a2.48 2.48 0 0 1-4.6 1.86l-2.24-5.55-2.23 5.56a2.46 2.46 0 0 1-3.2 1.36 2.48 2.48 0 0 1-1.37-3.22l2.73-6.8c.06-.16.09-.31.09-.47v-3.78L4.71 9.83a2.48 2.48 0 0 1 1.53-4.7l4.42 1.43Zm2.52 2.34c-.22-.03-.43-.09-.65-.16l-6.75-2.2a.98.98 0 0 0-.6 1.87l5.46 1.77c.51.17.86.65.86 1.19v3.96c0 .35-.07.7-.2 1.02l-2.73 6.81c-.2.5.04 1.07.54 1.27a.96.96 0 0 0 1.25-.53l2.46-6.14a1.25 1.25 0 0 1 2.32 0l2.48 6.13a.98.98 0 1 0 1.8-.73L16.7 16.4c-.13-.32-.2-.67-.2-1.03v-4c0-.54.35-1.02.86-1.19l5.46-1.77a.98.98 0 1 0-.6-1.86l-6.75 2.2c-.22.06-.43.12-.65.15a3.5 3.5 0 0 1-1.64 0Z"]));
          exports.AccessibilityError20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityError20Filled', "20", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"]));
          exports.AccessibilityQuestionMark20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityQuestionMark20Regular', "20", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.5 2.5 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5 1.88a.62.62 0 1 0 0 1.25.62.62 0 0 0 0-1.25Zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 1 0 1-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 0 0 1 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95Z"]));
          exports.AddCircle12Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddCircle12Filled', "12", ["M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm5-2.5a.42.42 0 0 0-.42.42v1.66H3.92a.42.42 0 0 0 0 .84h1.66v1.66a.42.42 0 0 0 .84 0V6.42h1.66a.42.42 0 0 0 0-.84H6.42V3.92A.42.42 0 0 0 6 3.5Z"]));
          exports.AddCircle32Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddCircle32Regular', "32", ["M15 10a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5h-5a1 1 0 1 1 0-2h5v-5Zm15 6a14 14 0 1 1-28 0 14 14 0 0 1 28 0Zm-2 0a12 12 0 1 0-24 0 12 12 0 0 0 24 0Z"]));
          exports.AddStarburst16Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddStarburst16Filled', "16", ["M8 .02c.16 0 .3.07.4.2l1.3 1.67a.5.5 0 0 0 .53.17l2.03-.6a.5.5 0 0 1 .64.47l.06 2.12c.01.2.14.39.34.45l1.99.72a.5.5 0 0 1 .24.75l-1.19 1.75a.5.5 0 0 0 0 .56l1.2 1.75a.5.5 0 0 1-.25.75l-2 .72a.5.5 0 0 0-.33.45l-.06 2.12a.5.5 0 0 1-.64.46l-2.03-.6a.5.5 0 0 0-.53.18L8.4 15.8a.5.5 0 0 1-.79 0l-1.3-1.68a.5.5 0 0 0-.53-.17l-2.03.6a.5.5 0 0 1-.64-.47l-.06-2.12a.5.5 0 0 0-.33-.45l-2-.72a.5.5 0 0 1-.24-.75l1.2-1.75a.5.5 0 0 0 0-.56L.47 5.97a.5.5 0 0 1 .24-.75l2-.72a.5.5 0 0 0 .33-.45l.06-2.12a.5.5 0 0 1 .64-.46l2.03.6a.5.5 0 0 0 .54-.18L7.6.2a.5.5 0 0 1 .4-.2ZM8 4.5a.5.5 0 0 0-.5.5v2.5H5a.5.5 0 0 0 0 1h2.5V11a.5.5 0 0 0 1 0V8.5H11a.5.5 0 0 0 0-1H8.5V5a.5.5 0 0 0-.5-.5Z"]));
          exports.AddSubtractCircle28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddSubtractCircle28Regular', "28", ["M15.2 18.05c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM10.99 7.7a.75.75 0 1 0-1.5 0v1.8H7.75a.75.75 0 0 0 0 1.5H9.5v1.75a.75.75 0 0 0 1.5 0V11h1.75a.75.75 0 0 0 0-1.5h-1.76V7.7ZM14 26a12 12 0 1 1 0-24 12 12 0 0 1 0 24Zm0-1.5a10.5 10.5 0 0 0 7.94-17.38L7.12 21.94A10.46 10.46 0 0 0 14 24.5Zm-7.94-3.62L20.88 6.06A10.5 10.5 0 0 0 6.07 20.87Z"]));
          exports.Agents28Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Agents28Filled', "28", ["M14.8 3a4.38 4.38 0 0 0-.94 1.74l-4.7 17.32a.75.75 0 0 0 1.45.39l4.7-17.32A2.89 2.89 0 0 1 18.09 3h.03c1.16 0 2.23.62 2.81 1.63l4.77 8.25c.4.7.4 1.55 0 2.24l-5.06 8.76c-.4.7-1.14 1.12-1.94 1.12H13.2c.43-.49.75-1.08.93-1.74l4.7-17.31a.75.75 0 1 0-1.45-.4l-4.7 17.32A2.89 2.89 0 0 1 9.92 25h-.03a3.25 3.25 0 0 1-2.82-1.63L2.3 15.13c-.4-.7-.4-1.55 0-2.24l5.05-8.76C7.75 3.42 8.5 3 9.3 3h5.5Z"]));
          exports.AirplaneLanding24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AirplaneLanding24Regular', "24", ["M11.5 7.49V5.04c0-.58.79-.75 1.03-.22l1.42 3.2h-1a.64.64 0 0 1-.23-.05L11.5 7.5Zm4.1.53-1.7-3.8C13 2.2 10 2.83 10 5.03v1.85l-1.5-.6V4.77a1.75 1.75 0 0 0-3.21-.96L3.38 6.7a2.3 2.3 0 0 0 1.04 3.4l3.5 1.46-2.05 1.9c-1.62 1.5 0 4.16 2.09 3.4l6.76-2.46 3.46 1.44A2.04 2.04 0 0 0 21 13.96v-1.23c0-2.6-2.11-4.71-4.72-4.71h-.69ZM7 6.95c0 .22.13.42.34.5l4.83 1.92c.25.1.52.15.79.15h3.32a3.22 3.22 0 0 1 3.22 3.21v1.23c0 .39-.39.65-.74.5l-3.64-1.52a1 1 0 0 0-.73-.02l-6.95 2.53c-.55.2-.97-.5-.55-.9l2.62-2.42a1 1 0 0 0-.3-1.66L5 8.71a.8.8 0 0 1-.36-1.18l1.91-2.91c.14-.2.46-.11.46.14v2.2Zm-4 13.3c0-.41.34-.75.75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"]));
          exports.Album20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Album20Regular', "20", ["M8 8.5C8 7.67 8.67 7 9.5 7h4c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 8 9.5v-1ZM9.5 8a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4ZM2 6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm4 9h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6v10ZM5 5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1V5Z"], { flipInRtl: true }));
          exports.AlertSnooze12Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlertSnooze12Filled', "12", ["M6.09 1A1.5 1.5 0 0 0 7.5 3L6.3 4.6A1.5 1.5 0 0 0 7.5 7h2.8l.65 1.28a.5.5 0 0 1-.45.72h-9a.5.5 0 0 1-.45-.72L2 6.38V5a4 4 0 0 1 4.09-4Zm-2.03 9a2 2 0 0 0 3.88 0H4.06ZM7.5 1a.5.5 0 0 0 0 1h2L7.1 5.2a.5.5 0 0 0 .4.8h3a.5.5 0 0 0 0-1h-2l2.4-3.2a.5.5 0 0 0-.4-.8h-3Z"]));
          exports.AlignLeft48Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignLeft48Regular', "48", ["M6.5 5.25a1.25 1.25 0 1 1 2.5 0v37.5a1.25 1.25 0 1 1-2.5 0V5.25ZM15.75 26a4.25 4.25 0 0 0-4.25 4.25v5.5c0 2.35 1.9 4.25 4.25 4.25h15C33.1 40 35 38.1 35 35.75v-5.5C35 27.9 33.1 26 30.75 26h-15ZM14 30.25c0-.97.78-1.75 1.75-1.75h15c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75h-15c-.97 0-1.75-.78-1.75-1.75v-5.5Zm-2.5-18v5.5c0 2.35 1.9 4.25 4.25 4.25H38c2.35 0 4.25-1.9 4.25-4.25v-5.5C42.25 9.9 40.35 8 38 8H15.75a4.25 4.25 0 0 0-4.25 4.25Zm2.5 5.5v-5.5c0-.97.78-1.75 1.75-1.75H38c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75H15.75c-.97 0-1.75-.78-1.75-1.75Z"]));
          exports.AlignSpaceEvenlyVertical20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignSpaceEvenlyVertical20Regular', "20", ["M4 3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6Z", "M4 15c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1Zm2-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6Z", "M6 7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Z"]));
          exports.AlignStartHorizontal20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignStartHorizontal20Regular', "20", ["M3.5 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Z", "M8 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8ZM7 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6Z"]));
          exports.AlignStretchVertical16Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignStretchVertical16Filled', "16", ["M1.5 13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0-11a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm3 10A1.5 1.5 0 0 1 3 10.5v-5C3 4.67 3.67 4 4.5 4h1C6.33 4 7 4.67 7 5.5v5c0 .83-.67 1.5-1.5 1.5h-1ZM9 10.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-1C9.67 4 9 4.67 9 5.5v5Z"]));
          exports.AnimalCat20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AnimalCat20Filled', "20", ["M4.97 18H13v-1.5a2.5 2.5 0 0 0-2.5-2.5h-1a.5.5 0 0 1 0-1h1a3.5 3.5 0 0 1 3.5 3.5V18h.25c.47 0 .9-.2 1.21-.5h.04v-.04c.29-.3.47-.72.47-1.18v-7.6a2.12 2.12 0 0 0 1.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 0 0-.99-.99 2.45 2.45 0 0 0-2.44 2.45V7.9a4.28 4.28 0 0 0-2.95 1.58 6.69 6.69 0 0 0-1.04 1.8c-.23.46-.39.96-.47 1.49l-.01.06A17.04 17.04 0 0 0 5.63 17h-.66a1.97 1.97 0 0 1-1.44-3.32l.92-.98a3.59 3.59 0 0 0-.09-4.99l-.9-.9a.5.5 0 1 0-.7.7l.9.9a2.59 2.59 0 0 1 .06 3.6l-.92 1A2.97 2.97 0 0 0 4.97 18Z"]));
          exports.AnimalPawPrint24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AnimalPawPrint24Regular', "24", ["M7.75 5.25c0-.79.54-1.25 1-1.25.46 0 1 .46 1 1.25s-.54 1.25-1 1.25c-.46 0-1-.46-1-1.25Zm1-2.75c-1.47 0-2.5 1.33-2.5 2.75S7.28 8 8.75 8s2.5-1.33 2.5-2.75-1.03-2.75-2.5-2.75Zm-5.25 5c-.46 0-1 .46-1 1.25S3.04 10 3.5 10c.46 0 1-.46 1-1.25s-.54-1.25-1-1.25ZM1 8.75C1 7.33 2.03 6 3.5 6S6 7.33 6 8.75 4.97 11.5 3.5 11.5 1 10.17 1 8.75Zm11 2.75A5.5 5.5 0 0 0 6.5 17c0 .76.38 1.36 1.04 1.8.67.45 1.6.7 2.54.7h3.84c.94 0 1.87-.25 2.54-.7A2.1 2.1 0 0 0 17.5 17a5.5 5.5 0 0 0-5.5-5.5ZM5 17a7 7 0 1 1 14 0 3.6 3.6 0 0 1-1.7 3.04c-.96.65-2.2.96-3.38.96h-3.84a6.17 6.17 0 0 1-3.38-.96A3.6 3.6 0 0 1 5 17ZM15.25 4c-.46 0-1 .46-1 1.25s.54 1.25 1 1.25c.46 0 1-.46 1-1.25S15.71 4 15.25 4Zm-2.5 1.25c0-1.42 1.03-2.75 2.5-2.75s2.5 1.33 2.5 2.75S16.72 8 15.25 8s-2.5-1.33-2.5-2.75Zm6.75 3.5c0-.79.54-1.25 1-1.25.46 0 1 .46 1 1.25s-.54 1.25-1 1.25c-.46 0-1-.46-1-1.25Zm1-2.75C19.03 6 18 7.33 18 8.75s1.03 2.75 2.5 2.75S23 10.17 23 8.75 21.97 6 20.5 6Z"]));
          exports.AppsAddIn28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsAddIn28Regular', "28", ["M21.25 2c.41 0 .75.34.75.75V6h3.25a.75.75 0 0 1 0 1.5H22v3.25a.75.75 0 0 1-1.5 0V7.5h-3.25a.75.75 0 0 1 0-1.5h3.25V2.75c0-.41.34-.75.75-.75ZM5.75 3A2.75 2.75 0 0 0 3 5.75v16.5A2.75 2.75 0 0 0 5.75 25h16.5A2.75 2.75 0 0 0 25 22.25V16a2.75 2.75 0 0 0-2.75-2.75h-7.5v-7.5A2.75 2.75 0 0 0 12 3H5.75Zm7.5 10.25H4.5v-7.5c0-.69.56-1.25 1.25-1.25H12c.69 0 1.25.56 1.25 1.25v7.5Zm1.5 10.25v-8.75h7.5c.69 0 1.25.56 1.25 1.25v6.25c0 .69-.56 1.25-1.25 1.25h-7.5Zm-1.5 0h-7.5c-.69 0-1.25-.56-1.25-1.25v-7.5h8.75v8.75Z"]));
          exports.AppsListDetail20Color = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsListDetail20Color', "20", \`<path fill-rule="evenodd" clip-rule="evenodd" d="M9 5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" fill="url(#ic_fluent_apps_list_detail_20_color__a)"/><path d="M3.5 4C2.67 4 2 4.67 2 5.5v2C2 8.33 2.67 9 3.5 9h2C6.33 9 7 8.33 7 7.5v-2C7 4.67 6.33 4 5.5 4h-2Zm0 7c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2Z" fill="url(#ic_fluent_apps_list_detail_20_color__b)"/><defs><linearGradient id="ic_fluent_apps_list_detail_20_color__a" x1="7.65" y1="2.29" x2="17.1" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_20_color__b" x1="3.19" y1="5.6" x2="5.74" y2="15.36" gradientUnits="userSpaceOnUse"><stop offset=".13" stop-color="#9C6CFE"/><stop offset="1" stop-color="#7A41DC"/></linearGradient></defs>\`, { color: true }));
          exports.ArchiveSettings32Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArchiveSettings32Regular', "32", ["M13 14a1 1 0 1 0 0 2h4.34a8.99 8.99 0 0 1 2.55-1.45A1 1 0 0 0 19 14h-6ZM9.5 27h5.44c.36.73.81 1.4 1.35 2H9.5A5.5 5.5 0 0 1 4 23.5V10.24A3 3 0 0 1 3 8V6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2a3 3 0 0 1-1 2.24v5.28a8.97 8.97 0 0 0-2-1V11H6v12.5A3.5 3.5 0 0 0 9.5 27ZM6 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm12.34 14.04c.26.84-.25 1.73-1.11 1.92l-1.54.35a7.52 7.52 0 0 0-.04 3.2l1.7.42c.83.2 1.33 1.06 1.1 1.89l-.5 1.72a7.5 7.5 0 0 0 2.75 1.6l1.26-1.3c.6-.62 1.6-.62 2.2 0l1.23 1.27a7.5 7.5 0 0 0 2.73-1.63l-.46-1.52a1.52 1.52 0 0 1 1.11-1.92l1.54-.35a7.52 7.52 0 0 0 .04-3.2l-1.7-.42a1.52 1.52 0 0 1-1.1-1.89l.5-1.72a7.5 7.5 0 0 0-2.75-1.6l-1.26 1.3c-.6.62-1.6.62-2.2 0l-1.23-1.27a7.5 7.5 0 0 0-2.73 1.63l.46 1.52ZM25 23a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"]));
          exports.ArrowBidirectionalLeftRight28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowBidirectionalLeftRight28Regular', "28", ["M10.28 7.22c.3.3.3.77 0 1.06L5.56 13h16.88l-4.72-4.72a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H5.56l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6c.3-.3.77-.3 1.06 0Z"]));
          exports.ArrowCircleDownRight12Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCircleDownRight12Filled', "12", ["M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1Zm1.5 3a.5.5 0 0 0-.5.5v1.8L4.85 4.14l-.07-.07a.5.5 0 0 0-.7.7l.07.07L6.29 7H4.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"]));
          exports.ArrowCircleDownRight16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCircleDownRight16Regular', "16", ["M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm2.5 3.5c.28 0 .5.22.5.5v4.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h3.3L5.64 6.35l-.07-.07a.5.5 0 0 1 .7-.7l.07.07L10 9.29V6c0-.28.22-.5.5-.5Z"]));
          exports.ArrowCircleLeft24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCircleLeft24Regular', "24", ["m12.28 16.53.07-.08c.22-.3.2-.71-.07-.98l-2.72-2.72h6.79A.75.75 0 0 0 17 12v-.1a.75.75 0 0 0-.75-.65h-6.7l2.73-2.72.07-.08a.75.75 0 0 0-1.13-.98l-4 4-.07.08c-.22.3-.2.71.07.98l4 4 .08.07c.3.22.71.2.98-.07ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Z"]));
          exports.ArrowCircleRight16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCircleRight16Regular', "16", ["m8.85 10.85 2.5-2.5a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 1 0-.7.7L9.79 7.5H5a.5.5 0 0 0 0 1h4.8l-1.65 1.65a.5.5 0 0 0 .7.7ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-7 6A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const Accessibility28Regular: FluentIcon;
          export declare const AccessibilityError20Filled: FluentIcon;
          export declare const AccessibilityQuestionMark20Regular: FluentIcon;
          export declare const AddCircle12Filled: FluentIcon;
          export declare const AddCircle32Regular: FluentIcon;
          export declare const AddStarburst16Filled: FluentIcon;
          export declare const AddSubtractCircle28Regular: FluentIcon;
          export declare const Agents28Filled: FluentIcon;
          export declare const AirplaneLanding24Regular: FluentIcon;
          export declare const Album20Regular: FluentIcon;
          export declare const AlertSnooze12Filled: FluentIcon;
          export declare const AlignLeft48Regular: FluentIcon;
          export declare const AlignSpaceEvenlyVertical20Regular: FluentIcon;
          export declare const AlignStartHorizontal20Regular: FluentIcon;
          export declare const AlignStretchVertical16Filled: FluentIcon;
          export declare const AnimalCat20Filled: FluentIcon;
          export declare const AnimalPawPrint24Regular: FluentIcon;
          export declare const AppsAddIn28Regular: FluentIcon;
          export declare const AppsListDetail20Color: FluentIcon;
          export declare const ArchiveSettings32Regular: FluentIcon;
          export declare const ArrowBidirectionalLeftRight28Regular: FluentIcon;
          export declare const ArrowCircleDownRight12Filled: FluentIcon;
          export declare const ArrowCircleDownRight16Regular: FluentIcon;
          export declare const ArrowCircleLeft24Regular: FluentIcon;
          export declare const ArrowCircleRight16Regular: FluentIcon;
          export declare const ArrowCircleUp20Filled: FluentIcon;
          export declare const ArrowClockwise16Filled: FluentIcon;
          export declare const ArrowClockwise48Filled: FluentIcon;
          export declare const ArrowClockwiseDashes20Regular: FluentIcon;
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
          import { createFluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export const ArrowAutofitHeightRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowAutofitHeightRegular", "", 2, undefined));
          export const ArrowEjectRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowEjectRegular", "", 2, undefined));
          export const ArrowOutlineDownLeftFilled = ( /*#__PURE__*/createFluentFontIcon("ArrowOutlineDownLeftFilled", "", 2, undefined));
          export const ArrowRotateClockwiseFilled = ( /*#__PURE__*/createFluentFontIcon("ArrowRotateClockwiseFilled", "", 2, undefined, { flipInRtl: true }));
          export const ArrowSquareDownRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowSquareDownRegular", "", 2, undefined));
          export const Battery1Regular = ( /*#__PURE__*/createFluentFontIcon("Battery1Regular", "", 2, undefined));
          export const BeakerFilled = ( /*#__PURE__*/createFluentFontIcon("BeakerFilled", "", 2, undefined));
          export const BinFullFilled = ( /*#__PURE__*/createFluentFontIcon("BinFullFilled", "", 2, undefined));
          export const BookOpenGlobeFilled = ( /*#__PURE__*/createFluentFontIcon("BookOpenGlobeFilled", "", 2, undefined));
          export const BookToolboxFilled = ( /*#__PURE__*/createFluentFontIcon("BookToolboxFilled", "", 2, undefined));
          export const BranchRequestDraftRegular = ( /*#__PURE__*/createFluentFontIcon("BranchRequestDraftRegular", "", 2, undefined));
          export const BuildingRetailToolboxRegular = ( /*#__PURE__*/createFluentFontIcon("BuildingRetailToolboxRegular", "", 2, undefined));
          export const CalendarMentionRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarMentionRegular", "", 2, undefined));
          export const CalendarRtlRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarRtlRegular", "", 2, undefined));
          export const CallRectangleLandscapeFilled = ( /*#__PURE__*/createFluentFontIcon("CallRectangleLandscapeFilled", "", 2, undefined));
          export const CalligraphyPenCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon("CalligraphyPenCheckmarkFilled", "", 2, undefined));
          export const CheckboxCheckedRegular = ( /*#__PURE__*/createFluentFontIcon("CheckboxCheckedRegular", "", 2, undefined));
          export const CircleMultipleHintCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon("CircleMultipleHintCheckmarkFilled", "", 2, undefined));
          export const ClassRegular = ( /*#__PURE__*/createFluentFontIcon("ClassRegular", "", 2, undefined));
          export const ClipboardBulletListFilled = ( /*#__PURE__*/createFluentFontIcon("ClipboardBulletListFilled", "", 2, undefined, { flipInRtl: true }));
          export const ClipboardLetterRegular = ( /*#__PURE__*/createFluentFontIcon("ClipboardLetterRegular", "", 2, undefined));
          export const CloudArrowRightRegular = ( /*#__PURE__*/createFluentFontIcon("CloudArrowRightRegular", "", 2, undefined));
          export const CommentArrowRightFilled = ( /*#__PURE__*/createFluentFontIcon("CommentArrowRightFilled", "", 2, undefined, { flipInRtl: true }));
          export const CubeQuickRegular = ( /*#__PURE__*/createFluentFontIcon("CubeQuickRegular", "", 2, undefined));
          export const DataPieFilled = ( /*#__PURE__*/createFluentFontIcon("DataPieFilled", "", 2, undefined));
          export const DesktopSignalRegular = ( /*#__PURE__*/createFluentFontIcon("DesktopSignalRegular", "", 2, undefined));
          export const DesktopSpeakerOffRegular = ( /*#__PURE__*/createFluentFontIcon("DesktopSpeakerOffRegular", "", 2, undefined));
          export const DocumentEndnoteFilled = ( /*#__PURE__*/createFluentFontIcon("DocumentEndnoteFilled", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const ArrowAutofitHeightRegular: FluentFontIcon;
          export declare const ArrowEjectRegular: FluentFontIcon;
          export declare const ArrowOutlineDownLeftFilled: FluentFontIcon;
          export declare const ArrowRotateClockwiseFilled: FluentFontIcon;
          export declare const ArrowSquareDownRegular: FluentFontIcon;
          export declare const Battery1Regular: FluentFontIcon;
          export declare const BeakerFilled: FluentFontIcon;
          export declare const BinFullFilled: FluentFontIcon;
          export declare const BookOpenGlobeFilled: FluentFontIcon;
          export declare const BookToolboxFilled: FluentFontIcon;
          export declare const BranchRequestDraftRegular: FluentFontIcon;
          export declare const BuildingRetailToolboxRegular: FluentFontIcon;
          export declare const CalendarMentionRegular: FluentFontIcon;
          export declare const CalendarRtlRegular: FluentFontIcon;
          export declare const CallRectangleLandscapeFilled: FluentFontIcon;
          export declare const CalligraphyPenCheckmarkFilled: FluentFontIcon;
          export declare const CheckboxCheckedRegular: FluentFontIcon;
          export declare const CircleMultipleHintCheckmarkFilled: FluentFontIcon;
          export declare const ClassRegular: FluentFontIcon;
          export declare const ClipboardBulletListFilled: FluentFontIcon;
          export declare const ClipboardLetterRegular: FluentFontIcon;
          export declare const CloudArrowRightRegular: FluentFontIcon;
          export declare const CommentArrowRightFilled: FluentFontIcon;
          export declare const CubeQuickRegular: FluentFontIcon;
          export declare const DataPieFilled: FluentFontIcon;
          export declare const DesktopSignalRegular: FluentFontIcon;
          export declare const DesktopSpeakerOffRegular: FluentFontIcon;
          export declare const DocumentEndnoteFilled: FluentFontIcon;
          export declare const DocumentQueueMultipleFilled: FluentFontIcon;
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
          "... (2 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.ArrowAutofitHeightRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowAutofitHeightRegular", "", 2, undefined));
          exports.ArrowEjectRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowEjectRegular", "", 2, undefined));
          exports.ArrowOutlineDownLeftFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowOutlineDownLeftFilled", "", 2, undefined));
          exports.ArrowRotateClockwiseFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowRotateClockwiseFilled", "", 2, undefined, { flipInRtl: true }));
          exports.ArrowSquareDownRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowSquareDownRegular", "", 2, undefined));
          exports.Battery1Regular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Battery1Regular", "", 2, undefined));
          exports.BeakerFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BeakerFilled", "", 2, undefined));
          exports.BinFullFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BinFullFilled", "", 2, undefined));
          exports.BookOpenGlobeFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BookOpenGlobeFilled", "", 2, undefined));
          exports.BookToolboxFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BookToolboxFilled", "", 2, undefined));
          exports.BranchRequestDraftRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BranchRequestDraftRegular", "", 2, undefined));
          exports.BuildingRetailToolboxRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BuildingRetailToolboxRegular", "", 2, undefined));
          exports.CalendarMentionRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarMentionRegular", "", 2, undefined));
          exports.CalendarRtlRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarRtlRegular", "", 2, undefined));
          exports.CallRectangleLandscapeFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CallRectangleLandscapeFilled", "", 2, undefined));
          exports.CalligraphyPenCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalligraphyPenCheckmarkFilled", "", 2, undefined));
          exports.CheckboxCheckedRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CheckboxCheckedRegular", "", 2, undefined));
          exports.CircleMultipleHintCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CircleMultipleHintCheckmarkFilled", "", 2, undefined));
          exports.ClassRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ClassRegular", "", 2, undefined));
          exports.ClipboardBulletListFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ClipboardBulletListFilled", "", 2, undefined, { flipInRtl: true }));
          exports.ClipboardLetterRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ClipboardLetterRegular", "", 2, undefined));
          exports.CloudArrowRightRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CloudArrowRightRegular", "", 2, undefined));
          exports.CommentArrowRightFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CommentArrowRightFilled", "", 2, undefined, { flipInRtl: true }));
          exports.CubeQuickRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CubeQuickRegular", "", 2, undefined));
          exports.DataPieFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DataPieFilled", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const ArrowAutofitHeightRegular: FluentFontIcon;
          export declare const ArrowEjectRegular: FluentFontIcon;
          export declare const ArrowOutlineDownLeftFilled: FluentFontIcon;
          export declare const ArrowRotateClockwiseFilled: FluentFontIcon;
          export declare const ArrowSquareDownRegular: FluentFontIcon;
          export declare const Battery1Regular: FluentFontIcon;
          export declare const BeakerFilled: FluentFontIcon;
          export declare const BinFullFilled: FluentFontIcon;
          export declare const BookOpenGlobeFilled: FluentFontIcon;
          export declare const BookToolboxFilled: FluentFontIcon;
          export declare const BranchRequestDraftRegular: FluentFontIcon;
          export declare const BuildingRetailToolboxRegular: FluentFontIcon;
          export declare const CalendarMentionRegular: FluentFontIcon;
          export declare const CalendarRtlRegular: FluentFontIcon;
          export declare const CallRectangleLandscapeFilled: FluentFontIcon;
          export declare const CalligraphyPenCheckmarkFilled: FluentFontIcon;
          export declare const CheckboxCheckedRegular: FluentFontIcon;
          export declare const CircleMultipleHintCheckmarkFilled: FluentFontIcon;
          export declare const ClassRegular: FluentFontIcon;
          export declare const ClipboardBulletListFilled: FluentFontIcon;
          export declare const ClipboardLetterRegular: FluentFontIcon;
          export declare const CloudArrowRightRegular: FluentFontIcon;
          export declare const CommentArrowRightFilled: FluentFontIcon;
          export declare const CubeQuickRegular: FluentFontIcon;
          export declare const DataPieFilled: FluentFontIcon;
          export declare const DesktopSignalRegular: FluentFontIcon;
          export declare const DesktopSpeakerOffRegular: FluentFontIcon;
          export declare const DocumentEndnoteFilled: FluentFontIcon;
          export declare const DocumentQueueMultipleFilled: FluentFontIcon;
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
          import { createFluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export const LayoutRowTwoSettings32Light = ( /*#__PURE__*/createFluentFontIcon("LayoutRowTwoSettings32Light", "", 3, 32));
          export const Alert24Filled = ( /*#__PURE__*/createFluentFontIcon("Alert24Filled", "", 0, 24));
          export const AnimalDog20Filled = ( /*#__PURE__*/createFluentFontIcon("AnimalDog20Filled", "", 0, 20));
          export const ArrowForward24Filled = ( /*#__PURE__*/createFluentFontIcon("ArrowForward24Filled", "", 0, 24, { flipInRtl: true }));
          export const Battery920Filled = ( /*#__PURE__*/createFluentFontIcon("Battery920Filled", "", 0, 20));
          export const CheckboxChecked20Filled = ( /*#__PURE__*/createFluentFontIcon("CheckboxChecked20Filled", "", 0, 20));
          export const Cube16Filled = ( /*#__PURE__*/createFluentFontIcon("Cube16Filled", "", 0, 16));
          export const DocumentPageBottomLeft20Filled = ( /*#__PURE__*/createFluentFontIcon("DocumentPageBottomLeft20Filled", "", 0, 20));
          export const DrinkCoffee24Filled = ( /*#__PURE__*/createFluentFontIcon("DrinkCoffee24Filled", "", 0, 24));
          export const EraserTool24Filled = ( /*#__PURE__*/createFluentFontIcon("EraserTool24Filled", "", 0, 24));
          export const ErrorCircle20Filled = ( /*#__PURE__*/createFluentFontIcon("ErrorCircle20Filled", "", 0, 20));
          export const Filter28Filled = ( /*#__PURE__*/createFluentFontIcon("Filter28Filled", "", 0, 28));
          export const FormNew28Filled = ( /*#__PURE__*/createFluentFontIcon("FormNew28Filled", "", 0, 28));
          export const Gif24Filled = ( /*#__PURE__*/createFluentFontIcon("Gif24Filled", "", 0, 24));
          export const ImageCopy20Filled = ( /*#__PURE__*/createFluentFontIcon("ImageCopy20Filled", "", 0, 20));
          export const Javascript16Filled = ( /*#__PURE__*/createFluentFontIcon("Javascript16Filled", "", 0, 16));
          export const LinkEdit24Filled = ( /*#__PURE__*/createFluentFontIcon("LinkEdit24Filled", "", 0, 24));
          export const Live20Filled = ( /*#__PURE__*/createFluentFontIcon("Live20Filled", "", 0, 20));
          export const PersonQuestionMark20Filled = ( /*#__PURE__*/createFluentFontIcon("PersonQuestionMark20Filled", "", 0, 20));
          export const PhoneShake24Filled = ( /*#__PURE__*/createFluentFontIcon("PhoneShake24Filled", "", 0, 24));
          export const PlayCircle24Filled = ( /*#__PURE__*/createFluentFontIcon("PlayCircle24Filled", "", 0, 24));
          export const ShiftsActivity20Filled = ( /*#__PURE__*/createFluentFontIcon("ShiftsActivity20Filled", "", 0, 20));
          export const TabDesktopImage24Filled = ( /*#__PURE__*/createFluentFontIcon("TabDesktopImage24Filled", "", 0, 24));
          export const Backpack20Filled = ( /*#__PURE__*/createFluentFontIcon("Backpack20Filled", "", 0, 20));
          export const BookQuestionMark24Filled = ( /*#__PURE__*/createFluentFontIcon("BookQuestionMark24Filled", "", 0, 24));
          export const Hd20Filled = ( /*#__PURE__*/createFluentFontIcon("Hd20Filled", "", 0, 20));
          export const SportBaseball24Filled = ( /*#__PURE__*/createFluentFontIcon("SportBaseball24Filled", "", 0, 24));
          export const WeatherDrizzle20Filled = ( /*#__PURE__*/createFluentFontIcon("WeatherDrizzle20Filled", "", 0, 20));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const LayoutRowTwoSettings32Light: FluentFontIcon;
          export declare const Alert24Filled: FluentFontIcon;
          export declare const AnimalDog20Filled: FluentFontIcon;
          export declare const ArrowForward24Filled: FluentFontIcon;
          export declare const Battery920Filled: FluentFontIcon;
          export declare const CheckboxChecked20Filled: FluentFontIcon;
          export declare const Cube16Filled: FluentFontIcon;
          export declare const DocumentPageBottomLeft20Filled: FluentFontIcon;
          export declare const DrinkCoffee24Filled: FluentFontIcon;
          export declare const EraserTool24Filled: FluentFontIcon;
          export declare const ErrorCircle20Filled: FluentFontIcon;
          export declare const Filter28Filled: FluentFontIcon;
          export declare const FormNew28Filled: FluentFontIcon;
          export declare const Gif24Filled: FluentFontIcon;
          export declare const ImageCopy20Filled: FluentFontIcon;
          export declare const Javascript16Filled: FluentFontIcon;
          export declare const LinkEdit24Filled: FluentFontIcon;
          export declare const Live20Filled: FluentFontIcon;
          export declare const PersonQuestionMark20Filled: FluentFontIcon;
          export declare const PhoneShake24Filled: FluentFontIcon;
          export declare const PlayCircle24Filled: FluentFontIcon;
          export declare const ShiftsActivity20Filled: FluentFontIcon;
          export declare const TabDesktopImage24Filled: FluentFontIcon;
          export declare const Backpack20Filled: FluentFontIcon;
          export declare const BookQuestionMark24Filled: FluentFontIcon;
          export declare const Hd20Filled: FluentFontIcon;
          export declare const SportBaseball24Filled: FluentFontIcon;
          export declare const WeatherDrizzle20Filled: FluentFontIcon;
          export declare const WeatherMoonOff48Filled: FluentFontIcon;
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
          "... (6 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.LayoutRowTwoSettings32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("LayoutRowTwoSettings32Light", "", 3, 32));
          exports.Alert24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Alert24Filled", "", 0, 24));
          exports.AnimalDog20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AnimalDog20Filled", "", 0, 20));
          exports.ArrowForward24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowForward24Filled", "", 0, 24, { flipInRtl: true }));
          exports.Battery920Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Battery920Filled", "", 0, 20));
          exports.CheckboxChecked20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CheckboxChecked20Filled", "", 0, 20));
          exports.Cube16Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Cube16Filled", "", 0, 16));
          exports.DocumentPageBottomLeft20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DocumentPageBottomLeft20Filled", "", 0, 20));
          exports.DrinkCoffee24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DrinkCoffee24Filled", "", 0, 24));
          exports.EraserTool24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("EraserTool24Filled", "", 0, 24));
          exports.ErrorCircle20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ErrorCircle20Filled", "", 0, 20));
          exports.Filter28Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Filter28Filled", "", 0, 28));
          exports.FormNew28Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("FormNew28Filled", "", 0, 28));
          exports.Gif24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Gif24Filled", "", 0, 24));
          exports.ImageCopy20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ImageCopy20Filled", "", 0, 20));
          exports.Javascript16Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Javascript16Filled", "", 0, 16));
          exports.LinkEdit24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("LinkEdit24Filled", "", 0, 24));
          exports.Live20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Live20Filled", "", 0, 20));
          exports.PersonQuestionMark20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("PersonQuestionMark20Filled", "", 0, 20));
          exports.PhoneShake24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("PhoneShake24Filled", "", 0, 24));
          exports.PlayCircle24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("PlayCircle24Filled", "", 0, 24));
          exports.ShiftsActivity20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ShiftsActivity20Filled", "", 0, 20));
          exports.TabDesktopImage24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("TabDesktopImage24Filled", "", 0, 24));
          exports.Backpack20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Backpack20Filled", "", 0, 20));
          exports.BookQuestionMark24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BookQuestionMark24Filled", "", 0, 24));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const LayoutRowTwoSettings32Light: FluentFontIcon;
          export declare const Alert24Filled: FluentFontIcon;
          export declare const AnimalDog20Filled: FluentFontIcon;
          export declare const ArrowForward24Filled: FluentFontIcon;
          export declare const Battery920Filled: FluentFontIcon;
          export declare const CheckboxChecked20Filled: FluentFontIcon;
          export declare const Cube16Filled: FluentFontIcon;
          export declare const DocumentPageBottomLeft20Filled: FluentFontIcon;
          export declare const DrinkCoffee24Filled: FluentFontIcon;
          export declare const EraserTool24Filled: FluentFontIcon;
          export declare const ErrorCircle20Filled: FluentFontIcon;
          export declare const Filter28Filled: FluentFontIcon;
          export declare const FormNew28Filled: FluentFontIcon;
          export declare const Gif24Filled: FluentFontIcon;
          export declare const ImageCopy20Filled: FluentFontIcon;
          export declare const Javascript16Filled: FluentFontIcon;
          export declare const LinkEdit24Filled: FluentFontIcon;
          export declare const Live20Filled: FluentFontIcon;
          export declare const PersonQuestionMark20Filled: FluentFontIcon;
          export declare const PhoneShake24Filled: FluentFontIcon;
          export declare const PlayCircle24Filled: FluentFontIcon;
          export declare const ShiftsActivity20Filled: FluentFontIcon;
          export declare const TabDesktopImage24Filled: FluentFontIcon;
          export declare const Backpack20Filled: FluentFontIcon;
          export declare const BookQuestionMark24Filled: FluentFontIcon;
          export declare const Hd20Filled: FluentFontIcon;
          export declare const SportBaseball24Filled: FluentFontIcon;
          export declare const WeatherDrizzle20Filled: FluentFontIcon;
          export declare const WeatherMoonOff48Filled: FluentFontIcon;
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
