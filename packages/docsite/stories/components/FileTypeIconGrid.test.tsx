import '@testing-library/jest-dom/vitest';
import * as React from 'react';
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ICON_SIZES } from '@fluentui/react-icons-file-type';
import fileIconTypes from '../../../react-icons-file-type/src/common/fileIconTypes.json';
import fileTypeIconMap from '../../../react-icons-file-type/src/common/fileTypeIconMap.json';
import FileTypeIconGrid from './FileTypeIconGrid';

const { dispatchToast } = vi.hoisted(() => ({ dispatchToast: vi.fn() }));

vi.mock('@fluentui/react-icons', () => ({ CopyRegular: () => null }));
vi.mock('@fluentui/react-components', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@fluentui/react-components')>()),
  useToastController: () => ({ dispatchToast }),
}));

beforeEach(() => {
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    },
  );
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.unstubAllGlobals();
  Reflect.deleteProperty(navigator, 'clipboard');
});

function setClipboard(writeText: ReturnType<typeof vi.fn>) {
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
}

function search(query: string) {
  fireEvent.change(screen.getByRole('searchbox', { name: 'Icon name' }), { target: { value: query } });
}

describe('file type catalogue controls', () => {
  it('uses the same labelled fields without offering unsupported variants', () => {
    render(<FileTypeIconGrid />);
    expect(screen.getByLabelText('Icon name')).toHaveAttribute('type', 'search');
    expect(screen.getByLabelText('Icon size')).toHaveValue('48');
    expect(screen.queryByLabelText('Icon variant')).not.toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent(
      `${Object.keys(fileTypeIconMap).length} icons`,
    );
    search('no-such-file-type-icon');
    expect(screen.getByRole('status', { name: 'Icon count' })).toHaveTextContent('0 icons');
  });

  it('offers its supported sizes and defaults to 48px', () => {
    render(<FileTypeIconGrid />);
    expect(screen.getByRole('combobox', { name: 'Icon size' })).toHaveValue('48');
    expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual(
      ICON_SIZES.map((size) => `${size}px`),
    );
    expect(screen.queryByRole('option', { name: 'Resizable' })).not.toBeInTheDocument();
  });

  it('updates the preview and copied JSX when the size changes', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    setClipboard(writeText);
    render(<FileTypeIconGrid />);
    search('folder');
    fireEvent.change(screen.getByRole('combobox', { name: 'Icon size' }), { target: { value: '24' } });
    expect(screen.getByRole('img', { name: 'folder' })).toHaveAttribute('width', '24');
    fireEvent.click(screen.getByRole('button', { name: 'Copy folder JSX' }));
    await waitFor(() =>
      expect(writeText).toHaveBeenCalledWith('<FileTypeIcon type={FileIconType.folder} size={24} />'),
    );
  });

  it('recovers from an empty search while preserving the selected size', () => {
    render(<FileTypeIconGrid />);
    fireEvent.change(screen.getByRole('combobox', { name: 'Icon size' }), { target: { value: '24' } });
    search('no-such-file-type-icon');
    expect(screen.getByText('No file type icons found. Try another search.')).toBeInTheDocument();
    search('folder');
    expect(screen.getByRole('img', { name: 'folder' })).toHaveAttribute('width', '24');
  });
});

describe('file type catalog search', () => {
  it.each(['folder', 'FileIconType.folder', '  FILEICONTYPE.FOLDER  '])('finds the folder icon using %s', (query) => {
    render(<FileTypeIconGrid />);
    search(query);
    expect(screen.getByRole('img', { name: 'folder' })).toBeInTheDocument();
  });

  it.each(['docx', '.docx', '  .DOCX  '])('finds the document icon using %s', (query) => {
    render(<FileTypeIconGrid />);
    search(query);
    expect(screen.getByRole('img', { name: 'docx' })).toBeInTheDocument();
  });

  it('uses a search placeholder focused on icons and file extensions', () => {
    render(<FileTypeIconGrid />);
    expect(screen.getByPlaceholderText('Search icons or file extensions')).toBeInTheDocument();
  });

  it('keeps enum expressions out of the extension aliases', () => {
    render(<FileTypeIconGrid />);
    search('folder');
    const tile = screen.getByText('folder', { selector: 'code' }).parentElement!;
    expect(within(tile).queryByText('FileIconType.folder')).not.toBeInTheDocument();
  });

  it('continues matching extension aliases', () => {
    const [name, aliases] = Object.entries(fileTypeIconMap).find(([iconName, extensions]) =>
      extensions?.some((extension) => extension !== iconName),
    )!;
    render(<FileTypeIconGrid />);
    search(aliases!.find((extension) => extension !== name)!.toUpperCase());
    expect(screen.getByRole('img', { name })).toBeInTheDocument();
  });
});

describe('copying icon JSX', () => {
  it('waits for the clipboard write before showing success', async () => {
    let completeWrite!: () => void;
    const writeText = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          completeWrite = resolve;
        }),
    );
    setClipboard(writeText);
    render(<FileTypeIconGrid />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy folder JSX' }));

    expect(writeText).toHaveBeenCalledWith('<FileTypeIcon type={FileIconType.folder} size={48} />');
    expect(dispatchToast).not.toHaveBeenCalled();
    await act(async () => completeWrite());
    expect(dispatchToast).toHaveBeenCalledWith(expect.anything(), { intent: 'success' });
  });

  it('reports a rejected clipboard write without showing success', async () => {
    const failedWrite = Promise.reject(new Error('Clipboard access denied'));
    void failedWrite.catch(() => {});
    setClipboard(vi.fn(() => failedWrite));
    render(<FileTypeIconGrid />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy folder JSX' }));

    await waitFor(() => expect(dispatchToast).toHaveBeenCalledWith(expect.anything(), { intent: 'error' }));
    expect(dispatchToast).toHaveBeenCalledTimes(1);
  });

  it('reports unavailable clipboard access', async () => {
    render(<FileTypeIconGrid />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy folder JSX' }));
    await waitFor(() => expect(dispatchToast).toHaveBeenCalledWith(expect.anything(), { intent: 'error' }));
  });
});

const imageBranches = Object.entries(fileTypeIconMap).map(([name, aliases]) => ({
  name,
  branch: aliases?.length
    ? 'extension'
    : fileIconTypes.some(({ icon }) => (icon ?? 'genericfile') === name)
      ? 'type'
      : 'raw image',
}));

describe('CDN image recovery', () => {
  it.each(['extension', 'type', 'raw image'])('clears an unavailable warning after the %s branch reloads', (branch) => {
    const { name } = imageBranches.find((icon) => icon.branch === branch)!;
    render(<FileTypeIconGrid />);
    search(name);
    fireEvent.error(screen.getByRole('img', { name }));
    const tile = screen.getByText(name, { selector: 'code' }).parentElement!;
    expect(within(tile).getByText('Unavailable on current CDN')).toBeInTheDocument();

    search('no-such-file-type-icon');
    expect(screen.queryByRole('img', { name })).not.toBeInTheDocument();
    search(name);
    fireEvent.load(screen.getByRole('img', { name }));

    const recoveredTile = screen.getByText(name, { selector: 'code' }).parentElement!;
    expect(within(recoveredTile).queryByText('Unavailable on current CDN')).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name })).toBeInTheDocument();
  });
});
