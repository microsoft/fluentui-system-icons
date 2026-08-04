// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @fileoverview
 * Post-`tsc` codemods that turn the default dual-format output into **native
 * ESM-first** output. All of this is opt-in behind `build.js --enable-native-esm`;
 * with the flag off none of these functions run and the build is unchanged.
 *
 * - `fullySpecifyEsm(dir)` rewrites every relative import/export specifier in the
 *   ESM output (`lib/`) to be *fully specified* (`./x` -> `./x.js`, directory ->
 *   `./x/index.js`). TypeScript 4.x cannot emit extensions, so bare-Node ESM
 *   (and strict bundler resolution) would otherwise reject the output.
 * - `finalizeCjs(dir)` turns the CommonJS output (`lib-cjs/`) into `.cjs`/`.d.cts`
 *   files (required once the package is `"type": "module"`, where a bare `.js`
 *   would be interpreted as ESM) and rewrites its relative `require()`/type
 *   specifiers to point at the renamed files.
 * - `applyEsmFirstManifest(pkg)` flips the manifest to match that output:
 *   `type: module`, a `.cjs` `main`, and per-condition `import`/`require` exports
 *   with `.d.ts`/`.d.cts` types.
 */

const { readdirSync } = require('node:fs');
const { readFile, writeFile, rename } = require('node:fs/promises');
const { join, dirname } = require('node:path');

/**
 * How many file operations to keep in flight.
 *
 * The conversion touches ~23k emitted files and is almost entirely I/O bound — profiling
 * puts the regex and resolution work at well under a tenth of the runtime. Queuing work
 * against libuv's threadpool instead of blocking on each file measures ~1.8x faster;
 * gains flatten out past this point.
 */
const IO_CONCURRENCY = 64;

/**
 * Run `task` over `items` with at most `IO_CONCURRENCY` in flight.
 * @template T
 * @param {T[]} items
 * @param {(item: T) => Promise<void>} task
 */
async function forEachConcurrent(items, task) {
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      await task(items[cursor++]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(IO_CONCURRENCY, items.length) }, worker));
}

/**
 * Recursively collect every file under `dir`.
 *
 * Iterative rather than recursive: the recursive form concatenated child results with
 * `push(...children)`, which recopies the array at each level. The full listing doubles as
 * the existence oracle below, so the whole conversion needs exactly one walk per directory.
 *
 * @param {string} dir
 * @returns {string[]} absolute paths
 */
function collectFiles(dir) {
  /** @type {string[]} */
  const out = [];
  /** @type {string[]} */
  const stack = [dir];

  while (stack.length > 0) {
    const current = /** @type {string} */ (stack.pop());
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else {
        out.push(full);
      }
    }
  }

  return out;
}

// Relative specifiers that already carry a resolvable extension must be left alone.
const HAS_KNOWN_EXT = /\.(c?js|mjs|json|css|svg|ttf|woff2?|node)$/;

/**
 * Every relative specifier form the emitted output can contain: `import ... from`,
 * `export ... from`, side-effect `import '...'`, dynamic `import('...')` and
 * `require('...')`.
 *
 * One combined pattern instead of four sequential `replace` passes, so each file's
 * contents are scanned once. `import\s*\(` precedes `import\s+` so dynamic imports win
 * at a given position.
 */
