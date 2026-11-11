# Contributing

This project welcomes contributions and suggestions. Most contributions require you to
agree to a Contributor License Agreement (CLA) declaring that you have the right to,
and actually do, grant us the rights to use your contribution. For details, visit
https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need
to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the
instructions provided by the bot. You will only need to do this once across all repositories using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)
or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Pull Request Guidelines

### Asset Contract

The source SVGs under `assets/` are shared design inputs for every platform. The
supported monochrome source format is an outer `svg`, optional `g` containers,
and nonempty painted `path` elements. Definitions, clipping, masks, referenced
artwork, and shape primitives such as circles and rectangles are not supported
by the current monochrome conversion contract. Export or flatten them to painted
paths while preserving appearance, or request consumer support. Do not blindly
delete necessary clipping or geometry to satisfy validation. The validator does
not rewrite sources or change SVG generation.

Every painted path must resolve to `fill="#212121"`, either explicitly or through
an ancestor. Additional fills, including `#242424`, implicit SVG black, and
`fill="none"` on path geometry are not accepted. Structural `fill="none"` is allowed
on `svg` and `g` when their painted paths override it with canonical paint. Merely
setting canonical paint on an unused container does not make an asset valid.

Use unprefixed SVG elements and fill attributes, not foreign namespaces, prefixed
painting attributes, inline CSS, stylesheets, or paint-server references. Namespace
declarations do not grant an exception to this styling contract. Monochrome inputs
must be well-formed single-root XML; stylesheet processing instructions are not
supported. XML declarations and comments are permitted. The checker uses a strict
parse-only XML parser and never optimizes or serializes artwork.

Color variants are identified by their filename style, including localized and
directional variants, and are excluded from the monochrome fill check. Intentional
multicolor artwork must have a design-reviewed Color classification. Changing an
existing public variant requires agreement on compatibility; do not strip meaningful
colors just to pass validation. If a reviewed migration cannot land first, use a
narrow file exclusion instead of weakening the default palette or structure rules.

Source filenames must use `ic_fluent_<name>_<size>_<style>.svg`, with a positive
integer size and an explicit Regular, Filled, Light, or Color style written in
lowercase. Only an optional `_ltr` or `_rtl` suffix is accepted after the style;
arbitrary staging suffixes such as `_color_filled` or `_regular_v2` are rejected
before Color classification. Source layouts are `<group>/SVG/<file>` or
`<group>/<locale-or-direction>/SVG/<file>`. Existing locale directories, including
script qualifiers such as `sr-cyrl`, and `LTR`/`RTL` folders remain supported;
underscore locale aliases, combined locale/direction folders, ambiguous or nested
qualifier layouts, and uppercase file extensions are not accepted.

Asset group directory names must not end with a space, for Windows compatibility.
Ordinary spaces within names are supported.

Run the same read-only asset validation locally as CI:

```sh
yarn nx run system-icons-processing:check:assets
```

This command checks the real asset tree directly with the reviewed entries in
`importer/check-assets.exclusions.json`. Each entry maps an exact path relative to
`assets/` to a nonempty review reason, for example:

```json
{
  "Legacy/SVG/ic_fluent_legacy_20_filled.svg": "Intentional palette pending design-reviewed Color classification."
}
```

Exclusions suppress only that file's monochrome contract diagnostics. Source
identities, directory-name checks, and XML parsing still run. Glob patterns and
parent-directory traversal are not supported. The CLI reports every applied
exclusion with its reason and a separate excluded count. Missing-file exclusions
and entries for files that already satisfy the contract fail validation and must
be removed. The existing multicolor Filled flags are listed individually so new
files and variants do not inherit their exclusions.

The standalone CLI is strict unless exclusions are explicitly supplied:

```sh
node importer/check-assets.mjs
node importer/check-assets.mjs --exclusions importer/check-assets.exclusions.json
```

Custom scopes can use `--source <directory>` with an optional `--exclusions <file>`.
Future bailout entries require review and a reason; they are not a global skip.
The exclusion file is included in Nx inputs, so changing it reruns the check.

Fixture tests for the validator run
with the existing `system-icons-processing:test` target; no second full-assets test
scan is needed. CI runs asset validation when assets or validation inputs are affected.
Changes to this contract require explicit engineering and design review, not an
updated snapshot or automatic source correction.

Generated monochrome output removes canonical design paint so consumers can inherit
or provide their own color. Source validation and generated-output verification are
separate safeguards; neither should silently accept a new source fill.

### Pull Request Titles

Pull request titles must follow the [Conventional Commits](https://www.conventionalcommits.org/) standard. This helps us generate accurate changelogs and maintain a clear project history.

> PR titles are automatically validated in CI. In addition, every local commit message is validated by a Husky `commit-msg` hook (via [commitlint](https://commitlint.js.org)), so individual commits must follow the same convention.

**Format**: `<type>(<scope>): <description>`

**Examples**:

- `feat(react-icons): add new calendar icon variants`
- `fix(svg-sprites): correct sprite generation for RTL icons`
- `docs: update installation instructions`
- `chore(deps): update dependencies`
- `feat(assets): add new icons`

**Common types**:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Maintenance tasks (dependencies, build scripts)
- `refactor`: Code refactoring without changing functionality
- `test`: Adding or updating tests
- `ci`: Changes to CI/CD configuration

**Scope** (optional but recommended):

- `react-icons`: Changes to `@fluentui/react-icons`
- `react-native-icons`: Changes to `@fluentui/react-native-icons`
- `svg-icons`: Changes to `@fluentui/svg-icons`
- `svg-sprites`: Changes to `@fluentui/svg-sprites`
- `webpack-plugin`: Changes to webpack plugin
- `assets`: Changes to icon assets
- `android`: Android-specific changes
- `ios`: iOS-specific changes
