/**
 * @vitest-environment jsdom
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { createImageIcon } from './createImageIcon';
import { createImageColorIcon } from './createImageColorIcon';
import { DATA_FUI_ICON, DATA_FUI_ICON_RTL, imageColorIconClassName, imageIconClassName } from './shared';
import { IconDirectionContextProvider } from '../contexts';

const URL = '/assets/access-time-regular.abc123.svg';

describe('Image API — mask icons (createImageIcon)', () => {
  test('creates a valid icon component', () => {
    const AccessTimeRegular = createImageIcon('AccessTimeRegular', URL, '1em');

    expect(AccessTimeRegular).toBeDefined();
    expect(AccessTimeRegular.displayName).toBe('AccessTimeRegular');

    const { container } = render(<AccessTimeRegular />);
    const span = container.querySelector('span');

    expect(span).not.toBeNull();
    expect(span).toHaveClass(imageIconClassName);
    expect(span).toHaveAttribute(DATA_FUI_ICON, '');
    // aria-hidden by default (no title)
    expect(span).toHaveAttribute('aria-hidden', 'true');
    // the per-icon URL is carried via the --fui-img custom property
    expect(span?.style.getPropertyValue('--fui-img')).toBe(`url("${URL}")`);
  });

  test('does not leak SVG path data into the DOM (zero JS rendering)', () => {
    const Icon = createImageIcon('Icon', URL, '1em');
    const { container } = render(<Icon />);

    expect(container.querySelector('svg')).toBeNull();
    expect(container.querySelector('path')).toBeNull();
  });

  test('title maps to aria-label + role="img"', () => {
    const Icon = createImageIcon('Icon', URL, '1em');
    const { container } = render(<Icon title="Access time" />);
    const span = container.querySelector('span');

    expect(span).toHaveAttribute('aria-label', 'Access time');
    expect(span).toHaveAttribute('role', 'img');
    expect(span).not.toHaveAttribute('aria-hidden');
  });

  test('primaryFill overrides color (recolor)', () => {
    const Icon = createImageIcon('Icon', URL, '1em');
    const { container } = render(<Icon primaryFill="red" />);
    const span = container.querySelector('span');

    expect(span?.style.color).toBe('red');
  });

  test('primaryFill="currentColor" does not set an explicit color', () => {
    const Icon = createImageIcon('Icon', URL, '1em');
    const { container } = render(<Icon primaryFill="currentColor" />);
    const span = container.querySelector('span');

    expect(span?.style.color).toBe('');
  });

  test('sized icons are pinned via font-size, resizable icons are not', () => {
    const Sized = createImageIcon('Sized', URL, '24');
    const { container: sizedContainer } = render(<Sized />);
    expect(sizedContainer.querySelector('span')?.style.fontSize).toBe('24px');

    const Resizable = createImageIcon('Resizable', URL, '1em');
    const { container: resizableContainer } = render(<Resizable />);
    expect(resizableContainer.querySelector('span')?.style.fontSize).toBe('');
  });

  test('flipInRtl sets the RTL data attribute only in an RTL context', () => {
    const Icon = createImageIcon('Icon', URL, '1em', { flipInRtl: true });

    const { container: ltr } = render(<Icon />);
    expect(ltr.querySelector('span')).not.toHaveAttribute(DATA_FUI_ICON_RTL);

    const { container: rtl } = render(
      <IconDirectionContextProvider value={{ textDirection: 'rtl' }}>
        <Icon />
      </IconDirectionContextProvider>,
    );
    expect(rtl.querySelector('span')).toHaveAttribute(DATA_FUI_ICON_RTL, '');
  });

  test('forwards className and arbitrary props', () => {
    const Icon = createImageIcon('Icon', URL, '1em');
    const { container } = render(<Icon className="custom" data-testid="x" />);
    const span = container.querySelector('span');

    expect(span).toHaveClass(imageIconClassName);
    expect(span).toHaveClass('custom');
    expect(span).toHaveAttribute('data-testid', 'x');
  });
});

describe('Image API — color icons (createImageColorIcon)', () => {
  const COLOR_URL = '/assets/calendar-color.def456.svg';

  test('renders an <img> with the icon source', () => {
    const CalendarColor = createImageColorIcon('CalendarColor', COLOR_URL, '1em');
    const { container } = render(<CalendarColor />);
    const img = container.querySelector('img');

    expect(img).not.toBeNull();
    expect(img).toHaveClass(imageColorIconClassName);
    expect(img).toHaveAttribute('src', COLOR_URL);
    expect(img).toHaveAttribute(DATA_FUI_ICON, '');
  });

  test('no title renders alt="" (decorative)', () => {
    const Icon = createImageColorIcon('Icon', COLOR_URL, '1em');
    const { container } = render(<Icon />);
    expect(container.querySelector('img')).toHaveAttribute('alt', '');
  });

  test('title maps to alt={title}', () => {
    const Icon = createImageColorIcon('Icon', COLOR_URL, '1em');
    const { container } = render(<Icon title="Calendar" />);
    expect(container.querySelector('img')).toHaveAttribute('alt', 'Calendar');
  });

  test('sized color icons are pinned via font-size', () => {
    const Icon = createImageColorIcon('Icon', COLOR_URL, '24');
    const { container } = render(<Icon />);
    expect(container.querySelector('img')?.style.fontSize).toBe('24px');
  });
});

describe('Image API — image.css', () => {
  const css = fs.readFileSync(path.join(__dirname, 'image.css'), 'utf-8');

  test('mask icon uses currentColor and prefixed mask fallback', () => {
    expect(css).toContain('background-color: currentColor');
    expect(css).toContain('-webkit-mask: var(--fui-img)');
    expect(css).toContain('mask: var(--fui-img)');
  });

  test('forced-colors keeps the mask visible via CanvasText (HCM)', () => {
    expect(css).toMatch(/@media\s*\(forced-colors:\s*active\)/);
    expect(css).toContain('background-color: CanvasText');
  });
});
