// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { execSync } = require('node:child_process');
const { copyFileSync, existsSync, readFileSync, writeFileSync } = require('node:fs');
const { join, basename } = require('node:path');

const glob = require('glob');
const { transformSync } = require('@babel/core');

main();

/**
 * Builds source TypeScript and copys assets to the output directories.
 *
 * It transpiles TypeScript files to both ESNext and CommonJS formats,
 * applies Babel transformations, and copies font assets.
 * It also creates raw style copies for .styles.js files.
 */
function main() {
  const projectRoot = __dirname;

  transpileTsc({ moduleFormat: 'esnext', outDir: 'lib' }, projectRoot);
  transpileTsc({ moduleFormat: 'commonjs', outDir: 'lib-cjs' }, projectRoot);

  // Font assets must be copied before babel transform — Griffel/Linaria evaluates
  // the compiled JS in a VM and resolves font file imports via require().
  copyAssets('src/utils/fonts/*.{ttf,woff,woff2,json}', './lib/utils/fonts', projectRoot);
  copyAssets('src/utils/fonts/*.{ttf,woff,woff2,json}', './lib-cjs/utils/fonts', projectRoot);

  // Sprite assets: only copy when sprite generation was enabled
  const spriteSrcDir = join(projectRoot, 'src/atoms/svg-sprite');
  if (existsSync(spriteSrcDir)) {
    copyAssets('src/atoms/svg-sprite/*.svg', './lib/atoms/svg-sprite', projectRoot);
    copyAssets('src/atoms/svg-sprite/*.svg', './lib-cjs/atoms/svg-sprite', projectRoot);
    addSpriteExportMap(projectRoot);
  }

  // Headless assets: only copy when headless generation was enabled
  const headlessSvgSrcDir = join(projectRoot, 'src/atoms/headless-svg');
  if (existsSync(headlessSvgSrcDir)) {
    const headlessSpriteSrcDir = join(projectRoot, 'src/atoms/headless-svg-sprite');
    if (existsSync(headlessSpriteSrcDir)) {
      copyAssets('src/atoms/headless-svg-sprite/*.svg', './lib/atoms/headless-svg-sprite', projectRoot);
      copyAssets('src/atoms/headless-svg-sprite/*.svg', './lib-cjs/atoms/headless-svg-sprite', projectRoot);
    }
    copyAssets('src/headless/*.css', './lib/headless', projectRoot);
    copyAssets('src/headless/fonts/*.css', './lib/headless/fonts', projectRoot);
    copyAssets('src/headless/*.css', './lib-cjs/headless', projectRoot);
    copyAssets('src/headless/fonts/*.css', './lib-cjs/headless/fonts', projectRoot);
    addHeadlessExportMap(projectRoot);
  }

  applyBabelTransform('lib', projectRoot);
  applyBabelTransform('lib-cjs', projectRoot);
}

// =================================================================================================

/**
 *
 * @param {string} styleFile
 */

function createRawStylesCopy(styleFile) {
  const sourcePath = join(styleFile);
  const targetPath = styleFile.replace('.styles.js', '.styles.raw.js');

  try {
    copyFileSync(sourcePath, targetPath);
    console.log(`  ✓ [raw style] ${styleFile} -> ${basename(targetPath)}`);
  } catch (error) {
    console.error(`  ✗ Failed to copy ${styleFile}:`, /** @type {Error} */ (error).message);
  }
}

/**
 *
 * @param {{moduleFormat:'esnext'|'commonjs'; outDir:string}} options
 * @param {string} baseDir
 */
function transpileTsc(options, baseDir) {
  const { moduleFormat, outDir } = options;
  console.log(`Transpiling module format [${moduleFormat}] to -> ${outDir}/`);
  const cmd = `npx tsc -p ./tsconfig.lib.json --module ${moduleFormat} --outDir ${outDir}`;
  return execSync(cmd, { stdio: 'inherit', cwd: baseDir });
}

/**
 *
 * @param {string} root
 * @param {string} baseDir
 */
