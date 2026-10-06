// @ts-check
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

describe('RTL metadata generator', () => {
  it('generates sized and resizable keys for every declared style', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'fluent-rtl-metadata-'));
    const source = path.join(root, 'assets', 'Arrow Reply');
    const destination = path.join(root, 'intermediate', 'rtl.json');

    try {
      fs.mkdirSync(source, { recursive: true });
      fs.writeFileSync(
        path.join(source, 'metadata.json'),
        JSON.stringify({
          name: 'Arrow Reply',
          size: [32],
          style: ['Regular', 'Filled', 'Light'],
          directionType: 'mirror',
        }),
      );

      const result = spawnSync(
        process.execPath,
        [
          path.resolve(__dirname, '../../../importer/rtlMetadata.js'),
          `--source=${path.join(root, 'assets')}`,
          `--dest=${destination}`,
        ],
        { encoding: 'utf8' },
      );

      expect(result.status, result.stderr).toBe(0);
      expect(JSON.parse(fs.readFileSync(destination, 'utf8'))).toEqual({
        ArrowReply32Regular: 'mirror',
        ArrowReply32Filled: 'mirror',
        ArrowReply32Light: 'mirror',
        ArrowReplyRegular: 'mirror',
        ArrowReplyFilled: 'mirror',
        ArrowReplyLight: 'mirror',
      });
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });
});
