import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { auditMembership, getToken, parseCodeowners } from './audit-codeowners-membership.mjs';

const script = fileURLToPath(new URL('./audit-codeowners-membership.mjs', import.meta.url));
const codeowners = fileURLToPath(new URL('../.github/CODEOWNERS', import.meta.url));
const active = () => Response.json({ state: 'active', organization: { login: 'microsoft' } });
const parsed = parseCodeowners('/one @Alice @microsoft/core\n/two @Bob');

function mockApi(responses) {
  const requests = [];
  return {
    requests,
    fetchImpl: async (url, options) => {
      requests.push({ url, options });
      const response = responses.shift();
      assert.ok(response, 'Unexpected API request');
      if (response instanceof Error) throw response;
      return response;
    },
  };
}

test('parses users, skipped teams and unsupported owners without losing locations', () => {
  const result = parseCodeowners(
    [
      '# @CommentedOwner',
      '/one\t@Alice @microsoft/Core person@example.com # @Ignored',
      '/two @ALICE @Bob @MICROSOFT/core',
      '/no-owner',
      '',
      '/space\\ path @Alice',
    ].join('\r\n'),
  );
  assert.deepEqual(result.users, [
    {
      owner: '@Alice',
      locations: [
        { line: 2, pattern: '/one' },
        { line: 3, pattern: '/two' },
        { line: 6, pattern: '/space\\ path' },
      ],
    },
    { owner: '@Bob', locations: [{ line: 3, pattern: '/two' }] },
  ]);
  assert.deepEqual(result.teams, [
    {
      owner: '@microsoft/Core',
      locations: [
        { line: 2, pattern: '/one' },
        { line: 3, pattern: '/two' },
      ],
    },
  ]);
  assert.deepEqual(result.unsupported, [{ owner: 'person@example.com', locations: [{ line: 2, pattern: '/one' }] }]);
});

test('prefers environment credentials without invoking gh or exposing its errors', () => {
  const unexpected = () => {
    throw new Error('gh must not run');
  };
  assert.equal(getToken({ GH_TOKEN: ' first ', GITHUB_TOKEN: 'second' }, unexpected), 'first');
  assert.equal(getToken({ GH_TOKEN: ' ', GITHUB_TOKEN: 'second' }, unexpected), 'second');
  assert.equal(
    getToken({}, () => ' gh-token\n'),
    'gh-token',
  );
  assert.equal(
    getToken({}, () => {
      throw new Error('secret in subprocess output');
    }),
    undefined,
  );
});

test('checks active requester access before classifying users and never expands teams', async () => {
  const api = mockApi([active(), new Response(null, { status: 204 }), new Response(null, { status: 404 })]);
  const result = await auditMembership(parsed, { token: 'test-token', ...api });
  assert.equal(result.complete, true);
  assert.deepEqual(
    result.accounts.map((account) => account.status),
    ['member', 'non-member'],
  );
  assert.deepEqual(result.summary, { member: 1, nonMember: 1, unknown: 0 });
  assert.deepEqual(
    api.requests.map((request) => request.url),
    [
      'https://api.github.com/user/memberships/orgs/microsoft',
      'https://api.github.com/orgs/microsoft/members/Alice',
      'https://api.github.com/orgs/microsoft/members/Bob',
    ],
  );
  for (const { options } of api.requests) {
    assert.equal(options.redirect, 'manual');
    assert.equal(options.headers.Authorization, 'Bearer test-token');
    assert.equal(options.headers.Accept, 'application/vnd.github+json');
    assert.ok(options.headers['X-GitHub-Api-Version']);
    assert.ok(options.signal instanceof AbortSignal);
  }
  assert.deepEqual(result.skipped.teams, parsed.teams);
  assert.match(result.caveat, /not.*employment/i);
  assert.equal(JSON.stringify(result).includes('test-token'), false);
});

for (const [label, response] of [
  ['pending membership', () => Response.json({ state: 'pending', organization: { login: 'microsoft' } })],
  ['wrong organization', () => Response.json({ state: 'active', organization: { login: 'other' } })],
  ['missing membership data', () => Response.json({})],
  ['invalid JSON', () => new Response('not json')],
  ['not an organization member', () => new Response(null, { status: 404 })],
  ['forbidden', () => new Response(null, { status: 403 })],
]) {
  test(`failed preflight (${label}) leaves all accounts unknown`, async () => {
    const api = mockApi([response()]);
    const result = await auditMembership(parsed, { token: 'test-token', ...api });
    assert.equal(result.complete, false);
    assert.ok(result.accounts.every((account) => account.status === 'unknown'));
    assert.equal(api.requests.length, 1);
  });
}

test('missing credentials makes no API requests', async () => {
  const api = mockApi([]);
  const result = await auditMembership(parsed, { ...api });
  assert.equal(result.complete, false);
  assert.equal(result.summary.unknown, 2);
  assert.equal(api.requests.length, 0);
  assert.match(result.accounts[0].reason, /read:org/);
});

for (const status of [302, 401, 403, 429, 500]) {
  test(`HTTP ${status} is unknown, not non-member`, async () => {
    const api = mockApi([active(), new Response(null, { status }), new Response(null, { status: 204 })]);
    const result = await auditMembership(parsed, { token: 'test-token', ...api });
    assert.equal(result.complete, false);
    assert.equal(result.accounts[0].status, 'unknown');
    assert.equal(result.accounts[1].status, 'member');
    assert.match(result.accounts[0].reason, new RegExp(String(status)));
  });
}

