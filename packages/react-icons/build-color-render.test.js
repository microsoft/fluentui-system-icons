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
 * Strategy: Load all atom modules from lib/atoms/svg/ in parallel, then filter
 * for Color exports and render each one.
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { createElement } from 'react';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const atomsDir = path.join(__dirname, 'lib', 'atoms', 'svg');

/**
 * Load all atom modules in parallel and collect Color icon exports.
 * @returns {Promise<Array<{ name: string; file: string; Component: any }>>}
 */
async function loadColorIcons() {
  const files = await readdir(atomsDir);
  const jsFiles = files.filter((f) => f.endsWith('.js'));

  const modules = await Promise.all(
    jsFiles.map((file) => import(path.join(atomsDir, file)).then((mod) => ({ file, mod }))),
  );

  /** @type {Array<{ name: string; file: string; Component: any }>} */
  const colorIcons = [];

  for (const { file, mod } of modules) {
    for (const [name, Component] of Object.entries(mod)) {
      if (!name.includes('Color')) continue;
      if (typeof Component !== 'function' && typeof (/** @type {any} */ (Component)?.render) !== 'function') continue;
      colorIcons.push({ name, file, Component });
    }
  }

  return colorIcons;
}

describe('Color Icon Rendering', () => {
  it('all color icon exports from lib/atoms/svg should render valid SVG', async () => {
    const colorIcons = await loadColorIcons();

    expect(colorIcons.length).toMatchInlineSnapshot(`1165`);

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
