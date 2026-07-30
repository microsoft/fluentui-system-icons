/**
 * @vitest-environment jsdom
 */

/**
 * Rendered styling contract — dimensions 2, 3 and 4: DOM output, computed styles, RTL.
 *
 * Styling is no longer generated at runtime: the factories emit attributes and the
 * shipped `styles.css` resolves them. That moves the risk from "does the runtime insert
 * the right rule" to "does the stylesheet still claim the right elements", which a
 * declaration-level read of the CSS cannot answer. So every scenario below is
 *
 *   1. rendered once and checked for the attributes and `fui-*` classes the stylesheet
 *      selects on;
 *   2. replayed in a real browser (Chromium via Playwright, already a root
 *      devDependency and installed by `pr.yml`) with the shipped stylesheet attached,
 *      and measured with `getComputedStyle` in both a normal and a
 *      `forced-colors: active` context. Expected values are pinned absolutely, so a
 *      rule going missing fails rather than passing vacuously.
 *
 * An `<svg>` that carries no `data-fui-icon` sits in the same document as the negative
 * control: it is the one element the stylesheet does not claim, so it proves the
 * readings come from the rules and not from a Chromium default.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import * as React from 'react';
import { render } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { chromium, type Browser } from 'playwright';

import { createFluentIcon } from '../utils/createFluentIcon';
import { createFluentIcon as createSpriteIcon } from '../utils/createFluentIcon.svg-sprite';
import { bundleIcon } from '../utils/bundleIcon';
import { wrapIcon } from '../utils/wrapIcon';
import { createFluentFontIcon } from '../utils/fonts/createFluentFontIcon';

import { IconDirectionContextProvider } from '../contexts';
import type { FluentIconsProps } from '../utils/FluentIconsProps.types';

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
// Scenarios
// =============================================================================

type Scenario = {
  /** Stable key used to name the element in the computed-style tables. */
  name: string;
  render: () => React.ReactElement;
  /**
   * The state attributes each icon element must carry, in document order. Only the
   * `data-fui-*` family is listed — these are exactly what the stylesheet selects on.
   */
  stateAttributes: Record<string, string>[];
};

