#!/usr/bin/env node
/**
 * Build a single SVG sprite from all react-icons
 */

const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '..', 'packages', 'react-icons', 'lib', 'icons');
const OUTPUT_DIR = path.join(__dirname, '..', 'packages', 'react-icons', 'lib', 'svg');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'all.svg');

// Parse a JS file to extract icon information
function parseIconFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const icons = [];

  // Match export statements like: export const IconName = createFluentIcon('IconName', size, [paths...])
  const regex = /export\s+const\s+(\w+)\s*=\s*\(\s*\/\*#__PURE__\*\/\s*createFluentIcon\('([^']+)',\s*"([^"]+)",\s*\[([^\]]+)\]\)/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const [, exportName, iconId, size, pathsStr] = match;

    // Parse path strings - they're quoted and comma-separated
    const paths = pathsStr.match(/"([^"]*)"/g)?.map(p => p.slice(1, -1)) || [];

    icons.push({
      name: exportName,
      id: iconId,
      size: size,
      paths: paths
    });
  }

  return icons;
}

// Get all .js files from the icons directory
function getAllIconFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.filter(f => f.endsWith('.js') && !f.endsWith('.d.ts'));
}

// Build the SVG sprite
function buildSprite() {
  console.log('Building SVG sprite from icons...');

  const iconFiles = getAllIconFiles(ICONS_DIR);
  console.log(`Found ${iconFiles.length} icon chunk files`);

  const allIcons = [];

  for (const file of iconFiles) {
    const filePath = path.join(ICONS_DIR, file);
    const icons = parseIconFile(filePath);
    allIcons.push(...icons);
  }

  console.log(`Parsed ${allIcons.length} icons`);

  // Create SVG sprite with symbols
  const symbols = allIcons.map(icon => {
    const pathElements = icon.paths.map(pathData =>
      `    <path d="${pathData}"/>`
    ).join('\n');

    // Determine viewBox based on size
    let viewBox = '0 0 20 20'; // default
    if (icon.size === '16') viewBox = '0 0 16 16';
    else if (icon.size === '24') viewBox = '0 0 24 24';
    else if (icon.size === '28') viewBox = '0 0 28 28';
    else if (icon.size === '32') viewBox = '0 0 32 32';
    else if (icon.size === '48') viewBox = '0 0 48 48';

    return `  <symbol id="${icon.id}" viewBox="${viewBox}">
${pathElements}
  </symbol>`;
  }).join('\n');

  const sprite = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
${symbols}
</svg>`;

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Write the sprite file
  fs.writeFileSync(OUTPUT_FILE, sprite, 'utf8');

  console.log(`✅ SVG sprite created: ${OUTPUT_FILE}`);
  console.log(`   Total symbols: ${allIcons.length}`);

  // Print size info
  const stats = fs.statSync(OUTPUT_FILE);
  const sizeInMB = (stats.size / 1024 / 1024).toFixed(2);
  console.log(`   File size: ${sizeInMB} MB`);

  // Show sample usage
  console.log(`\nUsage example:`);
  console.log(`  <svg><use href="/lib/svg/all.svg#${allIcons[0].id}" /></svg>`);
}

// Run the script
try {
  buildSprite();
} catch (error) {
  console.error('Error building sprite:', error);
  process.exit(1);
}
