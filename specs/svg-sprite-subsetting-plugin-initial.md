## Plan: Enhanced SVG Sprite Subsetting Plugin

Extend the existing `@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin` while keeping its core purpose (optimize `@fluentui/react-icons/svg-sprite/*` generated sprites). Add `svg-chunk-webpack-plugin`-like features (minus loader) and make “chunking” support work reliably by producing **one merged sprite per HTML entrypoint** (multi-page style), with optional HTML injection and a manifest.

**Steps**
1. Add new options + break existing api if needed in `packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/index.ts`
   - Add options:
     - `filename?: string` (template supporting `[name]`, `[id]`, `[contenthash]`, `[fullhash]`) for **merged output sprites**.
     - `generateSpritesManifest?: boolean`
     - `injectSpritesInTemplates?: false | { mode: 'inline' | 'reference' }` (per your requirement: configurable inline vs reference)
     - `entrypointMode?: 'single' | 'per-entrypoint'` (default `single` to preserve current behavior; `per-entrypoint` enables “like svg-chunk” behavior).
   - remove current `mergedSpriteFilename`, don't keep it as  legacy:
     - If `filename` is set, it wins.
     - Else if `entrypointMode: 'single'`, keep current default `fluentui-react-icons.svg`.
     - Else (`per-entrypoint`), default to something deterministic like `fluentui-react-icons.[name].svg` to avoid collisions.

2. Switch to modern asset hook and safer asset updates in `packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/index.ts`
   - Move from `compilation.hooks.optimizeAssets` to `compilation.hooks.processAssets` (webpack 5 best practice).
   - Replace direct `compilation.assets[name] = ...` with `compilation.updateAsset(...)` where possible.

3. Compute “used symbol IDs” per entrypoint (foundation for manifest + merged-per-entrypoint)
   - While scanning sprite JS modules (the current `isFluentUIReactSvgSpriteEntrypointModule` path):
     - Use `compilation.chunkGraph.getModuleRuntimes(module)` to determine which entrypoint runtimes include each sprite module.
     - For each runtime, call `compilation.moduleGraph.getUsedExports(module, runtimeSpec)` and map to symbol IDs (reusing existing `getExportNameToSymbolIdMap` and `getUsedSymbolIds`).
   - Store an in-memory structure like:
     - `entrypointRuntimeName -> spriteResourceAbsPath -> Set<symbolId>`

4. Implement merged sprites “per entrypoint” + `filename` templating
   - For each entrypoint runtime:
     - Build a merged SVG (reuse `buildMergedSprite`, but pass only the spriteResource→ids relevant for that entrypoint).
     - Compute `contenthash` from the merged SVG content (use webpack hash util when available, fallback to Node `crypto`).
     - Resolve final asset name using `filename` template:
       - `[name]` = entrypoint name/runtime name
       - `[id]` = entrypoint’s runtime chunk id (or entrypoint chunk id)
       - `[fullhash]` = `compilation.fullHash`
       - `[contenthash]` = computed for this merged SVG
     - `compilation.emitAsset(resolvedName, RawSource(svg))`
   - Keep atomic mode behavior the same (subset emitted sprite assets), but ensure used-IDs collection accounts for multi-entry (union if an atomic sprite is used by multiple entrypoints, since the asset can’t vary per entrypoint).

5. Replace merged-mode “static filename via DefinePlugin” with a runtime/global-based sprite URL module
   - Update/replace `packages/react-icons-svg-sprite-subsetting-webpack-plugin/src/runtime/mergedSpriteUrl.ts` with a module that exports a sprite prefix from a global:
     - Export string from `globalThis.__FLUENTUI_REACT_ICONS_SVG_SPRITE_URL__ ?? ''`
   - In merged mode rewrite `.svg` imports inside `atoms/svg-sprite/*` modules to this runtime module (same technique you already use via `beforeResolve`).
   - Why: shared chunks can be used by multiple HTML entrypoints; the “which sprite file to use” must be decided by the HTML page, not baked into shared JS.

6. Implement `injectSpritesInTemplates` (html-webpack-plugin integration)
   - In `compiler.hooks.compilation`, attempt to load html-webpack-plugin and, if present, hook `HtmlWebpackPlugin.getHooks(compilation)` for each HTML asset.
   - For each HTML instance, determine the corresponding entrypoint chunk name (via html-webpack-plugin hooks metadata / `chunks` option / compilation entrypoints).
   - If `mode: 'inline'`:
     - Inject the merged `<svg>…</svg>` markup for that entrypoint into `<body>` start (like svg-chunk behavior).
     - Inject `<script>` setting `globalThis.__FLUENTUI_REACT_ICONS_SVG_SPRITE_URL__ = ''` (so icon href becomes `#id`).
   - If `mode: 'reference'`:
     - Inject `<script>` setting `globalThis.__FLUENTUI_REACT_ICONS_SVG_SPRITE_URL__ = '<publicPath><spriteAssetName>'`
     - (Optionally also inject `<link rel="preload" as="image" type="image/svg+xml" href="...">` only if you want it; if not explicitly requested, skip.)

7. Implement `generateSpritesManifest`
   - Emit `sprites-manifest.json` via `compilation.emitAsset(...)`.
   - Use the schema you requested: entrypoint -> sprite asset -> symbol IDs, e.g.
     - `{ "<entrypoint>": { "<spriteAssetName>": ["SymbolId", ...] } }`
   - Include both modes:
     - Atomic: entrypoint -> atomic sprite assets used (by resolving spriteResourceAbsPath -> emitted asset name when available) -> IDs
     - Merged: entrypoint -> merged sprite asset name -> IDs (the ones merged for that entrypoint)

8. Update docs + tests
   - Update `packages/react-icons-svg-sprite-subsetting-webpack-plugin/README.md` with the new options and behavior notes (especially: per-entrypoint merged requires html injection or a user-provided global).
   - Extend the existing webpack fixture in `packages/react-icons-svg-sprite-subsetting-webpack-plugin/test/webpack.config.js`
     - Add a multi-entry build + html-webpack-plugin case
     - Assert:
       - multiple merged sprites emitted with templated names
       - HTML injection content (inline or reference) appears
       - `sprites-manifest.json` matches expected structure

**Verification**
- Build the package: `nx run react-icons-svg-sprite-subsetting-webpack-plugin:build` (or the workspace’s equivalent target if named differently).
- Run existing webpack fixture build (whatever command is currently used for the `test/webpack.config.js` run) and verify emitted assets:
  - merged: per-entrypoint sprite output names and correct subset of `<symbol id="...">`
  - manifest: `sprites-manifest.json` present and correct
  - html: injected markup/script present when enabled

**Decisions**
- Implement “chunking support” as **per HTML entrypoint** (like `svg-chunk-webpack-plugin`), not per dynamic `import()` async chunk group, because webpack’s `usedExports` data is runtime-wide and shared chunks can’t safely bake in different sprite URLs.
