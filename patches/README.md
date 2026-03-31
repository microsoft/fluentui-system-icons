# Patches

This directory contains patches for third-party dependencies that are automatically applied via `patch-package` during `npm install`.

## fantasticon+4.1.0.patch

**Issue**: fantasticon uses `String.fromCharCode()` which doesn't support Unicode codepoints above 0xFFFF (outside the Basic Multilingual Plane).

**Solution**: Replace `String.fromCharCode()` with `String.fromCodePoint()` to properly support all Unicode characters.

**Related PR**: https://github.com/tancredi/fantasticon/pull/507

**Status**: Waiting for upstream merge and release. This patch can be removed once fantasticon publishes a version with this fix.

## @fluentui+react-storybook-addon-export-to-sandbox+0.2.0.patch

**Issue**: The addon's `preset.js` uses `require('./lib/preset/preset')`, but the `lib/` directory contains ESM output (bare `import` statements without file extensions). On Node.js v22+, `require()` of ESM triggers strict ESM resolution rules that require explicit `.js` extensions, causing `ERR_MODULE_NOT_FOUND` when Storybook loads the preset.

Additionally, the addon references a `@fluentui/babel-preset-storybook-full-source/__dev` path that doesn't exist in the published package.

**Solution**:

- Point `preset.js` at `./lib-commonjs/preset/preset` (proper CJS output) instead of `./lib/preset/preset` (ESM output). The `previewAnnotations` path stays on `./lib/` since it's just a file path handed to the browser bundler.
- Remove the `__dev` suffix from the babel preset import in `lib-commonjs/webpack.js`.

**Status**: Waiting for upstream fix. This patch can be removed once `@fluentui/react-storybook-addon-export-to-sandbox` publishes a version that correctly wires its CJS preset entry.

## How patches are applied

Patches are automatically applied after `npm install` via the `postinstall` script defined in the root `package.json`:

```json
{
  "scripts": {
    "postinstall": "patch-package"
  }
}
```

## Creating/Updating patches

To create or update a patch:

1. Make changes to files in `node_modules/<package-name>/`
2. Run `npx patch-package <package-name>`
3. Commit the resulting patch file in the `patches/` directory

For more information, see: https://github.com/ds300/patch-package
