# Patches

This directory contains patches for third-party dependencies that are automatically applied via `patch-package` during `npm install`.

## fantasticon+1.2.3.patch

**Issue**: fantasticon uses `String.fromCharCode()` which doesn't support Unicode codepoints above 0xFFFF (outside the Basic Multilingual Plane).

**Solution**: Replace `String.fromCharCode()` with `String.fromCodePoint()` to properly support all Unicode characters.

**Related PR**: https://github.com/tancredi/fantasticon/pull/507

**Status**: Waiting for upstream merge and release. This patch can be removed once fantasticon publishes a version with this fix.

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
