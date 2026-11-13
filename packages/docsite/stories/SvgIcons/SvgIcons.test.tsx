import '@testing-library/jest-dom/vitest';
import * as React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import mailMarkup from '@fluentui/svg-icons/icons/mail_24_regular.svg?raw';
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';
import mailRegular32Url from '@fluentui/svg-icons/icons/mail_32_regular.svg?url';
import mailFilled32Url from '@fluentui/svg-icons/icons/mail_32_filled.svg?url';
import mailLightUrl from '@fluentui/svg-icons/icons/mail_32_light.svg?url';
import spanishBoldUrl from '@fluentui/svg-icons/icons/es/text_bold_28_regular.svg?url';
import serbianBoldUrl from '@fluentui/svg-icons/icons/sr-cyrl/text_bold_28_regular.svg?url';
import { Image } from './SvgIconsImage.stories';
import { Variants } from './SvgIconsVariants.stories';
import { Coloring } from './SvgIconsColoring.stories';

afterEach(cleanup);

describe('Plain SVG examples', () => {
  it('renders an external image with an accessible name and reserved dimensions', () => {
    render(<Image />);

    const image = screen.getByRole('img', { name: 'Mail' });
    expect(image).toHaveAttribute('src', 'https://unpkg.com/@fluentui/svg-icons@1.1.345/icons/mail_24_regular.svg');
    expect(image).toHaveAttribute('width', '24');
    expect(image).toHaveAttribute('height', '24');
    expect(image).toHaveStyle({ backgroundColor: '#fff' });
  });

  it('loads real Light and localized artwork using the published directory layout', () => {
    render(<Variants />);

    expect(screen.getByRole('img', { name: 'Mail, Regular' })).toHaveAttribute('src', mailRegular32Url);
    expect(screen.getByRole('img', { name: 'Mail, Filled' })).toHaveAttribute('src', mailFilled32Url);
    expect(screen.getByRole('img', { name: 'Mail, Light' })).toHaveAttribute('src', mailLightUrl);
    expect(screen.getByRole('img', { name: 'Bold, Spanish' })).toHaveAttribute('src', spanishBoldUrl);
    expect(screen.getByRole('img', { name: 'Bold, Serbian Cyrillic' })).toHaveAttribute('src', serbianBoldUrl);
    expect(spanishBoldUrl).not.toBe(serbianBoldUrl);
  });

  it('compares styles and locales at the same 32px display size', () => {
    render(<Variants />);

    for (const image of screen.getAllByRole('img')) {
      expect(image).toHaveAttribute('width', '32');
      expect(image).toHaveAttribute('height', '32');
    }
  });

  it('changes text color without replacing the external image while masks and inline SVG opt into it', () => {
    render(<Coloring />);

    const picker = screen.getByLabelText('Icon color');
    const image = screen.getByRole('img', { name: 'Mail (external image)' });
    const mask = screen.getByRole('img', { name: 'Mail (CSS mask)' });
    const inline = screen.getByRole('img', { name: 'Mail (inline SVG)' });

    expect(image).toHaveAttribute('src', mailUrl);
    expect(mask.style.backgroundColor.toLowerCase()).toBe('currentcolor');
    expect(mask.style.getPropertyValue('forced-color-adjust')).toBe('preserve-parent-color');
    expect(inline.style.fill.toLowerCase()).toBe('currentcolor');
    const svg = inline.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    const source = new DOMParser().parseFromString(mailMarkup, 'image/svg+xml');
    expect(svg?.querySelector('path')?.getAttribute('d')).toBe(source.querySelector('path')?.getAttribute('d'));

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
