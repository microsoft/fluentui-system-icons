#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { execFile } = require('child_process');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);
const execFileAsync = promisify(execFile);

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

async function findSvgFiles(assetDir) {
  const files = [];
  const svgPath = path.join(assetDir, 'SVG');
  
  try {
    const svgStat = await stat(svgPath);
    if (svgStat.isDirectory()) {
      const svgFiles = await readdir(svgPath);
      const candidates = [];
      
      // Collect all SVG files with their extracted size and variant information
      for (const file of svgFiles) {
        if (file.endsWith('.svg')) {
          // Extract size and variant from filename (e.g., ic_fluent_access_time_24_filled.svg -> size: 24, variant: filled)
          // Only process filled and regular variants, skip light
          const sizeMatch = file.match(/_(\d+)_(filled|regular)\.svg$/);
          const size = sizeMatch ? parseInt(sizeMatch[1], 10) : 0;
          const variant = sizeMatch ? sizeMatch[2] : 'unknown';
          
          // Only add files that match filled or regular variants
          if (sizeMatch && (variant === 'filled' || variant === 'regular')) {
            candidates.push({
              originalPath: path.join(svgPath, file),
              filename: file,
              size: size,
              variant: variant
            });
          }
        }
      }
      
      if (candidates.length > 0) {
        // Group candidates by variant and find the best size for each variant
        const variants = {};
        for (const candidate of candidates) {
          if (!variants[candidate.variant]) {
            variants[candidate.variant] = [];
          }
          variants[candidate.variant].push(candidate);
        }
        
        // For each variant, find the file with size closest to 24
        const target = 24;
        for (const variant in variants) {
          const variantCandidates = variants[variant];
          let bestFile = variantCandidates[0];
          let bestDifference = Math.abs(bestFile.size - target);
          
          for (const candidate of variantCandidates) {
            const difference = Math.abs(candidate.size - target);
            if (difference < bestDifference || 
                (difference === bestDifference && candidate.size > bestFile.size)) {
              bestFile = candidate;
              bestDifference = difference;
            }
          }
          
          files.push({
            originalPath: bestFile.originalPath,
            filename: bestFile.filename,
            variant: bestFile.variant
          });
        }
      }
    }
  } catch (error) {
    // No SVG directory or not accessible
  }
  
  return files;
}

async function convertSvgToPng(svgPath, pngPath, size = 256) {
  try {
    // Try using macOS sips first (built-in on macOS)
    await execFileAsync('sips', [
      '-s', 'format', 'png',
      '-Z', size.toString(),
      svgPath,
      '--out', pngPath
    ]);
    return true;
  } catch (error) {
    try {
      // Try using rsvg-convert (librsvg)
      await execFileAsync('rsvg-convert', [
        '-w', size.toString(),
        '-h', size.toString(),
        '-o', pngPath,
        svgPath
      ]);
      return true;
    } catch (error2) {
      try {
        // Fallback to ImageMagick's convert
        await execFileAsync('convert', [
          '-background', 'transparent',
          '-size', `${size}x${size}`,
          svgPath,
          pngPath
        ]);
        return true;
      } catch (error3) {
        try {
          // Fallback to Inkscape
          await execFileAsync('inkscape', [
            '--export-png=' + pngPath,
            '--export-width=' + size,
            '--export-height=' + size,
            svgPath
          ]);
          return true;
        } catch (error4) {
          console.error(`Failed to convert SVG ${svgPath}:`, error4.message);
          return false;
        }
      }
    }
  }
}


async function convertToPng(sourceFile, outputDir, size = 256) {
  const { originalPath, filename, variant } = sourceFile;
  
  // Generate PNG filename
  let pngFilename = filename.replace(/\.svg$/, '.png');
  if (pngFilename.startsWith('ic_fluent_')) {
    pngFilename = pngFilename.substring('ic_fluent_'.length);
  }
  pngFilename = pngFilename.replace(/[^a-z0-9._-]/gi, '_').toLowerCase();
  
  const outputPath = path.join(outputDir, pngFilename);
  
  const success = await convertSvgToPng(originalPath, outputPath, size);
  
  return { success, outputPath: success ? outputPath : null, filename: pngFilename };
}

async function processAssets(options = {}) {
  const {
    outputSize = 256,
    testMode = false,
    testCount = 5
  } = options;
  
  const assetsPath = path.join(__dirname, 'assets');
  const outputDir = path.join(__dirname, 'png_icons');
  
  console.log('Creating output directory...');
  await ensureDir(outputDir);
  
  console.log('Scanning asset directories...');
  const assetDirectories = await findAssetDirectories(assetsPath);
  console.log(`Found ${assetDirectories.length} asset directories`);
  
  let processedCount = 0;
  let successCount = 0;
  let skippedCount = 0;
  
  // In test mode, only process a few directories
  const directoriesToProcess = testMode 
    ? assetDirectories.slice(0, testCount)
    : assetDirectories;
  
  console.log(`Processing ${directoriesToProcess.length} directories${testMode ? ' (test mode)' : ''}...`);
  
  for (const assetDir of directoriesToProcess) {
    const assetName = path.basename(assetDir);
    console.log(`Processing ${assetName}...`);
    
    // Find SVG files in this asset directory
    const svgFiles = await findSvgFiles(assetDir);
    
    if (svgFiles.length === 0) {
      console.log(`  No SVG files found for ${assetName}`);
      skippedCount++;
      continue;
    }
    
    // Process each SVG file
    for (const svgFile of svgFiles) {
      console.log(`  Converting ${svgFile.filename}...`);
      
      try {
        const result = await convertToPng(svgFile, outputDir, outputSize);
        
        if (result.success) {
          console.log(`    ✓ Created ${result.filename}`);
          successCount++;
        } else {
          console.log(`    ✗ Failed to convert ${svgFile.filename}`);
        }
        
        processedCount++;
        
      } catch (error) {
        console.error(`    ✗ Error processing ${svgFile.filename}:`, error.message);
        processedCount++;
      }
    }
  }
  
  console.log(`\nConversion complete!`);
  console.log(`- Processed: ${processedCount} files`);
  console.log(`- Successful: ${successCount} files`);
  console.log(`- Skipped directories: ${skippedCount}`);
  console.log(`- Output directory: ${outputDir}`);
  console.log(`- Source: SVG files`);
  console.log(`- Output size: ${outputSize}x${outputSize}px`);
}

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const options = {};
  
  // Parse command line arguments
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--size':
        options.outputSize = parseInt(args[++i], 10) || 256;
        break;
      case '--test':
        options.testMode = true;
        options.testCount = parseInt(args[++i], 10) || 5;
        break;
      case '--help':
        console.log('Usage: node convert_to_png.js [options]');
        console.log('Options:');
        console.log('  --size N     Output size in pixels (default: 256)');
        console.log('  --test N     Test mode with N directories (default: 5)');
        console.log('  --help       Show this help');
        console.log('');
        console.log('Converts SVG icons to PNG format using the same selection');
        console.log('logic as generate_dataset.js (closest to size 24).');
        process.exit(0);
    }
  }
  
  processAssets(options).catch(error => {
    console.error('Error processing assets:', error);
    process.exit(1);
  });
}

module.exports = { processAssets };
