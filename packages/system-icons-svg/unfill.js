// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// The 'replace' module doesn't work on Windows command line.
const r = require("replace");

r({
    regex: /( fill=\"none\"| fill=\"#212121\")/,
    replacement: '',
    paths: ['./dist/'],
    recursive: true,
    include: '*.svg',
    silent: true
});
