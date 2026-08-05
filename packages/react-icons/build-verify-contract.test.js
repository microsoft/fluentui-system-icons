// @ts-check
/**
 * Entrypoint contract — published surface.
 *
 * `src/contract/entrypoint-api.test.ts` compares the API as it exists in source. This
 * file compares what consumers actually receive: the `exports` map, the emitted `.d.ts`
 * declarations, and the CSS assets the icons cannot work without.
 *
 * Its main job after the headless promotion is the *aliasing* guarantee: every
 * deprecated `./headless*` subpath must resolve to the exact same file as the default
 * subpath it forwards to. If they ever diverge, the transition release silently ships
 * two implementations again.
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
 * Deprecated alias subpath -> the default subpath it must forward to. Kept for one
 * transition release so existing headless adopters upgrade without a code change.
 *
 * `./headless`, `./headless/utils` and `./headless/fonts` are re-export *modules* rather
 * than pointers at the same file — `src/contract/entrypoint-api.test.ts` asserts they
 * forward the identical bindings. Everything else must be a literal target match.
 */
const ALIASED_SUBPATHS = {
  './headless/styles.css': './styles.css',
  './headless/fonts/styles.css': './fonts/styles.css',
  './headless/svg/*': './svg/*',
  './headless/fonts/*': './fonts/*',
  './headless/svg-sprite/*': './svg-sprite/*',
};

/** Alias subpaths that are re-export modules of their own, not literal target matches. */
const REEXPORT_ALIASES = ['./headless', './headless/utils', './headless/fonts'];

describe('published surface — the default entrypoints serve the promoted implementation', () => {
  it('ships the stylesheets the icons cannot work without, as first-class subpaths', () => {
    expect(pkg.exports['./styles.css']).toBe('./lib/styles.css');
    expect(pkg.exports['./fonts/styles.css']).toBe('./lib/utils/fonts/styles.css');

    expect(fs.existsSync(path.join(lib, 'styles.css'))).toBe(true);
    expect(fs.existsSync(path.join(lib, 'utils/fonts/styles.css'))).toBe(true);

    // Byte-identical to the source the contract suites measured against.
    expect(read('styles.css')).toBe(fs.readFileSync(path.join(__dirname, 'src/styles.css'), 'utf8'));
    expect(read('utils/fonts/styles.css')).toBe(
      fs.readFileSync(path.join(__dirname, 'src/utils/fonts/styles.css'), 'utf8'),
    );
  });

  it('marks the stylesheets as side effects so bundlers keep the imports', () => {
    // An icon whose stylesheet got tree-shaken loses `display`, the RTL flip and the
    // bundled-pair hiding — silently, and everywhere at once.
    expect(pkg.sideEffects).toEqual(['**/*.css']);
  });

  it('the default barrel and atoms are the promoted implementation, not a Griffel one', () => {
    expect(read('utils/createFluentIcon.js')).not.toMatch(/@griffel/);
    expect(read('atoms/svg/access-time.js')).toContain("from '../../utils/createFluentIcon'");
    expect(read('atoms/fonts/access-time.js')).toContain("from '../../utils/fonts/createFluentFontIcon'");
  });

  it('every declared subpath resolves to files that exist', () => {
    for (const [subpath, target] of Object.entries(pkg.exports)) {
      if (typeof target === 'string') {
        expect(fs.existsSync(path.join(__dirname, target)), `${subpath} -> ${target}`).toBe(true);
      }
    }
  });
});

describe('published surface — the deprecated ./headless aliases', () => {
  it('every ./headless subpath is either a recorded alias or a re-export module', () => {
    const headlessSubpaths = Object.keys(pkg.exports).filter((subpath) => subpath.startsWith('./headless'));
    const accounted = new Set([...Object.keys(ALIASED_SUBPATHS), ...REEXPORT_ALIASES]);

    // A *new* `./headless` subpath is a bug: the promotion is meant to retire that
    // namespace, not grow it.
    expect(headlessSubpaths.filter((subpath) => !accounted.has(subpath))).toEqual([]);
  });

  it('each alias points at exactly the same target as the subpath it forwards to', () => {
    for (const [alias, target] of Object.entries(ALIASED_SUBPATHS)) {
      if (!pkg.exports[target]) {
        // `./svg-sprite/*` is only present when sprite generation was enabled.
        expect(pkg.exports[alias], `${alias} must not exist without ${target}`).toBeUndefined();
        continue;
      }
      expect(pkg.exports[alias], `${alias} -> ${target}`).toEqual(pkg.exports[target]);
    }
  });

  it('the re-export aliases forward rather than redeclare', () => {
    // A copy here would let the alias drift from the default API during the transition.
    expect(read('headless/utils.d.ts')).toMatch(/export \* from '\.\.\/utils'/);
    expect(read('headless/index.d.ts')).toMatch(/from '\.\.\/utils\/createFluentIcon'/);
    expect(read('headless/fonts/index.d.ts')).toMatch(/from '\.\.\/\.\.\/utils\/fonts\/createFluentFontIcon'/);
  });
});

describe('published surface — .d.ts declarations', () => {
  it('the factories are declared where the export map says they are', () => {
    for (const [name, file] of [
      ['createFluentIcon', 'utils/createFluentIcon.d.ts'],
      ['bundleIcon', 'utils/bundleIcon.d.ts'],
      ['wrapIcon', 'utils/wrapIcon.d.ts'],
      ['useIconState', 'utils/useIconState.d.ts'],
      ['createFluentIcon', 'utils/createFluentIcon.svg-sprite.d.ts'],
      ['createFluentFontIcon', 'utils/fonts/createFluentFontIcon.d.ts'],
      ['cx', 'utils/cx.d.ts'],
    ]) {
      expect(read(file), `${file} declares ${name}`).toMatch(
        new RegExp(`^export declare (?:const|function) ${name}\\b`, 'm'),
      );
    }
  });

  it('the /utils entrypoint re-exports every non-icon binding the root barrel publishes', () => {
    // The documented import transforms (docs/build-transforms.md and the atomic
    // webpack loader) rewrite every non-icon, non-provider root import to
    // `@fluentui/react-icons/utils`. A root barrel binding missing here fails to
    // resolve in transformed consumer builds.
    const utilsDts = read('utils.d.ts');
    for (const name of [
      'wrapIcon',
      'bundleIcon',
      'createFluentIcon',
      'useIconState',
      'cx',
      'iconClassName',
      'iconFilledClassName',
      'iconRegularClassName',
      'iconColorClassName',
      'iconLightClassName',
      'fontIconClassName',
      'DATA_FUI_ICON',
      'DATA_FUI_ICON_RTL',
      'DATA_FUI_ICON_HIDDEN',
      'DATA_FUI_ICON_FONT',
    ]) {
      expect(utilsDts, `utils.d.ts re-exports ${name}`).toMatch(new RegExp(`\\b${name}\\b`));
    }
  });

  it('the class-name constants keep their literal types', () => {
    // Consumers narrow on these; widening them to `string` is a silent break.
    expect(read('utils/constants.d.ts')).toMatch(/export declare const iconFilledClassName = "fui-Icon-filled"/);
    expect(read('utils/constants.d.ts')).toMatch(/export declare const iconRegularClassName = "fui-Icon-regular"/);
    expect(read('utils/constants.d.ts')).toMatch(/export declare const DATA_FUI_ICON_HIDDEN = "data-fui-icon-hidden"/);
  });
});
