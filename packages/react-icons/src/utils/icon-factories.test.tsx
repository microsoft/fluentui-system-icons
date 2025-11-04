import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { createFluentFontIcon, FluentFontIcon } from './fonts/createFluentFontIcon';
import { createFluentIcon, FluentIcon } from './createFluentIcon';

/**
 * @vitest-environment jsdom
 */

 // enable jest-dom expect extensions
 import '../../test-setup'

describe('React component tests', () => {
  test('createIcon should create a valid icon component', () => {
    const AccessTimeRegular: FluentIcon = createFluentIcon('AccessTimeRegular', "1em", ["M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"]);

    expect(AccessTimeRegular).toBeDefined();
    expect(AccessTimeRegular.displayName).toBe('AccessTimeRegular');
    const { container } = render(<AccessTimeRegular />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('fui-Icon');
    expect(render(<AccessTimeRegular />).container).toMatchInlineSnapshot(`
      <div>
        <svg
          aria-hidden="true"
          class="fui-Icon ___9ctc0p0_1xvj9ao f1w7gpdv fez10in f1dd5bof"
          fill="currentColor"
          height="1em"
          viewBox="0 0 20 20"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99 8.6A.5.5 0 0 1 6 8.4a1.29 1.29 0 0 1 .07-.24 2 2 0 0 1 .25-.46c.26-.35.71-.7 1.42-.7A1.7 1.7 0 0 1 9.5 8.75c0 .35-.07.65-.2.9a1.8 1.8 0 0 1-.51.6c-.16.11-.33.22-.48.3l-.06.04c-.17.1-.3.19-.42.29-.4.34-.66.7-.77 1.12H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-1.01.47-1.77 1.17-2.38.2-.16.4-.29.57-.4l.06-.03.38-.24a.8.8 0 0 0 .23-.26c.05-.1.09-.23.09-.44a.8.8 0 0 0-.19-.53.7.7 0 0 0-.56-.22.7.7 0 0 0-.61.3 1 1 0 0 0-.15.3ZM11 7c.28 0 .5.22.5.5V10H13V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11h-2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Zm-1-5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    `)
  });

  test('createFontIcon should create a valid font icon component', () => {
    const AccessTimeRegular: FluentFontIcon = createFluentFontIcon("AccessTimeRegular", "", 2, undefined);

    expect(AccessTimeRegular).toBeDefined();
    expect(AccessTimeRegular.displayName).toBe('AccessTimeRegular');

    const { container } = render(<AccessTimeRegular />);
    const icon = container.querySelector('i');
    expect(icon).toHaveClass('fui-Icon');
    expect(icon).toHaveClass('fui-Icon-font');

    expect(container).toMatchInlineSnapshot(`
      <div>
        <i
          aria-hidden="true"
          class="fui-Icon fui-Icon-font ___qaf4230_1r6c92s f14t3ns0 fne0op0 fmd4ok8 f303qgw f1sxfq9t"
          fill="currentColor"
        />
      </div>
    `)
  });

  test('createFluentIcon renders an SVG with expected path', () => {
    const d = 'M1 2 L3 4';
    const MyIcon = createFluentIcon('MyIcon', '1em', [d]);
    const { container } = render(<MyIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('fui-Icon');
    expect(svg).toHaveAttribute('width', '1em');
    expect(svg).toHaveAttribute('height', '1em');
    expect(svg).toHaveAttribute('viewBox', '0 0 20 20');

    const path = svg?.querySelector('path');
    expect(path).toBeTruthy();
    expect(path).toHaveAttribute('d', d);
  });

  test('createFluentIcon with custom props', () => {
    const d = 'M1 2 L3 4';
    const MyIcon = createFluentIcon('MyIcon', '1em', [d]);
    const { container } = render(<MyIcon primaryFill="red" className="test-class" />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('fui-Icon');
    expect(svg).toHaveClass('test-class');

    const path = svg?.querySelector('path');
    expect(path).toHaveAttribute('fill', 'red');
  });

  test('createFluentIcon with color icon (string SVG content)', () => {
    const svgContent = '<circle cx="10" cy="10" r="5" fill="blue"/>';
    const MyColorIcon = createFluentIcon('MyColorIcon', '1em', svgContent);
    const { container } = render(<MyColorIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.innerHTML).toContain('circle');
    expect(svg?.innerHTML).toContain('fill="blue"');
  });
});