/**
 * @vitest-environment jsdom
 */

/**
 * The attribute contract every icon factory emits: `data-fui-icon` and its state
 * markers, the `fui-*` class-name contract, and the RTL decision reaching the DOM.
 *
 * These are the behaviours the shipped stylesheet selects on, so they are the ones a
 * refactor must not quietly change. `icon-factories.test.tsx` covers the rendering and
 * prop-handling side of the same factories.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { createFluentFontIcon, FluentFontIcon } from './fonts/createFluentFontIcon';
import { createFluentIcon } from './createFluentIcon';
import { createFluentIcon as createFluentSpriteIcon } from './createFluentIcon.svg-sprite';
import { bundleIcon } from './bundleIcon';
import { wrapIcon } from './wrapIcon';
import type { FluentIcon } from './createFluentIcon';
import type { FluentIconsProps } from './FluentIconsProps.types';
import { DATA_FUI_ICON, DATA_FUI_ICON_RTL, DATA_FUI_ICON_HIDDEN, DATA_FUI_ICON_FONT } from './constants';
import { IconDirectionContextProvider } from '../contexts';

describe('SVG icons', () => {
  test('createFluentIcon should create a valid icon component', () => {
    const AccessTimeRegular = createFluentIcon('AccessTimeRegular', '1em', [
      'M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24',
    ]);

    expect(AccessTimeRegular).toBeDefined();
    expect(AccessTimeRegular.displayName).toBe('AccessTimeRegular');

    const { container } = render(<AccessTimeRegular />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute(DATA_FUI_ICON, '');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveClass('fui-Icon');
    expect(svg).toHaveAttribute('width', '1em');
    expect(svg).toHaveAttribute('height', '1em');
    expect(svg).toHaveAttribute('viewBox', '0 0 20 20');
  });

  test('createFluentIcon renders paths with fill', () => {
    const d = 'M1 2 L3 4';
    const MyIcon = createFluentIcon('MyIcon', '1em', [d]);
    const { container } = render(<MyIcon />);

    const path = container.querySelector('path');
    expect(path).toHaveAttribute('d', d);
    expect(path).toHaveAttribute('fill', 'currentColor');
  });

  test('createFluentIcon with custom primaryFill', () => {
    const d = 'M1 2 L3 4';
    const MyIcon = createFluentIcon('MyIcon', '1em', [d]);
    const { container } = render(<MyIcon primaryFill="red" />);

    const path = container.querySelector('path');
    expect(path).toHaveAttribute('fill', 'red');
  });

  test('createFluentIcon with color icon (string SVG content)', () => {
    const svgContent = '<circle cx="10" cy="10" r="5" fill="blue"/>';
    const MyColorIcon = createFluentIcon(
      'MyColorIcon',
      '1em',
      svgContent,
      // NOTE: color option is not currently used in createFluentIcon, but we include it here to verify that it doesn't interfere with string SVG content rendering
      { color: true },
    );
    const { container } = render(<MyColorIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toMatchInlineSnapshot(`
      <svg
        aria-hidden="true"
        class="fui-Icon"
        data-fui-icon=""
        fill="currentColor"
        height="1em"
        viewBox="0 0 20 20"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="10"
          cy="10"
          fill="blue"
          r="5"
        />
      </svg>
    `);

    expect(svg?.querySelector('circle')).toHaveAttribute('fill', 'blue');
  });

  test('createFluentIcon with color SvgNode[] containing style objects', () => {
    const MyColorIcon = createFluentIcon(
      'MyColorIcon',
      '1em',
      [
        [
          'g',
          { style: { maskType: 'alpha' } as unknown as string },
          [
            'rect',
            { width: '20', height: '20', fill: 'url(#a)', style: { mixBlendMode: 'multiply' } as unknown as string },
          ],
        ],
      ],
      { color: true },
    );
    const { container } = render(<MyColorIcon />);

    const g = container.querySelector('g');
    expect(g).toHaveStyle({ maskType: 'alpha' });

    const rect = container.querySelector('rect');
    expect(rect).toHaveStyle({ mixBlendMode: 'multiply' });
  });

  test('createFluentIcon does not pass filled or title to svg element', () => {
    const d = 'M1 2 L3 4';
    const MyIcon = createFluentIcon('MyIcon', '1em', [d]);
    const { container } = render(<MyIcon filled={true} title="test" />);

    const svg = container.querySelector('svg');
    expect(svg).not.toHaveAttribute('filled');
    expect(svg).not.toHaveAttribute('title');
    expect(svg).toHaveAttribute('aria-label', 'test');
    expect(svg).toHaveAttribute('role', 'img');
  });

  test('createFluentIcon emits no generated class names', () => {
    const d = 'M1 2 L3 4';
    const MyIcon = createFluentIcon('MyIcon', '1em', [d]);
    const { container } = render(<MyIcon />);

    const svg = container.querySelector('svg');
    const classNames = svg?.getAttribute('class') ?? '';
    // Only the `fui-Icon` contract class — no CSS-in-JS hashes.
    expect(classNames).toBe('fui-Icon');
  });

  describeRtlBehaviour(() => ({
    withFlip: createFluentIcon('MyIcon', '1em', ['M1 2 L3 4'], { flipInRtl: true }),
    withoutFlip: createFluentIcon('MyIcon', '1em', ['M1 2 L3 4']),
  }));
});

describe('SVG sprite icons', () => {
  test('renders svg with <use> element referencing sprite path', () => {
    const MyIcon = createFluentSpriteIcon('access-time-20-filled', '20', '/sprites/access-time.svg');

    const { container } = render(<MyIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg).toHaveAttribute(DATA_FUI_ICON, '');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveClass('fui-Icon');
    expect(svg).toHaveAttribute('width', '20');
    expect(svg).toHaveAttribute('height', '20');
    expect(svg).toHaveAttribute('viewBox', '0 0 20 20');

    const use = container.querySelector('use');
    expect(use).toHaveAttribute('href', '/sprites/access-time.svg#access-time-20-filled');
  });

  test('renders <use> with fragment-only href when no spritePath provided', () => {
    const MyIcon = createFluentSpriteIcon('access-time-20-filled', '20');

    const { container } = render(<MyIcon />);
    const use = container.querySelector('use');
    expect(use).toHaveAttribute('href', '#access-time-20-filled');
  });

  test('uses iconId as displayName', () => {
    const MyIcon = createFluentSpriteIcon('access-time-20-filled', '20');
    expect(MyIcon.displayName).toBe('access-time-20-filled');
  });

  test('resizable icon (1em) uses viewBox 0 0 20 20', () => {
    const MyIcon = createFluentSpriteIcon('access-time-filled', '1em');

    const { container } = render(<MyIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '1em');
    expect(svg).toHaveAttribute('height', '1em');
    expect(svg).toHaveAttribute('viewBox', '0 0 20 20');
  });

  test('applies custom primaryFill', () => {
    const MyIcon = createFluentSpriteIcon('access-time-20-filled', '20');

    const { container } = render(<MyIcon primaryFill="red" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'red');
  });

  describeRtlBehaviour(() => ({
    withFlip: createFluentSpriteIcon('arrow-left-20-regular', '20', '/sprites/arrow-left.svg', { flipInRtl: true }),
    withoutFlip: createFluentSpriteIcon('access-time-20-filled', '20', '/sprites/access-time.svg'),
  }));
});

describe('Font icons', () => {
  const FontFile = {
    Filled: 0,
    Regular: 1,
    Resizable: 2,
    Light: 3,
  } as const;

  test('createFluentFontIcon renders with data attributes', () => {
    const MyFontIcon: FluentFontIcon = createFluentFontIcon('MyFontIcon', '', FontFile.Filled, 20);

    const { container } = render(<MyFontIcon />);
    const el = container.querySelector('i');
    expect(el).toBeTruthy();
    expect(el).toHaveAttribute(DATA_FUI_ICON, 'font');
    expect(el).toHaveAttribute(DATA_FUI_ICON_FONT, 'filled');
    expect(el).toHaveAttribute('aria-hidden', 'true');
    expect(el).toHaveClass('fui-Icon-font');
    expect(el?.textContent).toBe('');
  });

  test('createFluentFontIcon applies fontSize via style', () => {
    const MyFontIcon = createFluentFontIcon('MyFontIcon', '', FontFile.Regular, 24);
    const { container } = render(<MyFontIcon />);
    const el = container.querySelector('i');
    expect(el?.style.fontSize).toBe('24px');
  });

  test('createFluentFontIcon maps primaryFill to color', () => {
    const MyFontIcon = createFluentFontIcon('MyFontIcon', '', FontFile.Filled);
    const { container } = render(<MyFontIcon primaryFill="blue" />);
    const el = container.querySelector('i');
    expect(el?.style.color).toBe('blue');
  });

  test('every font variant selects its family through data-fui-icon-font', () => {
    for (const [font, variant] of [
      [FontFile.Filled, 'filled'],
      [FontFile.Regular, 'regular'],
      [FontFile.Resizable, 'resizable'],
      [FontFile.Light, 'light'],
    ] as const) {
      const Icon = createFluentFontIcon('MyFontIcon', '', font, 20);
      const { container } = render(<Icon />);
      expect(container.querySelector('i'), variant).toHaveAttribute(DATA_FUI_ICON_FONT, variant);
    }
  });
});

describe('bundleIcon', () => {
  test('bundleIcon renders both variants with data attributes', () => {
    const d = 'M1 2 L3 4';
    const FilledIcon = createFluentIcon('TestFilled', '1em', [d]);
    const RegularIcon = createFluentIcon('TestRegular', '1em', [d]);
    const BundledIcon = bundleIcon(FilledIcon, RegularIcon);

    // When filled=true, Regular gets data-fui-icon-hidden
    const { container: containerFilled } = render(<BundledIcon filled />);
    const svgsFilled = containerFilled.querySelectorAll('svg');
    expect(svgsFilled).toHaveLength(2);

    const filledSvg = containerFilled.querySelector('.fui-Icon-filled');
    expect(filledSvg).not.toHaveAttribute(DATA_FUI_ICON_HIDDEN);

    const regularSvgHidden = containerFilled.querySelector('.fui-Icon-regular');
    expect(regularSvgHidden).toHaveAttribute(DATA_FUI_ICON_HIDDEN, '');

    // When filled=false, Filled gets data-fui-icon-hidden
    const { container: containerRegular } = render(<BundledIcon filled={false} />);
    const filledSvgHidden = containerRegular.querySelector('.fui-Icon-filled');
    expect(filledSvgHidden).toHaveAttribute(DATA_FUI_ICON_HIDDEN, '');

    const regularSvg = containerRegular.querySelector('.fui-Icon-regular');
    expect(regularSvg).not.toHaveAttribute(DATA_FUI_ICON_HIDDEN);
  });

  test('bundleIcon preserves fui-Icon class on both variants', () => {
    const d = 'M1 2 L3 4';
    const FilledIcon = createFluentIcon('TestFilled', '1em', [d]);
    const RegularIcon = createFluentIcon('TestRegular', '1em', [d]);
    const BundledIcon = bundleIcon(FilledIcon, RegularIcon);

    const { container } = render(<BundledIcon filled />);
    const svgs = container.querySelectorAll('svg');
    svgs.forEach((svg) => {
      expect(svg).toHaveClass('fui-Icon');
    });
  });
});

describe('wrapIcon', () => {
  const CustomSvg = (iconProps: FluentIconsProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...iconProps}>
      <path fill="currentColor" d="M10 2l6 16H4l6-16z" />
    </svg>
  );

  test('wrapIcon should create a valid icon component', () => {
    const CustomIcon = wrapIcon(CustomSvg, 'CustomIcon');

    expect(CustomIcon).toBeDefined();
    expect(CustomIcon.displayName).toBe('CustomIcon');

    const { container } = render(<CustomIcon />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <svg
          aria-hidden="true"
          data-fui-icon=""
          fill="currentColor"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2l6 16H4l6-16z"
            fill="currentColor"
          />
        </svg>
      </div>
    `);
  });

  test('wrapIcon forwards the base data attribute and a11y state to the wrapped component', () => {
    const CustomIcon = wrapIcon(CustomSvg, 'CustomIcon');

    const { container } = render(<CustomIcon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute(DATA_FUI_ICON, '');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  test('wrapIcon maps primaryFill to fill', () => {
    const CustomIcon = wrapIcon(CustomSvg, 'CustomIcon');

    const { container } = render(<CustomIcon primaryFill="red" />);
    expect(container.querySelector('svg')).toHaveAttribute('fill', 'red');
  });

  test('wrapIcon does not pass filled or title to the wrapped element', () => {
    const CustomIcon = wrapIcon(CustomSvg, 'CustomIcon');

    const { container } = render(<CustomIcon filled={true} title="test" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toHaveAttribute('filled');
    expect(svg).not.toHaveAttribute('title');
    expect(svg).toHaveAttribute('aria-label', 'test');
    expect(svg).toHaveAttribute('role', 'img');
  });

  test('wrapIcon forwards a ref to the wrapped element', () => {
    const CustomIcon = wrapIcon(CustomSvg, 'CustomIcon');
    const ref = React.createRef<SVGSVGElement>();

    const { container } = render(<CustomIcon ref={ref} />);
    expect(ref.current).toBe(container.querySelector('svg'));
  });

  test('wrapIcon emits no class attribute at all when the consumer supplies none', () => {
    const CustomIcon = wrapIcon(CustomSvg, 'CustomIcon');

    const { container } = render(<CustomIcon />);
    // `wrapIcon` is the one factory that contributes no `fui-*` contract class, so with
    // no consumer className there is nothing left to put in `class`. This is a DOM-shape
    // change from the removed CSS-in-JS implementation, recorded in the CHANGELOG.
    expect(container.querySelector('svg')).not.toHaveAttribute('class');
  });

  test('wrapIcon preserves a consumer supplied className', () => {
    const CustomIcon = wrapIcon(CustomSvg, 'CustomIcon');

    const { container } = render(<CustomIcon className="my-icon" />);
    expect(container.querySelector('svg')).toHaveClass('my-icon');
  });

  describeRtlBehaviour(() => ({
    withFlip: wrapIcon(CustomSvg, 'CustomIcon', { flipInRtl: true }),
    withoutFlip: wrapIcon(CustomSvg, 'CustomIcon'),
  }));
});

// =============================================================================

/**
 * Shared RTL test suite — reused by SVG icons, SVG sprite icons and wrapIcon.
 */
