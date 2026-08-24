// https://commitlint.js.org
// Shared by the local Husky `commit-msg` hook and the CI PR-title check.
'use strict';

/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  // Scopes are optional and free-form (see CONTRIBUTING.md for suggested scopes).
};

module.exports = config;
