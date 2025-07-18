// @ts-check

// Spec:
// Write tests leveraging nodejs assert apis
// Test should verify produced build artifacts in the `lib` and `lib-cjs` directories
// it should check:
// - existence of .styles.raw.js files
// - existence of .styles.js files
// - output format of chunks
//.  - should contain js file and a .d.ts file
// - existence of /icons, /sizedIcons, /index.js
// - existence of /fonts
//  - existence of fonts/icons, fonts/sizedIcons, fonts/index.js
// - existence of fonts in utils/fonts (json, ttf, woff, woff2)

const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { promisify } = require('node:util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);

/**
 * @typedef {Object} JSChunkSnapshot
 * @property {boolean} hasContent - Whether the chunk has content
 * @property {boolean} hasClientDirective - Whether the chunk has "use client" directive
 * @property {boolean} hasImports - Whether the chunk has import statements
 * @property {boolean} hasExports - Whether the chunk has export statements
 * @property {boolean} hasCreateFluentIcon - Whether the chunk has createFluentIcon calls
 * @property {string[]} sampleIconNames - Sample icon names from the chunk
 * @property {string} importPattern - The import pattern found in the chunk
 * @property {string} format - The format of the chunk (ESM or CommonJS)
 * @property {boolean} [hasRequireStatements] - Whether the chunk has require statements (CommonJS only)
 * @property {boolean} [hasExportsAssignment] - Whether the chunk has exports assignments (CommonJS only)
 * @property {boolean} [hasStrictMode] - Whether the chunk has strict mode (CommonJS only)
 * @property {boolean} [hasEsmModuleFlag] - Whether the chunk has ESM module flag (CommonJS only)
 */

/**
 * @typedef {Object} FontJSChunkSnapshot
 * @property {boolean} hasContent - Whether the chunk has content
 * @property {boolean} hasClientDirective - Whether the chunk has "use client" directive
 * @property {boolean} hasImports - Whether the chunk has import statements
 * @property {boolean} hasExports - Whether the chunk has export statements
 * @property {boolean} hasCreateFluentFontIcon - Whether the chunk has createFluentFontIcon calls
 * @property {string[]} sampleIconNames - Sample icon names from the chunk
 * @property {string} importPattern - The import pattern found in the chunk
 * @property {string} format - The format of the chunk (ESM or CommonJS)
 * @property {boolean} [hasRequireStatements] - Whether the chunk has require statements (CommonJS only)
 * @property {boolean} [hasExportsAssignment] - Whether the chunk has exports assignments (CommonJS only)
 * @property {boolean} [hasStrictMode] - Whether the chunk has strict mode (CommonJS only)
 * @property {boolean} [hasEsmModuleFlag] - Whether the chunk has ESM module flag (CommonJS only)
 */

/**
 * @typedef {Object} DTSChunkSnapshot
 * @property {boolean} hasContent - Whether the chunk has content
 * @property {boolean} hasImports - Whether the chunk has import statements
 * @property {boolean} hasExports - Whether the chunk has export statements
 * @property {boolean} hasFluentIcon - Whether the chunk has FluentIcon type
 * @property {string[]} sampleIconTypes - Sample icon type declarations from the chunk
 * @property {string} importPattern - The import pattern found in the chunk
 */

/**
 * @typedef {Object} FontDTSChunkSnapshot
 * @property {boolean} hasContent - Whether the chunk has content
 * @property {boolean} hasExports - Whether the chunk has export statements
 * @property {boolean} hasFluentIconsProps - Whether the chunk has FluentIconsProps type
 * @property {boolean} hasCodepoint - Whether the chunk has codepoint property
 * @property {string[]} sampleIconTypes - Sample icon type declarations from the chunk
 * @property {string} typePattern - The type pattern found in the chunk
 */

main();

/**
 * Main function that orchestrates the build verification process
 * @returns {Promise<void>}
 */
async function main(){
  console.log('🔍 Verifying build artifacts...');

  try {
    await verifyBuildDirectories();
    await verifyLibDirectory('lib');
    await verifyLibDirectory('lib-cjs');
    await verifyPackageJsonExports();
    await verifyStylesFiles();
    await verifyChunks();
    await verifyChunkContents();
    await verifyFonts();

    console.log('✅ All build artifacts verified successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Build verification failed:', error.message);
    process.exit(1);
  }
}

/**
 * Verifies that the main build directories exist
 * @returns {Promise<void>}
 */
async function verifyBuildDirectories() {
  console.log('  📁 Checking build directories...');

  const directories = ['lib', 'lib-cjs'];

  for (const dir of directories) {
    const dirPath = path.join(__dirname, dir);
    assert(fs.existsSync(dirPath), `Directory ${dir} should exist`);

    const stats = await stat(dirPath);
    assert(stats.isDirectory(), `${dir} should be a directory`);
  }
}

/**
 * Verifies the structure of a library directory (lib or lib-cjs)
 * @param {string} libDir - The name of the library directory to verify
 * @returns {Promise<void>}
 */
async function verifyLibDirectory(libDir) {
  console.log(`  📦 Checking ${libDir} structure...`);

  const libPath = path.join(__dirname, libDir);

  // Check main structure
  const requiredDirs = ['icons', 'sizedIcons', 'fonts', 'utils'];
  const requiredFiles = ['index.js', 'index.d.ts', 'providers.js', 'providers.d.ts'];

  for (const dir of requiredDirs) {
    const dirPath = path.join(libPath, dir);
    assert(fs.existsSync(dirPath), `${libDir}/${dir} should exist`);

    const stats = await stat(dirPath);
    assert(stats.isDirectory(), `${libDir}/${dir} should be a directory`);
  }

  for (const file of requiredFiles) {
    const filePath = path.join(libPath, file);
    assert(fs.existsSync(filePath), `${libDir}/${file} should exist`);

    const stats = await stat(filePath);
    assert(stats.isFile(), `${libDir}/${file} should be a file`);
  }

  // Check fonts directory structure
  const fontsDir = path.join(libPath, 'fonts');
  const fontRequiredDirs = ['icons', 'sizedIcons'];
  const fontRequiredFiles = ['index.js', 'index.d.ts'];

  for (const dir of fontRequiredDirs) {
    const dirPath = path.join(fontsDir, dir);
    assert(fs.existsSync(dirPath), `${libDir}/fonts/${dir} should exist`);
  }

  for (const file of fontRequiredFiles) {
    const filePath = path.join(fontsDir, file);
    assert(fs.existsSync(filePath), `${libDir}/fonts/${file} should exist`);
  }
}

/**
 * Verifies that all files referenced in package.json exports, main, module, and typings exist
 * @returns {Promise<void>}
 */
async function verifyPackageJsonExports() {
  console.log('  📋 Checking package.json exports...');

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
      assert(fs.existsSync(fullPath), `File specified in package.json ${field} field should exist: ${filePath}`);

      const stats = await stat(fullPath);
      assert(stats.isFile(), `${field} field should point to a file: ${filePath}`);
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
        assert(fs.existsSync(fullPath), `Export path should exist: ${exportPath}`);

        const stats = await stat(fullPath);
        assert(stats.isFile(), `Export path should point to a file: ${exportPath}`);
      }
    }
  }
}

