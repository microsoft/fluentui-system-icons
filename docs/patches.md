# Patches

Third-party dependency patches live in `.yarn/patches/` and are applied by Yarn's
[`patch:` protocol](https://yarnpkg.com/protocol/patch) during `yarn install`. The
patched dependency's version range in `package.json` is rewritten to point at the
patchfile, so patching is part of resolution rather than a `postinstall` side effect.

## fantasticon-npm-4.1.0-3af043d076.patch

**Issue**: fantasticon uses `String.fromCharCode()` which doesn't support Unicode
codepoints above `0xFFFF` (outside the Basic Multilingual Plane).

**Solution**: Replace `String.fromCharCode()` with `String.fromCodePoint()` to
properly support all Unicode characters.

**Related PR**: https://github.com/tancredi/fantasticon/pull/507

**Status**: Waiting for upstream merge and release. This patch can be removed once
fantasticon publishes a version with this fix.

## Creating a patch

```sh
yarn patch <package-name>
# edit the files in the printed temporary folder
yarn patch-commit -s <printed-folder>
```

`yarn patch-commit` writes the patchfile to `.yarn/patches/` and rewires
`package.json` automatically. Commit both.

## Updating a patch

Re-run `yarn patch <package-name>`; Yarn seeds the temporary folder with the
already-patched sources, so you only need to apply your incremental change before
running `yarn patch-commit -s <folder>`.

## Removing a patch

Restore the plain semver range in `package.json` (e.g. `"fantasticon": "^4.1.0"`),
delete the patchfile from `.yarn/patches/`, and run `yarn install`.
