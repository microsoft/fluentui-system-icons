// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('node:fs/promises');
const path = require('node:path');
const yargs = require('yargs');

const argv = yargs
  .option('svgMetadata', {
    alias: 's',
    type: 'string',
    description: 'Path to SVG metadata JSON file',
    default: './metadata-svg.json',
  })
  .option('fontMetadata', {
    alias: 'f',
    type: 'string',
    description: 'Path to font metadata JSON file',
    default: './metadata-font.json',
  })
  .option('output', {
    alias: 'o',
    type: 'string',
    description: 'Path to output combined metadata JSON file',
    default: './metadata.json',
  })
  .help().argv;

/**
 * Merge SVG and font metadata files into a single metadata file
 */
async function mergeMetadata() {
  const svgMetadataPath = path.resolve(argv.svgMetadata);
  const fontMetadataPath = path.resolve(argv.fontMetadata);
  const outputPath = path.resolve(argv.output);

  /** @type {import('./convert.utils').IconMetadataCollection} */
  let svgMetadata = {};
  /** @type {import('./convert.utils').IconMetadataCollection} */
  let fontMetadata = {};

  // Read SVG metadata if it exists
  try {
    const svgData = await fs.readFile(svgMetadataPath, 'utf8');
    svgMetadata = JSON.parse(svgData);
    console.log(`✓ Read SVG metadata from ${svgMetadataPath} (${Object.keys(svgMetadata).length} icons)`);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn(`Warning: Could not read SVG metadata from ${svgMetadataPath}:`, error.message);
    }
  }

  // Read font metadata if it exists
  try {
    const fontData = await fs.readFile(fontMetadataPath, 'utf8');
    fontMetadata = JSON.parse(fontData);
    console.log(`✓ Read font metadata from ${fontMetadataPath} (${Object.keys(fontMetadata).length} icons)`);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.warn(`Warning: Could not read font metadata from ${fontMetadataPath}:`, error.message);
    }
  }

  // Merge metadata: combine SVG and font data
  const mergedMetadata = structuredClone(svgMetadata);

  // Add font data to existing icons or create new entries
  for (const [iconName, iconData] of Object.entries(fontMetadata)) {
    if (mergedMetadata[iconName]) {
      // Icon exists in SVG metadata, merge font data
      mergedMetadata[iconName] = {
        svg: mergedMetadata[iconName].svg || false,
        font: iconData.font || false,
        type: mergedMetadata[iconName].type, // Keep the type from SVG metadata
      };
    } else {
      // Icon only exists in font metadata
      mergedMetadata[iconName] = {
        svg: false,
        font: iconData.font || false,
        type: iconData.type,
      };
    }
  }

  // Write merged metadata
  await fs.writeFile(outputPath, JSON.stringify(mergedMetadata, null, 2) + '\n', 'utf-8');
  console.log(`✓ Merged metadata written to ${outputPath} (${Object.keys(mergedMetadata).length} icons total)`);

  // Print summary
  const svgOnlyCount = Object.values(mergedMetadata).filter((icon) => icon.svg && !icon.font).length;
  const fontOnlyCount = Object.values(mergedMetadata).filter((icon) => icon.font && !icon.svg).length;
  const bothCount = Object.values(mergedMetadata).filter((icon) => icon.svg && icon.font).length;

  console.log(`\nSummary:`);
  console.log(`  SVG only: ${svgOnlyCount} icons`);
  console.log(`  Font only: ${fontOnlyCount} icons`);
  console.log(`  Both SVG & Font: ${bothCount} icons`);
  console.log(`  Total: ${Object.keys(mergedMetadata).length} icons`);
}

// Run the merge
mergeMetadata().catch((error) => {
  console.error('Error merging metadata:', error);
  process.exit(1);
});
