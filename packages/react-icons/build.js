// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { execSync } = require('node:child_process');
const { copyFileSync, readFileSync, writeFileSync } = require('node:fs');
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
function main(){
  const projectRoot = __dirname;

  transpileTsc({ moduleFormat: 'esnext', outDir: 'lib' },projectRoot);
  transpileTsc({ moduleFormat: 'commonjs', outDir: 'lib-cjs' },projectRoot);

  applyBabelTransform('lib', projectRoot);
  applyBabelTransform('lib-cjs', projectRoot);

  copyAssets('src/utils/fonts/*.{ttf,woff,woff2,json}', './lib/utils/fonts', projectRoot);
  copyAssets('src/utils/fonts/*.{ttf,woff,woff2,json}', './lib-cjs/utils/fonts', projectRoot);

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
    console.error(`  ✗ Failed to copy ${styleFile}:`, error.message);
  }

}

/**
 *
 * @param {{moduleFormat:'esnext'|'commonjs'; outDir:string}} options
 * @param {string} baseDir
 */
function transpileTsc(options, baseDir) {
 const {moduleFormat,outDir} = options;
  console.log(`Transpiling module format [${moduleFormat}] to -> ${outDir}/`);
  const cmd = `npx tsc -p . --module ${moduleFormat} --outDir ${outDir}`;
  return execSync(cmd, {stdio: 'inherit', cwd: baseDir});
}

/**
 *
 * @param {string} root
 * @param {string} baseDir
 */
function applyBabelTransform(root, baseDir) {
  const EOL_REGEX = /\r?\n/g;
  const griffelPreset = [
    ['@griffel']
  ];

  const jsRoot = join(baseDir,root)

  console.log(`Processing .js files with babel in ${jsRoot}:`);
  const jsFiles = glob.sync('**/*.styles.js', { cwd: jsRoot });


  for (const filename of jsFiles) {

    const filePath = join(jsRoot, filename);

    createRawStylesCopy(filePath)

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
function copyAssets(src, dest, baseDir){

  const assets = glob.sync(src, { cwd: baseDir });
  console.log(`Copying ${src} assets to -> ${dest}:`);

  assets.forEach(file => {
    const sourcePath = join(baseDir, file);
    const targetPath = join(baseDir,dest, basename(file));

    try {
      copyFileSync(sourcePath, targetPath);
      console.log(`  ✓ ${file}`);
    } catch (error) {
      console.error(`  ✗ Failed to copy ${file}:`, error.message);
    }
  });
}

