// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    source: { type: 'string', default: fileURLToPath(new URL('../assets/', import.meta.url)) },
    fix: { type: 'boolean', default: false },
  },
});

let checked = 0;
let skipped = 0;
let changed = 0;
let errors = 0;

for (const group of fs.readdirSync(values.source, { withFileTypes: true })) {
  if (!group.isDirectory()) {
    continue;
  }

  const directory = path.join(values.source, group.name);
  const metadataPath = path.join(directory, 'metadata.json');
  if (!fs.existsSync(metadataPath)) {
    skipped++;
    continue;
  }

  checked++;
  try {
    const content = fs.readFileSync(metadataPath, 'utf8');
    const metadata = JSON.parse(content);
    if (!isMetadata(metadata)) {
      throw new Error('size and style must be nonempty arrays of unique positive integers and strings, respectively.');
    }

    /** @type {Set<number>} */
    const sizes = new Set();
    /** @type {Set<string>} */
    const styles = new Set();
    for (const file of fs.readdirSync(path.join(directory, 'SVG'), { withFileTypes: true })) {
      if (!file.isFile() || !file.name.endsWith('.svg')) {
        continue;
      }
      const match = file.name.match(/^ic_fluent_.+_(\d+)_([a-z]+)(?:_(?:ltr|rtl))?\.svg$/);
      if (!match || !Number.isSafeInteger(Number(match[1])) || Number(match[1]) === 0) {
        throw new Error(`unrecognized SVG filename: ${file.name}`);
      }
      sizes.add(Number(match[1]));
      styles.add(match[2][0].toUpperCase() + match[2].slice(1));
    }
    if (sizes.size === 0) {
      throw new Error('SVG/ must contain at least one icon.');
    }

    const missingSizes = [...sizes].filter((size) => !metadata.size.includes(size)).sort((a, b) => b - a);
    const missingStyles = [...styles].filter((style) => !metadata.style.includes(style)).sort();
    const staleSizes = metadata.size.filter((size) => !sizes.has(size));
    const staleStyles = metadata.style.filter((style) => !styles.has(style));
    if (missingSizes.length || missingStyles.length || staleSizes.length || staleStyles.length) {
      const differences = [
        `missing sizes ${JSON.stringify(missingSizes)}, styles ${JSON.stringify(missingStyles)}`,
        `stale sizes ${JSON.stringify(staleSizes)}, styles ${JSON.stringify(staleStyles)}`,
      ].join('; ');
      if (values.fix) {
        metadata.size = [...metadata.size.filter((size) => sizes.has(size)), ...missingSizes];
        metadata.style = [...metadata.style.filter((style) => styles.has(style)), ...missingStyles];
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2) + (content.endsWith('\n') ? '\n' : ''));
        changed++;
        console.log(`${metadataPath}: fixed ${differences}`);
      } else {
        throw new Error(differences);
      }
    }
  } catch (error) {
    errors++;
    console.error(`${metadataPath}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (checked === 0) {
  errors++;
  console.error(`No metadata.json files found under ${values.source}.`);
}

console.log(`Checked ${checked} metadata files; fixed ${changed}; skipped ${skipped} groups without metadata.`);
if (errors) {
  console.error(`${errors} error(s). Reconcile size/style with SVG/ or run with --fix to update valid metadata.`);
  process.exitCode = 1;
}

/**
 * @param {unknown} value
 * @returns {value is {size: number[], style: string[], [key: string]: unknown}}
 */
function isMetadata(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    'size' in value &&
    Array.isArray(value.size) &&
    value.size.length > 0 &&
    value.size.every((size) => Number.isSafeInteger(size) && size > 0) &&
    new Set(value.size).size === value.size.length &&
    'style' in value &&
    Array.isArray(value.style) &&
    value.style.length > 0 &&
    value.style.every((style) => typeof style === 'string' && style.length > 0) &&
    new Set(value.style).size === value.style.length
  );
}
