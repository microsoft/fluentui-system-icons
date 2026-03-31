/**
 * @vitest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { createFluentFontIcon, FluentFontIcon } from './fonts';
import { createFluentIcon } from './createFluentIcon';
import { createFluentIcon as createFluentSpriteIcon } from './createFluentIcon.svg-sprite';
import { bundleIcon } from './bundleIcon';
import type { FluentIcon } from './shared';
import { DATA_FUI_ICON, DATA_FUI_ICON_RTL, DATA_FUI_ICON_HIDDEN, DATA_FUI_ICON_FONT } from './shared';
import { IconDirectionContextProvider } from '../contexts';

describe('Base API — SVG icons', () => {
  test('createFluentIcon should create a valid icon component', () => {
    const AccessTimeRegular = createFluentIcon('AccessTimeRegular', '1em', [
      'M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24',
    ]);

    expect(AccessTimeRegular).toBeDefined();
    expect(AccessTimeRegular.displayName).toBe('AccessTimeRegular');

    const { container } = render(<AccessTimeRegular />);
    expect(container).toMatchInlineSnapshot(`
      <div>
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
          <path
            d="M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24"
            fill="currentColor"
          />
        </svg>
      </div>
    `);
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

  test('createFluentIcon has no Griffel class names (no atomic CSS hashes)', () => {
    const d = 'M1 2 L3 4';
    const MyIcon = createFluentIcon('MyIcon', '1em', [d]);
    const { container } = render(<MyIcon />);

    const svg = container.querySelector('svg');
    const classNames = svg?.getAttribute('class') ?? '';
    // Should only have fui-Icon, no Griffel-generated hash classes
    expect(classNames).toBe('fui-Icon');
  });

  describeRtlBehaviour(() => ({
    withFlip: createFluentIcon('MyIcon', '1em', ['M1 2 L3 4'], { flipInRtl: true }),
    withoutFlip: createFluentIcon('MyIcon', '1em', ['M1 2 L3 4']),
  }));
});

describe('Base API — SVG sprite icons', () => {
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

describe('Base API — Font icons', () => {
  const FontFile = {
    Filled: 0,
    Regular: 1,
    Resizable: 2,
    Light: 3,
  } as const;

  test('createFluentFontIcon renders with data attributes', () => {
    const MyFontIcon: FluentFontIcon = createFluentFontIcon('MyFontIcon', '\uE001', FontFile.Filled, 20);

    const { container } = render(<MyFontIcon />);
    const el = container.querySelector('i');
    expect(el).toBeTruthy();
    expect(el).toHaveAttribute(DATA_FUI_ICON, 'font');
    expect(el).toHaveAttribute(DATA_FUI_ICON_FONT, 'filled');
    expect(el).toHaveAttribute('aria-hidden', 'true');
    expect(el).toHaveClass('fui-Icon-font');
    expect(el?.textContent).toBe('\uE001');
  });

  test('createFluentFontIcon applies fontSize via style', () => {
    const MyFontIcon = createFluentFontIcon('MyFontIcon', '\uE001', FontFile.Regular, 24);
    const { container } = render(<MyFontIcon />);
    const el = container.querySelector('i');
    expect(el?.style.fontSize).toBe('24px');
  });

  test('createFluentFontIcon maps primaryFill to color', () => {
    const MyFontIcon = createFluentFontIcon('MyFontIcon', '\uE001', FontFile.Filled);
    const { container } = render(<MyFontIcon primaryFill="blue" />);
    const el = container.querySelector('i');
    expect(el?.style.color).toBe('blue');
  });
});

describe('Base API — bundleIcon', () => {
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

// =============================================================================

/**
 * Shared RTL test suite — reused by SVG icons and SVG sprite icons.
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