const SPECIFIER_RE = /(\bfrom\s*|\bimport\s*\(\s*|\bimport\s+|\brequire\s*\(\s*)(['"])(\.\.?\/[^'"]*)\2/g;

/**
 * Is the match at `offset` on a line that is entirely commented out?
 *
 * `tsc` preserves commented-out imports into the output, and the scanner works on raw
 * text, so those would otherwise be reported as unresolvable — noise that hides the real
 * warnings. Deliberately narrow: only a line whose first non-space characters are `//`
 * counts, so a trailing comment after a live import still gets rewritten.
 *
 * @param {string} code
 * @param {number} offset
 */
function isCommentedOut(code, offset) {
  const lineStart = code.lastIndexOf('\n', offset - 1) + 1;
  return code.slice(lineStart, offset).trimStart().startsWith('//');
}

/**
 * Builds a specifier rewriter bound to a known set of emitted files.
 *
 * Resolution is answered from `fileSet` instead of `existsSync`, and memoised per
 * `(dir, specifier)` pair. The emitted tree is extremely repetitive — thousands of atoms
 * import the very same factory — so this turns hundreds of thousands of stat calls into a
 * handful of map lookups.
 *
 * @param {Set<string>} fileSet - absolute paths of all emitted files
 * @param {'.js' | '.cjs'} ext - extension to append
 */
function createRewriter(fileSet, ext) {
  /** @type {Map<string, string | null>} */
  const cache = new Map();

  /**
   * @param {string} fileDir - absolute directory of the importing file
   * @param {string} spec - relative specifier
   * @returns {string | null} fully-specified specifier, or `null` when unresolvable
   */
  function resolve(fileDir, spec) {
    if (HAS_KNOWN_EXT.test(spec)) {
      return spec;
    }

    const key = `${fileDir}\0${spec}`;
    const cached = cache.get(key);
    if (cached !== undefined) {
      return cached;
    }

    const target = join(fileDir, spec);
    /** @type {string | null} */
    let resolved = null;
    if (fileSet.has(target + ext)) {
      resolved = spec + ext;
    } else if (fileSet.has(join(target, `index${ext}`))) {
      resolved = `${spec}/index${ext}`;
    }

    cache.set(key, resolved);
    return resolved;
  }

  /**
   * @param {string} code
   * @param {string} fileDir - absolute directory of the file being processed
   * @param {string} filePath - for warnings
   * @returns {string}
   */
  return function rewriteSpecifiers(code, fileDir, filePath) {
    return code.replace(SPECIFIER_RE, (match, pre, quote, spec, offset) => {
      if (isCommentedOut(code, offset)) {
        return match;
      }

      const resolved = resolve(fileDir, spec);
      if (resolved === null) {
        console.warn(`  ! [module-format] could not resolve '${spec}' in ${filePath}`);
        return match;
      }
      return `${pre}${quote}${resolved}${quote}`;
    });
  };
}

/**
 * Make the ESM output in `dir` valid native ESM by fully specifying every
 * relative import/export specifier in `*.js` and `*.d.ts` files.
 * @param {string} dir - absolute path to the ESM output directory (e.g. `lib`)
 */
async function fullySpecifyEsm(dir) {
  const allFiles = collectFiles(dir);
  const rewrite = createRewriter(new Set(allFiles), '.js');
  const targets = allFiles.filter((file) => file.endsWith('.js') || file.endsWith('.d.ts'));

  let changed = 0;

  await forEachConcurrent(targets, async (file) => {
    const code = await readFile(file, 'utf8');
    const next = rewrite(code, dirname(file), file);
    if (next !== code) {
      await writeFile(file, next);
      changed++;
    }
  });

  console.log(`  ✓ [module-format] fully-specified ESM specifiers in ${dir} (${changed}/${targets.length} files)`);
}

/**
 * Finalize the CommonJS output in `dir` for a `"type": "module"` package:
 * rename `*.js` -> `*.cjs` and `*.d.ts` -> `*.d.cts`, then rewrite relative
 * `require()`/type specifiers to point at the renamed siblings.
 * @param {string} dir - absolute path to the CJS output directory (e.g. `lib-cjs`)
 */
async function finalizeCjs(dir) {
  /** Post-rename paths, so resolution below sees the tree as it will finally exist. */
  const fileSet = new Set();
  /** @type {Array<{ from: string, to: string }>} */
  const renames = [];
  /** @type {string[]} */
  const toRewrite = [];
  let jsCount = 0;
  let dtsCount = 0;

  for (const file of collectFiles(dir)) {
    let target = file;

    if (file.endsWith('.d.ts')) {
      target = `${file.slice(0, -'.d.ts'.length)}.d.cts`;
      dtsCount++;
    } else if (file.endsWith('.js')) {
      target = `${file.slice(0, -'.js'.length)}.cjs`;
      jsCount++;
    }

    if (target !== file) {
      renames.push({ from: file, to: target });
    }

    fileSet.add(target);
    if (target.endsWith('.cjs') || target.endsWith('.d.cts')) {
      toRewrite.push(target);
    }
  }

  // Rename first: the rewrite pass below reads from the renamed paths.
  await forEachConcurrent(renames, ({ from, to }) => rename(from, to));

  const rewrite = createRewriter(fileSet, '.cjs');

  await forEachConcurrent(toRewrite, async (file) => {
    const code = await readFile(file, 'utf8');
    const next = rewrite(code, dirname(file), file);
    if (next !== code) {
      await writeFile(file, next);
    }
  });

  console.log(`  ✓ [module-format] finalized CJS output in ${dir} (${jsCount} js -> cjs, ${dtsCount} d.ts -> d.cts)`);
}

/**
 * Is this a flat export entry of the shape `{ types, import, require }`?
 * @param {any} value
 * @returns {value is { types: string; import: string; require: string }}
 */
function isFlatConditions(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.types === 'string' &&
    typeof value.import === 'string' &&
    typeof value.require === 'string'
  );
}

/**
 * Rewrite a `lib-cjs/*.js` target to its finalized counterpart produced by `finalizeCjs`.
 * Works for concrete paths and `*` wildcard patterns alike.
 * @param {string} p
 * @param {'.cjs' | '.d.cts'} ext
 */
const toCjsTarget = (p, ext) => p.replace(/\.js$/, ext);

/**
 * Recursively convert the *flat* export conditions used by the dual build into the
 * nested, per-condition form required by ESM-first packaging:
 *
 * ```
 * { types, import, require }
 *   -> { import:  { types, default: <import> },
 *        require: { types: <require>.d.cts, default: <require>.cjs } }
 * ```
 *
 * Because this transforms whatever is already in the map, subpaths appended at build
 * time (sprite / headless) are converted too — those emitters stay format-agnostic.
 * String targets (e.g. `.css` side-effect entries) are left untouched.
 *
 * @param {any} node
 * @returns {any}
 */
function toNestedConditions(node) {
  if (typeof node === 'string' || node == null) {
    return node;
  }

  if (isFlatConditions(node)) {
    return {
      import: { types: node.types, default: node.import },
      require: {
        types: toCjsTarget(node.require, '.d.cts'),
        default: toCjsTarget(node.require, '.cjs'),
      },
    };
  }

  // Nested condition object (e.g. the `fluentIconFont` / `default` split on ".").
  /** @type {Record<string, unknown>} */
  const out = {};
  for (const [key, value] of Object.entries(node)) {
    out[key] = toNestedConditions(value);
  }
  return out;
}

/**
 * Flip the manifest to the ESM-first shape so it matches the output produced by
 * `fullySpecifyEsm` + `finalizeCjs`.
 *
 * Mutates and returns `pkg`; the caller persists it. The build only does this when
 * `--enable-native-esm` is passed.
 *
 * @param {Record<string, any>} pkg - parsed package.json
 * @returns {Record<string, any>} the same object, mutated
 */
function applyEsmFirstManifest(pkg) {
  pkg.type = 'module';

  // Under `type: module` the CommonJS entry must carry the `.cjs` extension.
  if (typeof pkg.main === 'string') {
    pkg.main = toCjsTarget(pkg.main, '.cjs');
  }

  if (pkg.exports) {
    pkg.exports = toNestedConditions(pkg.exports);
  }

  console.log(`  ✓ [module-format] applied ESM-first manifest (type=module, main=${pkg.main})`);
  return pkg;
}

module.exports = { fullySpecifyEsm, finalizeCjs, applyEsmFirstManifest };
