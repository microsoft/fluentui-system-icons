#!/usr/bin/env node

// @ts-check

/**
 * Reports individual CODEOWNERS' GitHub organization membership, not employment.
 * Does not modify CODEOWNERS. Teams and email owners are skipped.
 *
 * Usage: node scripts/audit-codeowners-membership.mjs [--codeowners <path>] [--org <name>] [--json]
 *
 * Options:
 *   --codeowners: Input file (defaults to this checkout's .github/CODEOWNERS)
 *   --org: GitHub organization (default: microsoft)
 *   --json: Print a structured report to stdout
 *   --help, -h: Show help and credential requirements
 *
 * Credentials: GH_TOKEN, GITHUB_TOKEN, or existing gh authentication for github.com.
 * Use a classic token with read:org, authorized for the organization's SSO,
 * belonging to an active member. Repository Actions tokens may not suffice.
 * Exit 0: audit completed (including non-member findings); exit 1: incomplete/error.
 *
 * @typedef {{line: number, pattern: string}} Location
 * @typedef {{owner: string, locations: Location[]}} Owner
 * @typedef {{users: Owner[], teams: Owner[], unsupported: Owner[]}} ParsedOwners
 * @typedef {'member' | 'non-member' | 'unknown'} MembershipStatus
 */

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const repoRoot = fileURLToPath(new URL('../', import.meta.url));
const caveat =
  'GitHub organization membership is not proof of current Microsoft employment. Non-members require manual review; no owners are removed.';
const namePattern = /^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i;

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(() => {
    console.error('Audit failed unexpectedly. No CODEOWNERS changes were made.');
    process.exitCode = 1;
  });
}

async function main() {
  const options = processArgs();
  let content;
  try {
    content = readFileSync(options.codeowners, 'utf8');
  } catch {
    console.error(`Cannot read CODEOWNERS: ${options.codeowners}`);
    process.exitCode = 1;
    return;
  }

  const report = await auditMembership(parseCodeowners(content), { org: options.org, token: getToken() });
  if (options.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(`CODEOWNERS membership audit: ${report.organization}`);
    console.log(caveat);
    for (const account of report.accounts) {
      console.log(`\n${account.owner}: ${account.status} (${account.reason})`);
      for (const location of account.locations) {
        console.log(`  line ${location.line}: ${location.pattern}`);
      }
    }
    console.log(
      `\nMembers: ${report.summary.member}; non-members to review: ${report.summary.nonMember}; unknown: ${report.summary.unknown}`,
    );
    for (const owner of report.skipped.teams) console.log(`Skipped team: ${owner.owner}`);
    for (const owner of report.skipped.unsupported) console.log(`Skipped unsupported owner: ${owner.owner}`);
  }
  if (!report.complete) {
    console.error(
      "Audit incomplete. Use an active organization member's read:org credential authorized for SSO; resolve any reported API failures before reviewing non-members.",
    );
    process.exitCode = 1;
  }
}

// ====================================

function processArgs() {
  let options;
  try {
    options = parseArgs({
      options: {
        codeowners: { type: 'string', default: path.join(repoRoot, '.github/CODEOWNERS') },
        org: { type: 'string', default: 'microsoft' },
        json: { type: 'boolean', default: false },
        help: { type: 'boolean', short: 'h' },
      },
    }).values;
  } catch {
    console.error('Error parsing arguments. Use only the documented options.');
    printUsage();
    process.exit(1);
  }
  if (options.help) {
    printUsage();
    process.exit(0);
  }
  if (!namePattern.test(options.org)) {
    console.error('Invalid organization name.');
    process.exit(1);
  }
  return { codeowners: path.resolve(options.codeowners), org: options.org, json: options.json };
}

function printUsage() {
  console.error('Usage: node scripts/audit-codeowners-membership.mjs [--codeowners <path>] [--org <name>] [--json]');
  console.error(
    "\nOptions:\n  --codeowners: Input file (default: this checkout's .github/CODEOWNERS)\n  --org: GitHub organization (default: microsoft)\n  --json: Structured report\n  --help, -h: Show help",
  );
  console.error('\nCredentials: GH_TOKEN, GITHUB_TOKEN, or gh auth token --hostname github.com.');
  console.error('Requires active org membership and read:org access with SSO authorization.');
  console.error('Exit 0: complete audit; exit 1: incomplete audit or input error.');
  console.error(caveat);
}

