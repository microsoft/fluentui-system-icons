import '@testing-library/jest-dom/vitest';
import * as React from 'react';
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { RESIZABLE_COLLISIONS, SIZED_ICON_SIZES } from './icon-sizes';
import { ReactIconGrid } from './ReactIconGrid';

const { dispatchToast } = vi.hoisted(() => ({ dispatchToast: vi.fn() }));
const RESIZABLE_ICON_COUNT = 7 + RESIZABLE_COLLISIONS.length;
const ALL_ICON_COUNT = 20 + RESIZABLE_COLLISIONS.length;

vi.mock('@fluentui/react-icons', async () => {
  const React = await import('react');
  const { RESIZABLE_COLLISIONS } = await import('./icon-sizes');
  const createIcon = (name: string) => {
    const Icon = (props: React.SVGProps<SVGSVGElement>) => <svg role="img" {...props} />;
    Icon.displayName = name;
    return Icon;
  };
  return {
    SendRegular: createIcon('SendRegular'),
    SendFilled: createIcon('SendFilled'),
    SendLight: createIcon('SendLight'),
    SendColor: createIcon('SendColor'),
    SendColorRegular: createIcon('SendColorRegular'),
    PresenceDnd10Filled: createIcon('PresenceDnd10Filled'),
    Add12Regular: createIcon('Add12Regular'),
    Send16Regular: createIcon('Send16Regular'),
    Send24Regular: createIcon('Send24Regular'),
    Send24Filled: createIcon('Send24Filled'),
    Send24Light: createIcon('Send24Light'),
    Send24Color: createIcon('Send24Color'),
    Send48Regular: createIcon('Send48Regular'),
    FolderRegular: createIcon('FolderRegular'),
    Folder24Regular: createIcon('Folder24Regular'),
    Fps96024Filled: createIcon('Fps96024Filled'),
    Fps960Regular: createIcon('Fps960Regular'),
    Battery1016Regular: createIcon('Battery1016Regular'),
    Battery1020Filled: createIcon('Battery1020Filled'),
    Fps12024Regular: createIcon('Fps12024Regular'),
    ...Object.fromEntries(RESIZABLE_COLLISIONS.map((name) => [name, createIcon(name)])),
    CopyRegular: () => null,
    bundleIcon: () => null,
  };
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

function search(query: string) {
  fireEvent.change(screen.getByRole('searchbox', { name: 'Icon name' }), { target: { value: query } });
}

function selectSize(size: string) {
  fireEvent.change(screen.getByRole('combobox', { name: 'Icon size' }), { target: { value: size } });
  expect(screen.getByRole('combobox', { name: 'Icon size' })).toHaveValue(size);
}

function selectVariant(variant: string) {
  fireEvent.change(screen.getByRole('combobox', { name: 'Icon variant' }), { target: { value: variant } });
}

function setClipboard(writeText: ReturnType<typeof vi.fn>) {
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
}

describe('React icon catalogue controls', () => {
  it('offers All sizes, Resizable and every shared native size in a select', () => {
    render(<ReactIconGrid />);
    expect(screen.getByRole('combobox', { name: 'Icon size' })).toHaveValue('resizable');
    expect(
      within(screen.getByRole('combobox', { name: 'Icon size' }))
        .getAllByRole('option')
        .map((option) => option.textContent),
    ).toEqual(['All sizes', 'Resizable', ...SIZED_ICON_SIZES.map((size) => `${size}px`)]);
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    expect(screen.queryByText('bundleIcon')).not.toBeInTheDocument();
  });

  it('shows resizable exports by default', () => {
    render(<ReactIconGrid />);
    expect(screen.getByRole('img', { name: 'SendRegular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'FolderRegular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Send24Regular' })).not.toBeInTheDocument();
  });

  it.each([
    ['10', 'PresenceDnd10Filled'],
    ['12', 'Add12Regular'],
  ])('filters %spx exports from the shared size table', (size, name) => {
    render(<ReactIconGrid />);
    selectSize(size);
    expect(screen.getByRole('img', { name })).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('1 icon');
    expect(screen.queryByRole('img', { name: 'SendRegular' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Battery10Filled' })).not.toBeInTheDocument();
    selectSize('resizable');
    expect(screen.getByRole('img', { name: 'Battery10Filled' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name })).not.toBeInTheDocument();
  });

  it.each(['16', '24', '48'])('selects purpose-built %spx exports and can return to Resizable', (size) => {
    render(<ReactIconGrid />);
    selectSize(size);
    expect(screen.getByRole('img', { name: `Send${size}Regular` })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'SendRegular' })).not.toBeInTheDocument();
    selectSize('resizable');
    expect(screen.getByRole('img', { name: 'SendRegular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: `Send${size}Regular` })).not.toBeInTheDocument();
  });

  it('combines case-insensitive search with size selection', () => {
    render(<ReactIconGrid />);
    search('SEND');
    expect(screen.getByRole('img', { name: 'SendRegular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'FolderRegular' })).not.toBeInTheDocument();
    selectSize('24');
    expect(screen.getByRole('img', { name: 'Send24Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Folder24Regular' })).not.toBeInTheDocument();
  });

  it('recovers from an empty search without resetting the selected size', () => {
    render(<ReactIconGrid />);
    selectSize('24');
    search('no-such-icon');
    expect(screen.getByText('No icons found for the search query. Try another one.')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    search('');
    expect(screen.getByRole('img', { name: 'Send24Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'SendRegular' })).not.toBeInTheDocument();
  });

  it('omits the sizing guide from the filter toolbar', () => {
    render(<ReactIconGrid />);
    expect(screen.queryByRole('link', { name: 'Sizing guide' })).not.toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent(`${RESIZABLE_ICON_COUNT} icons`);
  });
});

describe('React icon catalogue resizable collisions', () => {
  it.each(RESIZABLE_COLLISIONS)('finds %s with the Resizable filter', (name) => {
    render(<ReactIconGrid />);
    search(name);
    expect(screen.getByLabelText('Icon size')).toHaveValue('resizable');
    expect(screen.getByRole('img', { name })).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('1 icon');
  });

  it('includes numeric product names that do not contain a native-size suffix', () => {
    render(<ReactIconGrid />);
    search('Fps960');
    expect(screen.getByRole('img', { name: 'Fps960Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Fps96024Filled' })).not.toBeInTheDocument();
  });

  it('combines collision-aware size classification with variant selection', () => {
    render(<ReactIconGrid />);
    search('Battery10');
    selectVariant('Regular');
    expect(screen.getByRole('img', { name: 'Battery10Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Battery10Filled' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Battery1016Regular' })).not.toBeInTheDocument();
    selectSize('16');
    expect(screen.getByRole('img', { name: 'Battery1016Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Battery10Regular' })).not.toBeInTheDocument();
  });

  it('matches only the actual native size, not a number inside the product name', () => {
    render(<ReactIconGrid />);
    search('Fps120');
    selectSize('20');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    selectSize('24');
    expect(screen.getByRole('img', { name: 'Fps12024Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Fps120Regular' })).not.toBeInTheDocument();
    selectSize('resizable');
    expect(screen.getByRole('img', { name: 'Fps120Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Fps12024Regular' })).not.toBeInTheDocument();
  });
});

describe('React icon catalogue all-sizes filter', () => {
  it('restores results after clearing a numeric name filter without oversized rows', () => {
    render(<ReactIconGrid />);
    search('16');
    selectSize('all');
    expect(screen.getByRole('img', { name: 'Send16Regular' })).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('2 icons');

    search('');

    expect(screen.getByLabelText('Icon name')).toHaveValue('');
    expect(screen.getByLabelText('Icon size')).toHaveValue('all');
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent(`${ALL_ICON_COUNT} icons`);
    const cell = screen.getByRole('img', { name: 'SendRegular' }).parentElement!.parentElement!;
    expect(Number.parseFloat(cell.style.height)).toBe(48 + 55);
    expect(screen.getByRole('img', { name: 'Folder24Regular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Fps96024Filled' })).toBeInTheDocument();
  });

  it('uses the correct preview size for numeric sized and resizable names', () => {
    render(<ReactIconGrid />);
    search('Fps960');
    selectSize('all');
    expect(screen.getByRole('img', { name: 'Fps960Regular' })).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('2 icons');
    const cell = screen.getByRole('img', { name: 'Fps96024Filled' }).parentElement!.parentElement!;
    expect(Number.parseFloat(cell.style.height)).toBe(48 + 55);
  });

  it('includes resizable and native-size exports with room for the largest preview', () => {
    render(<ReactIconGrid />);
    selectSize('all');
    expect(screen.getByRole('img', { name: 'SendRegular' })).toBeInTheDocument();
    for (const size of ['16', '24', '48']) {
      expect(screen.getByRole('img', { name: `Send${size}Regular` })).toBeInTheDocument();
    }
    expect(screen.getByRole('img', { name: 'FolderRegular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Folder24Regular' })).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent(`${ALL_ICON_COUNT} icons`);
    const cell = screen.getByRole('img', { name: 'Send48Regular' }).parentElement!.parentElement!;
    expect(Number.parseFloat(cell.style.height)).toBe(48 + 55);
  });

  it('combines All sizes with name and variant filters and restores specific sizes', () => {
    render(<ReactIconGrid />);
    search('SEND');
    selectVariant('Regular');
    selectSize('all');
    expect(screen.getByRole('img', { name: 'SendRegular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Send24Regular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Send48Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Send24Filled' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'FolderRegular' })).not.toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('5 icons');
    selectSize('24');
    expect(screen.getByRole('img', { name: 'Send24Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'SendRegular' })).not.toBeInTheDocument();
    selectSize('resizable');
    expect(screen.getByRole('img', { name: 'SendRegular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Send24Regular' })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Icon variant')).toHaveValue('Regular');
  });

  it('copies the actual component name in a mixed-size result set', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    setClipboard(writeText);
    render(<ReactIconGrid />);
    selectSize('all');
    fireEvent.click(screen.getByRole('button', { name: 'Copy Send48Regular JSX' }));
    expect(writeText).toHaveBeenCalledWith('<Send48Regular />');
    await waitFor(() => expect(dispatchToast).toHaveBeenCalledWith(expect.anything(), { intent: 'success' }));
  });
});

describe('React icon catalogue variants', () => {
  it('uses the labelled brand-catalogue fields and defaults to All variants', () => {
    render(<ReactIconGrid />);
    expect(screen.getByLabelText('Icon name')).toHaveAttribute('placeholder', 'Icon name...');
    expect(screen.getByLabelText('Icon size')).toHaveValue('resizable');
    const variants = screen.getByLabelText('Icon variant');
    expect(variants).toHaveValue('all');
    expect(
      within(variants)
        .getAllByRole('option')
        .map((option) => option.textContent),
    ).toEqual(['All variants', 'Regular', 'Filled', 'Light', 'Color']);
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent(`${RESIZABLE_ICON_COUNT} icons`);
  });

  it.each(['Regular', 'Filled', 'Light', 'Color'])('filters %s exports by their variant suffix', (variant) => {
    render(<ReactIconGrid />);
    selectVariant(variant);
    expect(screen.getByRole('img', { name: `Send${variant}` })).toBeInTheDocument();
    for (const other of ['Regular', 'Filled', 'Light', 'Color'].filter((name) => name !== variant)) {
      expect(screen.queryByRole('img', { name: `Send${other}` })).not.toBeInTheDocument();
    }
    if (variant === 'Color') {
      expect(screen.queryByRole('img', { name: 'SendColorRegular' })).not.toBeInTheDocument();
      expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('1 icon');
    }
  });

  it('combines name, native size and variant, then restores All variants', () => {
    render(<ReactIconGrid />);
    search('SEND');
    selectSize('24');
    selectVariant('Filled');
    expect(screen.getByRole('img', { name: 'Send24Filled' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Send24Regular' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Folder24Regular' })).not.toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('1 icon');
    selectVariant('all');
    expect(screen.getByRole('img', { name: 'Send24Regular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Send24Color' })).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('4 icons');
  });

  it('preserves variant selection when recovering from no matches', () => {
    render(<ReactIconGrid />);
    selectVariant('Light');
    selectSize('48');
    expect(screen.getByText('No icons found for the search query. Try another one.')).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('0 icons');
    selectSize('24');
    expect(screen.getByRole('img', { name: 'Send24Light' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Send24Regular' })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Icon variant')).toHaveValue('Light');
  });
});

describe('React icon catalogue clipboard', () => {
  it('waits for the clipboard write before showing success', async () => {
    let completeWrite!: () => void;
    const writeText = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          completeWrite = resolve;
        }),
    );
    setClipboard(writeText);
    render(<ReactIconGrid />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy SendRegular JSX' }));
    expect(writeText).toHaveBeenCalledWith('<SendRegular />');
    expect(dispatchToast).not.toHaveBeenCalled();
    await act(async () => completeWrite());
    expect(dispatchToast).toHaveBeenCalledWith(expect.anything(), { intent: 'success' });
    expect(dispatchToast).toHaveBeenCalledTimes(1);
  });

  it('copies the selected sized export', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    setClipboard(writeText);
    render(<ReactIconGrid />);
    selectSize('24');
    fireEvent.click(screen.getByRole('button', { name: 'Copy Send24Regular JSX' }));
    expect(writeText).toHaveBeenCalledWith('<Send24Regular />');
    await waitFor(() => expect(dispatchToast).toHaveBeenCalledWith(expect.anything(), { intent: 'success' }));
  });

  it('reports a rejected clipboard write without showing success', async () => {
    setClipboard(vi.fn().mockRejectedValue(new Error('Clipboard access denied')));
    render(<ReactIconGrid />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy SendRegular JSX' }));
    await waitFor(() => expect(dispatchToast).toHaveBeenCalledWith(expect.anything(), { intent: 'error' }));
    expect(dispatchToast).toHaveBeenCalledTimes(1);
  });

  it('reports unavailable clipboard access', async () => {
    render(<ReactIconGrid />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy SendRegular JSX' }));
    await waitFor(() => expect(dispatchToast).toHaveBeenCalledWith(expect.anything(), { intent: 'error' }));
    expect(dispatchToast).toHaveBeenCalledTimes(1);
  });
});

describe('React icon catalogue responsive grid', () => {
  it.each([200, 0])('keeps visible icons and finite cells after a %spx resize', (width) => {
    const { container } = render(<ReactIconGrid />);
    const observer = resizeObservers.find((item) =>
      item.observe.mock.calls.some(([target]) => target === container.firstElementChild),
    )!;
    act(() => observer.resize(width));
    const cell = screen.getByRole('img', { name: 'SendRegular' }).parentElement!.parentElement!;
    expect(Number.parseFloat(cell.style.width)).toBeGreaterThan(0);
    expect(Number.isFinite(Number.parseFloat(cell.style.width))).toBe(true);
    expect(screen.getByRole('img', { name: 'FolderRegular' })).toBeInTheDocument();
  });

  it('disconnects its resize observer on unmount', () => {
    const { container, unmount } = render(<ReactIconGrid />);
    const observer = resizeObservers.find((item) =>
      item.observe.mock.calls.some(([target]) => target === container.firstElementChild),
    )!;
    unmount();
    expect(observer.disconnect).toHaveBeenCalledTimes(1);
  });
});