for (const signal of ['required; url=https://github.com/orgs/microsoft/sso', 'partial-results; organizations=1']) {
  test(`SSO restriction (${signal.split(';')[0]}) overrides negative membership`, async () => {
    const api = mockApi([
      active(),
      new Response(null, { status: 404, headers: { 'X-GitHub-SSO': signal } }),
      new Response(null, { status: 204 }),
    ]);
    const result = await auditMembership(parsed, { token: 'test-token', ...api });
    assert.equal(result.accounts[0].status, 'unknown');
    assert.match(result.accounts[0].reason, /SSO/);
  });
}

for (const error of [new Error('network failed'), new DOMException('timed out', 'TimeoutError')]) {
  test(`${error.name} makes the check incomplete without leaking request errors`, async () => {
    const api = mockApi([active(), error, new Response(null, { status: 204 })]);
    const result = await auditMembership(parsed, { token: 'test-token', ...api });
    assert.equal(result.complete, false);
    assert.equal(result.accounts[0].status, 'unknown');
    assert.equal(JSON.stringify(result).includes(error.message), false);
  });
}

test('a stalled request is aborted by the configured timeout', async () => {
  let requests = 0;
  const keepAlive = setInterval(() => {}, 1000);
  try {
    const result = await auditMembership(parseCodeowners('/one @Alice'), {
      token: 'test-token',
      timeoutMs: 10,
      fetchImpl: async (_url, options) => {
        requests++;
        if (requests === 1) return active();
        return new Promise((_resolve, reject) => {
          options.signal.addEventListener('abort', () => reject(options.signal.reason), { once: true });
        });
      },
    });
    assert.equal(result.complete, false);
    assert.equal(result.accounts[0].status, 'unknown');
    assert.match(result.accounts[0].reason, /timeout/i);
  } finally {
    clearInterval(keepAlive);
  }
});

test('native CLI help and import perform no authentication or file writes', () => {
  const before = readFileSync(codeowners);
  const help = spawnSync(process.execPath, [script, '--help'], { encoding: 'utf8' });
  assert.equal(help.status, 0);
  assert.match(help.stderr, /--codeowners/);
  assert.equal(help.stdout, '');
  const imported = spawnSync(
    process.execPath,
    ['--input-type=module', '--eval', `await import(${JSON.stringify(script)})`],
    { encoding: 'utf8' },
  );
  assert.equal(imported.status, 0);
  assert.equal(imported.stdout + imported.stderr, '');
  assert.deepEqual(readFileSync(codeowners), before);
});

test('native CLI JSON is parseable when credentials are missing, even from another cwd', () => {
  const before = readFileSync(codeowners);
  const result = spawnSync(process.execPath, [script, '--json'], {
    cwd: fileURLToPath(new URL('../.github', import.meta.url)),
    encoding: 'utf8',
    env: { ...process.env, GH_TOKEN: '', GITHUB_TOKEN: '', PATH: '' },
  });
  assert.equal(result.status, 1);
  const report = JSON.parse(result.stdout);
  assert.equal(report.complete, false);
  assert.equal(report.organization, 'microsoft');
  assert.deepEqual(
    report.accounts.map((account) => account.owner),
    ['@bigbadcapers', '@willchavez'],
  );
  assert.match(result.stderr, /incomplete/i);
  assert.match(report.caveat, /not.*employment/i);
  assert.deepEqual(readFileSync(codeowners), before);
});

for (const json of [true, false]) {
  test(`native CLI completes a report-only audit (${json ? 'JSON' : 'text'}) even with non-members`, () => {
    const before = readFileSync(codeowners);
    const preload = `
      globalThis.fetch = async (url) => {
        if (url.includes('/user/memberships/')) {
          return Response.json({ state: 'active', organization: { login: 'microsoft' } });
        }
        return new Response(null, { status: url.endsWith('/bigbadcapers') ? 204 : 404 });
      };
    `;
    const args = [
      '--import',
      `data:text/javascript,${encodeURIComponent(preload)}`,
      script,
      '--codeowners',
      codeowners,
    ];
    if (json) args.push('--json');
    const result = spawnSync(process.execPath, args, {
      encoding: 'utf8',
      env: { ...process.env, GH_TOKEN: 'cli-test-token' },
    });
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stderr, '');
    assert.equal(result.stdout.includes('cli-test-token'), false);
    if (json) {
      const report = JSON.parse(result.stdout);
      assert.equal(report.complete, true);
      assert.deepEqual(report.summary, { member: 1, nonMember: 1, unknown: 0 });
    } else {
      assert.match(result.stdout, /@willchavez: non-member/);
      assert.match(result.stdout, /manual review/i);
      assert.match(result.stdout, /not.*employment/i);
    }
    assert.deepEqual(readFileSync(codeowners), before);
  });
}

test('native CLI rejects invalid arguments and unreadable inputs without revealing secrets', () => {
  for (const args of [
    ['--org', '../bad'],
    ['--codeowners', 'missing-codeowners'],
    ['--github-token', 'secret'],
  ]) {
    const result = spawnSync(process.execPath, [script, ...args], { encoding: 'utf8' });
    assert.equal(result.status, 1);
    assert.equal(result.stdout, '');
    assert.equal(result.stderr.includes('secret'), false);
  }
});
