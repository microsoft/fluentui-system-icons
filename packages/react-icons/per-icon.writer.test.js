// @ts-check
import fs from 'fs';
import path from 'path';
import { describe, it, expect, afterEach } from 'vitest';

import { normalizeBaseName, writePerIconFiles } from './per-icon.writer';

describe('writePerIconFiles', () => {
  const tmpDest = path.join(__dirname, 'tmp-writer-dest');

  afterEach(() => {
    if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });
  });

  it('groups and orders items and writes a file', async () => {
    fs.mkdirSync(tmpDest, { recursive: true });
    const items = [
      { exportName: 'Test20Filled', exportCode: 'export const Test20Filled = 1;', fileName: 'test-20-filled.tsx' },
      { exportName: 'Test16Regular', exportCode: 'export const Test16Regular = 2;', fileName: 'test-16-regular.tsx' },
    ];
    const header = ['// header'];
    const res = await writePerIconFiles(tmpDest, items, header, { groupByBase: true });

    expect(res.fileCount).toBe(1);
    const files = fs.readdirSync(tmpDest);

    const file = /** @type {string} */ (files.find((x) => x.startsWith('test')));
    expect(file).toBeTruthy();

    const content = fs.readFileSync(path.join(tmpDest, file), 'utf8');
    // should contain header and both exports in order (16 before 20)
    expect(content).toMatchInlineSnapshot(`
      "// header
      export const Test16Regular = 2;
      export const Test20Filled = 1;
      "
    `);
  });

  it('throws on duplicate export names', async () => {
    fs.mkdirSync(tmpDest, { recursive: true });
    const items = [
      { exportName: 'Dup20Filled', exportCode: 'export const Dup20Filled = 1;', fileName: 'dup-20-filled.tsx' },
      { exportName: 'Dup20Filled', exportCode: 'export const Dup20Filled = 2;', fileName: 'dup-20-filled-2.tsx' },
    ];
    await expect(writePerIconFiles(tmpDest, items, [], { groupByBase: true })).rejects.toThrow();
  });
});

describe('normalizeBaseName', () => {
  it('strips size and style tokens from filenames', () => {
    expect(normalizeBaseName('zoom-in-20-filled.tsx')).toBe('zoom-in');
    expect(normalizeBaseName('zoom-in-16-regular')).toBe('zoom-in');
    expect(normalizeBaseName('my-icon-32-light.tsx')).toBe('my-icon');
    expect(normalizeBaseName('color-test-20_color.tsx')).toBe('color-test');
    // numeric-only token
    expect(normalizeBaseName('example-24')).toBe('example');
  });
});
