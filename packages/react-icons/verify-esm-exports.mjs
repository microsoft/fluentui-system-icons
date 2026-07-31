// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @fileoverview
 * End-to-end verification that every `@fluentui/react-icons` `exports` subpath
 * resolves and loads under **real, bare Node ESM** (no bundler, no vitest resolver).
 *
 * Run directly by a spawned `node` process (see `esm-exports.smoke.test.js`), so a
 * pass proves the published export map + fully-specified ESM output genuinely work
 * for Node's native ESM resolver — the core guarantee of the ESM-first packaging.
 *
 * Two tiers, derived automatically from `package.json#exports` (so new/dynamic
 * subpaths like the sprite entries are covered without editing this file):
 *
 * - **loaded**: SVG/utility/provider/headless(non-font) entries are actually
 *   `import()`-ed and asserted to expose named exports. This is the true bare-Node
 *   ESM proof for the surface the ESM-first change targets.
 * - **resolve-only**: font entries and `.css` entries are only *resolved* (not
 *   imported). Font modules transitively `import './*.ttf'|'*.woff'` (binary assets
 *   that only a bundler can load), and `.css` is not JavaScript — neither is meant
 *   to load in bare Node. We still assert their export-map target is a real,
 *   fully-specified file on disk.
 *
 * Pass `--font` (together with `node --conditions=fluentIconFont`) to verify the
 * custom condition routes the barrel to the font build.
 */

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
/** @type {{ name: string, exports: Record<string, unknown> }} */
const pkg = JSON.parse(readFileSync(join(here, 'package.json'), 'utf8'));
const name = pkg.name;
const fontMode = process.argv.includes('--font');

/**
 * Derive a concrete import specifier for each `exports` subpath key. Wildcards are
 * substituted with a known icon group that exists in every atom flavor.
 * @returns {Array<{ key: string, spec: string, isCss: boolean }>}
 */
function deriveEntries() {
  return Object.keys(pkg.exports).map((key) => {
    const sub = key === '.' ? '' : key.slice(1); // drop leading '.'
    const spec = name + (key.includes('*') ? sub.replace('*', 'access-time') : sub);
    return { key, spec, isCss: key.endsWith('.css') };
  });
}

/** Font module graphs import binary `.ttf`/`.woff` assets → bundler-only, not bare-Node loadable. */
const isFontTarget = (/** @type {string} */ p) => /fonts/i.test(p);

let failures = 0;

for (const { key, spec, isCss } of deriveEntries()) {
  try {
    // Real ESM resolution through the package `exports` map (honors --conditions).
    const resolvedPath = fileURLToPath(import.meta.resolve(spec));
    if (!existsSync(resolvedPath)) {
      throw new Error(`export map resolved to a missing file: ${resolvedPath}`);
    }

    if (isCss) {
      console.log(`  ✓ resolve-only  ${key}  ->  ${spec}  (css asset)`);
    } else if (isFontTarget(resolvedPath)) {
      console.log(`  ✓ resolve-only  ${key}  ->  ${spec}  (font/binary-asset graph)`);
    } else {
      // True bare-Node ESM load — no bundler, no shims.
      const mod = await import(spec);
      const names = Object.keys(mod);
      if (names.length === 0) {
        throw new Error('module loaded but exposed no named exports');
      }
      console.log(`  ✓ loaded        ${key}  ->  ${spec}  (${names.length} exports)`);
    }
  } catch (/** @type {any} */ err) {
    failures++;
    console.error(`  ✗ FAIL          ${key}  ->  ${spec}\n       ${err?.message ?? err}`);
  }
}

// Prove the `fluentIconFont` condition routes the barrel to the font build (and the
// default condition to the SVG build). Resolution honors the active `--conditions`.
try {
  const rootPath = fileURLToPath(import.meta.resolve(name));
  const routedToFont = isFontTarget(rootPath);
  if (routedToFont !== fontMode) {
    throw new Error(`"." resolved to ${rootPath} (fonts=${routedToFont}); expected fonts=${fontMode}`);
  }
  console.log(`  ✓ condition     "."  ->  ${routedToFont ? 'font' : 'svg'} build (fontMode=${fontMode})`);
} catch (/** @type {any} */ err) {
  failures++;
  console.error(`  ✗ FAIL          condition routing\n       ${err?.message ?? err}`);
}

const label = fontMode ? '[esm · fluentIconFont]' : '[esm · default]';
console.log(`${label} ${failures === 0 ? 'ALL OK' : `${failures} FAILED`}`);
process.exit(failures === 0 ? 0 : 1);