/**
 * Verifies that required styles files exist in the utils directory
 * @returns {Promise<void>}
 */
async function verifyStylesFiles() {
  console.log('  🎨 Checking styles files...');

  const utilsPath = path.join(__dirname, 'lib', 'utils');
  const files = await readdir(utilsPath);

  // Check for .styles.raw.js files
  const rawStylesFiles = files.filter(file => file.endsWith('.styles.raw.js'));
  assert(rawStylesFiles.length > 0, 'Should have .styles.raw.js files in utils');

  // Check for .styles.js files
  const stylesFiles = files.filter(file => file.endsWith('.styles.js') && !file.endsWith('.raw.js'));
  assert(stylesFiles.length > 0, 'Should have .styles.js files in utils');

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
    assert(fs.existsSync(filePath), `${file} should exist in utils`);
  }

  // Check fonts utils styles
  const fontsUtilsPath = path.join(utilsPath, 'fonts');


  const expectedFontsStylesFiles = [
    'createFluentFontIcon.styles.raw.js',
    'createFluentFontIcon.styles.js'
  ];

  for (const file of expectedFontsStylesFiles) {
    const filePath = path.join(fontsUtilsPath, file);
    assert(fs.existsSync(filePath), `${file} should exist in utils/fonts`);
  }
}

/**
 * Verifies that chunk files exist and have the correct structure
 * @returns {Promise<void>}
 */
