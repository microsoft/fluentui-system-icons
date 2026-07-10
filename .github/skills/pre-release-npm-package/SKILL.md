---
name: pre-release-npm-package
description: 'Prepare already-public npm packages for pre-release publishing. Keywords: prerelease, pre-release, publish, npm, alpha, beta, rc, release group.'
---

# Pre-Release NPM Package Preparation

This skill prepares **already-public** packages for pre-release publishing. No code changes are needed — the skill validates the pre-release branch and guides the user to trigger the CI workflow, where the package(s) are selected via the workflow's `projects` input.

> **Scope:** Only already-public packages can be pre-released. A private package (`"private": true`) must first be made public and released through the standard publishing pipeline before it is eligible for pre-release. Being already released also implies the package belongs to a release group under `release.groups.*.projects` in `nx.json`, which is what `nx release publish` requires.

After this skill completes, the `Publish Prerelease NPM` GitHub Actions workflow (`.github/workflows/publish-prerelease.yml`) can be triggered to build, version, and publish the selected packages to npm. Each package is versioned and published independently.

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

## Step 2: Trigger the Pre-Release

Inform the user of next steps:

1. Push the branch to GitHub: `git push -u origin release/pre/react-icons/<feature-name>`
2. Navigate to [Publish Prerelease NPM workflow](https://github.com/microsoft/fluentui-system-icons/actions/workflows/publish-prerelease.yml)
3. Click **Run workflow** and:
   - select the pre-release branch,
   - set **`projects`** to the already-public package(s) to pre-release using Nx selection syntax (e.g. `react-icons`, `react-icons,react-icons-file-type`, `react-*`, or `tag:npm:standalone`),
   - optionally set **`exclude`**,
   - choose **`preid`** (`alpha`/`beta`/`rc`), and optionally enable **`dry-run`**.
4. For detailed instructions, see [Prerelease Publishing Guide](../../../packages/react-icons/docs/prerelease.md)

> **Note:** Each selected package is versioned and published independently. Cross-package dependencies are not auto-included: a pre-released package keeps depending on the already-published version of its repo dependencies. If you also want a dependent to consume a new prerelease, select it explicitly too.