function applyBabelTransform(root, baseDir) {
  const EOL_REGEX = /\r?\n/g;
  const griffelPreset = [['@griffel']];

  const jsRoot = join(baseDir, root);

  console.log(`Processing .js files with babel in ${jsRoot}:`);
  /** @type {string[]} */
  const jsFiles = glob.sync('**/*.styles.js', { cwd: jsRoot });

  for (const filename of jsFiles) {
    const filePath = join(jsRoot, filename);

    createRawStylesCopy(filePath);

    const codeBuffer = readFileSync(filePath);
    const sourceCode = codeBuffer.toString().replace(EOL_REGEX, '\n');

    const result = transformSync(sourceCode, {
      ast: false,
      sourceMaps: true,
      babelrc: true,
      // to avoid leaking of global configs
      babelrcRoots: [baseDir],
      filename: filePath,
      presets: griffelPreset,
    });

    const resultCode = result?.code;

    if (!resultCode) {
      console.warn(`No code generated for ${filename}. Skipping.`);
      continue;
    }

    const prefix = '  ✓ [griffel]';
    console.log(`${prefix} ${filename}`);
    writeFileSync(filePath, resultCode);
  }
}

/**
 *
 * @param {string} src - globs of files to copy
 * @param {string} dest
 * @param {string} baseDir
 */
function copyAssets(src, dest, baseDir) {
  /** @type {string[]} */
  const assets = glob.sync(src, { cwd: baseDir });
  console.log(`Copying ${src} assets to -> ${dest}:`);

  assets.forEach((file) => {
    const sourcePath = join(baseDir, file);
    const targetPath = join(baseDir, dest, basename(file));

    try {
      copyFileSync(sourcePath, targetPath);
      console.log(`  ✓ ${file}`);
    } catch (error) {
      console.error(`  ✗ Failed to copy ${file}:`, /** @type {Error} */ (error).message);
    }
  });
}

/**
 * Adds the `./svg-sprite/*` export map entry to package.json when sprite generation is enabled.
 *
 * NOTE: will be part of package.json once svg-sprite is stable. then we can remove this dynamic addition and the related build logic that copies sprite assets.
 * @param {string} baseDir
 */
function addSpriteExportMap(baseDir) {
  const pkgPath = join(baseDir, 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));

  const spriteExportKey = './svg-sprite/*';

  if (pkg.exports[spriteExportKey]) {
    console.log(`  ✓ [exports] ${spriteExportKey} already present`);
    return;
  }

  pkg.exports[spriteExportKey] = {
    types: './lib/atoms/svg-sprite/*.d.ts',
    import: './lib/atoms/svg-sprite/*.js',
    require: './lib-cjs/atoms/svg-sprite/*.js',
  };

  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`  ✓ [exports] Added ${spriteExportKey} to package.json`);
}

/**
 * Adds headless export map entries to package.json when headless generation is enabled.
 *
 * NOTE: will be part of package.json once headless is stable. then we can remove this dynamic addition and the related build logic that copies headless assets.
 * @param {string} baseDir
 */
function addHeadlessExportMap(baseDir) {
  const pkgPath = join(baseDir, 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));

  /** @type {Record<string, string | {types: string; import: string; require: string}>} */
  const headlessExports = {
    './headless': {
      types: './lib/headless/index.d.ts',
      import: './lib/headless/index.js',
      require: './lib-cjs/headless/index.js',
    },
    './headless/fonts': {
      types: './lib/headless/fonts/index.d.ts',
      import: './lib/headless/fonts/index.js',
      require: './lib-cjs/headless/fonts/index.js',
    },
    './headless/headless.css': './lib/headless/headless.css',
    './headless/headless-fonts.css': './lib/headless/fonts/headless-fonts.css',
    './headless/svg/*': {
      types: './lib/atoms/headless-svg/*.d.ts',
      import: './lib/atoms/headless-svg/*.js',
      require: './lib-cjs/atoms/headless-svg/*.js',
    },
    './headless/svg-sprite/*': {
      types: './lib/atoms/headless-svg-sprite/*.d.ts',
      import: './lib/atoms/headless-svg-sprite/*.js',
      require: './lib-cjs/atoms/headless-svg-sprite/*.js',
    },
    './headless/fonts/*': {
      types: './lib/atoms/headless-fonts/*.d.ts',
      import: './lib/atoms/headless-fonts/*.js',
      require: './lib-cjs/atoms/headless-fonts/*.js',
    },
  };

  // Add headless export maps
  Object.assign(pkg.exports, headlessExports);
  console.log(`  ✓ [exports] Set ${Object.keys(headlessExports).join(', ')}`);

  // Add headless CSS sideEffects entries
  const headlessSideEffects = ['**/headless/fonts/headless-fonts.css', '**/headless/headless.css'];
  pkg.sideEffects = [...headlessSideEffects];
  console.log(`  ✓ [sideEffects] Added ${headlessSideEffects.join(', ')}`);

  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
}
