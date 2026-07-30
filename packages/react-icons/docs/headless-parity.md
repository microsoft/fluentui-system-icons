# Headless ↔ standard API parity report

> **Status: superseded by the promotion it was written to justify.** The headless
> implementation is now the default one and the CSS-in-JS entrypoint is deleted, so the
> two APIs this report compares no longer coexist. It is kept as the evidence the
> promotion rested on. The suites listed below were repointed at the single remaining
> implementation and renamed accordingly:
> `src/parity/entrypoint-api-parity.test.ts` → `src/contract/entrypoint-api.test.ts`,
> `src/parity/render-parity.test.tsx` → `src/contract/rendered-styles.test.tsx`,
> `build-verify-parity.test.js` → `build-verify-contract.test.js`. All four
> [open items](#open-items) are resolved — see the CHANGELOG entry for the promotion.

`scripts/build.js` has carried the same note for a while:

> `NOTE: will be part of package.json once headless is stable. then we can remove this dynamic addition and the related build logic that copies headless assets.`

Making the headless entrypoints the default is only defensible if they are demonstrably
equivalent to the Griffel ones. This document records what was measured, how, and what
came back — including the two places the two APIs do **not** agree.

Everything below is produced by checked-in suites, so the claims stay true or the build
goes red:

| suite                                      | target         | what it proves                                                   |
| ------------------------------------------ | -------------- | ---------------------------------------------------------------- |
| `src/parity/entrypoint-api-parity.test.ts` | `test`         | export names, runtime shapes, constant values, context identity  |
| `src/parity/render-parity.test.tsx`        | `test`         | DOM diff, computed styles in Chromium, RTL, override behaviour   |
| `build-verify-parity.test.js`              | `build-verify` | published `exports` map, emitted `.d.ts` signatures, shipped CSS |
| `bundle-size/*.fixture.js`                 | `bundle-size`  | per-entrypoint cost of each API, in both webpack CSS modes       |

## Verdict

| dimension           | verdict                                                   | notes                                                                     |
| ------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------- |
| **API surface**     | PASS — headless is a strict superset                      | 4 additional value exports, all deliberate                                |
| **DOM output**      | PASS — one class of difference                            | generated class names vs data attributes; `fui-*` contract byte-identical |
| **Computed styles** | PASS with 1 recorded difference                           | `wrapIcon` under forced colors; see [Finding 1](#finding-1)               |
| **RTL**             | PASS — same context, same decision                        | expression differs, outcome identical                                     |
| **Bundle**          | PASS under CSS extraction; REGRESSES under `style-loader` | see [Bundle](#bundle) and [Finding 2](#finding-2)                         |

## API surface

`/headless/utils` publishes exactly the names `/utils` does, with matching runtime kinds,
function arities and constant values. `/headless` covers the whole non-icon surface of
the default entrypoint and adds four exports:

| addition               | why it exists                                                    |
| ---------------------- | ---------------------------------------------------------------- |
| `DATA_FUI_ICON_RTL`    | consumers targeting the flipped state need the attribute name    |
| `DATA_FUI_ICON_HIDDEN` | ditto, for the inactive half of a bundled pair                   |
| `DATA_FUI_ICON_FONT`   | ditto, for font-family variant selection                         |
| `cx`                   | the class joiner that replaces `mergeClasses` at every call site |

Two properties matter more than the name lists:

- **The class-name constants are re-exported bindings, not copies.** `headless/shared`
  forwards `../utils/constants`, so `iconFilledClassName` / `iconRegularClassName` — the
  selectors downstream design systems hang their hover/press/open swaps on — cannot drift
  between the two APIs.
- **There is exactly one `IconDirectionContext`.** `headless/index` re-exports the same
  provider object `/providers` does. A second context instance would break RTL for trees
  that mix the two APIs during the promotion, silently.

The emitted `.d.ts` signatures for `createFluentIcon`, `bundleIcon`, `wrapIcon`,
`useIconState`, `createFluentIcon.svg-sprite` and `createFluentFontIcon` are byte-identical
between the two implementations once JSDoc is stripped.

**Not yet paired:** `.`, `./fonts`, `./svg` and their `./lib/*` aliases are icon _barrels_,
and there is no headless barrel — headless atoms are reached through `./headless/svg/*` and
`./headless/fonts/*`. Promotion resolves this by making the existing barrels headless
rather than by adding new subpaths, so this is a sequencing fact rather than a gap to close
first. The build-verify suite asserts the set of unpaired subpaths is exactly this list, so
a _new_ unpaired subpath fails the build.

## DOM output

17 scenarios are rendered twice from an identical React tree — sized and resizable SVG,
color icon with `idPrefix`, sprite icon, wrapped icon, both halves of a bundled pair in
both `filled` states, four font variants, and four RTL permutations.

Element structure, inner markup, text content, and every attribute other than the ones
below are identical. The complete set of differences:

| difference               | standard                           | headless                                                 |
| ------------------------ | ---------------------------------- | -------------------------------------------------------- |
| base styling             | atomic classes + `___` debug class | none — `[data-fui-icon]` already present                 |
| bundled inactive variant | atomic `display: none` class       | `data-fui-icon-hidden=""`                                |
| RTL flip                 | atomic `transform` class           | `data-fui-icon-rtl=""`                                   |
| font family selection    | atomic `font-family` class         | `data-fui-icon-font="filled\|regular\|resizable\|light"` |
| font icon base marker    | `data-fui-icon=""`                 | `data-fui-icon="font"`                                   |
| `wrapIcon` output        | `class` attribute present          | **no `class` attribute at all**                          |

The `fui-Icon`, `fui-Icon-filled`, `fui-Icon-regular` and `fui-Icon-font` tokens are
emitted identically by both, and a consumer-supplied `className` survives both untouched.

The last row is the only DOM-_shape_ change: every factory except `wrapIcon` contributes a
`fui-*` class, so `class` survives with the contract token; `wrapIcon` contributes none, so
on the headless side the attribute is absent rather than present-and-empty. Code doing
`element.className.split(' ')` on a wrapped icon is the one pattern that breaks.

## Computed styles

Declaration-level comparison would not tell you what the cascade does, so both results are
replayed in Chromium (Playwright, already a root devDependency; `pr.yml` installs it before
the Build and Test steps). Griffel's rules are read back off the stylesheet it injected
during the jsdom render — it uses `insertRule`, so the rules live on `sheet.cssRules` and
the `<style>` element's `textContent` is empty. The headless rules come from the shipped
`headless/styles.css`. Both documents are then measured with `getComputedStyle` for
`display`, `line-height`, `transform`, `font-family`, `font-style`, `color` and
`forced-color-adjust`, in both a normal and a `forced-colors: active` context.

Every expectation pins the absolute expected value as well as cross-API equality, so a rule
disappearing from _both_ stylesheets cannot pass silently.

**Result: identical on every icon in both media states, with one exception.**

<a id="finding-1"></a>

### Finding 1 — `wrapIcon` gains the high-contrast fix

| element                             | standard                | headless |
| ----------------------------------- | ----------------------- | -------- |
| `wrapIcon`, `forced-colors: active` | `preserve-parent-color` | `auto`   |

Griffel scopes `forced-color-adjust: auto` to `createFluentIcon` and
`createFluentIcon.svg-sprite`, the two factories that call `useRootStyles()`. `wrapIcon`
does not call it, so a Griffel-wrapped custom SVG keeps Chromium's forced-colors default.
The headless stylesheet targets `[data-fui-icon]`, which `wrapIcon` also sets, so the
wrapped icon gets the fix too.

**Recorded, not "fixed".** The rule exists because SVG internals are not recoloured in high
contrast, and a wrapped custom SVG has exactly that problem — headless is the consistent
side. Reproducing Griffel's omission would require a new attribute to tell wrapped icons
apart from factory-built ones, i.e. spending DOM surface to replicate an inconsistency.
Flagged here for review; the suite asserts the difference is exactly this and affects
nothing else, so it cannot quietly widen.

This element doubles as the negative control for the whole high-contrast check: it is the
one SVG neither stylesheet claims, and it reads `preserve-parent-color` while every claimed
icon reads `auto` — proving the `auto` readings come from the rules and not from a browser
default.

### Specificity: headless defaults are strictly easier to override

Not a parity failure, but the one behavioural difference the stylesheets do not share, and
the reason it matters downstream.

Griffel writes its base rules as single atomic classes (specificity `0-1-0`), so a
consumer's own single-class rule ties with them and source order decides. The headless base
rule is wrapped in `:where()` (specificity `0-0-0`) so the consumer always wins. Measured in
Chromium with the consumer stylesheet placed first — the pessimistic order:

| base rule                                                | consumer `.x { display: block }` wins? |
| -------------------------------------------------------- | -------------------------------------- |
| `.atomic { display: inline }` (Griffel)                  | no — `inline`                          |
| `:where([data-fui-icon]) { display: inline }` (headless) | yes — `block`                          |

The improvement has a corollary that any layered design system must act on:
`headless/styles.css` is **unlayered**. Cascade layers are compared before specificity, so a
layered consumer rule loses to an unlayered icons rule no matter how specific it is — and
`[data-fui-icon-hidden]` is deliberately not `:where()`-wrapped, because it has to beat the
base rule. Consumers using `@layer` should import the stylesheet into a layer:

```css
@import '@fluentui/react-icons/headless/styles.css' layer(your-base-layer);
```

## RTL

`core/useBaseIconState` resolves `isRtlFlip` from `useIconContext()` for both APIs, so the
_decision_ is shared code and only its expression differs. Asserted across all four
scenarios — icon with `flipInRtl`, icon without, wrapped icon, and both halves of a bundled
pair — including that the marker is removed on re-render when the direction goes back to
`ltr`, and that both bundled variants flip together. Computed `transform` is
`matrix(-1, 0, 0, 1, 0, 0)` on both sides.

<a id="bundle"></a>

## Bundle

Fixture coverage before this work was 4 headless fixtures against 8 standard ones, with no
directly comparable pair: there was no standard `bundleIcon` fixture to compare
`Headless - Bundle Icon` against, and no atom-level font fixture to compare
`Headless - Single Fonts` against. Seven fixtures were added so every headless fixture has a
twin, plus a 35-icon pair at the scale
`docs/bundle-size-rendering-approaches-comparison.md` used.

<a id="finding-2"></a>

### Finding 2 — the existing headless fixtures under-count headless

`headless-svg` and `headless-fonts` import the atom only. The headless API does not work
without its stylesheet, so those fixtures measure the JS runtime in isolation rather than
what a consumer pays. They are kept (isolating the runtime is useful) and joined by
`headless-svg-with-css`, `headless-fonts-with-css` and `headless-many-icons`, which include
the mandatory imports and are the honest comparison.

### Measurements

`yarn nx run react-icons:bundle-size`, 21 fixtures, minified / gzip. "style-loader" is the
webpack default; "extraction" is `GRIFFEL_EXTRACTION=true`, which at the time added
`GriffelCSSExtractionPlugin` + `MiniCssExtractPlugin`. That flag is now `CSS_EXTRACTION=true`
and adds `MiniCssExtractPlugin` alone — there is no Griffel left to extract.

Headless vs its standard twin — negative is smaller:

| pair                               | style-loader                      | extraction                               |
| ---------------------------------- | --------------------------------- | ---------------------------------------- |
| SVG atom (+CSS)                    | **+1,274 B (+17.0%)** / gz +504 B | −3,288 B (−58.3%) / gz −1,458 B (−52.4%) |
| Font atom (+CSS)                   | **+2,610 B (+31.3%)** / gz +956 B | −3,431 B (−75.0%) / gz −1,569 B (−70.9%) |
| 35 icons (+CSS)                    | **+1,250 B (+6.2%)** / gz +521 B  | −3,300 B (−18.0%) / gz −1,609 B (−22.3%) |
| Provider                           | −583 B (−80.1%) / gz −267 B       | −583 B (−80.1%) / gz −267 B              |
| Bundle icon (JS only, no CSS twin) | −5,238 B (−62.9%)                 | −3,337 B (−51.9%)                        |
| Dynamic SVG atom (JS only)         | −23 B (−0.8%)                     | −1,173 B (−28.1%)                        |
| Dynamic bundle icon (JS only)      | −46 B (−1.5%)                     | −1,198 B (−28.0%)                        |

Extracted CSS is **not** counted above — monosize reports `Asset types: js`. Measured
directly: `headless/styles.css` is 1,936 B raw / 853 B gzip, `headless/fonts/styles.css` is
1,640 B raw / 435 B gzip. Adding them back to the 35-icon extraction result still leaves
headless ahead by 1,364 B minified, and the CSS is a fixed cost that amortises as icon count
grows while Griffel's runtime does not.

### What did and did not reproduce

`docs/bundle-size-rendering-approaches-comparison.md` reports, for 35 SVG inline icons:
−5.135 kB / −13.5% minified and −21.1% gzip with CSS extraction, and −0.098 kB / −0.3%
minified with `style-loader`.

- **Extraction reproduces.** Measured −18.0% minified and −22.3% gzip. Gzip lands within
  1.2 points of the published figure; the minified percentage is larger and the absolute
  saving smaller, because that document's baseline is 38.137 kB against this fixture's
  20.193 kB — it sampled physically larger icons, so percentages are the comparable metric.
- **The `style-loader` row does not reproduce.** Measured **+6.2% minified / +6.6% gzip**,
  against a published −0.3% / −0.8%. The direction is opposite. The document's harness is
  not in the repository, and it states it measured the standard variant with **Griffel AOT**,
  which `monosize.config.mjs` leaves disabled (the `resolve.extensions = ['.raw.js', …]`
  line is commented out) — but AOT would shrink the _standard_ side, which widens rather
  than closes the gap.

  The practical consequence stands either way and is broader than that document claims:
  under webpack's default `style-loader`, headless is larger — **not just for font icons**,
  but for SVG icons too. The document's "SVG inline is roughly break-even" line should not
  survive the promotion unchecked, and the guidance it derives from it needs rewriting
  against these fixtures rather than against an unreproducible measurement.

### A caveat on the 1 kB threshold

`monosize.config.mjs` sets an absolute 1 kB per-fixture threshold. Fixtures are built in a
single batched webpack compilation and are **not fully isolated**: adding
`headless-fonts-with-css.fixture.js` (which pulls the font files in as `asset/resource`)
moved the unrelated `Atomic Fonts` and `Single Fonts` fixtures from 8.193 kB to 8.332 kB — a
139 B shift. Verified A/B/A, and isolated to that one fixture: removing it restores 8.193 kB.

139 B is comfortably inside the 1 kB threshold, so nothing is being masked today. It does
mean the threshold's real headroom is ~860 B rather than 1 kB whenever a change adds or
removes an asset-emitting fixture.

## Open items

All four were settled by the promotion:

1. **`wrapIcon` under forced colors** (Finding 1) — **accepted as an improvement.** Wrapped
   icons now get `forced-color-adjust: auto` like every other icon;
   `src/contract/rendered-styles.test.tsx` asserts it in Chromium and the CHANGELOG records
   it as a fix.
2. **`wrapIcon` emits no `class` attribute** — **recorded** as a breaking change in the
   CHANGELOG, and pinned by a test so it cannot widen.
3. **The `style-loader` guidance** in `docs/bundle-size-rendering-approaches-comparison.md`
   — **rewritten.** It recommended "prefer the Griffel variant", which no longer exists. That
   document is now built on the `… + CSS` fixtures rather than on the unreproducible harness,
   recommends CSS extraction, and states the regression as this finding established it —
   **not limited to font icons**. The harness's `style-loader` column is dropped; its
   extraction column survives as an approach ranking only, labelled as such.
4. **No headless icon barrel** — **resolved by the promotion**: `.`, `./svg` and `./fonts`
   are the headless barrels now, rather than new subpaths being added alongside them.
