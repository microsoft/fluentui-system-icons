## Plan: Svg Sprite Subsetting Plugin Enhancements

This plan keeps the current core behavior (analyzing `@fluentui/react-icons/svg-sprite/*` JS entrypoints to determine used `<symbol>` IDs) and layers on: schema-based option validation, hashed `mergedSpriteFilename`, a `sprites-manifest.json`, optional html-webpack-plugin injection (inline / preload-reference), and a more “webpack-native” merged URL mechanism (no `DefinePlugin`-driven runtime file).

**Steps**
1. **Baseline + option surface**
   - Update the options in [packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/index.ts](packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/index.ts) to add:
     - `generateSpritesManifest?: boolean`
     - `injectSpritesInTemplates?: false | { mode: 'inline' | 'reference' }` (accept `true` as `{ mode: 'inline' }` for convenience/back-compat)
     - Keep existing `mode`, `mergedSpriteFilename`, `forceEnableUsedExports`
   - Update README usage/options in [packages/react-icons-svg-sprite-subsetting-webpack-plugin/README.md](packages/react-icons-svg-sprite-subsetting-webpack-plugin/README.md).

2. **Configuration validation (webpack-standard)**
   - Add `schema-utils` as a dependency for validation in [packages/react-icons-svg-sprite-subsetting-webpack-plugin/package.json](packages/react-icons-svg-sprite-subsetting-webpack-plugin/package.json).
   - Create a JSON schema (e.g. [packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/options.schema.json](packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/options.schema.json)) and validate in the plugin constructor (or start of `apply`) via `validate(schema, options, { name: PLUGIN_NAME })`.
   - Encode invariants in schema (and mirror as runtime checks with clear error messages):
     - If `mode: 'atomic'`, `mergedSpriteFilename` is invalid.
     - If `mode: 'merged'`, `mergedSpriteFilename` allowed; restrict placeholders to `[fullhash]` and `[contenthash]` only.
     - `injectSpritesInTemplates.mode` must be `inline` or `reference`.

3. **Refactor: collect usage *by webpack entrypoint***
   - In [packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/index.ts](packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/index.ts), refactor the existing “scan `compilation.modules` for react-icons svg-sprite JS modules” into helpers that produce:
     - `entrypointName -> { spriteResourceAbsPath -> usedSymbolIds }`
   - Implementation detail (key for manifest + HTML injection):
     - Iterate `compilation.entrypoints`.
     - For each entrypoint, traverse its chunks’ modules via `compilation.chunkGraph` and filter with the existing `REACT_ICONS_SVG_SPRITE_JS_MODULE_IMPORT_PATTERN`.
     - Call `compilation.moduleGraph.getUsedExports(module, runtime)` using the entrypoint’s runtime (fallback to `undefined` if unavailable), so “used IDs” is truly entrypoint-scoped when Webpack can provide it.

4. **Move asset work onto modern webpack 5 hooks**
   - Switch from `compilation.hooks.optimizeAssets` to `compilation.hooks.processAssets` (webpack 5 best practice) in [packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/index.ts](packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/index.ts).
   - In that hook:
     - **Atomic mode**: subset emitted sprite SVG assets as today, but use `compilation.updateAsset(...)` where possible.
     - **Merged mode**: build merged sprite content from the union of used IDs across entrypoints, then emit merged asset.

5. **`mergedSpriteFilename` placeholders**
   - Implement filename resolution for merged mode supporting `[fullhash]` and `[contenthash]`:
     - Compute `contenthash` from the merged SVG text (using webpack’s hashing utilities).
     - Resolve final filename using webpack interpolation (and/or deterministic replacements) so the emitted asset name is stable and reflects those placeholders.
   - Ensure the resolved filename is the one used for:
     - `compilation.emitAsset(resolvedName, ...)`
     - manifest output
     - html-webpack-plugin preload tags (reference injection mode)

6. **Mitigate custom runtime: use a webpack RuntimeModule for merged URL**
   - Remove dependence on `DefinePlugin` + [packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/runtime/mergedSpriteUrl.ts](packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/runtime/mergedSpriteUrl.ts) for merged mode.
   - Instead:
     - Add a small `webpack.RuntimeModule` (new file, e.g. [packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/runtime/MergedSpriteRuntimeModule.ts](packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/runtime/MergedSpriteRuntimeModule.ts)) that sets a runtime global to `__webpack_require__.p + "<resolvedMergedSpriteAssetName>"`.
     - Keep the existing merged-mode request rewrite, but redirect sprite `.svg` imports to a tiny JS module (new file, e.g. `runtime/mergedSpriteUrlModule`) that simply exports the runtime global string.
   - If `injectSpritesInTemplates.mode === 'inline'`, rewrite sprite `.svg` imports to a module that exports `''` so react-icons uses `#id` and needs no URL/runtime.

7. **`generateSpritesManifest`**
   - In `processAssets`, emit `sprites-manifest.json` when enabled:
     - Atomic: `entrypoint -> { sprites: [{ spriteResourceAbsPath, assetName?: string, ids: string[] }] }`
     - Merged: `entrypoint -> { mergedSprite: { assetName: string, ids: string[] } }`
   - Include both `spriteResourceAbsPath` and resolved `assetName` (when available), per your decision.

8. **`injectSpritesInTemplates` (html-webpack-plugin)**
   - Add optional integration (no hard dependency at runtime):
     - Detect `html-webpack-plugin` presence and register its hooks only if available.
     - Map HTML files to entrypoints via HtmlWebpackPlugin `chunks` (your chosen behavior).
   - Implement two modes:
     - **Inline**: build an inline sprite SVG containing only the IDs needed by that HTML’s chunks, and inject it at the start of `<body>`. Also ensure sprite imports resolve to `''` so icons render as `#id`.
     - **Reference**: do not change sprite URL behavior; inject `<link rel="preload" as="image" type="image/svg+xml" href="...">` for the relevant atomic sprite assets (or the merged sprite asset), derived from the same chunk mapping.

9. **Tests and docs**
   - Extend [packages/react-icons-svg-sprite-subsetting-webpack-plugin/test/webpack.config.js](packages/react-icons-svg-sprite-subsetting-webpack-plugin/test/webpack.config.js) and add new fixtures to cover:
     - validation failures (atomic + mergedSpriteFilename)
     - merged filename placeholder expansion (assert emitted asset name matches expected pattern)
     - `sprites-manifest.json` emitted and has correct structure
     - html-webpack-plugin inline injection (HTML contains inline `<svg ...><symbol ...`)
     - html-webpack-plugin reference injection (HTML contains preload link(s))
   - Add `html-webpack-plugin` to `devDependencies` in [packages/react-icons-svg-sprite-subsetting-webpack-plugin/package.json](packages/react-icons-svg-sprite-subsetting-webpack-plugin/package.json) for test-only coverage; keep it optional for consumers.

**Verification**
- From repo root:
  - `nx run react-icons-svg-sprite-subsetting-webpack-plugin:build`
  - `nx run react-icons-svg-sprite-subsetting-webpack-plugin:test` (if Nx inference executes the package scripts)
- If Nx test target doesn’t execute scripts in your setup, run package tests directly:
  - `cd packages/react-icons-svg-sprite-subsetting-webpack-plugin && npm run test`

**Decisions**
- Placeholders: support `[fullhash]` + `[contenthash]` only (no `[name]`).
- HTML mapping: use HtmlWebpackPlugin `chunks` to decide what gets injected.
- Injection modes: `inline` uses empty sprite URL (`#id`); `reference` keeps external URL and only adds preload links.
- Manifest includes both `spriteResourceAbsPath` and emitted `assetName` when available.