/** @param {string} content @returns {ParsedOwners} */
export function parseCodeowners(content) {
  /** @type {Map<string, Owner>} */
  const users = new Map();
  /** @type {Map<string, Owner>} */
  const teams = new Map();
  /** @type {Map<string, Owner>} */
  const unsupported = new Map();
  for (const [index, rawLine] of content.split(/\r?\n/).entries()) {
    const tokens = rawLine.split('#', 1)[0].match(/(?:\\.|[^\s])+/g) ?? [];
    const [pattern, ...owners] = tokens;
    for (const owner of new Set(owners)) {
      const group = /^@[^/\s]+\/[^/\s]+$/.test(owner)
        ? teams
        : owner.startsWith('@') && namePattern.test(owner.slice(1))
          ? users
          : unsupported;
      const key = owner.toLowerCase();
      let entry = group.get(key);
      if (!entry) {
        entry = { owner, locations: [] };
        group.set(key, entry);
      }
      if (!entry.locations.some((location) => location.line === index + 1)) {
        entry.locations.push({ line: index + 1, pattern });
      }
    }
  }
  return { users: [...users.values()], teams: [...teams.values()], unsupported: [...unsupported.values()] };
}

/**
 * @param {NodeJS.ProcessEnv} [env]
 * @param {() => string} [readGhToken]
 * @returns {string | undefined}
 */
export function getToken(
  env = process.env,
  readGhToken = () =>
    execFileSync('gh', ['auth', 'token', '--hostname', 'github.com'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      timeout: 5000,
    }),
) {
  const token = env.GH_TOKEN?.trim() || env.GITHUB_TOKEN?.trim();
  if (token) return token;
  try {
    return readGhToken().trim() || undefined;
  } catch {
    return undefined;
  }
}

/**
 * @param {ParsedOwners} parsed
 * @param {{org?: string, token?: string, fetchImpl?: typeof fetch, timeoutMs?: number}} [options]
 */
export async function auditMembership(parsed, { org = 'microsoft', token, fetchImpl = fetch, timeoutMs = 15000 } = {}) {
  const accounts = parsed.users.map((owner) => ({
    ...owner,
    status: /** @type {MembershipStatus} */ ('unknown'),
    reason: '',
  }));
  const report = {
    organization: org,
    checkedAt: new Date().toISOString(),
    caveat,
    complete: false,
    accounts,
    skipped: { teams: parsed.teams, unsupported: parsed.unsupported },
    summary: { member: 0, nonMember: 0, unknown: 0 },
  };
  let preflightReason;
  if (!token) {
    preflightReason = 'Missing credentials: use GH_TOKEN, GITHUB_TOKEN or gh with read:org and SSO access.';
  } else {
    const preflight = await request(`/user/memberships/orgs/${encodeURIComponent(org)}`, token, fetchImpl, timeoutMs);
    preflightReason = preflight.reason;
    if (!preflightReason && preflight.response) {
      if (preflight.response.status !== 200) {
        preflightReason = `Requester access could not be verified (HTTP ${preflight.response.status}).`;
      } else {
        try {
          const membership = await preflight.response.json();
          if (membership?.state !== 'active' || membership?.organization?.login?.toLowerCase() !== org.toLowerCase()) {
            preflightReason = 'Requester active membership in this organization could not be verified.';
          }
        } catch {
          preflightReason = 'Requester membership response was invalid or timed out.';
        }
      }
    }
  }
  for (const account of accounts) {
    if (preflightReason) {
      account.reason = preflightReason;
      continue;
    }
    const result = await request(
      `/orgs/${encodeURIComponent(org)}/members/${encodeURIComponent(account.owner.slice(1))}`,
      /** @type {string} */ (token),
      fetchImpl,
      timeoutMs,
    );
    if (result.reason || !result.response) {
      account.reason = result.reason ?? 'Membership check unavailable.';
    } else if (result.response.status === 204) {
      account.status = 'member';
      account.reason = 'GitHub membership confirmed (HTTP 204).';
    } else if (result.response.status === 404) {
      account.status = 'non-member';
      account.reason = 'Not a GitHub org member (HTTP 404 with requester access verified); manual review required.';
    } else {
      account.reason = `Membership check inconclusive (HTTP ${result.response.status}); check access or API availability.`;
    }
  }
  for (const account of accounts) {
    if (account.status === 'member') report.summary.member++;
    else if (account.status === 'non-member') report.summary.nonMember++;
    else report.summary.unknown++;
  }
  report.complete = !preflightReason && report.summary.unknown === 0;
  return report;
}

/**
 * @param {string} endpoint
 * @param {string} token
 * @param {typeof fetch} fetchImpl
 * @param {number} timeoutMs
 * @returns {Promise<{response?: Response, reason?: string}>}
 */
async function request(endpoint, token, fetchImpl, timeoutMs) {
  try {
    const response = await fetchImpl(`https://api.github.com${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      redirect: 'manual',
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (response.headers.get('X-GitHub-SSO')) {
      return { reason: `SSO authorization is required or partial (HTTP ${response.status}).` };
    }
    if (response.headers.get('X-RateLimit-Remaining') === '0' && response.status !== 200 && response.status !== 204) {
      return { reason: `GitHub rate limit prevents verification (HTTP ${response.status}).` };
    }
    return { response };
  } catch (error) {
    const timedOut = error instanceof Error && (error.name === 'TimeoutError' || error.name === 'AbortError');
    return {
      reason: timedOut
        ? 'Membership request timeout; retry later.'
        : 'Membership request failed; check network access.',
    };
  }
}
