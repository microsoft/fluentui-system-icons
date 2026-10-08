import '@testing-library/jest-dom/vitest';
import * as React from 'react';
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ReactIconGrid from './ReactIconGrid';

const { dispatchToast } = vi.hoisted(() => ({ dispatchToast: vi.fn() }));

vi.mock('@fluentui/react-icons', async () => {
  const React = await import('react');
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
    Send16Regular: createIcon('Send16Regular'),
    Send24Regular: createIcon('Send24Regular'),
    Send24Filled: createIcon('Send24Filled'),
    Send24Light: createIcon('Send24Light'),
    Send24Color: createIcon('Send24Color'),
    Send48Regular: createIcon('Send48Regular'),
    Send96Regular: createIcon('Send96Regular'),
    FolderRegular: createIcon('FolderRegular'),
    Folder24Regular: createIcon('Folder24Regular'),
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
  it('offers All sizes, Resizable and the existing native sizes in a select', () => {
    render(<ReactIconGrid />);
    expect(screen.getByRole('combobox', { name: 'Icon size' })).toHaveValue('resizable');
    expect(
      within(screen.getByRole('combobox', { name: 'Icon size' }))
        .getAllByRole('option')
        .map((option) => option.textContent),
    ).toEqual(['All sizes', 'Resizable', '16px', '20px', '24px', '28px', '32px', '48px']);
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    expect(screen.queryByText('bundleIcon')).not.toBeInTheDocument();
  });

  it('shows resizable exports by default', () => {
    render(<ReactIconGrid />);
    expect(screen.getByRole('img', { name: 'SendRegular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'FolderRegular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Send24Regular' })).not.toBeInTheDocument();
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
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('6 icons');
  });
});

describe('React icon catalogue all-sizes filter', () => {
  it('includes resizable and native-size exports with room for the largest preview', () => {
    render(<ReactIconGrid />);
    selectSize('all');
    expect(screen.getByRole('img', { name: 'SendRegular' })).toBeInTheDocument();
    for (const size of ['16', '24', '48', '96']) {
      expect(screen.getByRole('img', { name: `Send${size}Regular` })).toBeInTheDocument();
    }
    expect(screen.getByRole('img', { name: 'FolderRegular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Folder24Regular' })).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('14 icons');
    const cell = screen.getByRole('img', { name: 'Send96Regular' }).parentElement!.parentElement!;
    expect(Number.parseFloat(cell.style.height)).toBeGreaterThanOrEqual(96 + 55);
  });

  it('combines All sizes with name and variant filters and restores specific sizes', () => {
    render(<ReactIconGrid />);
    search('SEND');
    selectVariant('Regular');
    selectSize('all');
    expect(screen.getByRole('img', { name: 'SendRegular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Send24Regular' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Send96Regular' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Send24Filled' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'FolderRegular' })).not.toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('6 icons');
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
    fireEvent.click(screen.getByRole('button', { name: 'Copy Send96Regular JSX' }));
    expect(writeText).toHaveBeenCalledWith('<Send96Regular />');
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
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('6 icons');
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
