#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { processAssets: convertToPng } = require('./convert_to_png.js');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);

async function ensureDir(dirPath) {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
}

async function findAssetDirectories(assetsPath) {
  const directories = [];
  const items = await readdir(assetsPath);
  
  for (const item of items) {
    const itemPath = path.join(assetsPath, item);
    const itemStat = await stat(itemPath);
    
    if (itemStat.isDirectory()) {
      // Check if this directory has a metadata.json file
      const metadataPath = path.join(itemPath, 'metadata.json');
      try {
        await stat(metadataPath);
        directories.push(itemPath);
      } catch (error) {
        // No metadata.json, skip this directory
      }
    }
  }
  
  return directories;
}

async function findPNGFiles(pngDir) {
  const files = [];
  
  try {
    const pngStat = await stat(pngDir);
    if (pngStat.isDirectory()) {
      const pngFiles = await readdir(pngDir);
      
      // Collect PNG files that match our naming pattern
      for (const file of pngFiles) {
        if (file.endsWith('.png')) {
          // Extract variant from filename (e.g., access_time_24_filled.png -> variant: filled)
          // Only process filled and regular variants
          const variantMatch = file.match(/_(filled|regular)\.png$/);
          const variant = variantMatch ? variantMatch[1] : 'unknown';
          
          if (variantMatch && (variant === 'filled' || variant === 'regular')) {
            files.push({
              originalPath: path.join(pngDir, file),
              filename: file,
              variant: variant
            });
          }
        }
      }
    }
  } catch (error) {
    // No PNG directory or not accessible
  }
  
  return files;
}

