// @ts-check
/**
 * Parity gate — dimension 1, published surface.
 *
 * `src/parity/entrypoint-api-parity.test.ts` compares the two APIs as they exist in
 * source. This file compares what consumers actually receive: the `exports` map, the
 * emitted `.d.ts` declarations, and the CSS assets the headless API depends on.
 *
 * It runs as part of build-verify (after `nx run react-icons:build`) because every
 * input is a build artifact.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, it, expect } from 'vitest';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lib = path.join(__dirname, 'lib');
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));

const read = (/** @type {string} */ relativePath) => fs.readFileSync(path.join(lib, relativePath), 'utf8');

/**
 * The generated icon barrels. Excluded when enumerating an entrypoint's surface: the
 * default entrypoint re-exports ~6,000 icon components from them, and the question
 * this suite asks is about the *API* surface the two entrypoints publish.
 */
const ICON_BARREL = /^\.\/(icons|sizedIcons)\//;

/**
 * Names re-exported by an entrypoint declaration file, split into value and type
 * exports. `export * from './x'` is followed into `./x` recursively.
 *
 * @param {string} relativePath
 * @returns {{ values: string[]; types: string[] }}
 */
function entrypointSurface(relativePath) {
  const source = read(relativePath);
  const values = new Set();
  const types = new Set();

  // `export type { a };` — a re-export of an imported type, no module specifier.
  for (const [, names] of source.matchAll(/export\s+type\s+\{([^}]*)\}\s*;/g)) {
    for (const entry of names.split(',')) {
      const name = entry
        .trim()
        .split(/\s+as\s+/)
        .pop()
        ?.trim();
      if (name) {
        types.add(name);
      }
    }
  }

  // `export { a, b } from '...'` / `export type { a } from '...'`
  for (const [, typeKeyword, names] of source.matchAll(/export\s+(type\s+)?\{([^}]*)\}\s*from\s*'[^']+'/g)) {
    for (const entry of names.split(',')) {
      const name = entry
        .trim()
        .split(/\s+as\s+/)
        .pop()
        ?.trim();
      if (!name) {
        continue;
      }
      // `export { type Foo }` inline modifier.
      if (typeKeyword || name.startsWith('type ')) {
        types.add(name.replace(/^type\s+/, ''));
      } else {
        values.add(name);
      }
    }
  }

  // `export * from './x'` — resolve one level.
  for (const [, specifier] of source.matchAll(/export\s+\*\s+from\s+'([^']+)'/g)) {
    if (!specifier.startsWith('.') || ICON_BARREL.test(specifier)) {
      continue;
    }
    const resolved = path.relative(lib, path.resolve(path.dirname(path.join(lib, relativePath)), specifier)) + '.d.ts';
    if (!fs.existsSync(path.join(lib, resolved))) {
      continue;
    }
    const nested = read(resolved);
    for (const [, name] of nested.matchAll(/export\s+declare\s+(?:const|function|class|let|var)\s+([A-Za-z0-9_$]+)/g)) {
      values.add(name);
    }
    for (const [, name] of nested.matchAll(/export\s+(?:declare\s+)?(?:type|interface)\s+([A-Za-z0-9_$]+)/g)) {
      types.add(name);
    }
    const surface = entrypointSurface(resolved);
    surface.values.forEach((name) => values.add(name));
    surface.types.forEach((name) => types.add(name));
  }

  return { values: [...values].sort(), types: [...types].sort() };
}

/**
 * The declaration of a single exported binding, with JSDoc and whitespace runs
 * removed so two implementations differing only in documentation compare equal.
 *
 * @param {string} relativePath
 * @param {string} name
 */
function declarationOf(relativePath, name) {
  const source = read(relativePath);
  const match = source.match(new RegExp(`^export declare (?:const|function) ${name}\\b[^\\n]*$`, 'm'));
  expect(match, `${relativePath} declares ${name}`).not.toBeNull();
  return /** @type {RegExpMatchArray} */ (match)[0].replace(/\s+/g, ' ').trim();
}

