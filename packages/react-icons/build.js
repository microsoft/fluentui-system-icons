// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { execSync } = require('node:child_process');
const { copyFileSync, readFileSync, writeFileSync,cpSync } = require('node:fs');
const { join, basename } = require('node:path');

const glob = require('glob');
const { transformSync } = require('@babel/core');

main();

function main(){
  const projectRoot = join(__dirname);
  const cmd = {
    esm: './node_modules/.bin/tsc --outDir lib',
    cjs: './node_modules/.bin/tsc --module commonjs --outDir lib-cjs',
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

  // Copy pre-generated icon chunks
  copyPreGeneratedIcons(projectRoot);
  transpileGeneratedEsmToCjs(projectRoot);

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
 * @param {string[]} assetsFiles
 * @param {string} dest
 * @param {string} baseDir
 */
function copyAssets(assetsFiles, dest, baseDir){
  console.log(`Copying assets to ${dest}:`);
  assetsFiles.forEach(file => {
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

/**
 * Copy pre-generated icon chunks to output directories
 * @param {string} projectRoot
 */
function copyPreGeneratedIcons(projectRoot) {
  console.log('Copying pre-generated icon chunks:');

  /**
   * Copy chunks from a glob pattern
   * @param {string} pattern - Glob pattern to match files
   */
  function copyChunks(pattern) {
    const chunks = glob.sync(pattern, { cwd: projectRoot });
    chunks.forEach(file => {
      const sourcePath = join(projectRoot, file);
      const esmTargetPath = join(projectRoot, 'lib', file.replace('src/', ''));
      const cjsTargetPath = join(projectRoot, 'lib-cjs', file.replace('src/', ''));

      try {
        cpSync(sourcePath, esmTargetPath, { recursive: true });
        // avoid copying ESM files to CJS
        if (!cjsTargetPath.endsWith('.js')) {
          cpSync(sourcePath, cjsTargetPath, { recursive: true });
        }
        console.log(`  ✓ ${file}`);
      } catch (error) {
        console.error(`  ✗ Failed to copy ${file}:`, error.message);
      }
    });
  }

  // Copy all icon types
  copyChunks('src/icons/chunk-*.{js,d.ts}');
  copyChunks('src/sizedIcons/chunk-*.{js,d.ts}');
  copyChunks('src/fonts/**/chunk-*.{js,d.ts}');
  copyChunks('src/fonts/index.{js,d.ts}');
  copyChunks('src/index.{js,d.ts}');
}

/**
 *
 * @param {string} projectRoot
 */
function transpileGeneratedEsmToCjs(projectRoot){
  console.log(`Transpiling generated ESM to CJS to 'lib-cjs/':`);
  execSync(`npx --yes -p typescript@5.6 -c 'tsc -p tsconfig.generated-cjs.json'`, {stdio: 'inherit', cwd: projectRoot});
}

