const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

const packageRoot = path.resolve(__dirname, '..');

/**
 * Runs the build process:
 * 1. Compiles TypeScript from the package root.
 * 2. Copies assets based on provided glob patterns.
 */
function main() {
  try {
    // 1. run tsc -p . from project root
    console.log('Running tsc...');
    execSync('tsc -p . --pretty', { cwd: packageRoot, stdio: 'inherit' });

    // 2. copy assets from provided path glob to provided output glob
    const srcPattern = 'src/**/*.{,json}';
    const destDir = 'lib';

    console.log(`Copying assets from ${srcPattern} to ${destDir}...`);

    const files = glob.sync(srcPattern, { cwd: packageRoot });
    console.log(`Found ${files.length} asset(s) to copy.`);

    files.forEach((file) => {
      const srcPath = path.resolve(packageRoot, file);
      // Maintain directory structure relative to 'src'
      const relativePath = path.relative('src', file);
      const destPath = path.resolve(packageRoot, destDir, relativePath);

      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    });

    console.log('Build completed successfully.');
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

main();