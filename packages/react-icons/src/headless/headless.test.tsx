/**
 * @vitest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { FontFile } from '../utils/fonts/createFluentFontIcon.shared';
import { createFluentFontIcon, FluentFontIcon } from './fonts';
import { createFluentIcon } from './createFluentIcon';
import type { FluentIcon } from './createFluentIcon';
import { bundleIcon } from './bundleIcon';
import { DATA_FUI_ICON, DATA_FUI_ICON_RTL, DATA_FUI_ICON_HIDDEN, DATA_FUI_ICON_FONT } from './shared';
import { IconDirectionContextProvider } from '../contexts';

describe('Headless API — React component tests', () => {
  test('createFluentIcon should create a valid icon component', () => {
    const AccessTimeRegular: FluentIcon = createFluentIcon('AccessTimeRegular', '1em', [
      'M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24',
    ]);

    expect(AccessTimeRegular).toBeDefined();
    expect(AccessTimeRegular.displayName).toBe('AccessTimeRegular');

    const { container } = render(<AccessTimeRegular />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
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
    const MyColorIcon = createFluentIcon('MyColorIcon', '1em', svgContent);
    const { container } = render(<MyColorIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.innerHTML).toContain('circle');
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

  test('createFluentIcon sets data-fui-icon-rtl when flipInRtl and RTL context', () => {
    const d = 'M1 2 L3 4';
    const MyIcon = createFluentIcon('MyIcon', '1em', [d], { flipInRtl: true });

    // Without RTL context — no RTL attribute
    const { container: ltrContainer } = render(<MyIcon />);
    const ltrSvg = ltrContainer.querySelector('svg');
    expect(ltrSvg).not.toHaveAttribute(DATA_FUI_ICON_RTL);

    // With RTL context — RTL attribute present
    const { container: rtlContainer } = render(
      <IconDirectionContextProvider value={{ textDirection: 'rtl' }}>
        <MyIcon />
      </IconDirectionContextProvider>,
    );
    const rtlSvg = rtlContainer.querySelector('svg');
    expect(rtlSvg).toHaveAttribute(DATA_FUI_ICON_RTL, '');
  });

  test('createFluentIcon without flipInRtl does not set data-fui-icon-rtl even in RTL context', () => {
    const d = 'M1 2 L3 4';
    const MyIcon = createFluentIcon('MyIcon', '1em', [d]);

    const { container } = render(
      <IconDirectionContextProvider value={{ textDirection: 'rtl' }}>
        <MyIcon />
      </IconDirectionContextProvider>,
    );
    const svg = container.querySelector('svg');
    expect(svg).not.toHaveAttribute(DATA_FUI_ICON_RTL);
  });

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
