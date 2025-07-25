// @ts-check

const {readFile, writeFile, readdir, stat} = require('node:fs/promises');
const path = require('node:path');

const yargs = require('yargs');

/**
 * @typedef {Object} SvgFilesResult
 * @property {string[]} allSvgFiles - All SVG files found
 * @property {string[]} processableSvgFiles - SVG files that can be processed (excluding color variants)
 * @property {number} totalCount - Total number of SVG files
 * @property {number} processableCount - Number of processable SVG files
 * @property {number} colorVariantCount - Number of color variant files excluded
 */


// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  });
}

/**
 * Main function to process SVG files
 * @returns {Promise<void>}
 */
async function main() {
  const argv = yargs
    .option('source', {
      alias: 's',
      description: 'Source directory containing SVG files',
      type: 'string',
      demandOption: true
    })
    .option('dry-run', {
      description: 'Show what would be modified without writing changes to disk',
      type: 'boolean',
      default: false
    })
    .help()
    .alias('help', 'h')
    .example('$0 --source ./intermediate', 'Process SVG files in place')
    .example('$0 --source ./intermediate --dry-run', 'Preview what would be modified without making changes')
    .argv;

  const startTime = Date.now();
  const sourceDir = path.resolve(argv.source);
  const dryRun = argv['dry-run'];

  console.log(`🚀 Starting ${dryRun ? 'dry-run ' : ''}unfill process...`);
  console.log(`📁 Source directory: ${sourceDir}`);
  console.log('📁 Processing files in place');

  if (dryRun) {
    console.log('🔍 DRY RUN MODE: No files will be modified');
  }

  try {
    // Check if source directory exists
    await stat(sourceDir);
  } catch (error) {
    console.error(`❌ Source directory not found: ${sourceDir}`);
    process.exit(1);
  }

  try {
    console.log('🔍 Finding SVG files...');
    const svgResults = await findSvgFiles(sourceDir);

    console.log(`📊 Found ${svgResults.totalCount} total SVG files`);
    console.log(`📊 Found ${svgResults.processableCount} processable SVG files (excluding ${svgResults.colorVariantCount} color variants)`);

    if (svgResults.processableCount === 0) {
      console.log('ℹ️  No processable SVG files found.');
      return;
    }

    console.log('⚡ Processing files...');

    await processFilesInBatches(svgResults.processableSvgFiles, dryRun);

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    const action = dryRun ? 'analysis' : 'unfill';
    console.log(`✅ ${action.charAt(0).toUpperCase() + action.slice(1)} completed in ${duration}s`);

  } catch (error) {
    console.error('❌ Error during unfill process:', error.message);
    process.exit(1);
  }
}

/**
 * Recursively find all SVG files in a directory, with filtering stats
 * @param {string} dir - Directory to search in
 * @returns {Promise<SvgFilesResult>} Object containing file arrays and counts
 */
async function findSvgFiles(dir) {
  /** @type {string[]} */
  const allSvgFiles = [];
  /** @type {string[]} */
  const processableSvgFiles = [];

  /**
   * @param {string} currentDir
   * @returns {Promise<void>}
   */
  async function traverse(currentDir) {
    try {
      const entries = await readdir(currentDir);

      await Promise.all(entries.map(async (entry) => {
        const fullPath = path.join(currentDir, entry);
        const stats = await stat(fullPath);

        if (stats.isDirectory()) {
          await traverse(fullPath);
        } else if (entry.endsWith('.svg')) {
          allSvgFiles.push(fullPath);
          // Only process non-color variants
          if (!entry.includes('_color')) {
            processableSvgFiles.push(fullPath);
          }
        }
      }));
    } catch (error) {
      // Skip directories that can't be read
      console.warn(`Warning: Could not read directory ${currentDir}:`, error.message);
    }
  }

  await traverse(dir);

  return {
    allSvgFiles,
    processableSvgFiles,
    totalCount: allSvgFiles.length,
    processableCount: processableSvgFiles.length,
    colorVariantCount: allSvgFiles.length - processableSvgFiles.length
  };
}

/**
 * Remove fill="none" attributes from SVG content
 * @param {string} content - SVG file content
 * @returns {string} Content with fill="none" attributes removed
 */
function removeFillNone(content) {
  return content.replace(/fill="none"/g, '');
}

/**
 * Process multiple files in parallel batches for optimal performance
 * @param {string[]} files - Array of file paths to process
 * @param {boolean} dryRun - Whether to perform a dry run (no file writes)
 * @param {number} batchSize - Number of files to process in parallel
 * @returns {Promise<void>}
 */
async function processFilesInBatches(files, dryRun = false, batchSize = 50) {
  let processedCount = 0;
  let modifiedCount = 0;

  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);

    await Promise.all(batch.map(async (filePath) => {
      try {
        const originalContent = await readFile(filePath, 'utf8');
        const modifiedContent = removeFillNone(originalContent);

        // Check if content would change
        const wouldModify = originalContent !== modifiedContent;

        if (wouldModify) {
          if (!dryRun) {
            await writeFile(filePath, modifiedContent, 'utf8');
          }
          modifiedCount++;
        }

        processedCount++;

        // Progress indicator
        if (processedCount % 100 === 0 || processedCount === files.length) {
          const action = dryRun ? 'analyzed' : 'processed';
          const wouldText = dryRun ? ' (would be modified)' : ' modified';
          process.stdout.write(`\r${action.charAt(0).toUpperCase() + action.slice(1)} ${processedCount}/${files.length} files (${modifiedCount}${wouldText})`);
        }
      } catch (error) {
        console.error(`\nError processing ${filePath}:`, error.message);
      }
    }));
  }

  const action = dryRun ? 'Analyzed' : 'Processed';
  const wouldText = dryRun ? ' would be modified' : ' modified';
  console.log(`\n${action}! ${action} ${processedCount} files, ${modifiedCount}${wouldText}.`);
}