const scenarios: Scenario[] = [
  {
    name: 'sized-svg',
    render: () => React.createElement(createFluentIcon('Sized20', '20', [PATH_D])),
    stateAttributes: [{ 'data-fui-icon': '' }],
  },
  {
    name: 'resizable-svg-with-fontsize',
    render: () => React.createElement(createFluentIcon('Resizable', '1em', [PATH_D]), { fontSize: '32px' }),
    stateAttributes: [{ 'data-fui-icon': '' }],
  },
  {
    name: 'svg-with-title-and-classname',
    render: () =>
      React.createElement(createFluentIcon('Titled', '20', [PATH_D]), {
        title: 'a title',
        className: 'consumer-class',
        primaryFill: 'red',
      }),
    stateAttributes: [{ 'data-fui-icon': '' }],
  },
  {
    name: 'color-svg-with-idprefix',
    render: () =>
      React.createElement(
        createFluentIcon(
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
    stateAttributes: [{ 'data-fui-icon': '' }],
  },
  {
    name: 'sprite-svg',
    render: () => React.createElement(createSpriteIcon('access-time-20-filled', '20', '/s.svg')),
    stateAttributes: [{ 'data-fui-icon': '' }],
  },
  {
    name: 'wrapped-svg',
    render: () => React.createElement(wrapIcon(CustomSvg, 'Wrapped')),
    stateAttributes: [{ 'data-fui-icon': '' }],
  },
  {
    name: 'bundled-filled',
    render: () =>
      React.createElement(bundleIcon(createFluentIcon('F', '20', [PATH_D]), createFluentIcon('R', '20', [PATH_D])), {
        filled: true,
      }),
    stateAttributes: [{ 'data-fui-icon': '' }, { 'data-fui-icon': '', 'data-fui-icon-hidden': '' }],
  },
  {
    name: 'bundled-regular',
    render: () =>
      React.createElement(bundleIcon(createFluentIcon('F', '20', [PATH_D]), createFluentIcon('R', '20', [PATH_D])), {
        filled: false,
      }),
    stateAttributes: [{ 'data-fui-icon': '', 'data-fui-icon-hidden': '' }, { 'data-fui-icon': '' }],
  },
  {
    name: 'rtl-flipped-svg',
    render: () => rtl(React.createElement(createFluentIcon('Flip', '20', [PATH_D], { flipInRtl: true }))),
    stateAttributes: [{ 'data-fui-icon': '', 'data-fui-icon-rtl': '' }],
  },
  {
    name: 'rtl-unflipped-svg',
    render: () => rtl(React.createElement(createFluentIcon('NoFlip', '20', [PATH_D]))),
    stateAttributes: [{ 'data-fui-icon': '' }],
  },
  {
    name: 'rtl-flipped-wrapped',
    render: () => rtl(React.createElement(wrapIcon(CustomSvg, 'Wrapped', { flipInRtl: true }))),
    stateAttributes: [{ 'data-fui-icon': '', 'data-fui-icon-rtl': '' }],
  },
  {
    name: 'rtl-flipped-bundle',
    render: () =>
      rtl(
        React.createElement(
          bundleIcon(
            createFluentIcon('F', '20', [PATH_D], { flipInRtl: true }),
            createFluentIcon('R', '20', [PATH_D], { flipInRtl: true }),
          ),
          { filled: true },
        ),
      ),
    stateAttributes: [
      { 'data-fui-icon': '', 'data-fui-icon-rtl': '' },
      { 'data-fui-icon': '', 'data-fui-icon-rtl': '', 'data-fui-icon-hidden': '' },
    ],
  },
  {
    name: 'font-filled',
    render: () => React.createElement(createFluentFontIcon('FontFilled', '', FontFile.Filled, 20)),
    stateAttributes: [{ 'data-fui-icon': 'font', 'data-fui-icon-font': 'filled' }],
  },
  {
    name: 'font-regular',
    render: () => React.createElement(createFluentFontIcon('FontRegular', '', FontFile.Regular, 20)),
    stateAttributes: [{ 'data-fui-icon': 'font', 'data-fui-icon-font': 'regular' }],
  },
  {
    name: 'font-resizable',
    render: () =>
      React.createElement(createFluentFontIcon('FontResizable', '', FontFile.Resizable, undefined), {
        fontSize: '28px',
      }),
    stateAttributes: [{ 'data-fui-icon': 'font', 'data-fui-icon-font': 'resizable' }],
  },
  {
    name: 'font-light',
    render: () => React.createElement(createFluentFontIcon('FontLight', '', FontFile.Light, 20)),
    stateAttributes: [{ 'data-fui-icon': 'font', 'data-fui-icon-font': 'light' }],
  },
  {
    name: 'font-with-primaryfill',
    render: () =>
      React.createElement(createFluentFontIcon('FontColored', '', FontFile.Filled, 20), { primaryFill: 'red' }),
    stateAttributes: [{ 'data-fui-icon': 'font', 'data-fui-icon-font': 'filled' }],
  },
];

// =============================================================================
// Render once, up front
// =============================================================================

/** Class names that are part of the public contract rather than of the styling mechanism. */
const isContractClass = (token: string) => token === 'fui-Icon' || token.startsWith('fui-Icon-');

/** Class names the scenarios pass in as a consumer would; the factories never generate them. */
const CONSUMER_CLASSES = new Set(['consumer-class']);

type IconSnapshot = {
  tagName: string;
  /** `data-fui-*` attributes only — what the stylesheet selects on. */
  stateAttributes: Record<string, string>;
  /** `fui-*` tokens — the public class-name contract. */
  contractClasses: string[];
  /** Consumer-supplied tokens, which must survive untouched. */
  consumerClasses: string[];
  /** Everything else on `class`. Must always be empty: nothing generates class names. */
  generatedClasses: string[];
};

function snapshot(el: Element): IconSnapshot {
  const stateAttributes: Record<string, string> = {};
  for (const attr of Array.from(el.attributes)) {
    if (attr.name.startsWith('data-fui-')) {
      stateAttributes[attr.name] = attr.value;
    }
  }
  const tokens = (el.getAttribute('class') ?? '').split(/\s+/).filter(Boolean);

  return {
    tagName: el.tagName.toLowerCase(),
    stateAttributes,
    contractClasses: tokens.filter(isContractClass),
    consumerClasses: tokens.filter((token) => CONSUMER_CLASSES.has(token)),
    generatedClasses: tokens.filter((token) => !isContractClass(token) && !CONSUMER_CLASSES.has(token)),
  };
}

type RenderedScenario = { markup: string; icons: IconSnapshot[] };

const rendered = new Map<string, RenderedScenario>(
  scenarios.map((scenario) => {
    const { container } = render(scenario.render());
    return [
      scenario.name,
      {
        markup: container.innerHTML,
        icons: Array.from(container.querySelectorAll('[data-fui-icon]')).map(snapshot),
      },
    ];
  }),
);

const stylesheet = fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'styles.css'), 'utf8');

