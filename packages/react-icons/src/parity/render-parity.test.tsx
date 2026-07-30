/**
 * @vitest-environment jsdom
 */

/**
 * Parity gate — dimensions 2, 3 and 4: DOM output, computed styles and RTL.
 *
 * Every scenario below is rendered twice from an identical React tree: once through
 * the standard (Griffel) factories and once through the headless ones. The suite then
 *
 *   1. diffs the emitted DOM, allowing exactly one class of difference — the styling
 *      mechanism — and asserting the shape of that difference explicitly;
 *   2. replays both results in a real browser (Chromium via Playwright, already a root
 *      devDependency and installed by `pr.yml`) and compares the *computed* styles the
 *      two mechanisms produce. Griffel's rules are read back out of the stylesheet it
 *      injected during the jsdom render; the headless rules come from the shipped
 *      `headless/styles.css`. This is what proves the 6-rule stylesheet is equivalent
 *      to the atomic classes rather than merely plausible;
 *   3. asserts the RTL flip decision — one shared `IconDirectionContext`, one
 *      `useBaseIconState` — reaches the DOM through both entrypoints.
 *
 * A note on what "parity" means for step 2: Chromium is asked for the properties the
 * two stylesheets own, and each expectation pins the *absolute* expected value as well
 * as cross-API equality, so a rule going missing from both sides cannot pass silently.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import * as React from 'react';
import { render } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { chromium, type Browser } from 'playwright';

import { createFluentIcon as standardCreateFluentIcon } from '../utils/createFluentIcon';
import { createFluentIcon as standardCreateSpriteIcon } from '../utils/createFluentIcon.svg-sprite';
import { bundleIcon as standardBundleIcon } from '../utils/bundleIcon';
import { wrapIcon as standardWrapIcon } from '../utils/wrapIcon';
import { createFluentFontIcon as standardCreateFontIcon } from '../utils/fonts/createFluentFontIcon';

import { createFluentIcon as headlessCreateFluentIcon } from '../headless/createFluentIcon';
import { createFluentIcon as headlessCreateSpriteIcon } from '../headless/createFluentIcon.svg-sprite';
import { bundleIcon as headlessBundleIcon } from '../headless/bundleIcon';
import { wrapIcon as headlessWrapIcon } from '../headless/wrapIcon';
import { createFluentFontIcon as headlessCreateFontIcon } from '../headless/fonts/createFluentFontIcon';

import { IconDirectionContextProvider } from '../contexts';
import type { FluentIconsProps } from '../utils/FluentIconsProps.types';

// =============================================================================
// The two APIs under comparison
// =============================================================================

type IconApi = {
  createFluentIcon: typeof standardCreateFluentIcon;
  createSpriteIcon: typeof standardCreateSpriteIcon;
  bundleIcon: typeof standardBundleIcon;
  wrapIcon: typeof standardWrapIcon;
  createFontIcon: typeof standardCreateFontIcon;
};

const standardApi: IconApi = {
  createFluentIcon: standardCreateFluentIcon,
  createSpriteIcon: standardCreateSpriteIcon,
  bundleIcon: standardBundleIcon,
  wrapIcon: standardWrapIcon,
  createFontIcon: standardCreateFontIcon,
};

const headlessApi: IconApi = {
  createFluentIcon: headlessCreateFluentIcon as IconApi['createFluentIcon'],
  createSpriteIcon: headlessCreateSpriteIcon as IconApi['createSpriteIcon'],
  bundleIcon: headlessBundleIcon as IconApi['bundleIcon'],
  wrapIcon: headlessWrapIcon as IconApi['wrapIcon'],
  createFontIcon: headlessCreateFontIcon as IconApi['createFontIcon'],
};

// `FontFile` is a `const enum`, so its members cannot be imported into a test that is
// transpiled in isolation. The numeric values are the contract.
const FontFile = { Filled: 0, Regular: 1, Resizable: 2, Light: 3 } as const;

const PATH_D = 'M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24';

const CustomSvg = (iconProps: FluentIconsProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...iconProps}>
    <path fill="currentColor" d="M10 2l6 16H4l6-16z" />
  </svg>
);

const rtl = (children: React.ReactNode) => (
  <IconDirectionContextProvider value={{ textDirection: 'rtl' }}>{children}</IconDirectionContextProvider>
);

// =============================================================================
// Scenarios — one identical React tree per API
// =============================================================================

type Scenario = {
  /** Stable key used to pair the two renders and to name the failure. */
  name: string;
  render: (api: IconApi) => React.ReactElement;
  /**
   * Attributes the headless render is expected to add, per icon element, in
   * document order. `{}` means "this element must be attribute-identical".
   */
  headlessOnlyAttributes: Record<string, string>[];
  /** Icon elements the scenario renders, in document order. */
  elements: number;
};

