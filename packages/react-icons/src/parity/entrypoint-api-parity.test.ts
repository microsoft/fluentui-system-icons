/**
 * Parity gate — dimension 1: API surface.
 *
 * The headless entrypoints are on track to become the default API. Before that can
 * happen every export the standard (Griffel) entrypoints publish must exist in the
 * headless ones with a compatible shape, and any headless-only addition must be
 * deliberate rather than accidental drift.
 *
 * This suite enumerates both surfaces *programmatically* — no hand written list of
 * "the exports we think exist" — and fails on any asymmetry that is not recorded
 * below as a known, intentional difference.
 *
 * The published `.d.ts` / `exports` map surfaces are compared separately in
 * `build-verify-parity.test.js`, which runs against the built `lib/` output.
 */
import { describe, expect, test } from 'vitest';

// Standard (Griffel) surfaces.
import * as standardUtilsEntry from '../utils';
import * as standardProvidersEntry from '../providers';
import * as standardConstants from '../utils/constants';
import * as standardFontFactory from '../utils/fonts/createFluentFontIcon';
import * as standardSpriteFactory from '../utils/createFluentIcon.svg-sprite';

// Headless surfaces.
import * as headlessEntry from '../headless';
import * as headlessUtilsEntry from '../headless/utils';
import * as headlessFontFactory from '../headless/fonts';
import * as headlessSpriteFactory from '../headless/createFluentIcon.svg-sprite';

/**
 * Exports the headless `.` entrypoint adds on top of everything the standard
 * entrypoints publish. Each one exists because the headless API expresses in
 * markup what Griffel expressed in generated class names, so consumers need the
 * attribute names to target them.
 *
 * Adding to this list is a deliberate API decision; drifting into it is not.
 */
const HEADLESS_ONLY_EXPORTS = ['DATA_FUI_ICON_RTL', 'DATA_FUI_ICON_HIDDEN', 'DATA_FUI_ICON_FONT', 'cx'] as const;

/** Runtime shape of a single export, used to compare two surfaces. */
type ExportShape = { kind: string; arity?: number; value?: unknown };

function shapeOf(value: unknown): ExportShape {
  if (typeof value === 'function') {
    return { kind: 'function', arity: value.length };
  }
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return { kind: typeof value, value };
  }
  return { kind: typeof value };
}

function surfaceOf(namespace: object): Record<string, ExportShape> {
  return Object.fromEntries(
    Object.keys(namespace)
      .sort()
      .map((name) => [name, shapeOf((namespace as Record<string, unknown>)[name])]),
  );
}

describe('API surface parity — /utils vs /headless/utils', () => {
  test('publishes exactly the same export names', () => {
    expect(Object.keys(headlessUtilsEntry).sort()).toEqual(Object.keys(standardUtilsEntry).sort());
  });

  test('every export has the same runtime shape (kind, arity, constant value)', () => {
    expect(surfaceOf(headlessUtilsEntry)).toEqual(surfaceOf(standardUtilsEntry));
  });

  test('the factory arities are the documented ones, so the shape check cannot pass vacuously', () => {
    expect(surfaceOf(standardUtilsEntry)).toMatchObject({
      bundleIcon: { kind: 'function', arity: 2 },
      createFluentIcon: { kind: 'function', arity: 4 },
      useIconState: { kind: 'function', arity: 2 },
      wrapIcon: { kind: 'function', arity: 3 },
      iconClassName: { kind: 'string', value: 'fui-Icon' },
      iconFilledClassName: { kind: 'string', value: 'fui-Icon-filled' },
      iconRegularClassName: { kind: 'string', value: 'fui-Icon-regular' },
      iconLightClassName: { kind: 'string', value: 'fui-Icon-light' },
      iconColorClassName: { kind: 'string', value: 'fui-Icon-color' },
    });
  });
});

