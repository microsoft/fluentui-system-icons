import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('./check-assets-metadata.mjs', import.meta.url));

/**
 * @param {import('node:test').TestContext} t
 * @param {unknown} metadata
 */
function fixture(t, metadata = { size: [32, 24], style: ['Regular', 'Filled', 'Light'] }) {
  const source = fs.mkdtempSync(path.join(os.tmpdir(), 'fluent-assets-metadata-'));
  t.after(() => fs.rmSync(source, { recursive: true, force: true }));
  const group = path.join(source, 'Arrow Import');
  const svg = path.join(group, 'SVG');
  const metadataPath = path.join(group, 'metadata.json');
  fs.mkdirSync(svg, { recursive: true });
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  for (const name of ['24_regular', '24_filled', '32_light']) {
    fs.writeFileSync(path.join(svg, `ic_fluent_arrow_import_${name}.svg`), '<svg/>');
  }
  return {
    source,
    svg,
    metadataPath,
    run: (/** @type {string[]} */ ...args) =>
      spawnSync(process.execPath, [script, `--source=${source}`, ...args], { encoding: 'utf8' }),
  };
}

test('accepts unions of sizes/styles without requiring every combination or reordering metadata', (t) => {
  const { run, metadataPath } = fixture(t);
  const before = fs.readFileSync(metadataPath, 'utf8');
  const result = run();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(fs.readFileSync(metadataPath, 'utf8'), before);
});

test('reports missing Light and 32px declarations with an actionable path and does not write in check mode', (t) => {
  const { run, metadataPath } = fixture(t, { size: [24], style: ['Regular', 'Filled'] });
  const before = fs.readFileSync(metadataPath, 'utf8');
  const result = run();
  assert.equal(result.status, 1);
  assert.ok(result.stderr.includes(metadataPath));
  assert.match(result.stderr, /missing sizes \[32\], styles \["Light"\]/);
  assert.equal(fs.readFileSync(metadataPath, 'utf8'), before);
});

test('reports stale sizes and styles', (t) => {
  const { run } = fixture(t, { size: [16, 24, 32], style: ['Regular', 'Filled', 'Light', 'Color'] });
  const result = run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /stale sizes \[16\], styles \["Color"\]/);
});

test('recognizes LTR/RTL suffixes, color and mono styles', (t) => {
  const { run, svg } = fixture(t, { size: [24, 32], style: ['Regular', 'Filled', 'Light', 'Color', 'Mono'] });
  fs.renameSync(
    path.join(svg, 'ic_fluent_arrow_import_24_regular.svg'),
    path.join(svg, 'ic_fluent_arrow_import_24_regular_ltr.svg'),
  );
  for (const name of ['24_regular_rtl', '32_color', '32_mono']) {
    fs.writeFileSync(path.join(svg, `ic_fluent_arrow_import_${name}.svg`), '<svg/>');
  }
  fs.writeFileSync(path.join(svg, '.DS_Store'), '');
  const result = run();
  assert.equal(result.status, 0, result.stderr);
});

test('fix reconciles only size/style, preserves other fields and is idempotent', (t) => {
  const metadata = {
    name: 'Arrow Import',
    size: [24, 16],
    style: ['Regular', 'Filled', 'Color'],
    directionType: 'mirror',
    description: 'Keep this.',
    metaphor: ['arrow'],
  };
  const { run, metadataPath } = fixture(t, metadata);
  const result = run('--fix');
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(fs.readFileSync(metadataPath, 'utf8')), {
    ...metadata,
    size: [24, 32],
    style: ['Regular', 'Filled', 'Light'],
  });
  assert.equal(run().status, 0);
  const fixed = fs.readFileSync(metadataPath, 'utf8');
  assert.equal(run('--fix').status, 0);
  assert.equal(fs.readFileSync(metadataPath, 'utf8'), fixed);
});

test('explicitly skips groups without metadata', (t) => {
  const { run, source } = fixture(t);
  fs.mkdirSync(path.join(source, 'No Metadata'));
  const result = run();
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /skipped 1 groups without metadata/);
});

test('fails rather than passing an empty metadata scope', (t) => {
  const { run, metadataPath } = fixture(t);
  fs.unlinkSync(metadataPath);
  const result = run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /No metadata.json files found/);
});

for (const metadata of [
  null,
  {},
  { size: [0], style: ['Light'] },
  { size: [32, 32], style: ['Light'] },
  { size: [32], style: ['Light', 'Light'] },
]) {
  test(`rejects invalid metadata ${JSON.stringify(metadata)} even with --fix`, (t) => {
    const { run, metadataPath } = fixture(t, metadata);
    const before = fs.readFileSync(metadataPath, 'utf8');
    const result = run('--fix');
    assert.equal(result.status, 1);
    assert.match(result.stderr, /nonempty arrays of unique/);
    assert.equal(fs.readFileSync(metadataPath, 'utf8'), before);
  });
}

test('reports malformed JSON with its metadata path', (t) => {
  const { run, metadataPath } = fixture(t);
  fs.writeFileSync(metadataPath, '{');
  const result = run();
  assert.equal(result.status, 1);
  assert.ok(result.stderr.includes(metadataPath));
});

test('rejects unrecognized SVG filenames', (t) => {
  const { run, svg } = fixture(t);
  fs.writeFileSync(path.join(svg, 'unknown.svg'), '<svg/>');
  const result = run('--fix');
  assert.equal(result.status, 1);
  assert.match(result.stderr, /unrecognized SVG filename: unknown.svg/);
});

test('rejects missing or empty SVG directories', (t) => {
  const { run, svg } = fixture(t);
  for (const name of fs.readdirSync(svg)) {
    fs.unlinkSync(path.join(svg, name));
  }
  assert.match(run().stderr, /SVG\/ must contain at least one icon/);
  fs.rmdirSync(svg);
  const result = run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /ENOENT/);
});
