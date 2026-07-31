// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @fileoverview
 * Post-`tsc` codemods that make the emitted output valid under `"type": "module"`:
 *
 * - `fullySpecifyEsm(dir)` rewrites every relative import/export specifier in the
 *   ESM output (`lib/`) to be *fully specified* (`./x` -> `./x.js`, directory ->
 *   `./x/index.js`). TypeScript 4.x cannot emit extensions, so bare-Node ESM
 *   (and strict bundler resolution) would otherwise reject the output.
 * - `finalizeCjs(dir)` turns the CommonJS output (`lib-cjs/`) into `.cjs`/`.d.cts`
 *   files (required once the package is `"type": "module"`, where a bare `.js`
 *   would be interpreted as ESM) and rewrites its relative `require()`/type
 *   specifiers to point at the renamed files.
 */

const { readdirSync, readFileSync, writeFileSync, existsSync, renameSync } = require('node:fs');
const { join, dirname } = require('node:path');

/**
 * Recursively collect files under `dir` whose basename matches `predicate`.
 * @param {string} dir
 * @param {(name: string) => boolean} predicate
 * @returns {string[]}
 */
function collectFiles(dir, predicate) {
  /** @type {string[]} */
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectFiles(full, predicate));
    } else if (predicate(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

// Relative specifiers that already carry a resolvable extension must be left alone.
const HAS_KNOWN_EXT = /\.(c?js|mjs|json|css|svg|ttf|woff2?|node)$/;

/**
 * Resolve an extensionless relative specifier to a fully-specified one by probing disk.
 * @param {string} fileDir - absolute directory of the importing file
 * @param {string} spec - relative specifier (starts with `./` or `../`)
 * @param {string} ext - extension to append (`.js` | `.cjs`)
 * @returns {string | null} fully-specified specifier, or `null` if it can't be resolved
 */
function specify(fileDir, spec, ext) {
  if (HAS_KNOWN_EXT.test(spec)) {
    return spec;
  }
  const target = join(fileDir, spec);
  if (existsSync(target + ext)) {
    return spec + ext;
  }
  if (existsSync(join(target, `index${ext}`))) {
    return `${spec}/index${ext}`;
  }
  return null;
}

/**
 * Rewrite every relative module specifier in `code` to be fully specified.
 * Handles `import ... from`, `export ... from`, side-effect `import '...'`,
 * dynamic `import('...')` and CommonJS `require('...')`.
 * @param {string} code
 * @param {string} fileDir - absolute directory of the file being processed
 * @param {string} ext - extension to append (`.js` | `.cjs`)
 * @param {string} filePath - for warnings
 * @returns {string}
 */
function rewriteSpecifiers(code, fileDir, ext, filePath) {
  /** @param {string} spec */
  const map = (spec) => {
    const resolved = specify(fileDir, spec, ext);
    if (resolved === null) {
      console.warn(`  ! [module-format] could not resolve '${spec}' in ${filePath}`);
      return spec;
    }
    return resolved;
  };

  return (
    code
      // import/export ... from '<relative>'
      .replace(/(\bfrom\s*)(['"])(\.\.?\/[^'"]*)\2/g, (_m, pre, q, spec) => `${pre}${q}${map(spec)}${q}`)
      // dynamic import('<relative>')
      .replace(/(\bimport\s*\(\s*)(['"])(\.\.?\/[^'"]*)\2/g, (_m, pre, q, spec) => `${pre}${q}${map(spec)}${q}`)
      // side-effect import '<relative>'
      .replace(/(\bimport\s+)(['"])(\.\.?\/[^'"]*)\2/g, (_m, pre, q, spec) => `${pre}${q}${map(spec)}${q}`)
      // CommonJS require('<relative>')
      .replace(/(\brequire\s*\(\s*)(['"])(\.\.?\/[^'"]*)\2/g, (_m, pre, q, spec) => `${pre}${q}${map(spec)}${q}`)
  );
}

/**
 * Make the ESM output in `dir` valid native ESM by fully specifying every
 * relative import/export specifier in `*.js` and `*.d.ts` files.
 * @param {string} dir - absolute path to the ESM output directory (e.g. `lib`)
 */
function fullySpecifyEsm(dir) {
  const files = collectFiles(dir, (name) => name.endsWith('.js') || name.endsWith('.d.ts'));
  let changed = 0;
  for (const file of files) {
    const code = readFileSync(file, 'utf8');
    const next = rewriteSpecifiers(code, dirname(file), '.js', file);
    if (next !== code) {
      writeFileSync(file, next);
      changed++;
    }
  }
  console.log(`  ✓ [module-format] fully-specified ESM specifiers in ${dir} (${changed}/${files.length} files)`);
}

/**
 * Finalize the CommonJS output in `dir` for a `"type": "module"` package:
 * rename `*.js` -> `*.cjs` and `*.d.ts` -> `*.d.cts`, then rewrite relative
 * `require()`/type specifiers to point at the renamed siblings.
 * @param {string} dir - absolute path to the CJS output directory (e.g. `lib-cjs`)
 */
function finalizeCjs(dir) {
  const jsFiles = collectFiles(dir, (name) => name.endsWith('.js'));
  for (const file of jsFiles) {
    renameSync(file, `${file.slice(0, -'.js'.length)}.cjs`);
  }

  const dtsFiles = collectFiles(dir, (name) => name.endsWith('.d.ts'));
  for (const file of dtsFiles) {
    renameSync(file, `${file.slice(0, -'.d.ts'.length)}.d.cts`);
  }

  const outFiles = collectFiles(dir, (name) => name.endsWith('.cjs') || name.endsWith('.d.cts'));
  for (const file of outFiles) {
    const code = readFileSync(file, 'utf8');
    const next = rewriteSpecifiers(code, dirname(file), '.cjs', file);
    if (next !== code) {
      writeFileSync(file, next);
    }
  }

  console.log(
    `  ✓ [module-format] finalized CJS output in ${dir} (${jsFiles.length} js -> cjs, ${dtsFiles.length} d.ts -> d.cts)`,
  );
}

module.exports = { fullySpecifyEsm, finalizeCjs };
