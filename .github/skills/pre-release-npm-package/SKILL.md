---
name: pre-release-npm-package
description: 'Prepare npm packages for pre-release publishing. Supports two modes — pre-releasing already-published packages from the react release group, or adding private library packages to the release group for pre-release. Keywords: prerelease, pre-release, publish, npm, private, release group.'
---

# Pre-Release NPM Package Preparation

This skill prepares packages for pre-release publishing. It supports two modes:

- **Published packages only** — Pre-release existing public packages already in the `react` Nx release group. No code changes needed; the skill validates the branch and guides the user to trigger the CI workflow.
- **Include private packages** — Add private library packages to the `react` release group (removing their `"private": true` flag), so they are pre-released alongside the already-published packages. Code changes are committed on the pre-release branch.

After this skill completes, the `Publish Prerelease NPM` GitHub Actions workflow (`.github/workflows/publish-prerelease.yml`) can be triggered to build, version, and publish the packages to npm.

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

1. **Published packages only** — Pre-release the packages already in the `react` release group (no code changes). Skip to [Step 5: Next Steps](#step-5-next-steps).
2. **Include private packages** — Also add private library packages to the release group. Continue to Step 3.

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

Ask the user which eligible packages to add to the pre-release. They may select one or more.

#### Workflow Compatibility Warning

The `publish-prerelease.yml` workflow discovers projects using:

```bash
npx nx show projects -p 'react-*' --exclude 'react-native-icons'
```

If any selected package's Nx project name (the directory name under `packages/`) does **NOT** start with `react-`, warn the user:

> ⚠️ Package `<package-name>` has Nx project name `<dir-name>` which does not match the `react-*` glob used by the publish-prerelease workflow. This package will be added to the release group but will NOT be picked up for building/publishing unless the workflow is also updated.

Let the user decide whether to proceed despite the warning.

---

## Step 4: Apply Changes and Commit

> _This step only applies when the user chose "Include private packages" in Step 2._

For each selected package, make two modifications:

### 4a. Add to `nx.json` React Release Group

Read `nx.json` and add the package path to `release.groups.react.projects` array.

The path format is: `packages/<dir-name>` (e.g., `packages/react-icons-atomic-webpack-loader`).

**Only add if not already present** in the array.

Example — before:

```json
{
  "release": {
    "groups": {
      "react": {
        "projects": [
          "packages/react-icons",
          "packages/react-icons-font-subsetting-webpack-plugin",
          "packages/react-native-icons"
        ]
      }
    }
  }
}
```

After adding `react-icons-atomic-webpack-loader`:

```json
{
  "release": {
    "groups": {
      "react": {
        "projects": [
          "packages/react-icons",
          "packages/react-icons-font-subsetting-webpack-plugin",
          "packages/react-native-icons",
          "packages/react-icons-atomic-webpack-loader"
        ]
      }
    }
  }
}
```

### 4b. Remove `"private": true` from `package.json`

Edit the selected package's `package.json` to remove the `"private": true` field entirely.

**Do not** modify any other fields in the `package.json`.

### 4c. Stage and Commit

Stage all modified files and create a commit:

```bash
git add nx.json <paths-to-modified-package.json-files>
git commit -m "feat: prepare packages for pre-release - <comma-separated npm package names>"
```

The commit message should use the npm package names (e.g., `@fluentui/react-icons-atomic-webpack-loader`).

Example:

```bash
git add nx.json packages/react-icons-atomic-webpack-loader/package.json packages/react-icons-svg-sprite-subsetting-webpack-plugin/package.json
git commit -m "feat: prepare packages for pre-release - @fluentui/react-icons-atomic-webpack-loader, @fluentui/react-icons-svg-sprite-subsetting-webpack-plugin"
```

---

## Step 5: Next Steps

Inform the user of next steps:

1. Push the branch to GitHub: `git push -u origin release/pre/react-icons/<feature-name>`
2. Navigate to [Publish Prerelease NPM workflow](https://github.com/microsoft/fluentui-system-icons/actions/workflows/publish-prerelease.yml)
3. Click **Run workflow**, select the pre-release branch, choose preid (`alpha`/`beta`/`rc`), and optionally enable dry-run
4. For detailed instructions, see [Prerelease Publishing Guide](../../../packages/react-icons/docs/prerelease.md)