async function verifyChunks() {
  console.log('  🧩 Checking chunk files...');

  const directories = ['lib', 'lib-cjs'];

  for (const libDir of directories) {
    const iconsPath = path.join(__dirname, libDir, 'icons');
    const sizedIconsPath = path.join(__dirname, libDir, 'sizedIcons');

    // Check icons chunks
    const iconFiles = await readdir(iconsPath);
    const iconChunks = iconFiles.filter(file => file.startsWith('chunk-'));

    assert(iconChunks.length > 0, `${libDir}/icons should have chunk files`);

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

      assert(fs.existsSync(jsFile), `${libDir}/icons/chunk-${chunkNum}.js should exist`);
      assert(fs.existsSync(dtsFile), `${libDir}/icons/chunk-${chunkNum}.d.ts should exist`);
    }

    // Check sizedIcons chunks
    const sizedIconFiles = await readdir(sizedIconsPath);
    const sizedIconChunks = sizedIconFiles.filter(file => file.startsWith('chunk-'));

    assert(sizedIconChunks.length > 0, `${libDir}/sizedIcons should have chunk files`);

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

      assert(fs.existsSync(jsFile), `${libDir}/sizedIcons/chunk-${chunkNum}.js should exist`);
      assert(fs.existsSync(dtsFile), `${libDir}/sizedIcons/chunk-${chunkNum}.d.ts should exist`);
    }

    // Check fonts/icons chunks
    const fontsIconsPath = path.join(__dirname, libDir, 'fonts', 'icons');
    const fontsIconFiles = await readdir(fontsIconsPath);
    const fontsIconChunks = fontsIconFiles.filter(file => file.startsWith('chunk-'));

    assert(fontsIconChunks.length > 0, `${libDir}/fonts/icons should have chunk files`);

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

      assert(fs.existsSync(jsFile), `${libDir}/fonts/icons/chunk-${chunkNum}.js should exist`);
      assert(fs.existsSync(dtsFile), `${libDir}/fonts/icons/chunk-${chunkNum}.d.ts should exist`);
    }

    // Check fonts/sizedIcons chunks
    const fontsSizedIconsPath = path.join(__dirname, libDir, 'fonts', 'sizedIcons');
    const fontsSizedIconFiles = await readdir(fontsSizedIconsPath);
    const fontsSizedIconChunks = fontsSizedIconFiles.filter(file => file.startsWith('chunk-'));

    assert(fontsSizedIconChunks.length > 0, `${libDir}/fonts/sizedIcons should have chunk files`);

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

      assert(fs.existsSync(jsFile), `${libDir}/fonts/sizedIcons/chunk-${chunkNum}.js should exist`);
      assert(fs.existsSync(dtsFile), `${libDir}/fonts/sizedIcons/chunk-${chunkNum}.d.ts should exist`);
    }
  }
}

/**
 * Verifies the content of chunk files using snapshot-based validation
 * @returns {Promise<void>}
 */
async function verifyChunkContents() {
  console.log('  📄 Checking chunk file contents...');

  const directories = ['lib', 'lib-cjs'];

  for (const libDir of directories) {
    const iconsPath = path.join(__dirname, libDir, 'icons');
    const sizedIconsPath = path.join(__dirname, libDir, 'sizedIcons');

    // Check icons chunk content
    const iconFiles = await readdir(iconsPath);
    const iconChunks = iconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

    if (iconChunks.length > 0) {
      // Take the first chunk for content verification
      const firstChunk = iconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        await verifyChunkFileContent(iconsPath, chunkNumber, `${libDir}/icons`);
      }
    }

    // Check sizedIcons chunk content
    const sizedIconFiles = await readdir(sizedIconsPath);
    const sizedIconChunks = sizedIconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

    if (sizedIconChunks.length > 0) {
      // Take the first chunk for content verification
      const firstChunk = sizedIconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        await verifyChunkFileContent(sizedIconsPath, chunkNumber, `${libDir}/sizedIcons`);
      }
    }

    // Check fonts/icons chunk content
    const fontsIconsPath = path.join(__dirname, libDir, 'fonts', 'icons');
    const fontsIconFiles = await readdir(fontsIconsPath);
    const fontsIconChunks = fontsIconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

    if (fontsIconChunks.length > 0) {
      // Take the first chunk for content verification
      const firstChunk = fontsIconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        await verifyFontChunkFileContent(fontsIconsPath, chunkNumber, `${libDir}/fonts/icons`);
      }
    }

    // Check fonts/sizedIcons chunk content
    const fontsSizedIconsPath = path.join(__dirname, libDir, 'fonts', 'sizedIcons');
    const fontsSizedIconFiles = await readdir(fontsSizedIconsPath);
    const fontsSizedIconChunks = fontsSizedIconFiles.filter(file => file.startsWith('chunk-') && file.endsWith('.js'));

    if (fontsSizedIconChunks.length > 0) {
      // Take the first chunk for content verification
      const firstChunk = fontsSizedIconChunks[0];
      const chunkNumber = firstChunk.match(/chunk-(\d+)\.js$/)?.[1];

      if (chunkNumber) {
        await verifyFontChunkFileContent(fontsSizedIconsPath, chunkNumber, `${libDir}/fonts/sizedIcons`);
      }
    }
  }
}

