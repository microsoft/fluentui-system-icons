import '@testing-library/jest-dom/vitest';
import * as React from 'react';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import mailMarkup from '@fluentui/svg-icons/icons/mail_24_regular.svg?raw';
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';
import mailLightUrl from '@fluentui/svg-icons/icons/mail_32_light.svg?url';
import spanishBoldUrl from '@fluentui/svg-icons/icons/es/text_bold_24_regular.svg?url';
import serbianBoldUrl from '@fluentui/svg-icons/icons/sr-cyrl/text_bold_24_regular.svg?url';
import { Image } from './SvgIconsImage.stories';
import { Inline } from './SvgIconsInline.stories';
import { Mask } from './SvgIconsMask.stories';
import { Variants } from './SvgIconsVariants.stories';
import { Coloring } from './SvgIconsColoring.stories';

afterEach(cleanup);

describe('Plain SVG examples', () => {
  it('renders an external image with an accessible name and reserved dimensions', () => {
    render(<Image />);

    const image = screen.getByRole('img', { name: 'Mail' });
    expect(image).toHaveAttribute('src', mailUrl);
    expect(image).toHaveAttribute('width', '24');
    expect(image).toHaveAttribute('height', '24');
    expect(image).toHaveStyle({ backgroundColor: '#fff' });
  });

  it('uses a monochrome mask as decoration inside a labeled action', () => {
    render(<Mask />);

    const button = screen.getByRole('button', { name: 'Inbox' });
    expect(button.style).toMatchObject({ backgroundColor: 'transparent', color: 'inherit' });
    const icon = button.querySelector<HTMLElement>('[aria-hidden="true"]');
    expect(icon?.style).toMatchObject({
      display: 'inline-block',
      width: '24px',
      height: '24px',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      maskSize: 'contain',
      forcedColorAdjust: 'preserve-parent-color',
    });
    expect(icon?.style.backgroundColor.toLowerCase()).toBe('currentcolor');
    expect(icon?.style.maskImage).toContain(mailUrl);
    expect(within(button).queryByRole('img')).not.toBeInTheDocument();
  });

  it('inlines the actual package artwork with inherited fill and an accessible name', () => {
    render(<Inline />);

    const icon = screen.getByRole('img', { name: 'Mail' });
    expect(icon.style.fill.toLowerCase()).toBe('currentcolor');
    const svg = icon.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
    const source = new DOMParser().parseFromString(mailMarkup, 'image/svg+xml');
    expect(svg?.querySelector('path')?.getAttribute('d')).toBe(source.querySelector('path')?.getAttribute('d'));
  });

  it('loads real Light and localized artwork using the published directory layout', () => {
    render(<Variants />);

    expect(screen.getByRole('img', { name: 'Mail, Light' })).toHaveAttribute('src', mailLightUrl);
    expect(screen.getByRole('img', { name: 'Bold, Spanish' })).toHaveAttribute('src', spanishBoldUrl);
    expect(screen.getByRole('img', { name: 'Bold, Serbian Cyrillic' })).toHaveAttribute('src', serbianBoldUrl);
    expect(spanishBoldUrl).not.toBe(serbianBoldUrl);
  });

  it('changes text color without replacing the external image while masks and inline SVG opt into it', () => {
    render(<Coloring />);

    const picker = screen.getByLabelText('Icon color');
    const image = screen.getByRole('img', { name: 'Mail (external image)' });
    const mask = screen.getByRole('img', { name: 'Mail (CSS mask)' });
    const inline = screen.getByRole('img', { name: 'Mail (inline SVG)' });

    expect(image).toHaveAttribute('src', mailUrl);
    expect(mask.style.backgroundColor.toLowerCase()).toBe('currentcolor');
    expect(inline.style.fill.toLowerCase()).toBe('currentcolor');

    for (const color of ['#d13438', '#107c10']) {
      fireEvent.change(picker, { target: { value: color } });
      expect(picker).toHaveValue(color);
      for (const icon of [image, mask, inline]) {
        expect(icon.parentElement).toHaveStyle({ color });
      }
      expect(image).toHaveAttribute('src', mailUrl);
      expect(mask.style.maskImage).toContain(mailUrl);
      expect(inline.querySelector('path')).toBeInTheDocument();
    }
  });
});