// =============================================================================
// Dimension 2 — the DOM the stylesheet selects on
// =============================================================================

describe('DOM contract — the attributes the stylesheet selects on', () => {
  test('the stylesheet under test actually contains the rules (guards every later assertion)', () => {
    expect(stylesheet).toMatch(/:where\(\[data-fui-icon\]\)/);
    expect(stylesheet).toMatch(/\[data-fui-icon-rtl\]/);
    expect(stylesheet).toMatch(/\[data-fui-icon-hidden\]/);
    expect(stylesheet).toMatch(/\[data-fui-icon-font='filled'\]/);
    expect(stylesheet).toMatch(/forced-color-adjust:\s*auto/);
  });

  test.each(scenarios)('$name emits exactly the recorded state attributes', (scenario) => {
    const icons = rendered.get(scenario.name)!.icons;

    expect(icons).toHaveLength(scenario.stateAttributes.length);
    expect(icons.map((icon) => icon.stateAttributes)).toEqual(scenario.stateAttributes);
  });

  test('no factory ever emits a generated class name', () => {
    // The whole point of the promotion: `class` carries the `fui-*` contract and the
    // consumer's own tokens, nothing else.
    for (const [name, scenario] of rendered) {
      expect(
        scenario.icons.map((icon) => icon.generatedClasses),
        name,
      ).toEqual(scenario.icons.map(() => []));
    }
  });

  test('the contract classes land where they are documented to', () => {
    expect(rendered.get('sized-svg')!.icons.map((icon) => icon.contractClasses)).toEqual([['fui-Icon']]);
    expect(rendered.get('bundled-filled')!.icons.map((icon) => icon.contractClasses)).toEqual([
      ['fui-Icon', 'fui-Icon-filled'],
      ['fui-Icon', 'fui-Icon-regular'],
    ]);
    expect(rendered.get('font-filled')!.icons.map((icon) => icon.contractClasses)).toEqual([['fui-Icon-font']]);
  });

  test('wrapIcon is the one factory that emits no class attribute at all', () => {
    // Every other factory adds `fui-Icon`, so `class` survives with the contract token.
    // `wrapIcon` adds none, so the attribute is absent rather than present-and-empty.
    // Code doing `element.className.split(' ')` on a wrapped icon is the one pattern
    // this promotion breaks; recorded in the CHANGELOG.
    expect(rendered.get('wrapped-svg')!.markup).not.toContain('class=');
    expect(rendered.get('wrapped-svg')!.icons[0]!.contractClasses).toEqual([]);
  });

  test('a consumer className reaches the element untouched', () => {
    expect(rendered.get('svg-with-title-and-classname')!.icons[0]!.consumerClasses).toEqual(['consumer-class']);
  });
});

// =============================================================================
// Dimension 4 — RTL
// =============================================================================

describe('RTL — one context, one decision, expressed as an attribute', () => {
  test('the flip marker appears only when flipInRtl is set inside an RTL provider', () => {
    expect(rendered.get('rtl-flipped-svg')!.icons[0]!.stateAttributes['data-fui-icon-rtl']).toBe('');
    expect(rendered.get('rtl-unflipped-svg')!.icons[0]!.stateAttributes['data-fui-icon-rtl']).toBeUndefined();
    expect(rendered.get('sized-svg')!.icons[0]!.stateAttributes['data-fui-icon-rtl']).toBeUndefined();
  });

  test('both bundled variants flip together', () => {
    expect(rendered.get('rtl-flipped-bundle')!.icons.map((icon) => icon.stateAttributes['data-fui-icon-rtl'])).toEqual([
      '',
      '',
    ]);
  });
});

// =============================================================================
// Dimension 3 — computed styles in a real browser
// =============================================================================

/** Properties the stylesheet owns. Everything else is inherited or UA default. */
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

/** The `<svg>` the stylesheet deliberately does not claim — the negative control. */
const CONTROL_KEY = 'unclaimed-svg#0';

