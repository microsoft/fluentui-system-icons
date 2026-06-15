import * as React from 'react';
import { act } from 'react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { FileTypeIcon } from './FileTypeIcon';
import { FileTypeIconsProvider } from '../FileTypeIconsContext';
import { DEFAULT_BASE_URL } from '../constants';

/** Published png densities as `[folderSuffix, srcsetDescriptor]` pairs. */
const PNG_DENSITIES: ReadonlyArray<readonly [suffix: string, descriptor: string]> = [
  ['', '1x'],
  ['_1.5x', '1.5x'],
  ['_2x', '2x'],
  ['_3x', '3x'],
  ['_4x', '4x'],
];

/** Runs `fn` with `window.devicePixelRatio` temporarily set to `value`, then restores it. */
function withDevicePixelRatio<T>(value: number, fn: () => T): T {
  const original = window.devicePixelRatio;
  Object.defineProperty(window, 'devicePixelRatio', { value, configurable: true });
  try {
    return fn();
  } finally {
    Object.defineProperty(window, 'devicePixelRatio', { value: original, configurable: true });
  }
}

/** Runs `fn` while capturing `console.error` calls, returning them alongside the result. */
async function captureConsoleErrors<T>(fn: () => Promise<T>): Promise<{ result: T; errors: unknown[][] }> {
  const original = console.error;
  const errors: unknown[][] = [];
  console.error = (...args: unknown[]) => {
    errors.push(args);
  };
  try {
    const result = await fn();
    return { result, errors };
  } finally {
    console.error = original;
  }
}

/**
 * These tests guard the SSR contract: the rendered markup must not depend on the
 * runtime `devicePixelRatio` (which is unavailable on the server and would otherwise
 * differ from the client). Density selection is delegated to the browser via `srcset`,
 * so the server and client always produce identical markup and hydration is clean.
 */
describe('headless/FileTypeIcon SSR', () => {
  it('renders deterministic markup on the server (1x src + full density srcset)', () => {
    const html = renderToString(<FileTypeIcon extension="docx" size={24} imageFileType="png" />);

    // Deterministic 1x fallback, independent of any device pixel ratio.
    expect(html).toContain(`src="${DEFAULT_BASE_URL}24/docx.png"`);

    // Every published png density is enumerated for the browser to choose from.
    for (const [suffix, descriptor] of PNG_DENSITIES) {
      expect(html).toContain(`${DEFAULT_BASE_URL}24${suffix}/docx.png ${descriptor}`);
    }
  });

  it('produces identical server and client markup regardless of devicePixelRatio', () => {
    const ui = <FileTypeIcon extension="pptx" size={32} imageFileType="png" />;
    const serverHtml = renderToString(ui);

    // Simulate a high-DPI client; markup must still match the server output (1x).
    const clientHtml = withDevicePixelRatio(3, () => renderToString(ui));
    expect(clientHtml).toBe(serverHtml);
  });

  it('hydrates server-rendered markup without a mismatch on a high-DPI client', async () => {
    const ui = (
      <FileTypeIconsProvider baseUrl="https://example.com/item-types/">
        <FileTypeIcon extension="xlsx" size={24} imageFileType="png" />
      </FileTypeIconsProvider>
    );

    const container = document.createElement('div');
    container.innerHTML = renderToString(ui);
    document.body.appendChild(container);

    try {
      // The server had no `window` (1x); simulate the client on a 3x display to prove the
      // markup is density-independent and therefore hydrates cleanly.
      const { result, errors } = await captureConsoleErrors(() =>
        withDevicePixelRatio(3, async () => {
          let recoverableError: unknown;
          let root: ReturnType<typeof hydrateRoot>;
          await act(async () => {
            root = hydrateRoot(container, ui, {
              onRecoverableError: (error) => {
                recoverableError = error;
              },
            });
          });
          // Read the hydrated src before unmounting empties the container.
          const src = container.querySelector('img')?.getAttribute('src');
          await act(async () => {
            root.unmount();
          });
          return { recoverableError, src };
        }),
      );

      // No hydration warnings and no recoverable hydration errors.
      const hydrationWarnings = errors.filter(
        ([message]) => typeof message === 'string' && /hydrat|did not match|mismatch/i.test(message),
      );
      expect(hydrationWarnings).toEqual([]);
      expect(result.recoverableError).toBeUndefined();
      expect(result.src).toBe('https://example.com/item-types/24/xlsx.png');
    } finally {
      document.body.removeChild(container);
    }
  });
});
