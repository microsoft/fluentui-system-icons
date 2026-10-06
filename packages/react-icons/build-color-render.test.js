// @ts-check
/**
 * @vitest-environment jsdom
 */

/**
 * Integration test: renders every color icon variant from the built output
 * to verify that the SvgNode[] → React.createElement pipeline produces
 * valid, renderable SVG without dangerouslySetInnerHTML.
 *
 * This test runs as part of build-verify (after `nx run react-icons:build`).
 *
 * Strategy: Scan generated atom sources for Color candidates before importing,
 * then filter runtime exports and render each color icon.
 */

import { describe, it, expect } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { createElement } from 'react';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const atomsDir = path.join(__dirname, 'lib', 'atoms', 'svg');

/**
 * Import only generated atom sources mentioning Color, then collect Color exports.
 * @returns {Promise<Array<{ name: string; file: string; Component: any }>>}
 */
async function loadColorIcons() {
  const files = await readdir(atomsDir);
  const jsFiles = files.filter((f) => f.endsWith('.js'));

  const modules = await Promise.all(
    jsFiles.map(async (file) => {
      const filePath = path.join(atomsDir, file);
      const source = await readFile(filePath, 'utf8');
      return source.includes('Color') ? { file, mod: await import(filePath) } : undefined;
    }),
  );

  /** @type {Array<{ name: string; file: string; Component: any }>} */
  const colorIcons = [];

  for (const entry of modules) {
    if (!entry) continue;
    const { file, mod } = entry;
    for (const [name, Component] of Object.entries(mod)) {
      // Real color-variant icons always end with the `Color` suffix (e.g. `BeachColor`).
      // Mono-color glyphs that merely contain "Color" in their name (e.g. `ColorFilled`,
      // `ColorLineRegular`) end with a style suffix (`Filled`/`Regular`/`Light`) and must be excluded.
      if (!name.endsWith('Color')) continue;
      if (typeof Component !== 'function' && typeof (/** @type {any} */ (Component)?.render) !== 'function') continue;
      colorIcons.push({ name, file, Component });
    }
  }

  return colorIcons;
}

describe('Color Icon Rendering', () => {
  it('all color icon exports from lib/atoms/svg should render valid SVG', async () => {
    const colorIcons = await loadColorIcons();

    expect(colorIcons.length).toMatchInlineSnapshot(`1086`);

    /** @type {Array<{ name: string; file: string; error: unknown }>} */
    const failures = [];

    for (const { name, file, Component } of colorIcons) {
      try {
        const { container } = render(createElement(Component));

        const svg = container.querySelector('svg');
        expect(svg, `${name}: should render an <svg> element`).toBeTruthy();

        // Color icons must have child elements (from SvgNode[] rendering, not dangerouslySetInnerHTML)
        expect(svg?.children.length, `${name}: should have child elements inside <svg>`).toBeGreaterThan(0);

        // Should have standard SVG attributes
        expect(svg, `${name}: should have xmlns`).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
        expect(svg, `${name}: should have viewBox`).toHaveAttribute('viewBox');
      } catch (error) {
        failures.push({ name, file, error });
      } finally {
        cleanup();
      }
    }

    // Report all failures at once for easier debugging
    if (failures.length > 0) {
      const summary = failures
        .map((f) => `  ${f.name} (${f.file}): ${f.error instanceof Error ? f.error.message : String(f.error)}`)
        .join('\n');
      throw new Error(`${failures.length} out of ${colorIcons.length} color icons failed to render:\n${summary}`);
    }
  }, 10_000);
});
