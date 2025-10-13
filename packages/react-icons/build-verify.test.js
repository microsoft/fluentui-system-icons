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
          export const AirplaneLandingFilled = ( /*#__PURE__*/createFluentIcon('AirplaneLandingFilled', "1em", ["m11.88 6-1.03-2.15C10.16 2.41 8 2.91 8 4.5v.74l2.77.76h1.11Zm-1.11 1a1 1 0 0 1-.27-.04L6 5.74V4.2c0-1.22-1.61-1.66-2.23-.6L2.24 6.19c-.57.96-.1 2.2.96 2.55l3.42 1.12-1.68 1.52c-1.17 1.08-.08 3 1.45 2.55l6.6-1.99 3.04 1A1.5 1.5 0 0 0 18 11.5V11a4 4 0 0 0-4-4h-3.23ZM2 17.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z"]));
          export const AlertSnoozeFilled = ( /*#__PURE__*/createFluentIcon('AlertSnoozeFilled', "1em", ["M10 2c.89 0 1.74.19 2.5.52A1.5 1.5 0 0 0 14 4h.63l-1.3 1.83A1.47 1.47 0 0 0 12 5H9.45l-.18.02h-.04a1.5 1.5 0 0 0-.33 2.86l-.58.69-.1.13-.01.04A1.5 1.5 0 0 0 9.5 11h2.54l.18-.02h.05a1.5 1.5 0 0 0 1.09-2.12c.19.09.4.14.64.14h2v2.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm2.45 14a2.5 2.5 0 0 1-4.9 0h4.9ZM14 2h3.5c.37 0 .6.4.45.71l-.04.08L14.96 7h2.54a.5.5 0 0 1 .09 1h-3.6a.5.5 0 0 1-.44-.71l.04-.08L16.54 3H14a.5.5 0 0 1-.1-1h.1ZM9.5 6H12c.4 0 .62.43.43.75l-.05.07L10.57 9H12a.5.5 0 0 1 .09 1h-2.6a.5.5 0 0 1-.42-.75l.04-.07L10.93 7H9.5a.5.5 0 0 1-.1-1h.1Z"]));
          export const AlignSpaceEvenlyVerticalFilled = ( /*#__PURE__*/createFluentIcon('AlignSpaceEvenlyVerticalFilled', "1em", ["M6 1a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Z", "M6 13a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Z", "M6 7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6Z"]));
          export const AnimalCatRegular = ( /*#__PURE__*/createFluentIcon('AnimalCatRegular', "1em", ["M4.97 18h9.28c.95 0 1.72-.77 1.72-1.72v-7.6a2.12 2.12 0 0 0 1.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 0 0-.99-.99 2.45 2.45 0 0 0-2.44 2.45V7.9a4.28 4.28 0 0 0-2.95 1.58 8.11 8.11 0 0 0-1.52 3.35A17.04 17.04 0 0 0 5.63 17h-.66a1.97 1.97 0 0 1-1.44-3.32l.92-.98a3.59 3.59 0 0 0-.09-4.99l-.9-.9a.5.5 0 1 0-.7.7l.9.9a2.59 2.59 0 0 1 .06 3.6l-.92 1A2.97 2.97 0 0 0 4.97 18Zm7.97-15v1.12c0 .28.22.5.5.5h1.93c.4 0 .75.2.96.53l.5.81c.46.75-.08 1.72-.95 1.72h-.41a.5.5 0 0 0-.5.5v8.1c0 .4-.32.72-.72.72h-.72v-.72a2.93 2.93 0 0 0-2.93-2.93H9.6a.5.5 0 0 0 0 1h1.01c1.07 0 1.93.87 1.93 1.93V17h-5.9A18 18 0 0 1 7 13.05c.26-1.1.67-2.16 1.32-2.93A3.32 3.32 0 0 1 11 8.88a.5.5 0 0 0 .5-.5V4.45c0-.8.64-1.44 1.43-1.45Z"]));
          export const ArrowAutofitHeightInRegular = ( /*#__PURE__*/createFluentIcon('ArrowAutofitHeightInRegular', "1em", ["m14.85 7.85 2-2a.5.5 0 0 0-.7-.7L15 6.29V2.5a.5.5 0 0 0-1 0v3.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0ZM3 5c0-1.1.9-2 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V5Zm13.85 9.15-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 .7.7L14 13.71v3.79a.5.5 0 0 0 1 0v-3.8l1.15 1.15a.5.5 0 0 0 .7-.7Z"]));
          export const ArrowDownLeftRegular = ( /*#__PURE__*/createFluentIcon('ArrowDownLeftRegular', "1em", ["M11.5 16a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v6.8L16.15 3.14a.5.5 0 1 1 .7.7L4.71 16h6.79Z"]));
          export const ArrowSortDownLinesFilled = ( /*#__PURE__*/createFluentIcon('ArrowSortDownLinesFilled', "1em", ["M15 2.75a.75.75 0 0 0-1.5 0v12.57l-1.45-1.58a.75.75 0 0 0-1.1 1.02l2.75 3a.75.75 0 0 0 1.1 0l2.75-3a.75.75 0 0 0-1.1-1.02L15 15.32V2.75ZM2.75 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM5 7.25c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 7.25ZM8.75 9.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"]));
          export const ArrowSortUpLinesRegular = ( /*#__PURE__*/createFluentIcon('ArrowSortUpLinesRegular', "1em", ["M15 17.5a.5.5 0 0 1-1 0V3.7l-2.15 2.15a.5.5 0 0 1-.7-.7l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7L15 3.71V17.5ZM2.5 16a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1h-9ZM5 12.5c0 .28.22.5.5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5ZM8.5 10a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Z"]));
          export const ArrowStepOutFilled = ( /*#__PURE__*/createFluentIcon('ArrowStepOutFilled', "1em", ["M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-4a.5.5 0 0 0 .5-.5V3.7l3.15 3.15a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L9.5 3.71v7.79c0 .28.22.5.5.5Z"]));
          export const ArrowSyncCheckmarkFilled = ( /*#__PURE__*/createFluentIcon('ArrowSyncCheckmarkFilled', "1em", ["M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 11.4 3.66l.01-.02ZM8.6 16.36l.01-.01c.41.09.83.14 1.27.15h-.01.07A6.5 6.5 0 0 0 13.9 4.8a.5.5 0 1 1 .6-.8 7.5 7.5 0 0 1-4.07 13.5l1 .98a.5.5 0 1 1-.71.71l-2.12-2.12a.5.5 0 0 1 0-.7ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2.65-1.85a.5.5 0 0 0-.7 0L9 10.79 7.85 9.65a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"], { flipInRtl: true }));
          export const ArrowTrendingLinesRegular = ( /*#__PURE__*/createFluentIcon('ArrowTrendingLinesRegular', "1em", ["M14.5 2a.5.5 0 0 0 0 1h1.8l-4.8 4.8-2.65-2.65a.5.5 0 0 0-.7 0l-5 5a.5.5 0 0 0 .7.7L8.5 6.21l2.65 2.64c.2.2.5.2.7 0L17 3.71V5.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3Zm1 7a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0v-8a.5.5 0 0 0-.5-.5Zm-8 2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Zm3.5 2.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4Zm-8 1a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Z"], { flipInRtl: true }));
          export const Battery5Filled = ( /*#__PURE__*/createFluentIcon('Battery5Filled', "1em", ["M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h3.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z"]));
          export const BluetoothRegular = ( /*#__PURE__*/createFluentIcon('BluetoothRegular', "1em", ["M9.3 2.04a.5.5 0 0 1 .55.1l4 4a.5.5 0 0 1-.02.74L10.26 10l3.57 3.12a.5.5 0 0 1 .02.73l-4 4A.5.5 0 0 1 9 17.5v-6.4l-3.17 2.78a.5.5 0 0 1-.66-.76L8.74 10 5.17 6.88a.5.5 0 0 1 .66-.76L9 8.9V2.5c0-.2.12-.38.3-.46Zm.7 9.06v5.2l2.77-2.78L10 11.1Zm0-2.2 2.77-2.42L10 3.7V8.9Z"]));
          export const BookAddRegular = ( /*#__PURE__*/createFluentIcon('BookAddRegular', "1em", ["M14 3H6a1 1 0 0 0-1 1v11h4.02c.03.34.1.68.19 1H5a1 1 0 0 0 1 1h3.6c.18.36.4.7.66 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5.2c-.32-.08-.66-.15-1-.18V4a1 1 0 0 0-1-1ZM6 5v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm1 0h6v1H7V5Zm12 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          export const BookContactsColor = ( /*#__PURE__*/createFluentIcon('BookContactsColor', "1em", \`<path d="M4.5 15H16s-.5.5-.5 1.5.5 1 .5 1H5.5a1 1 0 0 1-1-1V15Z" fill="url(#ic_fluent_book_contacts_20_color__a)"/><path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" fill="url(#ic_fluent_book_contacts_20_color__b)"/><path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" fill="url(#ic_fluent_book_contacts_20_color__c)" fill-opacity=".3"/><path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" fill="url(#ic_fluent_book_contacts_20_color__d)" fill-opacity=".3"/><path d="M10 13c2.14 0 3-.94 3-1.88 0-.62-.58-1.12-1.29-1.12H8.3C7.58 10 7 10.5 7 11.13c0 .93.86 1.87 3 1.87Zm1.5-5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="url(#ic_fluent_book_contacts_20_color__e)" fill-opacity=".9"/><defs><linearGradient id="ic_fluent_book_contacts_20_color__a" x1="10" y1="17" x2="10" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#9DEAFF"/><stop offset=".72" stop-color="#58AAFE"/></linearGradient><linearGradient id="ic_fluent_book_contacts_20_color__b" x1="8.27" y1="4.99" x2="10.81" y2="22.2" gradientUnits="userSpaceOnUse"><stop stop-color="#20AC9D"/><stop offset="1" stop-color="#2052CB"/></linearGradient><linearGradient id="ic_fluent_book_contacts_20_color__e" x1="14.5" y1="19" x2="2.54" y2=".2" gradientUnits="userSpaceOnUse"><stop stop-color="#9DEAFF"/><stop offset="1" stop-color="#fff"/></linearGradient><radialGradient id="ic_fluent_book_contacts_20_color__c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4 0 0 2.23514 10 12)"><stop stop-color="#171155"/><stop offset="1" stop-color="#4A43CB" stop-opacity="0"/></radialGradient><radialGradient id="ic_fluent_book_contacts_20_color__d" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2 0 0 1.94168 10.5 7.5)"><stop stop-color="#171155"/><stop offset="1" stop-color="#4A43CB" stop-opacity="0"/></radialGradient></defs>\`, { color: true }));
          export const BookExclamationMarkRegular = ( /*#__PURE__*/createFluentIcon('BookExclamationMarkRegular', "1em", ["M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-4 2c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5Zm0 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"]));
          export const BookGlobeFilled = ( /*#__PURE__*/createFluentIcon('BookGlobeFilled', "1em", ["M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm4 10.5-.04-.02a.62.62 0 0 1-.15-.14 2.76 2.76 0 0 1-.4-.82A9.4 9.4 0 0 1 9.01 9h1.98a9.4 9.4 0 0 1-.4 2.52c-.13.38-.27.65-.4.82a.62.62 0 0 1-.15.14.15.15 0 0 1-.03.02H10ZM13.97 9a4 4 0 0 1-2.6 3.26l.17-.42c.25-.76.41-1.75.45-2.84h1.98Zm0-1h-1.98a10.43 10.43 0 0 0-.61-3.26A4 4 0 0 1 13.97 8Zm-5.35 4.26A4 4 0 0 1 6.03 9h1.98a10.43 10.43 0 0 0 .61 3.26ZM6.03 8a4 4 0 0 1 2.6-3.26l-.17.42c-.25.76-.41 1.75-.45 2.84H6.03ZM10 4.5l.04.02c.04.02.09.06.15.14.13.17.27.44.4.82.21.64.36 1.52.4 2.52H9.01c.04-1 .19-1.88.4-2.52.13-.38.27-.65.4-.82a.62.62 0 0 1 .15-.14.15.15 0 0 1 .03-.02H10Z"]));
          export const BorderBottomRegular = ( /*#__PURE__*/createFluentIcon('BorderBottomRegular', "1em", ["M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5.54 4.05a2 2 0 0 0-1.5 1.55.5.5 0 0 1-.59.4.5.5 0 0 1-.38-.66 3 3 0 0 1 2.34-2.29.5.5 0 0 1 .6.4.5.5 0 0 1-.47.6ZM3.07 14.66a.5.5 0 0 1 .38-.66.5.5 0 0 1 .6.46A2 2 0 0 0 6 16h8a2 2 0 0 0 1.95-1.6.5.5 0 0 1 .6-.4.5.5 0 0 1 .38.66A3 3 0 0 1 14 17H6a3 3 0 0 1-2.93-2.34ZM14.6 3.06a3 3 0 0 1 2.36 2.36.5.5 0 0 1-.4.58.5.5 0 0 1-.6-.46 2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .6-.4ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z"]));
          export const BorderRightFilled = ( /*#__PURE__*/createFluentIcon('BorderRightFilled', "1em", ["M3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75ZM17 8.73V6a3 3 0 0 0-1.96-2.81.75.75 0 1 0-.58 1.38l.07.03c.57.21.97.76.97 1.4v8a1.5 1.5 0 0 1-1.04 1.43.75.75 0 0 0 .58 1.38A3 3 0 0 0 17 14V8.73ZM5.45 15.4a1.5 1.5 0 0 1-.88-.94.75.75 0 0 0-1.38.58 3 3 0 0 0 1.77 1.77.75.75 0 1 0 .49-1.41ZM4.6 5.45a1.5 1.5 0 0 1 .94-.88.75.75 0 0 0-.58-1.38 3 3 0 0 0-1.77 1.77.75.75 0 1 0 1.41.5ZM11.25 17a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5ZM12 3.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5c.41 0 .75.34.75.75Z"]));
          export const BranchRequestDraftFilled = ( /*#__PURE__*/createFluentIcon('BranchRequestDraftFilled', "1em", ["M5.5 7.96a3 3 0 1 0-1 0v4.08a3 3 0 1 0 1 0V7.96ZM18 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.75-6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"]));
          export const BugProhibitedFilled = ( /*#__PURE__*/createFluentIcon('BugProhibitedFilled', "1em", ["M14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM11 14.5a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9c-.46-.6-.7-1.34-.7-2.1Zm3.5 3.5c-.76 0-1.5-.24-2.1-.7l4.9-4.9a3.48 3.48 0 0 1-.33 4.57A3.5 3.5 0 0 1 14.5 18ZM17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.31-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3c0 .38.1.76.31 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.99 3.99 0 0 0 3.59 3.96 5.46 5.46 0 0 1 .85-6.17A5.5 5.5 0 0 1 14 9.03V8h.5A2.5 2.5 0 0 0 17 5.5v-2Z"]));
          export const BuildingRetailShieldRegular = ( /*#__PURE__*/createFluentIcon('BuildingRetailShieldRegular', "1em", ["M14.12 9.96c.2-.19.56-.19.76 0 .5.49 1.48 1.26 2.68 1.41.24.04.44.22.44.44v2.11c0 2.84-2.78 3.87-3.39 4.06a.37.37 0 0 1-.22 0c-.6-.19-3.39-1.22-3.39-4.06v-2.1c0-.23.2-.41.44-.45a5.07 5.07 0 0 0 2.68-1.4ZM16.5 3a1.5 1.5 0 0 1 .5 2.92v4.27a4.32 4.32 0 0 1-1-.58V6H4v10h1v-3.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V16h.46c.18.38.4.7.65 1H3.5a.5.5 0 0 1-.5-.5V5.92A1.5 1.5 0 0 1 3.5 3h13ZM6 16h3v-3H6v3Zm8.5-9c.28 0 .5.22.5.5v1.4a1.6 1.6 0 0 0-1 0V8H6v2h6.4c-.28.16-.6.29-.93.36l-.27.04c-.34.07-.7.28-.94.6H5.5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h9Zm-11-3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z"]));
          export const BuildingShopFilled = ( /*#__PURE__*/createFluentIcon('BuildingShopFilled', "1em", ["M12 12h2v2h-2v-2ZM5 2h10a.5.5 0 0 1 .38.18l2.5 3c.12.14.12.21.12.3V7a3 3 0 0 1-1 2.24v8.26a.5.5 0 0 1-.5.5H10v-6.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V18H3.5a.5.5 0 0 1-.5-.5V9.24A3 3 0 0 1 2 7V5.5a.5.5 0 0 1 .12-.32l2.5-3A.5.5 0 0 1 5 2ZM3 6v1a2 2 0 1 0 4 0V6H3Zm5 0v1a2 2 0 1 0 4 0V6H8Zm5 0v1a2 2 0 1 0 4 0V6h-4ZM5.23 3 3.57 5h3.57l.67-2H5.23Zm6.58 2-.67-2H8.86l-.67 2h3.62Zm1.05 0h3.57l-1.66-2h-2.58l.67 2ZM11 11.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM9 18v-6H6v6h3Z"]));
          export const CalendarAddRegular = ( /*#__PURE__*/createFluentIcon('CalendarAddRegular', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          export const CalendarEditRegular = ( /*#__PURE__*/createFluentIcon('CalendarEditRegular', "1em", ["M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.72l.21-.85.04-.15H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.23c.32-.14.66-.21 1-.23V5.5ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Zm10.3 6.55-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64ZM8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"]));
          export const CalendarLockRegular = ( /*#__PURE__*/createFluentIcon('CalendarLockRegular', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v3.9c-.3-.17-.64-.3-1-.36V7H4v7.5c0 .83.67 1.5 1.5 1.5H11v1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5Zm-1 8v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"]));
          export const CalendarSearchFilled = ( /*#__PURE__*/createFluentIcon('CalendarSearchFilled', "1em", ["M17 14.5V7H3v2.47a4.5 4.5 0 0 1 6.06 5.97L10.62 17h3.88a2.5 2.5 0 0 0 2.5-2.5Zm0-9A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5ZM7.1 16.3a3.5 3.5 0 1 1 .7-.7l2.55 2.55a.5.5 0 0 1-.7.7L7.1 16.3Zm.4-2.8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"]));
          export const CallRectangleLandscapeRegular = ( /*#__PURE__*/createFluentIcon('CallRectangleLandscapeRegular', "1em", ["M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5ZM3 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm3.6 1.21A7.8 7.8 0 0 1 10 7.5c1.3 0 2.5.26 3.4.71.87.44 1.6 1.13 1.6 2.04v.74a1.5 1.5 0 0 1-1.65 1.5l-.71-.07a1.5 1.5 0 0 1-1.3-1.1l-.29-1.06-.02-.08v-.02c-.07-.04-.32-.16-1.03-.16-.7 0-.96.12-1.03.16v.02l-.02.08-.29 1.05a1.5 1.5 0 0 1-1.3 1.1l-.71.08A1.5 1.5 0 0 1 5 10.99v-.74c0-.91.73-1.6 1.6-2.04Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AirplaneLandingFilled: FluentIcon;
          export declare const AlertSnoozeFilled: FluentIcon;
          export declare const AlignSpaceEvenlyVerticalFilled: FluentIcon;
          export declare const AnimalCatRegular: FluentIcon;
          export declare const ArrowAutofitHeightInRegular: FluentIcon;
          export declare const ArrowDownLeftRegular: FluentIcon;
          export declare const ArrowSortDownLinesFilled: FluentIcon;
          export declare const ArrowSortUpLinesRegular: FluentIcon;
          export declare const ArrowStepOutFilled: FluentIcon;
          export declare const ArrowSyncCheckmarkFilled: FluentIcon;
          export declare const ArrowTrendingLinesRegular: FluentIcon;
          export declare const Battery5Filled: FluentIcon;
          export declare const BluetoothRegular: FluentIcon;
          export declare const BookAddRegular: FluentIcon;
          export declare const BookContactsColor: FluentIcon;
          export declare const BookExclamationMarkRegular: FluentIcon;
          export declare const BookGlobeFilled: FluentIcon;
          export declare const BorderBottomRegular: FluentIcon;
          export declare const BorderRightFilled: FluentIcon;
          export declare const BranchRequestDraftFilled: FluentIcon;
          export declare const BugProhibitedFilled: FluentIcon;
          export declare const BuildingRetailShieldRegular: FluentIcon;
          export declare const BuildingShopFilled: FluentIcon;
          export declare const CalendarAddRegular: FluentIcon;
          export declare const CalendarEditRegular: FluentIcon;
          export declare const CalendarLockRegular: FluentIcon;
          export declare const CalendarSearchFilled: FluentIcon;
          export declare const CallRectangleLandscapeRegular: FluentIcon;
          export declare const CalligraphyPenErrorRegular: FluentIcon;
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
          "... (4 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.AirplaneLandingFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AirplaneLandingFilled', "1em", ["m11.88 6-1.03-2.15C10.16 2.41 8 2.91 8 4.5v.74l2.77.76h1.11Zm-1.11 1a1 1 0 0 1-.27-.04L6 5.74V4.2c0-1.22-1.61-1.66-2.23-.6L2.24 6.19c-.57.96-.1 2.2.96 2.55l3.42 1.12-1.68 1.52c-1.17 1.08-.08 3 1.45 2.55l6.6-1.99 3.04 1A1.5 1.5 0 0 0 18 11.5V11a4 4 0 0 0-4-4h-3.23ZM2 17.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z"]));
          exports.AlertSnoozeFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlertSnoozeFilled', "1em", ["M10 2c.89 0 1.74.19 2.5.52A1.5 1.5 0 0 0 14 4h.63l-1.3 1.83A1.47 1.47 0 0 0 12 5H9.45l-.18.02h-.04a1.5 1.5 0 0 0-.33 2.86l-.58.69-.1.13-.01.04A1.5 1.5 0 0 0 9.5 11h2.54l.18-.02h.05a1.5 1.5 0 0 0 1.09-2.12c.19.09.4.14.64.14h2v2.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 0 1-.74-.76v-.12l.04-.12L4 11.4V7.57A5.9 5.9 0 0 1 10 2Zm2.45 14a2.5 2.5 0 0 1-4.9 0h4.9ZM14 2h3.5c.37 0 .6.4.45.71l-.04.08L14.96 7h2.54a.5.5 0 0 1 .09 1h-3.6a.5.5 0 0 1-.44-.71l.04-.08L16.54 3H14a.5.5 0 0 1-.1-1h.1ZM9.5 6H12c.4 0 .62.43.43.75l-.05.07L10.57 9H12a.5.5 0 0 1 .09 1h-2.6a.5.5 0 0 1-.42-.75l.04-.07L10.93 7H9.5a.5.5 0 0 1-.1-1h.1Z"]));
          exports.AlignSpaceEvenlyVerticalFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AlignSpaceEvenlyVerticalFilled', "1em", ["M6 1a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Z", "M6 13a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6Z", "M6 7a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6Z"]));
          exports.AnimalCatRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AnimalCatRegular', "1em", ["M4.97 18h9.28c.95 0 1.72-.77 1.72-1.72v-7.6a2.12 2.12 0 0 0 1.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 0 0-.99-.99 2.45 2.45 0 0 0-2.44 2.45V7.9a4.28 4.28 0 0 0-2.95 1.58 8.11 8.11 0 0 0-1.52 3.35A17.04 17.04 0 0 0 5.63 17h-.66a1.97 1.97 0 0 1-1.44-3.32l.92-.98a3.59 3.59 0 0 0-.09-4.99l-.9-.9a.5.5 0 1 0-.7.7l.9.9a2.59 2.59 0 0 1 .06 3.6l-.92 1A2.97 2.97 0 0 0 4.97 18Zm7.97-15v1.12c0 .28.22.5.5.5h1.93c.4 0 .75.2.96.53l.5.81c.46.75-.08 1.72-.95 1.72h-.41a.5.5 0 0 0-.5.5v8.1c0 .4-.32.72-.72.72h-.72v-.72a2.93 2.93 0 0 0-2.93-2.93H9.6a.5.5 0 0 0 0 1h1.01c1.07 0 1.93.87 1.93 1.93V17h-5.9A18 18 0 0 1 7 13.05c.26-1.1.67-2.16 1.32-2.93A3.32 3.32 0 0 1 11 8.88a.5.5 0 0 0 .5-.5V4.45c0-.8.64-1.44 1.43-1.45Z"]));
          exports.ArrowAutofitHeightInRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowAutofitHeightInRegular', "1em", ["m14.85 7.85 2-2a.5.5 0 0 0-.7-.7L15 6.29V2.5a.5.5 0 0 0-1 0v3.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0ZM3 5c0-1.1.9-2 2-2h4.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V5Zm13.85 9.15-2-2a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 .7.7L14 13.71v3.79a.5.5 0 0 0 1 0v-3.8l1.15 1.15a.5.5 0 0 0 .7-.7Z"]));
          exports.ArrowDownLeftRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowDownLeftRegular', "1em", ["M11.5 16a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v6.8L16.15 3.14a.5.5 0 1 1 .7.7L4.71 16h6.79Z"]));
          exports.ArrowSortDownLinesFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowSortDownLinesFilled', "1em", ["M15 2.75a.75.75 0 0 0-1.5 0v12.57l-1.45-1.58a.75.75 0 0 0-1.1 1.02l2.75 3a.75.75 0 0 0 1.1 0l2.75-3a.75.75 0 0 0-1.1-1.02L15 15.32V2.75ZM2.75 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM5 7.25c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 7.25ZM8.75 9.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"]));
          exports.ArrowSortUpLinesRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowSortUpLinesRegular', "1em", ["M15 17.5a.5.5 0 0 1-1 0V3.7l-2.15 2.15a.5.5 0 0 1-.7-.7l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7L15 3.71V17.5ZM2.5 16a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1h-9ZM5 12.5c0 .28.22.5.5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5ZM8.5 10a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Z"]));
          exports.ArrowStepOutFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowStepOutFilled', "1em", ["M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-4a.5.5 0 0 0 .5-.5V3.7l3.15 3.15a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L9.5 3.71v7.79c0 .28.22.5.5.5Z"]));
          exports.ArrowSyncCheckmarkFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowSyncCheckmarkFilled', "1em", ["M11.41 3.64a.5.5 0 0 0 0-.71L9.3.8a.5.5 0 0 0-.7.7l1 1a7.5 7.5 0 0 0-4.08 13.5.5.5 0 0 0 .6-.8A6.5 6.5 0 0 1 11.4 3.66l.01-.02ZM8.6 16.36l.01-.01c.41.09.83.14 1.27.15h-.01.07A6.5 6.5 0 0 0 13.9 4.8a.5.5 0 1 1 .6-.8 7.5 7.5 0 0 1-4.07 13.5l1 .98a.5.5 0 1 1-.71.71l-2.12-2.12a.5.5 0 0 1 0-.7ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2.65-1.85a.5.5 0 0 0-.7 0L9 10.79 7.85 9.65a.5.5 0 1 0-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"], { flipInRtl: true }));
          exports.ArrowTrendingLinesRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowTrendingLinesRegular', "1em", ["M14.5 2a.5.5 0 0 0 0 1h1.8l-4.8 4.8-2.65-2.65a.5.5 0 0 0-.7 0l-5 5a.5.5 0 0 0 .7.7L8.5 6.21l2.65 2.64c.2.2.5.2.7 0L17 3.71V5.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3Zm1 7a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0v-8a.5.5 0 0 0-.5-.5Zm-8 2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Zm3.5 2.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4Zm-8 1a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Z"], { flipInRtl: true }));
          exports.Battery5Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Battery5Filled', "1em", ["M4.83 6.95a.84.84 0 0 0-.83.83v4.33c0 .46.37.84.83.84h3.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 0 0-.84-.83H4.83ZM2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v.83h1.17a.83.83 0 0 1 .83.84v1.67a.83.83 0 0 1-.83.83H16v.83a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-5Z"]));
          exports.BluetoothRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BluetoothRegular', "1em", ["M9.3 2.04a.5.5 0 0 1 .55.1l4 4a.5.5 0 0 1-.02.74L10.26 10l3.57 3.12a.5.5 0 0 1 .02.73l-4 4A.5.5 0 0 1 9 17.5v-6.4l-3.17 2.78a.5.5 0 0 1-.66-.76L8.74 10 5.17 6.88a.5.5 0 0 1 .66-.76L9 8.9V2.5c0-.2.12-.38.3-.46Zm.7 9.06v5.2l2.77-2.78L10 11.1Zm0-2.2 2.77-2.42L10 3.7V8.9Z"]));
          exports.BookAddRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BookAddRegular', "1em", ["M14 3H6a1 1 0 0 0-1 1v11h4.02c.03.34.1.68.19 1H5a1 1 0 0 0 1 1h3.6c.18.36.4.7.66 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5.2c-.32-.08-.66-.15-1-.18V4a1 1 0 0 0-1-1ZM6 5v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm1 0h6v1H7V5Zm12 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          exports.BookContactsColor = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BookContactsColor', "1em", \`<path d="M4.5 15H16s-.5.5-.5 1.5.5 1 .5 1H5.5a1 1 0 0 1-1-1V15Z" fill="url(#ic_fluent_book_contacts_20_color__a)"/><path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" fill="url(#ic_fluent_book_contacts_20_color__b)"/><path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" fill="url(#ic_fluent_book_contacts_20_color__c)" fill-opacity=".3"/><path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z" fill="url(#ic_fluent_book_contacts_20_color__d)" fill-opacity=".3"/><path d="M10 13c2.14 0 3-.94 3-1.88 0-.62-.58-1.12-1.29-1.12H8.3C7.58 10 7 10.5 7 11.13c0 .93.86 1.87 3 1.87Zm1.5-5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="url(#ic_fluent_book_contacts_20_color__e)" fill-opacity=".9"/><defs><linearGradient id="ic_fluent_book_contacts_20_color__a" x1="10" y1="17" x2="10" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#9DEAFF"/><stop offset=".72" stop-color="#58AAFE"/></linearGradient><linearGradient id="ic_fluent_book_contacts_20_color__b" x1="8.27" y1="4.99" x2="10.81" y2="22.2" gradientUnits="userSpaceOnUse"><stop stop-color="#20AC9D"/><stop offset="1" stop-color="#2052CB"/></linearGradient><linearGradient id="ic_fluent_book_contacts_20_color__e" x1="14.5" y1="19" x2="2.54" y2=".2" gradientUnits="userSpaceOnUse"><stop stop-color="#9DEAFF"/><stop offset="1" stop-color="#fff"/></linearGradient><radialGradient id="ic_fluent_book_contacts_20_color__c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4 0 0 2.23514 10 12)"><stop stop-color="#171155"/><stop offset="1" stop-color="#4A43CB" stop-opacity="0"/></radialGradient><radialGradient id="ic_fluent_book_contacts_20_color__d" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2 0 0 1.94168 10.5 7.5)"><stop stop-color="#171155"/><stop offset="1" stop-color="#4A43CB" stop-opacity="0"/></radialGradient></defs>\`, { color: true }));
          exports.BookExclamationMarkRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BookExclamationMarkRegular', "1em", ["M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-4 2c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0v-4c0-.28.22-.5.5-.5Zm0 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"]));
          exports.BookGlobeFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BookGlobeFilled', "1em", ["M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm4 10.5-.04-.02a.62.62 0 0 1-.15-.14 2.76 2.76 0 0 1-.4-.82A9.4 9.4 0 0 1 9.01 9h1.98a9.4 9.4 0 0 1-.4 2.52c-.13.38-.27.65-.4.82a.62.62 0 0 1-.15.14.15.15 0 0 1-.03.02H10ZM13.97 9a4 4 0 0 1-2.6 3.26l.17-.42c.25-.76.41-1.75.45-2.84h1.98Zm0-1h-1.98a10.43 10.43 0 0 0-.61-3.26A4 4 0 0 1 13.97 8Zm-5.35 4.26A4 4 0 0 1 6.03 9h1.98a10.43 10.43 0 0 0 .61 3.26ZM6.03 8a4 4 0 0 1 2.6-3.26l-.17.42c-.25.76-.41 1.75-.45 2.84H6.03ZM10 4.5l.04.02c.04.02.09.06.15.14.13.17.27.44.4.82.21.64.36 1.52.4 2.52H9.01c.04-1 .19-1.88.4-2.52.13-.38.27-.65.4-.82a.62.62 0 0 1 .15-.14.15.15 0 0 1 .03-.02H10Z"]));
          exports.BorderBottomRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BorderBottomRegular', "1em", ["M8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM5.54 4.05a2 2 0 0 0-1.5 1.55.5.5 0 0 1-.59.4.5.5 0 0 1-.38-.66 3 3 0 0 1 2.34-2.29.5.5 0 0 1 .6.4.5.5 0 0 1-.47.6ZM3.07 14.66a.5.5 0 0 1 .38-.66.5.5 0 0 1 .6.46A2 2 0 0 0 6 16h8a2 2 0 0 0 1.95-1.6.5.5 0 0 1 .6-.4.5.5 0 0 1 .38.66A3 3 0 0 1 14 17H6a3 3 0 0 1-2.93-2.34ZM14.6 3.06a3 3 0 0 1 2.36 2.36.5.5 0 0 1-.4.58.5.5 0 0 1-.6-.46 2 2 0 0 0-1.55-1.5.5.5 0 0 1-.4-.59.5.5 0 0 1 .6-.4ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z"]));
          exports.BorderRightFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BorderRightFilled', "1em", ["M3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .41-.34.75-.75.75ZM17 8.73V6a3 3 0 0 0-1.96-2.81.75.75 0 1 0-.58 1.38l.07.03c.57.21.97.76.97 1.4v8a1.5 1.5 0 0 1-1.04 1.43.75.75 0 0 0 .58 1.38A3 3 0 0 0 17 14V8.73ZM5.45 15.4a1.5 1.5 0 0 1-.88-.94.75.75 0 0 0-1.38.58 3 3 0 0 0 1.77 1.77.75.75 0 1 0 .49-1.41ZM4.6 5.45a1.5 1.5 0 0 1 .94-.88.75.75 0 0 0-.58-1.38 3 3 0 0 0-1.77 1.77.75.75 0 1 0 1.41.5ZM11.25 17a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5ZM12 3.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5c.41 0 .75.34.75.75Z"]));
          exports.BranchRequestDraftFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BranchRequestDraftFilled', "1em", ["M5.5 7.96a3 3 0 1 0-1 0v4.08a3 3 0 1 0 1 0V7.96ZM18 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.75-6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM15 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"]));
          exports.BugProhibitedFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BugProhibitedFilled', "1em", ["M14.5 10a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM11 14.5a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9c-.46-.6-.7-1.34-.7-2.1Zm3.5 3.5c-.76 0-1.5-.24-2.1-.7l4.9-4.9a3.48 3.48 0 0 1-.33 4.57A3.5 3.5 0 0 1 14.5 18ZM17 3.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3 3 0 0 0-2.31-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 1-2 0v-.5a.5.5 0 1 0-1 0V3c0 .38.1.76.31 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 1 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 1 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a3.99 3.99 0 0 0 3.59 3.96 5.46 5.46 0 0 1 .85-6.17A5.5 5.5 0 0 1 14 9.03V8h.5A2.5 2.5 0 0 0 17 5.5v-2Z"]));
          exports.BuildingRetailShieldRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BuildingRetailShieldRegular', "1em", ["M14.12 9.96c.2-.19.56-.19.76 0 .5.49 1.48 1.26 2.68 1.41.24.04.44.22.44.44v2.11c0 2.84-2.78 3.87-3.39 4.06a.37.37 0 0 1-.22 0c-.6-.19-3.39-1.22-3.39-4.06v-2.1c0-.23.2-.41.44-.45a5.07 5.07 0 0 0 2.68-1.4ZM16.5 3a1.5 1.5 0 0 1 .5 2.92v4.27a4.32 4.32 0 0 1-1-.58V6H4v10h1v-3.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V16h.46c.18.38.4.7.65 1H3.5a.5.5 0 0 1-.5-.5V5.92A1.5 1.5 0 0 1 3.5 3h13ZM6 16h3v-3H6v3Zm8.5-9c.28 0 .5.22.5.5v1.4a1.6 1.6 0 0 0-1 0V8H6v2h6.4c-.28.16-.6.29-.93.36l-.27.04c-.34.07-.7.28-.94.6H5.5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h9Zm-11-3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z"]));
          exports.BuildingShopFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('BuildingShopFilled', "1em", ["M12 12h2v2h-2v-2ZM5 2h10a.5.5 0 0 1 .38.18l2.5 3c.12.14.12.21.12.3V7a3 3 0 0 1-1 2.24v8.26a.5.5 0 0 1-.5.5H10v-6.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V18H3.5a.5.5 0 0 1-.5-.5V9.24A3 3 0 0 1 2 7V5.5a.5.5 0 0 1 .12-.32l2.5-3A.5.5 0 0 1 5 2ZM3 6v1a2 2 0 1 0 4 0V6H3Zm5 0v1a2 2 0 1 0 4 0V6H8Zm5 0v1a2 2 0 1 0 4 0V6h-4ZM5.23 3 3.57 5h3.57l.67-2H5.23Zm6.58 2-.67-2H8.86l-.67 2h3.62Zm1.05 0h3.57l-1.66-2h-2.58l.67 2ZM11 11.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM9 18v-6H6v6h3Z"]));
          exports.CalendarAddRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarAddRegular', "1em", ["M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"]));
          exports.CalendarEditRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('CalendarEditRegular', "1em", ["M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.72l.21-.85.04-.15H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.23c.32-.14.66-.21 1-.23V5.5ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Zm10.3 6.55-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64ZM8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AirplaneLandingFilled: FluentIcon;
          export declare const AlertSnoozeFilled: FluentIcon;
          export declare const AlignSpaceEvenlyVerticalFilled: FluentIcon;
          export declare const AnimalCatRegular: FluentIcon;
          export declare const ArrowAutofitHeightInRegular: FluentIcon;
          export declare const ArrowDownLeftRegular: FluentIcon;
          export declare const ArrowSortDownLinesFilled: FluentIcon;
          export declare const ArrowSortUpLinesRegular: FluentIcon;
          export declare const ArrowStepOutFilled: FluentIcon;
          export declare const ArrowSyncCheckmarkFilled: FluentIcon;
          export declare const ArrowTrendingLinesRegular: FluentIcon;
          export declare const Battery5Filled: FluentIcon;
          export declare const BluetoothRegular: FluentIcon;
          export declare const BookAddRegular: FluentIcon;
          export declare const BookContactsColor: FluentIcon;
          export declare const BookExclamationMarkRegular: FluentIcon;
          export declare const BookGlobeFilled: FluentIcon;
          export declare const BorderBottomRegular: FluentIcon;
          export declare const BorderRightFilled: FluentIcon;
          export declare const BranchRequestDraftFilled: FluentIcon;
          export declare const BugProhibitedFilled: FluentIcon;
          export declare const BuildingRetailShieldRegular: FluentIcon;
          export declare const BuildingShopFilled: FluentIcon;
          export declare const CalendarAddRegular: FluentIcon;
          export declare const CalendarEditRegular: FluentIcon;
          export declare const CalendarLockRegular: FluentIcon;
          export declare const CalendarSearchFilled: FluentIcon;
          export declare const CallRectangleLandscapeRegular: FluentIcon;
          export declare const CalligraphyPenErrorRegular: FluentIcon;
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
          export const AddSquareMultiple16Regular = ( /*#__PURE__*/createFluentIcon('AddSquareMultiple16Regular', "16", ["M4 7c0-.28.22-.5.5-.5h2v-2a.5.5 0 0 1 1 0v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2A.5.5 0 0 1 4 7Zm0-5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm7.5 9a2.5 2.5 0 0 0 2.5-2.5V3.27c.6.34 1 .99 1 1.73v5.5a3.5 3.5 0 0 1-3.5 3.5H5a2 2 0 0 1-1.73-1h7.23Z"]));
          export const AddSquareMultiple24Regular = ( /*#__PURE__*/createFluentIcon('AddSquareMultiple24Regular', "24", ["M5.25 3C4.01 3 3 4 3 5.25v11c0 1.24 1 2.25 2.25 2.25h11c1.24 0 2.25-1 2.25-2.25v-11c0-1.24-1-2.25-2.25-2.25h-11ZM4.5 5.25c0-.41.34-.75.75-.75h11c.41 0 .75.34.75.75v11c0 .41-.34.75-.75.75h-11a.75.75 0 0 1-.75-.75v-11ZM7.75 21c-.98 0-1.81-.63-2.12-1.5h10.62c1.8 0 3.25-1.46 3.25-3.25V5.63c.87.3 1.5 1.14 1.5 2.12v8.5A4.75 4.75 0 0 1 16.25 21h-8.5Zm3-14.5c.41 0 .75.34.75.75V10h2.75a.75.75 0 0 1 0 1.5H11.5v2.75a.75.75 0 0 1-1.5 0V11.5H7.25a.75.75 0 0 1 0-1.5H10V7.25c0-.41.34-.75.75-.75Z"]));
          export const AddStarburst16Regular = ( /*#__PURE__*/createFluentIcon('AddStarburst16Regular', "16", ["M8 4.5c.28 0 .5.22.5.5v2.5H11a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V8.5H5a.5.5 0 0 1 0-1h2.5V5c0-.28.22-.5.5-.5ZM8.4.21a.5.5 0 0 0-.8 0L6.32 1.9a.5.5 0 0 1-.53.17l-2.03-.6a.5.5 0 0 0-.64.47l-.07 2.12a.5.5 0 0 1-.33.45l-2 .72a.5.5 0 0 0-.24.75l1.2 1.75a.5.5 0 0 1 0 .56l-1.2 1.75a.5.5 0 0 0 .25.75l2 .72c.19.06.32.25.32.45l.07 2.12a.5.5 0 0 0 .64.46l2.03-.6a.5.5 0 0 1 .53.18l1.3 1.68a.5.5 0 0 0 .79 0l1.3-1.68a.5.5 0 0 1 .53-.17l2.03.6a.5.5 0 0 0 .64-.47l.06-2.12c0-.2.14-.39.33-.45l2-.72a.5.5 0 0 0 .24-.75l-1.2-1.75a.5.5 0 0 1 0-.56l1.2-1.75a.5.5 0 0 0-.24-.75l-2-.72a.5.5 0 0 1-.33-.45l-.06-2.12a.5.5 0 0 0-.64-.46l-2.03.6a.5.5 0 0 1-.54-.18L8.4.2ZM7.1 2.5 8 1.34l.9 1.16c.38.49 1.02.7 1.61.52l1.4-.41.05 1.47a1.5 1.5 0 0 0 1 1.37l1.38.5-.83 1.2a1.5 1.5 0 0 0 0 1.7l.83 1.2-1.38.5c-.59.21-.98.75-1 1.37l-.04 1.47-1.41-.41a1.5 1.5 0 0 0-1.6.52L8 14.66l-.9-1.16a1.5 1.5 0 0 0-1.61-.52l-1.41.41-.05-1.47a1.5 1.5 0 0 0-1-1.37l-1.37-.5.82-1.2a1.5 1.5 0 0 0 0-1.7l-.82-1.2 1.38-.5c.58-.21.98-.75 1-1.37l.04-1.47 1.4.41a1.5 1.5 0 0 0 1.62-.52Z"]));
          export const AgentsAdd24Regular = ( /*#__PURE__*/createFluentIcon('AgentsAdd24Regular', "24", ["M18.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a.5.5 0 0 0-.5.5V17h-2.5a.5.5 0 0 0 0 1H18v2.5a.5.5 0 0 0 1 0V18h2.5a.5.5 0 0 0 0-1H19v-2.5a.5.5 0 0 0-.5-.5ZM11.25 3a.75.75 0 0 1 0 1.5H8.12a.75.75 0 0 0-.65.38l-3.9 6.77a.75.75 0 0 0 0 .73L7.16 19a.95.95 0 0 0 1.74-.17l4.5-14.12a2.47 2.47 0 0 1 4.49-.48l3.82 6.64c.2.35.3.76.3 1.16a6.46 6.46 0 0 0-1.83-.82L16.59 5a.97.97 0 0 0-1.76.18L10.34 19.3a2.45 2.45 0 0 1-4.48.43L2.24 13.1a2.25 2.25 0 0 1 .03-2.2l3.9-6.77C6.57 3.43 7.3 3 8.12 3h3.13Z"]));
          export const AirplaneLanding24Regular = ( /*#__PURE__*/createFluentIcon('AirplaneLanding24Regular', "24", ["M11.5 7.49V5.04c0-.58.79-.75 1.03-.22l1.42 3.2h-1a.64.64 0 0 1-.23-.05L11.5 7.5Zm4.1.53-1.7-3.8C13 2.2 10 2.83 10 5.03v1.85l-1.5-.6V4.77a1.75 1.75 0 0 0-3.21-.96L3.38 6.7a2.3 2.3 0 0 0 1.04 3.4l3.5 1.46-2.05 1.9c-1.62 1.5 0 4.16 2.09 3.4l6.76-2.46 3.46 1.44A2.04 2.04 0 0 0 21 13.96v-1.23c0-2.6-2.11-4.71-4.72-4.71h-.69ZM7 6.95c0 .22.13.42.34.5l4.83 1.92c.25.1.52.15.79.15h3.32a3.22 3.22 0 0 1 3.22 3.21v1.23c0 .39-.39.65-.74.5l-3.64-1.52a1 1 0 0 0-.73-.02l-6.95 2.53c-.55.2-.97-.5-.55-.9l2.62-2.42a1 1 0 0 0-.3-1.66L5 8.71a.8.8 0 0 1-.36-1.18l1.91-2.91c.14-.2.46-.11.46.14v2.2Zm-4 13.3c0-.41.34-.75.75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"]));
          export const AppFolder28Regular = ( /*#__PURE__*/createFluentIcon('AppFolder28Regular', "28", ["M6.5 8.5c0-1.1.9-2 2-2H11a2 2 0 0 1 2 2V11a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V8.5Zm2-.5a.5.5 0 0 0-.5.5V11c0 .28.22.5.5.5H11a.5.5 0 0 0 .5-.5V8.5A.5.5 0 0 0 11 8H8.5Zm0 7a2 2 0 0 0-2 2v2.5c0 1.1.9 2 2 2H11a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2H8.5ZM8 17c0-.28.22-.5.5-.5H11c.28 0 .5.22.5.5v2.5a.5.5 0 0 1-.5.5H8.5a.5.5 0 0 1-.5-.5V17Zm7-8.5c0-1.1.9-2 2-2h2.5a2 2 0 0 1 2 2V11a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2V8.5Zm2-.5a.5.5 0 0 0-.5.5V11c0 .28.22.5.5.5h2.5a.5.5 0 0 0 .5-.5V8.5a.5.5 0 0 0-.5-.5H17Zm0 7a2 2 0 0 0-2 2v2.5c0 1.1.9 2 2 2h2.5a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2H17Zm-.5 2c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 0 1-.5.5H17a.5.5 0 0 1-.5-.5V17ZM3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM6.75 4.5c-1.24 0-2.25 1-2.25 2.25v14.5c0 1.24 1 2.25 2.25 2.25h14.5c1.24 0 2.25-1 2.25-2.25V6.75c0-1.24-1-2.25-2.25-2.25H6.75Z"]));
          export const AppStore24Filled = ( /*#__PURE__*/createFluentIcon('AppStore24Filled', "24", ["M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5ZM9.37 15.25H7.63l-.07.12-.04.1a.75.75 0 0 0 1.28.74l.06-.08.5-.88Zm3.92-5.23-.87 1.5 2.66 4.6.06.09a.75.75 0 0 0 1.28-.74l-.04-.1-.5-.87h.97c.34-.05.6-.31.64-.64l.01-.1v-.1a.75.75 0 0 0-.65-.65h-1.84l-1.72-2.99Zm-.03-2.92a.75.75 0 0 0-.97.19l-.05.08-.24.41-.24-.4-.05-.09a.75.75 0 0 0-.87-.24l-.1.05-.09.06a.75.75 0 0 0-.23.86l.04.1.67 1.15L8.95 13h-1.7l-.1.01a.75.75 0 0 0 0 1.49h6.13L12.4 13h-1.73l2.85-4.87.05-.1a.75.75 0 0 0-.32-.93Z"]));
          export const ApprovalsApp32Color = ( /*#__PURE__*/createFluentIcon('ApprovalsApp32Color', "32", \`<path d="M14.7 1.3a1 1 0 1 0-1.4 1.4L15.6 5A13 13 0 1 0 29 18v-.08a.94.94 0 0 0-.96-.92h-.08a.98.98 0 0 0-.96 1A11 11 0 1 1 15.58 7l-2.29 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-4-4Z" fill="url(#ic_fluent_approvals_app_32_color__a)"/><path d="M22.7 14.7a1 1 0 0 0-1.4-1.4L16 18.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6Z" fill="url(#ic_fluent_approvals_app_32_color__b)"/><defs><linearGradient id="ic_fluent_approvals_app_32_color__a" x1="3" y1="2.76" x2="12.13" y2="35.89" gradientUnits="userSpaceOnUse"><stop stop-color="#0FAFFF"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_approvals_app_32_color__b" x1="22.66" y1="13.4" x2="9.08" y2="20.15" gradientUnits="userSpaceOnUse"><stop stop-color="#42B870"/><stop offset="1" stop-color="#309C61"/></linearGradient></defs>\`, { color: true }));
          export const Apps16Filled = ( /*#__PURE__*/createFluentIcon('Apps16Filled', "16", ["M11.81 2.45a1.5 1.5 0 0 0-2.12 0L7.96 4.18A1.5 1.5 0 0 0 6.5 3h-3C2.67 3 2 3.67 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8c.83 0 1.5-.67 1.5-1.5v-3c0-.7-.48-1.29-1.13-1.45l1.71-1.7a1.5 1.5 0 0 0 0-2.13l-1.77-1.77ZM8 6.42 9.58 8H8V6.42ZM7 8H3V4.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V8ZM3.2 12.9a.5.5 0 0 1-.21-.4V9h4v4H3.5a.5.5 0 0 1-.29-.1ZM8 13V9h3.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5H8Z"]));
          export const AppsAddIn48Filled = ( /*#__PURE__*/createFluentIcon('AppsAddIn48Filled', "48", ["M36 4c.83 0 1.5.67 1.5 1.5v4.75h5a1.5 1.5 0 0 1 0 3h-5v5.25a1.5 1.5 0 0 1-3 0v-5.25h-5a1.5 1.5 0 0 1 0-3h5V5.5c0-.83.67-1.5 1.5-1.5ZM6 10.25C6 7.9 7.9 6 10.25 6h11c2.35 0 4.25 1.9 4.25 4.25V22.5h12.25c2.35 0 4.25 1.9 4.25 4.25v11C42 40.1 40.1 42 37.75 42h-27.5A4.25 4.25 0 0 1 6 37.75v-27.5ZM22.5 22.5V10.25c0-.69-.56-1.25-1.25-1.25h-11C9.56 9 9 9.56 9 10.25V22.5h13.5ZM9 25.5v12.25c0 .69.56 1.25 1.25 1.25H22.5V25.5H9ZM25.5 39h12.25c.69 0 1.25-.56 1.25-1.25v-11c0-.69-.56-1.25-1.25-1.25H25.5V39Z"]));
          export const AppsList32Regular = ( /*#__PURE__*/createFluentIcon('AppsList32Regular', "32", ["M5 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm9 1a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Zm1 9a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H14Zm0 10a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H14ZM2 15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5Zm0 8a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H5Zm-1 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z"]));
          export const AppsListDetail24Filled = ( /*#__PURE__*/createFluentIcon('AppsListDetail24Filled', "24", ["M4.25 4C3.01 4 2 5 2 6.25v2.5C2 9.99 3 11 4.25 11h2.5C7.99 11 9 10 9 8.75v-2.5C9 5.01 8 4 6.75 4h-2.5Zm7 1a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Zm-7 5C3.01 13 2 14 2 15.25v2.5C2 18.99 3 20 4.25 20h2.5C7.99 20 9 19 9 17.75v-2.5C9 14.01 8 13 6.75 13h-2.5Zm7 1a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Z"]));
          export const Archive48Filled = ( /*#__PURE__*/createFluentIcon('Archive48Filled', "48", ["M6.25 8.75a2.5 2.5 0 0 1 2.5-2.5h30.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5v-4Zm2 9h31.5V34.5c0 4-3.25 7.25-7.25 7.25h-17c-4 0-7.25-3.25-7.25-7.25V17.75Zm12.25 4.5a1.25 1.25 0 1 0 0 2.5h7a1.25 1.25 0 1 0 0-2.5h-7Z"]));
          export const ArchiveArrowBack28Regular = ( /*#__PURE__*/createFluentIcon('ArchiveArrowBack28Regular', "28", ["M11.75 12.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM3 5.25C3 4.01 4 3 5.25 3h17.5C23.99 3 25 4 25 5.25v2c0 .78-.4 1.47-1 1.87v4.75a7.45 7.45 0 0 0-1.5-.6V9.5h-17v10.75c0 1.8 1.46 3.25 3.25 3.25h4.87c.24.54.53 1.04.88 1.5H8.75A4.75 4.75 0 0 1 4 20.25V9.12c-.6-.4-1-1.09-1-1.87v-2Zm2.25-.75a.75.75 0 0 0-.75.75v2c0 .41.34.75.75.75h17.5c.41 0 .75-.34.75-.75v-2a.75.75 0 0 0-.75-.75H5.25ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-8.15-2.65a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L17.71 20h2.54A2.75 2.75 0 0 1 23 22.75V23a.5.5 0 0 0 1 0v-.25A3.75 3.75 0 0 0 20.25 19h-2.54l1.14-1.15Z"]));
          export const ArchiveMultiple20Regular = ( /*#__PURE__*/createFluentIcon('ArchiveMultiple20Regular', "20", ["M7.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-4-6C2.67 2 2 2.67 2 3.5v2c0 .66.42 1.21 1 1.42A.5.5 0 0 0 3 7v5.5A3.5 3.5 0 0 0 6.5 16h5a3.5 3.5 0 0 0 3.5-3.5V7a.5.5 0 0 0 0-.08c.58-.2 1-.76 1-1.42v-2c0-.83-.67-1.5-1.5-1.5h-11ZM4 12.5V7h10v5.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 4 12.5Zm-1-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2ZM8.5 18c-.95 0-1.82-.38-2.45-1h6.45a3.5 3.5 0 0 0 3.5-3.5V7.09c.58.2 1 .76 1 1.41v5a4.5 4.5 0 0 1-4.5 4.5h-4Z"]));
          export const ArrowAutofitContent20Regular = ( /*#__PURE__*/createFluentIcon('ArrowAutofitContent20Regular', "20", ["M5.35 3.65c.2.2.2.5 0 .7L4.71 5H7.5a.5.5 0 0 1 0 1H4.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM5.5 9A2.5 2.5 0 0 0 3 11.5v3A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 14.5 9h-9ZM4 11.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-3Zm2 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H6Zm8.65-8.15a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H12.5a.5.5 0 0 1 0-1h2.8l-.65-.65Z"]));
          export const ArrowCircleDownRight16Regular = ( /*#__PURE__*/createFluentIcon('ArrowCircleDownRight16Regular', "16", ["M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm2.5 3.5c.28 0 .5.22.5.5v4.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h3.3L5.64 6.35l-.07-.07a.5.5 0 0 1 .7-.7l.07.07L10 9.29V6c0-.28.22-.5.5-.5Z"]));
          export const ArrowCircleDownRight24Regular = ( /*#__PURE__*/createFluentIcon('ArrowCircleDownRight24Regular', "24", ["M13.5 14.5H8.74a.75.75 0 0 0 0 1.5h6.5c.41 0 .75-.34.75-.75v-6.5a.75.75 0 0 0-1.5 0v4.64L9.28 8.22a.75.75 0 1 0-1.06 1.06l5.27 5.22ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"]));
          export const ArrowCircleDownSplit24Filled = ( /*#__PURE__*/createFluentIcon('ArrowCircleDownSplit24Filled', "24", ["M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm-1-8-.08-.07a.75.75 0 0 0-.98.07l-.44.44V10.5h5v3.94l-.51-.44-.09-.07a.75.75 0 0 0-.97 1.13l1.79 1.72.08.07c.3.22.71.2.98-.07l1.72-1.72.07-.08c.22-.3.2-.72-.07-.98l-.08-.07a.75.75 0 0 0-.98.07l-.44.44v-4.8a.75.75 0 0 0-.75-.64h-2.5V5.65A.75.75 0 0 0 12 5h-.1a.75.75 0 0 0-.65.75V9h-2.6a.75.75 0 0 0-.65.75v4.69L7.56 14l-.08-.07a.75.75 0 0 0-.98 1.13l1.72 1.72.08.07c.3.22.71.2.98-.07L11 15.06l.07-.09c.22-.29.2-.7-.07-.97Z"]));
          export const ArrowCircleDownUp20Regular = ( /*#__PURE__*/createFluentIcon('ArrowCircleDownUp20Regular', "20", ["M7.35 13.85 9 12.21a.5.5 0 1 0-.7-.71l-.8.8V6.5a.5.5 0 0 0-1 0v5.8l-.8-.8a.5.5 0 1 0-.7.7l1.65 1.65c.2.2.5.2.7 0ZM15 7.8l-1.65-1.64a.5.5 0 0 0-.7 0L11 7.79a.5.5 0 1 0 .7.71l.8-.8v5.8a.5.5 0 1 0 1 0V7.7l.8.8a.5.5 0 1 0 .7-.7ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"]));
          export const ArrowCircleUpRight20Filled = ( /*#__PURE__*/createFluentIcon('ArrowCircleUpRight20Filled', "20", ["M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm2.85-10.86A.5.5 0 0 0 12.5 7h-5a.5.5 0 0 0 0 1h3.8l-4.15 4.15a.5.5 0 0 0 .7.7L12 8.71v3.79a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.14-.35Z"]));
          export const ArrowClockwise32Light = ( /*#__PURE__*/createFluentIcon('ArrowClockwise32Light', "32", ["M4 16a12 12 0 0 1 21.75-7H20.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-1 0v4.2a13 13 0 1 0 2.9 6.73.48.48 0 0 0-.48-.43c-.3 0-.54.28-.5.58A12 12 0 1 1 4 16Z"]));
          export const ArrowClockwise32Regular = ( /*#__PURE__*/createFluentIcon('ArrowClockwise32Regular', "32", ["M5 16a11 11 0 0 1 18.55-8H21a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v2.62a13 13 0 1 0 3.96 8.3 1 1 0 0 0-2 .16A11 11 0 1 1 5 16Z"]));
          export const ArrowDown12Regular = ( /*#__PURE__*/createFluentIcon('ArrowDown12Regular', "12", ["M6 1.5c.28 0 .5.22.5.5v6.8l2.65-2.65a.5.5 0 1 1 .7.7l-3.5 3.5a.5.5 0 0 1-.7 0l-3.5-3.5a.5.5 0 1 1 .7-.7L5.5 8.79V2c0-.28.22-.5.5-.5Z"]));
          export const ArrowExit48Filled = ( /*#__PURE__*/createFluentIcon('ArrowExit48Filled', "48", ["M12.5 6A6.5 6.5 0 0 0 6 12.5v23a6.5 6.5 0 0 0 6.5 6.5h18a1.5 1.5 0 0 0 0-3h-18A3.5 3.5 0 0 1 9 35.5v-23A3.5 3.5 0 0 1 12.5 9h18a1.5 1.5 0 0 0 0-3h-18Zm22.56 8.44a1.5 1.5 0 0 0-2.12 2.12l5.94 5.94H17.5a1.5 1.5 0 0 0 0 3h21.38l-5.94 5.94a1.5 1.5 0 0 0 2.12 2.12l8.5-8.5a1.5 1.5 0 0 0 0-2.12l-8.5-8.5Z"]));
          export const ArrowFlowDiagonalUpRight16Regular = ( /*#__PURE__*/createFluentIcon('ArrowFlowDiagonalUpRight16Regular', "16", ["M8.5 3a.5.5 0 0 0 0 1h2.8L5.87 9.41a2.5 2.5 0 1 0 .7.7L12 4.72V7.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4ZM3 11.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"], { flipInRtl: true }));
          export const ArrowFlowDiagonalUpRight28Regular = ( /*#__PURE__*/createFluentIcon('ArrowFlowDiagonalUpRight28Regular', "28", ["M23.25 14a.75.75 0 0 1-.75-.75V6.56L12.02 17.04a4.5 4.5 0 1 1-1.02-1.1L21.44 5.5h-6.69a.75.75 0 0 1 0-1.5h8.5c.41 0 .75.34.75.75v8.5c0 .41-.34.75-.75.75Zm-15 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"], { flipInRtl: true }));
          export const ArrowHookUpLeft24Filled = ( /*#__PURE__*/createFluentIcon('ArrowHookUpLeft24Filled', "24", ["M7 19a1 1 0 0 0 1 1h5c2.24 0 4.01-.78 5.22-2.02A6.42 6.42 0 0 0 20 13.5c0-1.61-.59-3.24-1.78-4.48A7.06 7.06 0 0 0 13 7H8.41l2.05-2.04a1 1 0 0 0-1.42-1.42L5.3 7.3a1 1 0 0 0 0 1.42l3.75 3.75a1 1 0 0 0 1.42-1.42L8.4 9H13c1.76 0 2.99.6 3.78 1.41.8.83 1.22 1.95 1.22 3.09s-.41 2.26-1.22 3.09A5.07 5.07 0 0 1 13 18H8a1 1 0 0 0-1 1Z"], { flipInRtl: true }));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AddSquareMultiple16Regular: FluentIcon;
          export declare const AddSquareMultiple24Regular: FluentIcon;
          export declare const AddStarburst16Regular: FluentIcon;
          export declare const AgentsAdd24Regular: FluentIcon;
          export declare const AirplaneLanding24Regular: FluentIcon;
          export declare const AppFolder28Regular: FluentIcon;
          export declare const AppStore24Filled: FluentIcon;
          export declare const ApprovalsApp32Color: FluentIcon;
          export declare const Apps16Filled: FluentIcon;
          export declare const AppsAddIn48Filled: FluentIcon;
          export declare const AppsList32Regular: FluentIcon;
          export declare const AppsListDetail24Filled: FluentIcon;
          export declare const Archive48Filled: FluentIcon;
          export declare const ArchiveArrowBack28Regular: FluentIcon;
          export declare const ArchiveMultiple20Regular: FluentIcon;
          export declare const ArrowAutofitContent20Regular: FluentIcon;
          export declare const ArrowCircleDownRight16Regular: FluentIcon;
          export declare const ArrowCircleDownRight24Regular: FluentIcon;
          export declare const ArrowCircleDownSplit24Filled: FluentIcon;
          export declare const ArrowCircleDownUp20Regular: FluentIcon;
          export declare const ArrowCircleUpRight20Filled: FluentIcon;
          export declare const ArrowClockwise32Light: FluentIcon;
          export declare const ArrowClockwise32Regular: FluentIcon;
          export declare const ArrowDown12Regular: FluentIcon;
          export declare const ArrowExit48Filled: FluentIcon;
          export declare const ArrowFlowDiagonalUpRight16Regular: FluentIcon;
          export declare const ArrowFlowDiagonalUpRight28Regular: FluentIcon;
          export declare const ArrowHookUpLeft24Filled: FluentIcon;
          export declare const ArrowLeft48Regular: FluentIcon;
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
          "... (12 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.AddSquareMultiple16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddSquareMultiple16Regular', "16", ["M4 7c0-.28.22-.5.5-.5h2v-2a.5.5 0 0 1 1 0v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2A.5.5 0 0 1 4 7Zm0-5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm7.5 9a2.5 2.5 0 0 0 2.5-2.5V3.27c.6.34 1 .99 1 1.73v5.5a3.5 3.5 0 0 1-3.5 3.5H5a2 2 0 0 1-1.73-1h7.23Z"]));
          exports.AddSquareMultiple24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddSquareMultiple24Regular', "24", ["M5.25 3C4.01 3 3 4 3 5.25v11c0 1.24 1 2.25 2.25 2.25h11c1.24 0 2.25-1 2.25-2.25v-11c0-1.24-1-2.25-2.25-2.25h-11ZM4.5 5.25c0-.41.34-.75.75-.75h11c.41 0 .75.34.75.75v11c0 .41-.34.75-.75.75h-11a.75.75 0 0 1-.75-.75v-11ZM7.75 21c-.98 0-1.81-.63-2.12-1.5h10.62c1.8 0 3.25-1.46 3.25-3.25V5.63c.87.3 1.5 1.14 1.5 2.12v8.5A4.75 4.75 0 0 1 16.25 21h-8.5Zm3-14.5c.41 0 .75.34.75.75V10h2.75a.75.75 0 0 1 0 1.5H11.5v2.75a.75.75 0 0 1-1.5 0V11.5H7.25a.75.75 0 0 1 0-1.5H10V7.25c0-.41.34-.75.75-.75Z"]));
          exports.AddStarburst16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AddStarburst16Regular', "16", ["M8 4.5c.28 0 .5.22.5.5v2.5H11a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V8.5H5a.5.5 0 0 1 0-1h2.5V5c0-.28.22-.5.5-.5ZM8.4.21a.5.5 0 0 0-.8 0L6.32 1.9a.5.5 0 0 1-.53.17l-2.03-.6a.5.5 0 0 0-.64.47l-.07 2.12a.5.5 0 0 1-.33.45l-2 .72a.5.5 0 0 0-.24.75l1.2 1.75a.5.5 0 0 1 0 .56l-1.2 1.75a.5.5 0 0 0 .25.75l2 .72c.19.06.32.25.32.45l.07 2.12a.5.5 0 0 0 .64.46l2.03-.6a.5.5 0 0 1 .53.18l1.3 1.68a.5.5 0 0 0 .79 0l1.3-1.68a.5.5 0 0 1 .53-.17l2.03.6a.5.5 0 0 0 .64-.47l.06-2.12c0-.2.14-.39.33-.45l2-.72a.5.5 0 0 0 .24-.75l-1.2-1.75a.5.5 0 0 1 0-.56l1.2-1.75a.5.5 0 0 0-.24-.75l-2-.72a.5.5 0 0 1-.33-.45l-.06-2.12a.5.5 0 0 0-.64-.46l-2.03.6a.5.5 0 0 1-.54-.18L8.4.2ZM7.1 2.5 8 1.34l.9 1.16c.38.49 1.02.7 1.61.52l1.4-.41.05 1.47a1.5 1.5 0 0 0 1 1.37l1.38.5-.83 1.2a1.5 1.5 0 0 0 0 1.7l.83 1.2-1.38.5c-.59.21-.98.75-1 1.37l-.04 1.47-1.41-.41a1.5 1.5 0 0 0-1.6.52L8 14.66l-.9-1.16a1.5 1.5 0 0 0-1.61-.52l-1.41.41-.05-1.47a1.5 1.5 0 0 0-1-1.37l-1.37-.5.82-1.2a1.5 1.5 0 0 0 0-1.7l-.82-1.2 1.38-.5c.58-.21.98-.75 1-1.37l.04-1.47 1.4.41a1.5 1.5 0 0 0 1.62-.52Z"]));
          exports.AgentsAdd24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AgentsAdd24Regular', "24", ["M18.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a.5.5 0 0 0-.5.5V17h-2.5a.5.5 0 0 0 0 1H18v2.5a.5.5 0 0 0 1 0V18h2.5a.5.5 0 0 0 0-1H19v-2.5a.5.5 0 0 0-.5-.5ZM11.25 3a.75.75 0 0 1 0 1.5H8.12a.75.75 0 0 0-.65.38l-3.9 6.77a.75.75 0 0 0 0 .73L7.16 19a.95.95 0 0 0 1.74-.17l4.5-14.12a2.47 2.47 0 0 1 4.49-.48l3.82 6.64c.2.35.3.76.3 1.16a6.46 6.46 0 0 0-1.83-.82L16.59 5a.97.97 0 0 0-1.76.18L10.34 19.3a2.45 2.45 0 0 1-4.48.43L2.24 13.1a2.25 2.25 0 0 1 .03-2.2l3.9-6.77C6.57 3.43 7.3 3 8.12 3h3.13Z"]));
          exports.AirplaneLanding24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AirplaneLanding24Regular', "24", ["M11.5 7.49V5.04c0-.58.79-.75 1.03-.22l1.42 3.2h-1a.64.64 0 0 1-.23-.05L11.5 7.5Zm4.1.53-1.7-3.8C13 2.2 10 2.83 10 5.03v1.85l-1.5-.6V4.77a1.75 1.75 0 0 0-3.21-.96L3.38 6.7a2.3 2.3 0 0 0 1.04 3.4l3.5 1.46-2.05 1.9c-1.62 1.5 0 4.16 2.09 3.4l6.76-2.46 3.46 1.44A2.04 2.04 0 0 0 21 13.96v-1.23c0-2.6-2.11-4.71-4.72-4.71h-.69ZM7 6.95c0 .22.13.42.34.5l4.83 1.92c.25.1.52.15.79.15h3.32a3.22 3.22 0 0 1 3.22 3.21v1.23c0 .39-.39.65-.74.5l-3.64-1.52a1 1 0 0 0-.73-.02l-6.95 2.53c-.55.2-.97-.5-.55-.9l2.62-2.42a1 1 0 0 0-.3-1.66L5 8.71a.8.8 0 0 1-.36-1.18l1.91-2.91c.14-.2.46-.11.46.14v2.2Zm-4 13.3c0-.41.34-.75.75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"]));
          exports.AppFolder28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppFolder28Regular', "28", ["M6.5 8.5c0-1.1.9-2 2-2H11a2 2 0 0 1 2 2V11a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V8.5Zm2-.5a.5.5 0 0 0-.5.5V11c0 .28.22.5.5.5H11a.5.5 0 0 0 .5-.5V8.5A.5.5 0 0 0 11 8H8.5Zm0 7a2 2 0 0 0-2 2v2.5c0 1.1.9 2 2 2H11a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2H8.5ZM8 17c0-.28.22-.5.5-.5H11c.28 0 .5.22.5.5v2.5a.5.5 0 0 1-.5.5H8.5a.5.5 0 0 1-.5-.5V17Zm7-8.5c0-1.1.9-2 2-2h2.5a2 2 0 0 1 2 2V11a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2V8.5Zm2-.5a.5.5 0 0 0-.5.5V11c0 .28.22.5.5.5h2.5a.5.5 0 0 0 .5-.5V8.5a.5.5 0 0 0-.5-.5H17Zm0 7a2 2 0 0 0-2 2v2.5c0 1.1.9 2 2 2h2.5a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2H17Zm-.5 2c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 0 1-.5.5H17a.5.5 0 0 1-.5-.5V17ZM3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM6.75 4.5c-1.24 0-2.25 1-2.25 2.25v14.5c0 1.24 1 2.25 2.25 2.25h14.5c1.24 0 2.25-1 2.25-2.25V6.75c0-1.24-1-2.25-2.25-2.25H6.75Z"]));
          exports.AppStore24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppStore24Filled', "24", ["M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 0 1 3 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5ZM9.37 15.25H7.63l-.07.12-.04.1a.75.75 0 0 0 1.28.74l.06-.08.5-.88Zm3.92-5.23-.87 1.5 2.66 4.6.06.09a.75.75 0 0 0 1.28-.74l-.04-.1-.5-.87h.97c.34-.05.6-.31.64-.64l.01-.1v-.1a.75.75 0 0 0-.65-.65h-1.84l-1.72-2.99Zm-.03-2.92a.75.75 0 0 0-.97.19l-.05.08-.24.41-.24-.4-.05-.09a.75.75 0 0 0-.87-.24l-.1.05-.09.06a.75.75 0 0 0-.23.86l.04.1.67 1.15L8.95 13h-1.7l-.1.01a.75.75 0 0 0 0 1.49h6.13L12.4 13h-1.73l2.85-4.87.05-.1a.75.75 0 0 0-.32-.93Z"]));
          exports.ApprovalsApp32Color = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ApprovalsApp32Color', "32", \`<path d="M14.7 1.3a1 1 0 1 0-1.4 1.4L15.6 5A13 13 0 1 0 29 18v-.08a.94.94 0 0 0-.96-.92h-.08a.98.98 0 0 0-.96 1A11 11 0 1 1 15.58 7l-2.29 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-4-4Z" fill="url(#ic_fluent_approvals_app_32_color__a)"/><path d="M22.7 14.7a1 1 0 0 0-1.4-1.4L16 18.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6Z" fill="url(#ic_fluent_approvals_app_32_color__b)"/><defs><linearGradient id="ic_fluent_approvals_app_32_color__a" x1="3" y1="2.76" x2="12.13" y2="35.89" gradientUnits="userSpaceOnUse"><stop stop-color="#0FAFFF"/><stop offset="1" stop-color="#0067BF"/></linearGradient><linearGradient id="ic_fluent_approvals_app_32_color__b" x1="22.66" y1="13.4" x2="9.08" y2="20.15" gradientUnits="userSpaceOnUse"><stop stop-color="#42B870"/><stop offset="1" stop-color="#309C61"/></linearGradient></defs>\`, { color: true }));
          exports.Apps16Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Apps16Filled', "16", ["M11.81 2.45a1.5 1.5 0 0 0-2.12 0L7.96 4.18A1.5 1.5 0 0 0 6.5 3h-3C2.67 3 2 3.67 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8c.83 0 1.5-.67 1.5-1.5v-3c0-.7-.48-1.29-1.13-1.45l1.71-1.7a1.5 1.5 0 0 0 0-2.13l-1.77-1.77ZM8 6.42 9.58 8H8V6.42ZM7 8H3V4.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V8ZM3.2 12.9a.5.5 0 0 1-.21-.4V9h4v4H3.5a.5.5 0 0 1-.29-.1ZM8 13V9h3.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5H8Z"]));
          exports.AppsAddIn48Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsAddIn48Filled', "48", ["M36 4c.83 0 1.5.67 1.5 1.5v4.75h5a1.5 1.5 0 0 1 0 3h-5v5.25a1.5 1.5 0 0 1-3 0v-5.25h-5a1.5 1.5 0 0 1 0-3h5V5.5c0-.83.67-1.5 1.5-1.5ZM6 10.25C6 7.9 7.9 6 10.25 6h11c2.35 0 4.25 1.9 4.25 4.25V22.5h12.25c2.35 0 4.25 1.9 4.25 4.25v11C42 40.1 40.1 42 37.75 42h-27.5A4.25 4.25 0 0 1 6 37.75v-27.5ZM22.5 22.5V10.25c0-.69-.56-1.25-1.25-1.25h-11C9.56 9 9 9.56 9 10.25V22.5h13.5ZM9 25.5v12.25c0 .69.56 1.25 1.25 1.25H22.5V25.5H9ZM25.5 39h12.25c.69 0 1.25-.56 1.25-1.25v-11c0-.69-.56-1.25-1.25-1.25H25.5V39Z"]));
          exports.AppsList32Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsList32Regular', "32", ["M5 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm9 1a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Zm1 9a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H14Zm0 10a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H14ZM2 15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5Zm0 8a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H5Zm-1 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z"]));
          exports.AppsListDetail24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AppsListDetail24Filled', "24", ["M4.25 4C3.01 4 2 5 2 6.25v2.5C2 9.99 3 11 4.25 11h2.5C7.99 11 9 10 9 8.75v-2.5C9 5.01 8 4 6.75 4h-2.5Zm7 1a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Zm-7 5C3.01 13 2 14 2 15.25v2.5C2 18.99 3 20 4.25 20h2.5C7.99 20 9 19 9 17.75v-2.5C9 14.01 8 13 6.75 13h-2.5Zm7 1a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Z"]));
          exports.Archive48Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Archive48Filled', "48", ["M6.25 8.75a2.5 2.5 0 0 1 2.5-2.5h30.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5v-4Zm2 9h31.5V34.5c0 4-3.25 7.25-7.25 7.25h-17c-4 0-7.25-3.25-7.25-7.25V17.75Zm12.25 4.5a1.25 1.25 0 1 0 0 2.5h7a1.25 1.25 0 1 0 0-2.5h-7Z"]));
          exports.ArchiveArrowBack28Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArchiveArrowBack28Regular', "28", ["M11.75 12.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM3 5.25C3 4.01 4 3 5.25 3h17.5C23.99 3 25 4 25 5.25v2c0 .78-.4 1.47-1 1.87v4.75a7.45 7.45 0 0 0-1.5-.6V9.5h-17v10.75c0 1.8 1.46 3.25 3.25 3.25h4.87c.24.54.53 1.04.88 1.5H8.75A4.75 4.75 0 0 1 4 20.25V9.12c-.6-.4-1-1.09-1-1.87v-2Zm2.25-.75a.75.75 0 0 0-.75.75v2c0 .41.34.75.75.75h17.5c.41 0 .75-.34.75-.75v-2a.75.75 0 0 0-.75-.75H5.25ZM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-8.15-2.65a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L17.71 20h2.54A2.75 2.75 0 0 1 23 22.75V23a.5.5 0 0 0 1 0v-.25A3.75 3.75 0 0 0 20.25 19h-2.54l1.14-1.15Z"]));
          exports.ArchiveMultiple20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArchiveMultiple20Regular', "20", ["M7.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-4-6C2.67 2 2 2.67 2 3.5v2c0 .66.42 1.21 1 1.42A.5.5 0 0 0 3 7v5.5A3.5 3.5 0 0 0 6.5 16h5a3.5 3.5 0 0 0 3.5-3.5V7a.5.5 0 0 0 0-.08c.58-.2 1-.76 1-1.42v-2c0-.83-.67-1.5-1.5-1.5h-11ZM4 12.5V7h10v5.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 4 12.5Zm-1-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2ZM8.5 18c-.95 0-1.82-.38-2.45-1h6.45a3.5 3.5 0 0 0 3.5-3.5V7.09c.58.2 1 .76 1 1.41v5a4.5 4.5 0 0 1-4.5 4.5h-4Z"]));
          exports.ArrowAutofitContent20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowAutofitContent20Regular', "20", ["M5.35 3.65c.2.2.2.5 0 .7L4.71 5H7.5a.5.5 0 0 1 0 1H4.7l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5c.2-.2.5-.2.7 0ZM5.5 9A2.5 2.5 0 0 0 3 11.5v3A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 14.5 9h-9ZM4 11.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-3Zm2 1a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H6Zm8.65-8.15a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H12.5a.5.5 0 0 1 0-1h2.8l-.65-.65Z"]));
          exports.ArrowCircleDownRight16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCircleDownRight16Regular', "16", ["M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm2.5 3.5c.28 0 .5.22.5.5v4.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h3.3L5.64 6.35l-.07-.07a.5.5 0 0 1 .7-.7l.07.07L10 9.29V6c0-.28.22-.5.5-.5Z"]));
          exports.ArrowCircleDownRight24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCircleDownRight24Regular', "24", ["M13.5 14.5H8.74a.75.75 0 0 0 0 1.5h6.5c.41 0 .75-.34.75-.75v-6.5a.75.75 0 0 0-1.5 0v4.64L9.28 8.22a.75.75 0 1 0-1.06 1.06l5.27 5.22ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"]));
          exports.ArrowCircleDownSplit24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCircleDownSplit24Filled', "24", ["M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm-1-8-.08-.07a.75.75 0 0 0-.98.07l-.44.44V10.5h5v3.94l-.51-.44-.09-.07a.75.75 0 0 0-.97 1.13l1.79 1.72.08.07c.3.22.71.2.98-.07l1.72-1.72.07-.08c.22-.3.2-.72-.07-.98l-.08-.07a.75.75 0 0 0-.98.07l-.44.44v-4.8a.75.75 0 0 0-.75-.64h-2.5V5.65A.75.75 0 0 0 12 5h-.1a.75.75 0 0 0-.65.75V9h-2.6a.75.75 0 0 0-.65.75v4.69L7.56 14l-.08-.07a.75.75 0 0 0-.98 1.13l1.72 1.72.08.07c.3.22.71.2.98-.07L11 15.06l.07-.09c.22-.29.2-.7-.07-.97Z"]));
          exports.ArrowCircleDownUp20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCircleDownUp20Regular', "20", ["M7.35 13.85 9 12.21a.5.5 0 1 0-.7-.71l-.8.8V6.5a.5.5 0 0 0-1 0v5.8l-.8-.8a.5.5 0 1 0-.7.7l1.65 1.65c.2.2.5.2.7 0ZM15 7.8l-1.65-1.64a.5.5 0 0 0-.7 0L11 7.79a.5.5 0 1 0 .7.71l.8-.8v5.8a.5.5 0 1 0 1 0V7.7l.8.8a.5.5 0 1 0 .7-.7ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8 7a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"]));
          exports.ArrowCircleUpRight20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowCircleUpRight20Filled', "20", ["M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm2.85-10.86A.5.5 0 0 0 12.5 7h-5a.5.5 0 0 0 0 1h3.8l-4.15 4.15a.5.5 0 0 0 .7.7L12 8.71v3.79a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.14-.35Z"]));
          exports.ArrowClockwise32Light = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowClockwise32Light', "32", ["M4 16a12 12 0 0 1 21.75-7H20.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-1 0v4.2a13 13 0 1 0 2.9 6.73.48.48 0 0 0-.48-.43c-.3 0-.54.28-.5.58A12 12 0 1 1 4 16Z"]));
          exports.ArrowClockwise32Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowClockwise32Regular', "32", ["M5 16a11 11 0 0 1 18.55-8H21a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v2.62a13 13 0 1 0 3.96 8.3 1 1 0 0 0-2 .16A11 11 0 1 1 5 16Z"]));
          exports.ArrowDown12Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowDown12Regular', "12", ["M6 1.5c.28 0 .5.22.5.5v6.8l2.65-2.65a.5.5 0 1 1 .7.7l-3.5 3.5a.5.5 0 0 1-.7 0l-3.5-3.5a.5.5 0 1 1 .7-.7L5.5 8.79V2c0-.28.22-.5.5-.5Z"]));
          exports.ArrowExit48Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('ArrowExit48Filled', "48", ["M12.5 6A6.5 6.5 0 0 0 6 12.5v23a6.5 6.5 0 0 0 6.5 6.5h18a1.5 1.5 0 0 0 0-3h-18A3.5 3.5 0 0 1 9 35.5v-23A3.5 3.5 0 0 1 12.5 9h18a1.5 1.5 0 0 0 0-3h-18Zm22.56 8.44a1.5 1.5 0 0 0-2.12 2.12l5.94 5.94H17.5a1.5 1.5 0 0 0 0 3h21.38l-5.94 5.94a1.5 1.5 0 0 0 2.12 2.12l8.5-8.5a1.5 1.5 0 0 0 0-2.12l-8.5-8.5Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
          export declare const AddSquareMultiple16Regular: FluentIcon;
          export declare const AddSquareMultiple24Regular: FluentIcon;
          export declare const AddStarburst16Regular: FluentIcon;
          export declare const AgentsAdd24Regular: FluentIcon;
          export declare const AirplaneLanding24Regular: FluentIcon;
          export declare const AppFolder28Regular: FluentIcon;
          export declare const AppStore24Filled: FluentIcon;
          export declare const ApprovalsApp32Color: FluentIcon;
          export declare const Apps16Filled: FluentIcon;
          export declare const AppsAddIn48Filled: FluentIcon;
          export declare const AppsList32Regular: FluentIcon;
          export declare const AppsListDetail24Filled: FluentIcon;
          export declare const Archive48Filled: FluentIcon;
          export declare const ArchiveArrowBack28Regular: FluentIcon;
          export declare const ArchiveMultiple20Regular: FluentIcon;
          export declare const ArrowAutofitContent20Regular: FluentIcon;
          export declare const ArrowCircleDownRight16Regular: FluentIcon;
          export declare const ArrowCircleDownRight24Regular: FluentIcon;
          export declare const ArrowCircleDownSplit24Filled: FluentIcon;
          export declare const ArrowCircleDownUp20Regular: FluentIcon;
          export declare const ArrowCircleUpRight20Filled: FluentIcon;
          export declare const ArrowClockwise32Light: FluentIcon;
          export declare const ArrowClockwise32Regular: FluentIcon;
          export declare const ArrowDown12Regular: FluentIcon;
          export declare const ArrowExit48Filled: FluentIcon;
          export declare const ArrowFlowDiagonalUpRight16Regular: FluentIcon;
          export declare const ArrowFlowDiagonalUpRight28Regular: FluentIcon;
          export declare const ArrowHookUpLeft24Filled: FluentIcon;
          export declare const ArrowLeft48Regular: FluentIcon;
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
          export const AlertSnoozeFilled = ( /*#__PURE__*/createFluentFontIcon("AlertSnoozeFilled", "", 2, undefined));
          export const AlignSpaceEvenlyVerticalFilled = ( /*#__PURE__*/createFluentFontIcon("AlignSpaceEvenlyVerticalFilled", "", 2, undefined));
          export const AnimalCatRegular = ( /*#__PURE__*/createFluentFontIcon("AnimalCatRegular", "", 2, undefined));
          export const ArrowAutofitHeightInRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowAutofitHeightInRegular", "", 2, undefined));
          export const ArrowDownLeftRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowDownLeftRegular", "", 2, undefined));
          export const ArrowSortDownLinesFilled = ( /*#__PURE__*/createFluentFontIcon("ArrowSortDownLinesFilled", "", 2, undefined));
          export const ArrowSortUpLinesRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowSortUpLinesRegular", "", 2, undefined));
          export const ArrowStepOutFilled = ( /*#__PURE__*/createFluentFontIcon("ArrowStepOutFilled", "", 2, undefined));
          export const ArrowSyncCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon("ArrowSyncCheckmarkFilled", "", 2, undefined, { flipInRtl: true }));
          export const ArrowTrendingLinesRegular = ( /*#__PURE__*/createFluentFontIcon("ArrowTrendingLinesRegular", "", 2, undefined, { flipInRtl: true }));
          export const Battery5Filled = ( /*#__PURE__*/createFluentFontIcon("Battery5Filled", "", 2, undefined));
          export const BluetoothRegular = ( /*#__PURE__*/createFluentFontIcon("BluetoothRegular", "", 2, undefined));
          export const BookAddRegular = ( /*#__PURE__*/createFluentFontIcon("BookAddRegular", "", 2, undefined));
          export const BookExclamationMarkRegular = ( /*#__PURE__*/createFluentFontIcon("BookExclamationMarkRegular", "", 2, undefined));
          export const BookGlobeFilled = ( /*#__PURE__*/createFluentFontIcon("BookGlobeFilled", "", 2, undefined));
          export const BorderBottomRegular = ( /*#__PURE__*/createFluentFontIcon("BorderBottomRegular", "", 2, undefined));
          export const BorderRightFilled = ( /*#__PURE__*/createFluentFontIcon("BorderRightFilled", "", 2, undefined));
          export const BranchRequestDraftFilled = ( /*#__PURE__*/createFluentFontIcon("BranchRequestDraftFilled", "", 2, undefined));
          export const BugProhibitedFilled = ( /*#__PURE__*/createFluentFontIcon("BugProhibitedFilled", "", 2, undefined));
          export const BuildingRetailShieldRegular = ( /*#__PURE__*/createFluentFontIcon("BuildingRetailShieldRegular", "", 2, undefined));
          export const BuildingShopFilled = ( /*#__PURE__*/createFluentFontIcon("BuildingShopFilled", "", 2, undefined));
          export const CalendarAddRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarAddRegular", "", 2, undefined));
          export const CalendarEditRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarEditRegular", "", 2, undefined));
          export const CalendarLockRegular = ( /*#__PURE__*/createFluentFontIcon("CalendarLockRegular", "", 2, undefined));
          export const CalendarSearchFilled = ( /*#__PURE__*/createFluentFontIcon("CalendarSearchFilled", "", 2, undefined));
          export const CallRectangleLandscapeRegular = ( /*#__PURE__*/createFluentFontIcon("CallRectangleLandscapeRegular", "", 2, undefined));
          export const CalligraphyPenErrorRegular = ( /*#__PURE__*/createFluentFontIcon("CalligraphyPenErrorRegular", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const AirplaneLandingFilled: FluentFontIcon;
          export declare const AlertSnoozeFilled: FluentFontIcon;
          export declare const AlignSpaceEvenlyVerticalFilled: FluentFontIcon;
          export declare const AnimalCatRegular: FluentFontIcon;
          export declare const ArrowAutofitHeightInRegular: FluentFontIcon;
          export declare const ArrowDownLeftRegular: FluentFontIcon;
          export declare const ArrowSortDownLinesFilled: FluentFontIcon;
          export declare const ArrowSortUpLinesRegular: FluentFontIcon;
          export declare const ArrowStepOutFilled: FluentFontIcon;
          export declare const ArrowSyncCheckmarkFilled: FluentFontIcon;
          export declare const ArrowTrendingLinesRegular: FluentFontIcon;
          export declare const Battery5Filled: FluentFontIcon;
          export declare const BluetoothRegular: FluentFontIcon;
          export declare const BookAddRegular: FluentFontIcon;
          export declare const BookExclamationMarkRegular: FluentFontIcon;
          export declare const BookGlobeFilled: FluentFontIcon;
          export declare const BorderBottomRegular: FluentFontIcon;
          export declare const BorderRightFilled: FluentFontIcon;
          export declare const BranchRequestDraftFilled: FluentFontIcon;
          export declare const BugProhibitedFilled: FluentFontIcon;
          export declare const BuildingRetailShieldRegular: FluentFontIcon;
          export declare const BuildingShopFilled: FluentFontIcon;
          export declare const CalendarAddRegular: FluentFontIcon;
          export declare const CalendarEditRegular: FluentFontIcon;
          export declare const CalendarLockRegular: FluentFontIcon;
          export declare const CalendarSearchFilled: FluentFontIcon;
          export declare const CallRectangleLandscapeRegular: FluentFontIcon;
          export declare const CalligraphyPenErrorRegular: FluentFontIcon;
          export declare const CameraDomeFilled: FluentFontIcon;
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
          "... (4 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.AirplaneLandingFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AirplaneLandingFilled", "", 2, undefined));
          exports.AlertSnoozeFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AlertSnoozeFilled", "", 2, undefined));
          exports.AlignSpaceEvenlyVerticalFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AlignSpaceEvenlyVerticalFilled", "", 2, undefined));
          exports.AnimalCatRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AnimalCatRegular", "", 2, undefined));
          exports.ArrowAutofitHeightInRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowAutofitHeightInRegular", "", 2, undefined));
          exports.ArrowDownLeftRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowDownLeftRegular", "", 2, undefined));
          exports.ArrowSortDownLinesFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowSortDownLinesFilled", "", 2, undefined));
          exports.ArrowSortUpLinesRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowSortUpLinesRegular", "", 2, undefined));
          exports.ArrowStepOutFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowStepOutFilled", "", 2, undefined));
          exports.ArrowSyncCheckmarkFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowSyncCheckmarkFilled", "", 2, undefined, { flipInRtl: true }));
          exports.ArrowTrendingLinesRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowTrendingLinesRegular", "", 2, undefined, { flipInRtl: true }));
          exports.Battery5Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Battery5Filled", "", 2, undefined));
          exports.BluetoothRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BluetoothRegular", "", 2, undefined));
          exports.BookAddRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BookAddRegular", "", 2, undefined));
          exports.BookExclamationMarkRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BookExclamationMarkRegular", "", 2, undefined));
          exports.BookGlobeFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BookGlobeFilled", "", 2, undefined));
          exports.BorderBottomRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BorderBottomRegular", "", 2, undefined));
          exports.BorderRightFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BorderRightFilled", "", 2, undefined));
          exports.BranchRequestDraftFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BranchRequestDraftFilled", "", 2, undefined));
          exports.BugProhibitedFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BugProhibitedFilled", "", 2, undefined));
          exports.BuildingRetailShieldRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BuildingRetailShieldRegular", "", 2, undefined));
          exports.BuildingShopFilled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("BuildingShopFilled", "", 2, undefined));
          exports.CalendarAddRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarAddRegular", "", 2, undefined));
          exports.CalendarEditRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarEditRegular", "", 2, undefined));
          exports.CalendarLockRegular = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarLockRegular", "", 2, undefined));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const AirplaneLandingFilled: FluentFontIcon;
          export declare const AlertSnoozeFilled: FluentFontIcon;
          export declare const AlignSpaceEvenlyVerticalFilled: FluentFontIcon;
          export declare const AnimalCatRegular: FluentFontIcon;
          export declare const ArrowAutofitHeightInRegular: FluentFontIcon;
          export declare const ArrowDownLeftRegular: FluentFontIcon;
          export declare const ArrowSortDownLinesFilled: FluentFontIcon;
          export declare const ArrowSortUpLinesRegular: FluentFontIcon;
          export declare const ArrowStepOutFilled: FluentFontIcon;
          export declare const ArrowSyncCheckmarkFilled: FluentFontIcon;
          export declare const ArrowTrendingLinesRegular: FluentFontIcon;
          export declare const Battery5Filled: FluentFontIcon;
          export declare const BluetoothRegular: FluentFontIcon;
          export declare const BookAddRegular: FluentFontIcon;
          export declare const BookExclamationMarkRegular: FluentFontIcon;
          export declare const BookGlobeFilled: FluentFontIcon;
          export declare const BorderBottomRegular: FluentFontIcon;
          export declare const BorderRightFilled: FluentFontIcon;
          export declare const BranchRequestDraftFilled: FluentFontIcon;
          export declare const BugProhibitedFilled: FluentFontIcon;
          export declare const BuildingRetailShieldRegular: FluentFontIcon;
          export declare const BuildingShopFilled: FluentFontIcon;
          export declare const CalendarAddRegular: FluentFontIcon;
          export declare const CalendarEditRegular: FluentFontIcon;
          export declare const CalendarLockRegular: FluentFontIcon;
          export declare const CalendarSearchFilled: FluentFontIcon;
          export declare const CallRectangleLandscapeRegular: FluentFontIcon;
          export declare const CalligraphyPenErrorRegular: FluentFontIcon;
          export declare const CameraDomeFilled: FluentFontIcon;
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
          export const ArrowClockwise32Light = ( /*#__PURE__*/createFluentFontIcon("ArrowClockwise32Light", "", 3, 32));
          export const Autocorrect32Light = ( /*#__PURE__*/createFluentFontIcon("Autocorrect32Light", "", 3, 32));
          export const DocumentSparkle48Light = ( /*#__PURE__*/createFluentFontIcon("DocumentSparkle48Light", "", 3, 48));
          export const ReadAloud32Light = ( /*#__PURE__*/createFluentFontIcon("ReadAloud32Light", "", 3, 32));
          export const Save32Light = ( /*#__PURE__*/createFluentFontIcon("Save32Light", "", 3, 32));
          export const Signature32Light = ( /*#__PURE__*/createFluentFontIcon("Signature32Light", "", 3, 32));
          export const TableCellsSplit32Light = ( /*#__PURE__*/createFluentFontIcon("TableCellsSplit32Light", "", 3, 32));
          export const Window32Light = ( /*#__PURE__*/createFluentFontIcon("Window32Light", "", 3, 32));
          export const AppStore24Filled = ( /*#__PURE__*/createFluentFontIcon("AppStore24Filled", "", 0, 24));
          export const Apps16Filled = ( /*#__PURE__*/createFluentFontIcon("Apps16Filled", "", 0, 16));
          export const Archive48Filled = ( /*#__PURE__*/createFluentFontIcon("Archive48Filled", "", 0, 48));
          export const ArrowMaximizeVertical20Filled = ( /*#__PURE__*/createFluentFontIcon("ArrowMaximizeVertical20Filled", "", 0, 20));
          export const ArrowMinimizeVertical24Filled = ( /*#__PURE__*/createFluentFontIcon("ArrowMinimizeVertical24Filled", "", 0, 24));
          export const ArrowPrevious20Filled = ( /*#__PURE__*/createFluentFontIcon("ArrowPrevious20Filled", "", 0, 20, { flipInRtl: true }));
          export const Branch24Filled = ( /*#__PURE__*/createFluentFontIcon("Branch24Filled", "", 0, 24));
          export const CalendarCheckmark20Filled = ( /*#__PURE__*/createFluentFontIcon("CalendarCheckmark20Filled", "", 0, 20));
          export const CalendarSettings20Filled = ( /*#__PURE__*/createFluentFontIcon("CalendarSettings20Filled", "", 0, 20));
          export const Camera24Filled = ( /*#__PURE__*/createFluentFontIcon("Camera24Filled", "", 0, 24));
          export const ChevronLeft24Filled = ( /*#__PURE__*/createFluentFontIcon("ChevronLeft24Filled", "", 0, 24));
          export const ColorLine20Filled = ( /*#__PURE__*/createFluentFontIcon("ColorLine20Filled", "", 0, 20));
          export const CommentMention24Filled = ( /*#__PURE__*/createFluentFontIcon("CommentMention24Filled", "", 0, 24, { flipInRtl: true }));
          export const Directions20Filled = ( /*#__PURE__*/createFluentFontIcon("Directions20Filled", "", 0, 20));
          export const DocumentError20Filled = ( /*#__PURE__*/createFluentFontIcon("DocumentError20Filled", "", 0, 20));
          export const DocumentPageBottomLeft20Filled = ( /*#__PURE__*/createFluentFontIcon("DocumentPageBottomLeft20Filled", "", 0, 20));
          export const DocumentPdf20Filled = ( /*#__PURE__*/createFluentFontIcon("DocumentPdf20Filled", "", 0, 20));
          export const DrinkCoffee20Filled = ( /*#__PURE__*/createFluentFontIcon("DrinkCoffee20Filled", "", 0, 20));
          export const FlagPride24Filled = ( /*#__PURE__*/createFluentFontIcon("FlagPride24Filled", "", 0, 24));
          export const FlashOff24Filled = ( /*#__PURE__*/createFluentFontIcon("FlashOff24Filled", "", 0, 24));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const ArrowClockwise32Light: FluentFontIcon;
          export declare const Autocorrect32Light: FluentFontIcon;
          export declare const DocumentSparkle48Light: FluentFontIcon;
          export declare const ReadAloud32Light: FluentFontIcon;
          export declare const Save32Light: FluentFontIcon;
          export declare const Signature32Light: FluentFontIcon;
          export declare const TableCellsSplit32Light: FluentFontIcon;
          export declare const Window32Light: FluentFontIcon;
          export declare const AppStore24Filled: FluentFontIcon;
          export declare const Apps16Filled: FluentFontIcon;
          export declare const Archive48Filled: FluentFontIcon;
          export declare const ArrowMaximizeVertical20Filled: FluentFontIcon;
          export declare const ArrowMinimizeVertical24Filled: FluentFontIcon;
          export declare const ArrowPrevious20Filled: FluentFontIcon;
          export declare const Branch24Filled: FluentFontIcon;
          export declare const CalendarCheckmark20Filled: FluentFontIcon;
          export declare const CalendarSettings20Filled: FluentFontIcon;
          export declare const Camera24Filled: FluentFontIcon;
          export declare const ChevronLeft24Filled: FluentFontIcon;
          export declare const ColorLine20Filled: FluentFontIcon;
          export declare const CommentMention24Filled: FluentFontIcon;
          export declare const Directions20Filled: FluentFontIcon;
          export declare const DocumentError20Filled: FluentFontIcon;
          export declare const DocumentPageBottomLeft20Filled: FluentFontIcon;
          export declare const DocumentPdf20Filled: FluentFontIcon;
          export declare const DrinkCoffee20Filled: FluentFontIcon;
          export declare const FlagPride24Filled: FluentFontIcon;
          export declare const FlashOff24Filled: FluentFontIcon;
          export declare const FontDecrease20Filled: FluentFontIcon;
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
          "... (12 export void 0 declarations filtered (exports.Icon1 = exports.Icon3 = void 0))
          "use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.ArrowClockwise32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowClockwise32Light", "", 3, 32));
          exports.Autocorrect32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Autocorrect32Light", "", 3, 32));
          exports.DocumentSparkle48Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DocumentSparkle48Light", "", 3, 48));
          exports.ReadAloud32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ReadAloud32Light", "", 3, 32));
          exports.Save32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Save32Light", "", 3, 32));
          exports.Signature32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Signature32Light", "", 3, 32));
          exports.TableCellsSplit32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("TableCellsSplit32Light", "", 3, 32));
          exports.Window32Light = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Window32Light", "", 3, 32));
          exports.AppStore24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("AppStore24Filled", "", 0, 24));
          exports.Apps16Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Apps16Filled", "", 0, 16));
          exports.Archive48Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Archive48Filled", "", 0, 48));
          exports.ArrowMaximizeVertical20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowMaximizeVertical20Filled", "", 0, 20));
          exports.ArrowMinimizeVertical24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowMinimizeVertical24Filled", "", 0, 24));
          exports.ArrowPrevious20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ArrowPrevious20Filled", "", 0, 20, { flipInRtl: true }));
          exports.Branch24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Branch24Filled", "", 0, 24));
          exports.CalendarCheckmark20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarCheckmark20Filled", "", 0, 20));
          exports.CalendarSettings20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CalendarSettings20Filled", "", 0, 20));
          exports.Camera24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Camera24Filled", "", 0, 24));
          exports.ChevronLeft24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ChevronLeft24Filled", "", 0, 24));
          exports.ColorLine20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("ColorLine20Filled", "", 0, 20));
          exports.CommentMention24Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("CommentMention24Filled", "", 0, 24, { flipInRtl: true }));
          exports.Directions20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("Directions20Filled", "", 0, 20));
          exports.DocumentError20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DocumentError20Filled", "", 0, 20));
          exports.DocumentPageBottomLeft20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DocumentPageBottomLeft20Filled", "", 0, 20));
          exports.DocumentPdf20Filled = ( /*#__PURE__*/createFluentFontIcon_1.createFluentFontIcon("DocumentPdf20Filled", "", 0, 20));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export declare const ArrowClockwise32Light: FluentFontIcon;
          export declare const Autocorrect32Light: FluentFontIcon;
          export declare const DocumentSparkle48Light: FluentFontIcon;
          export declare const ReadAloud32Light: FluentFontIcon;
          export declare const Save32Light: FluentFontIcon;
          export declare const Signature32Light: FluentFontIcon;
          export declare const TableCellsSplit32Light: FluentFontIcon;
          export declare const Window32Light: FluentFontIcon;
          export declare const AppStore24Filled: FluentFontIcon;
          export declare const Apps16Filled: FluentFontIcon;
          export declare const Archive48Filled: FluentFontIcon;
          export declare const ArrowMaximizeVertical20Filled: FluentFontIcon;
          export declare const ArrowMinimizeVertical24Filled: FluentFontIcon;
          export declare const ArrowPrevious20Filled: FluentFontIcon;
          export declare const Branch24Filled: FluentFontIcon;
          export declare const CalendarCheckmark20Filled: FluentFontIcon;
          export declare const CalendarSettings20Filled: FluentFontIcon;
          export declare const Camera24Filled: FluentFontIcon;
          export declare const ChevronLeft24Filled: FluentFontIcon;
          export declare const ColorLine20Filled: FluentFontIcon;
          export declare const CommentMention24Filled: FluentFontIcon;
          export declare const Directions20Filled: FluentFontIcon;
          export declare const DocumentError20Filled: FluentFontIcon;
          export declare const DocumentPageBottomLeft20Filled: FluentFontIcon;
          export declare const DocumentPdf20Filled: FluentFontIcon;
          export declare const DrinkCoffee20Filled: FluentFontIcon;
          export declare const FlagPride24Filled: FluentFontIcon;
          export declare const FlashOff24Filled: FluentFontIcon;
          export declare const FontDecrease20Filled: FluentFontIcon;
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