async function readMetadata(assetDir) {
  const metadataPath = path.join(assetDir, 'metadata.json');
  try {
    const content = await readFile(metadataPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Failed to read metadata for ${assetDir}:`, error.message);
    return null;
  }
}

async function loadGeneratedCaptionsMap() {
  const captionsPath = path.join(__dirname, 'GeneratedCaption.jsonl');
  const map = {};
  try {
    const raw = await readFile(captionsPath, 'utf-8');
    const lines = raw.split(/\r?\n/).filter(Boolean);
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        const customId = obj && obj.custom_id;
        let content = '';
        if (obj && obj.response && obj.response.body && Array.isArray(obj.response.body.choices) && obj.response.body.choices[0] && obj.response.body.choices[0].message) {
          content = obj.response.body.choices[0].message.content || '';
        }
        if (customId && typeof content === 'string' && content.trim().length > 0) {
          map[customId] = content.trim();
        }
      } catch (e) {
        // Skip malformed JSONL line
      }
    }
  } catch (error) {
    console.warn('No GeneratedCaption.jsonl found or failed to read. Proceeding without overrides.');
  }
  return map;
}

function generateCaptions(metadata, filename, variant, overrideContent) {
  const captions = [];
  
  // Extract base name from PNG filename
  let baseName = filename.replace('.png', '');
  // Remove size and variant suffixes (e.g., access_time_24_filled -> access_time)
  baseName = baseName.replace(/_\d+_(filled|regular)$/, '');
  baseName = baseName.replace(/_/g, ' ');
  
  // Determine icon type and state based on variant
  const iconType = variant === 'filled' ? 'filled' : 'outline';
  const state = variant === 'filled' ? 'selected' : 'unselected';
  
  // If we have an override content (from GeneratedCaption.jsonl), use it as the middle text only
  if (overrideContent && overrideContent.trim() !== '') {
    // Trim trailing period to fit ", state" postfix more naturally
    let middle = overrideContent.trim();
    middle = middle.replace(/[\s.]+$/, '');
    const caption = `FluentUISystemIcons flat 2D monochrome ${iconType} icon of ${middle}, ${state} state.`;
    captions.push(caption);
    return captions;
  }
  
  if (!metadata) {
    // Fallback caption if no metadata
    const caption = `FluentUISystemIcons flat 2D monochrome ${iconType} icon of ${baseName}, ${state} state.`;
    captions.push(caption);
    return captions;
  }
  
  const { name, metaphor, description } = metadata;
  
  // Use name from metadata if available, otherwise use baseName
  const iconName = name || baseName;
  
  // Extract visible geometry/object from the name (first part before any parentheses or special characters)
  const visibleGeometry = iconName.split(' (')[0].trim();
  
  // Create alternative synonyms from metaphor if available
  let altSynonym = '';
  if (metaphor && metaphor.length > 0) {
    const metaphorText = metaphor.join(', ');
    altSynonym = `, representing ${metaphorText}`;
  }
  
  // Generate base caption with new postfix style
  let caption = `FluentUISystemIcons flat 2D monochrome ${iconType} icon of ${visibleGeometry}${altSynonym}, ${state} state.`;
  
  // Add description as a new sentence if available
  if (description && description.trim() !== '') {
    let descriptionText = description.trim();
    // Ensure description ends with a period
    if (!descriptionText.endsWith('.')) {
      descriptionText += '.';
    }
    caption += ` ${descriptionText}`;
  }
  
  captions.push(caption);
  
  return captions;
}

async function processAssets() {
  const assetsPath = path.join(__dirname, 'assets');
  const pngDir = path.join(__dirname, 'png_icons');
  const outputFile = path.join(__dirname, 'icon_dataset.jsonl');
  const generatedCaptionsMap = await loadGeneratedCaptionsMap();
  
  // Step 1: Convert SVG assets to PNG only if PNGs are not already present
  let shouldConvertPngs = true;
  try {
    const existingFiles = await readdir(pngDir);
    const existingPngCount = existingFiles.filter(f => f.endsWith('.png')).length;
    if (existingPngCount > 0) {
      shouldConvertPngs = false;
    }
  } catch (e) {
    // Directory may not exist yet; proceed to convert
    shouldConvertPngs = true;
  }

  if (shouldConvertPngs) {
    console.log('Step 1: Converting SVG assets to PNG...');
    await convertToPng({
      outputSize: 256,
      testMode: false
    });
  } else {
    console.log('Step 1: Skipping PNG conversion (existing PNGs found).');
  }
  
  console.log('\nStep 2: Scanning asset directories for metadata...');
  const assetDirectories = await findAssetDirectories(assetsPath);
  console.log(`Found ${assetDirectories.length} asset directories`);
  
  console.log('\nStep 3: Finding converted PNG files...');
  const pngFiles = await findPNGFiles(pngDir);
  console.log(`Found ${pngFiles.length} PNG files`);
  
  // Create a map of PNG files by their base name for easy lookup
  const pngFileMap = {};
  for (const pngFile of pngFiles) {
    // Extract base name from PNG filename (e.g., access_time_24_filled.png -> access_time)
    const baseName = pngFile.filename.replace(/(_\d+_(filled|regular))\.png$/, '');
    if (!pngFileMap[baseName]) {
      pngFileMap[baseName] = {};
    }
    pngFileMap[baseName][pngFile.variant] = pngFile;
  }
  
  console.log('\nStep 4: Generating dataset entries...');
  const jsonlEntries = [];
  let processedCount = 0;
  let skippedCount = 0;
  
  for (const assetDir of assetDirectories) {
    const assetName = path.basename(assetDir);
    
    // Convert asset name to match PNG naming convention (same logic as convert_to_png.js)
    let pngBaseName = assetName.toLowerCase()
      .replace(/[^a-z0-9._-]/gi, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
    
    // Check if we have PNG files for this asset
    const assetPngFiles = pngFileMap[pngBaseName];
    if (!assetPngFiles) {
      skippedCount++;
      continue;
    }
    
    console.log(`Processing ${assetName}...`);
    
    // Read metadata
    const metadata = await readMetadata(assetDir);
    
    // Process each PNG variant for this asset
    for (const variant in assetPngFiles) {
      const pngFile = assetPngFiles[variant];
      const { filename } = pngFile;
      
      const relativePath = `png_icons/${filename}`;
      
      try {
        // Generate captions with variant information
        const overrideContent = generatedCaptionsMap[filename];
        const captions = generateCaptions(metadata, filename, variant, overrideContent);
        
        // Create JSONL entries
        for (const caption of captions) {
          jsonlEntries.push({
            image: relativePath,
            caption: caption
          });
        }
        
        processedCount++;
        
      } catch (error) {
        console.error(`Failed to process ${filename}:`, error.message);
        skippedCount++;
      }
    }
  }
  
  console.log(`\nStep 5: Writing JSONL file with ${jsonlEntries.length} entries...`);
  
  // Write JSONL file
  const jsonlContent = jsonlEntries
    .map(entry => JSON.stringify(entry))
    .join('\n');
  
  await writeFile(outputFile, jsonlContent, 'utf-8');
  
  console.log(`\nDataset generation complete!`);
  console.log(`- Processed: ${processedCount} PNG files`);
  console.log(`- Skipped: ${skippedCount} assets (no matching PNGs)`);
  console.log(`- Total JSONL entries: ${jsonlEntries.length}`);
  console.log(`- PNG images directory: ${pngDir}`);
  console.log(`- JSONL file: ${outputFile}`);
}

// Run the script
if (require.main === module) {
  processAssets().catch(error => {
    console.error('Error processing assets:', error);
    process.exit(1);
  });
}

module.exports = { processAssets };