/**
 * Verifies the content of a specific chunk file (JS and DTS)
 * @param {string} chunkPath - The path to the chunk directory
 * @param {string} chunkNumber - The chunk number to verify
 * @param {string} pathDescription - Description of the path for error messages
 * @returns {Promise<void>}
 */
async function verifyChunkFileContent(chunkPath, chunkNumber, pathDescription) {
  const jsFile = path.join(chunkPath, `chunk-${chunkNumber}.js`);
  const dtsFile = path.join(chunkPath, `chunk-${chunkNumber}.d.ts`);

  // Read and verify JS file content
  const jsContent = await readFile(jsFile, 'utf8');
  const jsSnapshot = createJSChunkSnapshot(jsContent);

  // Basic validation for JS file
  assert(jsSnapshot.hasContent, `${pathDescription}/chunk-${chunkNumber}.js should not be empty`);
  assert(jsSnapshot.hasClientDirective || jsSnapshot.hasImports,
    `${pathDescription}/chunk-${chunkNumber}.js should contain imports or client directive`);
  assert(jsSnapshot.hasExports,
    `${pathDescription}/chunk-${chunkNumber}.js should contain exports`);
  assert(jsSnapshot.hasCreateFluentIcon,
    `${pathDescription}/chunk-${chunkNumber}.js should contain createFluentIcon calls`);

  // Read and verify TypeScript definition file content
  const dtsContent = await readFile(dtsFile, 'utf8');
  const dtsSnapshot = createDTSChunkSnapshot(dtsContent);

  // Basic validation for .d.ts file
  assert(dtsSnapshot.hasContent, `${pathDescription}/chunk-${chunkNumber}.d.ts should not be empty`);
  assert(dtsSnapshot.hasImports,
    `${pathDescription}/chunk-${chunkNumber}.d.ts should contain imports`);
  assert(dtsSnapshot.hasExports,
    `${pathDescription}/chunk-${chunkNumber}.d.ts should contain exports`);
  assert(dtsSnapshot.hasFluentIcon,
    `${pathDescription}/chunk-${chunkNumber}.d.ts should contain FluentIcon type`);

  console.log(`    ✓ Validated content of ${pathDescription}/chunk-${chunkNumber} files`);
  if (process.env.VERBOSE) {
    console.log(`      JS Snapshot: ${JSON.stringify(jsSnapshot, null, 2)}`);
    console.log(`      DTS Snapshot: ${JSON.stringify(dtsSnapshot, null, 2)}`);
  }
}

/**
 * Verifies the content of a specific font chunk file (JS and DTS)
 * @param {string} chunkPath - The path to the chunk directory
 * @param {string} chunkNumber - The chunk number to verify
 * @param {string} pathDescription - Description of the path for error messages
 * @returns {Promise<void>}
 */