const scenarios: Scenario[] = [
  {
    name: 'sized-svg',
    render: (api) => React.createElement(api.createFluentIcon('Sized20', '20', [PATH_D])),
    headlessOnlyAttributes: [{}],
    elements: 1,
  },
  {
    name: 'resizable-svg-with-fontsize',
    render: (api) => React.createElement(api.createFluentIcon('Resizable', '1em', [PATH_D]), { fontSize: '32px' }),
    headlessOnlyAttributes: [{}],
    elements: 1,
  },
  {
    name: 'svg-with-title-and-classname',
    render: (api) =>
      React.createElement(api.createFluentIcon('Titled', '20', [PATH_D]), {
        title: 'a title',
        className: 'consumer-class',
        primaryFill: 'red',
      }),
    headlessOnlyAttributes: [{}],
    elements: 1,
  },
  {
    name: 'color-svg-with-idprefix',
    render: (api) =>
      React.createElement(
        api.createFluentIcon(
          'ColorIcon',
          '20',
          [
            ['path', { d: 'M0 0h20v20H0z', fill: 'url(#grad)' }],
            ['defs', null, ['linearGradient', { id: 'grad' }, ['stop', { stopColor: '#fff' }]]],
          ],
          { color: true },
        ),
        { idPrefix: 'p-' },
      ),
    headlessOnlyAttributes: [{}],
    elements: 1,
  },
  {
    name: 'sprite-svg',
    render: (api) => React.createElement(api.createSpriteIcon('access-time-20-filled', '20', '/s.svg')),
    headlessOnlyAttributes: [{}],
    elements: 1,
  },
  {
    name: 'wrapped-svg',
    render: (api) => React.createElement(api.wrapIcon(CustomSvg, 'Wrapped')),
    headlessOnlyAttributes: [{}],
    elements: 1,
  },
  {
    name: 'bundled-filled',
    render: (api) =>
      React.createElement(
        api.bundleIcon(api.createFluentIcon('F', '20', [PATH_D]), api.createFluentIcon('R', '20', [PATH_D])),
        { filled: true },
      ),
    headlessOnlyAttributes: [{}, { 'data-fui-icon-hidden': '' }],
    elements: 2,
  },
  {
    name: 'bundled-regular',
    render: (api) =>
      React.createElement(
        api.bundleIcon(api.createFluentIcon('F', '20', [PATH_D]), api.createFluentIcon('R', '20', [PATH_D])),
        { filled: false },
      ),
    headlessOnlyAttributes: [{ 'data-fui-icon-hidden': '' }, {}],
    elements: 2,
  },
  {
    name: 'rtl-flipped-svg',
    render: (api) => rtl(React.createElement(api.createFluentIcon('Flip', '20', [PATH_D], { flipInRtl: true }))),
    headlessOnlyAttributes: [{ 'data-fui-icon-rtl': '' }],
    elements: 1,
  },
  {
    name: 'rtl-unflipped-svg',
    render: (api) => rtl(React.createElement(api.createFluentIcon('NoFlip', '20', [PATH_D]))),
    headlessOnlyAttributes: [{}],
    elements: 1,
  },
  {
    name: 'rtl-flipped-wrapped',
    render: (api) => rtl(React.createElement(api.wrapIcon(CustomSvg, 'Wrapped', { flipInRtl: true }))),
    headlessOnlyAttributes: [{ 'data-fui-icon-rtl': '' }],
    elements: 1,
  },
  {
    name: 'rtl-flipped-bundle',
    render: (api) =>
      rtl(
        React.createElement(
          api.bundleIcon(
            api.createFluentIcon('F', '20', [PATH_D], { flipInRtl: true }),
            api.createFluentIcon('R', '20', [PATH_D], { flipInRtl: true }),
          ),
          { filled: true },
        ),
      ),
    headlessOnlyAttributes: [{ 'data-fui-icon-rtl': '' }, { 'data-fui-icon-rtl': '', 'data-fui-icon-hidden': '' }],
    elements: 2,
  },
  {
    name: 'font-filled',
    render: (api) => React.createElement(api.createFontIcon('FontFilled', '', FontFile.Filled, 20)),
    headlessOnlyAttributes: [{ 'data-fui-icon-font': 'filled', 'data-fui-icon': 'font' }],
    elements: 1,
  },
  {
    name: 'font-regular',
    render: (api) => React.createElement(api.createFontIcon('FontRegular', '', FontFile.Regular, 20)),
    headlessOnlyAttributes: [{ 'data-fui-icon-font': 'regular', 'data-fui-icon': 'font' }],
    elements: 1,
  },
  {
    name: 'font-resizable',
    render: (api) =>
      React.createElement(api.createFontIcon('FontResizable', '', FontFile.Resizable, undefined), {
        fontSize: '28px',
      }),
    headlessOnlyAttributes: [{ 'data-fui-icon-font': 'resizable', 'data-fui-icon': 'font' }],
    elements: 1,
  },
  {
    name: 'font-light',
    render: (api) => React.createElement(api.createFontIcon('FontLight', '', FontFile.Light, 20)),
    headlessOnlyAttributes: [{ 'data-fui-icon-font': 'light', 'data-fui-icon': 'font' }],
    elements: 1,
  },
  {
    name: 'font-with-primaryfill',
    render: (api) =>
      React.createElement(api.createFontIcon('FontColored', '', FontFile.Filled, 20), { primaryFill: 'red' }),
    headlessOnlyAttributes: [{ 'data-fui-icon-font': 'filled', 'data-fui-icon': 'font' }],
    elements: 1,
  },
];

