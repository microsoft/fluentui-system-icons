# Asset Contract

Raw SVGs in `assets/` are shared inputs for every platform. Contract changes require
engineering and design review.

## Monochrome Artwork

- Use one outer `svg`, optional `g` containers, and nonempty painted `path` elements.
- Every path must resolve to `fill="#212121"`, explicitly or through inheritance.
  `fill="none"` is allowed on containers only when paths override it with canonical paint.
- Use well-formed XML and unprefixed SVG elements and attributes. No CSS, stylesheets,
  processing instructions, foreign namespaces, or paint-server fills. XML declarations
  and comments are allowed.
- Definitions, clipping, masks, references, and shape primitives are unsupported by the
  monochrome pipeline. Export them as painted paths while preserving appearance, or
  request consumer support. Do not blindly delete necessary clipping or geometry.

## Names And Color

- Name files `ic_fluent_<name>_<size>_<style>.svg`, with a positive integer size and
  lowercase `regular`, `filled`, `light`, or `color`. Only `_ltr` or `_rtl` may follow the style.
- Use `<group>/SVG/<file>` or `<group>/<locale-or-direction>/SVG/<file>`. Locale names
  are lowercase and hyphenated, such as `sr-cyrl`; direction folders are `LTR` or `RTL`.
  Nested or combined qualifiers and underscore locale aliases are not accepted.
- Group names may contain spaces but must not end with one.
- Color variants are exempt from monochrome rules after source identity validation.
  Preserve intentional palettes; classification or public-variant changes require review.

## Validation

```sh
yarn nx run system-icons-processing:check:assets
```

This read-only check runs in CI when assets or checker inputs change. The standalone
CLI at `importer/check-assets/cli.mjs` accepts `--source` and optional `--exclusions`;
without exclusions, it is strict. It never rewrites artwork.

## Reviewed Exclusions

[exclusions.json](../importer/check-assets/exclusions.json) maps exact paths relative to
`assets/` to nonempty review reasons. Its local [JSON schema](../importer/check-assets/exclusions.schema.json)
provides editor completion and diagnostics only.

- List files individually; no globs or parent-directory traversal.
- Exclusions suppress monochrome contract diagnostics, not source identity, directory,
  or XML parsing failures. Each applied exclusion is reported.
- Remove entries when their migration lands: missing files and already-valid entries
  fail the check. New files and variants do not inherit existing exclusions.
