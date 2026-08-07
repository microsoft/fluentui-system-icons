// @ts-check
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { fullySpecifyEsm, finalizeCjs, esmFirstEntry } from './module-format';

/** @type {string[]} */
const tempRoots = [];

/**
 * Materialises a fixture tree and returns its root.
 * @param {Record<string, string>} files - path (relative to root) -> contents
 */
function createTree(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'module-format-'));
  tempRoots.push(root);

  for (const [relative, contents] of Object.entries(files)) {
    const absolute = path.join(root, relative);
    fs.mkdirSync(path.dirname(absolute), { recursive: true });
    fs.writeFileSync(absolute, contents);
  }

  return root;
}

/**
 * @param {string} root
 * @param {string} relative
 */
const read = (root, relative) => fs.readFileSync(path.join(root, relative), 'utf8');

/**
 * Every file under `root`, relative and sorted — used to assert renames.
 * @param {string} root
 */
function listFiles(root) {
  /** @type {string[]} */
  const out = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true, recursive: true })) {
    if (entry.isFile()) {
      out.push(path.relative(root, path.join(entry.parentPath ?? entry.path, entry.name)));
    }
  }
  return out.sort();
}

afterEach(() => {
  vi.restoreAllMocks();
  while (tempRoots.length > 0) {
    fs.rmSync(/** @type {string} */ (tempRoots.pop()), { recursive: true, force: true });
  }
});