// =============================================================================
// Render both APIs once, up front
// =============================================================================

/** Class names that are part of the public contract rather than of the styling mechanism. */
const isContractClass = (token: string) => token === 'fui-Icon' || token.startsWith('fui-Icon-');

/** Class names the scenarios pass in as a consumer would; neither API generates them. */
const CONSUMER_CLASSES = new Set(['consumer-class']);

type IconSnapshot = {
  tagName: string;
  /** Every attribute except `class`. */
  attributes: Record<string, string>;
  /** `fui-*` tokens — the public class-name contract. */
  contractClasses: string[];
  /** Consumer-supplied tokens, which must survive both APIs untouched. */
  consumerClasses: string[];
  /** Everything else on `class` — Griffel atomics on one side, nothing on the other. */
  generatedClasses: string[];
  textContent: string;
  innerHTML: string;
};

function snapshot(el: Element): IconSnapshot {
  const attributes: Record<string, string> = {};
  for (const attr of Array.from(el.attributes)) {
    if (attr.name !== 'class') {
      attributes[attr.name] = attr.value;
    }
  }
  const tokens = (el.getAttribute('class') ?? '').split(/\s+/).filter(Boolean);

  return {
    tagName: el.tagName.toLowerCase(),
    attributes,
    contractClasses: tokens.filter(isContractClass),
    consumerClasses: tokens.filter((token) => CONSUMER_CLASSES.has(token)),
    generatedClasses: tokens.filter((token) => !isContractClass(token) && !CONSUMER_CLASSES.has(token)),
    textContent: el.textContent ?? '',
    innerHTML: el.innerHTML,
  };
}

type RenderedScenario = { markup: string; icons: IconSnapshot[] };

