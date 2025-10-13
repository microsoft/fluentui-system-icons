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
          export const AddCircleRegular = ( /*#__PURE__*/createFluentIcon('AddCircleRegular', "1em", ["M6 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10Zm4 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"]));
          export const AlignSpaceAroundHorizontalFilled = ( /*#__PURE__*/createFluentIcon('AlignSpaceAroundHorizontalFilled', "1em", ["M6 4a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm0 7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Z"]));
          export const AlignSpaceFitVerticalRegular = ( /*#__PURE__*/createFluentIcon('AlignSpaceFitVerticalRegular', "1em", ["M6 1a2 2 0 0 0-2 2v4.5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6ZM5 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3Z", "M6 10.5a2 2 0 0 0-2 2V17c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2H6Zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4.5Z"]));
          export const AnimalTurtleRegular = ( /*#__PURE__*/createFluentIcon('AnimalTurtleRegular', "1em", ["M9.1 4c-1.47 0-2.5.55-3.21 1.38a7.5 7.5 0 0 0-1.36 2.77L4.27 9H2.5a.5.5 0 0 0-.5.5c0 1.08.5 2.1 1.3 2.63l-.44 1.07a1.31 1.31 0 0 0 1.2 1.81h1.47c.5 0 .97-.3 1.19-.75l.47-1c1.31.18 2.64.18 3.95 0l.48 1c.21.46.67.75 1.18.75h1.45a1.31 1.31 0 0 0 1.21-1.8l-.5-1.21h1.7c.68 0 1.34-.52 1.34-1.26V10c0-1.14-.99-2-2.12-2H13.8a6.9 6.9 0 0 0-1.4-2.63A4.28 4.28 0 0 0 9.1 4Zm5.57 7-.57-2h1.78c.66 0 1.12.49 1.12 1v.74c0 .09-.11.26-.33.26h-2Zm-.57 1.53.44 1.05a.31.31 0 0 1-.29.43H12.8a.31.31 0 0 1-.28-.18l-.35-.75c.65-.14 1.3-.32 1.93-.55Zm-7.93.55-.36.75a.31.31 0 0 1-.28.18H4.07a.31.31 0 0 1-.29-.43l.44-1.05c.64.23 1.29.41 1.95.55Zm-2.54-1.96c-.27-.26-.5-.65-.58-1.12h.92l-.34 1.12ZM5.5 8.44c.27-.91.6-1.77 1.15-2.4A3.03 3.03 0 0 1 9.1 5c1.2 0 2 .43 2.56 1.05.59.63.96 1.5 1.23 2.39l.9 3.13c-3 1.1-6.25 1.1-9.25 0l.95-3.13Z"]));
          export const AppRecentFilled = ( /*#__PURE__*/createFluentIcon('AppRecentFilled', "1em", ["M7 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM2 6c0-1.1.9-2 2-2v12a2 2 0 0 1-2-2V6Zm14 10V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"]));
          export const AppTitleFilled = ( /*#__PURE__*/createFluentIcon('AppTitleFilled', "1em", ["M7 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7ZM4.5 17a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z"]));
          export const AppsListRegular = ( /*#__PURE__*/createFluentIcon('AppsListRegular', "1em", ["M2 3.5C2 2.67 2.67 2 3.5 2h1C5.33 2 6 2.67 6 3.5v1C6 5.33 5.33 6 4.5 6h-1A1.5 1.5 0 0 1 2 4.5v-1ZM3.5 3a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM2 9.5C2 8.67 2.67 8 3.5 8h1C5.33 8 6 8.67 6 9.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 2 10.5v-1ZM3.5 9a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM2 15.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 2 16.5v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM8 4.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z"]));
          export const AppsShieldRegular = ( /*#__PURE__*/createFluentIcon('AppsShieldRegular', "1em", ["M15.5 17H8.42c.16-.3.3-.64.39-1h.69v-5.5H6.98a4.76 4.76 0 0 1-1.35-1H9.5v-5a.5.5 0 0 0-.33-.47l-.08-.02L9 4H4.5a.5.5 0 0 0-.5.41v4.67c-.22.08-.43.2-.6.39a5.7 5.7 0 0 1-.4.38V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.39l2.19-2.26a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.01l-.1.12-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5h-.14Zm0-6.5h-5V16h5a.5.5 0 0 0 .5-.41V11a.5.5 0 0 0-.41-.5h-.09Zm-5-2.8v1.8h1.79L10.5 7.7Zm3.62-4.53a.5.5 0 0 0-.64-.05l-.07.06-2.62 2.71a.5.5 0 0 0-.05.63l.06.07 2.61 2.62c.17.17.43.2.62.07l.08-.06 2.76-2.63a.5.5 0 0 0 .05-.64l-.05-.07-2.75-2.7Zm-9.24 6.99c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z"]));
          export const ArrowDownLeftRegular = ( /*#__PURE__*/createFluentIcon('ArrowDownLeftRegular', "1em", ["M11.5 16a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v6.8L16.15 3.14a.5.5 0 1 1 .7.7L4.71 16h6.79Z"]));
          export const ArrowEnterFilled = ( /*#__PURE__*/createFluentIcon('ArrowEnterFilled', "1em", ["M7.75 17.5a.75.75 0 0 1 0-1.5H14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7.75a.75.75 0 0 1 0-1.5H14A3.5 3.5 0 0 1 17.5 6v8a3.5 3.5 0 0 1-3.5 3.5H7.75Zm0-11.3a.75.75 0 0 1 1.05.04l3 3.25c.27.29.27.73 0 1.02l-3 3.25a.75.75 0 1 1-1.1-1.02l1.84-1.99H1.75a.75.75 0 0 1 0-1.5h7.79l-1.84-2a.75.75 0 0 1 .04-1.05Z"]));
          export const ArrowExportRegular = ( /*#__PURE__*/createFluentIcon('ArrowExportRegular', "1em", ["M2.5 4c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM5 10c0-.28.22-.5.5-.5h10.8l-3.15-3.15a.5.5 0 0 1 .7-.7l4 4a.5.5 0 0 1 0 .7l-4 4a.5.5 0 0 1-.7-.7l3.14-3.15H5.5A.5.5 0 0 1 5 10Z"], { flipInRtl: true }));
          export const ArrowFlowDiagonalUpRightRegular = ( /*#__PURE__*/createFluentIcon('ArrowFlowDiagonalUpRightRegular', "1em", ["M10.5 4a.5.5 0 0 0 0 1h3.8l-6.56 6.55a3 3 0 1 0 .7.7L15 5.72V9.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5ZM4 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"], { flipInRtl: true }));
          export const ArrowRepeatAllRegular = ( /*#__PURE__*/createFluentIcon('ArrowRepeatAllRegular', "1em", ["M16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02A5 5 0 0 1 13.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 0 0 3.11-6.52.5.5 0 0 1 .39-.81Zm-4.85-4.02a.5.5 0 0 1 .63-.06l.07.06 2.5 2.5.06.07a.5.5 0 0 1 0 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 0 1-.56 0l-.07-.06-.06-.07a.5.5 0 0 1 0-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 0 0-3.1 6.52c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 6.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 0 1 .06-.63Z"], { flipInRtl: true }));
          export const ArrowSortFilled = ( /*#__PURE__*/createFluentIcon('ArrowSortFilled', "1em", ["M14.84 16.72a.76.76 0 0 1-.59.28.73.73 0 0 1-.53-.22l-3-3a.75.75 0 0 1 1.06-1.07l1.72 1.73V3.75a.75.75 0 0 1 1.5 0v10.68l1.72-1.71a.75.75 0 1 1 1.06 1.06l-2.94 2.94ZM6.34 3.28A.76.76 0 0 0 5.75 3c-.2 0-.38.07-.53.22l-3 3A.75.75 0 0 0 3.28 7.3L5 5.56v10.69a.75.75 0 0 0 1.5 0V5.57l1.72 1.71a.75.75 0 1 0 1.06-1.06L6.34 3.28Z"]));
          export const ArrowStepOutFilled = ( /*#__PURE__*/createFluentIcon('ArrowStepOutFilled', "1em", ["M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-4a.5.5 0 0 0 .5-.5V3.7l3.15 3.15a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L9.5 3.71v7.79c0 .28.22.5.5.5Z"]));
          export const ArrowTurnRightDownFilled = ( /*#__PURE__*/createFluentIcon('ArrowTurnRightDownFilled', "1em", ["M16.78 10.72c.3.3.3.77 0 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V7c0-.83-.67-1.5-1.5-1.5H3.75a.75.75 0 0 1 0-1.5H10a3 3 0 0 1 3 3v6.44l2.72-2.72c.3-.3.77-.3 1.06 0Z"]));
          export const ArrowUpExclamationFilled = ( /*#__PURE__*/createFluentIcon('ArrowUpExclamationFilled', "1em", ["M3 5a3 3 0 0 1 6 0c0 2.25-.79 5.21-1.22 6.69C7.54 12.49 6.8 13 6 13s-1.54-.52-1.78-1.31C3.8 10.2 3 7.23 3 5Zm1 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM15 3.7v13.8a.5.5 0 0 1-1 0V3.7l-2.15 2.15a.5.5 0 0 1-.7-.7l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7L15 3.71Z"]));
          export const BarcodeScannerDismissRegular = ( /*#__PURE__*/createFluentIcon('BarcodeScannerDismissRegular', "1em", ["M14.5 9a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm-12 4c.28 0 .5.22.5.5v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 0 1 0 1h-1A2.5 2.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5Zm13.85-1.35a.5.5 0 0 0-.7 0l-1.15 1.14-1.15-1.14a.5.5 0 1 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 1 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 1 0 .7-.7l-1.14-1.15 1.14-1.15a.5.5 0 0 0 0-.7ZM5.5 6c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5Zm3 0c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5Zm3 0c.28 0 .5.22.5.5v2.1c-.36.18-.7.4-1 .66V6.5c0-.28.22-.5.5-.5Zm3 0c.28 0 .5.22.5.5v1.52a5.56 5.56 0 0 0-1 0V6.5c0-.28.22-.5.5-.5Zm-9-3a.5.5 0 0 1 0 1h-1C3.67 4 3 4.67 3 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 4.5 3h1Zm10 0A2.5 2.5 0 0 1 18 5.5v1a.5.5 0 0 1-1 0v-1c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 0 1 0-1h1Z"]));
          export const Battery5Filled = ( /*#__PURE__*/createFluentIcon('Battery5Filled', "1em", ["M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h3.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z"]));
          export const BeakerFilled = ( /*#__PURE__*/createFluentIcon('BeakerFilled', "1em", ["M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .58.15 1.15.42 1.66l.9 1.66H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5ZM5.15 13l-.97 1.79A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.32-2.21L14.85 13h-9.7Z"]));
          export const BeakerAddRegular = ( /*#__PURE__*/createFluentIcon('BeakerAddRegular', "1em", ["M14 3a.5.5 0 0 1 0 1h-1v4.68c0 .18.02.35.04.52-.33.09-.65.2-.95.35a4.5 4.5 0 0 1-.09-.87V4H8v4.69a4.5 4.5 0 0 1-.54 2.13L6.82 12H9.6c-.16.32-.3.65-.4 1H6.29l-1.22 2.26a.5.5 0 0 0 .44.74h3.7c.1.35.24.68.4 1H5.5a1.5 1.5 0 0 1-1.32-2.21l2.4-4.44a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1 0-1h8Zm5 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          export const BeakerDismissFilled = ( /*#__PURE__*/createFluentIcon('BeakerDismissFilled', "1em", ["M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .18.02.35.04.52A5.51 5.51 0 0 0 9.6 12H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5Zm3.5 11c0-.52.07-1.02.2-1.5H5.16l-.97 1.79A1.5 1.5 0 0 0 5.5 17h4.1c-.38-.75-.6-1.6-.6-2.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z"]));
          export const BeakerEditFilled = ( /*#__PURE__*/createFluentIcon('BeakerEditFilled', "1em", ["M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .58.15 1.15.42 1.66l.41.77-.89.89H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5Zm4.77 11.17L11.94 13h-6.8l-.96 1.79A1.5 1.5 0 0 0 5.5 17h3.72l.21-.84a3.2 3.2 0 0 1 .84-1.49Zm.71.7 4.83-4.82a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"]));
          export const BenchRegular = ( /*#__PURE__*/createFluentIcon('BenchRegular', "1em", ["M3 6c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4a2 2 0 1 1 0 4v1.5a.5.5 0 0 1-1 0V14H4v1.5a.5.5 0 0 1-1 0V14a2 2 0 1 1 0-4V6Zm14 7a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2h14Zm-1-7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4h12V6Z"]));
          export const BinRecycleFullFilled = ( /*#__PURE__*/createFluentIcon('BinRecycleFullFilled', "1em", ["M6 2.2V4h2.3L6.34 2.06a.2.2 0 0 0-.35.15ZM5 4V2.2a1.2 1.2 0 0 1 2.06-.85L9 3.3V2.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5V4h1a.5.5 0 0 1 .5.56l-1.35 11.67A2 2 0 0 1 13.16 18H6.84a2 2 0 0 1-1.99-1.77L3.5 4.56A.5.5 0 0 1 4 4h1Zm9 0V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V4h4Zm-2.7 3.75c-.58-1-2.02-1-2.6 0l-.45.78a.5.5 0 1 0 .87.5l.45-.78a.5.5 0 0 1 .86 0l.45.78a.5.5 0 0 0 .87-.5l-.45-.78Zm.86 3.5a.5.5 0 0 1-.43.75H11a.5.5 0 0 0 0 1h.73a1.5 1.5 0 0 0 1.3-2.25l-.1-.19a.5.5 0 0 0-.87.5l.1.19ZM9 12h-.73a.5.5 0 0 1-.44-.75l.11-.19a.5.5 0 0 0-.86-.5l-.11.19A1.5 1.5 0 0 0 8.27 13H9a.5.5 0 0 0 0-1Z"]));
          export const BookContactsFilled = ( /*#__PURE__*/createFluentIcon('BookContactsFilled', "1em", ["M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm4 11c-2.14 0-3-.94-3-1.88C7 10.5 7.58 10 8.29 10h3.42c.71 0 1.29.5 1.29 1.13 0 .93-.86 1.87-3 1.87Zm1.5-5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"]));
          export const BookGlobeRegular = ( /*#__PURE__*/createFluentIcon('BookGlobeRegular', "1em", ["M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4ZM7.04 8h.97c.05-.77.2-1.49.42-2.06A3 3 0 0 0 7.04 8ZM6 8.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6.96-.5a3 3 0 0 0-1.4-2.06c.23.57.38 1.29.43 2.06h.97Zm-.97 1c-.05.77-.2 1.49-.42 2.06A3 3 0 0 0 12.96 9h-.97Zm-1-1a5.56 5.56 0 0 0-.39-1.78 1.88 1.88 0 0 0-.37-.59c-.11-.11-.2-.13-.23-.13-.04 0-.12.02-.23.13-.12.12-.25.31-.37.6-.2.45-.34 1.06-.38 1.77h1.96ZM9.01 9c.04.7.18 1.32.38 1.78.12.28.25.47.37.59.11.11.2.13.23.13.04 0 .12-.02.23-.13.12-.12.25-.31.37-.6.2-.45.34-1.06.38-1.77H9.02Zm-1 0h-.98a3 3 0 0 0 1.4 2.06A6.75 6.75 0 0 1 8 9Z"]));
          export const BookOpenLightbulbFilled = ( /*#__PURE__*/createFluentIcon('BookOpenLightbulbFilled', "1em", ["m17.4 17-.24 1.2a1 1 0 0 1-.98.8h-.36a1 1 0 0 1-.98-.8L14.6 17h2.8ZM8 3c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75v4.79a3.97 3.97 0 0 0-1.5-.5V4.74a.25.25 0 0 0-.25-.25H12c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h.88c.15.19.32.37.5.52l.04.18a1 1 0 0 0 .24.47 1 1 0 0 0-.06.33H12c-.79 0-1.5-.33-2-.86-.5.53-1.21.86-2 .86H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8Zm8 7a3 3 0 0 1 1.7 5.47l-.1.53h-3.2l-.1-.53A3 3 0 0 1 16 10ZM3.75 4.5a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25H8c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H3.75Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AddCircleRegular: FluentIcon;
          export declare const AlignSpaceAroundHorizontalFilled: FluentIcon;
          export declare const AlignSpaceFitVerticalRegular: FluentIcon;
          export declare const AnimalTurtleRegular: FluentIcon;
          export declare const AppRecentFilled: FluentIcon;
          export declare const AppTitleFilled: FluentIcon;
          export declare const AppsListRegular: FluentIcon;
          export declare const AppsShieldRegular: FluentIcon;
          export declare const ArrowDownLeftRegular: FluentIcon;
          export declare const ArrowEnterFilled: FluentIcon;
          export declare const ArrowExportRegular: FluentIcon;
          export declare const ArrowFlowDiagonalUpRightRegular: FluentIcon;
          export declare const ArrowRepeatAllRegular: FluentIcon;
          export declare const ArrowSortFilled: FluentIcon;
          export declare const ArrowStepOutFilled: FluentIcon;
          export declare const ArrowTurnRightDownFilled: FluentIcon;
          export declare const ArrowUpExclamationFilled: FluentIcon;
          export declare const BarcodeScannerDismissRegular: FluentIcon;
          export declare const Battery5Filled: FluentIcon;
          export declare const BeakerFilled: FluentIcon;
          export declare const BeakerAddRegular: FluentIcon;
          export declare const BeakerDismissFilled: FluentIcon;
          export declare const BeakerEditFilled: FluentIcon;
          export declare const BenchRegular: FluentIcon;
          export declare const BinRecycleFullFilled: FluentIcon;
          export declare const BookContactsFilled: FluentIcon;
          export declare const BookGlobeRegular: FluentIcon;
          export declare const BookOpenLightbulbFilled: FluentIcon;
          export declare const BorderBottomRegular: FluentIcon;
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
          exports.AddCircleRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddCircleRegular', "1em", ["M6 10c0-.28.22-.5.5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10Zm4 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"]));
          exports.AlignSpaceAroundHorizontalFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignSpaceAroundHorizontalFilled', "1em", ["M6 4a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm0 7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Z"]));
          exports.AlignSpaceFitVerticalRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignSpaceFitVerticalRegular', "1em", ["M6 1a2 2 0 0 0-2 2v4.5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6ZM5 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3Z", "M6 10.5a2 2 0 0 0-2 2V17c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2H6Zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4.5Z"]));
          exports.AnimalTurtleRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AnimalTurtleRegular', "1em", ["M9.1 4c-1.47 0-2.5.55-3.21 1.38a7.5 7.5 0 0 0-1.36 2.77L4.27 9H2.5a.5.5 0 0 0-.5.5c0 1.08.5 2.1 1.3 2.63l-.44 1.07a1.31 1.31 0 0 0 1.2 1.81h1.47c.5 0 .97-.3 1.19-.75l.47-1c1.31.18 2.64.18 3.95 0l.48 1c.21.46.67.75 1.18.75h1.45a1.31 1.31 0 0 0 1.21-1.8l-.5-1.21h1.7c.68 0 1.34-.52 1.34-1.26V10c0-1.14-.99-2-2.12-2H13.8a6.9 6.9 0 0 0-1.4-2.63A4.28 4.28 0 0 0 9.1 4Zm5.57 7-.57-2h1.78c.66 0 1.12.49 1.12 1v.74c0 .09-.11.26-.33.26h-2Zm-.57 1.53.44 1.05a.31.31 0 0 1-.29.43H12.8a.31.31 0 0 1-.28-.18l-.35-.75c.65-.14 1.3-.32 1.93-.55Zm-7.93.55-.36.75a.31.31 0 0 1-.28.18H4.07a.31.31 0 0 1-.29-.43l.44-1.05c.64.23 1.29.41 1.95.55Zm-2.54-1.96c-.27-.26-.5-.65-.58-1.12h.92l-.34 1.12ZM5.5 8.44c.27-.91.6-1.77 1.15-2.4A3.03 3.03 0 0 1 9.1 5c1.2 0 2 .43 2.56 1.05.59.63.96 1.5 1.23 2.39l.9 3.13c-3 1.1-6.25 1.1-9.25 0l.95-3.13Z"]));
          exports.AppRecentFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppRecentFilled', "1em", ["M7 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM2 6c0-1.1.9-2 2-2v12a2 2 0 0 1-2-2V6Zm14 10V4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"]));
          exports.AppTitleFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppTitleFilled', "1em", ["M7 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7ZM4.5 17a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z"]));
          exports.AppsListRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsListRegular', "1em", ["M2 3.5C2 2.67 2.67 2 3.5 2h1C5.33 2 6 2.67 6 3.5v1C6 5.33 5.33 6 4.5 6h-1A1.5 1.5 0 0 1 2 4.5v-1ZM3.5 3a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM2 9.5C2 8.67 2.67 8 3.5 8h1C5.33 8 6 8.67 6 9.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 2 10.5v-1ZM3.5 9a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM2 15.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 2 16.5v-1Zm1.5-.5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM8 4.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm0 6c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z"]));
          exports.AppsShieldRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsShieldRegular', "1em", ["M15.5 17H8.42c.16-.3.3-.64.39-1h.69v-5.5H6.98a4.76 4.76 0 0 1-1.35-1H9.5v-5a.5.5 0 0 0-.33-.47l-.08-.02L9 4H4.5a.5.5 0 0 0-.5.41v4.67c-.22.08-.43.2-.6.39a5.7 5.7 0 0 1-.4.38V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.39l2.19-2.26a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.01l-.1.12-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5h-.14Zm0-6.5h-5V16h5a.5.5 0 0 0 .5-.41V11a.5.5 0 0 0-.41-.5h-.09Zm-5-2.8v1.8h1.79L10.5 7.7Zm3.62-4.53a.5.5 0 0 0-.64-.05l-.07.06-2.62 2.71a.5.5 0 0 0-.05.63l.06.07 2.61 2.62c.17.17.43.2.62.07l.08-.06 2.76-2.63a.5.5 0 0 0 .05-.64l-.05-.07-2.75-2.7Zm-9.24 6.99c.5.53 1.48 1.38 2.68 1.55a.5.5 0 0 1 .44.48v2.33c0 3.12-2.78 4.25-3.39 4.46a.34.34 0 0 1-.22 0c-.6-.2-3.39-1.34-3.39-4.46v-2.33c0-.24.2-.44.44-.48a4.95 4.95 0 0 0 2.68-1.55c.2-.21.56-.21.76 0Z"]));
          exports.ArrowDownLeftRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowDownLeftRegular', "1em", ["M11.5 16a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v6.8L16.15 3.14a.5.5 0 1 1 .7.7L4.71 16h6.79Z"]));
          exports.ArrowEnterFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowEnterFilled', "1em", ["M7.75 17.5a.75.75 0 0 1 0-1.5H14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7.75a.75.75 0 0 1 0-1.5H14A3.5 3.5 0 0 1 17.5 6v8a3.5 3.5 0 0 1-3.5 3.5H7.75Zm0-11.3a.75.75 0 0 1 1.05.04l3 3.25c.27.29.27.73 0 1.02l-3 3.25a.75.75 0 1 1-1.1-1.02l1.84-1.99H1.75a.75.75 0 0 1 0-1.5h7.79l-1.84-2a.75.75 0 0 1 .04-1.05Z"]));
          exports.ArrowExportRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowExportRegular', "1em", ["M2.5 4c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM5 10c0-.28.22-.5.5-.5h10.8l-3.15-3.15a.5.5 0 0 1 .7-.7l4 4a.5.5 0 0 1 0 .7l-4 4a.5.5 0 0 1-.7-.7l3.14-3.15H5.5A.5.5 0 0 1 5 10Z"], { flipInRtl: true }));
          exports.ArrowFlowDiagonalUpRightRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowFlowDiagonalUpRightRegular', "1em", ["M10.5 4a.5.5 0 0 0 0 1h3.8l-6.56 6.55a3 3 0 1 0 .7.7L15 5.72V9.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5ZM4 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"], { flipInRtl: true }));
          exports.ArrowRepeatAllRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowRepeatAllRegular', "1em", ["M16.5 6.67a.5.5 0 0 1 .3.1l.08.07.01.02A5 5 0 0 1 13.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06-2.5-2.5a.5.5 0 0 1-.06-.63l.06-.07 2.5-2.5a.5.5 0 0 1 .76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 0 0 3.11-6.52.5.5 0 0 1 .39-.81Zm-4.85-4.02a.5.5 0 0 1 .63-.06l.07.06 2.5 2.5.06.07a.5.5 0 0 1 0 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 0 1-.56 0l-.07-.06-.06-.07a.5.5 0 0 1 0-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 0 0-3.1 6.52c.06.09.1.2.1.31a.5.5 0 0 1-.9.3A4.99 4.99 0 0 1 6.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 0 1 .06-.63Z"], { flipInRtl: true }));
          exports.ArrowSortFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowSortFilled', "1em", ["M14.84 16.72a.76.76 0 0 1-.59.28.73.73 0 0 1-.53-.22l-3-3a.75.75 0 0 1 1.06-1.07l1.72 1.73V3.75a.75.75 0 0 1 1.5 0v10.68l1.72-1.71a.75.75 0 1 1 1.06 1.06l-2.94 2.94ZM6.34 3.28A.76.76 0 0 0 5.75 3c-.2 0-.38.07-.53.22l-3 3A.75.75 0 0 0 3.28 7.3L5 5.56v10.69a.75.75 0 0 0 1.5 0V5.57l1.72 1.71a.75.75 0 1 0 1.06-1.06L6.34 3.28Z"]));
          exports.ArrowStepOutFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowStepOutFilled', "1em", ["M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-4a.5.5 0 0 0 .5-.5V3.7l3.15 3.15a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L9.5 3.71v7.79c0 .28.22.5.5.5Z"]));
          exports.ArrowTurnRightDownFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowTurnRightDownFilled', "1em", ["M16.78 10.72c.3.3.3.77 0 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V7c0-.83-.67-1.5-1.5-1.5H3.75a.75.75 0 0 1 0-1.5H10a3 3 0 0 1 3 3v6.44l2.72-2.72c.3-.3.77-.3 1.06 0Z"]));
          exports.ArrowUpExclamationFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowUpExclamationFilled', "1em", ["M3 5a3 3 0 0 1 6 0c0 2.25-.79 5.21-1.22 6.69C7.54 12.49 6.8 13 6 13s-1.54-.52-1.78-1.31C3.8 10.2 3 7.23 3 5Zm1 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM15 3.7v13.8a.5.5 0 0 1-1 0V3.7l-2.15 2.15a.5.5 0 0 1-.7-.7l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7L15 3.71Z"]));
          exports.BarcodeScannerDismissRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BarcodeScannerDismissRegular', "1em", ["M14.5 9a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm-12 4c.28 0 .5.22.5.5v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 0 1 0 1h-1A2.5 2.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5Zm13.85-1.35a.5.5 0 0 0-.7 0l-1.15 1.14-1.15-1.14a.5.5 0 1 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 1 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 1 0 .7-.7l-1.14-1.15 1.14-1.15a.5.5 0 0 0 0-.7ZM5.5 6c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5Zm3 0c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5Zm3 0c.28 0 .5.22.5.5v2.1c-.36.18-.7.4-1 .66V6.5c0-.28.22-.5.5-.5Zm3 0c.28 0 .5.22.5.5v1.52a5.56 5.56 0 0 0-1 0V6.5c0-.28.22-.5.5-.5Zm-9-3a.5.5 0 0 1 0 1h-1C3.67 4 3 4.67 3 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 4.5 3h1Zm10 0A2.5 2.5 0 0 1 18 5.5v1a.5.5 0 0 1-1 0v-1c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 0 1 0-1h1Z"]));
          exports.Battery5Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Battery5Filled', "1em", ["M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h3.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z"]));
          exports.BeakerFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BeakerFilled', "1em", ["M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .58.15 1.15.42 1.66l.9 1.66H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5ZM5.15 13l-.97 1.79A1.5 1.5 0 0 0 5.5 17h9a1.5 1.5 0 0 0 1.32-2.21L14.85 13h-9.7Z"]));
          exports.BeakerAddRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BeakerAddRegular', "1em", ["M14 3a.5.5 0 0 1 0 1h-1v4.68c0 .18.02.35.04.52-.33.09-.65.2-.95.35a4.5 4.5 0 0 1-.09-.87V4H8v4.69a4.5 4.5 0 0 1-.54 2.13L6.82 12H9.6c-.16.32-.3.65-.4 1H6.29l-1.22 2.26a.5.5 0 0 0 .44.74h3.7c.1.35.24.68.4 1H5.5a1.5 1.5 0 0 1-1.32-2.21l2.4-4.44a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1 0-1h8Zm5 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          exports.BeakerDismissFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BeakerDismissFilled', "1em", ["M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .18.02.35.04.52A5.51 5.51 0 0 0 9.6 12H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5Zm3.5 11c0-.52.07-1.02.2-1.5H5.16l-.97 1.79A1.5 1.5 0 0 0 5.5 17h4.1c-.38-.75-.6-1.6-.6-2.5Zm10 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z"]));
          exports.BeakerEditFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BeakerEditFilled', "1em", ["M5.5 3.5c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-1v4.68c0 .58.15 1.15.42 1.66l.41.77-.89.89H5.68l.9-1.65a3.5 3.5 0 0 0 .41-1.66V4H6a.5.5 0 0 1-.5-.5Zm4.77 11.17L11.94 13h-6.8l-.96 1.79A1.5 1.5 0 0 0 5.5 17h3.72l.21-.84a3.2 3.2 0 0 1 .84-1.49Zm.71.7 4.83-4.82a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"]));
          exports.BenchRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BenchRegular', "1em", ["M3 6c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4a2 2 0 1 1 0 4v1.5a.5.5 0 0 1-1 0V14H4v1.5a.5.5 0 0 1-1 0V14a2 2 0 1 1 0-4V6Zm14 7a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2h14Zm-1-7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4h12V6Z"]));
          exports.BinRecycleFullFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BinRecycleFullFilled', "1em", ["M6 2.2V4h2.3L6.34 2.06a.2.2 0 0 0-.35.15ZM5 4V2.2a1.2 1.2 0 0 1 2.06-.85L9 3.3V2.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5V4h1a.5.5 0 0 1 .5.56l-1.35 11.67A2 2 0 0 1 13.16 18H6.84a2 2 0 0 1-1.99-1.77L3.5 4.56A.5.5 0 0 1 4 4h1Zm9 0V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V4h4Zm-2.7 3.75c-.58-1-2.02-1-2.6 0l-.45.78a.5.5 0 1 0 .87.5l.45-.78a.5.5 0 0 1 .86 0l.45.78a.5.5 0 0 0 .87-.5l-.45-.78Zm.86 3.5a.5.5 0 0 1-.43.75H11a.5.5 0 0 0 0 1h.73a1.5 1.5 0 0 0 1.3-2.25l-.1-.19a.5.5 0 0 0-.87.5l.1.19ZM9 12h-.73a.5.5 0 0 1-.44-.75l.11-.19a.5.5 0 0 0-.86-.5l-.11.19A1.5 1.5 0 0 0 8.27 13H9a.5.5 0 0 0 0-1Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AddCircleRegular: FluentIcon;
          export declare const AlignSpaceAroundHorizontalFilled: FluentIcon;
          export declare const AlignSpaceFitVerticalRegular: FluentIcon;
          export declare const AnimalTurtleRegular: FluentIcon;
          export declare const AppRecentFilled: FluentIcon;
          export declare const AppTitleFilled: FluentIcon;
          export declare const AppsListRegular: FluentIcon;
          export declare const AppsShieldRegular: FluentIcon;
          export declare const ArrowDownLeftRegular: FluentIcon;
          export declare const ArrowEnterFilled: FluentIcon;
          export declare const ArrowExportRegular: FluentIcon;
          export declare const ArrowFlowDiagonalUpRightRegular: FluentIcon;
          export declare const ArrowRepeatAllRegular: FluentIcon;
          export declare const ArrowSortFilled: FluentIcon;
          export declare const ArrowStepOutFilled: FluentIcon;
          export declare const ArrowTurnRightDownFilled: FluentIcon;
          export declare const ArrowUpExclamationFilled: FluentIcon;
          export declare const BarcodeScannerDismissRegular: FluentIcon;
          export declare const Battery5Filled: FluentIcon;
          export declare const BeakerFilled: FluentIcon;
          export declare const BeakerAddRegular: FluentIcon;
          export declare const BeakerDismissFilled: FluentIcon;
          export declare const BeakerEditFilled: FluentIcon;
          export declare const BenchRegular: FluentIcon;
          export declare const BinRecycleFullFilled: FluentIcon;
          export declare const BookContactsFilled: FluentIcon;
          export declare const BookGlobeRegular: FluentIcon;
          export declare const BookOpenLightbulbFilled: FluentIcon;
          export declare const BorderBottomRegular: FluentIcon;
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
          export const AirplaneTakeOff20Filled = ( /*#__PURE__*/createFluentIcon('AirplaneTakeOff20Filled', "20", ["m11.68 5.16-.38.33c-.23.21-.48.38-.74.46L4.76 7.9l-.6-1.23a1.19 1.19 0 0 0-.24-.34c-.62-.6-1.74-.27-1.9.62L2 7.16v2.99c0 1.2 1.18 2.04 2.32 1.65l3.02-1.04-.3 1.46c-.3 1.56 1.7 2.47 2.66 1.21l3.1-4 4.18-1.35c.84-.27 1.33-1.28.74-2.1-.52-.7-1.43-1.68-2.67-1.92a2.98 2.98 0 0 0-.88-.04 4.9 4.9 0 0 0-2.5 1.14Zm-2.57.22L5.38 6.62l-.04-.05a1.6 1.6 0 0 1 2.17-2.29l1.6 1.1ZM2.5 17a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"]));
          export const Alert28Filled = ( /*#__PURE__*/createFluentIcon('Alert28Filled', "28", ["M17.47 22a3.5 3.5 0 0 1-6.94 0h6.94ZM14 3a8.5 8.5 0 0 1 8.5 8.25v4.36l1.41 3.65c.04.1.07.2.08.3l.01.16c0 .66-.5 1.2-1.15 1.27l-.13.01H5.27a1.28 1.28 0 0 1-1.23-1.62l.04-.12L5.5 15.6v-4.1C5.5 6.8 9.3 3 14 3Z"]));
          export const AlertOn24Filled = ( /*#__PURE__*/createFluentIcon('AlertOn24Filled', "24", ["M9.04 19h5.92a3 3 0 0 1-5.92 0ZM12 2a7.5 7.5 0 0 1 7.5 7.5v4l1.42 3.16a.95.95 0 0 1-.87 1.34H3.95a.95.95 0 0 1-.86-1.34L4.5 13.5V9.24A7.5 7.5 0 0 1 12 2Zm11 6.25a.75.75 0 0 1 .1 1.5H21a.75.75 0 0 1-.1-1.5H23Zm-20 0a.75.75 0 0 1 .1 1.5H1a.75.75 0 0 1-.1-1.5H3Zm19.6-5.7c.23.3.2.72-.07.98l-.08.07-2 1.5a.75.75 0 0 1-.98-1.13l.08-.07 2-1.5a.75.75 0 0 1 1.05.15ZM2.45 2.4l2 1.5a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 1 1 .9-1.2Z"]));
          export const AlignCenterHorizontal16Regular = ( /*#__PURE__*/createFluentIcon('AlignCenterHorizontal16Regular', "16", ["M15 7.5a.5.5 0 0 1-.5.5H14v1.25c0 .97-.78 1.75-1.75 1.75h-1.5C9.78 11 9 10.22 9 9.25V8H7v2.25C7 11.22 6.22 12 5.25 12h-1.5C2.78 12 2 11.22 2 10.25V8h-.5a.5.5 0 0 1 0-1H2V4.75C2 3.78 2.78 3 3.75 3h1.5C6.22 3 7 3.78 7 4.75V7h2V5.75C9 4.78 9.78 4 10.75 4h1.5c.97 0 1.75.78 1.75 1.75V7h.5c.28 0 .5.22.5.5ZM3 10.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-5.5A.75.75 0 0 0 5.25 4h-1.5a.75.75 0 0 0-.75.75v5.5Zm7-1c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v3.5Z"]));
          export const AlignLeft24Regular = ( /*#__PURE__*/createFluentIcon('AlignLeft24Regular', "24", ["M3 2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0V2.75ZM8.25 4C7.01 4 6 5 6 6.25v2.5C6 9.99 7 11 8.25 11h10.5C19.99 11 21 10 21 8.75v-2.5C21 5.01 20 4 18.75 4H8.25ZM7.5 6.25c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75H8.25a.75.75 0 0 1-.75-.75v-2.5ZM8.25 13C7.01 13 6 14 6 15.25v2.5C6 18.99 7 20 8.25 20h7c1.24 0 2.25-1 2.25-2.25v-2.5c0-1.24-1-2.25-2.25-2.25h-7Zm-.75 2.25c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7a.75.75 0 0 1-.75-.75v-2.5Z"]));
          export const AlignSpaceBetweenHorizontal20Filled = ( /*#__PURE__*/createFluentIcon('AlignSpaceBetweenHorizontal20Filled', "20", ["M6 1a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Zm0 13a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Z"]));
          export const AlignSpaceEvenlyVertical24Regular = ( /*#__PURE__*/createFluentIcon('AlignSpaceEvenlyVertical24Regular', "24", ["M6.5 3.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-11ZM4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v1A2.5 2.5 0 0 1 17.5 8h-11A2.5 2.5 0 0 1 4 5.5v-1Zm2.5 6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-11Zm-2.5 1A2.5 2.5 0 0 1 6.5 9h11a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 12.5v-1Zm1.5 7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-1Zm1-2.5A2.5 2.5 0 0 0 4 18.5v1A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5h-11Z"]));
          export const AnimalPawPrint28Filled = ( /*#__PURE__*/createFluentIcon('AnimalPawPrint28Filled', "28", ["M14.75 6.25c0-1.68 1.18-3.25 2.88-3.25s2.87 1.57 2.87 3.25-1.18 3.25-2.88 3.25-2.87-1.57-2.87-3.25Zm-13.5 3.5c0-1.68 1.18-3.25 2.88-3.25S7 8.07 7 9.75 5.82 13 4.12 13s-2.87-1.57-2.87-3.25ZM14 11a8 8 0 0 0-7.98 8.5 4.3 4.3 0 0 0 2.17 3.45A7.8 7.8 0 0 0 12.21 24h3.58a7.8 7.8 0 0 0 4.02-1.05A4.3 4.3 0 0 0 22 19a8 8 0 0 0-8-8Zm7-1.25c0-1.68 1.18-3.25 2.88-3.25s2.87 1.57 2.87 3.25S25.57 13 23.87 13 21 11.43 21 9.75ZM7.5 6.25C7.5 4.57 8.68 3 10.38 3s2.87 1.57 2.87 3.25-1.18 3.25-2.88 3.25S7.5 7.93 7.5 6.25Z"]));
          export const AppGeneric20Regular = ( /*#__PURE__*/createFluentIcon('AppGeneric20Regular', "20", ["M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM5.5 4C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5h-9ZM16 7H4v7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7ZM5 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Zm3 0H6v5h2V9Zm2 1.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5-2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"]));
          export const AppGeneric48Regular = ( /*#__PURE__*/createFluentIcon('AppGeneric48Regular', "48", ["M25.25 20a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5h-9.5ZM24 26.25c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25ZM12 23a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3V23Zm2.5-.5v11h4v-11h-4ZM12.25 6A6.25 6.25 0 0 0 6 12.25v23.5C6 39.2 8.8 42 12.25 42h23.5C39.2 42 42 39.2 42 35.75v-23.5C42 8.8 39.2 6 35.75 6h-23.5ZM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V14h-31v-1.75Zm3.75 27.25a3.75 3.75 0 0 1-3.75-3.75V16.5h31v19.25a3.75 3.75 0 0 1-3.75 3.75h-23.5Z"]));
          export const AppStore24Filled = ( /*#__PURE__*/createFluentIcon('AppStore24Filled', "24", ["M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5ZM9.37 15.25H7.63l-.07.12-.04.1a.75.75 0 0 0 1.28.74l.06-.08.5-.88Zm3.92-5.23-.87 1.5 2.66 4.6.06.09a.75.75 0 0 0 1.28-.74l-.04-.1-.5-.87h.97c.34-.05.6-.31.64-.64l.01-.1v-.1a.75.75 0 0 0-.65-.65h-1.84l-1.72-2.99Zm-.03-2.92a.75.75 0 0 0-.97.19l-.05.08-.24.41-.24-.4-.05-.09a.75.75 0 0 0-.87-.24l-.1.05-.09.06a.75.75 0 0 0-.23.86l.04.1.67 1.15L8.95 13h-1.7l-.1.01a.75.75 0 0 0 0 1.49h6.13L12.4 13h-1.73l2.85-4.87.05-.1a.75.75 0 0 0-.32-.93Z"]));
          export const ApprovalsApp24Regular = ( /*#__PURE__*/createFluentIcon('ApprovalsApp24Regular', "24", ["M11.78 1.72a.75.75 0 1 0-1.06 1.06L11.94 4a9 9 0 1 0 9.02 9.82.75.75 0 0 0-1.5-.13 7.5 7.5 0 1 1-7.52-8.19l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5Zm4 8.5c.3.3.3.77 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47 3.97-3.97c.3-.3.77-.3 1.06 0Z"]));
          export const ApprovalsApp32Color = ( /*#__PURE__*/createFluentIcon('ApprovalsApp32Color', "32", \`<path d="M14.7 1.3a1 1 0 1 0-1.4 1.4L15.6 5A13 13 0 1 0 29 18v-.08a.94.94 0 0 0-.96-.92h-.08a.98.98 0 0 0-.96 1A11 11 0 1 1 15.58 7l-2.29 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-4-4Z" fill="url(#ic_fluent_approvals_app_32_color__a)"/><path d="M22.7 14.7a1 1 0 0 0-1.4-1.4L16 18.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6Z" fill="url(#ic_fluent_approvals_app_32_color__b)"/><defs><linearGradient id="ic_fluent_approvals_app_32_color__a" x1="3" y1="2.76" x2="12.13" y2="35.89" gradientUnits="userSpaceOnUse"><stop stop-color="#0FAFFF"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_approvals_app_32_color__b" x1="22.66" y1="13.4" x2="9.08" y2="20.15" gradientUnits="userSpaceOnUse"><stop stop-color="#42B870"/><stop offset="1" stop-color="#309C61"/></linearGradient></defs>\`, { color: true }));
          export const AppsList32Regular = ( /*#__PURE__*/createFluentIcon('AppsList32Regular', "32", ["M5 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm9 1a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Zm1 9a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H14Zm0 10a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H14ZM2 15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5Zm0 8a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H5Zm-1 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z"]));
          export const AppsListDetail32Color = ( /*#__PURE__*/createFluentIcon('AppsListDetail32Color', "32", \`<path d="M15 6a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H15Z" fill="url(#ic_fluent_apps_list_detail_32_color__a)"/><path d="M15 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H15Z" fill="url(#ic_fluent_apps_list_detail_32_color__b)"/><path d="M14 11a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z" fill="url(#ic_fluent_apps_list_detail_32_color__c)"/><path d="M15 23a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2h-9Z" fill="url(#ic_fluent_apps_list_detail_32_color__d)"/><path d="M2 8a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Z" fill="url(#ic_fluent_apps_list_detail_32_color__e)"/><path d="M5 18a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H5Z" fill="url(#ic_fluent_apps_list_detail_32_color__f)"/><defs><linearGradient id="ic_fluent_apps_list_detail_32_color__a" x1="11.6" y1="3.29" x2="26.9" y2="26.01" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__b" x1="11.6" y1="3.29" x2="26.9" y2="26.01" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__c" x1="11.6" y1="3.29" x2="26.9" y2="26.01" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__d" x1="11.6" y1="3.29" x2="26.9" y2="26.01" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__e" x1="4.14" y1="7.92" x2="9.33" y2="25.65" gradientUnits="userSpaceOnUse"><stop offset=".13" stop-color="#9C6CFE"/><stop offset="1" stop-color="#7A41DC"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__f" x1="4.14" y1="7.92" x2="9.33" y2="25.65" gradientUnits="userSpaceOnUse"><stop offset=".13" stop-color="#9C6CFE"/><stop offset="1" stop-color="#7A41DC"/></linearGradient></defs>\`, { color: true }));
          export const AppsSettings20Regular = ( /*#__PURE__*/createFluentIcon('AppsSettings20Regular', "20", ["M15.5 17h-5.1c.16-.32.3-.65.4-1h4.7a.5.5 0 0 0 .5-.41V11a.5.5 0 0 0-.41-.5H10.5v1.7a5.51 5.51 0 0 0-1-1.47v-.23h-.22c-.44-.4-.94-.75-1.49-1H9.5v-5a.5.5 0 0 0-.33-.47l-.08-.02L9 4H4.5a.5.5 0 0 0-.5.41V9.2c-.35.1-.68.24-1 .4V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.39l2.19-2.26a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.01l-.1.12-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5h-.14Zm-5-9.3v1.8h1.79L10.5 7.7Zm3.62-4.53a.5.5 0 0 0-.64-.05l-.07.06-2.62 2.71a.5.5 0 0 0-.05.63l.06.07 2.62 2.62c.16.17.42.2.61.07l.08-.06 2.76-2.63a.5.5 0 0 0 .06-.64l-.06-.07-2.75-2.7ZM3.07 11.44a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 3 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 8 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55ZM5.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"]));
          export const Archive48Filled = ( /*#__PURE__*/createFluentIcon('Archive48Filled', "48", ["M6.25 8.75a2.5 2.5 0 0 1 2.5-2.5h30.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5v-4Zm2 9h31.5V34.5c0 4-3.25 7.25-7.25 7.25h-17c-4 0-7.25-3.25-7.25-7.25V17.75Zm12.25 4.5a1.25 1.25 0 1 0 0 2.5h7a1.25 1.25 0 1 0 0-2.5h-7Z"]));
          export const ArchiveArrowBack24Regular = ( /*#__PURE__*/createFluentIcon('ArchiveArrowBack24Regular', "24", ["M10.25 11a.75.75 0 0 0 0 1.5h3.1c.35-.3.74-.55 1.15-.77-.01-.4-.34-.73-.75-.73h-3.5Zm-2.5 8.5h3.56c.18.53.42 1.04.71 1.5H7.75A3.75 3.75 0 0 1 4 17.25V8.62c-.6-.4-1-1.09-1-1.87v-1.5C3 4.01 4 3 5.25 3h13.5C19.99 3 21 4 21 5.25v1.5c0 .78-.4 1.47-1 1.87v2.88c-.47-.2-.98-.34-1.5-.42V9h-13v8.25c0 1.24 1 2.25 2.25 2.25Zm-2.5-15a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H5.25ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-6.65-2.15a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65h2.04c1.24 0 2.25 1 2.25 2.25v.25a.5.5 0 0 0 1 0v-.25c0-1.8-1.46-3.25-3.25-3.25h-2.04l.64-.65Z"]));
          export const ArchiveArrowBack28Regular = ( /*#__PURE__*/createFluentIcon('ArchiveArrowBack28Regular', "28", ["M11.75 12.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM3 5.25C3 4.01 4 3 5.25 3h17.5C23.99 3 25 4 25 5.25v2c0 .78-.4 1.47-1 1.87v4.75a7.45 7.45 0 0 0-1.5-.6V9.5h-17v10.75c0 1.8 1.46 3.25 3.25 3.25h4.87c.24.54.53 1.04.88 1.5H8.75A4.75 4.75 0 0 1 4 20.25V9.12c-.6-.4-1-1.09-1-1.87v-2Zm2.25-.75a.75.75 0 0 0-.75.75v2c0 .41.34.75.75.75h17.5c.41 0 .75-.34.75-.75v-2a.75.75 0 0 0-.75-.75H5.25ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-8.15-2.65a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L17.71 20h2.54A2.75 2.75 0 0 1 23 22.75V23a.5.5 0 0 0 1 0v-.25A3.75 3.75 0 0 0 20.25 19h-2.54l1.14-1.15Z"]));
          export const ArchiveMultiple24Filled = ( /*#__PURE__*/createFluentIcon('ArchiveMultiple24Filled', "24", ["M4.75 2C3.78 2 3 2.78 3 3.75v1.5C3 6.22 3.78 7 4.75 7h13.5C19.22 7 20 6.22 20 5.25v-1.5C20 2.78 19.22 2 18.25 2H4.75ZM19 8H4v7.75a3.75 3.75 0 0 0 3.75 3.75h7.5A3.75 3.75 0 0 0 19 15.75V8ZM9 11.25c0-.41.34-.75.75-.75h3.48a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75Zm12.5.5c0-1.23-.59-2.32-1.5-3v7.5c0 2.35-1.9 4.25-4.25 4.25h-8.5c.68.91 1.77 1.5 3 1.5h5.5a5.75 5.75 0 0 0 5.75-5.75v-4.5Z"]));
          export const ArchiveSettings16Regular = ( /*#__PURE__*/createFluentIcon('ArchiveSettings16Regular', "16", ["M2.5 2C1.67 2 1 2.67 1 3.5v1c0 .65.42 1.2 1 1.41v5.59A2.5 2.5 0 0 0 4.5 14h2.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 0 1 3 11.5V6h10.5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11ZM2 3.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1Zm7.07 4.94a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 9 14.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 14 8.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"]));
          export const ArrowAutofitContent20Regular = ( /*#__PURE__*/createFluentIcon('ArrowAutofitContent20Regular', "20", ["M5.35 3.65c.2.2.2.5 0 .7L4.71 5H7.5a.5.5 0 0 1 0 1H4.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM5.5 9A2.5 2.5 0 0 0 3 11.5v3A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 14.5 9h-9ZM4 11.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-3Zm2 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H6Zm8.65-8.15a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H12.5a.5.5 0 0 1 0-1h2.8l-.65-.65Z"]));
          export const ArrowAutofitHeight20Regular = ( /*#__PURE__*/createFluentIcon('ArrowAutofitHeight20Regular', "20", ["m15 3.63 1.14 1.18a.5.5 0 1 0 .72-.7l-1.82-1.88a.75.75 0 0 0-1.08 0L12.14 4.1a.5.5 0 1 0 .72.7L14 3.63V7.5a.5.5 0 0 0 1 0V3.63ZM3 5c0-1.1.9-2 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V5Zm13.14 10.2L15 16.36V12.5a.5.5 0 1 0-1 0v3.87l-1.14-1.18a.5.5 0 1 0-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 1 0-.72-.7Z"]));
          export const ArrowBetweenDown24Filled = ( /*#__PURE__*/createFluentIcon('ArrowBetweenDown24Filled', "24", ["M6.5 2.25a1 1 0 0 0-2 0v.25A2.5 2.5 0 0 0 7 5h10a2.5 2.5 0 0 0 2.5-2.5v-.25a1 1 0 1 0-2 0v.25a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.25Zm5.5 4a1 1 0 0 1 1 1v7.09l2.8-2.8a1 1 0 0 1 1.4 1.42l-4.5 4.5a1 1 0 0 1-1.4 0l-4.5-4.5a1 1 0 1 1 1.4-1.42l2.8 2.8V7.25a1 1 0 0 1 1-1ZM4.5 21.5A2.5 2.5 0 0 1 7 19h10a2.5 2.5 0 0 1 2.5 2.5v.25a1 1 0 1 1-2 0v-.25a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v.25a1 1 0 1 1-2 0v-.25Z"]));
          export const ArrowBidirectionalUpDown20Filled = ( /*#__PURE__*/createFluentIcon('ArrowBidirectionalUpDown20Filled', "20", ["M6.78 7.78a.75.75 0 0 1-1.06-1.06l3.5-3.5c.3-.3.77-.3 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L10.5 5.56v8.88l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5c-.3.3-.77.3-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L9 14.44V5.56L6.78 7.78Z"]));
          export const ArrowBounce24Filled = ( /*#__PURE__*/createFluentIcon('ArrowBounce24Filled', "24", ["M11 7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V9.41l8.04 8.05a1 1 0 0 0 1.42 0L21.7 9.2a1 1 0 0 0-1.42-1.42l-7.54 7.55L5.41 8H10a1 1 0 0 0 1-1Z"]));
          export const ArrowCircleDownRight16Regular = ( /*#__PURE__*/createFluentIcon('ArrowCircleDownRight16Regular', "16", ["M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm2.5 3.5c.28 0 .5.22.5.5v4.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h3.3L5.64 6.35l-.07-.07a.5.5 0 0 1 .7-.7l.07.07L10 9.29V6c0-.28.22-.5.5-.5Z"]));
          export const ArrowCircleDownRight24Regular = ( /*#__PURE__*/createFluentIcon('ArrowCircleDownRight24Regular', "24", ["M13.5 14.5H8.74a.75.75 0 0 0 0 1.5h6.5c.41 0 .75-.34.75-.75v-6.5a.75.75 0 0 0-1.5 0v4.64L9.28 8.22a.75.75 0 1 0-1.06 1.06l5.27 5.22ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AirplaneTakeOff20Filled: FluentIcon;
          export declare const Alert28Filled: FluentIcon;
          export declare const AlertOn24Filled: FluentIcon;
          export declare const AlignCenterHorizontal16Regular: FluentIcon;
          export declare const AlignLeft24Regular: FluentIcon;
          export declare const AlignSpaceBetweenHorizontal20Filled: FluentIcon;
          export declare const AlignSpaceEvenlyVertical24Regular: FluentIcon;
          export declare const AnimalPawPrint28Filled: FluentIcon;
          export declare const AppGeneric20Regular: FluentIcon;
          export declare const AppGeneric48Regular: FluentIcon;
          export declare const AppStore24Filled: FluentIcon;
          export declare const ApprovalsApp24Regular: FluentIcon;
          export declare const ApprovalsApp32Color: FluentIcon;
          export declare const AppsList32Regular: FluentIcon;
          export declare const AppsListDetail32Color: FluentIcon;
          export declare const AppsSettings20Regular: FluentIcon;
          export declare const Archive48Filled: FluentIcon;
          export declare const ArchiveArrowBack24Regular: FluentIcon;
          export declare const ArchiveArrowBack28Regular: FluentIcon;
          export declare const ArchiveMultiple24Filled: FluentIcon;
          export declare const ArchiveSettings16Regular: FluentIcon;
          export declare const ArrowAutofitContent20Regular: FluentIcon;
          export declare const ArrowAutofitHeight20Regular: FluentIcon;
          export declare const ArrowBetweenDown24Filled: FluentIcon;
          export declare const ArrowBidirectionalUpDown20Filled: FluentIcon;
          export declare const ArrowBounce24Filled: FluentIcon;
          export declare const ArrowCircleDownRight16Regular: FluentIcon;
          export declare const ArrowCircleDownRight24Regular: FluentIcon;
          export declare const ArrowCircleDownSplit24Filled: FluentIcon;
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
          "... (17 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.AirplaneTakeOff20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AirplaneTakeOff20Filled', "20", ["m11.68 5.16-.38.33c-.23.21-.48.38-.74.46L4.76 7.9l-.6-1.23a1.19 1.19 0 0 0-.24-.34c-.62-.6-1.74-.27-1.9.62L2 7.16v2.99c0 1.2 1.18 2.04 2.32 1.65l3.02-1.04-.3 1.46c-.3 1.56 1.7 2.47 2.66 1.21l3.1-4 4.18-1.35c.84-.27 1.33-1.28.74-2.1-.52-.7-1.43-1.68-2.67-1.92a2.98 2.98 0 0 0-.88-.04 4.9 4.9 0 0 0-2.5 1.14Zm-2.57.22L5.38 6.62l-.04-.05a1.6 1.6 0 0 1 2.17-2.29l1.6 1.1ZM2.5 17a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"]));
          exports.Alert28Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Alert28Filled', "28", ["M17.47 22a3.5 3.5 0 0 1-6.94 0h6.94ZM14 3a8.5 8.5 0 0 1 8.5 8.25v4.36l1.41 3.65c.04.1.07.2.08.3l.01.16c0 .66-.5 1.2-1.15 1.27l-.13.01H5.27a1.28 1.28 0 0 1-1.23-1.62l.04-.12L5.5 15.6v-4.1C5.5 6.8 9.3 3 14 3Z"]));
          exports.AlertOn24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlertOn24Filled', "24", ["M9.04 19h5.92a3 3 0 0 1-5.92 0ZM12 2a7.5 7.5 0 0 1 7.5 7.5v4l1.42 3.16a.95.95 0 0 1-.87 1.34H3.95a.95.95 0 0 1-.86-1.34L4.5 13.5V9.24A7.5 7.5 0 0 1 12 2Zm11 6.25a.75.75 0 0 1 .1 1.5H21a.75.75 0 0 1-.1-1.5H23Zm-20 0a.75.75 0 0 1 .1 1.5H1a.75.75 0 0 1-.1-1.5H3Zm19.6-5.7c.23.3.2.72-.07.98l-.08.07-2 1.5a.75.75 0 0 1-.98-1.13l.08-.07 2-1.5a.75.75 0 0 1 1.05.15ZM2.45 2.4l2 1.5a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 1 1 .9-1.2Z"]));
          exports.AlignCenterHorizontal16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignCenterHorizontal16Regular', "16", ["M15 7.5a.5.5 0 0 1-.5.5H14v1.25c0 .97-.78 1.75-1.75 1.75h-1.5C9.78 11 9 10.22 9 9.25V8H7v2.25C7 11.22 6.22 12 5.25 12h-1.5C2.78 12 2 11.22 2 10.25V8h-.5a.5.5 0 0 1 0-1H2V4.75C2 3.78 2.78 3 3.75 3h1.5C6.22 3 7 3.78 7 4.75V7h2V5.75C9 4.78 9.78 4 10.75 4h1.5c.97 0 1.75.78 1.75 1.75V7h.5c.28 0 .5.22.5.5ZM3 10.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-5.5A.75.75 0 0 0 5.25 4h-1.5a.75.75 0 0 0-.75.75v5.5Zm7-1c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v3.5Z"]));
          exports.AlignLeft24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignLeft24Regular', "24", ["M3 2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0V2.75ZM8.25 4C7.01 4 6 5 6 6.25v2.5C6 9.99 7 11 8.25 11h10.5C19.99 11 21 10 21 8.75v-2.5C21 5.01 20 4 18.75 4H8.25ZM7.5 6.25c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75H8.25a.75.75 0 0 1-.75-.75v-2.5ZM8.25 13C7.01 13 6 14 6 15.25v2.5C6 18.99 7 20 8.25 20h7c1.24 0 2.25-1 2.25-2.25v-2.5c0-1.24-1-2.25-2.25-2.25h-7Zm-.75 2.25c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7a.75.75 0 0 1-.75-.75v-2.5Z"]));
          exports.AlignSpaceBetweenHorizontal20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignSpaceBetweenHorizontal20Filled', "20", ["M6 1a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Zm0 13a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Z"]));
          exports.AlignSpaceEvenlyVertical24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignSpaceEvenlyVertical24Regular', "24", ["M6.5 3.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-11ZM4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v1A2.5 2.5 0 0 1 17.5 8h-11A2.5 2.5 0 0 1 4 5.5v-1Zm2.5 6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-11Zm-2.5 1A2.5 2.5 0 0 1 6.5 9h11a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 12.5v-1Zm1.5 7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-1Zm1-2.5A2.5 2.5 0 0 0 4 18.5v1A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5h-11Z"]));
          exports.AnimalPawPrint28Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AnimalPawPrint28Filled', "28", ["M14.75 6.25c0-1.68 1.18-3.25 2.88-3.25s2.87 1.57 2.87 3.25-1.18 3.25-2.88 3.25-2.87-1.57-2.87-3.25Zm-13.5 3.5c0-1.68 1.18-3.25 2.88-3.25S7 8.07 7 9.75 5.82 13 4.12 13s-2.87-1.57-2.87-3.25ZM14 11a8 8 0 0 0-7.98 8.5 4.3 4.3 0 0 0 2.17 3.45A7.8 7.8 0 0 0 12.21 24h3.58a7.8 7.8 0 0 0 4.02-1.05A4.3 4.3 0 0 0 22 19a8 8 0 0 0-8-8Zm7-1.25c0-1.68 1.18-3.25 2.88-3.25s2.87 1.57 2.87 3.25S25.57 13 23.87 13 21 11.43 21 9.75ZM7.5 6.25C7.5 4.57 8.68 3 10.38 3s2.87 1.57 2.87 3.25-1.18 3.25-2.88 3.25S7.5 7.93 7.5 6.25Z"]));
          exports.AppGeneric20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppGeneric20Regular', "20", ["M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM5.5 4C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5h-9ZM16 7H4v7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7ZM5 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9Zm3 0H6v5h2V9Zm2 1.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5-2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"]));
          exports.AppGeneric48Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppGeneric48Regular', "48", ["M25.25 20a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5h-9.5ZM24 26.25c0-.69.56-1.25 1.25-1.25h6.5a1.25 1.25 0 1 1 0 2.5h-6.5c-.69 0-1.25-.56-1.25-1.25ZM12 23a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3V23Zm2.5-.5v11h4v-11h-4ZM12.25 6A6.25 6.25 0 0 0 6 12.25v23.5C6 39.2 8.8 42 12.25 42h23.5C39.2 42 42 39.2 42 35.75v-23.5C42 8.8 39.2 6 35.75 6h-23.5ZM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V14h-31v-1.75Zm3.75 27.25a3.75 3.75 0 0 1-3.75-3.75V16.5h31v19.25a3.75 3.75 0 0 1-3.75 3.75h-23.5Z"]));
          exports.AppStore24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppStore24Filled', "24", ["M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5ZM9.37 15.25H7.63l-.07.12-.04.1a.75.75 0 0 0 1.28.74l.06-.08.5-.88Zm3.92-5.23-.87 1.5 2.66 4.6.06.09a.75.75 0 0 0 1.28-.74l-.04-.1-.5-.87h.97c.34-.05.6-.31.64-.64l.01-.1v-.1a.75.75 0 0 0-.65-.65h-1.84l-1.72-2.99Zm-.03-2.92a.75.75 0 0 0-.97.19l-.05.08-.24.41-.24-.4-.05-.09a.75.75 0 0 0-.87-.24l-.1.05-.09.06a.75.75 0 0 0-.23.86l.04.1.67 1.15L8.95 13h-1.7l-.1.01a.75.75 0 0 0 0 1.49h6.13L12.4 13h-1.73l2.85-4.87.05-.1a.75.75 0 0 0-.32-.93Z"]));
          exports.ApprovalsApp24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ApprovalsApp24Regular', "24", ["M11.78 1.72a.75.75 0 1 0-1.06 1.06L11.94 4a9 9 0 1 0 9.02 9.82.75.75 0 0 0-1.5-.13 7.5 7.5 0 1 1-7.52-8.19l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5Zm4 8.5c.3.3.3.77 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47 3.97-3.97c.3-.3.77-.3 1.06 0Z"]));
          exports.ApprovalsApp32Color = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ApprovalsApp32Color', "32", \`<path d="M14.7 1.3a1 1 0 1 0-1.4 1.4L15.6 5A13 13 0 1 0 29 18v-.08a.94.94 0 0 0-.96-.92h-.08a.98.98 0 0 0-.96 1A11 11 0 1 1 15.58 7l-2.29 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-4-4Z" fill="url(#ic_fluent_approvals_app_32_color__a)"/><path d="M22.7 14.7a1 1 0 0 0-1.4-1.4L16 18.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6Z" fill="url(#ic_fluent_approvals_app_32_color__b)"/><defs><linearGradient id="ic_fluent_approvals_app_32_color__a" x1="3" y1="2.76" x2="12.13" y2="35.89" gradientUnits="userSpaceOnUse"><stop stop-color="#0FAFFF"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_approvals_app_32_color__b" x1="22.66" y1="13.4" x2="9.08" y2="20.15" gradientUnits="userSpaceOnUse"><stop stop-color="#42B870"/><stop offset="1" stop-color="#309C61"/></linearGradient></defs>\`, { color: true }));
          exports.AppsList32Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsList32Regular', "32", ["M5 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm9 1a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Zm1 9a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H14Zm0 10a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H14ZM2 15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5Zm0 8a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H5Zm-1 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z"]));
          exports.AppsListDetail32Color = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsListDetail32Color', "32", \`<path d="M15 6a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H15Z" fill="url(#ic_fluent_apps_list_detail_32_color__a)"/><path d="M15 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H15Z" fill="url(#ic_fluent_apps_list_detail_32_color__b)"/><path d="M14 11a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z" fill="url(#ic_fluent_apps_list_detail_32_color__c)"/><path d="M15 23a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2h-9Z" fill="url(#ic_fluent_apps_list_detail_32_color__d)"/><path d="M2 8a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Z" fill="url(#ic_fluent_apps_list_detail_32_color__e)"/><path d="M5 18a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H5Z" fill="url(#ic_fluent_apps_list_detail_32_color__f)"/><defs><linearGradient id="ic_fluent_apps_list_detail_32_color__a" x1="11.6" y1="3.29" x2="26.9" y2="26.01" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__b" x1="11.6" y1="3.29" x2="26.9" y2="26.01" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__c" x1="11.6" y1="3.29" x2="26.9" y2="26.01" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__d" x1="11.6" y1="3.29" x2="26.9" y2="26.01" gradientUnits="userSpaceOnUse"><stop stop-color="#36DFF1"/><stop offset="1" stop-color="#0094F0"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__e" x1="4.14" y1="7.92" x2="9.33" y2="25.65" gradientUnits="userSpaceOnUse"><stop offset=".13" stop-color="#9C6CFE"/><stop offset="1" stop-color="#7A41DC"/></linearGradient><linearGradient id="ic_fluent_apps_list_detail_32_color__f" x1="4.14" y1="7.92" x2="9.33" y2="25.65" gradientUnits="userSpaceOnUse"><stop offset=".13" stop-color="#9C6CFE"/><stop offset="1" stop-color="#7A41DC"/></linearGradient></defs>\`, { color: true }));
          exports.AppsSettings20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsSettings20Regular', "20", ["M15.5 17h-5.1c.16-.32.3-.65.4-1h4.7a.5.5 0 0 0 .5-.41V11a.5.5 0 0 0-.41-.5H10.5v1.7a5.51 5.51 0 0 0-1-1.47v-.23h-.22c-.44-.4-.94-.75-1.49-1H9.5v-5a.5.5 0 0 0-.33-.47l-.08-.02L9 4H4.5a.5.5 0 0 0-.5.41V9.2c-.35.1-.68.24-1 .4V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.39l2.19-2.26a1.5 1.5 0 0 1 2-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.01l-.1.12-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5h-.14Zm-5-9.3v1.8h1.79L10.5 7.7Zm3.62-4.53a.5.5 0 0 0-.64-.05l-.07.06-2.62 2.71a.5.5 0 0 0-.05.63l.06.07 2.62 2.62c.16.17.42.2.61.07l.08-.06 2.76-2.63a.5.5 0 0 0 .06-.64l-.06-.07-2.75-2.7ZM3.07 11.44a2 2 0 0 1-1.43 2.48l-.47.12a4.7 4.7 0 0 0 .01 1.01l.35.09A2 2 0 0 1 3 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 8 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55ZM5.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"]));
          exports.Archive48Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Archive48Filled', "48", ["M6.25 8.75a2.5 2.5 0 0 1 2.5-2.5h30.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5v-4Zm2 9h31.5V34.5c0 4-3.25 7.25-7.25 7.25h-17c-4 0-7.25-3.25-7.25-7.25V17.75Zm12.25 4.5a1.25 1.25 0 1 0 0 2.5h7a1.25 1.25 0 1 0 0-2.5h-7Z"]));
          exports.ArchiveArrowBack24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArchiveArrowBack24Regular', "24", ["M10.25 11a.75.75 0 0 0 0 1.5h3.1c.35-.3.74-.55 1.15-.77-.01-.4-.34-.73-.75-.73h-3.5Zm-2.5 8.5h3.56c.18.53.42 1.04.71 1.5H7.75A3.75 3.75 0 0 1 4 17.25V8.62c-.6-.4-1-1.09-1-1.87v-1.5C3 4.01 4 3 5.25 3h13.5C19.99 3 21 4 21 5.25v1.5c0 .78-.4 1.47-1 1.87v2.88c-.47-.2-.98-.34-1.5-.42V9h-13v8.25c0 1.24 1 2.25 2.25 2.25Zm-2.5-15a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H5.25ZM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-6.65-2.15a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65h2.04c1.24 0 2.25 1 2.25 2.25v.25a.5.5 0 0 0 1 0v-.25c0-1.8-1.46-3.25-3.25-3.25h-2.04l.64-.65Z"]));
          exports.ArchiveArrowBack28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArchiveArrowBack28Regular', "28", ["M11.75 12.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM3 5.25C3 4.01 4 3 5.25 3h17.5C23.99 3 25 4 25 5.25v2c0 .78-.4 1.47-1 1.87v4.75a7.45 7.45 0 0 0-1.5-.6V9.5h-17v10.75c0 1.8 1.46 3.25 3.25 3.25h4.87c.24.54.53 1.04.88 1.5H8.75A4.75 4.75 0 0 1 4 20.25V9.12c-.6-.4-1-1.09-1-1.87v-2Zm2.25-.75a.75.75 0 0 0-.75.75v2c0 .41.34.75.75.75h17.5c.41 0 .75-.34.75-.75v-2a.75.75 0 0 0-.75-.75H5.25ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-8.15-2.65a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L17.71 20h2.54A2.75 2.75 0 0 1 23 22.75V23a.5.5 0 0 0 1 0v-.25A3.75 3.75 0 0 0 20.25 19h-2.54l1.14-1.15Z"]));
          exports.ArchiveMultiple24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArchiveMultiple24Filled', "24", ["M4.75 2C3.78 2 3 2.78 3 3.75v1.5C3 6.22 3.78 7 4.75 7h13.5C19.22 7 20 6.22 20 5.25v-1.5C20 2.78 19.22 2 18.25 2H4.75ZM19 8H4v7.75a3.75 3.75 0 0 0 3.75 3.75h7.5A3.75 3.75 0 0 0 19 15.75V8ZM9 11.25c0-.41.34-.75.75-.75h3.48a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75Zm12.5.5c0-1.23-.59-2.32-1.5-3v7.5c0 2.35-1.9 4.25-4.25 4.25h-8.5c.68.91 1.77 1.5 3 1.5h5.5a5.75 5.75 0 0 0 5.75-5.75v-4.5Z"]));
          exports.ArchiveSettings16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArchiveSettings16Regular', "16", ["M2.5 2C1.67 2 1 2.67 1 3.5v1c0 .65.42 1.2 1 1.41v5.59A2.5 2.5 0 0 0 4.5 14h2.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 0 1 3 11.5V6h10.5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11ZM2 3.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1Zm7.07 4.94a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 9 14.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 14 8.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"]));
          exports.ArrowAutofitContent20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowAutofitContent20Regular', "20", ["M5.35 3.65c.2.2.2.5 0 .7L4.71 5H7.5a.5.5 0 0 1 0 1H4.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM5.5 9A2.5 2.5 0 0 0 3 11.5v3A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 14.5 9h-9ZM4 11.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-3Zm2 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H6Zm8.65-8.15a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H12.5a.5.5 0 0 1 0-1h2.8l-.65-.65Z"]));
          exports.ArrowAutofitHeight20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowAutofitHeight20Regular', "20", ["m15 3.63 1.14 1.18a.5.5 0 1 0 .72-.7l-1.82-1.88a.75.75 0 0 0-1.08 0L12.14 4.1a.5.5 0 1 0 .72.7L14 3.63V7.5a.5.5 0 0 0 1 0V3.63ZM3 5c0-1.1.9-2 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V5Zm13.14 10.2L15 16.36V12.5a.5.5 0 1 0-1 0v3.87l-1.14-1.18a.5.5 0 1 0-.72.7l1.82 1.88c.3.3.79.3 1.08 0l1.82-1.88a.5.5 0 1 0-.72-.7Z"]));
          exports.ArrowBetweenDown24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowBetweenDown24Filled', "24", ["M6.5 2.25a1 1 0 0 0-2 0v.25A2.5 2.5 0 0 0 7 5h10a2.5 2.5 0 0 0 2.5-2.5v-.25a1 1 0 1 0-2 0v.25a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.25Zm5.5 4a1 1 0 0 1 1 1v7.09l2.8-2.8a1 1 0 0 1 1.4 1.42l-4.5 4.5a1 1 0 0 1-1.4 0l-4.5-4.5a1 1 0 1 1 1.4-1.42l2.8 2.8V7.25a1 1 0 0 1 1-1ZM4.5 21.5A2.5 2.5 0 0 1 7 19h10a2.5 2.5 0 0 1 2.5 2.5v.25a1 1 0 1 1-2 0v-.25a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v.25a1 1 0 1 1-2 0v-.25Z"]));
          exports.ArrowBidirectionalUpDown20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowBidirectionalUpDown20Filled', "20", ["M6.78 7.78a.75.75 0 0 1-1.06-1.06l3.5-3.5c.3-.3.77-.3 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L10.5 5.56v8.88l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5c-.3.3-.77.3-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L9 14.44V5.56L6.78 7.78Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AirplaneTakeOff20Filled: FluentIcon;
          export declare const Alert28Filled: FluentIcon;
          export declare const AlertOn24Filled: FluentIcon;
          export declare const AlignCenterHorizontal16Regular: FluentIcon;
          export declare const AlignLeft24Regular: FluentIcon;
          export declare const AlignSpaceBetweenHorizontal20Filled: FluentIcon;
          export declare const AlignSpaceEvenlyVertical24Regular: FluentIcon;
          export declare const AnimalPawPrint28Filled: FluentIcon;
          export declare const AppGeneric20Regular: FluentIcon;
          export declare const AppGeneric48Regular: FluentIcon;
          export declare const AppStore24Filled: FluentIcon;
          export declare const ApprovalsApp24Regular: FluentIcon;
          export declare const ApprovalsApp32Color: FluentIcon;
          export declare const AppsList32Regular: FluentIcon;
          export declare const AppsListDetail32Color: FluentIcon;
          export declare const AppsSettings20Regular: FluentIcon;
          export declare const Archive48Filled: FluentIcon;
          export declare const ArchiveArrowBack24Regular: FluentIcon;
          export declare const ArchiveArrowBack28Regular: FluentIcon;
          export declare const ArchiveMultiple24Filled: FluentIcon;
          export declare const ArchiveSettings16Regular: FluentIcon;
          export declare const ArrowAutofitContent20Regular: FluentIcon;
          export declare const ArrowAutofitHeight20Regular: FluentIcon;
          export declare const ArrowBetweenDown24Filled: FluentIcon;
          export declare const ArrowBidirectionalUpDown20Filled: FluentIcon;
          export declare const ArrowBounce24Filled: FluentIcon;
          export declare const ArrowCircleDownRight16Regular: FluentIcon;
          export declare const ArrowCircleDownRight24Regular: FluentIcon;
          export declare const ArrowCircleDownSplit24Filled: FluentIcon;
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
          export const AirplaneLandingFilled = ( /*#__PURE__*/createFluentFontIcon("AirplaneLandingFilled", "", 2, undefined));
          export const ArrowAutofitHeightInRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowAutofitHeightInRegular", "", 2, undefined));
          export const ArrowSortUpLinesRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowSortUpLinesRegular", "", 2, undefined));
          export const ArrowStepOutFilled = ( /*#__PURE__*/createFluentFontIcon("ArrowStepOutFilled", "", 2, undefined));
          export const ArrowSyncCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon("ArrowSyncCheckmarkFilled", "", 2, undefined, { flipInRtl: true }));
          export const ArrowTrendingLinesRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowTrendingLinesRegular", "", 2, undefined, { flipInRtl: true }));
          export const BluetoothRegular = ( /*#__PURE__*/createFluentFontIcon("BluetoothRegular", "", 2, undefined));
          export const BookGlobeFilled = ( /*#__PURE__*/createFluentFontIcon("BookGlobeFilled", "", 2, undefined));
          export const BorderBottomRegular = ( /*#__PURE__*/createFluentFontIcon("BorderBottomRegular", "", 2, undefined));
          export const BuildingRetailShieldRegular = ( /*#__PURE__*/createFluentFontIcon("BuildingRetailShieldRegular", "", 2, undefined));
          export const BuildingShopFilled = ( /*#__PURE__*/createFluentFontIcon("BuildingShopFilled", "", 2, undefined));
          export const CalendarEditRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarEditRegular", "", 2, undefined));
          export const CalendarLockRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarLockRegular", "", 2, undefined));
          export const CalendarSearchFilled = ( /*#__PURE__*/createFluentFontIcon("CalendarSearchFilled", "", 2, undefined));
          export const CatchUpRegular = ( /*#__PURE__*/createFluentFontIcon("CatchUpRegular", "", 2, undefined));
          export const ChatAddFilled = ( /*#__PURE__*/createFluentFontIcon("ChatAddFilled", "", 2, undefined));
          export const CheckboxWarningRegular = ( /*#__PURE__*/createFluentFontIcon("CheckboxWarningRegular", "", 2, undefined));
          export const ChessFilled = ( /*#__PURE__*/createFluentFontIcon("ChessFilled", "", 2, undefined));
          export const CircleEraserFilled = ( /*#__PURE__*/createFluentFontIcon("CircleEraserFilled", "", 2, undefined));
          export const ClipboardTextEditRegular = ( /*#__PURE__*/createFluentFontIcon("ClipboardTextEditRegular", "", 2, undefined));
          export const CodeTextEditRegular = ( /*#__PURE__*/createFluentFontIcon("CodeTextEditRegular", "", 2, undefined));
          export const ContractUpRightFilled = ( /*#__PURE__*/createFluentFontIcon("ContractUpRightFilled", "", 2, undefined));
          export const ControlButtonRegular = ( /*#__PURE__*/createFluentFontIcon("ControlButtonRegular", "", 2, undefined));
          export const DataUsageSettingsFilled = ( /*#__PURE__*/createFluentFontIcon("DataUsageSettingsFilled", "", 2, undefined));
          export const DocumentPageTopRightFilled = ( /*#__PURE__*/createFluentFontIcon("DocumentPageTopRightFilled", "", 2, undefined));
          export const DocumentTextToolboxRegular = ( /*#__PURE__*/createFluentFontIcon("DocumentTextToolboxRegular", "", 2, undefined));
          export const DrawTextFilled = ( /*#__PURE__*/createFluentFontIcon("DrawTextFilled", "", 2, undefined));
          export const EmojiAddFilled = ( /*#__PURE__*/createFluentFontIcon("EmojiAddFilled", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const AirplaneLandingFilled: FluentFontIcon;
          export declare const ArrowAutofitHeightInRegular: FluentFontIcon;
          export declare const ArrowSortUpLinesRegular: FluentFontIcon;
          export declare const ArrowStepOutFilled: FluentFontIcon;
          export declare const ArrowSyncCheckmarkFilled: FluentFontIcon;
          export declare const ArrowTrendingLinesRegular: FluentFontIcon;
          export declare const BluetoothRegular: FluentFontIcon;
          export declare const BookGlobeFilled: FluentFontIcon;
          export declare const BorderBottomRegular: FluentFontIcon;
          export declare const BuildingRetailShieldRegular: FluentFontIcon;
          export declare const BuildingShopFilled: FluentFontIcon;
          export declare const CalendarEditRegular: FluentFontIcon;
          export declare const CalendarLockRegular: FluentFontIcon;
          export declare const CalendarSearchFilled: FluentFontIcon;
          export declare const CatchUpRegular: FluentFontIcon;
          export declare const ChatAddFilled: FluentFontIcon;
          export declare const CheckboxWarningRegular: FluentFontIcon;
          export declare const ChessFilled: FluentFontIcon;
          export declare const CircleEraserFilled: FluentFontIcon;
          export declare const ClipboardTextEditRegular: FluentFontIcon;
          export declare const CodeTextEditRegular: FluentFontIcon;
          export declare const ContractUpRightFilled: FluentFontIcon;
          export declare const ControlButtonRegular: FluentFontIcon;
          export declare const DataUsageSettingsFilled: FluentFontIcon;
          export declare const DocumentPageTopRightFilled: FluentFontIcon;
          export declare const DocumentTextToolboxRegular: FluentFontIcon;
          export declare const DrawTextFilled: FluentFontIcon;
          export declare const EmojiAddFilled: FluentFontIcon;
          export declare const ErrorCircleSettingsFilled: FluentFontIcon;
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
          exports.AirplaneLandingFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AirplaneLandingFilled", "", 2, undefined));
          exports.ArrowAutofitHeightInRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowAutofitHeightInRegular", "", 2, undefined));
          exports.ArrowSortUpLinesRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowSortUpLinesRegular", "", 2, undefined));
          exports.ArrowStepOutFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowStepOutFilled", "", 2, undefined));
          exports.ArrowSyncCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowSyncCheckmarkFilled", "", 2, undefined, { flipInRtl: true }));
          exports.ArrowTrendingLinesRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowTrendingLinesRegular", "", 2, undefined, { flipInRtl: true }));
          exports.BluetoothRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BluetoothRegular", "", 2, undefined));
          exports.BookGlobeFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BookGlobeFilled", "", 2, undefined));
          exports.BorderBottomRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BorderBottomRegular", "", 2, undefined));
          exports.BuildingRetailShieldRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BuildingRetailShieldRegular", "", 2, undefined));
          exports.BuildingShopFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BuildingShopFilled", "", 2, undefined));
          exports.CalendarEditRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarEditRegular", "", 2, undefined));
          exports.CalendarLockRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarLockRegular", "", 2, undefined));
          exports.CalendarSearchFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarSearchFilled", "", 2, undefined));
          exports.CatchUpRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CatchUpRegular", "", 2, undefined));
          exports.ChatAddFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ChatAddFilled", "", 2, undefined));
          exports.CheckboxWarningRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CheckboxWarningRegular", "", 2, undefined));
          exports.ChessFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ChessFilled", "", 2, undefined));
          exports.CircleEraserFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CircleEraserFilled", "", 2, undefined));
          exports.ClipboardTextEditRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ClipboardTextEditRegular", "", 2, undefined));
          exports.CodeTextEditRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CodeTextEditRegular", "", 2, undefined));
          exports.ContractUpRightFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ContractUpRightFilled", "", 2, undefined));
          exports.ControlButtonRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ControlButtonRegular", "", 2, undefined));
          exports.DataUsageSettingsFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DataUsageSettingsFilled", "", 2, undefined));
          exports.DocumentPageTopRightFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DocumentPageTopRightFilled", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const AirplaneLandingFilled: FluentFontIcon;
          export declare const ArrowAutofitHeightInRegular: FluentFontIcon;
          export declare const ArrowSortUpLinesRegular: FluentFontIcon;
          export declare const ArrowStepOutFilled: FluentFontIcon;
          export declare const ArrowSyncCheckmarkFilled: FluentFontIcon;
          export declare const ArrowTrendingLinesRegular: FluentFontIcon;
          export declare const BluetoothRegular: FluentFontIcon;
          export declare const BookGlobeFilled: FluentFontIcon;
          export declare const BorderBottomRegular: FluentFontIcon;
          export declare const BuildingRetailShieldRegular: FluentFontIcon;
          export declare const BuildingShopFilled: FluentFontIcon;
          export declare const CalendarEditRegular: FluentFontIcon;
          export declare const CalendarLockRegular: FluentFontIcon;
          export declare const CalendarSearchFilled: FluentFontIcon;
          export declare const CatchUpRegular: FluentFontIcon;
          export declare const ChatAddFilled: FluentFontIcon;
          export declare const CheckboxWarningRegular: FluentFontIcon;
          export declare const ChessFilled: FluentFontIcon;
          export declare const CircleEraserFilled: FluentFontIcon;
          export declare const ClipboardTextEditRegular: FluentFontIcon;
          export declare const CodeTextEditRegular: FluentFontIcon;
          export declare const ContractUpRightFilled: FluentFontIcon;
          export declare const ControlButtonRegular: FluentFontIcon;
          export declare const DataUsageSettingsFilled: FluentFontIcon;
          export declare const DocumentPageTopRightFilled: FluentFontIcon;
          export declare const DocumentTextToolboxRegular: FluentFontIcon;
          export declare const DrawTextFilled: FluentFontIcon;
          export declare const EmojiAddFilled: FluentFontIcon;
          export declare const ErrorCircleSettingsFilled: FluentFontIcon;
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
          export const DocumentSparkle48Light = ( /*#__PURE__*/createFluentFontIcon("DocumentSparkle48Light", "", 3, 48));
          export const Save32Light = ( /*#__PURE__*/createFluentFontIcon("Save32Light", "", 3, 32));
          export const Signature32Light = ( /*#__PURE__*/createFluentFontIcon("Signature32Light", "", 3, 32));
          export const TableCellsSplit32Light = ( /*#__PURE__*/createFluentFontIcon("TableCellsSplit32Light", "", 3, 32));
          export const Window32Light = ( /*#__PURE__*/createFluentFontIcon("Window32Light", "", 3, 32));
          export const Apps16Filled = ( /*#__PURE__*/createFluentFontIcon("Apps16Filled", "", 0, 16));
          export const Archive48Filled = ( /*#__PURE__*/createFluentFontIcon("Archive48Filled", "", 0, 48));
          export const Branch24Filled = ( /*#__PURE__*/createFluentFontIcon("Branch24Filled", "", 0, 24));
          export const CalendarSettings20Filled = ( /*#__PURE__*/createFluentFontIcon("CalendarSettings20Filled", "", 0, 20));
          export const ChevronLeft24Filled = ( /*#__PURE__*/createFluentFontIcon("ChevronLeft24Filled", "", 0, 24));
          export const ColorLine20Filled = ( /*#__PURE__*/createFluentFontIcon("ColorLine20Filled", "", 0, 20));
          export const CommentMention24Filled = ( /*#__PURE__*/createFluentFontIcon("CommentMention24Filled", "", 0, 24, { flipInRtl: true }));
          export const Directions20Filled = ( /*#__PURE__*/createFluentFontIcon("Directions20Filled", "", 0, 20));
          export const DocumentPageBottomLeft20Filled = ( /*#__PURE__*/createFluentFontIcon("DocumentPageBottomLeft20Filled", "", 0, 20));
          export const DocumentPdf20Filled = ( /*#__PURE__*/createFluentFontIcon("DocumentPdf20Filled", "", 0, 20));
          export const FlashOff24Filled = ( /*#__PURE__*/createFluentFontIcon("FlashOff24Filled", "", 0, 24));
          export const FontDecrease20Filled = ( /*#__PURE__*/createFluentFontIcon("FontDecrease20Filled", "", 0, 20));
          export const Icons20Filled = ( /*#__PURE__*/createFluentFontIcon("Icons20Filled", "", 0, 20));
          export const Image24Filled = ( /*#__PURE__*/createFluentFontIcon("Image24Filled", "", 0, 24));
          export const Mail28Filled = ( /*#__PURE__*/createFluentFontIcon("Mail28Filled", "", 0, 28));
          export const NoteAdd16Filled = ( /*#__PURE__*/createFluentFontIcon("NoteAdd16Filled", "", 0, 16));
          export const PersonAdd24Filled = ( /*#__PURE__*/createFluentFontIcon("PersonAdd24Filled", "", 0, 24));
          export const PresenceAvailable12Filled = ( /*#__PURE__*/createFluentFontIcon("PresenceAvailable12Filled", "", 0, 12));
          export const Screenshot24Filled = ( /*#__PURE__*/createFluentFontIcon("Screenshot24Filled", "", 0, 24));
          export const ShiftsOpen24Filled = ( /*#__PURE__*/createFluentFontIcon("ShiftsOpen24Filled", "", 0, 24));
          export const StarArrowRightStart24Filled = ( /*#__PURE__*/createFluentFontIcon("StarArrowRightStart24Filled", "", 0, 24));
          export const Stop16Filled = ( /*#__PURE__*/createFluentFontIcon("Stop16Filled", "", 0, 16));
          export const Timer24Filled = ( /*#__PURE__*/createFluentFontIcon("Timer24Filled", "", 0, 24));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const DocumentSparkle48Light: FluentFontIcon;
          export declare const Save32Light: FluentFontIcon;
          export declare const Signature32Light: FluentFontIcon;
          export declare const TableCellsSplit32Light: FluentFontIcon;
          export declare const Window32Light: FluentFontIcon;
          export declare const Apps16Filled: FluentFontIcon;
          export declare const Archive48Filled: FluentFontIcon;
          export declare const Branch24Filled: FluentFontIcon;
          export declare const CalendarSettings20Filled: FluentFontIcon;
          export declare const ChevronLeft24Filled: FluentFontIcon;
          export declare const ColorLine20Filled: FluentFontIcon;
          export declare const CommentMention24Filled: FluentFontIcon;
          export declare const Directions20Filled: FluentFontIcon;
          export declare const DocumentPageBottomLeft20Filled: FluentFontIcon;
          export declare const DocumentPdf20Filled: FluentFontIcon;
          export declare const FlashOff24Filled: FluentFontIcon;
          export declare const FontDecrease20Filled: FluentFontIcon;
          export declare const Icons20Filled: FluentFontIcon;
          export declare const Image24Filled: FluentFontIcon;
          export declare const Mail28Filled: FluentFontIcon;
          export declare const NoteAdd16Filled: FluentFontIcon;
          export declare const PersonAdd24Filled: FluentFontIcon;
          export declare const PresenceAvailable12Filled: FluentFontIcon;
          export declare const Screenshot24Filled: FluentFontIcon;
          export declare const ShiftsOpen24Filled: FluentFontIcon;
          export declare const StarArrowRightStart24Filled: FluentFontIcon;
          export declare const Stop16Filled: FluentFontIcon;
          export declare const Timer24Filled: FluentFontIcon;
          export declare const Translate20Filled: FluentFontIcon;
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
          exports.DocumentSparkle48Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DocumentSparkle48Light", "", 3, 48));
          exports.Save32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Save32Light", "", 3, 32));
          exports.Signature32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Signature32Light", "", 3, 32));
          exports.TableCellsSplit32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("TableCellsSplit32Light", "", 3, 32));
          exports.Window32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Window32Light", "", 3, 32));
          exports.Apps16Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Apps16Filled", "", 0, 16));
          exports.Archive48Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Archive48Filled", "", 0, 48));
          exports.Branch24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Branch24Filled", "", 0, 24));
          exports.CalendarSettings20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarSettings20Filled", "", 0, 20));
          exports.ChevronLeft24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ChevronLeft24Filled", "", 0, 24));
          exports.ColorLine20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ColorLine20Filled", "", 0, 20));
          exports.CommentMention24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CommentMention24Filled", "", 0, 24, { flipInRtl: true }));
          exports.Directions20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Directions20Filled", "", 0, 20));
          exports.DocumentPageBottomLeft20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DocumentPageBottomLeft20Filled", "", 0, 20));
          exports.DocumentPdf20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DocumentPdf20Filled", "", 0, 20));
          exports.FlashOff24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("FlashOff24Filled", "", 0, 24));
          exports.FontDecrease20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("FontDecrease20Filled", "", 0, 20));
          exports.Icons20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Icons20Filled", "", 0, 20));
          exports.Image24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Image24Filled", "", 0, 24));
          exports.Mail28Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Mail28Filled", "", 0, 28));
          exports.NoteAdd16Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("NoteAdd16Filled", "", 0, 16));
          exports.PersonAdd24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("PersonAdd24Filled", "", 0, 24));
          exports.PresenceAvailable12Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("PresenceAvailable12Filled", "", 0, 12));
          exports.Screenshot24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Screenshot24Filled", "", 0, 24));
          exports.ShiftsOpen24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ShiftsOpen24Filled", "", 0, 24));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const DocumentSparkle48Light: FluentFontIcon;
          export declare const Save32Light: FluentFontIcon;
          export declare const Signature32Light: FluentFontIcon;
          export declare const TableCellsSplit32Light: FluentFontIcon;
          export declare const Window32Light: FluentFontIcon;
          export declare const Apps16Filled: FluentFontIcon;
          export declare const Archive48Filled: FluentFontIcon;
          export declare const Branch24Filled: FluentFontIcon;
          export declare const CalendarSettings20Filled: FluentFontIcon;
          export declare const ChevronLeft24Filled: FluentFontIcon;
          export declare const ColorLine20Filled: FluentFontIcon;
          export declare const CommentMention24Filled: FluentFontIcon;
          export declare const Directions20Filled: FluentFontIcon;
          export declare const DocumentPageBottomLeft20Filled: FluentFontIcon;
          export declare const DocumentPdf20Filled: FluentFontIcon;
          export declare const FlashOff24Filled: FluentFontIcon;
          export declare const FontDecrease20Filled: FluentFontIcon;
          export declare const Icons20Filled: FluentFontIcon;
          export declare const Image24Filled: FluentFontIcon;
          export declare const Mail28Filled: FluentFontIcon;
          export declare const NoteAdd16Filled: FluentFontIcon;
          export declare const PersonAdd24Filled: FluentFontIcon;
          export declare const PresenceAvailable12Filled: FluentFontIcon;
          export declare const Screenshot24Filled: FluentFontIcon;
          export declare const ShiftsOpen24Filled: FluentFontIcon;
          export declare const StarArrowRightStart24Filled: FluentFontIcon;
          export declare const Stop16Filled: FluentFontIcon;
          export declare const Timer24Filled: FluentFontIcon;
          export declare const Translate20Filled: FluentFontIcon;
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
