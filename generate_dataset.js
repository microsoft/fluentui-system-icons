#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);
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

async function findPDFFiles(assetDir) {
  const pdfDir = path.join(assetDir, 'PDF');
  const files = [];
  
  try {
    const pdfStat = await stat(pdfDir);
    if (pdfStat.isDirectory()) {
      const pdfFiles = await readdir(pdfDir);
      const candidates = [];
      
      // Collect all PDF files with their extracted size information
      for (const file of pdfFiles) {
        if (file.endsWith('.pdf')) {
          // Extract size from filename (e.g., ic_fluent_access_time_24_filled.pdf -> 24)
          const sizeMatch = file.match(/_(\d+)_(?:filled|regular|light)\.pdf$/);
          const size = sizeMatch ? parseInt(sizeMatch[1], 10) : 0;
          
          candidates.push({
            originalPath: path.join(pdfDir, file),
            filename: file,
            size: size
          });
        }
      }
      
      if (candidates.length > 0) {
        // Find the file with size closest to 24
        const target = 24;
        let bestFile = candidates[0];
        let bestDifference = Math.abs(bestFile.size - target);
        
        for (const candidate of candidates) {
          const difference = Math.abs(candidate.size - target);
          if (difference < bestDifference || 
              (difference === bestDifference && candidate.size > bestFile.size)) {
            bestFile = candidate;
            bestDifference = difference;
          }
        }
        
        files.push({
          originalPath: bestFile.originalPath,
          filename: bestFile.filename
        });
      }
    }
  } catch (error) {
    // No PDF directory or not accessible
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

function generateCaptions(metadata, filename) {
  const captions = [];
  
  if (!metadata) {
    // Fallback caption if no metadata - remove ic_fluent prefix
    let baseName = filename.replace('.pdf', '');
    if (baseName.startsWith('ic_fluent_')) {
      baseName = baseName.substring('ic_fluent_'.length);
    }
    baseName = baseName.replace(/_/g, ' ');
    captions.push(baseName);
    return captions;
  }
  
  const { name, metaphor, description } = metadata;
  
  // Generate caption with description, name and metaphor
  if (name) {
    let caption = '';
    
    // Add description as first sentence if available
    if (description && description.trim() !== '') {
      caption = description.trim();
      // Ensure description ends with a period
      if (!caption.endsWith('.')) {
        caption += '.';
      }
      caption += ' ';
    }
    
    // Add name
    caption += name;
    
    // Add metaphor information if available
    if (metaphor && metaphor.length > 0) {
      const metaphorText = metaphor.join(', ');
      caption += ` (${metaphorText})`;
    }
    
    captions.push(caption);
  } else {
    // Fallback to filename if no name in metadata
    let baseName = filename.replace('.pdf', '');
    if (baseName.startsWith('ic_fluent_')) {
      baseName = baseName.substring('ic_fluent_'.length);
    }
    baseName = baseName.replace(/_/g, ' ');
    
    let caption = '';
    
    // Add description as first sentence if available
    if (description && description.trim() !== '') {
      caption = description.trim();
      // Ensure description ends with a period
      if (!caption.endsWith('.')) {
        caption += '.';
      }
      caption += ' ';
    }
    
    // Add base name
    caption += baseName;
    
    // Add metaphor if available
    if (metaphor && metaphor.length > 0) {
      const metaphorText = metaphor.join(', ');
      caption += ` (${metaphorText})`;
    }
    
    captions.push(caption);
  }
  
  return captions;
}

async function processAssets() {
  const assetsPath = path.join(__dirname, 'assets');
  const dataDir = path.join(__dirname, 'data');
  const outputFile = path.join(__dirname, 'icon_dataset.jsonl');
  
  console.log('Creating data directory...');
  await ensureDir(dataDir);
  
  console.log('Scanning asset directories...');
  const assetDirectories = await findAssetDirectories(assetsPath);
  console.log(`Found ${assetDirectories.length} asset directories`);
  
  const jsonlEntries = [];
  let processedCount = 0;
  let skippedCount = 0;
  
  for (const assetDir of assetDirectories) {
    const assetName = path.basename(assetDir);
    console.log(`Processing ${assetName}...`);
    
    // Find PDF files in this asset directory
    const pdfFiles = await findPDFFiles(assetDir);
    
    if (pdfFiles.length === 0) {
      console.log(`  No PDF files found for ${assetName}`);
      skippedCount++;
      continue;
    }
    
    // Read metadata
    const metadata = await readMetadata(assetDir);
    
    // Process each PDF file
    for (const fileInfo of pdfFiles) {
      const { originalPath, filename } = fileInfo;
      
      // Generate a safe filename for the data directory, removing ic_fluent prefix
      let safeFilename = filename;
      if (safeFilename.startsWith('ic_fluent_')) {
        safeFilename = safeFilename.substring('ic_fluent_'.length);
      }
      safeFilename = safeFilename.replace(/[^a-z0-9._-]/gi, '_').toLowerCase();
      
      const targetPath = path.join(dataDir, safeFilename);
      const relativePath = `data/${safeFilename}`;
      
      try {
        // Copy the file to data directory
        await copyFile(originalPath, targetPath);
        
        // Generate captions
        const captions = generateCaptions(metadata, filename);
        
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
  
  console.log(`\nWriting JSONL file with ${jsonlEntries.length} entries...`);
  
  // Write JSONL file
  const jsonlContent = jsonlEntries
    .map(entry => JSON.stringify(entry))
    .join('\n');
  
  await writeFile(outputFile, jsonlContent, 'utf-8');
  
  console.log(`\nDataset generation complete!`);
  console.log(`- Processed: ${processedCount} assets`);
  console.log(`- Skipped: ${skippedCount} assets`);
  console.log(`- Total JSONL entries: ${jsonlEntries.length}`);
  console.log(`- Images copied to: ${dataDir}`);
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
