import { describe, it, expect, afterEach } from 'vitest';
const fs = require('fs');
const path = require('path');
const { writeMetadata } = require('./metadata.utils');

const tmpDir = path.join(__dirname, 'tmp-meta');
const filePath = path.join(tmpDir, 'subdir', 'meta.json');

afterEach(() => {
  if (fs.existsSync(tmpDir)) {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});

describe('writeMetadata', () => {
  it('creates directories and writes JSON file', async () => {
    const data = { A: { svg: true, font: false, type: 'resizable' } };
    await writeMetadata(filePath, data);
    expect(fs.existsSync(filePath)).toBe(true);
    const read = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    expect(read).toEqual(data);
  });

  it('pretty prints JSON with 2 spaces', async () => {
    const data = { B: 1 };
    await writeMetadata(filePath, data);
    const content = fs.readFileSync(filePath, 'utf8');
    expect(content).toContain('\n  "B": 1\n');
  });
});