function renderAll(api: IconApi): Map<string, RenderedScenario> {
  const results = new Map<string, RenderedScenario>();

  for (const scenario of scenarios) {
    const { container } = render(scenario.render(api));
    results.set(scenario.name, {
      markup: container.innerHTML,
      icons: Array.from(container.querySelectorAll('[data-fui-icon]')).map(snapshot),
    });
  }

  return results;
}

const standardRendered = renderAll(standardApi);
const headlessRendered = renderAll(headlessApi);

/**
 * The CSS Griffel injected while rendering the standard scenarios above. Griffel's DOM
 * renderer uses `CSSStyleSheet.insertRule`, so the rules live on `sheet.cssRules` and
 * the `<style>` elements' `textContent` is empty — read the rules, not the text.
 */
const griffelCss = Array.from(document.head.querySelectorAll('style'))
  .flatMap((style) => (style.sheet ? Array.from(style.sheet.cssRules).map((rule) => rule.cssText) : []))
  .join('\n');

const headlessCss = fs.readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'headless', 'styles.css'),
  'utf8',
);

// =============================================================================
// Dimension 2 — DOM output parity
// =============================================================================

describe('DOM parity — the two APIs emit the same document', () => {
  test('Griffel actually produced rules to compare against (guards every later assertion)', () => {
    expect(griffelCss).toMatch(/display:\s*inline/);
    expect(griffelCss).toMatch(/transform:\s*scaleX\(-1\)/);
    expect(griffelCss).toMatch(/forced-color-adjust:\s*auto/);
    expect(headlessCss).toMatch(/\[data-fui-icon-hidden\]/);
  });

  test.each(scenarios)('$name renders the same element structure', (scenario) => {
    const standard = standardRendered.get(scenario.name)!;
    const headless = headlessRendered.get(scenario.name)!;

    expect(headless.icons).toHaveLength(scenario.elements);
    expect(standard.icons).toHaveLength(scenario.elements);
    expect(headless.icons.map((icon) => icon.tagName)).toEqual(standard.icons.map((icon) => icon.tagName));
    expect(headless.icons.map((icon) => icon.innerHTML)).toEqual(standard.icons.map((icon) => icon.innerHTML));
    expect(headless.icons.map((icon) => icon.textContent)).toEqual(standard.icons.map((icon) => icon.textContent));
  });

  test.each(scenarios)('$name emits identical `fui-*` contract classes', (scenario) => {
    const standard = standardRendered.get(scenario.name)!;
    const headless = headlessRendered.get(scenario.name)!;

    expect(headless.icons.map((icon) => icon.contractClasses)).toEqual(
      standard.icons.map((icon) => icon.contractClasses),
    );
  });

  test.each(scenarios)('$name differs only by the recorded headless-only attributes', (scenario) => {
    const standard = standardRendered.get(scenario.name)!;
    const headless = headlessRendered.get(scenario.name)!;

    headless.icons.forEach((headlessIcon, index) => {
      const standardIcon = standard.icons[index]!;
      const expectedExtra = scenario.headlessOnlyAttributes[index]!;

      // Strip the recorded differences, then require byte equality on the rest.
      const normalized = { ...headlessIcon.attributes };
      for (const [name, value] of Object.entries(expectedExtra)) {
        expect(normalized[name], `${scenario.name}#${index} ${name}`).toBe(value);
        if (name in standardIcon.attributes) {
          // A value-level difference (`data-fui-icon=""` vs `"font"`), not an addition.
          normalized[name] = standardIcon.attributes[name]!;
        } else {
          delete normalized[name];
        }
      }

      expect(normalized, `${scenario.name}#${index}`).toEqual(standardIcon.attributes);
    });
  });

  test.each(scenarios)('$name: the class difference is Griffel atomics vs nothing', (scenario) => {
    const standard = standardRendered.get(scenario.name)!;
    const headless = headlessRendered.get(scenario.name)!;

    // This is the KNOWN difference, and the only one on the `class` attribute.
    // Headless never emits a generated class name; Griffel always emits at least one
    // atomic class plus its `___`-prefixed debug class for any element it styles.
    expect(headless.icons.map((icon) => icon.generatedClasses)).toEqual(headless.icons.map(() => []));
    expect(standard.icons.every((icon) => icon.generatedClasses.length > 0)).toBe(true);
    expect(standard.icons.every((icon) => icon.generatedClasses.some((token) => /^f[a-z0-9]+$/.test(token)))).toBe(
      true,
    );

    // Consumer-supplied class names are untouched by both.
    expect(headless.icons.map((icon) => icon.consumerClasses)).toEqual(
      standard.icons.map((icon) => icon.consumerClasses),
    );
  });

  test('wrapIcon is the one place the `class` attribute itself disappears', () => {
    // Every other factory adds `fui-Icon`, so `class` survives with the contract token.
    // `wrapIcon` adds no contract class, so on the headless side the attribute is absent
    // entirely rather than present-and-empty. Consumers relying on `class` existing on a
    // wrapped icon are the only DOM-shape breakage in the promotion.
    const headlessWrapped = headlessRendered.get('wrapped-svg')!;
    const standardWrapped = standardRendered.get('wrapped-svg')!;

    expect(headlessWrapped.markup).not.toContain('class=');
    expect(standardWrapped.markup).toContain('class=');
    expect(headlessWrapped.icons[0]!.contractClasses).toEqual([]);
    expect(standardWrapped.icons[0]!.contractClasses).toEqual([]);
  });

  test('a consumer className still reaches the element through both APIs', () => {
    expect(headlessRendered.get('svg-with-title-and-classname')!.markup).toContain('consumer-class');
    expect(standardRendered.get('svg-with-title-and-classname')!.markup).toContain('consumer-class');
  });
});

