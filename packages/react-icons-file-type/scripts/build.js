// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { execSync } = require('node:child_process');
const { join } = require('node:path');

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
