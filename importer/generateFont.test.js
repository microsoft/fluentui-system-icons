// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { create as createFont } from 'fontkit';
import { describe, it, expect } from 'vitest';

describe('font generation', () => {
  it.each(['Filled', 'Regular', 'Light', 'Resizable'])(
    'generates localized glyphs in the existing %s family without reassigning codepoints',
    (family) => {
      const source = fs.mkdtempSync(path.join(os.tmpdir(), 'fluent-localized-font-'));
      const output = path.join(source, 'fonts');
      const style = family === 'Resizable' ? 'regular' : family.toLowerCase();
      const stem = `ic_fluent_test_20_${style}`;
      try {
        fs.mkdirSync(path.join(source, 'es'));
        fs.writeFileSync(
          path.join(source, `${stem}.svg`),
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2 2h8v8H2z"/></svg>',
        );
        fs.writeFileSync(
          path.join(source, 'es', `${stem}.svg`),
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2 2h12v12H2z"/></svg>',
        );
        for (const directory of ['RTL', 'LTR', 'es/RTL']) {
          fs.mkdirSync(path.join(source, directory), { recursive: true });
          fs.copyFileSync(path.join(source, `${stem}.svg`), path.join(source, directory, `${stem}.svg`));
        }
        const codepoints = path.join(source, 'codepoints.json');
        fs.writeFileSync(codepoints, JSON.stringify({ [stem]: 0xf0000 }));
        const result = spawnSync(
          process.execPath,
          [
            path.resolve(__dirname, 'generateFont.js'),
            `--source=${source}`,
            `--dest=${output}`,
            `--iconType=${family}`,
            `--codepoints=${codepoints}`,
          ],
          { encoding: 'utf8' },
        );
        expect(result.status, result.stderr).toBe(0);
        const map = JSON.parse(fs.readFileSync(path.join(output, `FluentSystemIcons-${family}.json`), 'utf8'));
        expect(map[stem]).toBe(0xf0000);
        expect(map[`${stem}_es`]).toBeDefined();
        expect(map[`${stem}_es`]).not.toBe(map[stem]);
        expect(map[`${stem}_rtl`]).toBeUndefined();
        expect(map[`${stem}_ltr`]).toBeUndefined();
        expect(map[`${stem}_es_rtl`]).toBeDefined();
        for (const extension of ['ttf', 'woff', 'woff2']) {
          const font = createFont(fs.readFileSync(path.join(output, `FluentSystemIcons-${family}.${extension}`)));
          if (!('hasGlyphForCodePoint' in font)) throw new Error('Expected a single icon font');
          expect(font.familyName).toBe(`FluentSystemIcons-${family}`);
          expect(font.hasGlyphForCodePoint(map[stem])).toBe(true);
          expect(font.hasGlyphForCodePoint(map[`${stem}_es`])).toBe(true);
          expect(font.glyphForCodePoint(map[`${stem}_es`]).path.commands.length).toBeGreaterThan(0);
          expect(font.glyphForCodePoint(map[`${stem}_es`]).path.commands).not.toEqual(
            font.glyphForCodePoint(map[stem]).path.commands,
          );
        }
      } finally {
        fs.rmSync(source, { recursive: true, force: true });
      }
    },
    30000,
  );
});