// =============================================================================
// Dimension 4 — RTL through both entrypoints
// =============================================================================

describe('RTL parity — one context, two expressions of the same decision', () => {
  test('the flip is expressed as an atomic class by Griffel and a data attribute by headless', () => {
    const standard = standardRendered.get('rtl-flipped-svg')!.icons[0]!;
    const headless = headlessRendered.get('rtl-flipped-svg')!.icons[0]!;

    expect(headless.attributes['data-fui-icon-rtl']).toBe('');
    expect(standard.attributes['data-fui-icon-rtl']).toBeUndefined();
    // Griffel's flip class is the one carrying `transform: scaleX(-1)`.
    expect(standard.generatedClasses.some((token) => griffelCss.includes(`.${token} { transform: scaleX(-1); }`))).toBe(
      true,
    );
  });

  test('no flip means no marker on either side, even inside an RTL provider', () => {
    const standard = standardRendered.get('rtl-unflipped-svg')!.icons[0]!;
    const headless = headlessRendered.get('rtl-unflipped-svg')!.icons[0]!;

    expect(headless.attributes['data-fui-icon-rtl']).toBeUndefined();
    expect(standard.generatedClasses.some((token) => griffelCss.includes(`.${token} { transform: scaleX(-1); }`))).toBe(
      false,
    );
  });

  test('both bundled variants flip together', () => {
    const headless = headlessRendered.get('rtl-flipped-bundle')!.icons;

    expect(headless.map((icon) => icon.attributes['data-fui-icon-rtl'])).toEqual(['', '']);
  });
});

// =============================================================================
// Dimension 3 — computed-style parity in a real browser
// =============================================================================

/** Properties the two stylesheets own. Everything else is inherited or UA default. */
const OWNED_PROPERTIES = [
  'display',
  'lineHeight',
  'transform',
  'fontFamily',
  'fontStyle',
  'color',
  'forcedColorAdjust',
] as const;

type ComputedStyles = Record<string, Record<string, string>>;

/**
 * Chromium is a hard requirement of this suite, not an optional extra: a declaration
 * level comparison of the two stylesheets could not tell you what the cascade does with
 * them. `pr.yml` installs the browser before the Build and Test steps; locally it is one
 * command, so fail loudly rather than skipping and reporting a green parity gate that
 * never ran.
 */
