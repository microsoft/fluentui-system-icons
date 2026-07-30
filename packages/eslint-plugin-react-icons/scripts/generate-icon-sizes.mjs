// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Generates the `icon-sizes.generated.ts` data module consumed by the
 * `prefer-resizable` rule, from `@fluentui/react-icons` `metadata.json` (the
 * authoritative source of each icon's `sized` | `resizable` classification).
 *
 * Output is intentionally tiny (a list of pixel sizes + a short collision
 * denylist) so the lint rule stays a single regex test + `Set` lookup at runtime.
 *
 * How classification works:
 *  - Fluent icon sizes are always two digits (10, 12, 16, 20, 24, 28, 32, 48).
 *    A "sized" export name embeds that size right before the variant suffix,
 *    e.g. `AccessTime24Filled`. We collect the set of sizes from every
 *    `type: "sized"` entry (the trailing two digits before the variant).
 *  - The only name-level ambiguity is a two-digit `10`: `Battery10Regular`
 *    (resizable, "10" is a battery level) looks identical to `PresenceDnd10Regular`
 *    (sized, "10" is a size). We resolve this with a generated denylist of the
 *    `resizable` names that happen to match the sized pattern — instead of
 *    dropping size 10 (which would miss the genuinely-sized `Presence*10` icons).
 *
 * The script also VERIFIES the generated data against `metadata.json`: for every
 * icon it asserts `isSized(name) === (type === 'sized')` and throws on any
 * mismatch, so a future icon-set change (new size, new collision) fails the build
 * until the data is regenerated.
 *
 * Usage: node scripts/generate-icon-sizes.mjs [--metadata <path>] [--out <path>] [--check] [--help]
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, resolve } from 'node:path';
import { parseArgs } from 'node:util';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = join(__dirname, '..');
const DEFAULT_METADATA_PATH = join(PACKAGE_ROOT, '..', 'react-icons', 'metadata.json');
const DEFAULT_OUTPUT_PATH = join(PACKAGE_ROOT, 'src', 'rules', 'prefer-resizable', 'icon-sizes.generated.ts');

const VARIANT_SUFFIX = 'Filled|Regular|Color|Light';

/** @typedef {{ svg: boolean; font: boolean; type: 'sized' | 'resizable' }} IconMeta */

function printUsage() {
  console.log(`Generate the prefer-resizable icon size data from @fluentui/react-icons metadata.json.

Usage: node scripts/generate-icon-sizes.mjs [options]

Options:
  --metadata <path>  Path to the react-icons metadata.json (default: ${relative(process.cwd(), DEFAULT_METADATA_PATH)}).
  --out <path>       Path to the generated data module (default: ${relative(process.cwd(), DEFAULT_OUTPUT_PATH)}).
  --check            Verify the committed data is up to date without writing (exit 1 if stale).
  -h, --help         Show this help.`);
}

/**
 * @param {string} metadataPath
 * @returns {Record<string, IconMeta>}
 */
function loadMetadata(metadataPath) {
  return JSON.parse(readFileSync(metadataPath, 'utf8'));
}

/**
 * Extract the trailing two-digit size (immediately before the variant suffix)
 * from a sized icon export name. Returns `null` when the name is not sized-shaped.
 * @param {string} name
 * @returns {number | null}
 */
function extractSize(name) {
  const match = new RegExp(`(\\d{2})(?:${VARIANT_SUFFIX})$`).exec(name);
  return match ? Number(match[1]) : null;
}

/**
 * @param {readonly number[]} sizes
 * @returns {RegExp}
 */
function buildSizedRegExp(sizes) {
  // Sort descending so multi-digit sizes (should any ever be added) are matched
  // greedily-first; two-digit sizes are mutually exclusive so order is cosmetic.
  const alternation = [...sizes].sort((a, b) => b - a).join('|');
  return new RegExp(`(${alternation})(?:${VARIANT_SUFFIX})$`);
}

/**
 * Compute the generated data (sizes + collision denylist) and verify it against
 * the metadata classification.
 * @param {string} metadataPath
 * @returns {{ sizes: number[]; collisions: string[] }}
 */