/**
 * Chromium is a hard requirement of this suite, not an optional extra: a declaration
 * level read of the stylesheet could not tell you what the cascade does with it.
 * `pr.yml` installs the browser before the Build and Test steps; locally it is one
 * command, so fail loudly rather than skipping and reporting a green gate that never ran.
 */
async function launchChromium(): Promise<Browser> {
  try {
    return await chromium.launch();
  } catch (error) {
    throw new Error(
      'Could not launch Chromium for the computed-style contract check. Run `yarn playwright install chromium` ' +
        `from the repository root and try again.\n\nUnderlying error: ${(error as Error).message}`,
    );
  }
}

function documentUnderTest(): string {
  const body = scenarios
    .map((scenario) => `<div data-scenario="${scenario.name}">${rendered.get(scenario.name)!.markup}</div>`)
    .concat(
      // Negative control: an <svg> with no `data-fui-icon`, so no rule in the stylesheet
      // claims it. `[data-scenario]`/`[data-fui-icon]` selection below skips it, and it is
      // measured separately.
      '<svg id="unclaimed-svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1 2 L3 4" /></svg>',
    )
    .join('\n');

  return (
    `<!doctype html><html><head><meta charset="utf-8"><style>${stylesheet}</style></head>` +
    `<body>${body}</body></html>`
  );
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

      const measure = (element: Element) => {
        const computed = window.getComputedStyle(element);
        const values: Record<string, string> = {};
        for (const property of properties) {
          // Quoting of font family names is not observable, normalise it away.
          values[property] = String(computed[property as never] ?? '').replace(/["']/g, '');
        }
        return values;
      };

      document.querySelectorAll('[data-scenario]').forEach((wrapper) => {
        const name = wrapper.getAttribute('data-scenario');
        wrapper.querySelectorAll('[data-fui-icon]').forEach((element, index) => {
          out[`${name}#${index}`] = measure(element);
        });
      });

      out['unclaimed-svg#0'] = measure(document.getElementById('unclaimed-svg')!);

      return out;
    },
    OWNED_PROPERTIES as unknown as string[],
  );

  await context.close();
  return result;
}