async function launchChromium(): Promise<Browser> {
  try {
    return await chromium.launch();
  } catch (error) {
    throw new Error(
      'Could not launch Chromium for the computed-style parity check. Run `yarn playwright install chromium` ' +
        `from the repository root and try again.\n\nUnderlying error: ${(error as Error).message}`,
    );
  }
}

/**
 * The one computed-style difference between the two APIs, found by this suite.
 *
 * Griffel scopes `forced-color-adjust: auto` to `createFluentIcon` and
 * `createFluentIcon.svg-sprite`, which both call `useRootStyles()`. `wrapIcon` does
 * not call it, so a Griffel-wrapped custom SVG keeps Chromium's forced-colors default
 * of `preserve-parent-color`. The headless stylesheet targets `[data-fui-icon]`, an
 * attribute `wrapIcon` also sets, so the wrapped icon gets the fix too.
 *
 * Headless is the consistent side: the rule exists because SVG internals are not
 * recoloured in high contrast, and a wrapped custom SVG has exactly that problem. The
 * headless API also has no way to tell wrapped icons apart from factory-built ones
 * without inventing a new attribute, so reproducing Griffel's omission would cost DOM
 * surface to replicate an inconsistency. Recorded rather than "fixed"; called out for
 * the upstream review.
 */
const KNOWN_HCM_DIFFERENCES: Record<string, { standard: string; headless: string }> = {
  'wrapped-svg#0': { standard: 'preserve-parent-color', headless: 'auto' },
  'rtl-flipped-wrapped#0': { standard: 'preserve-parent-color', headless: 'auto' },
};

function documentFor(css: string, rendered: Map<string, RenderedScenario>): string {
  const body = scenarios
    .map((scenario) => `<div data-scenario="${scenario.name}">${rendered.get(scenario.name)!.markup}</div>`)
    .join('\n');

  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}</body></html>`;
}

async function computedStyles(
  browser: Browser,
  html: string,
  forcedColors: 'none' | 'active',
): Promise<ComputedStyles> {
  const context = await browser.newContext({ forcedColors });
  const page = await context.newPage();
  await page.setContent(html, { waitUntil: 'load' });

  const result = await page.evaluate(
    (properties) => {
      const out: Record<string, Record<string, string>> = {};

      document.querySelectorAll('[data-scenario]').forEach((wrapper) => {
        const name = wrapper.getAttribute('data-scenario');
        wrapper.querySelectorAll('[data-fui-icon]').forEach((element, index) => {
          const computed = window.getComputedStyle(element);
          const values: Record<string, string> = {};
          for (const property of properties) {
            // Quoting of font family names is not observable, normalise it away.
            values[property] = String(computed[property as never] ?? '').replace(/["']/g, '');
          }
          out[`${name}#${index}`] = values;
        });
      });

      return out;
    },
    OWNED_PROPERTIES as unknown as string[],
  );

  await context.close();
  return result;
}

