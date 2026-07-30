/**
 * Entrypoint contract.
 *
 * The headless implementation is the default one now, and `./headless` is kept for a single
 * transition release as an alias of it. This suite's job is the aliasing guarantee: the alias
 * must forward the default API rather than redeclare it, because a copy would let the two
 * drift back apart during the transition — which is exactly the situation the promotion
 * existed to end.
 *
 * It also pins the `package.json` side of the promise, since the CSS subpaths and the
 * `sideEffects` entry are what make the stylesheet reachable and un-shakeable.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, it, expect } from 'vitest';

import * as defaultApi from '../index';
import * as headlessAlias from '../headless/index';

const packageRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const pkg = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'));

describe('the default entrypoint serves the promoted implementation', () => {
  it('exports the component, the styling hook attribute and the composable hooks', () => {
    expect(Object.keys(defaultApi).sort()).toEqual([
      'DEFAULT_BASE_URL',
      'DEFAULT_ICON_SIZE',
      'FLUENT_CDN_BASE_URL',
      'FileIconType',
      'FileTypeIcon',
      'FileTypeIconsProvider',
      'ICON_SIZES',
      'fileTypeIconDataAttribute',
      'renderFileTypeIcon',
      'useFileTypeIcon',
      'useFileTypeIconsContext',
    ]);
  });

  it('ships the stylesheet as a first-class subpath and marks it as a side effect', () => {
    // A tree-shaken stylesheet import is a silent defect: the icon still renders, just
    // without `object-fit`, so non-square assets stretch.
    expect(pkg.exports['./styles.css']).toBe('./lib/styles.css');
    expect(pkg.sideEffects).toEqual(['**/*.css']);
  });

  it('declares no CSS-in-JS runtime', () => {
    expect(Object.keys(pkg.dependencies ?? {})).toEqual(['tslib']);
  });
});

describe('the deprecated ./headless alias', () => {
  it('forwards the default API binding for binding, rather than redeclaring it', () => {
    expect(Object.keys(headlessAlias).sort()).toEqual(Object.keys(defaultApi).sort());

    for (const name of Object.keys(defaultApi) as Array<keyof typeof defaultApi>) {
      expect(headlessAlias[name], `./headless exports the same ${name}`).toBe(defaultApi[name]);
    }
  });

  it('points its stylesheet subpath at exactly the default one', () => {
    expect(pkg.exports['./headless/styles.css']).toBe(pkg.exports['./styles.css']);
  });

  it('grows no new ./headless subpaths', () => {
    // The promotion is meant to retire that namespace, not extend it.
    expect(
      Object.keys(pkg.exports)
        .filter((subpath) => subpath.startsWith('./headless'))
        .sort(),
    ).toEqual(['./headless', './headless/styles.css']);
  });
});
