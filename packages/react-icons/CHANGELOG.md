## Unreleased

### 🚀 Features

- **react-icons:** promote the headless API to the package default

  `scripts/build.js` has carried the note _"will be part of package.json once headless is
  stable"_ for a while. It is. The default entrypoints — `.`, `./svg`, `./svg/*`,
  `./fonts`, `./fonts/*`, `./utils` — now serve the attribute-driven, Griffel-free
  implementation, and the CSS-in-JS one is deleted. `@griffel/react` is gone from this
  package's `dependencies`; nothing in the published output references it.

  Sizes move in the direction the headless fixtures always showed: with CSS extraction a
  single SVG atom drops from 5.641 kB to 2.353 kB minified (−58.3%), and 35 icons from
  18.331 kB to 15.031 kB (−18.0%). Without extraction the shipped stylesheet is inlined
  into the JS bundle instead, so measure your own build before assuming a win there.

### 💥 Breaking changes

- **A stylesheet import is now required.** Styling is expressed as `data-fui-icon*`
  attributes resolved by a shipped CSS file rather than injected at runtime, so:

  ```js
  import '@fluentui/react-icons/styles.css';
  // …and additionally, if you use the font icons:
  import '@fluentui/react-icons/fonts/styles.css';
  ```

  Without it every icon loses `display`, the RTL flip and the high-contrast handling —
  and a `bundleIcon` pair renders **both** variants at once. The failure is silent and
  application-wide, so wire the import up before upgrading, not after.

  The stylesheet is **unlayered**. Cascade layers are compared before specificity, so a
  layered rule of yours loses to an unlayered rule here no matter how specific it is
  (`[data-fui-icon-hidden]` in particular is deliberately not `:where()`-wrapped, because
  it has to beat the base rule). Design systems that use `@layer` must assign the
  stylesheet a layer at import time:

  ```css
  @import '@fluentui/react-icons/styles.css' layer(your-base-layer);
  ```

  Shipping the layer inside the package would impose a layer name on the whole ecosystem,
  so the file stays unlayered and the obligation is documented instead. See
  `docs/headless.md` for the full rationale.

- **`wrapIcon` no longer emits a `class` attribute** when the caller passes no
  `className`. Every other factory contributes a `fui-*` contract class, so `class`
  survives there; `wrapIcon` contributes none, and there are no generated class names left
  to fill it. Code doing `element.className.split(' ')` on a wrapped icon is the one
  pattern this breaks.

- **`./headless*` subpaths are deprecated.** They are kept for this release as aliases of
  the default entrypoints — the very same modules and files — so existing headless adopters
  upgrade without a code change. Migrate `@fluentui/react-icons/headless` →
  `@fluentui/react-icons`, `…/headless/utils` → `…/utils`, `…/headless/svg/*` → `…/svg/*`,
  `…/headless/fonts/*` → `…/fonts/*`, `…/headless/styles.css` → `…/styles.css`,
  `…/headless/fonts/styles.css` → `…/fonts/styles.css`. They will be removed in the next
  major.

- The `--headless` generation flags on `convert.js` / `convert-font.js` are gone, and the
  duplicated `atoms/headless-*` directories are no longer published. The default atoms
  _are_ the headless atoms now.

- **A styling-mechanism change now requires a major version bump.** `README.md`'s API contract
  sanctioned exactly two non-major breaking changes — icon removal and icon renaming — on the
  stated principle that _"a failing build pipeline is preferable to silently shipping invalid
  UI"_. A change to the required stylesheet, to the attribute/class contract it targets, or to
  its layering is neither of those, and unlike them it **cannot** fail a build: it type-checks,
  compiles, ships, and the icons render wrong. The contract now names it as a third category so
  the version number carries the warning the compiler cannot.

### 🩹 Fixes

- **react-icons:** `wrapIcon` now gets the high-contrast fix. The removed CSS-in-JS
  implementation scoped `forced-color-adjust: auto` to the two factories that called
  `useRootStyles()`, so a wrapped custom SVG kept Chromium's forced-colors default of
  `preserve-parent-color` and its internal colours were never re-mapped. The stylesheet
  targets `[data-fui-icon]`, which `wrapIcon` also sets, so wrapped icons are now
  consistent with factory-built ones. Verified in Chromium by
  `src/contract/rendered-styles.test.tsx`.

