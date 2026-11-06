#!/usr/bin/env node
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

const fs = require('node:fs').promises;
const path = require('node:path');
const os = require('node:os');

const svgstore = require('svgstore');
const yargs = require('yargs');

/**
 * Process command-line arguments
 * @returns {{ICONS_DIR: string, SPRITES_DIR: string, NUM_WORKERS: number}}
 */
function processArgs() {
  // Parse command-line arguments
  const argv = yargs
    .option('icons', {
      alias: 'i',
      description: 'Path to icons directory',
      type: 'string',
      default: path.join(__dirname, 'icons'),
    })
    .option('output', {
      alias: 'o',
      description: 'Path to output sprites directory',
      type: 'string',
      default: path.join(__dirname, 'sprites'),
    })
    .option('workers', {
      alias: 'w',
      description: 'Number of parallel workers (0 = auto-detect CPU cores)',
      type: 'number',
      default: 0,
    })
    .help()
    .alias('help', 'h')
    .example('$0', 'Generate sprites using default directories')
    .example('$0 --icons ./custom-icons --output ./custom-sprites', 'Use custom directories')
    .example('$0 --workers 4', 'Use 4 parallel workers').argv;

  const ICONS_DIR = path.resolve(argv.icons);
  const SPRITES_DIR = path.resolve(argv.output);
  const NUM_WORKERS = argv.workers > 0 ? argv.workers : os.cpus().length;

  return { ICONS_DIR, SPRITES_DIR, NUM_WORKERS };
}

/**
 * Parses an icon filename into its semantic id + variant metadata.
 * @param {string} fileName
 * @returns {{ iconId: string, size?: string, style?: string, fileName: string }}
 */
function parseIconMeta(fileName) {
  const withoutExt = path.basename(fileName, '.svg');
  const match = withoutExt.match(/^(.*)_(\d+)_(regular|filled|light|color)$/);

  if (match) {
    return {
      iconId: match[1],
      size: match[2],
      style: match[3],
      fileName: withoutExt,
    };
  }

  return { iconId: withoutExt, fileName: withoutExt };
}

/**
 * Builds a combined sprite file containing multiple symbols.
 * @param {{ iconId: string, iconPath: string }[]} entries
 * @returns {Promise<string>}
 */
async function createCombinedSprite(entries) {
  const sprites = svgstore();

  for (const entry of entries) {
    const iconContent = await fs.readFile(entry.iconPath, 'utf-8');
    sprites.add(entry.iconId, iconContent);
  }

  return sprites.toString();
}

/**
 * Creates a sprite SVG file from a single icon SVG using svgstore
 * @param {string} iconPath - Path to the icon file
 * @param {string} iconId - ID for the icon
 * @returns {Promise<string>} The sprite SVG content
 */
async function createSprite(iconPath, iconId) {
  const iconContent = await fs.readFile(iconPath, 'utf-8');

  // Create a sprite using svgstore
  const sprites = svgstore();
  sprites.add(iconId, iconContent);

  return sprites.toString();
}

/**
 * Process a batch of icons
 * @param {string[]} files - Array of file names
 * @param {number} startIdx - Start index in the files array
 * @param {number} endIdx - End index in the files array
 * @param {string} iconsDir - Directory containing icon files
 * @param {string} spritesDir - Directory to write sprite files
 * @returns {Promise<Array<{success: boolean, file: string, error?: string}>>}
 */
async function processBatch(files, startIdx, endIdx, iconsDir, spritesDir) {
  const promises = [];

  for (let i = startIdx; i < endIdx; i++) {
    const file = files[i];
    const promise = (async () => {
      try {
        const iconPath = path.join(iconsDir, file);

        // Get icon ID (filename without .svg)
        const iconId = path.basename(file, '.svg');

        // Create sprite content using svgstore
        const spriteContent = await createSprite(iconPath, iconId);

        // Write sprite file
        const spritePath = path.join(spritesDir, `${iconId}.sprite.svg`);
        await fs.writeFile(spritePath, spriteContent, 'utf-8');

        return { success: true, file };
      } catch (error) {
        return { success: false, file, error: /** @type {Error} */ (error).message };
      }
    })();

    promises.push(promise);
  }

  return Promise.all(promises);
}

/**
 * Main function
 */
async function main() {
  const { ICONS_DIR, NUM_WORKERS, SPRITES_DIR } = processArgs();
  const startTime = Date.now();

  console.log('🚀 Starting sprite generation...');

  // Ensure sprites directory exists
  try {
    await fs.mkdir(SPRITES_DIR, { recursive: true });
  } catch (error) {
    if (/** @type {any} */ (error).code !== 'EEXIST') throw error;
  }

  // Check if icons directory exists
  try {
    await fs.access(ICONS_DIR);
  } catch (error) {
    console.error('❌ Icons directory not found. Please run the build steps first (copy, rename, unfill, optimize).');
    process.exit(1);
  }

  // Get all SVG files
  const files = await fs.readdir(ICONS_DIR);
  const svgFiles = files.filter((f) => f.endsWith('.svg'));

  if (svgFiles.length === 0) {
    console.log('⚠️  No SVG files found in icons directory.');
    process.exit(0);
  }

  console.log(`📊 Processing ${svgFiles.length} icons with ${NUM_WORKERS} workers...`);

  // Build the existing one-icon-per-file sprite set.
  const batchSize = Math.ceil(svgFiles.length / NUM_WORKERS);
  const batches = [];

  for (let i = 0; i < NUM_WORKERS; i++) {
    const startIdx = i * batchSize;
    const endIdx = Math.min(startIdx + batchSize, svgFiles.length);
    if (startIdx < svgFiles.length) {
      batches.push(processBatch(svgFiles, startIdx, endIdx, ICONS_DIR, SPRITES_DIR));
    }
  }

  const results = await Promise.all(batches);
  const allResults = results.flat();
  const successful = allResults.filter((r) => r.success).length;
  const failed = allResults.filter((r) => !r.success);

  // Also generate combined files grouped by size and style, matching the local bundle layout.
  const groupedBySizeAndStyle = new Map();

  for (const file of svgFiles) {
    const meta = parseIconMeta(file);
    if (!meta.size || !meta.style) {
      continue;
    }

    const key = `${meta.size}_${meta.style}`;
    const bucket = groupedBySizeAndStyle.get(key) ?? [];
    bucket.push({
      iconId: meta.iconId,
      iconPath: path.join(ICONS_DIR, file),
    });
    groupedBySizeAndStyle.set(key, bucket);
  }

  const combinedFiles = [];

  for (const [key, entries] of groupedBySizeAndStyle) {
    const spriteContent = await createCombinedSprite(entries);
    const outputFile = `fluent_icons_${key}.sprite.svg`;
    const outputPath = path.join(SPRITES_DIR, outputFile);
    await fs.writeFile(outputPath, spriteContent, 'utf-8');
    combinedFiles.push(outputFile);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const durationNum = parseFloat(duration);

  console.log(
    `\n✅ Generated ${successful} per-icon sprites and ${combinedFiles.length} grouped sprites in ${duration}s`,
  );
  console.log(`⚡ Performance: ${(svgFiles.length / durationNum).toFixed(0)} sprites/second`);

  if (failed.length > 0) {
    console.error(`\n❌ Failed to process ${failed.length} files:`);
    failed.forEach((f) => console.error(`  - ${f.file}: ${f.error}`));
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
