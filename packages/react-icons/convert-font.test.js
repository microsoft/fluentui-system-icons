// @ts-check
import fs from 'fs';
import path from 'path';
import { describe, it, expect, afterAll } from 'vitest';
import { processPerIconSet } from './convert-font';

const tmpSrc = path.join(__dirname, 'tmp-font-src');
const tmpDest = path.join(__dirname, 'tmp-font-dest');

/**
 * Helper to write a minimal codepoint map file used by the font per-icon generator.
 * @param {string} name
 * @param {{ [k: string]: number }} map
 */
function writeMap(name, map) {
  if (!fs.existsSync(tmpSrc)) fs.mkdirSync(tmpSrc, { recursive: true });
  fs.writeFileSync(path.join(tmpSrc, name), JSON.stringify(map), 'utf8');
}

afterAll(() => {
  if (fs.existsSync(tmpSrc)) fs.rmSync(tmpSrc, { recursive: true, force: true });
  if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });
});

describe('convert-font per-icon grouping', () => {
  it('groups font icons when grouping enabled and orders variants deterministically', async () => {
    // reset dest
    if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });
    fs.mkdirSync(tmpDest, { recursive: true });

    // create two glyph entries that normalize to same base and will be ordered by style priority
    const map = {
      ic_fluent_dup_20_filled: 0xe000,
      ic_fluent_dup20_regular: 0xe001,
    };
    writeMap('test.json', map);

    const entries = [{ iconEntries: map, writeProcessedCM: () => {} }];

    // grouping true -> should create one file dup.tsx containing both exports
    const res = await processPerIconSet(tmpDest, entries, {}, false, true);
    expect(res.fileCount).toBeGreaterThan(0);
    const files = fs.readdirSync(tmpDest);
    const dupFile = files.find((f) => f.startsWith('dup'));
    expect(dupFile).toBeTruthy();

    const content = fs.readFileSync(path.join(tmpDest, String(dupFile)), 'utf8');
    // both exports should be present
    expect(content).toContain('export const Dup20Regular');
    expect(content).toContain('export const Dup20Filled');
    // regular should come before filled because of style priority in DEFAULT_STYLE_TOKENS
    expect(content.indexOf('export const Dup20Regular')).toBeLessThan(content.indexOf('export const Dup20Filled'));
  });

  it('orders variants by size when sizes differ (smaller size first)', async () => {
    // reset dest
    if (fs.existsSync(tmpDest)) fs.rmSync(tmpDest, { recursive: true, force: true });
    fs.mkdirSync(tmpDest, { recursive: true });

    const map = {
      ic_fluent_test_20_filled: 0xe010,
      ic_fluent_test_16_regular: 0xe011,
    };
    writeMap('test2.json', map);
    const entries = [{ iconEntries: map, writeProcessedCM: () => {} }];

    const res = await processPerIconSet(tmpDest, entries, {}, false, false);
    expect(res.fileCount).toBeGreaterThan(0);
    const files = fs.readdirSync(tmpDest);
    const testFile = files.find((f) => f.startsWith('test'));
    expect(testFile).toBeTruthy();

    const content = fs.readFileSync(path.join(tmpDest, String(testFile)), 'utf8');
    // both exports present
    expect(content).toContain('export const Test16Regular');
    expect(content).toContain('export const Test20Filled');
    // smaller size (16) should appear before 20
    expect(content.indexOf('export const Test16Regular')).toBeLessThan(content.indexOf('export const Test20Filled'));
  });
});
