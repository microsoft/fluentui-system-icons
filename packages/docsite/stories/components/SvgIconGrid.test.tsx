import '@testing-library/jest-dom/vitest';
import * as React from 'react';
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { parseSvgIconPath } from './svg-icon-catalog';
import { SvgIconGrid } from './SvgIconGrid';

const { paths, dispatchToast } = vi.hoisted(() => {
  const paths = [
    'mail_24_regular.svg',
    'mail_24_filled.svg',
    'mail_32_light.svg',
    'mail_24_color.svg',
    'es/text_bold_24_regular.svg',
    'sr-cyrl/text_bold_24_regular.svg',
    'LTR/text_number_list_rotate_270_20_regular.svg',
    'RTL/text_number_list_rotate_270_20_regular.svg',
    'ko/text_direction_horizontal_rtl_24_regular.svg',
  ];
  vi.stubGlobal('STORYBOOK_SVG_ICON_PATHS', paths);
  return { paths, dispatchToast: vi.fn() };
});

vi.mock('@fluentui/react-components', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@fluentui/react-components')>()),
  useToastController: () => ({ dispatchToast }),
}));

const resizeObservers: TestResizeObserver[] = [];

class TestResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(private callback: ResizeObserverCallback) {
    resizeObservers.push(this);
  }

  resize(width: number) {
    this.callback([{ contentRect: { width } } as ResizeObserverEntry], this as unknown as ResizeObserver);
  }
}

beforeEach(() => {
  resizeObservers.length = 0;
  vi.stubGlobal('ResizeObserver', TestResizeObserver);
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.unstubAllGlobals();
  Reflect.deleteProperty(navigator, 'clipboard');
});

function select(label: string, value: string) {
  const control = screen.getByRole('combobox', { name: label });
  expect(
    within(control)
      .getAllByRole('option')
      .some((option) => (option as HTMLOptionElement).value === value),
  ).toBe(true);
  fireEvent.change(control, { target: { value } });
  expect(control).toHaveValue(value);
}

describe('Raw SVG file contract', () => {
  it.each([
    ['mail_24_regular.svg', { name: 'mail', size: 24, style: 'regular' }],
    ['sr-cyrl/text_bold_24_regular.svg', { name: 'text_bold', size: 24, style: 'regular' }],
    [
      'RTL/text_number_list_rotate_270_20_regular.svg',
      { name: 'text_number_list_rotate_270', size: 20, style: 'regular' },
    ],
    [
      'ko/text_direction_horizontal_rtl_24_regular.svg',
      { name: 'text_direction_horizontal_rtl', size: 24, style: 'regular' },
    ],
  ])('preserves exact qualifiers in %s', (file, expected) => {
    expect(parseSvgIconPath(file)).toEqual({
      ...expected,
      path: file,
      packagePath: `@fluentui/svg-icons/icons/${file}`,
      assetUrl: `./svg-icons/${file}`,
    });
  });
});

