// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { execSync } = require('node:child_process');
const fs = require('node:fs');
const { join, dirname } = require('node:path');

main({ root: join(__dirname, '..') });

/**
 * Builds source TypeScript to ESM (`lib/`) and CommonJS (`lib-cjs/`) outputs.
 *
 * @param {{ root: string; }} options
 */
function main(options) {
  const projectRoot = options.root;

  transpileTsc({ moduleFormat: 'esnext', outDir: 'lib' }, projectRoot);
  transpileTsc({ moduleFormat: 'commonjs', outDir: 'lib-cjs' }, projectRoot);

  // tsc does not emit non-TS assets — copy the opt-in headless CSS into both outputs.
  copyAsset(join('src', 'headless', 'styles.css'), join('lib', 'headless', 'styles.css'), projectRoot);
  copyAsset(join('src', 'headless', 'styles.css'), join('lib-cjs', 'headless', 'styles.css'), projectRoot);
}

/**
 * Copies a file from `from` to `to` (both relative to `baseDir`), creating directories as needed.
 *
 * @param {string} from
 * @param {string} to
 * @param {string} baseDir
 */
function copyAsset(from, to, baseDir) {
  const dest = join(baseDir, to);
  console.log(`Copying asset ${from} -> ${to}`);
  fs.mkdirSync(dirname(dest), { recursive: true });
  fs.copyFileSync(join(baseDir, from), dest);
}

/**
 * @param {{moduleFormat:'esnext'|'commonjs'; outDir:string}} options
 * @param {string} baseDir
 */
function transpileTsc(options, baseDir) {
  const { moduleFormat, outDir } = options;
  console.log(`Transpiling module format [${moduleFormat}] to -> ${outDir}/`);
  const cmd = `npx tsc -p ./tsconfig.lib.json --module ${moduleFormat} --outDir ${outDir}`;
  return execSync(cmd, { stdio: 'inherit', cwd: baseDir });
}