describe('published surface parity — exports map', () => {
  it('publishes a headless counterpart for every non-barrel standard subpath', () => {
    // The standard subpaths that are *icon barrels*. There is no headless barrel
    // today: `./headless` exports the factories only, and the atoms are reached via
    // `./headless/svg/*` and `./headless/fonts/*`. Promotion (I2) removes the question
    // by making the existing barrels headless rather than adding new ones, so these
    // are recorded as known-and-expected gaps, not as parity failures.
    const barrelOnly = ['.', './fonts', './lib/fonts', './svg', './lib/svg'];
    // Deep paths into `lib/` that duplicate a canonical subpath for legacy importers.
    const legacyAliases = ['./lib/atoms/svg/*', './lib/providers'];

    const standardSubpaths = Object.keys(pkg.exports).filter((subpath) => !subpath.startsWith('./headless'));
    const expectedPairs = {
      './svg/*': './headless/svg/*',
      './fonts/*': './headless/fonts/*',
      './utils': './headless/utils',
      './providers': './headless', // headless re-exports the context from its index
    };

    const unaccounted = standardSubpaths.filter(
      (subpath) => !barrelOnly.includes(subpath) && !legacyAliases.includes(subpath) && !expectedPairs[subpath],
    );
    expect(unaccounted).toEqual([]);

    for (const [standard, headless] of Object.entries(expectedPairs)) {
      expect(pkg.exports[standard], `${standard} must exist to pair with ${headless}`).toBeDefined();
      expect(pkg.exports[headless], `${headless} must pair with ${standard}`).toBeDefined();
    }
  });

  it('ships the stylesheets the headless API cannot work without', () => {
    expect(pkg.exports['./headless/styles.css']).toBe('./lib/headless/styles.css');
    expect(pkg.exports['./headless/fonts/styles.css']).toBe('./lib/headless/fonts/styles.css');
    expect(pkg.sideEffects).toEqual(expect.arrayContaining(['**/headless/styles.css']));
    expect(pkg.sideEffects).toEqual(expect.arrayContaining(['**/headless/fonts/styles.css']));

    expect(fs.existsSync(path.join(lib, 'headless/styles.css'))).toBe(true);
    expect(fs.existsSync(path.join(lib, 'headless/fonts/styles.css'))).toBe(true);
    // Same rules the parity suite measured against in `src/`.
    expect(read('headless/styles.css')).toBe(fs.readFileSync(path.join(__dirname, 'src/headless/styles.css'), 'utf8'));
  });

  it('every declared subpath resolves to files that exist', () => {
    for (const [subpath, target] of Object.entries(pkg.exports)) {
      if (typeof target === 'string') {
        expect(fs.existsSync(path.join(__dirname, target)), `${subpath} -> ${target}`).toBe(true);
      }
    }
  });
});

describe('published surface parity — .d.ts declarations', () => {
  it('/headless/utils declares exactly the names /utils does', () => {
    expect(entrypointSurface('headless/utils.d.ts')).toEqual(entrypointSurface('utils.d.ts'));
  });

  it('/headless covers the whole non-icon surface of the default entrypoint', () => {
    const standard = entrypointSurface('index.d.ts');
    const headless = entrypointSurface('headless/index.d.ts');

    expect(standard.values.filter((name) => !headless.values.includes(name))).toEqual([]);
    expect(standard.types.filter((name) => !headless.types.includes(name))).toEqual([]);
    // Guard against the surface being empty and the check passing vacuously.
    expect(standard.values).toEqual(
      expect.arrayContaining(['bundleIcon', 'createFluentIcon', 'wrapIcon', 'useIconState', 'iconFilledClassName']),
    );
    expect(standard.types).toEqual(expect.arrayContaining(['FluentIconsProps', 'FluentIcon']));
  });

  it('/headless adds only the data-attribute names and the class joiner', () => {
    const standard = entrypointSurface('index.d.ts');
    const headless = entrypointSurface('headless/index.d.ts');

    expect(headless.values.filter((name) => !standard.values.includes(name))).toEqual([
      'DATA_FUI_ICON_FONT',
      'DATA_FUI_ICON_HIDDEN',
      'DATA_FUI_ICON_RTL',
      'cx',
    ]);
    expect(headless.types.filter((name) => !standard.types.includes(name))).toEqual(['CreateFluentIconOptions']);
  });

  it('the shared factories declare byte-identical signatures', () => {
    /** @type {Array<[string, string, string]>} */
    const shared = [
      ['createFluentIcon', 'utils/createFluentIcon.d.ts', 'headless/createFluentIcon.d.ts'],
      ['bundleIcon', 'utils/bundleIcon.d.ts', 'headless/bundleIcon.d.ts'],
      ['wrapIcon', 'utils/wrapIcon.d.ts', 'headless/wrapIcon.d.ts'],
      ['useIconState', 'utils/useIconState.d.ts', 'headless/useIconState.d.ts'],
      ['createFluentIcon', 'utils/createFluentIcon.svg-sprite.d.ts', 'headless/createFluentIcon.svg-sprite.d.ts'],
      ['createFluentFontIcon', 'utils/fonts/createFluentFontIcon.d.ts', 'headless/fonts/createFluentFontIcon.d.ts'],
    ];

    for (const [name, standardFile, headlessFile] of shared) {
      expect(declarationOf(headlessFile, name), `${name} signature`).toBe(declarationOf(standardFile, name));
    }
  });

  it('the class-name constants are re-exported rather than redeclared', () => {
    // `headless/shared.d.ts` must forward `../utils/constants`; a copy would let the
    // two APIs drift apart on the `fui-Icon-filled` / `fui-Icon-regular` contract.
    expect(read('headless/shared.d.ts')).toMatch(
      /export \{[^}]*iconFilledClassName[^}]*\} from '\.\.\/utils\/constants'/s,
    );
    expect(read('utils/constants.d.ts')).toMatch(/export declare const iconFilledClassName = "fui-Icon-filled"/);
  });
});