describe('Computed-style parity — the 6-rule stylesheet vs the injected atomics', () => {
  let browser: Browser;
  let standardStyles: ComputedStyles;
  let headlessStyles: ComputedStyles;
  let standardHcm: ComputedStyles;
  let headlessHcm: ComputedStyles;

  beforeAll(async () => {
    browser = await launchChromium();

    const standardHtml = documentFor(griffelCss, standardRendered);
    const headlessHtml = documentFor(headlessCss, headlessRendered);

    standardStyles = await computedStyles(browser, standardHtml, 'none');
    headlessStyles = await computedStyles(browser, headlessHtml, 'none');
    standardHcm = await computedStyles(browser, standardHtml, 'active');
    headlessHcm = await computedStyles(browser, headlessHtml, 'active');
  }, 120_000);

  afterAll(async () => {
    await browser?.close();
  });

  test('both documents produced a style for every icon element', () => {
    const expectedKeys = scenarios
      .flatMap((scenario) => Array.from({ length: scenario.elements }, (_, index) => `${scenario.name}#${index}`))
      .sort();

    expect(Object.keys(headlessStyles).sort()).toEqual(expectedKeys);
    expect(Object.keys(standardStyles).sort()).toEqual(expectedKeys);
  });

  test('every icon computes identically under both styling mechanisms', () => {
    expect(headlessStyles).toEqual(standardStyles);
  });

  test('every icon computes identically with forced colors active, bar the recorded wrapIcon difference', () => {
    const normalizedHeadless = Object.fromEntries(
      Object.entries(headlessHcm).map(([key, values]) => [
        key,
        KNOWN_HCM_DIFFERENCES[key] ? { ...values, forcedColorAdjust: KNOWN_HCM_DIFFERENCES[key]!.standard } : values,
      ]),
    );

    expect(normalizedHeadless).toEqual(standardHcm);
  });

  test('the recorded wrapIcon high-contrast difference is exactly what it is documented to be', () => {
    for (const [key, expected] of Object.entries(KNOWN_HCM_DIFFERENCES)) {
      expect(standardHcm[key]!.forcedColorAdjust, `standard ${key}`).toBe(expected.standard);
      expect(headlessHcm[key]!.forcedColorAdjust, `headless ${key}`).toBe(expected.headless);
    }

    // No other element diverges, so the difference is scoped to `wrapIcon` alone.
    const diverging = Object.keys(headlessHcm).filter(
      (key) => headlessHcm[key]!.forcedColorAdjust !== standardHcm[key]!.forcedColorAdjust,
    );
    expect(diverging.sort()).toEqual(Object.keys(KNOWN_HCM_DIFFERENCES).sort());
  });

  // The equality assertions above would also pass if BOTH stylesheets were missing.
  // These pin the absolute values, so a dropped rule fails on one of the two axes.
  test('SVG icon defaults are the documented ones', () => {
    expect(headlessStyles['sized-svg#0']).toMatchObject({ display: 'inline', lineHeight: '0px', transform: 'none' });
    expect(standardStyles['sized-svg#0']).toMatchObject({ display: 'inline', lineHeight: '0px', transform: 'none' });
  });

  test('the RTL flip is the same matrix on both sides', () => {
    expect(headlessStyles['rtl-flipped-svg#0']!.transform).toBe('matrix(-1, 0, 0, 1, 0, 0)');
    expect(standardStyles['rtl-flipped-svg#0']!.transform).toBe('matrix(-1, 0, 0, 1, 0, 0)');
    expect(headlessStyles['rtl-unflipped-svg#0']!.transform).toBe('none');
  });

  test('bundleIcon hides exactly one variant on both sides', () => {
    expect([headlessStyles['bundled-filled#0']!.display, headlessStyles['bundled-filled#1']!.display]).toEqual([
      'inline',
      'none',
    ]);
    expect([standardStyles['bundled-filled#0']!.display, standardStyles['bundled-filled#1']!.display]).toEqual([
      'inline',
      'none',
    ]);
    expect([headlessStyles['bundled-regular#0']!.display, headlessStyles['bundled-regular#1']!.display]).toEqual([
      'none',
      'inline',
    ]);
    expect([standardStyles['bundled-regular#0']!.display, standardStyles['bundled-regular#1']!.display]).toEqual([
      'none',
      'inline',
    ]);
  });

  test('font icons get their own box, line height and family on both sides', () => {
    for (const [scenario, family] of [
      ['font-filled#0', 'FluentSystemIconsFilled'],
      ['font-regular#0', 'FluentSystemIconsRegular'],
      ['font-resizable#0', 'FluentSystemIcons'],
      ['font-light#0', 'FluentSystemIconsLight'],
    ] as const) {
      expect(headlessStyles[scenario], scenario).toMatchObject({
        display: 'inline-block',
        fontStyle: 'normal',
        fontFamily: family,
      });
      expect(standardStyles[scenario], scenario).toMatchObject({
        display: 'inline-block',
        fontStyle: 'normal',
        fontFamily: family,
      });
    }
  });

  test('high contrast mode re-enables forced-color-adjust for factory-built SVG icons', () => {
    // Chromium's forced-colors UA sheet puts `<svg>` at `preserve-parent-color`, which
    // would leave the icon's internal colours untouched. Both APIs override it back to
    // `auto`. The Griffel-wrapped icon is the natural negative control: it is the one
    // SVG neither stylesheet claims, and it reads `preserve-parent-color` — proving the
    // `auto` readings below come from the rule and not from a Chromium default.
    for (const key of ['sized-svg#0', 'sprite-svg#0', 'bundled-filled#0', 'rtl-flipped-svg#0']) {
      expect(headlessHcm[key]!.forcedColorAdjust, `headless ${key}`).toBe('auto');
      expect(standardHcm[key]!.forcedColorAdjust, `standard ${key}`).toBe('auto');
    }
    expect(standardHcm['wrapped-svg#0']!.forcedColorAdjust).toBe('preserve-parent-color');
  });

  test('font icons are excluded from the rule and keep the element default on both sides', () => {
    // `<i>` is not an SVG, so Chromium already leaves it at `auto`; the headless
    // `:not([data-fui-icon="font"])` guard and Griffel's separate font styles both
    // decline to claim it, and the observable result agrees.
    expect(headlessHcm['font-filled#0']!.forcedColorAdjust).toBe('auto');
    expect(standardHcm['font-filled#0']!.forcedColorAdjust).toBe('auto');
  });

  test('the forced-colors guard is intact: neither stylesheet sets the property unconditionally', () => {
    // The browser cannot show this — outside forced colors Chromium reports `auto` for
    // every element regardless — so assert it against the rules themselves.
    const outsideMediaQuery = (css: string) => css.replace(/@media[^{]*\{[\s\S]*?\}\s*\}/g, '');

    expect(outsideMediaQuery(headlessCss)).not.toMatch(/forced-color-adjust/);
    expect(outsideMediaQuery(griffelCss)).not.toMatch(/forced-color-adjust/);
    expect(headlessCss).toMatch(/@media\s*\(forced-colors:\s*active\)/);
    expect(griffelCss).toMatch(/@media\s*\(forced-colors:\s*active\)/);
  });
});