function computeData(metadataPath) {
  const entries = Object.entries(loadMetadata(metadataPath));

  // 1. Discover the size vocabulary from every sized icon.
  /** @type {Set<number>} */
  const sizes = new Set();
  for (const [name, meta] of entries) {
    if (meta.type === 'sized') {
      const size = extractSize(name);
      if (size === null) {
        throw new Error(`Sized icon "${name}" does not end with a two-digit size + variant suffix.`);
      }
      sizes.add(size);
    }
  }

  const sortedSizes = [...sizes].sort((a, b) => a - b);
  const sizedRegExp = buildSizedRegExp(sortedSizes);

  // 2. Collect resizable names that syntactically look sized (collision denylist).
  const collisions = entries
    .filter(([name, meta]) => meta.type === 'resizable' && sizedRegExp.test(name))
    .map(([name]) => name)
    .sort((a, b) => a.localeCompare(b));
  const collisionSet = new Set(collisions);

  // 3. Verify: exact classification match against metadata.
  /** @type {string[]} */
  const mismatches = [];
  for (const [name, meta] of entries) {
    const isSized = sizedRegExp.test(name) && !collisionSet.has(name);
    if (isSized !== (meta.type === 'sized')) {
      mismatches.push(`${name}: classified ${isSized ? 'sized' : 'resizable'}, metadata says ${meta.type}`);
    }
  }
  if (mismatches.length > 0) {
    throw new Error(`Icon size classification mismatch (${mismatches.length}):\n` + mismatches.slice(0, 20).join('\n'));
  }

  return { sizes: sortedSizes, collisions };
}

/**
 * @param {readonly number[]} sizes
 * @param {readonly string[]} collisions
 * @returns {string}
 */
function renderModule(sizes, collisions) {
  const sizesLiteral = `[${sizes.join(', ')}]`;
  const collisionsLiteral =
    collisions.length === 0 ? '[]' : `[\n${collisions.map((name) => `  '${name}',`).join('\n')}\n]`;

  return `// AUTO-GENERATED by scripts/generate-icon-sizes.mjs — do not edit by hand.
// Regenerate with: npm run generate:data (inside packages/eslint-plugin-react-icons).
//
// Source of truth: @fluentui/react-icons metadata.json (icon "type" field).

/**
 * Pixel sizes used by "sized" Fluent icon variants (e.g. \`AccessTime24Filled\`).
 * All Fluent icon sizes are two digits; a sized export name embeds one of these
 * immediately before its variant suffix.
 */
export const SIZED_ICON_SIZES: readonly number[] = ${sizesLiteral};

/**
 * "resizable" icon names that syntactically look "sized" because a product name
 * ends in a two-digit number matching a real size (e.g. \`Battery10Regular\`, where
 * "10" is a battery level, not a size). These must NOT be flagged as sized.
 */
export const RESIZABLE_COLLISIONS: readonly string[] = ${collisionsLiteral};
`;
}

/**
 * @param {string} filePath
 * @returns {string | null}
 */
function tryReadFile(filePath) {
  try {
    return readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

function main() {
  const { values } = parseArgs({
    options: {
      metadata: { type: 'string' },
      out: { type: 'string' },
      check: { type: 'boolean', default: false },
      help: { type: 'boolean', short: 'h', default: false },
    },
    strict: true,
  });

  if (values.help) {
    printUsage();
    return;
  }

  const metadataPath = values.metadata ? resolve(values.metadata) : DEFAULT_METADATA_PATH;
  const outputPath = values.out ? resolve(values.out) : DEFAULT_OUTPUT_PATH;

  const { sizes, collisions } = computeData(metadataPath);
  const fileContent = renderModule(sizes, collisions);
  const relOutput = relative(process.cwd(), outputPath);

  if (values.check) {
    if (tryReadFile(outputPath) !== fileContent) {
      console.error(`❌ ${relOutput} is out of date. Run: npm run generate:data`);
      process.exit(1);
    }
    console.log(`✅ ${relOutput} is up to date.`);
    return;
  }

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, fileContent, 'utf8');
  console.log(
    `Generated ${relOutput}\n  sizes: [${sizes.join(', ')}]\n  collisions (${collisions.length}): ${collisions.join(', ') || '(none)'}`,
  );
}

main();