describe('API surface parity — the class-name contract', () => {
  // `fui-Icon-filled` / `fui-Icon-regular` are the selectors downstream design systems
  // target to swap the bundled variants on hover/press/open. They are the single most
  // load-bearing part of the contract and must survive the promotion byte for byte.
  test('headless re-exports the very same constant bindings, not copies', () => {
    for (const name of [
      'iconClassName',
      'iconFilledClassName',
      'iconRegularClassName',
      'iconLightClassName',
      'iconColorClassName',
      'fontIconClassName',
      'DATA_FUI_ICON',
    ] as const) {
      expect(headlessEntry[name]).toBe(standardConstants[name]);
    }
  });

  test('the emitted class names are unchanged', () => {
    expect({
      iconClassName: headlessEntry.iconClassName,
      iconFilledClassName: headlessEntry.iconFilledClassName,
      iconRegularClassName: headlessEntry.iconRegularClassName,
      iconLightClassName: headlessEntry.iconLightClassName,
      iconColorClassName: headlessEntry.iconColorClassName,
      fontIconClassName: headlessEntry.fontIconClassName,
    }).toEqual({
      iconClassName: 'fui-Icon',
      iconFilledClassName: 'fui-Icon-filled',
      iconRegularClassName: 'fui-Icon-regular',
      iconLightClassName: 'fui-Icon-light',
      iconColorClassName: 'fui-Icon-color',
      fontIconClassName: 'fui-Icon-font',
    });
  });
});

describe('API surface parity — providers / icon direction context', () => {
  test('headless exposes the same context bindings as /providers', () => {
    expect(headlessEntry.IconDirectionContextProvider).toBe(standardProvidersEntry.IconDirectionContextProvider);
    expect(headlessEntry.useIconContext).toBe(standardProvidersEntry.useIconContext);
  });

  test('there is one context, so a provider rendered by either API is observed by both', () => {
    // Identity above already proves it, but state it as its own assertion: a second
    // React context instance is the failure mode that would silently break RTL for
    // mixed trees during the promotion.
    expect(Object.keys(standardProvidersEntry).sort()).toEqual(['IconDirectionContextProvider', 'useIconContext']);
  });
});

describe('API surface parity — factories not reachable from /utils', () => {
  test('the font icon factory has the same shape', () => {
    expect(surfaceOf(headlessFontFactory)).toEqual(surfaceOf(standardFontFactory));
  });

  test('the sprite icon factory has the same shape', () => {
    const standard = surfaceOf(standardSpriteFactory);
    const headless = surfaceOf(headlessSpriteFactory);
    // The headless module additionally re-exports its types; types are erased at
    // runtime, so the runtime surfaces must match exactly.
    expect(headless).toEqual(standard);
    expect(standard).toMatchObject({ createFluentIcon: { kind: 'function', arity: 4 } });
  });
});

describe('API surface parity — the headless `.` entrypoint is a superset', () => {
  test('covers every value export of /utils and /providers', () => {
    const required = [...Object.keys(standardUtilsEntry), ...Object.keys(standardProvidersEntry)].sort();
    const missing = required.filter((name) => !(name in headlessEntry));

    expect(missing).toEqual([]);
  });

  test('its additions over /utils + /providers are exactly the recorded headless-only ones', () => {
    const standard = new Set([
      ...Object.keys(standardUtilsEntry),
      ...Object.keys(standardProvidersEntry),
      // Published by the default `.` entrypoint via `export * from './utils/constants'`
      // rather than by `/utils`, so they are not headless-only.
      'fontIconClassName',
      'DATA_FUI_ICON',
    ]);

    expect(
      Object.keys(headlessEntry)
        .filter((name) => !standard.has(name))
        .sort(),
    ).toEqual([...HEADLESS_ONLY_EXPORTS].sort());
  });

  test('`cx` is the class joiner the factories use, with mergeClasses-compatible falsy handling', () => {
    // `cx` replaces `mergeClasses` at every call site. It cannot dedupe atomic classes
    // (there are none), but it must agree on the falsy/empty behaviour that the
    // factories rely on when a consumer passes no className.
    expect(headlessEntry.cx('a', false, undefined, null, 'b')).toBe('a b');
    expect(headlessEntry.cx(undefined, false)).toBeUndefined();
    expect(headlessEntry.cx()).toBeUndefined();
  });
});
