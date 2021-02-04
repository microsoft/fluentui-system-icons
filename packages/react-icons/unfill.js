// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// The 'replace' module doesn't work on Windows command line.
const r = require("replace");

r({
    regex: /( fill=\"none\")/g,
    replacement: '',
    paths: ['./components'],
    recursive: true,
    include: '*.js',
    silent: true
});

r({
    regex: /( fill=\"#212121\")/g,
    replacement: ' class=\"primary\"',
    paths: ['./components'],
    recursive: true,
    include: '*.js',
    silent: true
});