// =============================================================================
// The one behavioural difference the stylesheets do NOT share: specificity
// =============================================================================

describe('Override behaviour — headless defaults are strictly easier to override', () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await launchChromium();
  }, 120_000);

  afterAll(async () => {
    await browser?.close();
  });

  /**
   * Griffel writes its base rules as single atomic classes (specificity 0-1-0), so a
   * consumer's own single-class rule ties with them and source order decides. The
   * headless base rule is wrapped in `:where()` (specificity 0-0-0) precisely so the
   * consumer always wins. This is the intended improvement, and it is also the reason
   * a design system that layers its CSS must place the icons stylesheet in a layer —
   * a layered consumer rule loses to an unlayered icons rule regardless of specificity.
   */
  test('a consumer class beats the headless base rule but only ties with the Griffel one', async () => {
    const consumerRule = '.consumer-override { display: block; }';
    const markup = '<svg class="fui-Icon consumer-override" data-fui-icon=""></svg>';

    const measure = async (baseCss: string, iconClasses: string) => {
      const context = await browser.newContext();
      const page = await context.newPage();
      // Consumer stylesheet FIRST, icons stylesheet second — the pessimistic order.
      await page.setContent(
        `<!doctype html><html><head><style>${consumerRule}</style><style>${baseCss}</style></head>` +
          `<body>${markup.replace('fui-Icon', iconClasses)}</body></html>`,
      );
      const display = await page.evaluate(() => window.getComputedStyle(document.querySelector('svg')!).display);
      await context.close();
      return display;
    };

    // Reproduce Griffel's shape without depending on a generated hash.
    const griffelShape = '.fui-Icon-atomic-display { display: inline; }';
    const headlessShape = ':where([data-fui-icon]) { display: inline; }';

    expect(await measure(headlessShape, 'fui-Icon')).toBe('block');
    expect(await measure(griffelShape, 'fui-Icon fui-Icon-atomic-display')).toBe('inline');
  }, 60_000);
});
