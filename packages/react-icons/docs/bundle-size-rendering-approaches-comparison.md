## Bundle Size: Icon Rendering Approaches

> **Measure metric:** 35 icons used
>
> **CSS bundled in JS:** Griffel AOT (standard) / vanilla CSS inlined in JS bundle via webpack `css-loader` + `style-loader` (headless)
>
> **CSS Extracted:** Griffel CSS Extraction (standard) / vanilla CSS extracted to `.css` files via `MiniCssExtractPlugin` (headless)
>
> Δ is relative to the **baseline** (first row) of each group.
>
> _Note: Headless variants use vanilla CSS (not Griffel). With CSS extraction (`MiniCssExtractPlugin`) the CSS moves out of JS entirely, yielding smaller JS bundles. Without CSS extraction (`style-loader`), webpack's css-loader/style-loader runtime is added to the JS bundle — see the [analysis below](#%EF%B8%8F-style-loader-no-css-extraction-headless-fonts-are-larger)._

### SVG Inline Icons

| Variant                             |  Minified |      GZIP |         Δ Minified |             Δ GZIP |
| ----------------------------------- | --------: | --------: | -----------------: | -----------------: |
| Griffel, CSS in bundle _(baseline)_ | 38.137 kB | 10.526 kB |                  — |                  — |
| Headless, CSS in bundle             | 38.039 kB | 10.444 kB |  -0.098 kB (-0.3%) |  -0.082 kB (-0.8%) |
| Griffel, CSS extracted              | 36.182 kB |  9.892 kB |  -1.955 kB (-5.1%) |  -0.634 kB (-6.0%) |
| Headless, CSS extracted             | 33.002 kB |  8.310 kB | -5.135 kB (-13.5%) | -2.216 kB (-21.1%) |

### Font Icons

| Variant                             |  Minified |     GZIP |         Δ Minified |             Δ GZIP |
| ----------------------------------- | --------: | -------: | -----------------: | -----------------: |
| Griffel, CSS in bundle _(baseline)_ | 10.166 kB | 4.153 kB |                  — |                  — |
| Headless, CSS in bundle             | 11.510 kB | 4.590 kB | +1.344 kB (+13.2%) | +0.437 kB (+10.5%) |
| Griffel, CSS extracted              |  6.397 kB | 2.758 kB | -3.769 kB (-37.1%) | -1.395 kB (-33.6%) |
| Headless, CSS extracted             |  3.098 kB | 1.245 kB | -7.068 kB (-69.5%) | -2.908 kB (-70.0%) |

### SVG Sprite Icons

| Variant                             | Minified |     GZIP |         Δ Minified |             Δ GZIP |
| ----------------------------------- | -------: | -------: | -----------------: | -----------------: |
| Griffel, CSS in bundle _(baseline)_ | 8.925 kB | 3.657 kB |                  — |                  — |
| Headless, CSS in bundle             | 8.992 kB | 3.639 kB |  +0.067 kB (+0.8%) |  -0.018 kB (-0.5%) |
| Griffel, CSS extracted              | 6.970 kB | 2.990 kB | -1.955 kB (-21.9%) | -0.667 kB (-18.2%) |
| Headless, CSS extracted             | 3.959 kB | 1.608 kB | -4.966 kB (-55.6%) | -2.049 kB (-56.0%) |

---

### Summary

**With CSS extraction (recommended for production):** Headless is the clear winner across all icon types — **−70% for fonts**, **−56% for sprites**, **−14% for SVG inline** (minified). This is the ideal setup where vanilla CSS is fully extracted to `.css` files with zero JS runtime overhead.

**Without CSS extraction (webpack `style-loader` default):** Headless provides negligible-to-negative JS savings. Font icons are actually **+13% larger** because webpack's `css-loader`/`style-loader` runtime outweighs Griffel's runtime. SVG inline and sprite icons break roughly even (~±1%).

**Across all scenarios:** Font icons are the smallest approach overall (3–11 kB vs 9–38 kB for SVG inline), and SVG sprites sit in between (4–9 kB). The best overall combination is **Headless + CSS Extracted font icons** at just **1.245 kB gzipped**.

#### ⚠️ Style-loader (no CSS extraction): Headless Fonts are _larger_

When webpack uses `style-loader` (the default — no `MiniCssExtractPlugin`), the **headless fonts** bundle is **+1,344 B minified (+13%)** larger than the Griffel baseline. This is counter-intuitive — the headless approach was designed to remove the CSS-in-JS runtime, but in this mode it _replaces_ it with an even heavier runtime.

**Root cause:** The two plain CSS imports (`headless-fonts.css`, `headless.css`) require webpack's `css-loader` + `style-loader` runtime to inject styles into the DOM at runtime. This runtime comprises ~10 extra webpack modules (style injection/removal API, `<style>` element creation, CSP nonce support, URL escaping, CSS text stringification, etc.) that collectively weigh more than Griffel's built-in runtime (hash function, `mergeClasses`, `makeStyles`, style insertion).

**When headless _does_ win:** With CSS extraction (`MiniCssExtractPlugin`), the CSS moves into a separate `.css` file and the loader runtime is not needed — headless fonts then drop to **3.098 kB** (−69.5%). The style-loader overhead also gets amortized when an app already uses `css-loader`/`style-loader` for other CSS imports (the runtime is shared).

**Takeaway:** Headless font icons deliver significant JS savings only when the consumer uses CSS extraction or a bundler with lightweight CSS handling (Vite, esbuild). With webpack's default `style-loader` mode, prefer the Griffel variant.
