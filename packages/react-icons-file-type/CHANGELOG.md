## Unreleased

### 🚀 Features

- **react-icons-file-type:** promote the headless API to the package default

  The default `FileTypeIcon` no longer carries a CSS-in-JS runtime. Both entry points always
  composed the same `useFileTypeIcon` + `renderFileTypeIcon` pair and differed only by a style
  hook layered in between, so promoting the headless one is a deletion rather than a rewrite:
  `src/FileTypeIcon.styles.ts` is gone, `@griffel/react` is gone from `dependencies`, and
  nothing in the published output references it.

  It gets smaller in **both** bundler configurations, which is worth stating because the sister
  package `@fluentui/react-icons` does not:

  | `FileTypeIcon` fixture, minified | before   | after    |                  Δ |
  | -------------------------------- | -------- | -------- | -----------------: |
  | CSS extracted                    | 8,119 B  | 4,744 B  |  -3,375 B (-41.6%) |
  | CSS in bundle (`style-loader`)   | 33,202 B | 10,574 B | -22,628 B (-68.2%) |

  The second row is the one that differs from `@fluentui/react-icons`: this package's fixture
  never ran the AOT transform, so the `style-loader` baseline carried the full CSS-in-JS runtime
  rather than a pre-resolved one, and replacing it with `css-loader`/`style-loader` is a large
  net win rather than a small net loss.

### 💥 Breaking changes

- **A stylesheet import is now required.** Styling is expressed as a `data-fui-filetype-icon`
  attribute resolved by a shipped CSS file rather than injected at runtime:

  ```js
  import '@fluentui/react-icons-file-type/styles.css';
  ```

  Without it the icon still renders, but loses `display: inline-block` and
  `object-fit: contain` — so a non-square asset stretches inside the square `width`/`height`
  box the `size` prop sets. Unlike `@fluentui/react-icons` there is no state marker whose
  absence breaks the component outright, which makes this failure quieter, not less real.

  The stylesheet is **unlayered**. Cascade layers are compared before specificity, so a layered
  rule of yours loses to an unlayered rule here no matter how specific it is. Design systems
  that use `@layer` must assign it a layer at import time:

  ```css
  @import '@fluentui/react-icons-file-type/styles.css' layer(your-base-layer);
  ```

  Shipping the layer inside the package would impose a layer name on the whole ecosystem, so
  the file stays unlayered and the obligation is documented instead.

- **`FileTypeIcon` no longer emits generated class names.** `class` is now exactly what the
  caller passed in `className`, and the attribute is absent entirely when no `className` is
  given. Code doing `img.className.split(' ')` on a file type icon is the one pattern this
  breaks.

- **`./headless` and `./headless/styles.css` are deprecated.** They are kept for this release as
  aliases of `.` and `./styles.css` — the same module and the same file — so existing headless
  adopters upgrade without a code change. `src/contract/entrypoint-api.test.ts` asserts the
  alias forwards binding for binding and fails on any _new_ `./headless` subpath. Both are
  removed in the next major.

### 🩹 Fixes

- **The base rule is now `:where()`-wrapped**, giving it zero specificity so a consumer
  `className` always wins regardless of stylesheet order. The removed CSS-in-JS implementation
  gave that for free by merging the consumer class last; the previously shipped headless
  stylesheet did not, and left the outcome dependent on injection order.

- **`monosize.config.mjs` drops its 10 kB threshold override.** It existed to absorb the
  CSS-in-JS runtime's version-to-version drift — a Griffel bump cost this fixture ~1.1 kB, which
  is the reason `docs/single-version-policy.md` pins it. With that runtime gone the fixtures are
  small and stable, so the repo's absolute 1 kB gate applies here like everywhere else.

## 0.0.1 (2026-06-30)

### 🚀 Features

- **react-icons-file-type:** update CDN, new file icon registrations for PowerBI etc ([#1125](https://github.com/microsoft/fluentui-system-icons/pull/1125))
- **react-icons-file-type:** implement v8 alternative for v9,modern ([#1095](https://github.com/microsoft/fluentui-system-icons/pull/1095))