## 2.0.334 (2026-07-24)

### 🚀 Features

- **react-icons:** add new and updated icons ([#1181](https://github.com/microsoft/fluentui-system-icons/pull/1181))

### 🩹 Fixes

- **react-icons:** stop headless base CSS from overriding shared data-fui-icon styling ([#1172](https://github.com/microsoft/fluentui-system-icons/pull/1172))

## 2.0.333 (2026-07-10)

### 🚀 Features

- **assets:** add new and updated icons ([#1154](https://github.com/microsoft/fluentui-system-icons/pull/1154))
- **react-icons:** render data-fui-icon attribute on all icon factories ([#1144](https://github.com/microsoft/fluentui-system-icons/pull/1144))

### 🩹 Fixes

- **react-icons:** honor fontSize prop on resizable font icons (SVG/font parity) ([#1146](https://github.com/microsoft/fluentui-system-icons/pull/1146))
- **react-icons:** resolve [data-fui-icon-hidden] specificity ordering ([#1153](https://github.com/microsoft/fluentui-system-icons/pull/1153))

## 2.0.332 (2026-07-07)

### 🚀 Features

- **react-icons:** add idPrefix prop to scope Color variant SVG ids ([#1131](https://github.com/microsoft/fluentui-system-icons/pull/1131))
- **react-icons:** propagate `headless/` API to stable ([#1119](https://github.com/microsoft/fluentui-system-icons/pull/1119))

### 🩹 Fixes

- **bundle-size:** apply intended 1 kB threshold at repo root for compare-reports ([#1134](https://github.com/microsoft/fluentui-system-icons/pull/1134))

### 🔥 Performance

- **react-icons:** reuse canonical fonts instead of regenerating ([#1105](https://github.com/microsoft/fluentui-system-icons/pull/1105))

## 2.0.331 (2026-06-26)

### 🚀 Features

- **react-icons:** add new and updated icons ([#1127](https://github.com/microsoft/fluentui-system-icons/pull/1127))
- **react-icons:** build geometry from @fluentui/svg-icons base ([#1102](https://github.com/microsoft/fluentui-system-icons/pull/1102))
- **react-icons-file-type:** implement v8 alternative for v9,modern ([#1095](https://github.com/microsoft/fluentui-system-icons/pull/1095))

## 2.0.330 (2026-06-12)

### 🚀 Features

- **svg-icons:** unify raw SVG processing with react-icons ([#1100](https://github.com/microsoft/fluentui-system-icons/pull/1100))

## 2.0.329 (2026-06-09)

This release contains icon updates

## 2.0.328 (2026-05-22)

### 🚀 Features

- **react-icons:** add new and updated icons ([#1090](https://github.com/microsoft/fluentui-system-icons/pull/1090))

## 2.0.327 (2026-05-20)

### 🩹 Fixes

- **nx:** mark react-icons and react-native-icons as implicitly depending on importer ([#1088](https://github.com/microsoft/fluentui-system-icons/pull/1088))
- **react-icons:** replace dangerouslySetInnerHTML with structured SvgNode rendering for color icons ([#1078](https://github.com/microsoft/fluentui-system-icons/pull/1078))

## 2.0.326 (2026-05-08)

### 🩹 Fixes

- **release:** prevent cross-group version cascade to standalone packages ([#1072](https://github.com/microsoft/fluentui-system-icons/pull/1072))

## 2.0.325 (2026-04-24)

### 🚀 Features

- **react-icons:** add new and updated icons ([#1068](https://github.com/microsoft/fluentui-system-icons/pull/1068))
- **react-icons-atomic-webpack-loader:** replace acorn parser with oxc-parser ([#1061](https://github.com/microsoft/fluentui-system-icons/pull/1061))
- **react-icons:** deprecate colored svg variants ([#1010](https://github.com/microsoft/fluentui-system-icons/pull/1010))

## 2.0.324 (2026-04-13)

### 🚀 Features

- **react-icons-atomic-webpack-loader:** implement build-transform webpack loader ([#1048](https://github.com/microsoft/fluentui-system-icons/pull/1048))

## 2.0.323 (2026-03-27)

### 🚀 Features

- **react-icons:** add new and updated icons ([#1028](https://github.com/microsoft/fluentui-system-icons/pull/1028))
- **react-icons-svg-sprite-subsetting-webpack-plugin:** implement svg sprite subsetting for react-icons `/svg-sprite/*` api ([#1016](https://github.com/microsoft/fluentui-system-icons/pull/1016))

## 2.0.322 (2026-03-24)

### 🚀 Features

- **react-icons:** add new icons ([#1023](https://github.com/microsoft/fluentui-system-icons/pull/1023))

## 2.0.321 (2026-03-13)

### 🚀 Features

- **react-icons:** add new and updated icons ([#1008](https://github.com/microsoft/fluentui-system-icons/pull/1008))
- **react-icons:** enable griffel `makeStaticStyles` AOT for font icons ([#1006](https://github.com/microsoft/fluentui-system-icons/pull/1006))

## 2.0.320 (2026-02-27)

### 🚀 Features

- **react-icons:** add new and updated icons ([#997](https://github.com/microsoft/fluentui-system-icons/pull/997))

### 🩹 Fixes

- **react-icons:** generate fixed number of chunks to make chunking indices deterministic ([#992](https://github.com/microsoft/fluentui-system-icons/pull/992))

## 2.0.319 (2026-02-13)

### 🚀 Features

- **react-icons:** expand /utils api endpoint with additional utils to completely streamline build transforms to atomic imports ([#975](https://github.com/microsoft/fluentui-system-icons/pull/975))

### 🩹 Fixes

- **react-icons:** properly resolve atoms grouppings if icon contains style variant as part of its name ([#955](https://github.com/microsoft/fluentui-system-icons/pull/955))

## 2.0.318 (2026-02-02)

### 🚀 Features

- **react-icons:** introduce granular export maps for svg utils ([#953](https://github.com/microsoft/fluentui-system-icons/pull/953))

### 🩹 Fixes

- TextColor icon classification to support theme colors ([#963](https://github.com/microsoft/fluentui-system-icons/pull/963))

## 2.0.317 (2026-01-21)

### 🚀 Features

- **react-icons:** add export map for svg atoms imports to support old TypeScript 'moduleResolution:node' setting ([#944](https://github.com/microsoft/fluentui-system-icons/pull/944))
- **react-icons:** add base `fui-Icon` className to SVG icons ([#923](https://github.com/microsoft/fluentui-system-icons/pull/923))

### 🩹 Fixes

- **react-icons:** properly group icon names to which name clashes with style variant ([#943](https://github.com/microsoft/fluentui-system-icons/pull/943))

## 2.0.316 (2025-12-05)

This release contains icon updates

## 2.0.315 (2025-11-18)

This release contains icon updates

## 2.0.314 (2025-11-12)

### 🚀 Features

- **react-icons:** add atomic imports public api per icons kind/module ([#888](https://github.com/microsoft/fluentui-system-icons/pull/888))
- **react-icons:** implement deteministic chunking with alphabetical locality ([#911](https://github.com/microsoft/fluentui-system-icons/pull/911))

## 2.0.313 (2025-10-27)

This release contains icon updates

## 2.0.312 (2025-10-10)

This release contains icon updates

## 2.0.311 (2025-09-26)

### 🚀 Features

- **react-icons:** add React 19 support ([#895](https://github.com/microsoft/fluentui-system-icons/pull/895))

## 2.0.310 (2025-09-15)

This release contains icon updates

## 2.0.309 (2025-08-29)

This release contains icon updates

## 2.0.308 (2025-08-22)

This release contains icon updates

## 2.0.307 (2025-07-25)

### 🚀 Features

- **react-icons:** use babel only to process griffel modules \*.styles.js ([#869](https://github.com/microsoft/fluentui-system-icons/pull/869))
- **react-icons:** improve .d.ts performance and emit time. introduce FluentFontIcon prop as public api ([#866](https://github.com/microsoft/fluentui-system-icons/pull/866))
- **react-icons:** enable griffel unprocessed (styles.raw.js) output for production assets ([#858](https://github.com/microsoft/fluentui-system-icons/pull/858))

### 🩹 Fixes

- **react-icons:** fix react rules of hook violations ([#874](https://github.com/microsoft/fluentui-system-icons/pull/874))
- **react-icons:** normalize chunk PURE annotation generation ([#863](https://github.com/microsoft/fluentui-system-icons/pull/863))
- **react-icons:** make font svg generation deterministic ([#862](https://github.com/microsoft/fluentui-system-icons/pull/862))
