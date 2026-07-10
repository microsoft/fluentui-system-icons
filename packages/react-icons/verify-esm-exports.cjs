// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @fileoverview
 * CommonJS counterpart of `verify-esm-exports.mjs`: end-to-end verification that
 * every `@fluentui/react-icons` `exports` subpath resolves and loads via real
 * `require()` (the `require` condition → `lib-cjs/*.cjs`) in a bare Node process.
 *
 * Same two tiers as the ESM verifier: SVG/utility/provider/headless(non-font)
 * entries are actually `require()`-ed and asserted to expose exports; font and
 * `.css` entries are resolve-only (font graphs pull in binary `.ttf`/`.woff`
 * assets, `.css` is not JavaScript). Pass `--font` with
 * `node --conditions=fluentIconFont` to verify condition routing to the font build.
 */

'use strict';

const { existsSync } = require('node:fs');

const pkg = require('./package.json');
const name = pkg.name;
const fontMode = process.argv.includes('--font');

/** @returns {Array<{ key: string, spec: string, isCss: boolean }>} */
function deriveEntries() {
  return Object.keys(pkg.exports).map((key) => {
    const sub = key === '.' ? '' : key.slice(1);
    const spec = name + (key.includes('*') ? sub.replace('*', 'access-time') : sub);
    return { key, spec, isCss: key.endsWith('.css') };
  });
}

/** Font module graphs require binary `.ttf`/`.woff` assets → bundler-only, not bare-Node loadable. */
const isFontTarget = (/** @type {string} */ p) => /fonts/i.test(p);

let failures = 0;

for (const { key, spec, isCss } of deriveEntries()) {
  try {
    // Real CJS resolution through the package `exports` map (honors --conditions).
    const resolvedPath = require.resolve(spec);
    if (!existsSync(resolvedPath)) {
      throw new Error(`export map resolved to a missing file: ${resolvedPath}`);
    }

    if (isCss) {
      console.log(`  ✓ resolve-only  ${key}  ->  ${spec}  (css asset)`);
    } else if (isFontTarget(resolvedPath)) {
      console.log(`  ✓ resolve-only  ${key}  ->  ${spec}  (font/binary-asset graph)`);
    } else {
      // True bare-Node CJS load — no bundler, no shims.
      const mod = require(spec);
      const names = Object.keys(mod);
      if (names.length === 0) {
        throw new Error('module required but exposed no exports');
      }
      console.log(`  ✓ loaded        ${key}  ->  ${spec}  (${names.length} exports)`);
    }
  } catch (err) {
    failures++;
    console.error(`  ✗ FAIL          ${key}  ->  ${spec}\n       ${err && err.message ? err.message : err}`);
  }
}

// Prove the `fluentIconFont` condition routes the barrel to the font build.
try {
  const rootPath = require.resolve(name);
  const routedToFont = isFontTarget(rootPath);
  if (routedToFont !== fontMode) {
    throw new Error(`"." resolved to ${rootPath} (fonts=${routedToFont}); expected fonts=${fontMode}`);
  }
  console.log(`  ✓ condition     "."  ->  ${routedToFont ? 'font' : 'svg'} build (fontMode=${fontMode})`);
} catch (err) {
  failures++;
  console.error(`  ✗ FAIL          condition routing\n       ${err && err.message ? err.message : err}`);
}

const label = fontMode ? '[cjs · fluentIconFont]' : '[cjs · default]';
console.log(`${label} ${failures === 0 ? 'ALL OK' : `${failures} FAILED`}`);
process.exit(failures === 0 ? 0 : 1);