function describeRtlBehaviour(factory: () => { withFlip: FluentIcon; withoutFlip: FluentIcon }) {
  describe('RTL', () => {
    test('sets data-fui-icon-rtl when flipInRtl and RTL context', () => {
      const { withFlip: Icon } = factory();

      // Without RTL context — no RTL attribute
      const { container: ltrContainer } = render(<Icon />);
      expect(ltrContainer.querySelector('svg')).not.toHaveAttribute(DATA_FUI_ICON_RTL);

      // With RTL context — RTL attribute present
      const { container: rtlContainer } = render(
        <IconDirectionContextProvider value={{ textDirection: 'rtl' }}>
          <Icon />
        </IconDirectionContextProvider>,
      );
      expect(rtlContainer.querySelector('svg')).toHaveAttribute(DATA_FUI_ICON_RTL, '');
    });

    test('removes data-fui-icon-rtl on re-render when direction changes back to ltr', () => {
      const { withFlip: Icon } = factory();

      const { container, rerender } = render(
        <IconDirectionContextProvider value={{ textDirection: 'rtl' }}>
          <Icon />
        </IconDirectionContextProvider>,
      );
      expect(container.querySelector('svg')).toHaveAttribute(DATA_FUI_ICON_RTL, '');

      rerender(
        <IconDirectionContextProvider value={{ textDirection: 'ltr' }}>
          <Icon />
        </IconDirectionContextProvider>,
      );
      expect(container.querySelector('svg')).not.toHaveAttribute(DATA_FUI_ICON_RTL);
    });

    test('without flipInRtl does not set data-fui-icon-rtl even in RTL context', () => {
      const { withoutFlip: Icon } = factory();

      const { container } = render(
        <IconDirectionContextProvider value={{ textDirection: 'rtl' }}>
          <Icon />
        </IconDirectionContextProvider>,
      );
      expect(container.querySelector('svg')).not.toHaveAttribute(DATA_FUI_ICON_RTL);
    });
  });
}
