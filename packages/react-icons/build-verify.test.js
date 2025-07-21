// @ts-check
import { describe, it, expect } from 'vitest';
import { readdir, stat, readFile } from 'node:fs/promises';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Trims content to first 30 lines for snapshot testing
 * @param {string} content - The content to trim
 * @returns {string} The trimmed content
 */
function trimContentForSnapshot(content) {
  const lines = content.split('\n');
  const trimmedLines = lines.slice(0, 30);

  if (lines.length > 30) {
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

 // TODO: enable once griffel RAW modules are available
  describe.skip('Styles Files', () => {
    it('should have required styles files in utils', async () => {
      const utilsPath = path.join(__dirname, 'lib', 'utils');
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

    it('should have required font styles files in utils/fonts', async () => {
      const fontsUtilsPath = path.join(__dirname, 'lib', 'utils', 'fonts');
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
          "import type { FluentIcon } from "../utils/createFluentIcon";
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
          ""use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          exports.AlertOnFilled = exports.AlertOffRegular = exports.AlertOffFilled = exports.AlertBadgeRegular = exports.AlertBadgeFilled = exports.AlertBadgeColor = exports.AlertRegular = exports.AlertFilled = exports.AlertColor = exports.AlbumAddRegular = exports.AlbumAddFilled = exports.AlbumRegular = exports.AlbumFilled = exports.AirplaneTakeOffRegular = exports.AirplaneTakeOffFilled = exports.AirplaneLandingRegular = exports.AirplaneLandingFilled = exports.AirplaneRegular = exports.AirplaneFilled = exports.AgentsAddRegular = exports.AgentsAddFilled = exports.AgentsRegular = exports.AgentsFilled = exports.AgentsColor = exports.AddSubtractCircleRegular = exports.AddSubtractCircleFilled = exports.AddStarburstRegular = exports.AddStarburstFilled = exports.AddStarburstColor = exports.AddSquareMultipleRegular = exports.AddSquareMultipleFilled = exports.AddSquareRegular = exports.AddSquareFilled = exports.AddCircleRegular = exports.AddCircleFilled = exports.AddCircleColor = exports.AddRegular = exports.AddFilled = exports.AccessibilityQuestionMarkRegular = exports.AccessibilityQuestionMarkFilled = exports.AccessibilityMoreRegular = exports.AccessibilityMoreFilled = exports.AccessibilityErrorRegular = exports.AccessibilityErrorFilled = exports.AccessibilityCheckmarkRegular = exports.AccessibilityCheckmarkFilled = exports.AccessibilityRegular = exports.AccessibilityFilled = exports.AccessTimeRegular = exports.AccessTimeFilled = void 0;
          exports.AnimalDogRegular = exports.AnimalDogFilled = exports.AnimalCatRegular = exports.AnimalCatFilled = exports.AlignTopRegular = exports.AlignTopFilled = exports.AlignStretchVerticalRegular = exports.AlignStretchVerticalFilled = exports.AlignStretchHorizontalRegular = exports.AlignStretchHorizontalFilled = exports.AlignStraightenRegular = exports.AlignStraightenFilled = exports.AlignStartVerticalRegular = exports.AlignStartVerticalFilled = exports.AlignStartHorizontalRegular = exports.AlignStartHorizontalFilled = exports.AlignSpaceFitVerticalRegular = exports.AlignSpaceFitVerticalFilled = exports.AlignSpaceEvenlyVerticalRegular = exports.AlignSpaceEvenlyVerticalFilled = exports.AlignSpaceEvenlyHorizontalRegular = exports.AlignSpaceEvenlyHorizontalFilled = exports.AlignSpaceBetweenVerticalRegular = exports.AlignSpaceBetweenVerticalFilled = exports.AlignSpaceBetweenHorizontalRegular = exports.AlignSpaceBetweenHorizontalFilled = exports.AlignSpaceAroundVerticalRegular = exports.AlignSpaceAroundVerticalFilled = exports.AlignSpaceAroundHorizontalRegular = exports.AlignSpaceAroundHorizontalFilled = exports.AlignRightRegular = exports.AlignRightFilled = exports.AlignLeftRegular = exports.AlignLeftFilled = exports.AlignEndVerticalRegular = exports.AlignEndVerticalFilled = exports.AlignEndHorizontalRegular = exports.AlignEndHorizontalFilled = exports.AlignCenterVerticalRegular = exports.AlignCenterVerticalFilled = exports.AlignCenterHorizontalRegular = exports.AlignCenterHorizontalFilled = exports.AlignBottomRegular = exports.AlignBottomFilled = exports.AlertUrgentRegular = exports.AlertUrgentFilled = exports.AlertUrgentColor = exports.AlertSnoozeRegular = exports.AlertSnoozeFilled = exports.AlertOnRegular = void 0;
          exports.ArrowAutofitHeightFilled = exports.ArrowAutofitDownRegular = exports.ArrowAutofitDownFilled = exports.ArrowAutofitContentRegular = exports.ArrowAutofitContentFilled = exports.ArchiveSettingsRegular = exports.ArchiveSettingsFilled = exports.ArchiveMultipleRegular = exports.ArchiveMultipleFilled = exports.ArchiveArrowBackRegular = exports.ArchiveArrowBackFilled = exports.ArchiveRegular = exports.ArchiveFilled = exports.AppsShieldRegular = exports.AppsShieldFilled = exports.AppsSettingsRegular = exports.AppsSettingsFilled = exports.AppsListDetailRegular = exports.AppsListDetailFilled = exports.AppsListDetailColor = exports.AppsListRegular = exports.AppsListFilled = exports.AppsListColor = exports.AppsAddInOffRegular = exports.AppsAddInOffFilled = exports.AppsAddInRegular = exports.AppsAddInFilled = exports.AppsRegular = exports.AppsFilled = exports.AppsColor = exports.ApprovalsAppRegular = exports.ApprovalsAppFilled = exports.ApprovalsAppColor = exports.AppTitleRegular = exports.AppTitleFilled = exports.AppRecentRegular = exports.AppRecentFilled = exports.AppGenericRegular = exports.AppGenericFilled = exports.AppFolderRegular = exports.AppFolderFilled = exports.AnimalTurtleRegular = exports.AnimalTurtleFilled = exports.AnimalRabbitOffRegular = exports.AnimalRabbitOffFilled = exports.AnimalRabbitRegular = exports.AnimalRabbitFilled = exports.AnimalPawPrintRegular = exports.AnimalPawPrintFilled = exports.AnimalPawPrintColor = void 0;
          exports.ArrowClockwiseDashesSettingsFilled = exports.ArrowClockwiseDashesSettingsColor = exports.ArrowClockwiseDashesRegular = exports.ArrowClockwiseDashesFilled = exports.ArrowClockwiseDashesColor = exports.ArrowClockwiseRegular = exports.ArrowClockwiseFilled = exports.ArrowCircleUpSparkleRegular = exports.ArrowCircleUpSparkleFilled = exports.ArrowCircleUpRightRegular = exports.ArrowCircleUpRightFilled = exports.ArrowCircleUpLeftRegular = exports.ArrowCircleUpLeftFilled = exports.ArrowCircleUpRegular = exports.ArrowCircleUpFilled = exports.ArrowCircleRightRegular = exports.ArrowCircleRightFilled = exports.ArrowCircleLeftRegular = exports.ArrowCircleLeftFilled = exports.ArrowCircleDownUpRegular = exports.ArrowCircleDownUpFilled = exports.ArrowCircleDownSplitRegular = exports.ArrowCircleDownSplitFilled = exports.ArrowCircleDownRightRegular = exports.ArrowCircleDownRightFilled = exports.ArrowCircleDownDoubleRegular = exports.ArrowCircleDownDoubleFilled = exports.ArrowCircleDownRegular = exports.ArrowCircleDownFilled = exports.ArrowBounceRegular = exports.ArrowBounceFilled = exports.ArrowBidirectionalUpDownRegular = exports.ArrowBidirectionalUpDownFilled = exports.ArrowBidirectionalLeftRightRegular = exports.ArrowBidirectionalLeftRightFilled = exports.ArrowBetweenUpRegular = exports.ArrowBetweenUpFilled = exports.ArrowBetweenDownRegular = exports.ArrowBetweenDownFilled = exports.ArrowAutofitWidthDottedRegular = exports.ArrowAutofitWidthDottedFilled = exports.ArrowAutofitWidthRegular = exports.ArrowAutofitWidthFilled = exports.ArrowAutofitUpRegular = exports.ArrowAutofitUpFilled = exports.ArrowAutofitHeightInRegular = exports.ArrowAutofitHeightInFilled = exports.ArrowAutofitHeightDottedRegular = exports.ArrowAutofitHeightDottedFilled = exports.ArrowAutofitHeightRegular = void 0;
          exports.ArrowExportUpFilled = exports.ArrowExportRtlRegular = exports.ArrowExportRtlFilled = exports.ArrowExportLtrRegular = exports.ArrowExportLtrFilled = exports.ArrowExportRegular = exports.ArrowExportFilled = exports.ArrowExpandAllRegular = exports.ArrowExpandAllFilled = exports.ArrowExpandRegular = exports.ArrowExpandFilled = exports.ArrowExitRegular = exports.ArrowExitFilled = exports.ArrowEnterUpRegular = exports.ArrowEnterUpFilled = exports.ArrowEnterLeftRegular = exports.ArrowEnterLeftFilled = exports.ArrowEnterRegular = exports.ArrowEnterFilled = exports.ArrowEjectRegular = exports.ArrowEjectFilled = exports.ArrowDownloadOffRegular = exports.ArrowDownloadOffFilled = exports.ArrowDownloadRegular = exports.ArrowDownloadFilled = exports.ArrowDownRightRegular = exports.ArrowDownRightFilled = exports.ArrowDownLeftRegular = exports.ArrowDownLeftFilled = exports.ArrowDownExclamationRegular = exports.ArrowDownExclamationFilled = exports.ArrowDownRegular = exports.ArrowDownFilled = exports.ArrowCurveUpRightRegular = exports.ArrowCurveUpRightFilled = exports.ArrowCurveUpLeftRegular = exports.ArrowCurveUpLeftFilled = exports.ArrowCurveDownRightRegular = exports.ArrowCurveDownRightFilled = exports.ArrowCurveDownLeftRegular = exports.ArrowCurveDownLeftFilled = exports.ArrowCounterclockwiseInfoRegular = exports.ArrowCounterclockwiseInfoFilled = exports.ArrowCounterclockwiseDashesRegular = exports.ArrowCounterclockwiseDashesFilled = exports.ArrowCounterclockwiseRegular = exports.ArrowCounterclockwiseFilled = exports.ArrowCollapseAllRegular = exports.ArrowCollapseAllFilled = exports.ArrowClockwiseDashesSettingsRegular = void 0;
          exports.ArrowParagraphFilled = exports.ArrowOutlineUpRightRegular = exports.ArrowOutlineUpRightFilled = exports.ArrowOutlineDownLeftRegular = exports.ArrowOutlineDownLeftFilled = exports.ArrowNextRegular = exports.ArrowNextFilled = exports.ArrowMoveInwardRegular = exports.ArrowMoveInwardFilled = exports.ArrowMoveRegular = exports.ArrowMoveFilled = exports.ArrowMinimizeVerticalRegular = exports.ArrowMinimizeVerticalFilled = exports.ArrowMinimizeRegular = exports.ArrowMinimizeFilled = exports.ArrowMaximizeVerticalRegular = exports.ArrowMaximizeVerticalFilled = exports.ArrowMaximizeRegular = exports.ArrowMaximizeFilled = exports.ArrowLeftRegular = exports.ArrowLeftFilled = exports.ArrowJoinRegular = exports.ArrowJoinFilled = exports.ArrowImportRegular = exports.ArrowImportFilled = exports.ArrowHookUpRightRegular = exports.ArrowHookUpRightFilled = exports.ArrowHookUpLeftRegular = exports.ArrowHookUpLeftFilled = exports.ArrowHookDownRightRegular = exports.ArrowHookDownRightFilled = exports.ArrowHookDownLeftRegular = exports.ArrowHookDownLeftFilled = exports.ArrowForwardDownPersonRegular = exports.ArrowForwardDownPersonFilled = exports.ArrowForwardDownLightningRegular = exports.ArrowForwardDownLightningFilled = exports.ArrowForwardRegular = exports.ArrowForwardFilled = exports.ArrowFlowUpRightRectangleMultipleRegular = exports.ArrowFlowUpRightRectangleMultipleFilled = exports.ArrowFlowUpRightRegular = exports.ArrowFlowUpRightFilled = exports.ArrowFlowDiagonalUpRightRegular = exports.ArrowFlowDiagonalUpRightFilled = exports.ArrowFitInRegular = exports.ArrowFitInFilled = exports.ArrowFitRegular = exports.ArrowFitFilled = exports.ArrowExportUpRegular = void 0;
          exports.ArrowSquareDownFilled = exports.ArrowSquareDownColor = exports.ArrowSquareColor = exports.ArrowSprintRegular = exports.ArrowSprintFilled = exports.ArrowSplitRegular = exports.ArrowSplitFilled = exports.ArrowSortUpLinesRegular = exports.ArrowSortUpLinesFilled = exports.ArrowSortUpRegular = exports.ArrowSortUpFilled = exports.ArrowSortDownLinesRegular = exports.ArrowSortDownLinesFilled = exports.ArrowSortDownRegular = exports.ArrowSortDownFilled = exports.ArrowSortRegular = exports.ArrowSortFilled = exports.ArrowShuffleOffRegular = exports.ArrowShuffleOffFilled = exports.ArrowShuffleRegular = exports.ArrowShuffleFilled = exports.ArrowRoutingRectangleMultipleRegular = exports.ArrowRoutingRectangleMultipleFilled = exports.ArrowRoutingRegular = exports.ArrowRoutingFilled = exports.ArrowRotateCounterclockwiseRegular = exports.ArrowRotateCounterclockwiseFilled = exports.ArrowRotateClockwiseRegular = exports.ArrowRotateClockwiseFilled = exports.ArrowRightRegular = exports.ArrowRightFilled = exports.ArrowResetRegular = exports.ArrowResetFilled = exports.ArrowReplyDownRegular = exports.ArrowReplyDownFilled = exports.ArrowReplyAllRegular = exports.ArrowReplyAllFilled = exports.ArrowReplyRegular = exports.ArrowReplyFilled = exports.ArrowRepeatAllOffRegular = exports.ArrowRepeatAllOffFilled = exports.ArrowRepeatAllRegular = exports.ArrowRepeatAllFilled = exports.ArrowRepeat1Regular = exports.ArrowRepeat1Filled = exports.ArrowRedoRegular = exports.ArrowRedoFilled = exports.ArrowPreviousRegular = exports.ArrowPreviousFilled = exports.ArrowParagraphRegular = void 0;
          exports.ArrowTurnDownLeftFilled = exports.ArrowTurnBidirectionalDownRightRegular = exports.ArrowTurnBidirectionalDownRightFilled = exports.ArrowTrendingWrenchRegular = exports.ArrowTrendingWrenchFilled = exports.ArrowTrendingTextRegular = exports.ArrowTrendingTextFilled = exports.ArrowTrendingSparkleRegular = exports.ArrowTrendingSparkleFilled = exports.ArrowTrendingSettingsRegular = exports.ArrowTrendingSettingsFilled = exports.ArrowTrendingLinesRegular = exports.ArrowTrendingLinesFilled = exports.ArrowTrendingLinesColor = exports.ArrowTrendingDownRegular = exports.ArrowTrendingDownFilled = exports.ArrowTrendingCheckmarkRegular = exports.ArrowTrendingCheckmarkFilled = exports.ArrowTrendingRegular = exports.ArrowTrendingFilled = exports.ArrowSyncOffRegular = exports.ArrowSyncOffFilled = exports.ArrowSyncDismissRegular = exports.ArrowSyncDismissFilled = exports.ArrowSyncCircleRegular = exports.ArrowSyncCircleFilled = exports.ArrowSyncCheckmarkRegular = exports.ArrowSyncCheckmarkFilled = exports.ArrowSyncRegular = exports.ArrowSyncFilled = exports.ArrowSyncColor = exports.ArrowSwapRegular = exports.ArrowSwapFilled = exports.ArrowStepOverRegular = exports.ArrowStepOverFilled = exports.ArrowStepOutRegular = exports.ArrowStepOutFilled = exports.ArrowStepInRightRegular = exports.ArrowStepInRightFilled = exports.ArrowStepInLeftRegular = exports.ArrowStepInLeftFilled = exports.ArrowStepInDiagonalDownLeftRegular = exports.ArrowStepInDiagonalDownLeftFilled = exports.ArrowStepInRegular = exports.ArrowStepInFilled = exports.ArrowStepBackRegular = exports.ArrowStepBackFilled = exports.ArrowSquareUpRightRegular = exports.ArrowSquareUpRightFilled = exports.ArrowSquareDownRegular = void 0;
          exports.AttachTextFilled = exports.AttachArrowRightRegular = exports.AttachArrowRightFilled = exports.AttachRegular = exports.AttachFilled = exports.ArrowsBidirectionalRegular = exports.ArrowsBidirectionalFilled = exports.ArrowWrapUpToDownRegular = exports.ArrowWrapUpToDownFilled = exports.ArrowWrapOffRegular = exports.ArrowWrapOffFilled = exports.ArrowWrapRegular = exports.ArrowWrapFilled = exports.ArrowUploadRegular = exports.ArrowUploadFilled = exports.ArrowUpRightDashesRegular = exports.ArrowUpRightDashesFilled = exports.ArrowUpRightRegular = exports.ArrowUpRightFilled = exports.ArrowUpLeftRegular = exports.ArrowUpLeftFilled = exports.ArrowUpExclamationRegular = exports.ArrowUpExclamationFilled = exports.ArrowUpRegular = exports.ArrowUpFilled = exports.ArrowUndoRegular = exports.ArrowUndoFilled = exports.ArrowTurnUpLeftRegular = exports.ArrowTurnUpLeftFilled = exports.ArrowTurnUpDownRegular = exports.ArrowTurnUpDownFilled = exports.ArrowTurnRightUpRegular = exports.ArrowTurnRightUpFilled = exports.ArrowTurnRightLeftRegular = exports.ArrowTurnRightLeftFilled = exports.ArrowTurnRightDownRegular = exports.ArrowTurnRightDownFilled = exports.ArrowTurnRightRegular = exports.ArrowTurnRightFilled = exports.ArrowTurnLeftUpRegular = exports.ArrowTurnLeftUpFilled = exports.ArrowTurnLeftRightRegular = exports.ArrowTurnLeftRightFilled = exports.ArrowTurnLeftDownRegular = exports.ArrowTurnLeftDownFilled = exports.ArrowTurnDownUpRegular = exports.ArrowTurnDownUpFilled = exports.ArrowTurnDownRightRegular = exports.ArrowTurnDownRightFilled = exports.ArrowTurnDownLeftRegular = void 0;
          exports.BatteryCheckmarkFilled = exports.BatteryChargeRegular = exports.BatteryChargeFilled = exports.Battery9Regular = exports.Battery9Filled = exports.Battery8Regular = exports.Battery8Filled = exports.Battery7Regular = exports.Battery7Filled = exports.Battery6Regular = exports.Battery6Filled = exports.Battery5Regular = exports.Battery5Filled = exports.Battery4Regular = exports.Battery4Filled = exports.Battery3Regular = exports.Battery3Filled = exports.Battery2Regular = exports.Battery2Filled = exports.Battery1Regular = exports.Battery1Filled = exports.Battery10Regular = exports.Battery10Filled = exports.Battery0Regular = exports.Battery0Filled = exports.BarcodeScannerDismissRegular = exports.BarcodeScannerDismissFilled = exports.BarcodeScannerAddRegular = exports.BarcodeScannerAddFilled = exports.BarcodeScannerRegular = exports.BarcodeScannerFilled = exports.BalloonRegular = exports.BalloonFilled = exports.BadgeRegular = exports.BadgeFilled = exports.BackspaceRegular = exports.BackspaceFilled = exports.BackpackAddRegular = exports.BackpackAddFilled = exports.BackpackRegular = exports.BackpackFilled = exports.AutosumRegular = exports.AutosumFilled = exports.AutocorrectRegular = exports.AutocorrectFilled = exports.AutoFitWidthRegular = exports.AutoFitWidthFilled = exports.AutoFitHeightRegular = exports.AutoFitHeightFilled = exports.AttachTextRegular = void 0;
          exports.BoardHeartFilled = exports.BoardGamesRegular = exports.BoardGamesFilled = exports.BoardRegular = exports.BoardFilled = exports.BoardColor = exports.BlurRegular = exports.BlurFilled = exports.BluetoothSearchingRegular = exports.BluetoothSearchingFilled = exports.BluetoothDisabledRegular = exports.BluetoothDisabledFilled = exports.BluetoothConnectedRegular = exports.BluetoothConnectedFilled = exports.BluetoothRegular = exports.BluetoothFilled = exports.BinderTriangleRegular = exports.BinderTriangleFilled = exports.BinRecycleFullRegular = exports.BinRecycleFullFilled = exports.BinRecycleRegular = exports.BinRecycleFilled = exports.BinFullRegular = exports.BinFullFilled = exports.BezierCurveSquareRegular = exports.BezierCurveSquareFilled = exports.BenchRegular = exports.BenchFilled = exports.BedRegular = exports.BedFilled = exports.BeakerSettingsRegular = exports.BeakerSettingsFilled = exports.BeakerOffRegular = exports.BeakerOffFilled = exports.BeakerEditRegular = exports.BeakerEditFilled = exports.BeakerDismissRegular = exports.BeakerDismissFilled = exports.BeakerAddRegular = exports.BeakerAddFilled = exports.BeakerRegular = exports.BeakerFilled = exports.BeachRegular = exports.BeachFilled = exports.BeachColor = exports.BatteryWarningRegular = exports.BatteryWarningFilled = exports.BatterySaverRegular = exports.BatterySaverFilled = exports.BatteryCheckmarkRegular = void 0;
          exports.BookQuestionMarkRtlFilled = exports.BookQuestionMarkRegular = exports.BookQuestionMarkFilled = exports.BookPulseRegular = exports.BookPulseFilled = exports.BookOpenMicrophoneRegular = exports.BookOpenMicrophoneFilled = exports.BookOpenLightbulbRegular = exports.BookOpenLightbulbFilled = exports.BookOpenLightbulbColor = exports.BookOpenGlobeRegular = exports.BookOpenGlobeFilled = exports.BookOpenRegular = exports.BookOpenFilled = exports.BookOpenColor = exports.BookNumberRegular = exports.BookNumberFilled = exports.BookLetterRegular = exports.BookLetterFilled = exports.BookInformationRegular = exports.BookInformationFilled = exports.BookGlobeRegular = exports.BookGlobeFilled = exports.BookExclamationMarkRegular = exports.BookExclamationMarkFilled = exports.BookDismissRegular = exports.BookDismissFilled = exports.BookDefaultFilled = exports.BookDatabaseRegular = exports.BookDatabaseFilled = exports.BookDatabaseColor = exports.BookContactsRegular = exports.BookContactsFilled = exports.BookContactsColor = exports.BookCompassRegular = exports.BookCompassFilled = exports.BookCoinsRegular = exports.BookCoinsFilled = exports.BookClockRegular = exports.BookClockFilled = exports.BookArrowClockwiseRegular = exports.BookArrowClockwiseFilled = exports.BookAddRegular = exports.BookAddFilled = exports.BookRegular = exports.BookFilled = exports.BookColor = exports.BoardSplitRegular = exports.BoardSplitFilled = exports.BoardHeartRegular = void 0;
          exports.BorderTopBottomDoubleFilled = exports.BorderTopBottomRegular = exports.BorderTopBottomFilled = exports.BorderTopRegular = exports.BorderTopFilled = exports.BorderRightRegular = exports.BorderRightFilled = exports.BorderOutsideThickRegular = exports.BorderOutsideThickFilled = exports.BorderOutsideRegular = exports.BorderOutsideFilled = exports.BorderNoneRegular = exports.BorderNoneFilled = exports.BorderLeftRightRegular = exports.BorderLeftRightFilled = exports.BorderLeftRegular = exports.BorderLeftFilled = exports.BorderInsideRegular = exports.BorderInsideFilled = exports.BorderBottomThickRegular = exports.BorderBottomThickFilled = exports.BorderBottomDoubleRegular = exports.BorderBottomDoubleFilled = exports.BorderBottomRegular = exports.BorderBottomFilled = exports.BorderAllRegular = exports.BorderAllFilled = exports.BookmarkSearchRegular = exports.BookmarkSearchFilled = exports.BookmarkOffRegular = exports.BookmarkOffFilled = exports.BookmarkMultipleRegular = exports.BookmarkMultipleFilled = exports.BookmarkAddRegular = exports.BookmarkAddFilled = exports.BookmarkRegular = exports.BookmarkFilled = exports.BookmarkColor = exports.BookToolboxRegular = exports.BookToolboxFilled = exports.BookThetaRegular = exports.BookThetaFilled = exports.BookTemplateRegular = exports.BookTemplateFilled = exports.BookStarRegular = exports.BookStarFilled = exports.BookStarColor = exports.BookSearchRegular = exports.BookSearchFilled = exports.BookQuestionMarkRtlRegular = void 0;
          exports.BrainCircuitFilled = exports.BrainRegular = exports.BrainFilled = exports.BracesVariableRegular = exports.BracesVariableFilled = exports.BracesRegular = exports.BracesFilled = exports.BoxToolboxRegular = exports.BoxToolboxFilled = exports.BoxSearchRegular = exports.BoxSearchFilled = exports.BoxMultipleSearchRegular = exports.BoxMultipleSearchFilled = exports.BoxMultipleCheckmarkRegular = exports.BoxMultipleCheckmarkFilled = exports.BoxMultipleArrowRightRegular = exports.BoxMultipleArrowRightFilled = exports.BoxMultipleArrowLeftRegular = exports.BoxMultipleArrowLeftFilled = exports.BoxMultipleRegular = exports.BoxMultipleFilled = exports.BoxEditRegular = exports.BoxEditFilled = exports.BoxDismissRegular = exports.BoxDismissFilled = exports.BoxCheckmarkRegular = exports.BoxCheckmarkFilled = exports.BoxArrowUpRegular = exports.BoxArrowUpFilled = exports.BoxArrowLeftRegular = exports.BoxArrowLeftFilled = exports.BoxRegular = exports.BoxFilled = exports.BowlSaladRegular = exports.BowlSaladFilled = exports.BowlChopsticksRegular = exports.BowlChopsticksFilled = exports.BowTieRegular = exports.BowTieFilled = exports.BotSparkleRegular = exports.BotSparkleFilled = exports.BotSparkleColor = exports.BotAddRegular = exports.BotAddFilled = exports.BotRegular = exports.BotFilled = exports.BotColor = exports.BorderTopBottomThickRegular = exports.BorderTopBottomThickFilled = exports.BorderTopBottomDoubleRegular = void 0;
          exports.BuildingFilled = exports.BuildingColor = exports.BugProhibitedRegular = exports.BugProhibitedFilled = exports.BugArrowCounterclockwiseRegular = exports.BugArrowCounterclockwiseFilled = exports.BugRegular = exports.BugFilled = exports.BubbleMultipleRegular = exports.BubbleMultipleFilled = exports.BroomSparkleRegular = exports.BroomSparkleFilled = exports.BroomRegular = exports.BroomFilled = exports.BroadActivityFeedRegular = exports.BroadActivityFeedFilled = exports.BrightnessLowRegular = exports.BrightnessLowFilled = exports.BrightnessHighRegular = exports.BrightnessHighFilled = exports.BriefcaseSearchRegular = exports.BriefcaseSearchFilled = exports.BriefcaseOffRegular = exports.BriefcaseOffFilled = exports.BriefcaseMedicalRegular = exports.BriefcaseMedicalFilled = exports.BriefcaseRegular = exports.BriefcaseFilled = exports.BriefcaseColor = exports.BreakoutRoomRegular = exports.BreakoutRoomFilled = exports.BranchRequestDraftRegular = exports.BranchRequestDraftFilled = exports.BranchRequestClosedRegular = exports.BranchRequestClosedFilled = exports.BranchRequestRegular = exports.BranchRequestFilled = exports.BranchForkLinkRegular = exports.BranchForkLinkFilled = exports.BranchForkHintRegular = exports.BranchForkHintFilled = exports.BranchForkRegular = exports.BranchForkFilled = exports.BranchCompareRegular = exports.BranchCompareFilled = exports.BranchRegular = exports.BranchFilled = exports.BrainSparkleRegular = exports.BrainSparkleFilled = exports.BrainCircuitRegular = void 0;
          exports.BuildingTownhouseFilled = exports.BuildingSwapRegular = exports.BuildingSwapFilled = exports.BuildingStoreColor = exports.BuildingSkyscraperRegular = exports.BuildingSkyscraperFilled = exports.BuildingShopRegular = exports.BuildingShopFilled = exports.BuildingRetailToolboxRegular = exports.BuildingRetailToolboxFilled = exports.BuildingRetailShieldRegular = exports.BuildingRetailShieldFilled = exports.BuildingRetailMoreRegular = exports.BuildingRetailMoreFilled = exports.BuildingRetailMoneyRegular = exports.BuildingRetailMoneyFilled = exports.BuildingRetailRegular = exports.BuildingRetailFilled = exports.BuildingPeopleRegular = exports.BuildingPeopleFilled = exports.BuildingPeopleColor = exports.BuildingMultipleRegular = exports.BuildingMultipleFilled = exports.BuildingMultipleColor = exports.BuildingMosqueRegular = exports.BuildingMosqueFilled = exports.BuildingLighthouseRegular = exports.BuildingLighthouseFilled = exports.BuildingHomeRegular = exports.BuildingHomeFilled = exports.BuildingHomeColor = exports.BuildingGovernmentSearchRegular = exports.BuildingGovernmentSearchFilled = exports.BuildingGovernmentSearchColor = exports.BuildingGovernmentRegular = exports.BuildingGovernmentFilled = exports.BuildingGovernmentColor = exports.BuildingFactoryRegular = exports.BuildingFactoryFilled = exports.BuildingDesktopRegular = exports.BuildingDesktopFilled = exports.BuildingCheckmarkRegular = exports.BuildingCheckmarkFilled = exports.BuildingBankToolboxRegular = exports.BuildingBankToolboxFilled = exports.BuildingBankLinkRegular = exports.BuildingBankLinkFilled = exports.BuildingBankRegular = exports.BuildingBankFilled = exports.BuildingRegular = void 0;
          exports.CalendarEmptyFilled = exports.CalendarEditRegular = exports.CalendarEditFilled = exports.CalendarEditColor = exports.CalendarDayRegular = exports.CalendarDayFilled = exports.CalendarDateRegular = exports.CalendarDateFilled = exports.CalendarDataBarRegular = exports.CalendarDataBarFilled = exports.CalendarDataBarColor = exports.CalendarClockRegular = exports.CalendarClockFilled = exports.CalendarClockColor = exports.CalendarCheckmarkRegular = exports.CalendarCheckmarkFilled = exports.CalendarCheckmarkColor = exports.CalendarChatRegular = exports.CalendarChatFilled = exports.CalendarCancelRegular = exports.CalendarCancelFilled = exports.CalendarCancelColor = exports.CalendarAssistantRegular = exports.CalendarAssistantFilled = exports.CalendarArrowRightRegular = exports.CalendarArrowRightFilled = exports.CalendarArrowRepeatAllRegular = exports.CalendarArrowRepeatAllFilled = exports.CalendarArrowDownRegular = exports.CalendarArrowDownFilled = exports.CalendarArrowCounterclockwiseRegular = exports.CalendarArrowCounterclockwiseFilled = exports.CalendarAgendaRegular = exports.CalendarAgendaFilled = exports.CalendarAddRegular = exports.CalendarAddFilled = exports.Calendar3DayRegular = exports.Calendar3DayFilled = exports.CalendarRegular = exports.CalendarFilled = exports.CalendarColor = exports.CalculatorMultipleRegular = exports.CalculatorMultipleFilled = exports.CalculatorArrowClockwiseRegular = exports.CalculatorArrowClockwiseFilled = exports.CalculatorRegular = exports.CalculatorFilled = exports.ButtonRegular = exports.ButtonFilled = exports.BuildingTownhouseRegular = void 0;
          exports.CalendarSyncFilled = exports.CalendarSyncColor = exports.CalendarStarRegular = exports.CalendarStarFilled = exports.CalendarSparkleRegular = exports.CalendarSparkleFilled = exports.CalendarShieldRegular = exports.CalendarShieldFilled = exports.CalendarSettingsRegular = exports.CalendarSettingsFilled = exports.CalendarSearchRegular = exports.CalendarSearchFilled = exports.CalendarRtlRegular = exports.CalendarRtlFilled = exports.CalendarReplyRegular = exports.CalendarReplyFilled = exports.CalendarRecordRegular = exports.CalendarRecordFilled = exports.CalendarQuestionMarkRegular = exports.CalendarQuestionMarkFilled = exports.CalendarPlayRegular = exports.CalendarPlayFilled = exports.CalendarPhoneRegular = exports.CalendarPhoneFilled = exports.CalendarPersonRegular = exports.CalendarPersonFilled = exports.CalendarPeopleColor = exports.CalendarPatternRegular = exports.CalendarPatternFilled = exports.CalendarNoteRegular = exports.CalendarNoteFilled = exports.CalendarMultipleRegular = exports.CalendarMultipleFilled = exports.CalendarMonthRegular = exports.CalendarMonthFilled = exports.CalendarMentionRegular = exports.CalendarMentionFilled = exports.CalendarMailRegular = exports.CalendarMailFilled = exports.CalendarLtrRegular = exports.CalendarLtrFilled = exports.CalendarLockRegular = exports.CalendarLockFilled = exports.CalendarInfoRegular = exports.CalendarInfoFilled = exports.CalendarEyeRegular = exports.CalendarEyeFilled = exports.CalendarErrorRegular = exports.CalendarErrorFilled = exports.CalendarEmptyRegular = void 0;
          exports.CallWarningFilled = exports.CallTransferRegular = exports.CallTransferFilled = exports.CallSquareRegular = exports.CallSquareFilled = exports.CallRectangleLandscapeRegular = exports.CallRectangleLandscapeFilled = exports.CallProhibitedRegular = exports.CallProhibitedFilled = exports.CallPauseRegular = exports.CallPauseFilled = exports.CallParkRegular = exports.CallParkFilled = exports.CallOutboundRegular = exports.CallOutboundFilled = exports.CallMissedRegular = exports.CallMissedFilled = exports.CallInboundRegular = exports.CallInboundFilled = exports.CallForwardRegular = exports.CallForwardFilled = exports.CallExclamationRegular = exports.CallExclamationFilled = exports.CallEndRegular = exports.CallEndFilled = exports.CallDismissRegular = exports.CallDismissFilled = exports.CallConnectingRegular = exports.CallConnectingFilled = exports.CallCheckmarkRegular = exports.CallCheckmarkFilled = exports.CallAddRegular = exports.CallAddFilled = exports.CallRegular = exports.CallFilled = exports.CalendarWorkWeekRegular = exports.CalendarWorkWeekFilled = exports.CalendarWeekStartRegular = exports.CalendarWeekStartFilled = exports.CalendarWeekNumbersRegular = exports.CalendarWeekNumbersFilled = exports.CalendarVideoRegular = exports.CalendarVideoFilled = exports.CalendarToolboxRegular = exports.CalendarToolboxFilled = exports.CalendarTodayRegular = exports.CalendarTodayFilled = exports.CalendarTemplateRegular = exports.CalendarTemplateFilled = exports.CalendarSyncRegular = void 0;
          exports.Cellular3GRegular = exports.Cellular3GFilled = exports.CatchUpRegular = exports.CatchUpFilled = exports.CastMultipleRegular = exports.CastMultipleFilled = exports.CastRegular = exports.CastFilled = exports.CartRegular = exports.CartFilled = exports.CaretUpRegular = exports.CaretUpFilled = exports.CaretRightRegular = exports.CaretRightFilled = exports.CaretLeftRegular = exports.CaretLeftFilled = exports.CaretDownRightRegular = exports.CaretDownRightFilled = exports.CaretDownRegular = exports.CaretDownFilled = exports.CardUiPortraitFlipRegular = exports.CardUiPortraitFlipFilled = exports.CardUiRegular = exports.CardUiFilled = exports.CameraSwitchRegular = exports.CameraSwitchFilled = exports.CameraSparklesRegular = exports.CameraSparklesFilled = exports.CameraOffRegular = exports.CameraOffFilled = exports.CameraEditRegular = exports.CameraEditFilled = exports.CameraDomeRegular = exports.CameraDomeFilled = exports.CameraArrowUpRegular = exports.CameraArrowUpFilled = exports.CameraAddRegular = exports.CameraAddFilled = exports.CameraRegular = exports.CameraFilled = exports.CameraColor = exports.CalligraphyPenQuestionMarkRegular = exports.CalligraphyPenQuestionMarkFilled = exports.CalligraphyPenErrorRegular = exports.CalligraphyPenErrorFilled = exports.CalligraphyPenCheckmarkRegular = exports.CalligraphyPenCheckmarkFilled = exports.CalligraphyPenRegular = exports.CalligraphyPenFilled = exports.CallWarningRegular = void 0;
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.AccessTimeFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTimeFilled', "1em", ["M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.99 8.6A.5.5 0 0 1 6 8.4c.02-.07.03-.14.07-.24a2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"]));
          exports.AccessTimeRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTimeRegular', "1em", ["M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"]));
          exports.AccessibilityFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l1.4-3.46c.08-.21.38-.21.46 0l1.4 3.46a1.75 1.75 0 0 0 3.24-1.32l-1.83-4.54a.5.5 0 0 1-.04-.19V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57Z"]));
          exports.AccessibilityRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 0 0 3.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2ZM4.07 5.44a.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v2.3a1 1 0 0 0 .07.37l1.87 4.64a.75.75 0 0 1-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99Z"]));
          exports.AccessibilityCheckmarkFilled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmarkFilled', "1em", ["M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 0 1-.04.19l-1.84 4.55a1.75 1.75 0 0 0 3.25 1.32l.08-.22A5.48 5.48 0 0 1 13 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 0 1-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57ZM18 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          exports.AccessibilityCheckmarkRegular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessibilityCheckmarkRegular', "1em", ["M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 0 0-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 0 0 3.25 1.32l.08-.22a5.46 5.46 0 0 1-.42-1.62l-.59 1.46a.75.75 0 1 1-1.39-.56l1.88-4.65a1 1 0 0 0 .07-.37V8.66a1 1 0 0 0-.6-.91L4.45 6.43a.74.74 0 0 1-.37-.99.76.76 0 0 1 1-.38l3.91 1.75a2.5 2.5 0 0 0 2.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 0 0-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 0 0-2.32-.88l-2.1.93A2.51 2.51 0 0 0 10 2Zm8 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
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
          import { createFluentIcon } from "../utils/createFluentIcon";
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
          "import type { FluentIcon } from "../utils/createFluentIcon";
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
          ""use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          exports.Add28Filled = exports.Add24Regular = exports.Add24Filled = exports.Add20Regular = exports.Add20Filled = exports.Add16Regular = exports.Add16Filled = exports.Add12Regular = exports.Add12Filled = exports.AccessibilityQuestionMark24Regular = exports.AccessibilityQuestionMark24Filled = exports.AccessibilityQuestionMark20Regular = exports.AccessibilityQuestionMark20Filled = exports.AccessibilityMore24Regular = exports.AccessibilityMore24Filled = exports.AccessibilityMore20Regular = exports.AccessibilityMore20Filled = exports.AccessibilityMore16Regular = exports.AccessibilityMore16Filled = exports.AccessibilityError24Regular = exports.AccessibilityError24Filled = exports.AccessibilityError20Regular = exports.AccessibilityError20Filled = exports.AccessibilityCheckmark48Regular = exports.AccessibilityCheckmark48Filled = exports.AccessibilityCheckmark32Regular = exports.AccessibilityCheckmark32Light = exports.AccessibilityCheckmark32Filled = exports.AccessibilityCheckmark28Regular = exports.AccessibilityCheckmark28Filled = exports.AccessibilityCheckmark24Regular = exports.AccessibilityCheckmark24Filled = exports.AccessibilityCheckmark20Regular = exports.AccessibilityCheckmark20Filled = exports.Accessibility48Regular = exports.Accessibility48Filled = exports.Accessibility32Regular = exports.Accessibility32Filled = exports.Accessibility28Regular = exports.Accessibility28Filled = exports.Accessibility24Regular = exports.Accessibility24Filled = exports.Accessibility20Regular = exports.Accessibility20Filled = exports.Accessibility16Regular = exports.Accessibility16Filled = exports.AccessTime24Regular = exports.AccessTime24Filled = exports.AccessTime20Regular = exports.AccessTime20Filled = void 0;
          exports.AddStarburst24Color = exports.AddStarburst20Regular = exports.AddStarburst20Filled = exports.AddStarburst20Color = exports.AddStarburst16Regular = exports.AddStarburst16Filled = exports.AddStarburst16Color = exports.AddSquareMultiple24Regular = exports.AddSquareMultiple24Filled = exports.AddSquareMultiple20Regular = exports.AddSquareMultiple20Filled = exports.AddSquareMultiple16Regular = exports.AddSquareMultiple16Filled = exports.AddSquare48Regular = exports.AddSquare48Filled = exports.AddSquare32Regular = exports.AddSquare32Filled = exports.AddSquare28Regular = exports.AddSquare28Filled = exports.AddSquare24Regular = exports.AddSquare24Filled = exports.AddSquare20Regular = exports.AddSquare20Filled = exports.AddSquare16Regular = exports.AddSquare16Filled = exports.AddCircle48Regular = exports.AddCircle48Filled = exports.AddCircle32Regular = exports.AddCircle32Filled = exports.AddCircle32Color = exports.AddCircle28Regular = exports.AddCircle28Filled = exports.AddCircle28Color = exports.AddCircle24Regular = exports.AddCircle24Filled = exports.AddCircle24Color = exports.AddCircle20Regular = exports.AddCircle20Filled = exports.AddCircle20Color = exports.AddCircle16Regular = exports.AddCircle16Filled = exports.AddCircle16Color = exports.AddCircle12Regular = exports.AddCircle12Filled = exports.Add48Regular = exports.Add48Filled = exports.Add32Regular = exports.Add32Light = exports.Add32Filled = exports.Add28Regular = void 0;
          exports.Airplane28Filled = exports.Airplane24Regular = exports.Airplane24Filled = exports.Airplane20Regular = exports.Airplane20Filled = exports.Airplane16Regular = exports.Airplane16Filled = exports.AgentsAdd24Regular = exports.AgentsAdd24Filled = exports.AgentsAdd20Regular = exports.AgentsAdd20Filled = exports.Agents48Regular = exports.Agents48Filled = exports.Agents48Color = exports.Agents32Regular = exports.Agents32Filled = exports.Agents32Color = exports.Agents28Regular = exports.Agents28Filled = exports.Agents28Color = exports.Agents24Regular = exports.Agents24Filled = exports.Agents24Color = exports.Agents20Regular = exports.Agents20Filled = exports.Agents20Color = exports.Agents16Regular = exports.Agents16Filled = exports.Agents16Color = exports.AddSubtractCircle48Regular = exports.AddSubtractCircle48Filled = exports.AddSubtractCircle28Regular = exports.AddSubtractCircle28Filled = exports.AddSubtractCircle24Regular = exports.AddSubtractCircle24Filled = exports.AddSubtractCircle20Regular = exports.AddSubtractCircle20Filled = exports.AddSubtractCircle16Regular = exports.AddSubtractCircle16Filled = exports.AddStarburst48Regular = exports.AddStarburst48Filled = exports.AddStarburst48Color = exports.AddStarburst32Regular = exports.AddStarburst32Filled = exports.AddStarburst32Color = exports.AddStarburst28Regular = exports.AddStarburst28Filled = exports.AddStarburst28Color = exports.AddStarburst24Regular = exports.AddStarburst24Filled = void 0;
          exports.AlertBadge20Color = exports.AlertBadge16Regular = exports.AlertBadge16Filled = exports.AlertBadge16Color = exports.Alert48Regular = exports.Alert48Filled = exports.Alert48Color = exports.Alert32Regular = exports.Alert32Light = exports.Alert32Filled = exports.Alert32Color = exports.Alert28Regular = exports.Alert28Filled = exports.Alert28Color = exports.Alert24Regular = exports.Alert24Filled = exports.Alert24Color = exports.Alert20Regular = exports.Alert20Filled = exports.Alert20Color = exports.Alert16Regular = exports.Alert16Filled = exports.Alert16Color = exports.Alert12Regular = exports.Alert12Filled = exports.AlbumAdd24Regular = exports.AlbumAdd24Filled = exports.AlbumAdd20Regular = exports.AlbumAdd20Filled = exports.Album24Regular = exports.Album24Filled = exports.Album20Regular = exports.Album20Filled = exports.AirplaneTakeOff24Regular = exports.AirplaneTakeOff24Filled = exports.AirplaneTakeOff20Regular = exports.AirplaneTakeOff20Filled = exports.AirplaneTakeOff16Regular = exports.AirplaneTakeOff16Filled = exports.AirplaneLanding24Regular = exports.AirplaneLanding24Filled = exports.AirplaneLanding20Regular = exports.AirplaneLanding20Filled = exports.AirplaneLanding16Regular = exports.AirplaneLanding16Filled = exports.Airplane48Regular = exports.Airplane48Filled = exports.Airplane32Regular = exports.Airplane32Filled = exports.Airplane28Regular = void 0;
          exports.AlignBottom48Filled = exports.AlignBottom32Regular = exports.AlignBottom32Filled = exports.AlignBottom28Regular = exports.AlignBottom28Filled = exports.AlignBottom24Regular = exports.AlignBottom24Filled = exports.AlignBottom20Regular = exports.AlignBottom20Filled = exports.AlignBottom16Regular = exports.AlignBottom16Filled = exports.AlertUrgent24Regular = exports.AlertUrgent24Filled = exports.AlertUrgent24Color = exports.AlertUrgent20Regular = exports.AlertUrgent20Filled = exports.AlertUrgent20Color = exports.AlertUrgent16Regular = exports.AlertUrgent16Filled = exports.AlertUrgent16Color = exports.AlertSnooze24Regular = exports.AlertSnooze24Filled = exports.AlertSnooze20Regular = exports.AlertSnooze20Filled = exports.AlertSnooze16Regular = exports.AlertSnooze16Filled = exports.AlertSnooze12Regular = exports.AlertSnooze12Filled = exports.AlertOn24Regular = exports.AlertOn24Filled = exports.AlertOn20Regular = exports.AlertOn20Filled = exports.AlertOn16Regular = exports.AlertOn16Filled = exports.AlertOff28Regular = exports.AlertOff28Filled = exports.AlertOff24Regular = exports.AlertOff24Filled = exports.AlertOff20Regular = exports.AlertOff20Filled = exports.AlertOff16Regular = exports.AlertOff16Filled = exports.AlertBadge32Regular = exports.AlertBadge32Filled = exports.AlertBadge32Color = exports.AlertBadge24Regular = exports.AlertBadge24Filled = exports.AlertBadge24Color = exports.AlertBadge20Regular = exports.AlertBadge20Filled = void 0;
          exports.AlignRight16Filled = exports.AlignLeft48Regular = exports.AlignLeft48Filled = exports.AlignLeft32Regular = exports.AlignLeft32Filled = exports.AlignLeft28Regular = exports.AlignLeft28Filled = exports.AlignLeft24Regular = exports.AlignLeft24Filled = exports.AlignLeft20Regular = exports.AlignLeft20Filled = exports.AlignLeft16Regular = exports.AlignLeft16Filled = exports.AlignEndVertical20Regular = exports.AlignEndVertical20Filled = exports.AlignEndHorizontal20Regular = exports.AlignEndHorizontal20Filled = exports.AlignDistributeTop16Regular = exports.AlignDistributeTop16Filled = exports.AlignDistributeRight16Regular = exports.AlignDistributeRight16Filled = exports.AlignDistributeLeft16Regular = exports.AlignDistributeLeft16Filled = exports.AlignDistributeBottom16Regular = exports.AlignDistributeBottom16Filled = exports.AlignCenterVertical48Regular = exports.AlignCenterVertical48Filled = exports.AlignCenterVertical32Regular = exports.AlignCenterVertical32Filled = exports.AlignCenterVertical28Regular = exports.AlignCenterVertical28Filled = exports.AlignCenterVertical24Regular = exports.AlignCenterVertical24Filled = exports.AlignCenterVertical20Regular = exports.AlignCenterVertical20Filled = exports.AlignCenterVertical16Regular = exports.AlignCenterVertical16Filled = exports.AlignCenterHorizontal48Regular = exports.AlignCenterHorizontal48Filled = exports.AlignCenterHorizontal32Regular = exports.AlignCenterHorizontal32Filled = exports.AlignCenterHorizontal28Regular = exports.AlignCenterHorizontal28Filled = exports.AlignCenterHorizontal24Regular = exports.AlignCenterHorizontal24Filled = exports.AlignCenterHorizontal20Regular = exports.AlignCenterHorizontal20Filled = exports.AlignCenterHorizontal16Regular = exports.AlignCenterHorizontal16Filled = exports.AlignBottom48Regular = void 0;
          exports.AlignTop24Filled = exports.AlignTop20Regular = exports.AlignTop20Filled = exports.AlignTop16Regular = exports.AlignTop16Filled = exports.AlignStretchVertical20Regular = exports.AlignStretchVertical20Filled = exports.AlignStretchVertical16Regular = exports.AlignStretchVertical16Filled = exports.AlignStretchHorizontal20Regular = exports.AlignStretchHorizontal20Filled = exports.AlignStretchHorizontal16Regular = exports.AlignStretchHorizontal16Filled = exports.AlignStraighten24Regular = exports.AlignStraighten24Filled = exports.AlignStraighten20Regular = exports.AlignStraighten20Filled = exports.AlignStartVertical20Regular = exports.AlignStartVertical20Filled = exports.AlignStartHorizontal20Regular = exports.AlignStartHorizontal20Filled = exports.AlignSpaceFitVertical20Regular = exports.AlignSpaceFitVertical20Filled = exports.AlignSpaceEvenlyVertical24Regular = exports.AlignSpaceEvenlyVertical24Filled = exports.AlignSpaceEvenlyVertical20Regular = exports.AlignSpaceEvenlyVertical20Filled = exports.AlignSpaceEvenlyHorizontal24Regular = exports.AlignSpaceEvenlyHorizontal24Filled = exports.AlignSpaceEvenlyHorizontal20Regular = exports.AlignSpaceEvenlyHorizontal20Filled = exports.AlignSpaceBetweenVertical20Regular = exports.AlignSpaceBetweenVertical20Filled = exports.AlignSpaceBetweenHorizontal20Regular = exports.AlignSpaceBetweenHorizontal20Filled = exports.AlignSpaceAroundVertical20Regular = exports.AlignSpaceAroundVertical20Filled = exports.AlignSpaceAroundHorizontal20Regular = exports.AlignSpaceAroundHorizontal20Filled = exports.AlignRight48Regular = exports.AlignRight48Filled = exports.AlignRight32Regular = exports.AlignRight32Filled = exports.AlignRight28Regular = exports.AlignRight28Filled = exports.AlignRight24Regular = exports.AlignRight24Filled = exports.AlignRight20Regular = exports.AlignRight20Filled = exports.AlignRight16Regular = void 0;
          exports.AnimalRabbitOff20Filled = exports.AnimalRabbit32Regular = exports.AnimalRabbit32Filled = exports.AnimalRabbit28Regular = exports.AnimalRabbit28Filled = exports.AnimalRabbit24Regular = exports.AnimalRabbit24Filled = exports.AnimalRabbit20Regular = exports.AnimalRabbit20Filled = exports.AnimalRabbit16Regular = exports.AnimalRabbit16Filled = exports.AnimalPawPrint48Regular = exports.AnimalPawPrint48Filled = exports.AnimalPawPrint48Color = exports.AnimalPawPrint32Regular = exports.AnimalPawPrint32Filled = exports.AnimalPawPrint32Color = exports.AnimalPawPrint28Regular = exports.AnimalPawPrint28Filled = exports.AnimalPawPrint28Color = exports.AnimalPawPrint24Regular = exports.AnimalPawPrint24Filled = exports.AnimalPawPrint24Color = exports.AnimalPawPrint20Regular = exports.AnimalPawPrint20Filled = exports.AnimalPawPrint20Color = exports.AnimalPawPrint16Regular = exports.AnimalPawPrint16Filled = exports.AnimalPawPrint16Color = exports.AnimalDog24Regular = exports.AnimalDog24Filled = exports.AnimalDog20Regular = exports.AnimalDog20Filled = exports.AnimalDog16Regular = exports.AnimalDog16Filled = exports.AnimalCat28Regular = exports.AnimalCat28Filled = exports.AnimalCat24Regular = exports.AnimalCat24Filled = exports.AnimalCat20Regular = exports.AnimalCat20Filled = exports.AnimalCat16Regular = exports.AnimalCat16Filled = exports.AlignTop48Regular = exports.AlignTop48Filled = exports.AlignTop32Regular = exports.AlignTop32Filled = exports.AlignTop28Regular = exports.AlignTop28Filled = exports.AlignTop24Regular = void 0;
          exports.ApprovalsApp24Color = exports.ApprovalsApp20Regular = exports.ApprovalsApp20Filled = exports.ApprovalsApp20Color = exports.ApprovalsApp16Regular = exports.ApprovalsApp16Filled = exports.ApprovalsApp16Color = exports.AppTitle24Regular = exports.AppTitle24Filled = exports.AppTitle20Regular = exports.AppTitle20Filled = exports.AppStore24Regular = exports.AppStore24Filled = exports.AppRecent24Regular = exports.AppRecent24Filled = exports.AppRecent20Regular = exports.AppRecent20Filled = exports.AppGeneric48Regular = exports.AppGeneric48Filled = exports.AppGeneric32Regular = exports.AppGeneric32Light = exports.AppGeneric32Filled = exports.AppGeneric24Regular = exports.AppGeneric24Filled = exports.AppGeneric20Regular = exports.AppGeneric20Filled = exports.AppFolder48Regular = exports.AppFolder48Filled = exports.AppFolder32Regular = exports.AppFolder32Light = exports.AppFolder32Filled = exports.AppFolder28Regular = exports.AppFolder28Filled = exports.AppFolder24Regular = exports.AppFolder24Filled = exports.AppFolder20Regular = exports.AppFolder20Filled = exports.AppFolder16Regular = exports.AppFolder16Filled = exports.AnimalTurtle28Regular = exports.AnimalTurtle28Filled = exports.AnimalTurtle24Regular = exports.AnimalTurtle24Filled = exports.AnimalTurtle20Regular = exports.AnimalTurtle20Filled = exports.AnimalTurtle16Regular = exports.AnimalTurtle16Filled = exports.AnimalRabbitOff32Regular = exports.AnimalRabbitOff32Filled = exports.AnimalRabbitOff20Regular = void 0;
          exports.AppsAddInOff32Regular = exports.AppsAddInOff32Filled = exports.AppsAddInOff28Regular = exports.AppsAddInOff28Filled = exports.AppsAddInOff24Regular = exports.AppsAddInOff24Filled = exports.AppsAddInOff20Regular = exports.AppsAddInOff20Filled = exports.AppsAddInOff16Regular = exports.AppsAddInOff16Filled = exports.AppsAddIn48Regular = exports.AppsAddIn48Filled = exports.AppsAddIn32Regular = exports.AppsAddIn32Filled = exports.AppsAddIn28Regular = exports.AppsAddIn28Filled = exports.AppsAddIn24Regular = exports.AppsAddIn24Filled = exports.AppsAddIn20Regular = exports.AppsAddIn20Filled = exports.AppsAddIn16Regular = exports.AppsAddIn16Filled = exports.Apps48Regular = exports.Apps48Filled = exports.Apps48Color = exports.Apps32Regular = exports.Apps32Filled = exports.Apps32Color = exports.Apps28Regular = exports.Apps28Filled = exports.Apps28Color = exports.Apps24Regular = exports.Apps24Filled = exports.Apps24Color = exports.Apps20Regular = exports.Apps20Filled = exports.Apps20Color = exports.Apps16Regular = exports.Apps16Filled = exports.Apps16Color = exports.ApprovalsApp48Regular = exports.ApprovalsApp48Filled = exports.ApprovalsApp32Regular = exports.ApprovalsApp32Filled = exports.ApprovalsApp32Color = exports.ApprovalsApp28Regular = exports.ApprovalsApp28Filled = exports.ApprovalsApp28Color = exports.ApprovalsApp24Regular = exports.ApprovalsApp24Filled = void 0;
          exports.ArchiveArrowBack32Filled = exports.ArchiveArrowBack28Regular = exports.ArchiveArrowBack28Filled = exports.ArchiveArrowBack24Regular = exports.ArchiveArrowBack24Filled = exports.ArchiveArrowBack20Regular = exports.ArchiveArrowBack20Filled = exports.ArchiveArrowBack16Regular = exports.ArchiveArrowBack16Filled = exports.Archive48Regular = exports.Archive48Filled = exports.Archive32Regular = exports.Archive32Light = exports.Archive32Filled = exports.Archive28Regular = exports.Archive28Filled = exports.Archive24Regular = exports.Archive24Filled = exports.Archive20Regular = exports.Archive20Filled = exports.Archive16Regular = exports.Archive16Filled = exports.AppsShield20Regular = exports.AppsShield20Filled = exports.AppsShield16Regular = exports.AppsShield16Filled = exports.AppsSettings20Regular = exports.AppsSettings20Filled = exports.AppsSettings16Regular = exports.AppsSettings16Filled = exports.AppsListDetail32Regular = exports.AppsListDetail32Filled = exports.AppsListDetail32Color = exports.AppsListDetail24Regular = exports.AppsListDetail24Filled = exports.AppsListDetail24Color = exports.AppsListDetail20Regular = exports.AppsListDetail20Filled = exports.AppsListDetail20Color = exports.AppsList32Regular = exports.AppsList32Filled = exports.AppsList32Color = exports.AppsList24Regular = exports.AppsList24Filled = exports.AppsList24Color = exports.AppsList20Regular = exports.AppsList20Filled = exports.AppsList20Color = exports.AppsAddInOff48Regular = exports.AppsAddInOff48Filled = void 0;
          exports.ArrowAutofitWidthDotted20Regular = exports.ArrowAutofitWidthDotted20Filled = exports.ArrowAutofitWidth24Regular = exports.ArrowAutofitWidth24Filled = exports.ArrowAutofitWidth20Regular = exports.ArrowAutofitWidth20Filled = exports.ArrowAutofitUp24Regular = exports.ArrowAutofitUp24Filled = exports.ArrowAutofitUp20Regular = exports.ArrowAutofitUp20Filled = exports.ArrowAutofitHeightIn24Regular = exports.ArrowAutofitHeightIn24Filled = exports.ArrowAutofitHeightIn20Regular = exports.ArrowAutofitHeightIn20Filled = exports.ArrowAutofitHeightDotted24Regular = exports.ArrowAutofitHeightDotted24Filled = exports.ArrowAutofitHeightDotted20Regular = exports.ArrowAutofitHeightDotted20Filled = exports.ArrowAutofitHeight24Regular = exports.ArrowAutofitHeight24Filled = exports.ArrowAutofitHeight20Regular = exports.ArrowAutofitHeight20Filled = exports.ArrowAutofitDown24Regular = exports.ArrowAutofitDown24Filled = exports.ArrowAutofitDown20Regular = exports.ArrowAutofitDown20Filled = exports.ArrowAutofitContent24Regular = exports.ArrowAutofitContent24Filled = exports.ArrowAutofitContent20Regular = exports.ArrowAutofitContent20Filled = exports.ArchiveSettings32Regular = exports.ArchiveSettings32Light = exports.ArchiveSettings32Filled = exports.ArchiveSettings28Regular = exports.ArchiveSettings28Filled = exports.ArchiveSettings24Regular = exports.ArchiveSettings24Filled = exports.ArchiveSettings20Regular = exports.ArchiveSettings20Filled = exports.ArchiveSettings16Regular = exports.ArchiveSettings16Filled = exports.ArchiveMultiple24Regular = exports.ArchiveMultiple24Filled = exports.ArchiveMultiple20Regular = exports.ArchiveMultiple20Filled = exports.ArchiveMultiple16Regular = exports.ArchiveMultiple16Filled = exports.ArchiveArrowBack48Regular = exports.ArchiveArrowBack48Filled = exports.ArchiveArrowBack32Regular = void 0;
          exports.ArrowCircleDown48Regular = exports.ArrowCircleDown48Filled = exports.ArrowCircleDown32Regular = exports.ArrowCircleDown32Filled = exports.ArrowCircleDown28Regular = exports.ArrowCircleDown28Filled = exports.ArrowCircleDown24Regular = exports.ArrowCircleDown24Filled = exports.ArrowCircleDown20Regular = exports.ArrowCircleDown20Filled = exports.ArrowCircleDown16Regular = exports.ArrowCircleDown16Filled = exports.ArrowCircleDown12Regular = exports.ArrowCircleDown12Filled = exports.ArrowBounce48Regular = exports.ArrowBounce48Filled = exports.ArrowBounce28Regular = exports.ArrowBounce28Filled = exports.ArrowBounce24Regular = exports.ArrowBounce24Filled = exports.ArrowBounce20Regular = exports.ArrowBounce20Filled = exports.ArrowBounce16Regular = exports.ArrowBounce16Filled = exports.ArrowBounce12Regular = exports.ArrowBounce12Filled = exports.ArrowBidirectionalUpDown24Regular = exports.ArrowBidirectionalUpDown24Filled = exports.ArrowBidirectionalUpDown20Regular = exports.ArrowBidirectionalUpDown20Filled = exports.ArrowBidirectionalUpDown16Regular = exports.ArrowBidirectionalUpDown16Filled = exports.ArrowBidirectionalUpDown12Regular = exports.ArrowBidirectionalUpDown12Filled = exports.ArrowBidirectionalLeftRight28Regular = exports.ArrowBidirectionalLeftRight28Filled = exports.ArrowBidirectionalLeftRight24Regular = exports.ArrowBidirectionalLeftRight24Filled = exports.ArrowBidirectionalLeftRight20Regular = exports.ArrowBidirectionalLeftRight20Filled = exports.ArrowBidirectionalLeftRight16Regular = exports.ArrowBidirectionalLeftRight16Filled = exports.ArrowBetweenUp20Regular = exports.ArrowBetweenUp20Filled = exports.ArrowBetweenDown24Regular = exports.ArrowBetweenDown24Filled = exports.ArrowBetweenDown20Regular = exports.ArrowBetweenDown20Filled = exports.ArrowAutofitWidthDotted24Regular = exports.ArrowAutofitWidthDotted24Filled = void 0;
          exports.ArrowCircleUp16Regular = exports.ArrowCircleUp16Filled = exports.ArrowCircleUp12Regular = exports.ArrowCircleUp12Filled = exports.ArrowCircleRight48Regular = exports.ArrowCircleRight48Filled = exports.ArrowCircleRight32Regular = exports.ArrowCircleRight32Filled = exports.ArrowCircleRight28Regular = exports.ArrowCircleRight28Filled = exports.ArrowCircleRight24Regular = exports.ArrowCircleRight24Filled = exports.ArrowCircleRight20Regular = exports.ArrowCircleRight20Filled = exports.ArrowCircleRight16Regular = exports.ArrowCircleRight16Filled = exports.ArrowCircleRight12Regular = exports.ArrowCircleRight12Filled = exports.ArrowCircleLeft48Regular = exports.ArrowCircleLeft48Filled = exports.ArrowCircleLeft32Regular = exports.ArrowCircleLeft32Filled = exports.ArrowCircleLeft28Regular = exports.ArrowCircleLeft28Filled = exports.ArrowCircleLeft24Regular = exports.ArrowCircleLeft24Filled = exports.ArrowCircleLeft20Regular = exports.ArrowCircleLeft20Filled = exports.ArrowCircleLeft16Regular = exports.ArrowCircleLeft16Filled = exports.ArrowCircleLeft12Regular = exports.ArrowCircleLeft12Filled = exports.ArrowCircleDownUp20Regular = exports.ArrowCircleDownUp20Filled = exports.ArrowCircleDownSplit24Regular = exports.ArrowCircleDownSplit24Filled = exports.ArrowCircleDownSplit20Regular = exports.ArrowCircleDownSplit20Filled = exports.ArrowCircleDownRight24Regular = exports.ArrowCircleDownRight24Filled = exports.ArrowCircleDownRight20Regular = exports.ArrowCircleDownRight20Filled = exports.ArrowCircleDownRight16Regular = exports.ArrowCircleDownRight16Filled = exports.ArrowCircleDownRight12Regular = exports.ArrowCircleDownRight12Filled = exports.ArrowCircleDownDouble24Regular = exports.ArrowCircleDownDouble24Filled = exports.ArrowCircleDownDouble20Regular = exports.ArrowCircleDownDouble20Filled = void 0;
          exports.ArrowClockwiseDashes24Color = exports.ArrowClockwiseDashes20Regular = exports.ArrowClockwiseDashes20Filled = exports.ArrowClockwiseDashes20Color = exports.ArrowClockwiseDashes16Regular = exports.ArrowClockwiseDashes16Filled = exports.ArrowClockwiseDashes16Color = exports.ArrowClockwiseDashes12Regular = exports.ArrowClockwiseDashes12Filled = exports.ArrowClockwise48Regular = exports.ArrowClockwise48Filled = exports.ArrowClockwise32Regular = exports.ArrowClockwise32Light = exports.ArrowClockwise32Filled = exports.ArrowClockwise28Regular = exports.ArrowClockwise28Filled = exports.ArrowClockwise24Regular = exports.ArrowClockwise24Filled = exports.ArrowClockwise20Regular = exports.ArrowClockwise20Filled = exports.ArrowClockwise16Regular = exports.ArrowClockwise16Filled = exports.ArrowClockwise12Regular = exports.ArrowClockwise12Filled = exports.ArrowCircleUpSparkle24Regular = exports.ArrowCircleUpSparkle24Filled = exports.ArrowCircleUpSparkle20Regular = exports.ArrowCircleUpSparkle20Filled = exports.ArrowCircleUpRight24Regular = exports.ArrowCircleUpRight24Filled = exports.ArrowCircleUpRight20Regular = exports.ArrowCircleUpRight20Filled = exports.ArrowCircleUpRight16Regular = exports.ArrowCircleUpRight16Filled = exports.ArrowCircleUpLeft24Regular = exports.ArrowCircleUpLeft24Filled = exports.ArrowCircleUpLeft20Regular = exports.ArrowCircleUpLeft20Filled = exports.ArrowCircleUpLeft16Regular = exports.ArrowCircleUpLeft16Filled = exports.ArrowCircleUp48Regular = exports.ArrowCircleUp48Filled = exports.ArrowCircleUp32Regular = exports.ArrowCircleUp32Filled = exports.ArrowCircleUp28Regular = exports.ArrowCircleUp28Filled = exports.ArrowCircleUp24Regular = exports.ArrowCircleUp24Filled = exports.ArrowCircleUp20Regular = exports.ArrowCircleUp20Filled = void 0;
          exports.ArrowCounterclockwiseDashes24Filled = exports.ArrowCounterclockwiseDashes20Regular = exports.ArrowCounterclockwiseDashes20Filled = exports.ArrowCounterclockwise48Regular = exports.ArrowCounterclockwise48Filled = exports.ArrowCounterclockwise32Regular = exports.ArrowCounterclockwise32Filled = exports.ArrowCounterclockwise28Regular = exports.ArrowCounterclockwise28Filled = exports.ArrowCounterclockwise24Regular = exports.ArrowCounterclockwise24Filled = exports.ArrowCounterclockwise20Regular = exports.ArrowCounterclockwise20Filled = exports.ArrowCounterclockwise16Regular = exports.ArrowCounterclockwise16Filled = exports.ArrowCounterclockwise12Regular = exports.ArrowCounterclockwise12Filled = exports.ArrowCollapseAll24Regular = exports.ArrowCollapseAll24Filled = exports.ArrowCollapseAll20Regular = exports.ArrowCollapseAll20Filled = exports.ArrowCollapseAll16Regular = exports.ArrowCollapseAll16Filled = exports.ArrowClockwiseDashesSettings48Regular = exports.ArrowClockwiseDashesSettings48Filled = exports.ArrowClockwiseDashesSettings48Color = exports.ArrowClockwiseDashesSettings32Regular = exports.ArrowClockwiseDashesSettings32Filled = exports.ArrowClockwiseDashesSettings32Color = exports.ArrowClockwiseDashesSettings28Regular = exports.ArrowClockwiseDashesSettings28Filled = exports.ArrowClockwiseDashesSettings28Color = exports.ArrowClockwiseDashesSettings24Regular = exports.ArrowClockwiseDashesSettings24Filled = exports.ArrowClockwiseDashesSettings24Color = exports.ArrowClockwiseDashesSettings20Regular = exports.ArrowClockwiseDashesSettings20Filled = exports.ArrowClockwiseDashesSettings20Color = exports.ArrowClockwiseDashesSettings16Regular = exports.ArrowClockwiseDashesSettings16Filled = exports.ArrowClockwiseDashesSettings16Color = exports.ArrowClockwiseDashes48Regular = exports.ArrowClockwiseDashes48Filled = exports.ArrowClockwiseDashes32Regular = exports.ArrowClockwiseDashes32Filled = exports.ArrowClockwiseDashes32Color = exports.ArrowClockwiseDashes28Regular = exports.ArrowClockwiseDashes28Filled = exports.ArrowClockwiseDashes24Regular = exports.ArrowClockwiseDashes24Filled = void 0;
          exports.ArrowDownLeft16Regular = exports.ArrowDownLeft16Filled = exports.ArrowDownLeft12Regular = exports.ArrowDownLeft12Filled = exports.ArrowDownExclamation24Regular = exports.ArrowDownExclamation24Filled = exports.ArrowDownExclamation20Regular = exports.ArrowDownExclamation20Filled = exports.ArrowDownExclamation16Regular = exports.ArrowDownExclamation16Filled = exports.ArrowDown48Regular = exports.ArrowDown48Filled = exports.ArrowDown32Regular = exports.ArrowDown32Light = exports.ArrowDown32Filled = exports.ArrowDown28Regular = exports.ArrowDown28Filled = exports.ArrowDown24Regular = exports.ArrowDown24Filled = exports.ArrowDown20Regular = exports.ArrowDown20Filled = exports.ArrowDown16Regular = exports.ArrowDown16Filled = exports.ArrowDown12Regular = exports.ArrowDown12Filled = exports.ArrowCurveUpRight20Regular = exports.ArrowCurveUpRight20Filled = exports.ArrowCurveUpLeft20Regular = exports.ArrowCurveUpLeft20Filled = exports.ArrowCurveDownRight20Regular = exports.ArrowCurveDownRight20Filled = exports.ArrowCurveDownLeft28Regular = exports.ArrowCurveDownLeft28Filled = exports.ArrowCurveDownLeft24Regular = exports.ArrowCurveDownLeft24Filled = exports.ArrowCurveDownLeft20Regular = exports.ArrowCurveDownLeft20Filled = exports.ArrowCurveDownLeft16Regular = exports.ArrowCurveDownLeft16Filled = exports.ArrowCounterclockwiseInfo48Regular = exports.ArrowCounterclockwiseInfo48Filled = exports.ArrowCounterclockwiseInfo32Regular = exports.ArrowCounterclockwiseInfo32Filled = exports.ArrowCounterclockwiseInfo28Regular = exports.ArrowCounterclockwiseInfo28Filled = exports.ArrowCounterclockwiseInfo24Regular = exports.ArrowCounterclockwiseInfo24Filled = exports.ArrowCounterclockwiseInfo20Regular = exports.ArrowCounterclockwiseInfo20Filled = exports.ArrowCounterclockwiseDashes24Regular = void 0;
          exports.ArrowEnter20Filled = exports.ArrowEnter16Regular = exports.ArrowEnter16Filled = exports.ArrowEject20Regular = exports.ArrowEject20Filled = exports.ArrowDownloadOff48Regular = exports.ArrowDownloadOff48Filled = exports.ArrowDownloadOff32Regular = exports.ArrowDownloadOff32Filled = exports.ArrowDownloadOff28Regular = exports.ArrowDownloadOff28Filled = exports.ArrowDownloadOff24Regular = exports.ArrowDownloadOff24Filled = exports.ArrowDownloadOff20Regular = exports.ArrowDownloadOff20Filled = exports.ArrowDownloadOff16Regular = exports.ArrowDownloadOff16Filled = exports.ArrowDownload48Regular = exports.ArrowDownload48Filled = exports.ArrowDownload32Regular = exports.ArrowDownload32Light = exports.ArrowDownload32Filled = exports.ArrowDownload28Regular = exports.ArrowDownload28Filled = exports.ArrowDownload24Regular = exports.ArrowDownload24Filled = exports.ArrowDownload20Regular = exports.ArrowDownload20Filled = exports.ArrowDownload16Regular = exports.ArrowDownload16Filled = exports.ArrowDownRight48Regular = exports.ArrowDownRight48Filled = exports.ArrowDownRight32Regular = exports.ArrowDownRight32Filled = exports.ArrowDownRight24Regular = exports.ArrowDownRight24Filled = exports.ArrowDownRight20Regular = exports.ArrowDownRight20Filled = exports.ArrowDownRight16Regular = exports.ArrowDownRight16Filled = exports.ArrowDownLeft48Regular = exports.ArrowDownLeft48Filled = exports.ArrowDownLeft32Regular = exports.ArrowDownLeft32Filled = exports.ArrowDownLeft28Regular = exports.ArrowDownLeft28Filled = exports.ArrowDownLeft24Regular = exports.ArrowDownLeft24Filled = exports.ArrowDownLeft20Regular = exports.ArrowDownLeft20Filled = void 0;
          exports.ArrowExportRtl16Filled = exports.ArrowExportLtr24Regular = exports.ArrowExportLtr24Filled = exports.ArrowExportLtr20Regular = exports.ArrowExportLtr20Filled = exports.ArrowExportLtr16Regular = exports.ArrowExportLtr16Filled = exports.ArrowExport24Regular = exports.ArrowExport24Filled = exports.ArrowExport20Regular = exports.ArrowExport20Filled = exports.ArrowExport16Regular = exports.ArrowExport16Filled = exports.ArrowExpandAll24Regular = exports.ArrowExpandAll24Filled = exports.ArrowExpandAll20Regular = exports.ArrowExpandAll20Filled = exports.ArrowExpandAll16Regular = exports.ArrowExpandAll16Filled = exports.ArrowExpand28Regular = exports.ArrowExpand28Filled = exports.ArrowExpand24Regular = exports.ArrowExpand24Filled = exports.ArrowExpand20Regular = exports.ArrowExpand20Filled = exports.ArrowExpand16Regular = exports.ArrowExpand16Filled = exports.ArrowExit48Regular = exports.ArrowExit48Filled = exports.ArrowExit32Regular = exports.ArrowExit32Filled = exports.ArrowExit28Regular = exports.ArrowExit28Filled = exports.ArrowExit24Regular = exports.ArrowExit24Filled = exports.ArrowExit20Regular = exports.ArrowExit20Filled = exports.ArrowExit16Regular = exports.ArrowExit16Filled = exports.ArrowExit12Regular = exports.ArrowExit12Filled = exports.ArrowEnterUp24Regular = exports.ArrowEnterUp24Filled = exports.ArrowEnterUp20Regular = exports.ArrowEnterUp20Filled = exports.ArrowEnterLeft24Regular = exports.ArrowEnterLeft24Filled = exports.ArrowEnterLeft20Regular = exports.ArrowEnterLeft20Filled = exports.ArrowEnter20Regular = void 0;
          exports.ArrowForward16Filled = exports.ArrowFlowUpRightRectangleMultiple24Regular = exports.ArrowFlowUpRightRectangleMultiple24Filled = exports.ArrowFlowUpRightRectangleMultiple20Regular = exports.ArrowFlowUpRightRectangleMultiple20Filled = exports.ArrowFlowUpRight32Regular = exports.ArrowFlowUpRight32Filled = exports.ArrowFlowUpRight24Regular = exports.ArrowFlowUpRight24Filled = exports.ArrowFlowUpRight20Regular = exports.ArrowFlowUpRight20Filled = exports.ArrowFlowUpRight16Regular = exports.ArrowFlowUpRight16Filled = exports.ArrowFlowDiagonalUpRight48Regular = exports.ArrowFlowDiagonalUpRight48Filled = exports.ArrowFlowDiagonalUpRight32Regular = exports.ArrowFlowDiagonalUpRight32Filled = exports.ArrowFlowDiagonalUpRight28Regular = exports.ArrowFlowDiagonalUpRight28Filled = exports.ArrowFlowDiagonalUpRight24Regular = exports.ArrowFlowDiagonalUpRight24Filled = exports.ArrowFlowDiagonalUpRight20Regular = exports.ArrowFlowDiagonalUpRight20Filled = exports.ArrowFlowDiagonalUpRight16Regular = exports.ArrowFlowDiagonalUpRight16Filled = exports.ArrowFlowDiagonalUpRight12Regular = exports.ArrowFlowDiagonalUpRight12Filled = exports.ArrowFitIn24Regular = exports.ArrowFitIn24Filled = exports.ArrowFitIn20Regular = exports.ArrowFitIn20Filled = exports.ArrowFitIn16Regular = exports.ArrowFitIn16Filled = exports.ArrowFit24Regular = exports.ArrowFit24Filled = exports.ArrowFit20Regular = exports.ArrowFit20Filled = exports.ArrowFit16Regular = exports.ArrowFit16Filled = exports.ArrowExportUp24Regular = exports.ArrowExportUp24Filled = exports.ArrowExportUp20Regular = exports.ArrowExportUp20Filled = exports.ArrowExportUp16Regular = exports.ArrowExportUp16Filled = exports.ArrowExportRtl24Regular = exports.ArrowExportRtl24Filled = exports.ArrowExportRtl20Regular = exports.ArrowExportRtl20Filled = exports.ArrowExportRtl16Regular = void 0;
          const createFluentIcon_1 = require("../utils/createFluentIcon");
          exports.AccessTime20Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTime20Filled', "20", ["M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.99 8.6A.5.5 0 0 1 6 8.4c.02-.07.03-.14.07-.24a2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"]));
          exports.AccessTime20Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTime20Regular', "20", ["M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"]));
          exports.AccessTime24Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTime24Filled', "24", ["M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0ZM7.5 8.74A2.3 2.3 0 0 1 9.25 8c1.15 0 1.9.8 2.15 1.66.26.85.1 1.9-.62 2.62a8.1 8.1 0 0 1-.79.67l-.04.03c-.28.22-.53.41-.75.63a2.3 2.3 0 0 0-.58.89h2.13a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.25.52-2.08 1.14-2.7.3-.3.62-.55.9-.76.28-.22.5-.4.68-.57.27-.27.37-.72.25-1.13-.12-.38-.37-.59-.72-.59s-.53.14-.64.25a.84.84 0 0 0-.15.23.75.75 0 0 1-1.43-.46l.04-.1.08-.17c.07-.14.18-.32.35-.5ZM13.25 8c.41 0 .75.34.75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5c0-.41.34-.75.75-.75Z"]));
          exports.AccessTime24Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('AccessTime24Regular', "24", ["M7.5 8.74A2.3 2.3 0 0 1 9.25 8c1.15 0 1.9.8 2.15 1.66.26.85.1 1.9-.62 2.62a8.1 8.1 0 0 1-.79.67l-.04.03c-.28.22-.53.41-.75.63a2.3 2.3 0 0 0-.58.89h2.13a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.25.52-2.08 1.14-2.7.3-.3.62-.55.9-.76.28-.22.5-.4.68-.57.27-.27.37-.72.25-1.13-.12-.38-.37-.59-.72-.59s-.53.14-.64.25a.84.84 0 0 0-.15.23.75.75 0 0 1-1.43-.46l.04-.1.08-.17c.07-.14.18-.32.35-.5ZM13.25 8c.41 0 .75.34.75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5c0-.41.34-.75.75-.75ZM22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"]));
          exports.Accessibility16Filled = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility16Filled', "16", ["M8 4.5A1.75 1.75 0 1 0 8 1a1.75 1.75 0 0 0 0 3.5ZM4.2 3.12a1.6 1.6 0 0 0-2.08.87c-.33.81.06 1.74.87 2.07l1.7.68a.5.5 0 0 1 .31.47v1.92a.5.5 0 0 1-.06.23l-1.75 3.3a1.6 1.6 0 1 0 2.8 1.5l1.79-3.35c.1-.18.35-.18.44 0L10 14.16a1.6 1.6 0 1 0 2.81-1.5l-1.75-3.3a.5.5 0 0 1-.06-.23V7.2c0-.2.12-.4.31-.47l1.7-.68c.81-.33 1.2-1.26.87-2.07a1.6 1.6 0 0 0-2.08-.87l-.78.31c-.26.1-.44.3-.54.52a2.75 2.75 0 0 1-4.96 0c-.1-.22-.28-.42-.54-.52l-.78-.31Z"]));
          exports.Accessibility16Regular = ( /*#__PURE__*/createFluentIcon_1.createFluentIcon('Accessibility16Regular', "16", ["M6.75 3.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM8 1a2.25 2.25 0 0 0-2.19 2.77L4.2 3.12a1.6 1.6 0 0 0-2.08.87c-.33.81.06 1.74.87 2.07l2.01.8v2.4l-1.81 3.4a1.6 1.6 0 1 0 2.8 1.5L8 10.39l2 3.77a1.6 1.6 0 0 0 2.81-1.5L11 9.26v-2.4l2-.8c.82-.33 1.21-1.26.88-2.07a1.6 1.6 0 0 0-2.08-.87l-1.61.65A2.26 2.26 0 0 0 8 1ZM3.05 4.37a.6.6 0 0 1 .77-.33l3.43 1.39a2 2 0 0 0 1.5 0l3.43-1.39a.6.6 0 0 1 .77.33c.13.3-.02.64-.32.76l-2 .81a1 1 0 0 0-.63.93v2.38a1 1 0 0 0 .12.47l1.81 3.41a.6.6 0 0 1-1.04.56l-2-3.77a1 1 0 0 0-1.77 0l-2 3.77a.6.6 0 1 1-1.05-.56l1.81-3.4A1 1 0 0 0 6 9.24V6.87a1 1 0 0 0-.63-.93l-2-.8a.58.58 0 0 1-.32-.77Z"]));
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "import type { FluentIcon } from "../utils/createFluentIcon";
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
          import { createFluentFontIcon } from "../../utils/fonts/createFluentFontIcon";
          export const AccessTimeFilled = /*#__PURE__*/ createFluentFontIcon("AccessTimeFilled", "", 2, undefined);
          export const AccessTimeRegular = /*#__PURE__*/ createFluentFontIcon("AccessTimeRegular", "", 2, undefined);
          export const AccessibilityFilled = /*#__PURE__*/ createFluentFontIcon("AccessibilityFilled", "", 2, undefined);
          export const AccessibilityRegular = /*#__PURE__*/ createFluentFontIcon("AccessibilityRegular", "", 2, undefined);
          export const AccessibilityCheckmarkFilled = /*#__PURE__*/ createFluentFontIcon("AccessibilityCheckmarkFilled", "", 2, undefined);
          export const AccessibilityCheckmarkRegular = /*#__PURE__*/ createFluentFontIcon("AccessibilityCheckmarkRegular", "", 2, undefined);
          export const AccessibilityErrorFilled = /*#__PURE__*/ createFluentFontIcon("AccessibilityErrorFilled", "", 2, undefined);
          export const AccessibilityErrorRegular = /*#__PURE__*/ createFluentFontIcon("AccessibilityErrorRegular", "", 2, undefined);
          export const AccessibilityMoreFilled = /*#__PURE__*/ createFluentFontIcon("AccessibilityMoreFilled", "", 2, undefined);
          export const AccessibilityMoreRegular = /*#__PURE__*/ createFluentFontIcon("AccessibilityMoreRegular", "", 2, undefined);
          export const AccessibilityQuestionMarkFilled = /*#__PURE__*/ createFluentFontIcon("AccessibilityQuestionMarkFilled", "", 2, undefined);
          export const AccessibilityQuestionMarkRegular = /*#__PURE__*/ createFluentFontIcon("AccessibilityQuestionMarkRegular", "", 2, undefined);
          export const AddFilled = /*#__PURE__*/ createFluentFontIcon("AddFilled", "", 2, undefined);
          export const AddRegular = /*#__PURE__*/ createFluentFontIcon("AddRegular", "", 2, undefined);
          export const AddCircleFilled = /*#__PURE__*/ createFluentFontIcon("AddCircleFilled", "", 2, undefined);
          export const AddCircleRegular = /*#__PURE__*/ createFluentFontIcon("AddCircleRegular", "", 2, undefined);
          export const AddSquareFilled = /*#__PURE__*/ createFluentFontIcon("AddSquareFilled", "", 2, undefined);
          export const AddSquareRegular = /*#__PURE__*/ createFluentFontIcon("AddSquareRegular", "", 2, undefined);
          export const AddSquareMultipleFilled = /*#__PURE__*/ createFluentFontIcon("AddSquareMultipleFilled", "", 2, undefined);
          export const AddSquareMultipleRegular = /*#__PURE__*/ createFluentFontIcon("AddSquareMultipleRegular", "", 2, undefined);
          export const AddStarburstFilled = /*#__PURE__*/ createFluentFontIcon("AddStarburstFilled", "", 2, undefined);
          export const AddStarburstRegular = /*#__PURE__*/ createFluentFontIcon("AddStarburstRegular", "", 2, undefined);
          export const AddSubtractCircleFilled = /*#__PURE__*/ createFluentFontIcon("AddSubtractCircleFilled", "", 2, undefined);
          export const AddSubtractCircleRegular = /*#__PURE__*/ createFluentFontIcon("AddSubtractCircleRegular", "", 2, undefined);
          export const AgentsFilled = /*#__PURE__*/ createFluentFontIcon("AgentsFilled", "", 2, undefined);
          export const AgentsRegular = /*#__PURE__*/ createFluentFontIcon("AgentsRegular", "", 2, undefined);
          export const AgentsAddFilled = /*#__PURE__*/ createFluentFontIcon("AgentsAddFilled", "", 2, undefined);
          export const AgentsAddRegular = /*#__PURE__*/ createFluentFontIcon("AgentsAddRegular", "", 2, undefined);
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "/// <reference types="react" />
          export declare const AccessTimeFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessTimeRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityCheckmarkFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityCheckmarkRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityErrorFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityErrorRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityMoreFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityMoreRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
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
          ""use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          exports.AlertUrgentRegular = exports.AlertUrgentFilled = exports.AlertSnoozeRegular = exports.AlertSnoozeFilled = exports.AlertOnRegular = exports.AlertOnFilled = exports.AlertOffRegular = exports.AlertOffFilled = exports.AlertBadgeRegular = exports.AlertBadgeFilled = exports.AlertRegular = exports.AlertFilled = exports.AlbumAddRegular = exports.AlbumAddFilled = exports.AlbumRegular = exports.AlbumFilled = exports.AirplaneTakeOffRegular = exports.AirplaneTakeOffFilled = exports.AirplaneLandingRegular = exports.AirplaneLandingFilled = exports.AirplaneRegular = exports.AirplaneFilled = exports.AgentsAddRegular = exports.AgentsAddFilled = exports.AgentsRegular = exports.AgentsFilled = exports.AddSubtractCircleRegular = exports.AddSubtractCircleFilled = exports.AddStarburstRegular = exports.AddStarburstFilled = exports.AddSquareMultipleRegular = exports.AddSquareMultipleFilled = exports.AddSquareRegular = exports.AddSquareFilled = exports.AddCircleRegular = exports.AddCircleFilled = exports.AddRegular = exports.AddFilled = exports.AccessibilityQuestionMarkRegular = exports.AccessibilityQuestionMarkFilled = exports.AccessibilityMoreRegular = exports.AccessibilityMoreFilled = exports.AccessibilityErrorRegular = exports.AccessibilityErrorFilled = exports.AccessibilityCheckmarkRegular = exports.AccessibilityCheckmarkFilled = exports.AccessibilityRegular = exports.AccessibilityFilled = exports.AccessTimeRegular = exports.AccessTimeFilled = void 0;
          exports.AnimalRabbitOffRegular = exports.AnimalRabbitOffFilled = exports.AnimalRabbitRegular = exports.AnimalRabbitFilled = exports.AnimalPawPrintRegular = exports.AnimalPawPrintFilled = exports.AnimalDogRegular = exports.AnimalDogFilled = exports.AnimalCatRegular = exports.AnimalCatFilled = exports.AlignTopRegular = exports.AlignTopFilled = exports.AlignStretchVerticalRegular = exports.AlignStretchVerticalFilled = exports.AlignStretchHorizontalRegular = exports.AlignStretchHorizontalFilled = exports.AlignStraightenRegular = exports.AlignStraightenFilled = exports.AlignStartVerticalRegular = exports.AlignStartVerticalFilled = exports.AlignStartHorizontalRegular = exports.AlignStartHorizontalFilled = exports.AlignSpaceFitVerticalRegular = exports.AlignSpaceFitVerticalFilled = exports.AlignSpaceEvenlyVerticalRegular = exports.AlignSpaceEvenlyVerticalFilled = exports.AlignSpaceEvenlyHorizontalRegular = exports.AlignSpaceEvenlyHorizontalFilled = exports.AlignSpaceBetweenVerticalRegular = exports.AlignSpaceBetweenVerticalFilled = exports.AlignSpaceBetweenHorizontalRegular = exports.AlignSpaceBetweenHorizontalFilled = exports.AlignSpaceAroundVerticalRegular = exports.AlignSpaceAroundVerticalFilled = exports.AlignSpaceAroundHorizontalRegular = exports.AlignSpaceAroundHorizontalFilled = exports.AlignRightRegular = exports.AlignRightFilled = exports.AlignLeftRegular = exports.AlignLeftFilled = exports.AlignEndVerticalRegular = exports.AlignEndVerticalFilled = exports.AlignEndHorizontalRegular = exports.AlignEndHorizontalFilled = exports.AlignCenterVerticalRegular = exports.AlignCenterVerticalFilled = exports.AlignCenterHorizontalRegular = exports.AlignCenterHorizontalFilled = exports.AlignBottomRegular = exports.AlignBottomFilled = void 0;
          exports.ArrowAutofitWidthDottedRegular = exports.ArrowAutofitWidthDottedFilled = exports.ArrowAutofitWidthRegular = exports.ArrowAutofitWidthFilled = exports.ArrowAutofitUpRegular = exports.ArrowAutofitUpFilled = exports.ArrowAutofitHeightInRegular = exports.ArrowAutofitHeightInFilled = exports.ArrowAutofitHeightDottedRegular = exports.ArrowAutofitHeightDottedFilled = exports.ArrowAutofitHeightRegular = exports.ArrowAutofitHeightFilled = exports.ArrowAutofitDownRegular = exports.ArrowAutofitDownFilled = exports.ArrowAutofitContentRegular = exports.ArrowAutofitContentFilled = exports.ArchiveSettingsRegular = exports.ArchiveSettingsFilled = exports.ArchiveMultipleRegular = exports.ArchiveMultipleFilled = exports.ArchiveArrowBackRegular = exports.ArchiveArrowBackFilled = exports.ArchiveRegular = exports.ArchiveFilled = exports.AppsShieldRegular = exports.AppsShieldFilled = exports.AppsSettingsRegular = exports.AppsSettingsFilled = exports.AppsListDetailRegular = exports.AppsListDetailFilled = exports.AppsListRegular = exports.AppsListFilled = exports.AppsAddInOffRegular = exports.AppsAddInOffFilled = exports.AppsAddInRegular = exports.AppsAddInFilled = exports.AppsRegular = exports.AppsFilled = exports.ApprovalsAppRegular = exports.ApprovalsAppFilled = exports.AppTitleRegular = exports.AppTitleFilled = exports.AppRecentRegular = exports.AppRecentFilled = exports.AppGenericRegular = exports.AppGenericFilled = exports.AppFolderRegular = exports.AppFolderFilled = exports.AnimalTurtleRegular = exports.AnimalTurtleFilled = void 0;
          exports.ArrowCurveDownRightRegular = exports.ArrowCurveDownRightFilled = exports.ArrowCurveDownLeftRegular = exports.ArrowCurveDownLeftFilled = exports.ArrowCounterclockwiseInfoRegular = exports.ArrowCounterclockwiseInfoFilled = exports.ArrowCounterclockwiseDashesRegular = exports.ArrowCounterclockwiseDashesFilled = exports.ArrowCounterclockwiseRegular = exports.ArrowCounterclockwiseFilled = exports.ArrowCollapseAllRegular = exports.ArrowCollapseAllFilled = exports.ArrowClockwiseDashesSettingsRegular = exports.ArrowClockwiseDashesSettingsFilled = exports.ArrowClockwiseDashesRegular = exports.ArrowClockwiseDashesFilled = exports.ArrowClockwiseRegular = exports.ArrowClockwiseFilled = exports.ArrowCircleUpSparkleRegular = exports.ArrowCircleUpSparkleFilled = exports.ArrowCircleUpRightRegular = exports.ArrowCircleUpRightFilled = exports.ArrowCircleUpLeftRegular = exports.ArrowCircleUpLeftFilled = exports.ArrowCircleUpRegular = exports.ArrowCircleUpFilled = exports.ArrowCircleRightRegular = exports.ArrowCircleRightFilled = exports.ArrowCircleLeftRegular = exports.ArrowCircleLeftFilled = exports.ArrowCircleDownUpRegular = exports.ArrowCircleDownUpFilled = exports.ArrowCircleDownSplitRegular = exports.ArrowCircleDownSplitFilled = exports.ArrowCircleDownRightRegular = exports.ArrowCircleDownRightFilled = exports.ArrowCircleDownDoubleRegular = exports.ArrowCircleDownDoubleFilled = exports.ArrowCircleDownRegular = exports.ArrowCircleDownFilled = exports.ArrowBounceRegular = exports.ArrowBounceFilled = exports.ArrowBidirectionalUpDownRegular = exports.ArrowBidirectionalUpDownFilled = exports.ArrowBidirectionalLeftRightRegular = exports.ArrowBidirectionalLeftRightFilled = exports.ArrowBetweenUpRegular = exports.ArrowBetweenUpFilled = exports.ArrowBetweenDownRegular = exports.ArrowBetweenDownFilled = void 0;
          exports.ArrowForwardRegular = exports.ArrowForwardFilled = exports.ArrowFlowUpRightRectangleMultipleRegular = exports.ArrowFlowUpRightRectangleMultipleFilled = exports.ArrowFlowUpRightRegular = exports.ArrowFlowUpRightFilled = exports.ArrowFlowDiagonalUpRightRegular = exports.ArrowFlowDiagonalUpRightFilled = exports.ArrowFitInRegular = exports.ArrowFitInFilled = exports.ArrowFitRegular = exports.ArrowFitFilled = exports.ArrowExportUpRegular = exports.ArrowExportUpFilled = exports.ArrowExportRtlRegular = exports.ArrowExportRtlFilled = exports.ArrowExportLtrRegular = exports.ArrowExportLtrFilled = exports.ArrowExportRegular = exports.ArrowExportFilled = exports.ArrowExpandAllRegular = exports.ArrowExpandAllFilled = exports.ArrowExpandRegular = exports.ArrowExpandFilled = exports.ArrowExitRegular = exports.ArrowExitFilled = exports.ArrowEnterUpRegular = exports.ArrowEnterUpFilled = exports.ArrowEnterLeftRegular = exports.ArrowEnterLeftFilled = exports.ArrowEnterRegular = exports.ArrowEnterFilled = exports.ArrowEjectRegular = exports.ArrowEjectFilled = exports.ArrowDownloadOffRegular = exports.ArrowDownloadOffFilled = exports.ArrowDownloadRegular = exports.ArrowDownloadFilled = exports.ArrowDownRightRegular = exports.ArrowDownRightFilled = exports.ArrowDownLeftRegular = exports.ArrowDownLeftFilled = exports.ArrowDownExclamationRegular = exports.ArrowDownExclamationFilled = exports.ArrowDownRegular = exports.ArrowDownFilled = exports.ArrowCurveUpRightRegular = exports.ArrowCurveUpRightFilled = exports.ArrowCurveUpLeftRegular = exports.ArrowCurveUpLeftFilled = void 0;
          exports.ArrowReplyRegular = exports.ArrowReplyFilled = exports.ArrowRepeatAllOffRegular = exports.ArrowRepeatAllOffFilled = exports.ArrowRepeatAllRegular = exports.ArrowRepeatAllFilled = exports.ArrowRepeat1Regular = exports.ArrowRepeat1Filled = exports.ArrowRedoRegular = exports.ArrowRedoFilled = exports.ArrowPreviousRegular = exports.ArrowPreviousFilled = exports.ArrowParagraphRegular = exports.ArrowParagraphFilled = exports.ArrowOutlineUpRightRegular = exports.ArrowOutlineUpRightFilled = exports.ArrowOutlineDownLeftRegular = exports.ArrowOutlineDownLeftFilled = exports.ArrowNextRegular = exports.ArrowNextFilled = exports.ArrowMoveInwardRegular = exports.ArrowMoveInwardFilled = exports.ArrowMoveRegular = exports.ArrowMoveFilled = exports.ArrowMinimizeVerticalRegular = exports.ArrowMinimizeVerticalFilled = exports.ArrowMinimizeRegular = exports.ArrowMinimizeFilled = exports.ArrowMaximizeVerticalRegular = exports.ArrowMaximizeVerticalFilled = exports.ArrowMaximizeRegular = exports.ArrowMaximizeFilled = exports.ArrowLeftRegular = exports.ArrowLeftFilled = exports.ArrowJoinRegular = exports.ArrowJoinFilled = exports.ArrowImportRegular = exports.ArrowImportFilled = exports.ArrowHookUpRightRegular = exports.ArrowHookUpRightFilled = exports.ArrowHookUpLeftRegular = exports.ArrowHookUpLeftFilled = exports.ArrowHookDownRightRegular = exports.ArrowHookDownRightFilled = exports.ArrowHookDownLeftRegular = exports.ArrowHookDownLeftFilled = exports.ArrowForwardDownPersonRegular = exports.ArrowForwardDownPersonFilled = exports.ArrowForwardDownLightningRegular = exports.ArrowForwardDownLightningFilled = void 0;
          exports.ArrowStepOutRegular = exports.ArrowStepOutFilled = exports.ArrowStepInRightRegular = exports.ArrowStepInRightFilled = exports.ArrowStepInLeftRegular = exports.ArrowStepInLeftFilled = exports.ArrowStepInDiagonalDownLeftRegular = exports.ArrowStepInDiagonalDownLeftFilled = exports.ArrowStepInRegular = exports.ArrowStepInFilled = exports.ArrowStepBackRegular = exports.ArrowStepBackFilled = exports.ArrowSquareUpRightRegular = exports.ArrowSquareUpRightFilled = exports.ArrowSquareDownRegular = exports.ArrowSquareDownFilled = exports.ArrowSprintRegular = exports.ArrowSprintFilled = exports.ArrowSplitRegular = exports.ArrowSplitFilled = exports.ArrowSortUpLinesRegular = exports.ArrowSortUpLinesFilled = exports.ArrowSortUpRegular = exports.ArrowSortUpFilled = exports.ArrowSortDownLinesRegular = exports.ArrowSortDownLinesFilled = exports.ArrowSortDownRegular = exports.ArrowSortDownFilled = exports.ArrowSortRegular = exports.ArrowSortFilled = exports.ArrowShuffleOffRegular = exports.ArrowShuffleOffFilled = exports.ArrowShuffleRegular = exports.ArrowShuffleFilled = exports.ArrowRoutingRectangleMultipleRegular = exports.ArrowRoutingRectangleMultipleFilled = exports.ArrowRoutingRegular = exports.ArrowRoutingFilled = exports.ArrowRotateCounterclockwiseRegular = exports.ArrowRotateCounterclockwiseFilled = exports.ArrowRotateClockwiseRegular = exports.ArrowRotateClockwiseFilled = exports.ArrowRightRegular = exports.ArrowRightFilled = exports.ArrowResetRegular = exports.ArrowResetFilled = exports.ArrowReplyDownRegular = exports.ArrowReplyDownFilled = exports.ArrowReplyAllRegular = exports.ArrowReplyAllFilled = void 0;
          exports.ArrowTurnRightLeftRegular = exports.ArrowTurnRightLeftFilled = exports.ArrowTurnRightDownRegular = exports.ArrowTurnRightDownFilled = exports.ArrowTurnRightRegular = exports.ArrowTurnRightFilled = exports.ArrowTurnLeftUpRegular = exports.ArrowTurnLeftUpFilled = exports.ArrowTurnLeftRightRegular = exports.ArrowTurnLeftRightFilled = exports.ArrowTurnLeftDownRegular = exports.ArrowTurnLeftDownFilled = exports.ArrowTurnDownUpRegular = exports.ArrowTurnDownUpFilled = exports.ArrowTurnDownRightRegular = exports.ArrowTurnDownRightFilled = exports.ArrowTurnDownLeftRegular = exports.ArrowTurnDownLeftFilled = exports.ArrowTurnBidirectionalDownRightRegular = exports.ArrowTurnBidirectionalDownRightFilled = exports.ArrowTrendingWrenchRegular = exports.ArrowTrendingWrenchFilled = exports.ArrowTrendingTextRegular = exports.ArrowTrendingTextFilled = exports.ArrowTrendingSparkleRegular = exports.ArrowTrendingSparkleFilled = exports.ArrowTrendingSettingsRegular = exports.ArrowTrendingSettingsFilled = exports.ArrowTrendingLinesRegular = exports.ArrowTrendingLinesFilled = exports.ArrowTrendingDownRegular = exports.ArrowTrendingDownFilled = exports.ArrowTrendingCheckmarkRegular = exports.ArrowTrendingCheckmarkFilled = exports.ArrowTrendingRegular = exports.ArrowTrendingFilled = exports.ArrowSyncOffRegular = exports.ArrowSyncOffFilled = exports.ArrowSyncDismissRegular = exports.ArrowSyncDismissFilled = exports.ArrowSyncCircleRegular = exports.ArrowSyncCircleFilled = exports.ArrowSyncCheckmarkRegular = exports.ArrowSyncCheckmarkFilled = exports.ArrowSyncRegular = exports.ArrowSyncFilled = exports.ArrowSwapRegular = exports.ArrowSwapFilled = exports.ArrowStepOverRegular = exports.ArrowStepOverFilled = void 0;
          exports.BadgeRegular = exports.BadgeFilled = exports.BackspaceRegular = exports.BackspaceFilled = exports.BackpackAddRegular = exports.BackpackAddFilled = exports.BackpackRegular = exports.BackpackFilled = exports.AutosumRegular = exports.AutosumFilled = exports.AutocorrectRegular = exports.AutocorrectFilled = exports.AutoFitWidthRegular = exports.AutoFitWidthFilled = exports.AutoFitHeightRegular = exports.AutoFitHeightFilled = exports.AttachTextRegular = exports.AttachTextFilled = exports.AttachArrowRightRegular = exports.AttachArrowRightFilled = exports.AttachRegular = exports.AttachFilled = exports.ArrowsBidirectionalRegular = exports.ArrowsBidirectionalFilled = exports.ArrowWrapUpToDownRegular = exports.ArrowWrapUpToDownFilled = exports.ArrowWrapOffRegular = exports.ArrowWrapOffFilled = exports.ArrowWrapRegular = exports.ArrowWrapFilled = exports.ArrowUploadRegular = exports.ArrowUploadFilled = exports.ArrowUpRightDashesRegular = exports.ArrowUpRightDashesFilled = exports.ArrowUpRightRegular = exports.ArrowUpRightFilled = exports.ArrowUpLeftRegular = exports.ArrowUpLeftFilled = exports.ArrowUpExclamationRegular = exports.ArrowUpExclamationFilled = exports.ArrowUpRegular = exports.ArrowUpFilled = exports.ArrowUndoRegular = exports.ArrowUndoFilled = exports.ArrowTurnUpLeftRegular = exports.ArrowTurnUpLeftFilled = exports.ArrowTurnUpDownRegular = exports.ArrowTurnUpDownFilled = exports.ArrowTurnRightUpRegular = exports.ArrowTurnRightUpFilled = void 0;
          exports.BeakerOffRegular = exports.BeakerOffFilled = exports.BeakerEditRegular = exports.BeakerEditFilled = exports.BeakerDismissRegular = exports.BeakerDismissFilled = exports.BeakerAddRegular = exports.BeakerAddFilled = exports.BeakerRegular = exports.BeakerFilled = exports.BeachRegular = exports.BeachFilled = exports.BatteryWarningRegular = exports.BatteryWarningFilled = exports.BatterySaverRegular = exports.BatterySaverFilled = exports.BatteryCheckmarkRegular = exports.BatteryCheckmarkFilled = exports.BatteryChargeRegular = exports.BatteryChargeFilled = exports.Battery9Regular = exports.Battery9Filled = exports.Battery8Regular = exports.Battery8Filled = exports.Battery7Regular = exports.Battery7Filled = exports.Battery6Regular = exports.Battery6Filled = exports.Battery5Regular = exports.Battery5Filled = exports.Battery4Regular = exports.Battery4Filled = exports.Battery3Regular = exports.Battery3Filled = exports.Battery2Regular = exports.Battery2Filled = exports.Battery10Regular = exports.Battery10Filled = exports.Battery1Regular = exports.Battery1Filled = exports.Battery0Regular = exports.Battery0Filled = exports.BarcodeScannerDismissRegular = exports.BarcodeScannerDismissFilled = exports.BarcodeScannerAddRegular = exports.BarcodeScannerAddFilled = exports.BarcodeScannerRegular = exports.BarcodeScannerFilled = exports.BalloonRegular = exports.BalloonFilled = void 0;
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.AccessTimeFilled = createFluentFontIcon_1.createFluentFontIcon("AccessTimeFilled", "", 2, undefined);
          exports.AccessTimeRegular = createFluentFontIcon_1.createFluentFontIcon("AccessTimeRegular", "", 2, undefined);
          exports.AccessibilityFilled = createFluentFontIcon_1.createFluentFontIcon("AccessibilityFilled", "", 2, undefined);
          exports.AccessibilityRegular = createFluentFontIcon_1.createFluentFontIcon("AccessibilityRegular", "", 2, undefined);
          exports.AccessibilityCheckmarkFilled = createFluentFontIcon_1.createFluentFontIcon("AccessibilityCheckmarkFilled", "", 2, undefined);
          exports.AccessibilityCheckmarkRegular = createFluentFontIcon_1.createFluentFontIcon("AccessibilityCheckmarkRegular", "", 2, undefined);
          exports.AccessibilityErrorFilled = createFluentFontIcon_1.createFluentFontIcon("AccessibilityErrorFilled", "", 2, undefined);
          exports.AccessibilityErrorRegular = createFluentFontIcon_1.createFluentFontIcon("AccessibilityErrorRegular", "", 2, undefined);
          exports.AccessibilityMoreFilled = createFluentFontIcon_1.createFluentFontIcon("AccessibilityMoreFilled", "", 2, undefined);
          exports.AccessibilityMoreRegular = createFluentFontIcon_1.createFluentFontIcon("AccessibilityMoreRegular", "", 2, undefined);
          exports.AccessibilityQuestionMarkFilled = createFluentFontIcon_1.createFluentFontIcon("AccessibilityQuestionMarkFilled", "", 2, undefined);
          exports.AccessibilityQuestionMarkRegular = createFluentFontIcon_1.createFluentFontIcon("AccessibilityQuestionMarkRegular", "", 2, undefined);
          exports.AddFilled = createFluentFontIcon_1.createFluentFontIcon("AddFilled", "", 2, undefined);
          exports.AddRegular = createFluentFontIcon_1.createFluentFontIcon("AddRegular", "", 2, undefined);
          exports.AddCircleFilled = createFluentFontIcon_1.createFluentFontIcon("AddCircleFilled", "", 2, undefined);
          exports.AddCircleRegular = createFluentFontIcon_1.createFluentFontIcon("AddCircleRegular", "", 2, undefined);
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "/// <reference types="react" />
          export declare const AccessTimeFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessTimeRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityCheckmarkFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityCheckmarkRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityErrorFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityErrorRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityMoreFilled: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AccessibilityMoreRegular: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
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
          export const AccessibilityCheckmark32Light = /*#__PURE__*/ createFluentFontIcon("AccessibilityCheckmark32Light", "", 3, 32);
          export const Add32Light = /*#__PURE__*/ createFluentFontIcon("Add32Light", "", 3, 32);
          export const Alert32Light = /*#__PURE__*/ createFluentFontIcon("Alert32Light", "", 3, 32);
          export const AppFolder32Light = /*#__PURE__*/ createFluentFontIcon("AppFolder32Light", "", 3, 32);
          export const AppGeneric32Light = /*#__PURE__*/ createFluentFontIcon("AppGeneric32Light", "", 3, 32);
          export const Archive32Light = /*#__PURE__*/ createFluentFontIcon("Archive32Light", "", 3, 32);
          export const ArchiveSettings32Light = /*#__PURE__*/ createFluentFontIcon("ArchiveSettings32Light", "", 3, 32);
          export const ArrowClockwise32Light = /*#__PURE__*/ createFluentFontIcon("ArrowClockwise32Light", "", 3, 32);
          export const ArrowDown32Light = /*#__PURE__*/ createFluentFontIcon("ArrowDown32Light", "", 3, 32);
          export const ArrowDownload32Light = /*#__PURE__*/ createFluentFontIcon("ArrowDownload32Light", "", 3, 32);
          export const ArrowForward32Light = /*#__PURE__*/ createFluentFontIcon("ArrowForward32Light", "", 3, 32);
          export const ArrowHookDownLeft32Light = /*#__PURE__*/ createFluentFontIcon("ArrowHookDownLeft32Light", "", 3, 32);
          export const ArrowHookDownRight32Light = /*#__PURE__*/ createFluentFontIcon("ArrowHookDownRight32Light", "", 3, 32);
          export const ArrowHookUpLeft32Light = /*#__PURE__*/ createFluentFontIcon("ArrowHookUpLeft32Light", "", 3, 32);
          export const ArrowHookUpRight32Light = /*#__PURE__*/ createFluentFontIcon("ArrowHookUpRight32Light", "", 3, 32);
          export const ArrowRedo32Light = /*#__PURE__*/ createFluentFontIcon("ArrowRedo32Light", "", 3, 32);
          export const ArrowReply32Light = /*#__PURE__*/ createFluentFontIcon("ArrowReply32Light", "", 3, 32);
          export const ArrowReplyAll32Light = /*#__PURE__*/ createFluentFontIcon("ArrowReplyAll32Light", "", 3, 32);
          export const ArrowUndo32Light = /*#__PURE__*/ createFluentFontIcon("ArrowUndo32Light", "", 3, 32);
          export const Attach32Light = /*#__PURE__*/ createFluentFontIcon("Attach32Light", "", 3, 32);
          export const AutoFit32Light = /*#__PURE__*/ createFluentFontIcon("AutoFit32Light", "", 3, 32);
          export const AutoFitWidth32Light = /*#__PURE__*/ createFluentFontIcon("AutoFitWidth32Light", "", 3, 32);
          export const Autocorrect32Light = /*#__PURE__*/ createFluentFontIcon("Autocorrect32Light", "", 3, 32);
          export const BreakoutRoom32Light = /*#__PURE__*/ createFluentFontIcon("BreakoutRoom32Light", "", 3, 32);
          export const Broom32Light = /*#__PURE__*/ createFluentFontIcon("Broom32Light", "", 3, 32);
          export const Calendar3Day32Light = /*#__PURE__*/ createFluentFontIcon("Calendar3Day32Light", "", 3, 32);
          export const CalendarClock32Light = /*#__PURE__*/ createFluentFontIcon("CalendarClock32Light", "", 3, 32);
          export const CalendarDataBar32Light = /*#__PURE__*/ createFluentFontIcon("CalendarDataBar32Light", "", 3, 32);
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "/// <reference types="react" />
          export declare const AccessibilityCheckmark32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const Add32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const Alert32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AppFolder32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AppGeneric32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const Archive32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const ArchiveSettings32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const ArrowClockwise32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const ArrowDown32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const ArrowDownload32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
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
          ""use client";
          "use strict";
          Object.defineProperty(exports, "__esModule", { value: true });
          exports.Comment32Light = exports.ColorFillAccent32Light = exports.ColorFill32Light = exports.Color32Light = exports.ClockAlarm32Light = exports.Clock32Light = exports.ClipboardPaste32Light = exports.Classification32Light = exports.CheckmarkCircle32Light = exports.Checkmark32Light = exports.Chat32Light = exports.CalendarWorkWeek32Light = exports.CalendarTodo32Light = exports.CalendarSparkle32Light = exports.CalendarReply32Light = exports.CalendarPattern32Light = exports.CalendarMultiple32Light = exports.CalendarMonth32Light = exports.CalendarLtr32Light = exports.CalendarEmpty32Light = exports.CalendarEdit32Light = exports.CalendarDay32Light = exports.CalendarDataBar32Light = exports.CalendarClock32Light = exports.Calendar3Day32Light = exports.Broom32Light = exports.BreakoutRoom32Light = exports.Autocorrect32Light = exports.AutoFitWidth32Light = exports.AutoFit32Light = exports.Attach32Light = exports.ArrowUndo32Light = exports.ArrowReplyAll32Light = exports.ArrowReply32Light = exports.ArrowRedo32Light = exports.ArrowHookUpRight32Light = exports.ArrowHookUpLeft32Light = exports.ArrowHookDownRight32Light = exports.ArrowHookDownLeft32Light = exports.ArrowForward32Light = exports.ArrowDownload32Light = exports.ArrowDown32Light = exports.ArrowClockwise32Light = exports.ArchiveSettings32Light = exports.Archive32Light = exports.AppGeneric32Light = exports.AppFolder32Light = exports.Alert32Light = exports.Add32Light = exports.AccessibilityCheckmark32Light = void 0;
          exports.LockClosed32Light = exports.Link32Light = exports.Lightbulb32Light = exports.LayoutRowTwoSettings32Light = exports.LayoutRowTwoFocusTopSettings32Light = exports.LayoutRowTwoFocusTop32Light = exports.LayoutRowTwo32Light = exports.LayoutColumnTwoFocusRight32Light = exports.LayoutColumnTwoFocusLeft32Light = exports.LayoutColumnTwo32Light = exports.Lasso32Light = exports.Important32Light = exports.ImmersiveReader32Light = exports.ImageShadow32Light = exports.ImageReflection32Light = exports.ImageCopy32Light = exports.ImageAltText32Light = exports.ImageAdd32Light = exports.History32Light = exports.HandDraw32Light = exports.FolderMail32Light = exports.FolderArrowRight32Light = exports.Flash32Light = exports.FlagOff32Light = exports.Flag32Light = exports.Filter32Light = exports.EyeOff32Light = exports.Eye32Light = exports.Emoji32Light = exports.Edit32Light = exports.DoorArrowRight32Light = exports.DocumentSparkle48Light = exports.DocumentSparkle32Light = exports.DocumentSparkle28Light = exports.DocumentSparkle24Light = exports.DocumentSignature32Light = exports.DocumentLightning32Light = exports.Document48Light = exports.Document32Light = exports.Document28Light = exports.Document24Light = exports.DismissCircle32Light = exports.Dismiss32Light = exports.Delete32Light = exports.Cut32Light = exports.Cursor32Light = exports.Crop32Light = exports.Copy32Light = exports.Compose32Light = exports.CommentAdd32Light = void 0;
          exports.Settings32Light = exports.SendClock32Light = exports.Save32Light = exports.RotateLeft32Light = exports.RectangleLandscape32Light = exports.ReadAloud32Light = exports.Question32Light = exports.Print32Light = exports.Poll32Light = exports.PinOff32Light = exports.Pin32Light = exports.PictureInPicture32Light = exports.Phone32Light = exports.PersonSuport32Light = exports.PersonProhibited32Light = exports.PersonMail32Light = exports.PersonFeedback32Light = exports.PersonAvailable32Light = exports.PersonAdd32Light = exports.Person32Light = exports.PeopleSync32Light = exports.PeopleSettings32Light = exports.PeopleList32Light = exports.PeopleEdit32Light = exports.PeopleCommunity32Light = exports.PeopleAdd32Light = exports.People32Light = exports.PenSparkle32Light = exports.PanelLeftFocusRight32Light = exports.PanelLeftDefault32Light = exports.PaintBrush32Light = exports.Options32Light = exports.Note32Light = exports.Molecule32Light = exports.Mic32Light = exports.MailUnread32Light = exports.MailTemplate32Light = exports.MailSettings32Light = exports.MailRewind32Light = exports.MailReadMultiple32Light = exports.MailRead32Light = exports.MailMultiple32Light = exports.MailList32Light = exports.MailEdit32Light = exports.MailCopy32Light = exports.MailArrowDoubleBack32Light = exports.MailArrowClockwise32Light = exports.MailAlert32Light = exports.Mail32Light = exports.LockOpen32Light = void 0;
          exports.AddCircle20Filled = exports.Add28Filled = exports.Add24Filled = exports.Add20Filled = exports.Add16Filled = exports.Add12Filled = exports.Accessibility28Filled = exports.Accessibility24Filled = exports.Accessibility20Filled = exports.Accessibility16Filled = exports.AccessTime24Filled = exports.ZoomOut32Light = exports.ZoomIn32Light = exports.WrenchScrewdriver32Light = exports.Window32Light = exports.WeatherSunny32Light = exports.WeatherMoon32Light = exports.VideoClip32Light = exports.Video32Light = exports.Translate32Light = exports.Toolbox32Light = exports.TextboxAlignTopLeft32Light = exports.TextExpand32Light = exports.TextEditStyle32Light = exports.TextDensity32Light = exports.TextCollapse32Light = exports.TextClearFormatting32Light = exports.Text32Light = exports.Tag32Light = exports.TableSimple32Light = exports.TableSettings32Light = exports.TableMoveRight32Light = exports.TableMoveLeft32Light = exports.TableMoveBelow32Light = exports.TableMoveAbove32Light = exports.TableDismiss32Light = exports.TableCellsSplit32Light = exports.TableCellsMerge32Light = exports.TableAltText32Light = exports.Table32Light = exports.TabAdd32Light = exports.Sticker32Light = exports.StarArrowRight32Light = exports.StarAdd32Light = exports.Stamp32Light = exports.SquareArrowForward32Light = exports.SpeakerMute32Light = exports.Signature32Light = exports.ShieldError32Light = exports.Share32Light = void 0;
          exports.ArrowDown20Filled = exports.ArrowDown16Filled = exports.ArrowCurveUpRight20Filled = exports.ArrowCurveUpLeft20Filled = exports.ArrowCurveDownRight20Filled = exports.ArrowCurveDownLeft20Filled = exports.ArrowCounterclockwise24Filled = exports.ArrowCounterclockwise20Filled = exports.ArrowClockwise24Filled = exports.ArrowClockwise20Filled = exports.Archive48Filled = exports.Archive28Filled = exports.Archive24Filled = exports.Archive20Filled = exports.AppsList24Filled = exports.AppsAddIn24Filled = exports.AppsAddIn20Filled = exports.Apps28Filled = exports.Apps24Filled = exports.Apps20Filled = exports.Apps16Filled = exports.ApprovalsApp28Filled = exports.ApprovalsApp24Filled = exports.AppTitle24Filled = exports.AppStore24Filled = exports.AppRecent24Filled = exports.AppGeneric24Filled = exports.AppFolder24Filled = exports.AppFolder20Filled = exports.AnimalDog24Filled = exports.AnimalDog20Filled = exports.AlertUrgent24Filled = exports.AlertUrgent20Filled = exports.AlertSnooze24Filled = exports.AlertSnooze20Filled = exports.AlertOn24Filled = exports.AlertOff28Filled = exports.AlertOff24Filled = exports.AlertOff20Filled = exports.AlertOff16Filled = exports.Alert28Filled = exports.Alert24Filled = exports.Alert20Filled = exports.AirplaneTakeOff24Filled = exports.AirplaneTakeOff20Filled = exports.AirplaneTakeOff16Filled = exports.Airplane24Filled = exports.Airplane20Filled = exports.AddCircle28Filled = exports.AddCircle24Filled = void 0;
          exports.ArrowReplyDown20Filled = exports.ArrowReplyDown16Filled = exports.ArrowReplyAll48Filled = exports.ArrowReplyAll24Filled = exports.ArrowReplyAll20Filled = exports.ArrowReplyAll16Filled = exports.ArrowReply48Filled = exports.ArrowReply24Filled = exports.ArrowReply20Filled = exports.ArrowReply16Filled = exports.ArrowRepeatAllOff24Filled = exports.ArrowRepeatAllOff20Filled = exports.ArrowRepeatAllOff16Filled = exports.ArrowRepeatAll24Filled = exports.ArrowRepeatAll20Filled = exports.ArrowRepeatAll16Filled = exports.ArrowRedo24Filled = exports.ArrowRedo20Filled = exports.ArrowPrevious24Filled = exports.ArrowPrevious20Filled = exports.ArrowNext24Filled = exports.ArrowNext20Filled = exports.ArrowMove24Filled = exports.ArrowMinimizeVertical24Filled = exports.ArrowMinimize28Filled = exports.ArrowMinimize24Filled = exports.ArrowMinimize20Filled = exports.ArrowMinimize16Filled = exports.ArrowMaximizeVertical24Filled = exports.ArrowMaximizeVertical20Filled = exports.ArrowMaximize28Filled = exports.ArrowMaximize24Filled = exports.ArrowMaximize20Filled = exports.ArrowMaximize16Filled = exports.ArrowLeft28Filled = exports.ArrowLeft24Filled = exports.ArrowLeft20Filled = exports.ArrowImport24Filled = exports.ArrowImport20Filled = exports.ArrowForward24Filled = exports.ArrowForward20Filled = exports.ArrowForward16Filled = exports.ArrowExpand24Filled = exports.ArrowDownload48Filled = exports.ArrowDownload24Filled = exports.ArrowDownload20Filled = exports.ArrowDownload16Filled = exports.ArrowDownLeft24Filled = exports.ArrowDown28Filled = exports.ArrowDown24Filled = void 0;
          exports.Battery224Filled = exports.Battery220Filled = exports.Battery124Filled = exports.Battery120Filled = exports.Battery024Filled = exports.Battery020Filled = exports.Balloon24Filled = exports.Balloon20Filled = exports.Badge24Filled = exports.Backspace24Filled = exports.Backspace20Filled = exports.Autosum24Filled = exports.Autosum20Filled = exports.Autocorrect24Filled = exports.Attach24Filled = exports.Attach20Filled = exports.Attach16Filled = exports.ArrowsBidirectional24Filled = exports.ArrowUpload24Filled = exports.ArrowUpload20Filled = exports.ArrowUpRight24Filled = exports.ArrowUpLeft24Filled = exports.ArrowUp28Filled = exports.ArrowUp24Filled = exports.ArrowUp20Filled = exports.ArrowUndo24Filled = exports.ArrowUndo20Filled = exports.ArrowTrending24Filled = exports.ArrowTrending20Filled = exports.ArrowTrending16Filled = exports.ArrowSyncOff12Filled = exports.ArrowSyncCircle24Filled = exports.ArrowSyncCircle20Filled = exports.ArrowSyncCircle16Filled = exports.ArrowSync24Filled = exports.ArrowSync20Filled = exports.ArrowSync12Filled = exports.ArrowSwap24Filled = exports.ArrowSwap20Filled = exports.ArrowSort28Filled = exports.ArrowSort24Filled = exports.ArrowSort20Filled = exports.ArrowRotateCounterclockwise24Filled = exports.ArrowRotateCounterclockwise20Filled = exports.ArrowRotateClockwise24Filled = exports.ArrowRotateClockwise20Filled = exports.ArrowRight28Filled = exports.ArrowRight24Filled = exports.ArrowRight20Filled = exports.ArrowReplyDown24Filled = void 0;
          exports.Calculator20Filled = exports.BuildingRetail24Filled = exports.Building24Filled = exports.Broom24Filled = exports.Broom20Filled = exports.BroadActivityFeed24Filled = exports.Briefcase24Filled = exports.Briefcase20Filled = exports.Branch24Filled = exports.BotAdd24Filled = exports.Bot24Filled = exports.BookmarkOff24Filled = exports.Bookmark28Filled = exports.Bookmark24Filled = exports.Bookmark20Filled = exports.Bookmark16Filled = exports.BookNumber24Filled = exports.BookNumber20Filled = exports.BookNumber16Filled = exports.BookGlobe24Filled = exports.Board24Filled = exports.BluetoothSearching24Filled = exports.BluetoothDisabled24Filled = exports.BluetoothConnected24Filled = exports.Bluetooth24Filled = exports.Bluetooth20Filled = exports.Bed24Filled = exports.Bed20Filled = exports.Beaker24Filled = exports.Beaker20Filled = exports.Beaker16Filled = exports.BatteryWarning24Filled = exports.BatterySaver24Filled = exports.BatterySaver20Filled = exports.BatteryCharge24Filled = exports.BatteryCharge20Filled = exports.Battery924Filled = exports.Battery920Filled = exports.Battery824Filled = exports.Battery820Filled = exports.Battery724Filled = exports.Battery720Filled = exports.Battery624Filled = exports.Battery620Filled = exports.Battery524Filled = exports.Battery520Filled = exports.Battery424Filled = exports.Battery420Filled = exports.Battery324Filled = exports.Battery320Filled = void 0;
          exports.CalendarWorkWeek20Filled = exports.CalendarWorkWeek16Filled = exports.CalendarWeekStart28Filled = exports.CalendarWeekStart24Filled = exports.CalendarWeekStart20Filled = exports.CalendarWeekNumbers24Filled = exports.CalendarToday28Filled = exports.CalendarToday24Filled = exports.CalendarToday20Filled = exports.CalendarToday16Filled = exports.CalendarSync24Filled = exports.CalendarSync20Filled = exports.CalendarSync16Filled = exports.CalendarStar24Filled = exports.CalendarStar20Filled = exports.CalendarSettings20Filled = exports.CalendarReply28Filled = exports.CalendarReply24Filled = exports.CalendarReply20Filled = exports.CalendarReply16Filled = exports.CalendarPerson20Filled = exports.CalendarMultiple24Filled = exports.CalendarMultiple20Filled = exports.CalendarMonth28Filled = exports.CalendarMonth24Filled = exports.CalendarMonth20Filled = exports.CalendarEmpty28Filled = exports.CalendarEmpty24Filled = exports.CalendarEmpty20Filled = exports.CalendarEmpty16Filled = exports.CalendarDay28Filled = exports.CalendarDay24Filled = exports.CalendarDay20Filled = exports.CalendarClock24Filled = exports.CalendarClock20Filled = exports.CalendarCheckmark20Filled = exports.CalendarCheckmark16Filled = exports.CalendarCancel24Filled = exports.CalendarCancel20Filled = exports.CalendarAssistant24Filled = exports.CalendarAssistant20Filled = exports.CalendarArrowRight20Filled = exports.CalendarAgenda28Filled = exports.CalendarAgenda24Filled = exports.CalendarAgenda20Filled = exports.CalendarAdd24Filled = exports.CalendarAdd20Filled = exports.Calendar3Day28Filled = exports.Calendar3Day24Filled = exports.Calendar3Day20Filled = void 0;
          exports.CellularData524Filled = exports.CellularData520Filled = exports.CellularData424Filled = exports.CellularData420Filled = exports.CellularData324Filled = exports.CellularData320Filled = exports.CellularData224Filled = exports.CellularData220Filled = exports.CellularData124Filled = exports.CellularData120Filled = exports.Cellular4G24Filled = exports.Cellular3G24Filled = exports.Cast28Filled = exports.Cast24Filled = exports.Cast20Filled = exports.Cart24Filled = exports.CaretRight24Filled = exports.CaretRight20Filled = exports.CaretRight16Filled = exports.CaretRight12Filled = exports.CaretLeft24Filled = exports.CaretLeft20Filled = exports.CaretLeft16Filled = exports.CaretLeft12Filled = exports.CaretDown24Filled = exports.CaretDown20Filled = exports.CaretDown16Filled = exports.CaretDown12Filled = exports.CameraSwitch24Filled = exports.CameraAdd48Filled = exports.CameraAdd24Filled = exports.CameraAdd20Filled = exports.Camera28Filled = exports.Camera24Filled = exports.Camera20Filled = exports.CalligraphyPen24Filled = exports.CalligraphyPen20Filled = exports.CallPark24Filled = exports.CallOutbound24Filled = exports.CallOutbound16Filled = exports.CallMissed24Filled = exports.CallMissed16Filled = exports.CallInbound24Filled = exports.CallInbound16Filled = exports.CallForward24Filled = exports.CallEnd28Filled = exports.CallEnd24Filled = exports.CallEnd20Filled = exports.CallAdd24Filled = exports.CalendarWorkWeek24Filled = void 0;
          const createFluentFontIcon_1 = require("../../utils/fonts/createFluentFontIcon");
          exports.AccessibilityCheckmark32Light = createFluentFontIcon_1.createFluentFontIcon("AccessibilityCheckmark32Light", "", 3, 32);
          exports.Add32Light = createFluentFontIcon_1.createFluentFontIcon("Add32Light", "", 3, 32);
          exports.Alert32Light = createFluentFontIcon_1.createFluentFontIcon("Alert32Light", "", 3, 32);
          exports.AppFolder32Light = createFluentFontIcon_1.createFluentFontIcon("AppFolder32Light", "", 3, 32);
          exports.AppGeneric32Light = createFluentFontIcon_1.createFluentFontIcon("AppGeneric32Light", "", 3, 32);
          exports.Archive32Light = createFluentFontIcon_1.createFluentFontIcon("Archive32Light", "", 3, 32);
          exports.ArchiveSettings32Light = createFluentFontIcon_1.createFluentFontIcon("ArchiveSettings32Light", "", 3, 32);
          exports.ArrowClockwise32Light = createFluentFontIcon_1.createFluentFontIcon("ArrowClockwise32Light", "", 3, 32);
          exports.ArrowDown32Light = createFluentFontIcon_1.createFluentFontIcon("ArrowDown32Light", "", 3, 32);
          exports.ArrowDownload32Light = createFluentFontIcon_1.createFluentFontIcon("ArrowDownload32Light", "", 3, 32);
          exports.ArrowForward32Light = createFluentFontIcon_1.createFluentFontIcon("ArrowForward32Light", "", 3, 32);
          exports.ArrowHookDownLeft32Light = createFluentFontIcon_1.createFluentFontIcon("ArrowHookDownLeft32Light", "", 3, 32);
          exports.ArrowHookDownRight32Light = createFluentFontIcon_1.createFluentFontIcon("ArrowHookDownRight32Light", "", 3, 32);
          exports.ArrowHookUpLeft32Light = createFluentFontIcon_1.createFluentFontIcon("ArrowHookUpLeft32Light", "", 3, 32);
          exports.ArrowHookUpRight32Light = createFluentFontIcon_1.createFluentFontIcon("ArrowHookUpRight32Light", "", 3, 32);
          exports.ArrowRedo32Light = createFluentFontIcon_1.createFluentFontIcon("ArrowRedo32Light", "", 3, 32);
          ... (content truncated for snapshot)"
        `);

        // Read and verify TypeScript definition file content with inline snapshot
        const dtsContent = await readFile(dtsFile, 'utf8');
        const trimmedDTSContent = trimContentForSnapshot(dtsContent);
        expect(trimmedDTSContent).toMatchInlineSnapshot(`
          "/// <reference types="react" />
          export declare const AccessibilityCheckmark32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const Add32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const Alert32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AppFolder32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const AppGeneric32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const Archive32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const ArchiveSettings32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const ArrowClockwise32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const ArrowDown32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
          };
          export declare const ArrowDownload32Light: import("react").FC<import("..").FluentIconsProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>> & {
              codepoint: string;
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
});
