// @ts-check
import { describe, it, expect } from 'vitest';
import { readdir, readFile, stat } from 'node:fs/promises';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPRITES_DIR = path.join(__dirname, 'sprites');
const ICONS_DIR = path.join(__dirname, 'icons');

/** @param {string} name */
const isSpriteSvg = (name) => /^[a-z][a-z0-9_]*_\d+_(regular|filled|light|color)\.sprite\.svg$/.test(name);

describe('Build Verification', () => {
  it('should have sprites directory with sprite SVG files', async () => {
    expect(fs.existsSync(SPRITES_DIR)).toBe(true);
    const stats = await stat(SPRITES_DIR);
    expect(stats.isDirectory()).toBe(true);

    const entries = await readdir(SPRITES_DIR);
    const spriteFiles = entries.filter((e) => e.endsWith('.sprite.svg'));
    expect(spriteFiles.length).toBeGreaterThan(0);
  });

  it('should NOT have icons directory (cleaned by postsprites)', () => {
    expect(fs.existsSync(ICONS_DIR)).toBe(false);
  });

  it('should have sprite files following naming convention {name}_{size}_{style}.sprite.svg', async () => {
    const entries = await readdir(SPRITES_DIR);
    const spriteFiles = entries.filter((e) => e.endsWith('.svg'));

    const invalid = spriteFiles.filter((f) => !isSpriteSvg(f));
    expect(invalid, `Files not matching naming convention:\n${invalid.join('\n')}`).toEqual([]);
  });

  it('should have valid sprite content with <symbol> element', async () => {
    const entries = await readdir(SPRITES_DIR);
    const spriteFiles = entries.filter((e) => e.endsWith('.sprite.svg')).sort();

    // Sample a few files to avoid reading thousands
    const sample = spriteFiles.slice(0, 10);

    for (const file of sample) {
      const content = await readFile(path.join(SPRITES_DIR, file), 'utf8');

      // Sprite should be a valid SVG
      expect(content, `${file} should contain <svg`).toMatch(/<svg\b/);

      // Should contain a <symbol> with matching id
      const expectedId = path.basename(file, '.sprite.svg');
      expect(content, `${file} should contain <symbol> with id="${expectedId}"`).toMatch(
        new RegExp(`<symbol[^>]+id="${expectedId}"`),
      );

      // Symbol should have viewBox
      expect(content, `${file} symbol should have viewBox`).toMatch(/<symbol[^>]+viewBox="/);
    }
  });

  // TODO: to enable this we would need to update snapshot during release - lets avoid that for now
  it.skip('should have a stable set of sprite files (snapshot)', async () => {
    const entries = await readdir(SPRITES_DIR);
    const spriteFiles = entries.filter((e) => e.endsWith('.sprite.svg')).sort();

    // Snapshot first 20 files as a stability check
    expect(spriteFiles.slice(0, 20)).toMatchSnapshot('first 20 sprite files');
    // Snapshot total count to detect large additions/removals
    expect(spriteFiles.length).toMatchSnapshot('total sprite count');
  });
});
