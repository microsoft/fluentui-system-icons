#!/usr/bin/env node
// @ts-check
'use strict';

/**
 * Strip a filename prefix from every file within a directory tree.
 *
 * Replacement for `renamer --find <prefix> ...`, which logs one line per file
 * (20k+ lines for the icon packages) and floods CI logs. This script is silent
 * by default and prints a single summary line, while still failing the build
 * (non-zero exit code) on real errors.
 *
 * Usage:
 *   node ../../importer/rename-strip-prefix.js --dir ./icons --prefix ic_fluent_
 *
 * Options:
 *   --dir <path>        Directory to scan (required).
 *   --prefix <string>   Filename prefix to strip (required).
 *   --flat              Only rename files directly inside --dir (default: recursive).
 *   --verbose           Print every rename instead of just a summary.
 */

const fs = require('fs');
const path = require('path');
const { parseArgs } = require('node:util');

const USAGE = `Usage: rename-strip-prefix.js --dir <path> --prefix <string> [options]

Strip a filename prefix from every file within a directory tree.

Options:
  --dir <path>      Directory to scan (required).
  --prefix <string> Filename prefix to strip (required).
  --flat            Only rename files directly inside --dir (default: recursive).
  --verbose         Print every rename instead of just a summary.
  -h, --help        Print this help and exit.`;

function getOptions() {
  const { values } = parseArgs({
    options: {
      dir: { type: 'string' },
      prefix: { type: 'string' },
      flat: { type: 'boolean', default: false },
      verbose: { type: 'boolean', default: false },
      help: { type: 'boolean', short: 'h', default: false },
    },
  });

  if (values.help) {
    console.log(USAGE);
    process.exit(0);
  }

  if (!values.dir) throw new Error('Missing required option: --dir');
  if (!values.prefix) throw new Error('Missing required option: --prefix');

  return {
    dir: values.dir,
    prefix: values.prefix,
    recursive: !values.flat,
    verbose: values.verbose,
  };
}

/**
 * @param {string} dir
 * @param {boolean} recursive
 * @returns {string[]} absolute file paths
 */
function collectFiles(dir, recursive) {
  /** @type {string[]} */
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (recursive) files.push(...collectFiles(fullPath, recursive));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

function main() {
  const options = getOptions();

  if (!fs.existsSync(options.dir)) {
    throw new Error(`Directory does not exist: ${options.dir}`);
  }

  const files = collectFiles(options.dir, options.recursive);

  let renamed = 0;
  for (const filePath of files) {
    const dir = path.dirname(filePath);
    const base = path.basename(filePath);
    if (!base.startsWith(options.prefix)) continue;

    const target = path.join(dir, base.slice(options.prefix.length));
    if (fs.existsSync(target)) {
      throw new Error(`Target already exists, refusing to overwrite: ${target}`);
    }

    fs.renameSync(filePath, target);
    renamed++;
    if (options.verbose) console.log(`${base} \u2192 ${path.basename(target)}`);
  }

  console.log(`rename-strip-prefix: stripped "${options.prefix}" from ${renamed} file(s) in ${options.dir}`);
}

try {
  main();
} catch (err) {
  console.error(`rename-strip-prefix: ${err instanceof Error ? err.message : err}`);
  process.exitCode = 1;
}
