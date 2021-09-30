// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// The 'replace' module doesn't work on Windows command line.
const r = require("replace");
const argv = require("yargs").argv;

const path = argv.path;

r({
    regex: /\sfill="none"/g,
    replacement: '',
    paths: [path],
    recursive: true,
    include: '*.svg',
    silent: true
});

r({
    regex: /\sfill="#212121"/g,
    replacement: ' fill="currentColor"',
    paths: [path],
    recursive: true,
    include: '*.svg',
    silent: true
});