describe('Raw SVG catalogue', () => {
  it('lists every supplied path with the standard size and style controls', () => {
    render(<SvgIconGrid />);

    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent(`${paths.length} icons`);
    for (const label of ['Icon size', 'Icon variant']) {
      expect(screen.getByRole('combobox', { name: label })).toHaveValue('all');
    }
    expect(screen.getAllByRole('combobox')).toHaveLength(2);
    expect(screen.queryByRole('combobox', { name: 'Locale' })).not.toBeInTheDocument();
    expect(screen.queryByRole('combobox', { name: 'Direction' })).not.toBeInTheDocument();
    expect(screen.queryByRole('option', { name: 'Resizable' })).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'es/text_bold_24_regular.svg' })).toHaveAttribute(
      'src',
      './svg-icons/es/text_bold_24_regular.svg',
    );
  });

  it('searches human-readable names and exact locale paths', () => {
    render(<SvgIconGrid />);
    const search = screen.getByRole('searchbox', { name: 'Icon name' });
    fireEvent.change(search, { target: { value: 'text bold' } });
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('2 icons');
    fireEvent.change(search, { target: { value: 'sr-cyrl/text_bold' } });
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('1 icon');
    expect(screen.getByRole('img', { name: 'sr-cyrl/text_bold_24_regular.svg' })).toBeInTheDocument();
  });

  it.each([
    { query: 'es/', matches: ['es/text_bold_24_regular.svg'] },
    { query: 'sr-cyrl/', matches: ['sr-cyrl/text_bold_24_regular.svg'] },
    { query: 'ltr/', matches: ['LTR/text_number_list_rotate_270_20_regular.svg'] },
    { query: 'RTL/', matches: ['RTL/text_number_list_rotate_270_20_regular.svg'] },
    { query: '_rtl', matches: ['ko/text_direction_horizontal_rtl_24_regular.svg'] },
    { query: 'ko/', matches: ['ko/text_direction_horizontal_rtl_24_regular.svg'] },
    {
      query: 'rtl',
      matches: ['RTL/text_number_list_rotate_270_20_regular.svg', 'ko/text_direction_horizontal_rtl_24_regular.svg'],
    },
  ])('finds locale and direction-qualified files by searching "$query"', ({ query, matches }) => {
    render(<SvgIconGrid />);
    fireEvent.change(screen.getByRole('searchbox', { name: 'Icon name' }), { target: { value: query } });
    expect(screen.getAllByRole('img').map((image) => image.getAttribute('alt'))).toEqual(matches);
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent(
      `${matches.length} ${matches.length === 1 ? 'icon' : 'icons'}`,
    );
  });

  it('shows an empty state for unavailable size and style combinations', () => {
    render(<SvgIconGrid />);
    select('Icon size', '32');
    select('Icon variant', 'filled');
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('0 icons');
    expect(screen.getByText('No SVG files match these filters.')).toBeInTheDocument();
  });

  it('combines native size and style filters', () => {
    render(<SvgIconGrid />);
    select('Icon size', '32');
    select('Icon variant', 'light');
    expect(screen.getByRole('img', { name: 'mail_32_light.svg' })).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('1 icon');
  });

  it('starts filtered results at the top after scrolling', () => {
    const { container } = render(<SvgIconGrid />);
    const grid = container.querySelector<HTMLDivElement>('div[style*="overflow: auto"]');
    expect(grid).not.toBeNull();
    Object.defineProperties(grid, {
      clientHeight: { configurable: true, value: 200 },
      scrollHeight: { configurable: true, value: 1000 },
    });
    fireEvent.scroll(grid as HTMLDivElement, { target: { scrollTop: 400 } });
    expect(grid?.scrollTop).toBe(400);

    fireEvent.change(screen.getByRole('searchbox', { name: 'Icon name' }), {
      target: { value: 'es/text_bold' },
    });

    expect(grid?.scrollTop).toBe(0);
    expect(screen.getByRole('img', { name: 'es/text_bold_24_regular.svg' })).toBeInTheDocument();
  });

  it.each([200, 0])('keeps visible icons and finite cells after a %spx resize', (width) => {
    const { container } = render(<SvgIconGrid />);
    const observer = resizeObservers.find((item) =>
      item.observe.mock.calls.some(([target]) => target === container.firstElementChild),
    )!;
    act(() => observer.resize(width));

    const cell = screen.getByRole('img', { name: 'mail_24_regular.svg' }).parentElement!.parentElement!;
    expect(Number.parseFloat(cell.style.width)).toBeGreaterThan(0);
    expect(Number.isFinite(Number.parseFloat(cell.style.width))).toBe(true);
    expect(screen.getByRole('img', { name: 'mail_24_filled.svg' })).toBeInTheDocument();
  });

  it('disconnects its resize observer on unmount', () => {
    const { container, unmount } = render(<SvgIconGrid />);
    const observer = resizeObservers.find((item) =>
      item.observe.mock.calls.some(([target]) => target === container.firstElementChild),
    )!;

    unmount();

    expect(observer.disconnect).toHaveBeenCalledTimes(1);
  });

  it('copies the package path rather than React JSX or a preview-server URL', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    render(<SvgIconGrid />);
    fireEvent.change(screen.getByRole('searchbox', { name: 'Icon name' }), {
      target: { value: 'es/text_bold' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Copy es/text_bold_24_regular.svg package path' }));
    await waitFor(() =>
      expect(writeText).toHaveBeenCalledWith('@fluentui/svg-icons/icons/es/text_bold_24_regular.svg'),
    );
    expect(dispatchToast).toHaveBeenCalledWith(expect.anything(), { intent: 'success' });
  });
});
