// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { execSync } = require('node:child_process');
const { copyFileSync, readFileSync, writeFileSync } = require('node:fs');
const { join, basename } = require('node:path');

const glob = require('glob');
const { transformSync } = require('@babel/core');

main();

function main(){
  const projectRoot = join(__dirname);

  transpileTsc(projectRoot, { moduleFormat: 'esnext', outDir: 'lib' });
  transpileTsc(projectRoot, { moduleFormat: 'commonjs', outDir: 'lib-cjs' });

  applyBabelTransform('lib', projectRoot);
  applyBabelTransform('lib-cjs', projectRoot);

  const assets = glob.sync('src/utils/fonts/*.{ttf,woff,woff2,json}', { cwd: projectRoot });
  copyAssets(assets, './lib/utils/fonts', projectRoot);
  copyAssets(assets, './lib-cjs/utils/fonts', projectRoot);

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
 * @param {string} baseDir
 * @param {{moduleFormat:'esnext'|'commonjs'; outDir:string}} options
 */
function transpileTsc(baseDir,options) {
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
  const jsFiles = glob.sync('**/*.js', { cwd: jsRoot });


  for (const filename of jsFiles) {
    const isStylesFile = filename.endsWith('.styles.js');
    const filePath = join(jsRoot, filename);

    if (isStylesFile) {
      createRawStylesCopy(filePath)
    };

    const codeBuffer = readFileSync(filePath);
    const sourceCode = codeBuffer.toString().replace(EOL_REGEX, '\n');

    const result = transformSync(sourceCode, {
      ast: false,
      sourceMaps: true,
      babelrc: true,
      // to avoid leaking of global configs
      babelrcRoots: [baseDir],
      filename: filePath,
      // Only apply @griffel preset to .styles.js files
      presets: isStylesFile ? griffelPreset : [],
    });

    const resultCode = result?.code;

    if (!resultCode) {
      console.warn(`No code generated for ${filename}. Skipping.`);
      continue;
    }

    const prefix = isStylesFile ? '  ✓ [griffel]' : '  ✓ [babel]';
    console.log(`${prefix} ${filename}`);
    writeFileSync(filePath, resultCode);
  }
}

/**
 *
 * @param {string[]} src
 * @param {string} dest
 * @param {string} baseDir
 */
function copyAssets(src, dest, baseDir){


  console.log(`Copying assets to ${dest}:`);
  src.forEach(file => {
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

