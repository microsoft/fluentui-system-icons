/**
 * Entrypoint contract — dimension 1: API surface.
 *
 * The headless implementation is now the default one. Two things this suite pins:
 *
 *  1. The names and runtime shapes `/utils` and the factory modules publish. The
 *     load-bearing constant *values* (`fui-Icon-filled` and friends) are asserted
 *     literally — downstream design systems hang hover/press/open swaps on them.
 *  2. That the deprecated `./headless*` subpaths are true aliases: the very same
 *     bindings, not copies. A copy would let the transition release drift from the
 *     default API it is supposed to forward to.
 *
 * The published `.d.ts` / `exports` map surfaces are checked separately in
 * `build-verify-contract.test.js`, which runs against the built `lib/` output.
 */
import { describe, expect, test } from 'vitest';

// Default surfaces.
import * as utilsEntry from '../utils';
import * as providersEntry from '../providers';
import * as constants from '../utils/constants';
import * as fontFactory from '../utils/fonts/createFluentFontIcon';
import * as spriteFactory from '../utils/createFluentIcon.svg-sprite';
import { cx } from '../utils/cx';

// Deprecated transition aliases.
import * as headlessEntry from '../headless';
import * as headlessUtilsEntry from '../headless/utils';
import * as headlessFontFactory from '../headless/fonts';

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

describe('API surface — /utils', () => {
  test('publishes the documented factories with the documented arities', () => {
    expect(surfaceOf(utilsEntry)).toEqual({
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

  test('the sprite and font factories keep their shapes', () => {
    expect(surfaceOf(spriteFactory)).toMatchObject({ createFluentIcon: { kind: 'function', arity: 4 } });
    expect(surfaceOf(fontFactory)).toMatchObject({ createFluentFontIcon: { kind: 'function', arity: 5 } });
  });
});

describe('API surface — the class-name and data-attribute contract', () => {
  // `fui-Icon-filled` / `fui-Icon-regular` are the selectors downstream design systems
  // target to swap the bundled variants on hover/press/open. They are the single most
  // load-bearing part of the contract and the promotion must not have moved them.
  test('the emitted class names are unchanged', () => {
    expect({
      iconClassName: constants.iconClassName,
      iconFilledClassName: constants.iconFilledClassName,
      iconRegularClassName: constants.iconRegularClassName,
      iconLightClassName: constants.iconLightClassName,
      iconColorClassName: constants.iconColorClassName,
      fontIconClassName: constants.fontIconClassName,
    }).toEqual({
      iconClassName: 'fui-Icon',
      iconFilledClassName: 'fui-Icon-filled',
      iconRegularClassName: 'fui-Icon-regular',
      iconLightClassName: 'fui-Icon-light',
      iconColorClassName: 'fui-Icon-color',
      fontIconClassName: 'fui-Icon-font',
    });
  });

  test('the data attribute names match the selectors in the shipped stylesheet', () => {
    expect({
      DATA_FUI_ICON: constants.DATA_FUI_ICON,
      DATA_FUI_ICON_RTL: constants.DATA_FUI_ICON_RTL,
      DATA_FUI_ICON_HIDDEN: constants.DATA_FUI_ICON_HIDDEN,
      DATA_FUI_ICON_FONT: constants.DATA_FUI_ICON_FONT,
    }).toEqual({
      DATA_FUI_ICON: 'data-fui-icon',
      DATA_FUI_ICON_RTL: 'data-fui-icon-rtl',
      DATA_FUI_ICON_HIDDEN: 'data-fui-icon-hidden',
      DATA_FUI_ICON_FONT: 'data-fui-icon-font',
    });
  });

  test('`cx` keeps the falsy/empty handling the factories rely on', () => {
    // It cannot dedupe atomic classes (there are none), but an icon rendered without a
    // `className` must not gain an empty `class` attribute.
    expect(cx('a', false, undefined, null, 'b')).toBe('a b');
    expect(cx(undefined, false)).toBeUndefined();
    expect(cx()).toBeUndefined();
  });
});

describe('API surface — icon direction context', () => {
  test('/providers publishes exactly the context bindings', () => {
    expect(Object.keys(providersEntry).sort()).toEqual(['IconDirectionContextProvider', 'useIconContext']);
  });
});

describe('deprecated ./headless subpaths are aliases, not copies', () => {
  test('./headless/utils forwards every /utils binding by identity', () => {
    expect(Object.keys(headlessUtilsEntry).sort()).toEqual(Object.keys(utilsEntry).sort());

    for (const name of Object.keys(utilsEntry) as (keyof typeof utilsEntry)[]) {
      expect(headlessUtilsEntry[name], name).toBe(utilsEntry[name]);
    }
  });

  test('./headless forwards the factories, constants and context by identity', () => {
    for (const name of Object.keys(utilsEntry) as (keyof typeof utilsEntry)[]) {
      expect(headlessEntry[name], name).toBe(utilsEntry[name]);
    }
    for (const name of Object.keys(providersEntry) as (keyof typeof providersEntry)[]) {
      expect(headlessEntry[name], name).toBe(providersEntry[name]);
    }
    for (const name of [
      'fontIconClassName',
      'DATA_FUI_ICON',
      'DATA_FUI_ICON_RTL',
      'DATA_FUI_ICON_HIDDEN',
      'DATA_FUI_ICON_FONT',
    ] as const) {
      expect(headlessEntry[name], name).toBe(constants[name]);
    }
    expect(headlessEntry.cx).toBe(cx);
  });

  test('./headless/fonts forwards the default font factory by identity', () => {
    expect(headlessFontFactory.createFluentFontIcon).toBe(fontFactory.createFluentFontIcon);
  });

  test('./headless adds nothing the default API does not publish', () => {
    const defaultSurface = new Set([
      ...Object.keys(utilsEntry),
      ...Object.keys(providersEntry),
      ...Object.keys(constants),
      'cx',
    ]);

    expect(Object.keys(headlessEntry).filter((name) => !defaultSurface.has(name))).toEqual([]);
  });
});
