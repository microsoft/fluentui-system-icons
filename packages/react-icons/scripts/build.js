// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { execSync } = require('node:child_process');
const { copyFileSync, existsSync, readFileSync, writeFileSync } = require('node:fs');
const { join, basename } = require('node:path');

const glob = require('glob');

const { fullySpecifyEsm, finalizeCjs, esmFirstEntry } = require('./module-format');

main({ root: join(__dirname, '..') }).catch((error) => {
  console.error(error);
  process.exit(1);
});

/**
 * Builds source TypeScript and copies assets to the output directories.
 *
 * It transpiles TypeScript files to both ESNext and CommonJS formats and copies the
 * font binaries and the shipped stylesheets.
 *
 * @param {{ root: string; }} options
 */
async function main(options) {
  const projectRoot = options.root;

  transpileTsc({ moduleFormat: 'esnext', outDir: 'lib' }, projectRoot);
  transpileTsc({ moduleFormat: 'commonjs', outDir: 'lib-cjs' }, projectRoot);

  // The base stylesheet. Every icon depends on it — see `src/styles.css`.
  copyAssets('src/styles.css', './lib', projectRoot);
  copyAssets('src/styles.css', './lib-cjs', projectRoot);

  // Font binaries plus the `@font-face` stylesheet that references them by relative URL,
  // which is what puts the font files into a consumer bundler's dependency graph.
  copyAssets('src/utils/fonts/*.{ttf,woff,woff2,json,css}', './lib/utils/fonts', projectRoot);
  copyAssets('src/utils/fonts/*.{ttf,woff,woff2,json,css}', './lib-cjs/utils/fonts', projectRoot);

  // Sprite assets: only copy when sprite generation was enabled
  const spriteSrcDir = join(projectRoot, 'src/atoms/svg-sprite');
  if (existsSync(spriteSrcDir)) {
    copyAssets('src/atoms/svg-sprite/*.svg', './lib/atoms/svg-sprite', projectRoot);
    copyAssets('src/atoms/svg-sprite/*.svg', './lib-cjs/atoms/svg-sprite', projectRoot);
    addSpriteExportMap(projectRoot);
  }

  // Last on purpose: the package is `"type": "module"`, so once `lib-cjs/` is renamed to
  // `.cjs` nothing above may resolve it as a plain `.js` file anymore.
  //
  // Upstream runs a Babel pass over `**/*.styles.js` here to apply the Griffel AOT preset.
  // This package no longer has a CSS-in-JS runtime — styling is `data-fui-icon*` attributes
  // resolved by `src/styles.css` — so there are no `.styles.js` files to transform and the
  // pass is deliberately not carried over.
  await fullySpecifyEsm(join(projectRoot, 'lib'));
  await finalizeCjs(join(projectRoot, 'lib-cjs'));
}

// =================================================================================================

/**
 *
 * @param {{moduleFormat:'esnext'|'commonjs'; outDir:string}} options
 * @param {string} baseDir
 */
function transpileTsc(options, baseDir) {
  const { moduleFormat, outDir } = options;
  console.log(`Transpiling module format [${moduleFormat}] to -> ${outDir}/`);
  // `yarn` (not `yarn -T`) so this resolves the typescript pinned by this package.
  const cmd = `yarn tsc -p ./tsconfig.lib.json --module ${moduleFormat} --outDir ${outDir}`;
  return execSync(cmd, { stdio: 'inherit', cwd: baseDir });
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
 * Adds the `./svg-sprite/*` export map entry to package.json when sprite generation is enabled,
 * together with its deprecated `./headless/svg-sprite/*` alias.
 *
 * NOTE: will be part of package.json once svg-sprite is stable. then we can remove this dynamic addition and the related build logic that copies sprite assets.
 * @param {string} baseDir
 */
function addSpriteExportMap(baseDir) {
  const pkgPath = join(baseDir, 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));

  const spriteExportKey = './svg-sprite/*';
  // Sprite atoms are no longer generated twice — the default ones are the headless ones —
  // so the headless subpath is an alias, kept for one transition release.
  const headlessSpriteExportKey = './headless/svg-sprite/*';

  if (pkg.exports[spriteExportKey] && pkg.exports[headlessSpriteExportKey]) {
    console.log(`  ✓ [exports] ${spriteExportKey} already present`);
    return;
  }

  const target = esmFirstEntry('./lib/atoms/svg-sprite/*.js');

  pkg.exports[spriteExportKey] = target;
  pkg.exports[headlessSpriteExportKey] = { ...target };

  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`  ✓ [exports] Added ${spriteExportKey} and ${headlessSpriteExportKey} to package.json`);
}
