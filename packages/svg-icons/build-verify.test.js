// @ts-check
import { describe, it, expect } from 'vitest';
import { readdir, readFile, stat } from 'node:fs/promises';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = path.join(__dirname, 'icons');

/** @param {string} name */
const isIconSvg = (name) => /^[a-z][a-z0-9_]*_\d+_(regular|filled|light|color)\.svg$/.test(name);

describe('Build Verification', () => {
  it('should have icons directory with SVG files', async () => {
    expect(fs.existsSync(ICONS_DIR)).toBe(true);
    const stats = await stat(ICONS_DIR);
    expect(stats.isDirectory()).toBe(true);

    const entries = await readdir(ICONS_DIR);
    const svgFiles = entries.filter((e) => e.endsWith('.svg'));
    expect(svgFiles.length).toBeGreaterThan(0);
  });

  it('should have SVG files following naming convention {name}_{size}_{style}.svg', async () => {
    const entries = await readdir(ICONS_DIR);
    const svgFiles = entries.filter((e) => e.endsWith('.svg'));

    const invalid = svgFiles.filter((f) => !isIconSvg(f));
    expect(invalid, `Files not matching naming convention:\n${invalid.join('\n')}`).toEqual([]);
  });

  it('should have valid SVG content with viewBox', async () => {
    const entries = await readdir(ICONS_DIR);
    const svgFiles = entries.filter((e) => e.endsWith('.svg'));

    // Sample a few files to avoid reading thousands
    const sample = svgFiles.sort().slice(0, 10);

    for (const file of sample) {
      const content = await readFile(path.join(ICONS_DIR, file), 'utf8');
      expect(content, `${file} should start with <svg`).toMatch(/^<svg\b/);
      expect(content, `${file} should have viewBox attribute`).toMatch(/viewBox="/);
    }
  });

  it('should not contain fill="#212121" or fill="none" (unfill step)', async () => {
    const entries = await readdir(ICONS_DIR);
    const svgFiles = entries.filter((e) => e.endsWith('.svg') && !e.includes('_color'));

    // Sample files to verify unfill was applied
    const sample = svgFiles.sort().slice(0, 20);

    for (const file of sample) {
      const content = await readFile(path.join(ICONS_DIR, file), 'utf8');
      expect(content, `${file} should not have fill="#212121"`).not.toMatch(/\sfill="#212121"/);
      expect(content, `${file} should not have fill="none"`).not.toMatch(/\sfill="none"/);
    }
  });

  // TODO: to enable this we would need to update snapshot during release - lets avoid that for now
  it.skip('should have a stable set of icon files (snapshot)', async () => {
    const entries = await readdir(ICONS_DIR);
    const svgFiles = entries.filter((e) => e.endsWith('.svg')).sort();

    // Snapshot first 20 files as a stability check
    expect(svgFiles.slice(0, 20)).toMatchSnapshot('first 20 icon files');
    // Snapshot total count to detect large additions/removals
    expect(svgFiles.length).toMatchSnapshot('total icon count');
  });
});