describe('Computed styles — what the shipped stylesheet actually does', () => {
  let browser: Browser;
  let styles: ComputedStyles;
  let hcm: ComputedStyles;

  beforeAll(async () => {
    browser = await launchChromium();
    const html = documentUnderTest();
    styles = await computedStyles(browser, html, 'none');
    hcm = await computedStyles(browser, html, 'active');
  }, 120_000);

  afterAll(async () => {
    await browser?.close();
  });

  test('every icon element in the document was measured', () => {
    const expectedKeys = scenarios
      .flatMap((scenario) => scenario.stateAttributes.map((_, index) => `${scenario.name}#${index}`))
      .concat(CONTROL_KEY)
      .sort();

    expect(Object.keys(styles).sort()).toEqual(expectedKeys);
  });

  test('SVG icon defaults are the documented ones', () => {
    expect(styles['sized-svg#0']).toMatchObject({ display: 'inline', lineHeight: '0px', transform: 'none' });
    expect(styles['sprite-svg#0']).toMatchObject({ display: 'inline', lineHeight: '0px' });
    expect(styles['wrapped-svg#0']).toMatchObject({ display: 'inline', lineHeight: '0px' });
  });

  test('the negative control is untouched, so the readings above come from the rules', () => {
    expect(styles[CONTROL_KEY]!.display).toBe('inline');
    // The UA default for `<svg>` line-height is inherited `normal`, not the `0px` the
    // base rule sets — the one property that separates claimed from unclaimed.
    expect(styles[CONTROL_KEY]!.lineHeight).not.toBe('0px');
  });

  test('the RTL flip is the documented matrix', () => {
    expect(styles['rtl-flipped-svg#0']!.transform).toBe('matrix(-1, 0, 0, 1, 0, 0)');
    expect(styles['rtl-flipped-wrapped#0']!.transform).toBe('matrix(-1, 0, 0, 1, 0, 0)');
    expect(styles['rtl-flipped-bundle#0']!.transform).toBe('matrix(-1, 0, 0, 1, 0, 0)');
    expect(styles['rtl-unflipped-svg#0']!.transform).toBe('none');
  });

  test('bundleIcon hides exactly one variant', () => {
    expect([styles['bundled-filled#0']!.display, styles['bundled-filled#1']!.display]).toEqual(['inline', 'none']);
    expect([styles['bundled-regular#0']!.display, styles['bundled-regular#1']!.display]).toEqual(['none', 'inline']);
  });

  test('font icons get their own box, line height and family', () => {
    for (const [scenario, family] of [
      ['font-filled#0', 'FluentSystemIconsFilled'],
      ['font-regular#0', 'FluentSystemIconsRegular'],
      ['font-resizable#0', 'FluentSystemIcons'],
      ['font-light#0', 'FluentSystemIconsLight'],
    ] as const) {
      expect(styles[scenario], scenario).toMatchObject({
        display: 'inline-block',
        fontStyle: 'normal',
        fontFamily: family,
      });
    }
  });

  test('high contrast mode re-enables forced-color-adjust for every SVG icon', () => {
    // Chromium's forced-colors UA sheet puts `<svg>` at `preserve-parent-color`, which
    // would leave the icon's internal colours untouched. The rule overrides it back to
    // `auto` for anything carrying `data-fui-icon`.
    //
    // `wrapped-svg` is included deliberately: the removed CSS-in-JS implementation scoped
    // this fix to the two factories that called `useRootStyles()`, so a wrapped custom SVG
    // did NOT get it. The stylesheet targets `[data-fui-icon]`, which `wrapIcon` also sets,
    // so wrapped icons now get the fix too. That is a behaviour improvement, recorded in
    // the CHANGELOG.
    for (const key of [
      'sized-svg#0',
      'sprite-svg#0',
      'wrapped-svg#0',
      'rtl-flipped-wrapped#0',
      'bundled-filled#0',
      'rtl-flipped-svg#0',
    ]) {
      expect(hcm[key]!.forcedColorAdjust, key).toBe('auto');
    }

    // The control proves those `auto` readings are the rule's doing.
    expect(hcm[CONTROL_KEY]!.forcedColorAdjust).toBe('preserve-parent-color');
  });

  test('font icons are excluded from the rule and keep the element default', () => {
    // `<i>` is not an SVG, so Chromium already leaves it at `auto`; the
    // `:not([data-fui-icon="font"])` guard declines to claim it and the observable
    // result agrees.
    expect(hcm['font-filled#0']!.forcedColorAdjust).toBe('auto');
  });

  test('the forced-colors guard is intact: the property is never set unconditionally', () => {
    // The browser cannot show this — outside forced colors Chromium reports `auto` for
    // every element regardless — so assert it against the rules themselves.
    const outsideMediaQuery = stylesheet.replace(/@media[^{]*\{[\s\S]*?\}\s*\}/g, '');

    expect(outsideMediaQuery).not.toMatch(/forced-color-adjust/);
    expect(stylesheet).toMatch(/@media\s*\(forced-colors:\s*active\)/);
  });
});

// =============================================================================
// Cascade position — the two facts consumers must act on
// =============================================================================

describe('Cascade position of the shipped stylesheet', () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await launchChromium();
  }, 120_000);

  afterAll(async () => {
    await browser?.close();
  });

  test('the stylesheet is unlayered, so a layered design system must import it into a layer', () => {
    // Cascade layers are compared before specificity: a layered consumer rule loses to an
    // unlayered rule here no matter how specific it is, and `[data-fui-icon-hidden]` is
    // deliberately not `:where()`-wrapped. Consumers using `@layer` must write
    // `@import '@fluentui/react-icons/styles.css' layer(their-base-layer);`.
    // Shipping the layer here instead would impose a layer name on every consumer, so the
    // file stays unlayered and the obligation is documented rather than assumed.
    const rules = stylesheet.replace(/\/\*[\s\S]*?\*\//g, '');

    expect(rules).not.toMatch(/@layer/);
    // …and the obligation is stated in the file itself, not only in the docs.
    expect(stylesheet).toMatch(/layer\(your-base-layer\)/);
  });

  test('a consumer class beats the base rule, because it is wrapped in :where()', async () => {
    // `:where()` gives the base rule zero specificity so a consumer's own single-class
    // rule always wins, regardless of stylesheet order. Measured with the consumer
    // stylesheet FIRST — the pessimistic order.
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setContent(
      '<!doctype html><html><head>' +
        '<style>.consumer-override { display: block; }</style>' +
        `<style>${stylesheet}</style>` +
        '</head><body><svg class="fui-Icon consumer-override" data-fui-icon=""></svg></body></html>',
    );
    const display = await page.evaluate(() => window.getComputedStyle(document.querySelector('svg')!).display);
    await context.close();

    expect(display).toBe('block');
  }, 60_000);
});
