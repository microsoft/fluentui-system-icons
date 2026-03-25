// @ts-check
import fs from 'fs';
import path from 'path';
import { describe, it, expect, afterEach } from 'vitest';

import { normalizeBaseName, writePerIconFiles, groupItemsByBase } from './per-icon.writer';

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
      { exportName: 'Dup20Filled', exportCode: 'export const Dup20Filled = 2;', fileName: 'dup-22-filled.tsx' },
    ];
    await expect(
      writePerIconFiles(tmpDest, items, [], { groupByBase: true }),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Duplicate export name(s) detected in group 'dup' while generating to '${tmpDest}': exportName='Dup20Filled' -> files=[dup-20-filled.tsx, dup-22-filled.tsx]. This indicates multiple source inputs generated the same export name and should be fixed.]`,
    );
  });
});

describe('groupItemsByBase', () => {
  it('groups related variants into a single base key', () => {
    const items = [
      { exportName: 'Add20Filled', fileName: 'add-20-filled.tsx' },
      { exportName: 'Add20Regular', fileName: 'add-20-regular.tsx' },
      { exportName: 'Alert16Filled', fileName: 'alert-16-filled.tsx' },
    ];
    const groups = groupItemsByBase('/fake', items, { groupByBase: true });

    expect([...groups.keys()]).toEqual(['add', 'alert']);
    expect(groups.get('add')?.map((i) => i.exportName)).toEqual(['Add20Regular', 'Add20Filled']);
    expect(groups.get('alert')?.map((i) => i.exportName)).toEqual(['Alert16Filled']);
  });

  it('sorts items deterministically within each group', () => {
    const items = [
      { exportName: 'Icon24Filled', fileName: 'icon-24-filled.tsx' },
      { exportName: 'IconRegular', fileName: 'icon-regular.tsx' },
      { exportName: 'Icon16Regular', fileName: 'icon-16-regular.tsx' },
      { exportName: 'Icon20Filled', fileName: 'icon-20-filled.tsx' },
    ];
    const groups = groupItemsByBase('/fake', items, { groupByBase: true });

    expect(groups.get('icon')?.map((i) => i.exportName)).toEqual([
      'IconRegular',
      'Icon16Regular',
      'Icon20Filled',
      'Icon24Filled',
    ]);
  });

  it('skips grouping when groupByBase is false', () => {
    const items = [
      { exportName: 'Add20Filled', fileName: 'add-20-filled.tsx' },
      { exportName: 'Add20Regular', fileName: 'add-20-regular.tsx' },
    ];
    const groups = groupItemsByBase('/fake', items, { groupByBase: false });

    expect([...groups.keys()]).toEqual(['add-20-filled', 'add-20-regular']);
  });

  it('throws on duplicate export names within a group', () => {
    const items = [
      { exportName: 'Dup20Filled', fileName: 'dup-20-filled.tsx' },
      { exportName: 'Dup20Filled', fileName: 'dup-22-filled.tsx' },
    ];
    expect(() => groupItemsByBase('/fake', items, { groupByBase: true })).toThrow(
      /Duplicate export name\(s\) detected in group 'dup'/,
    );
  });
});

describe('normalizeBaseName', () => {
  it('strips size and style tokens from filenames', () => {
    expect(normalizeBaseName('icon-16-light.tsx')).toBe('icon');
    expect(normalizeBaseName('zoom-in-20-filled.tsx')).toBe('zoom-in');
    expect(normalizeBaseName('zoom-in-16-regular')).toBe('zoom-in');
    expect(normalizeBaseName('my-icon-32-light.tsx')).toBe('my-icon');
    expect(normalizeBaseName('color-test-20_color.tsx')).toBe('color-test');
    expect(normalizeBaseName('color-test-20-color.tsx')).toBe('color-test');
    expect(normalizeBaseName('text-color-accent-regular.tsx')).toBe('text-color-accent');
    expect(normalizeBaseName('text-color-regular.tsx')).toBe('text-color');
    expect(normalizeBaseName('text-color-20-regular.tsx')).toBe('text-color');
    expect(normalizeBaseName('text-regular.tsx')).toBe('text');
    expect(normalizeBaseName('text-20-regular.tsx')).toBe('text');
    expect(normalizeBaseName('text-color-accent-20-filled.tsx')).toBe('text-color-accent');

    // properly normalize names containing style tokens as first part
    expect(normalizeBaseName('color-16-filled')).toBe('color');
    expect(normalizeBaseName('light-16-filled')).toBe('light');
    expect(normalizeBaseName('regular-16-filled')).toBe('regular');
    expect(normalizeBaseName('filled-16-filled')).toBe('filled');
  });

  it('throws on invalid filenames without style suffix', () => {
    expect(() => normalizeBaseName('icon-20.tsx')).toThrow(
      "Invalid icon filename 'icon-20.tsx' - must end with a style variant (regular, filled, light, color)",
    );
    expect(() => normalizeBaseName('icon.tsx')).toThrow(/must end with a style variant/);
    expect(() => normalizeBaseName('filled.tsx')).toThrow(/must end with a style variant/);
  });
});
