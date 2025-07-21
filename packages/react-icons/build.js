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
  const cmd = {
    esm: 'npx tsc --outDir lib',
    cjs: 'npx tsc --module commonjs --outDir lib-cjs',
  }

  console.log('Transpiling ESM to -> lib/');
  execSync(cmd.esm, {stdio: 'inherit', cwd: projectRoot});
  console.log('Transpiling CJS to -> lib-cjs/');
  execSync(cmd.cjs, {stdio: 'inherit', cwd: projectRoot});

  const styles = {
    esm: glob.sync('lib/**/*.styles.js',{cwd: join(projectRoot)}),
    cjs: glob.sync('lib-cjs/**/*.styles.js',{cwd: join(projectRoot)}),
  };

  console.log('Found styles files:', styles);

  // Create raw copies of styles files
  if (styles.esm.length > 0) {
    createRawStylesCopies(styles.esm, projectRoot);
    applyGriffelTransform(styles.esm, projectRoot);
  }


  if (styles.cjs.length > 0) {
    createRawStylesCopies(styles.cjs, projectRoot);
    applyGriffelTransform(styles.cjs, projectRoot);
  }

  const assets = glob.sync('src/utils/fonts/*.{ttf,woff,woff2,json}', { cwd: projectRoot });
  copyAssets(assets, './lib/utils/fonts', projectRoot);
  copyAssets(assets, './lib-cjs/utils/fonts', projectRoot);

}

// =================================================================================================

/**
 *
 * @param {string[]} styleFiles
 * @param {string} baseDir
 */

function createRawStylesCopies(styleFiles, baseDir) {
  console.log(`Creating .styles.raw.js copies in ${baseDir}:`);

  styleFiles.forEach(file => {
    const sourcePath = join(baseDir, file);
    const targetPath = sourcePath.replace('.styles.js', '.styles.raw.js');

    try {
      copyFileSync(sourcePath, targetPath);
      console.log(`  ✓ ${file} -> ${basename(targetPath)}`);
    } catch (error) {
      console.error(`  ✗ Failed to copy ${file}:`, error.message);
    }
  });
}

/**
 *
 * @param {string[]} styleFiles
 * @param {string} baseDir
 */
function applyGriffelTransform(styleFiles, baseDir) {
  console.log(`Preprocessing .styles.js with @griffel in ${baseDir}:`);
  const EOL_REGEX = /\r?\n/g;
  const griffelPreset = [
    ['@griffel']
  ];

  for (const filename of styleFiles) {
    const filePath = join(baseDir, filename);

    const codeBuffer = readFileSync(filePath);
    const sourceCode = codeBuffer.toString().replace(EOL_REGEX, '\n');

    const result = transformSync(sourceCode, {
      ast: false,
      sourceMaps: true,

      babelrc: false,
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

    console.log(`  ✓ ${filename}`);
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

