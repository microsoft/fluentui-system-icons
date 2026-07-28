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

`@fluentui/react-icons` publishes `@griffel/react` at `^1.6.1`, but griffel 1.7+ writes its
type declarations with TypeScript 4.5+ syntax, which the pinned TypeScript 4.1.6 above cannot
parse. Rather than hold the whole repo back, the root [package.json](../package.json) scopes an
install-time override to that one workspace:

```jsonc
"resolutions": {
  // only @fluentui/react-icons resolves the old griffel; everything else tracks latest
  "@fluentui/react-icons/@griffel/react": "1.6.1"
}
```

The **published** range stays `^1.6.1`, so consumers still deduplicate griffel with the rest of
their app. Remove this override once `@fluentui/react-icons` moves off TypeScript 4.1.6.

Prefer a scoped `parent/child` key over a bare package name: a bare key rewrites every copy in
the repo and silently defeats the intent of the policy.

## Enforcement

Two complementary gates run in CI (see [.github/workflows/pr.yml](../.github/workflows/pr.yml)):

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
  each that adds up fast. Resolve the path once instead — note that `yarn bin` is scoped to
  the current workspace exactly like `PATH` is, so it has to be asked of the root workspace:
  `BIN=$(yarn workspace @fluentui/system-icons-repo bin avocado) && find . -exec "$BIN" {} \;`
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

## Adding or updating a dependency

1. Add or bump the dependency version in the **root** `package.json`.
2. For a publishable package that imports it at runtime, list the package name (no version,
   or a matching version) in that package's `dependencies`, then run
   `yarn nx run <project>:lint --fix` to sync the version from the root.
3. Run `yarn deps:check` to confirm the policy passes.
