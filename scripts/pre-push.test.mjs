import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { test } from 'node:test';

const hook = readFileSync(new URL('../.husky/pre-push', import.meta.url), 'utf8');
const manifests = ['package.json', 'packages/fixture/package.json', 'importer/package.json'];

function createFixture(context) {
  const directory = mkdtempSync(join(tmpdir(), 'fluent-icons-pre-push-'));
  context.after(() => rmSync(directory, { recursive: true, force: true }));
  const bin = join(directory, 'bin');
  mkdirSync(bin);
  writeFileSync(join(bin, 'yarn'), '#!/bin/sh\necho "yarn $*"\nexit "${YARN_TEST_EXIT_CODE:-0}"\n', {
    mode: 0o755,
  });

  const git = (...args) =>
    execFileSync('git', ['-c', 'core.hooksPath=/dev/null', '-c', 'commit.gpgsign=false', ...args], {
      cwd: directory,
      encoding: 'utf8',
    });
  git('init', '--quiet');
  git('config', 'user.name', 'Hook Test');
  git('config', 'user.email', 'hook-test@example.invalid');

  const write = (path, contents) => {
    const file = join(directory, path);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, contents);
  };
  for (const path of manifests) {
    write(path, JSON.stringify({ name: path, private: true }));
  }
  write('yarn.lock', 'fixture lockfile\n');
  write('fixtures/example/package.json', '{}');
  git('add', '.');
  git('commit', '--quiet', '-m', 'Initial fixture');

  return {
    git,
    write,
    run: (exitCode = '0') =>
      spawnSync('sh', ['-c', hook], {
        cwd: directory,
        encoding: 'utf8',
        env: { ...process.env, PATH: `${bin}:${process.env.PATH}`, YARN_TEST_EXIT_CODE: exitCode },
      }),
  };
}

test('a clean tree runs the immutable install', (context) => {
  const result = createFixture(context).run();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout.trim(), 'yarn install --immutable');
});

for (const path of ['yarn.lock', ...manifests]) {
  for (const staged of [false, true]) {
    test(`blocks ${staged ? 'staged' : 'unstaged'} changes to ${path} before installing`, (context) => {
      const fixture = createFixture(context);
      fixture.write(path, 'changed\n');
      if (staged) {
        fixture.git('add', path);
      }
      const result = fixture.run();
      assert.equal(result.status, 1, result.stderr);
      assert.match(result.stderr, /differs? from HEAD/);
      assert.equal(result.stdout, '');
    });
  }
}

for (const path of manifests) {
  test(`blocks a local undo hiding committed dependency drift in ${path}`, (context) => {
    const fixture = createFixture(context);
    const original = fixture.git('show', `HEAD:${path}`);
    const manifest = JSON.parse(original);
    manifest.dependencies = { 'fixture-dependency': '1.0.0' };
    fixture.write(path, JSON.stringify(manifest));
    fixture.git('add', path);
    fixture.git('commit', '--quiet', '-m', 'Dependency change without lockfile update');
    fixture.write(path, original);

    const result = fixture.run();
    assert.equal(result.status, 1, result.stderr);
    assert.equal(result.stdout, '');
  });
}

test('propagates immutable install failure for a clean tree', (context) => {
  const result = createFixture(context).run('42');
  assert.equal(result.status, 42, result.stderr);
  assert.equal(result.stdout.trim(), 'yarn install --immutable');
});

test('ignores manifests outside the workspace patterns', (context) => {
  const fixture = createFixture(context);
  fixture.write('fixtures/example/package.json', '{"private":true}');
  const result = fixture.run();
  assert.equal(result.status, 0, result.stderr);
});
