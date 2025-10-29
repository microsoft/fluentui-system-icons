---
applyTo: 'packages/react-icons'
---

# AI Assistant Project Guide: react-icons
Focus: Generation & maintenance of `@fluentui/react-icons` (web React package) from shared `assets/` SVG source.

## Directory Anatomy (package scope)
- `assets/` (root repo): canonical SVG sources (must keep `fill="#212121"`).
- `packages/react-icons/intermediate/`: transient optimized SVG + `rtl.json` (never commit manually; produced by scripts).
- `packages/react-icons/src/`: generated TypeScript icon components + font helpers.
- `packages/react-icons/src/fonts/`: generated font wrapper exports (from codepoint JSON + font TTFs).
- `packages/react-icons/src/utils/fonts/`: raw generation staging (codepoint JSON lives here pre-build).
- `packages/react-icons/tmp/`: transient metadata fragments (`metadata-svg.json`, `metadata-font.json`).
- `packages/react-icons/lib/` & `lib-cjs/`: compiled outputs (ESM/CJS) — committed but NEVER hand‑edit.

## Build Pipeline (expanded)
Full `npm run build` executes, in order:
1. `generate:assets-to-svg` → copy raw SVGs into `intermediate/` (React target naming).
2. `generate:font-*` (parallel) → build four font variants (Regular / Filled / Light / Resizable) into `src/utils/fonts`.
3. `generate:rtl` → produce `intermediate/rtl.json` (directional metadata) via `rtlMetadata.js`.
4. `optimize` → SVGO pass (precision=2) over `intermediate/`.
5. `unfill` → strips explicit `fill="none"` etc so `primaryFill` prop can apply.
6. `convert:svg` → emit per-icon component TS files & SVG metadata JSON.
7. `convert:fonts` → emit font-based component wrappers & font metadata JSON.
8. `convert:merge-metadata` → merge SVG + font metadata → `metadata.json` (public contract consumed by tests/fonts).
9. `build:js` → TypeScript compile + Babel transform into `lib/` & `lib-cjs/`.

Fast checks: `npm run build-verify` (Vitest) validates metadata integrity without regenerating assets if already built.

## Icon Component Conventions
- General (resizable) component: `AccessTimeFilled` / `AccessTimeRegular` (default `1em`, scale via `fontSize`, `height/width`).
- Sized variant: `AccessTime24Filled` (pixel-perfect at that size). Prefer general unless a fixed size is mandated.
- Bundle pattern: `const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular)`; toggle via CSS using `iconFilledClassName` / `iconRegularClassName`.
- Props: `className`, `primaryFill` (overrides default color), standard SVG passthrough (aria, etc.).

## Conditional Font Implementation
- Consumers opt into font path via `resolve.conditionNames` including `"fluentIconFont"` (see package `exports`). Ensure any path changes update ALL export condition blocks (`lib` & `lib-cjs`).
- Font glyph subsets can be auto‑reduced with `@fluentui/react-icons-font-subsetting-webpack-plugin`.

## Typical Change Flow (Add / Update Icons)
1. Add SVG(s) under appropriate group folder in root `assets/` (validate fill color; skip `_color.svg` rule only if multi-colored).
2. If direction-specific asset (LTR/RTL differ), confirm `rtlMetadata.js` covers filename; extend script if new pattern.
3. Run `npm run build` in `packages/react-icons` (or root then `cd` in) to regenerate components + metadata.
4. Run `npm run build-verify` (should succeed; failing usually means duplicate/missing metadata keys after script changes).
5. Commit: added SVG(s) + updated generated outputs (`src/`, `metadata.json`). Avoid partial commits that exclude metadata.
6. Open PR; CI will enforce fill + lint + build.

## Adding / Adjusting Font Variants
- Add new variant by extending `importer/generateFont.js` and adding a `generate:font-<Variant>` script + include in `generate:font` concurrently block.
- Update merge step (`convert:merge-metadata`) if metadata shape changes (keep existing fields stable for consumers).

## Debug & Troubleshooting
- Missing component after build: ensure SVG filename begins with `ic_fluent_` pattern in generated intermediate (run `generate:assets-to-svg` and inspect).
- Wrong direction in RTL: verify entry in `intermediate/rtl.json`; re-run `generate:rtl`.
- Font glyph absent: check corresponding codepoint JSON in `src/utils/fonts`; if missing, regenerate fonts (`generate:font-*`).
- Build is slow during iteration: run only early stages (`npm run generate:assets-to-svg && npm run optimize && npm run convert:svg`) while editing converter scripts, then full build before commit.

## Tests & Lint
- `npm run lint` (ESLint with Griffel rules) — keep TS language features compatible with TS `~4.1.0`.
- `npm run build-verify` (Vitest) — do NOT delete/rename metadata keys without updating test expectations.

## Do / Avoid
Do: Modify generator scripts or assets; re-run full build; commit all related outputs.
Avoid: Manually editing anything inside `lib*/`, `src/fonts/` or generated icon TS files; upgrading TypeScript without cross‑package validation; adding hardcoded colors.

## Quick PR Self-Check
- Added icons have correct fill & naming.
- `build` + `build-verify` pass locally.
- No stray edits to compiled output unrelated to your change (run `git diff --name-only` to inspect).

If anything remains ambiguous, annotate PR with a question so docs & scripts can be refined.