async function verifyFontChunkFileContent(chunkPath, chunkNumber, pathDescription) {
  const jsFile = path.join(chunkPath, `chunk-${chunkNumber}.js`);
  const dtsFile = path.join(chunkPath, `chunk-${chunkNumber}.d.ts`);

  // Read and verify JS file content
  const jsContent = await readFile(jsFile, 'utf8');
  /** @type {FontJSChunkSnapshot} */
  const jsSnapshot = createFontJSChunkSnapshot(jsContent);

  // Basic validation for JS file
  assert(jsSnapshot.hasContent, `${pathDescription}/chunk-${chunkNumber}.js should not be empty`);
  assert(jsSnapshot.hasClientDirective || jsSnapshot.hasImports,
    `${pathDescription}/chunk-${chunkNumber}.js should contain imports or client directive`);
  assert(jsSnapshot.hasExports,
    `${pathDescription}/chunk-${chunkNumber}.js should contain exports`);
  assert(jsSnapshot.hasCreateFluentFontIcon,
    `${pathDescription}/chunk-${chunkNumber}.js should contain createFluentFontIcon calls`);

  // Read and verify TypeScript definition file content
  const dtsContent = await readFile(dtsFile, 'utf8');
  const dtsSnapshot = createFontDTSChunkSnapshot(dtsContent);

  // Basic validation for .d.ts file
  assert(dtsSnapshot.hasContent, `${pathDescription}/chunk-${chunkNumber}.d.ts should not be empty`);
  assert(dtsSnapshot.hasExports,
    `${pathDescription}/chunk-${chunkNumber}.d.ts should contain exports`);
  assert(dtsSnapshot.hasFluentIconsProps || dtsSnapshot.hasCodepoint,
    `${pathDescription}/chunk-${chunkNumber}.d.ts should contain FluentIconsProps or codepoint properties`);

  console.log(`    ✓ Validated content of ${pathDescription}/chunk-${chunkNumber} files`);
  if (process.env.VERBOSE) {
    console.log(`      Font JS Snapshot: ${JSON.stringify(jsSnapshot, null, 2)}`);
    console.log(`      Font DTS Snapshot: ${JSON.stringify(dtsSnapshot, null, 2)}`);
  }
}

/**
 * Verifies that font files exist in the utils/fonts directory
 * @returns {Promise<void>}
 */
async function verifyFonts() {
  console.log('  🔤 Checking font files...');

  const fontsPath = path.join(__dirname, 'lib', 'utils', 'fonts');


  // Check for different font types
  const fontTypes = ['Regular', 'Filled', 'Light', 'Resizable'];
  const fontExtensions = ['json', 'ttf', 'woff', 'woff2'];

  for (const fontType of fontTypes) {
    for (const ext of fontExtensions) {
      const fileName = `FluentSystemIcons-${fontType}.${ext}`;
      const filePath = path.join(fontsPath, fileName);
      assert(fs.existsSync(filePath), `Font file ${fileName} should exist`);

      const stats = await stat(filePath);
      assert(stats.isFile(), `${fileName} should be a file`);
      assert(stats.size > 0, `${fileName} should not be empty`);
    }
  }

  // Check font creation files
  const fontCreationFiles = [
    'createFluentFontIcon.js',
    'createFluentFontIcon.d.ts',
    'createFluentFontIcon.shared.js',
    'createFluentFontIcon.shared.d.ts'
  ];

  for (const file of fontCreationFiles) {
    const filePath = path.join(fontsPath, file);
    assert(fs.existsSync(filePath), `Font creation file ${file} should exist`);
  }
}

// Snapshot creation functions for readable chunk validation
/**
 * Creates a snapshot of a JS chunk file for validation
 * @param {string} jsContent - The content of the JS chunk file
 * @returns {JSChunkSnapshot} A snapshot object with key structural information
 */
