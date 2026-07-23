# Single Version Policy

This repository enforces a **single version policy**: every dependency has exactly one
version across the whole monorepo, and that version is declared once in the **workspace
root** [package.json](../package.json).

## Rules

1. **devDependencies live only in the root.** Build/test tooling (TypeScript, ESLint,
   Babel, webpack, svgo, glob, yargs, storybook, etc.) is declared exclusively in the root
   `package.json` and resolved through npm workspace hoisting. Individual packages must not
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

## Enforcement

Two complementary gates run in CI (see [.github/workflows/pr.yml](../.github/workflows/pr.yml)):

- **syncpack** — repo-wide gate configured in [.syncpackrc.json](../.syncpackrc.json). It
  fails if any two packages declare mismatched versions of the same dependency, and bans any
  `devDependency` declared outside the root (outside the allowlist).
  - Check: `npm run deps:check`
  - Auto-fix: `npm run deps:fix`

- **@nx/dependency-checks** — per-package ESLint rule (part of each package's
  `nx lint` target) that verifies each publishable package declares the runtime dependencies
  it actually imports, with versions matching the root `package.json`.
  - Run: `npx nx affected -t lint` (or `npx nx run-many -t lint`)
  - Auto-fix: append `--fix` to the underlying `eslint` invocation.

## Adding or updating a dependency

1. Add or bump the dependency version in the **root** `package.json`.
2. For a publishable package that imports it at runtime, list the package name (no version,
   or a matching version) in that package's `dependencies`, then run
   `npx nx run <project>:lint --fix` to sync the version from the root.
3. Run `npm run deps:check` to confirm the policy passes.
