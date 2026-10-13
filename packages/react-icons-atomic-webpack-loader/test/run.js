#!/usr/bin/env node
// @ts-check
/**
 * Runs the atomic import loader fixture builds against webpack and/or rspack.
 *
 * Each bundler compiles the same fixture entries; the assertion plugin in `make-configs.js`
 * throws when the loader did not rewrite imports as expected.
 *
 * Usage: node test/run.js [options]
 *
 * Options:
 *   -b, --bundler   Which bundler to run: webpack | rspack | all (default: all)
 *   -h, --help      Show this message
 */
const { parseArgs } = require('node:util');

const BUNDLERS = /** @type {const} */ (['webpack', 'rspack']);

main();

async function main() {
  const options = processArgs();
  const selected = options.bundler === 'all' ? BUNDLERS : [options.bundler];

  for (const bundler of selected) {
    console.log(`\n=== Running atomic loader fixtures with ${bundler} ===\n`);
    await runBundler(/** @type {'webpack' | 'rspack'} */ (bundler));
    console.log(`\n✓ ${bundler} passed\n`);
  }
}

// ====================================

/**
 * @param {'webpack' | 'rspack'} bundler
 * @returns {Promise<void>}
 */
function runBundler(bundler) {
  const compilerFactory = bundler === 'webpack' ? require('webpack') : require('@rspack/core').rspack;
  const configs = require(`./${bundler}.config.js`);

  return new Promise((resolvePromise, rejectPromise) => {
    compilerFactory(configs, (err, stats) => {
      if (err) {
        rejectPromise(err);
        return;
      }

      if (stats.hasErrors()) {
        console.error(stats.toString({ colors: true, preset: 'errors-only' }));
        rejectPromise(new Error(`${bundler} build failed`));
        return;
      }

      resolvePromise();
    });
  });
}

function processArgs() {
  try {
    const { values } = parseArgs({
      options: {
        bundler: { type: 'string', short: 'b', default: 'all' },
        help: { type: 'boolean', short: 'h' },
      },
    });

    if (values.help) {
      printUsage();
      process.exit(0);
    }

    if (!['all', ...BUNDLERS].includes(/** @type {string} */ (values.bundler))) {
      throw new Error(`invalid --bundler "${values.bundler}", expected one of: all, ${BUNDLERS.join(', ')}`);
    }

    return { bundler: /** @type {'all' | 'webpack' | 'rspack'} */ (values.bundler) };
  } catch (err) {
    console.error(`Error parsing arguments: ${/** @type {Error} */ (err).message}`);
    printUsage();
    process.exit(1);
  }
}

function printUsage() {
  console.error(`
Usage: node test/run.js [options]

Options:
  -b, --bundler   Which bundler to run: webpack | rspack | all (default: all)
  -h, --help      Show this message
`);
}
