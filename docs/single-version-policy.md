# Single Version Policy

This repository enforces a **single version policy**: every dependency has exactly one
version across the whole monorepo, and that version is declared once in the **workspace
root** [package.json](../package.json).

## Rules

1. **devDependencies live only in the root.** Build/test tooling (TypeScript, ESLint,
   Babel, webpack, svgo, glob, yargs, storybook, etc.) is declared exclusively in the root
   `package.json` and resolved through yarn workspace hoisting. Individual packages must not
   declare their own `devDependencies` (except the allowlisted exceptions below).

2. **Runtime dependencies are single-sourced from the root.** Publishable packages keep the
   runtime `dependencies` they ship (so consumers install them), but the **version** of each
   must match the version declared in the root `package.json`. The root therefore also
   declares the runtime libraries (e.g. `@griffel/react`, `tslib`, `subset-font`) so it
   remains the single source of truth.

3. **peerDependencies are exempt.** Peer ranges intentionally declare broad support windows
   and are not held to the single version policy.

## Allowlisted exceptions

| Package                 | Dependency     | Version   | Reason                                                                       |
| ----------------------- | -------------- | --------- | ---------------------------------------------------------------------------- |
| `@fluentui/react-icons` | `typescript`   | `4.1.6`   | Ships type declarations compatible with the legacy TypeScript 4.x toolchain. |
| `@fluentui/react-icons` | `@types/react` | `^17.0.2` | Built and validated against the React 17 type surface.                       |

Workspace-local package references (e.g. `"@fluentui/react-icons": "*"`) are managed by
`nx release` and are not subject to the policy.

### Install-time overrides

Both `@fluentui/react-icons` and `@fluentui/react-icons-file-type` publish `@griffel/react` at
`^1.6.1`. Griffel is held at the low end of that range by the root
[package.json](../package.json):

```jsonc
"resolutions": {
  "@griffel/core": "1.20.1",
  "@griffel/react": "1.6.1"
}
```

Two reasons keep it there:

- **Types.** Griffel 1.7+ writes its declarations with TypeScript 4.5+ syntax, which the pinned
  TypeScript 4.1.6 above cannot parse.
- **Bundle size.** Griffel 1.7.6 / core 1.21.3 add ~1.1 kB minified to the `FileTypeIcon`
  fixture, which trips the 1 kB `monosize` threshold in [monosize.config.mjs](../monosize.config.mjs).

The **published** ranges stay `^1.6.1`, so consumers still deduplicate griffel with the rest of
their app. Remove these overrides once the packages move off TypeScript 4.1.6 and the bundle
cost has been re-measured.

Prefer a scoped `parent/child` key when only one workspace needs the override — a bare key
rewrites every copy in the repo. Griffel is the exception: every consumer here needs the same
version, so a bare key states that intent directly instead of repeating the pin per workspace.

## Enforcement

Three complementary gates run in CI (see [.github/workflows/pr.yml](../.github/workflows/pr.yml)):

- **syncpack** — repo-wide gate configured in [.syncpackrc.json](../.syncpackrc.json). It
  fails if any two packages declare mismatched versions of the same dependency, and bans any
  `devDependency` declared outside the root (outside the allowlist).
  - Check: `yarn deps:check`
  - Auto-fix: `yarn deps:fix`

- **@nx/dependency-checks** — per-package ESLint rule (part of each package's
  `nx lint` target) that verifies each publishable package declares the runtime dependencies
  it actually imports, with versions matching the root `package.json`.
  - Run: `yarn nx affected -t lint` (or `yarn nx run-many -t lint`)
  - Auto-fix: append `--fix` to the underlying `eslint` invocation.

- **package script check** — [scripts/check-package-scripts.mjs](../scripts/check-package-scripts.mjs),
  which enforces the binary invocation conventions described below. It is a plain script
  rather than an ESLint rule because `svg-icons`, `svg-sprites`, `icon-app` and `importer`
  have no lint target, and those are the packages with the most shell in their scripts.
  - Check: `yarn scripts:check`

## Consequence: running root-owned binaries

Because every binary is a root devDependency, and because yarn (unlike npm) does **not**
put any `node_modules/.bin` directory on `PATH` when it runs a workspace script, package
scripts cannot call binaries by bare name. Use the top-level flag instead:

```jsonc
{
  "scripts": {
    "lint": "yarn run -T eslint src package.json", // resolves the root eslint
    "build": "yarn run -T tsc -p .",
  },
}
```

Notes:

- The flag only exists on the explicit `run` command: `yarn run -T <bin>`, not `yarn -T <bin>`.
- `find -exec ... {} +` batches its arguments into one process, so `yarn run -T` is fine there.
  A `find -exec ... \;` loop runs the command once per match, and at ~190ms of yarn startup
  each that adds up fast — `importer`'s avocado loop alone runs ~2970 times. Declare the tool
  in a **catalog** instead (see below) so the loop can call it by bare name.
- `@fluentui/react-icons` is the one package with its own pinned `typescript`, so its build
  uses plain `yarn tsc` (local 4.1.6) while `type-check:infra` uses `yarn run -T tsc`
  (root 5.0.4).
- Yarn runs scripts through its own portable shell rather than `sh`, and that shell expands
  globs in environment assignments too. A value such as
  `NAME=sprite.[contenthash].svg` fails with `No matches found`, so quote it.
- Yarn does not support arbitrary `pre*`/`post*` script hooks. Only the root `postinstall`
  runs, as part of the install lifecycle. Chain steps explicitly instead.
- Yarn 4 disables dependency build scripts by default. Packages that genuinely need to
  compile on install are opted in explicitly via `dependenciesMeta.<pkg>.built` in the root
  `package.json`.

### Catalogs: when a workspace has to own the binary

`yarn run -T` costs roughly 190ms of yarn startup per call, which is invisible for a one-shot
command and ruinous inside a `find -exec ... \;` loop. The way out is to make the tool a real
dependency of the workspace that runs it — yarn then puts it on that workspace's script
`PATH` — without giving up the single version policy, because a catalog keeps the version in
one place:

```yaml
# .yarnrc.yml
catalog:
  avocado: 1.0.0
```

```jsonc
// importer/package.json
{
  "devDependencies": { "avocado": "catalog:" },
  "scripts": {
    // bare name: no yarn process, no `sh -c` wrapper, ~112ms per call instead of ~440ms
    "optimize:android": "find ./dist/ -type d -exec avocado -q {} \\;",
  },
}
```

Bump the version in `.yarnrc.yml` and every `catalog:` consumer follows. Add the package to
the allowlist in [.syncpackrc.json](../.syncpackrc.json) so the "devDependencies live only in
the root" rule does not fire on it.

Reach for this only when the per-call overhead genuinely matters. `yarn run -T` stays the
default.

## Adding or updating a dependency

1. Add or bump the dependency version in the **root** `package.json`.
2. For a publishable package that imports it at runtime, list the package name (no version,
   or a matching version) in that package's `dependencies`, then run
   `yarn nx run <project>:lint --fix` to sync the version from the root.
3. Run `yarn deps:check` to confirm the policy passes.
