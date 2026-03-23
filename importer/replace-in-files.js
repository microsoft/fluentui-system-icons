#!/usr/bin/env node
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

// Simple file content replacer (replaces the `replace` npm package).
// Provides both a CLI and a programmatic API.
//
// CLI usage: node replace-in-files.js <search> <replacement> <files...>
//   --recursive  Search directories recursively
//   --exclude=<pattern>  Exclude files matching pattern
//   --quiet  Suppress output
//   --help   Show this help message

const fs = require('node:fs');
const path = require('node:path');
const glob = require('glob');

/**
 * @param {string} target
 * @param {{recursive?: boolean}} options
 * @returns {string[]}
 */
function getFiles(target, options) {
  const stat = fs.existsSync(target) && fs.statSync(target);
  if (!stat) {
    return glob.sync(target);
  }
  if (stat.isFile()) return [target];
  if (stat.isDirectory()) {
    const pattern = options.recursive ? '**/*' : '*';
    return glob.sync(pattern, { cwd: target, absolute: true, nodir: true });
  }
  return [];
}

/**
 * Replace content in files matching the given targets.
 *
 * @param {{
 *   search: string | RegExp,
 *   replacement: string,
 *   targets: string[],
 *   recursive?: boolean,
 *   include?: string,
 *   exclude?: string,
 *   quiet?: boolean,
 * }} options
 */
function replaceInFiles(options) {
  const { search, replacement, targets, recursive = false, include, exclude, quiet = false } = options;

  let files = targets.flatMap(t => getFiles(t, { recursive }));

  if (include) {
    const includeRegex = new RegExp(include.replace(/\*/g, '.*'));
    files = files.filter(f => includeRegex.test(path.basename(f)));
  }

  if (exclude) {
    const excludeRegex = new RegExp(exclude.replace(/\*/g, '.*'));
    files = files.filter(f => !excludeRegex.test(path.basename(f)));
  }

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const updated = search instanceof RegExp
        ? content.replace(search, replacement)
        : content.split(search).join(replacement);
      if (content !== updated) {
        fs.writeFileSync(file, updated, 'utf8');
        if (!quiet) console.log(`Updated: ${file}`);
      }
    } catch {
      // Skip binary or unreadable files
    }
  }
}

module.exports = { replaceInFiles };


function main(){
const { parseArgs } = require('node:util');

  const HELP = `Usage: node replace-in-files.js [options] <search> <replacement> <files/dirs...>

Arguments:
  search       String to search for
  replacement  String to replace with
  files/dirs   One or more files, directories, or glob patterns

Options:
  --recursive        Search directories recursively
  --exclude=<pat>    Exclude files whose basename matches <pat>
  --quiet            Suppress output
  --help             Show this help message
`;

  const { values: flags, positionals: positional } = parseArgs({
    args: process.argv.slice(2),
    options: {
      recursive: { type: 'boolean', default: false },
      quiet:     { type: 'boolean', default: false },
      exclude:   { type: 'string' },
      help:      { type: 'boolean', default: false },
    },
    allowPositionals: true,
  });

  if (flags.help) {
    process.stdout.write(HELP);
    process.exit(0);
  }

  if (positional.length < 3) {
    console.error('Usage: node replace-in-files.js <search> <replacement> <files/dirs...>');
    console.error('Run with --help for more information.');
    process.exit(1);
  }

  replaceInFiles({
    search: positional[0],
    replacement: positional[1],
    targets: positional.slice(2),
    recursive: flags.recursive,
    exclude: flags.exclude,
    quiet: flags.quiet,
  });
}

// --- CLI entry point ---
if (require.main === module) {
main();
}