describe('module-format', () => {
  describe('fullySpecifyEsm', () => {
    it('appends .js to specifiers that resolve to a sibling file', async () => {
      const root = createTree({
        'index.js': `export { a } from './a';\nimport { b } from './nested/b';\n`,
        'a.js': 'export const a = 1;',
        'nested/b.js': 'export const b = 2;',
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'index.js')).toBe(`export { a } from './a.js';\nimport { b } from './nested/b.js';\n`);
    });

    it('resolves a directory specifier to its index file', async () => {
      const root = createTree({
        'index.js': `export * from './contexts';\n`,
        'contexts/index.js': 'export const ctx = 1;',
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'index.js')).toBe(`export * from './contexts/index.js';\n`);
    });

    it('resolves parent-relative specifiers', async () => {
      const root = createTree({
        'atoms/svg/icon.js': `import { createFluentIcon } from '../../utils/createFluentIcon';\n`,
        'utils/createFluentIcon.js': 'export const createFluentIcon = () => {};',
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'atoms/svg/icon.js')).toBe(
        `import { createFluentIcon } from '../../utils/createFluentIcon.js';\n`,
      );
    });

    it('rewrites every specifier form the emitted output can contain', async () => {
      const root = createTree({
        'index.js': [
          `import a from './a';`,
          `export { b } from './b';`,
          `import './side-effect';`,
          `const c = await import('./c');`,
          `const d = require('./d');`,
        ].join('\n'),
        'a.js': '',
        'b.js': '',
        'side-effect.js': '',
        'c.js': '',
        'd.js': '',
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'index.js')).toBe(
        [
          `import a from './a.js';`,
          `export { b } from './b.js';`,
          `import './side-effect.js';`,
          `const c = await import('./c.js');`,
          `const d = require('./d.js');`,
        ].join('\n'),
      );
    });

    it('leaves specifiers that already carry a resolvable extension untouched', async () => {
      const root = createTree({
        'index.js': [
          `import './already.js';`,
          `import styles from './styles.css';`,
          `import map from './codepoints.json';`,
          `import font from './font.woff2';`,
        ].join('\n'),
        'already.js': '',
        'styles.css': '',
        'codepoints.json': '{}',
        'font.woff2': '',
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'index.js')).toBe(
        [
          `import './already.js';`,
          `import styles from './styles.css';`,
          `import map from './codepoints.json';`,
          `import font from './font.woff2';`,
        ].join('\n'),
      );
    });

    it('leaves bare package specifiers untouched', async () => {
      const root = createTree({
        'index.js': `import * as React from 'react';\nimport { mergeClasses } from '@griffel/react';\n`,
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'index.js')).toBe(
        `import * as React from 'react';\nimport { mergeClasses } from '@griffel/react';\n`,
      );
    });

    it('rewrites declaration files as well, pointing at the .js sibling', async () => {
      const root = createTree({
        'index.d.ts': `export * from './icons/chunk-0';\nexport type { X } from './types';\n`,
        'icons/chunk-0.js': '',
        'icons/chunk-0.d.ts': '',
        'types.js': '',
        'types.d.ts': '',
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'index.d.ts')).toBe(
        `export * from './icons/chunk-0.js';\nexport type { X } from './types.js';\n`,
      );
    });

    it('warns and leaves the specifier alone when it cannot be resolved', async () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const root = createTree({ 'index.js': `export { wrapIcon } from './missing';\n` });

      await fullySpecifyEsm(root);

      expect(read(root, 'index.js')).toBe(`export { wrapIcon } from './missing';\n`);
      expect(warn).toHaveBeenCalledWith(expect.stringContaining(`could not resolve './missing'`));
    });

    it('ignores commented-out imports, which tsc preserves into the output', async () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const root = createTree({
        'index.js': [
          `// TODO: export this once it exists`,
          `// export { wrapIcon } from './wrapIcon';`,
          `  // export { other } from './other';`,
        ].join('\n'),
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'index.js')).toBe(
        [
          `// TODO: export this once it exists`,
          `// export { wrapIcon } from './wrapIcon';`,
          `  // export { other } from './other';`,
        ].join('\n'),
      );
      expect(warn).not.toHaveBeenCalled();
    });

    it('still rewrites a live import that carries a trailing comment', async () => {
      const root = createTree({
        'index.js': `export { a } from './a'; // keep ./b in mind\n`,
        'a.js': '',
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'index.js')).toBe(`export { a } from './a.js'; // keep ./b in mind\n`);
    });

    it('ignores files that are not JavaScript or declarations', async () => {
      const root = createTree({
        'sprite.svg': `<svg data-from="./a" />`,
        'a.js': '',
      });

      await fullySpecifyEsm(root);

      expect(read(root, 'sprite.svg')).toBe(`<svg data-from="./a" />`);
    });
  });

  describe('finalizeCjs', () => {
    it('renames output to .cjs / .d.cts and repoints relative requires', async () => {
      const root = createTree({
        'index.js': `const a = require("./a");\nconst nested = require("./nested/b");\n`,
        'index.d.ts': `export * from './a';\n`,
        'a.js': '',
        'a.d.ts': '',
        'nested/b.js': '',
      });

      await finalizeCjs(root);

      expect(listFiles(root)).toEqual(['a.cjs', 'a.d.cts', 'index.cjs', 'index.d.cts', 'nested/b.cjs']);
      expect(read(root, 'index.cjs')).toBe(
        `const a = require("./a.cjs");\nconst nested = require("./nested/b.cjs");\n`,
      );
      expect(read(root, 'index.d.cts')).toBe(`export * from './a.cjs';\n`);
    });

    it('resolves directory requires to the renamed index', async () => {
      const root = createTree({
        'index.js': `const ctx = require("./contexts");\n`,
        'contexts/index.js': '',
      });

      await finalizeCjs(root);

      expect(read(root, 'index.cjs')).toBe(`const ctx = require("./contexts/index.cjs");\n`);
    });

    it('leaves non-module assets in place', async () => {
      const root = createTree({
        'index.js': `require("./a");`,
        'a.js': '',
        'utils/fonts/icons.woff2': 'binary',
        'headless/styles.css': '.a{}',
      });

      await finalizeCjs(root);

      expect(listFiles(root)).toEqual(['a.cjs', 'headless/styles.css', 'index.cjs', 'utils/fonts/icons.woff2']);
    });
  });

  describe('esmFirstEntry', () => {
    it('pairs an ESM target with its finalized lib-cjs counterpart', () => {
      expect(esmFirstEntry('./lib/headless/index.js')).toEqual({
        import: { types: './lib/headless/index.d.ts', default: './lib/headless/index.js' },
        require: { types: './lib-cjs/headless/index.d.cts', default: './lib-cjs/headless/index.cjs' },
      });
    });

    it('handles wildcard subpaths', () => {
      expect(esmFirstEntry('./lib/atoms/svg-sprite/*.js')).toEqual({
        import: { types: './lib/atoms/svg-sprite/*.d.ts', default: './lib/atoms/svg-sprite/*.js' },
        require: {
          types: './lib-cjs/atoms/svg-sprite/*.d.cts',
          default: './lib-cjs/atoms/svg-sprite/*.cjs',
        },
      });
    });
  });
});
