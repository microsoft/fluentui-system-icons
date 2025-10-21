# AI Assistant Project Guide: Fluent UI System Icons

Purpose: Enable rapid, correct contributions across multi-platform icon packages (web React, React Native, SVG assets/sprites, Android, iOS, Flutter) generated from a single `assets/` source.

## Core Architecture
- Targeted package instructions: see `./react-icons.instructions.md` (auto-applies when working inside `packages/react-icons`).
- Source of truth: Raw SVG design assets in `assets/` (folder names = icon groups). Each icon has metadata (directionality handled via RTL processing scripts) and fixed primary fill `#212121` (validation enforced in CI).
- Generated outputs per platform:
  - React web: `@fluentui/react-icons` → JSX components + optional font implementation. Build pipeline: asset -> optimized SVG (`intermediate/`) -> component TS in `src/` -> compiled output in `lib/` (ESM) & `lib-cjs/` (CJS) + `fonts/` bundle + merged `metadata.json`.
  - React Native: Similar SVG -> `intermediate/` -> RN components in `src/`; styling more limited (no Griffel styling utilities).
  - Plain SVG package: `@fluentui/svg-icons` emits optimized renamed raw SVGs in `packages/svg-icons/icons/` following `[name]_[size]_[style].svg`.
  - Sprites: `@fluentui/svg-sprites` converts single SVGs to per-icon sprite files: `<icon>.sprite.svg` for on-demand `<use href="/sprites/{id}.sprite.svg#id" />` consumption.
  - Fonts: Generated via `importer/generateFont.js` (Regular/Filled/Light/Resizable) feeding React font condition and Flutter/iOS/Android.
  - Native (Android/iOS/Flutter): Produced by `importer` deployment scripts (`deploy:android`, `deploy:ios`, `deploy:flutter`) which transform assets into vector drawables / PDF assets / Dart classes.

## Key Workflows (Local)
- Install deps (root + packages): `npm ci` at repo root (Yarn/PNPM NOT configured; uses npm workspaces).
- React icons build (full): `cd packages/react-icons && npm run build` (runs font + svg generation + JS emission). Quick validation only: `npm run build:verify` (Vitest metadata checks).
- React Native icons build: `cd packages/react-native-icons && npm run build`.
- SVG raw assets: `cd packages/svg-icons && npm run build`.
- Sprites: `cd packages/svg-sprites && npm run build`.
- Importer operations (multi-platform generation & version bumps): `cd importer && npm run deploy:android|deploy:ios|deploy:fonts`.
- Clean React icons intermediates: `npm run clean` in each package (removes generated `lib*` and `intermediate/`). Avoid manual deletion to keep scripts deterministic.

## CI Expectations / Pitfalls
- PR validation (`.github/workflows/pr.yml`) enforces: (1) asset folder names not ending with space; (2) all non-color SVGs include `fill="#212121"` (except `*_color.svg` which are skipped). Maintain fill when editing SVGs; use scripts (`optimize`, `unfill`) instead of hand-edits.
- React build job runs `lint`, full `build`, and `build:verify`; keep TypeScript version constraints (TS ~4.1) when adding language features.
- iOS/Android build jobs rely on importer output; ensure importer scripts still produce expected file layout when modifying generation logic.

## Conventions & Patterns
- Icon naming (React / RN): `AccessTimeFilled` (state suffix) and sized variants `AccessTime24Filled`. General (resizable) variant without size preferred for flexible UI.
- Plain SVG file naming: lowercase + underscores from original asset folder; pattern: `mail_24_filled.svg`.
- Sprite consumption id pattern: `{name}_{size}_{style}` (mirrors SVG file stem) reused inside `#symbol` id.
- Directionality: `rtlMetadata.js` generates `intermediate/rtl.json`; keep this in sync when adding new directional icons. Metadata merging occurs via `convert:merge-metadata`.
- Fonts: Four iconType variants (Regular/Filled/Light/Resizable). New styles require updating font generation pipeline (all `generate:font-*` scripts and metadata merge).
- Export map (`packages/react-icons/package.json` `exports`) uses conditional `fluentIconFont`; when adjusting build output paths, update both `lib` and `lib-cjs` mappings consistently.
- React styling: Components accept `primaryFill`, `className`; compound icon pattern uses `bundleIcon(Filled, Regular)` plus `iconFilledClassName` / `iconRegularClassName` for state toggling.

## Typical Change Flow (Add / Update Icons)
1. Add raw SVG(s) to appropriate new/existing folder in `assets/` (ensure fill `#212121`).
2. If direction-specific, set metadata / ensure RTL logic recognizes (inspect or extend `rtlMetadata.js`).
3. Run relevant package builds (e.g., `packages/react-icons` build) to regenerate components and fonts.
4. Run `npm run build:verify` in React icons to confirm metadata & generation integrity.
5. Commit generated outputs (generated code is tracked—do not manually edit `lib/` outputs; edit sources or generation scripts instead).
6. Let CI validate fills & builds.

## When Modifying Generators
- Prefer changes inside `importer/` scripts (e.g., `generate.js`, `generateFont.js`) to altering per-package build steps; keep script flags consistent (`--source`, `--dest`, `--extension`, `--target`, `--iconType`).
- After script changes, rebuild at least one consumer package to ensure no path/flag regressions.

## Platform-Specific Notes
- React Native: Limited styling (no Griffel). Avoid introducing DOM-specific props.
- iOS: Enum-based access (`UIImage(fluent: .appStore24Filled)`); asset stripping tool in `ios/remove-unused-fluent-icons` must still find & parse asset names—keep naming stable.
- Android: Vector drawable tint placeholder replaced (`@color/fluent_default_icon_tint`) during finalize step; avoid hardcoding other colors.
- Flutter: Icon classes generated from font codepoint JSON; if glyph sets change, regenerate fonts first then Flutter classes.

## Safe Extensions / Additions
- New icon style variant: add generation script, extend metadata merge, update exports if needed.
- New distribution format (e.g., consolidated sprite index): create new package under `packages/` and reuse `importer/generate.js` with new flags.

## Avoid
- Manual edits to generated `lib/`, `lib-cjs/`, `icons/`, `sprites/` files.
- Upgrading TypeScript/Babel broadly without verifying downstream package constraints & CI.
- Introducing SVG fills other than `#212121` (unless *_color.svg purposefully multi-colored).

## Quick Validation Checklist Before PR
- Builds succeed for changed packages.
- No asset directories with trailing spaces.
- All new SVGs pass fill rule.
- React icons `build:verify` passes.
- Metadata (`metadata.json`) updated if generation logic changed.


## Releases

Whole repository is being released together via [.github/workflows/publish.yml](./workflows/publish.yml) workflow.

### react-icons

react-icons project uses `nx release` for changelog generation and versioning.

Changelog is generated based on commits that modified files in `packages/react-icons/` only. While [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) are enabled, every release bump is driven by repo-wide versioning approach via programmatic manual scripts.

For that reason we are not able to use specific git tags for `@fluentui/react-icons` releases rather workspace wide `1.1.{actual-bump-integer} pattern. We leverage this information further to obtain the previous version during changelog generation via `nx release changelog --from {$CURRENT_VERSION}` so we can feed in the correct batch of changes. If no relevant changes are found, the default message `This release contains icon updates` is used, to reflect `/assets` changes.

> **NOTE:** Why `"projectsRelationship": "independent",` is used in `nx.json` for react-icons release?
>
> While the repo is on `fixed` release schema, we need to use independent to ignore commits that did not modify files in `packages/react-icons/`.