function createJSChunkSnapshot(jsContent) {
  const lines = jsContent.split('\n');
  const firstLines = lines.slice(0, 20);

  // Extract icon names from export statements
  const iconNames = [];
  const iconRegex = /export const (\w+) = /g;
  let match;
  let sampleCount = 0;
  while ((match = iconRegex.exec(jsContent)) !== null && sampleCount < 5) {
    iconNames.push(match[1]);
    sampleCount++;
  }

  const isCommonJS = jsContent.includes('createFluentIcon_1');

  return {
    hasContent: jsContent.length > 0,
    hasClientDirective: firstLines.some(line => line.includes('"use client"')),
    hasImports: firstLines.some(line => line.includes('import')),
    hasExports: firstLines.some(line => line.includes('export') || line.includes('exports')),
    hasCreateFluentIcon: jsContent.includes('createFluentIcon') || jsContent.includes('createFluentIcon_1'),
    sampleIconNames: iconNames,
    importPattern: firstLines.find(line => line.includes('import'))?.trim() || 'Not found',
    format: isCommonJS ? 'CommonJS' : 'ESM',
    // CommonJS-specific validation
    hasRequireStatements: isCommonJS ? /require\s*\(/.test(jsContent) : undefined,
    hasExportsAssignment: isCommonJS ? /^exports\.\w+\s*=/m.test(jsContent) : undefined,
    hasStrictMode: isCommonJS ? /["']use strict["']/.test(jsContent) : undefined,
    hasEsmModuleFlag: isCommonJS ? /Object\.defineProperty\(exports,\s*"__esModule"/.test(jsContent) : undefined
  };
}

/**
 * Creates a snapshot of a TypeScript definition chunk file for validation
 * @param {string} dtsContent - The content of the DTS chunk file
 * @returns {DTSChunkSnapshot} A snapshot object with key structural information
 */
function createDTSChunkSnapshot(dtsContent) {
  const lines = dtsContent.split('\n');
  const firstLines = lines.slice(0, 15);

  // Extract icon type declarations
  const iconTypes = [];
  const typeRegex = /export declare const (\w+): /g;
  let match;
  let sampleCount = 0;
  while ((match = typeRegex.exec(dtsContent)) !== null && sampleCount < 5) {
    iconTypes.push(match[1]);
    sampleCount++;
  }

  return {
    hasContent: dtsContent.length > 0,
    hasImports: firstLines.some(line => line.includes('import')),
    hasExports: firstLines.some(line => line.includes('export')),
    hasFluentIcon: dtsContent.includes('FluentIcon'),
    sampleIconTypes: iconTypes,
    importPattern: firstLines.find(line => line.includes('import'))?.trim() || 'Not found'
  };
}

/**
 * Creates a snapshot of a font JS chunk file for validation
 * @param {string} jsContent - The content of the font JS chunk file
 * @returns {FontJSChunkSnapshot} A snapshot object with key structural information
 */
function createFontJSChunkSnapshot(jsContent) {
  const lines = jsContent.split('\n');
  const firstLines = lines.slice(0, 20);

  // Extract icon names from export statements
  const iconNames = [];
  const iconRegex = /export const (\w+) = /g;
  let match;
  let sampleCount = 0;
  while ((match = iconRegex.exec(jsContent)) !== null && sampleCount < 5) {
    iconNames.push(match[1]);
    sampleCount++;
  }

  const isCommonJS = jsContent.includes('createFluentFontIcon_1');

  return {
    hasContent: jsContent.length > 0,
    hasClientDirective: firstLines.some(line => line.includes('"use client"')),
    hasImports: firstLines.some(line => line.includes('import')),
    hasExports: firstLines.some(line => line.includes('export') || line.includes('exports')),
    hasCreateFluentFontIcon: jsContent.includes('createFluentFontIcon') || jsContent.includes('createFluentFontIcon_1'),
    sampleIconNames: iconNames,
    importPattern: firstLines.find(line => line.includes('import'))?.trim() || 'Not found',
    format: isCommonJS ? 'CommonJS' : 'ESM',
    // CommonJS-specific validation
    hasRequireStatements: isCommonJS ? /require\s*\(/.test(jsContent) : undefined,
    hasExportsAssignment: isCommonJS ? /^exports\.\w+\s*=/m.test(jsContent) : undefined,
    hasStrictMode: isCommonJS ? /["']use strict["']/.test(jsContent) : undefined,
    hasEsmModuleFlag: isCommonJS ? /Object\.defineProperty\(exports,\s*"__esModule"/.test(jsContent) : undefined
  };
}

/**
 * Creates a snapshot of a font TypeScript definition chunk file for validation
 * @param {string} dtsContent - The content of the font DTS chunk file
 * @returns {FontDTSChunkSnapshot} A snapshot object with key structural information
 */
function createFontDTSChunkSnapshot(dtsContent) {
  const lines = dtsContent.split('\n');
  const firstLines = lines.slice(0, 15);

  // Extract icon type declarations
  const iconTypes = [];
  const typeRegex = /export declare const (\w+): /g;
  let match;
  let sampleCount = 0;
  while ((match = typeRegex.exec(dtsContent)) !== null && sampleCount < 5) {
    iconTypes.push(match[1]);
    sampleCount++;
  }

  return {
    hasContent: dtsContent.length > 0,
    hasExports: firstLines.some(line => line.includes('export')),
    hasFluentIconsProps: dtsContent.includes('FluentIconsProps'),
    hasCodepoint: dtsContent.includes('codepoint'),
    sampleIconTypes: iconTypes,
    typePattern: firstLines.find(line => line.includes('export declare'))?.trim() || 'Not found'
  };
}