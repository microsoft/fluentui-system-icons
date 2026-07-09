---
name: pre-release-npm-package
description: 'Prepare npm packages for pre-release publishing. Supports two modes — pre-releasing already-publishable packages, or making private library packages publishable for pre-release. Keywords: prerelease, pre-release, publish, npm, private, release group.'
---

# Pre-Release NPM Package Preparation

This skill prepares packages for pre-release publishing. It supports two modes:

- **Publishable packages only** — Pre-release existing public packages. No code changes needed; the skill validates the branch and guides the user to trigger the CI workflow, where the package(s) are selected via the workflow's `projects` input.
- **Include private packages** — Make private library packages publishable (removing their `"private": true` flag) so they can be pre-released. Code changes are committed on the pre-release branch.

> **Note:** The `Publish Prerelease NPM` workflow selects packages ad-hoc via its `projects` input (Nx selection syntax) and excludes `tag:npm:private` by default. A package therefore only needs to be **publishable** (no `"private": true`) to be pre-released — it does **not** need to be added to a specific Nx release release group.

After this skill completes, the `Publish Prerelease NPM` GitHub Actions workflow (`.github/workflows/publish-prerelease.yml`) can be triggered to build, version, and publish the selected packages (plus their publishable runtime dependencies) to npm.

---

## Step 1: Validate or Create Pre-Release Branch

Check the current git branch:

```bash
git branch --show-current
```

**If the branch matches** `release/pre/react-icons/<feature-name>`:

- Confirm with the user that they want to proceed on this branch.

**If the branch does NOT match:**

- Ask the user for the `<feature-name>` (kebab-case, e.g., `sprite-subsetting`).
- Create and checkout the branch:

```bash
git checkout -b "release/pre/react-icons/<feature-name>"
```

> **Important:** The branch MUST follow the `release/pre/react-icons/<feature-name>` naming convention. The publish-prerelease workflow blocks execution on `main`.

---

## Step 2: Choose Pre-Release Mode

Ask the user which mode they want:

1. **Publishable packages only** — Pre-release packages that are already publishable (no code changes). Skip to [Step 5: Next Steps](#step-5-next-steps).
2. **Include private packages** — Also make private library packages publishable for pre-release. Continue to Step 3.

---

## Step 3: Discover Eligible Private Packages

> _This step only applies when the user chose "Include private packages" in Step 2._

Scan all packages in the `packages/` directory and filter to those that meet ALL of the following criteria:

1. **Has `package.json`** with `"private": true`
2. **Has `project.json`** with `"projectType"` set to a value that is NOT `"application"`

Packages that are **ineligible** (skip these):

- Packages without a `package.json`
- Packages where `"private"` is `false` or not set (already public)
- Packages without a `project.json` (no verifiable project type)
- Packages where `"projectType"` is `"application"` (apps are not publishable libraries)

Use the discovery script to find eligible packages:

```bash
node .github/skills/pre-release-npm-package/scripts/discover-eligible-packages.js
```

The script outputs a JSON array of objects with `dirName`, `npmName`, and `projectType` fields. See [`scripts/discover-eligible-packages.js`](scripts/discover-eligible-packages.js) for the full filtering logic.

Present the eligible packages to the user as a list showing the npm name and directory name.

If no eligible packages are found, inform the user and fall back to "Published packages only" mode (skip to [Step 5](#step-5-next-steps)).

### Prompt User to Select Packages

Ask the user which eligible packages to make publishable for the pre-release. They may select one or more.

#### Workflow Compatibility Note

The `publish-prerelease.yml` workflow selects packages via its `projects` input using Nx project-selection syntax and **excludes `tag:npm:private` by default**. Any package the user names in that input will be picked up — there is no `react-*` naming restriction — **as long as it is publishable** (no `"private": true`).

Therefore, the only change required to pre-release a currently-private package is removing its `"private": true` flag (Step 4). No Nx release-group membership is required.

---

## Step 4: Apply Changes and Commit

> _This step only applies when the user chose "Include private packages" in Step 2._

For each selected package, remove the `"private": true` flag so it becomes publishable for pre-release.

### 4a. Remove `"private": true` from `package.json`

Edit the selected package's `package.json` to remove the `"private": true` field entirely.

**Do not** modify any other fields in the `package.json`, and do **not** add the package to any Nx release group — the pre-release workflow selects packages ad-hoc via its `projects` input.

> Removing `"private": true` makes the package resolve as `tag:npm:public`, so it is no longer excluded by the workflow's default `--exclude tag:npm:private` filter.

### 4b. Stage and Commit

Stage all modified files and create a commit:

```bash
git add <paths-to-modified-package.json-files>
git commit -m "feat: prepare packages for pre-release - <comma-separated npm package names>"
```

The commit message should use the npm package names (e.g., `@fluentui/react-icons-atomic-webpack-loader`).

Example:

```bash
git add packages/react-icons-atomic-webpack-loader/package.json packages/react-icons-svg-sprite-subsetting-webpack-plugin/package.json
git commit -m "feat: prepare packages for pre-release - @fluentui/react-icons-atomic-webpack-loader, @fluentui/react-icons-svg-sprite-subsetting-webpack-plugin"
```

---

## Step 5: Next Steps

Inform the user of next steps:

1. Push the branch to GitHub: `git push -u origin release/pre/react-icons/<feature-name>`
2. Navigate to [Publish Prerelease NPM workflow](https://github.com/microsoft/fluentui-system-icons/actions/workflows/publish-prerelease.yml)
3. Click **Run workflow** and:
   - select the pre-release branch,
   - set **`projects`** to the package(s) to pre-release using Nx selection syntax (e.g. `react-icons`, `react-icons,react-icons-file-type`, `react-*`, or `tag:npm:standalone`),
   - optionally set **`exclude`**,
   - choose **`preid`** (`alpha`/`beta`/`rc`), and optionally enable **`dry-run`**.
   - Publishable runtime dependencies of the selection are auto-included so the published set is self-consistent.
4. For detailed instructions, see [Prerelease Publishing Guide](../../../packages/react-icons/docs/prerelease.md)
