// @ts-check
import { describe, it, expect } from 'vitest';
import { readdir, readFile, stat } from 'node:fs/promises';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';

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

  it.each([
    'app_folder_hint_20_filled.svg',
    'app_folder_hint_20_regular.svg',
    'archive_clock_16_regular.svg',
    'archive_clock_20_filled.svg',
    'archive_clock_20_regular.svg',
    'archive_clock_24_filled.svg',
    'archive_clock_24_regular.svg',
    'archive_clock_28_filled.svg',
    'archive_clock_28_regular.svg',
    'archive_clock_32_filled.svg',
    'archive_clock_32_regular.svg',
    'box_question_mark_20_filled.svg',
    'box_question_mark_20_regular.svg',
    'ko/text_edit_style_20_filled.svg',
    'skip_back_15_28_filled.svg',
    'skip_back_15_32_regular.svg',
    'skip_forward_15_28_filled.svg',
    'skip_forward_15_32_regular.svg',
  ])('should inherit fill for every path in %s', async (file) => {
    const content = await readFile(path.join(ICONS_DIR, file), 'utf8');
    expect(content).toMatch(/<path\b/);
    expect(content).not.toMatch(/\sfill="/);
  });

  it('should strip only monochrome design fills and leave Color icons unchanged', () => {
    const dir = fs.mkdtempSync(path.join(tmpdir(), 'fluent-svg-unfill-'));
    const svg =
      '<svg fill="none"><path fill="#212121" d="M0 0h1v1z"/>' +
      '<path fill="#242424" stroke="#242424" d="M1 1h1v1z"/>' +
      '<path fill="#fff" d="M2 2h1v1z"/><path fill="#E50000" d="M3 3h1v1z"/>' +
      '<defs><clipPath id="clip"><path fill="white" d="M0 0h4v4z"/></clipPath></defs></svg>';
    try {
      fs.mkdirSync(path.join(dir, 'ko'));
      for (const file of [
        'test_20_regular.svg',
        'ko/test_20_filled.svg',
        'test_20_color.svg',
        'ko/test_20_color.svg',
      ]) {
        fs.writeFileSync(path.join(dir, file), svg);
      }

      execFileSync(process.execPath, [path.join(__dirname, 'unfill.js'), `--path=${dir}`]);

      for (const file of ['test_20_regular.svg', 'ko/test_20_filled.svg']) {
        expect(fs.readFileSync(path.join(dir, file), 'utf8')).toBe(
          svg.replace(' fill="none"', '').replace(' fill="#212121"', '').replace(' fill="#242424"', ''),
        );
      }
      for (const file of ['test_20_color.svg', 'ko/test_20_color.svg']) {
        expect(fs.readFileSync(path.join(dir, file), 'utf8')).toBe(svg);
      }
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
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
