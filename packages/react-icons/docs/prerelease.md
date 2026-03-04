# Prerelease Publishing Guide

## Overview

The prerelease workflow allows you to publish preview versions of `@fluentui/react-icons` to npm before a final release. This is useful for:

- Testing new features with early adopters
- Getting feedback before official releases
- Publishing experimental APIs
- Coordinating releases across teams

## Prerequisites

- You must have write access to the `microsoft/fluentui-system-icons` repository
- The workflow must be executed from a **feature or release branch** (NOT from `main`)
- The npm token must be configured in repository secrets

## How to Publish a Prerelease

### Step 1: Navigate to the Workflow

1. Go to GitHub: https://github.com/microsoft/fluentui-system-icons
2. Click on **Actions** tab
3. Select **Publish Prerelease NPM** [workflow](https://github.com/microsoft/fluentui-system-icons/actions/workflows/publish-prerelease.yml)

### Step 2: Trigger the Workflow

Click **Run workflow** and configure:

- **Prerelease identifier** (required): Choose one of:
  - `alpha` - For early development versions (e.g., `2.0.0-alpha.1`)
  - `beta` - For feature-complete but untested versions (e.g., `2.0.0-beta.1`)
  - `rc` - For release candidates (e.g., `2.0.0-rc.1`)

- **Dry run** (optional): Check this box to simulate the release without actually publishing

### Step 3: Monitor the Workflow

The workflow will:

1. ✅ Validate the branch (must not be `main`)
2. 📦 Build the react-icons package
3. 🔢 Calculate the next prerelease version
4. 📤 Publish to npm (or simulate if dry-run is enabled)
5. 📝 Generate a summary with installation instructions

## Prerelease Versioning

Prerelease versions follow semantic versioning with prerelease identifiers:

```
<major>.<minor>.<patch>-<prerelease>.<number>
```

Examples:

- `2.0.0-alpha.1` - First alpha of v2.0.0
- `2.0.0-beta.2` - Second beta of v2.0.0
- `2.0.0-rc.1` - Release candidate for v2.0.0

### Version Calculation Logic

The workflow automatically calculates the next prerelease version based on:

1. **Latest prerelease version** with the same identifier in npm registry
2. **Increments** the prerelease number (e.g., `alpha.1` → `alpha.2`)
3. If no prerelease exists, it starts at `1` (e.g., `2.0.0-alpha.1`)

## Installing Prerelease Versions

Once published, users can install the prerelease with:

> NOTE: you will need to use npm overrides or yarn resolutions to make sure only pre-release version is used as expected

```bash
# Install specific prerelease
npm install @fluentui/react-icons@2.0.0-alpha.1

# Or use the prerelease tag
npm install @fluentui/react-icons@prerelease
```

## Common Scenarios

### Scenario 1: Publishing Your First Alpha

1. Create a feature branch: `git checkout -b release/my-feature`
2. Make your changes and push to GitHub
3. Run the workflow with:
   - **Prerelease identifier:** `alpha`
   - **Dry run:** ☐ (unchecked)
4. Result: Publishes `2.0.0-alpha.1` (or next alpha number)

### Scenario 2: Testing Before Publishing

1. Same setup as Scenario 1, but:
   - **Dry run:** ☑ (checked)
2. Review the workflow output to see what would be published
3. Once satisfied, run again with **Dry run** unchecked

### Scenario 3: Publishing Multiple Prerelease Cycles

1. First run with `alpha` → publishes `2.0.0-alpha.1`
2. Make more changes, run again → publishes `2.0.0-alpha.2`
3. When feature-complete, switch to `beta` → publishes `2.0.0-beta.1`
4. Final testing, switch to `rc` → publishes `2.0.0-rc.1`
5. Official release on `main` branch → publishes `2.0.0`

## Troubleshooting

### ❌ Error: "Cannot be run against the main branch"

**Cause:** You attempted to run the workflow on the `main` branch.

**Solution:**

- Switch to a feature or release branch
- Run the workflow from that branch instead
- The main branch should only receive prerelease versions via the standard publishing pipeline

### ❌ Error: "Permission denied"

**Cause:** The npm token is missing or invalid.

**Solution:**

- Contact a repository maintainer
- Ensure the `NPM_TOKEN` secret is configured in repository settings
- The token should have publish permissions for scoped packages

### ❌ Error: "Version already exists"

**Cause:** The calculated version was already published to npm.

**Solution:**

- This shouldn't happen under normal circumstances
- If it does, run the workflow again (it will auto-increment the prerelease number)

## Best Practices

1. ✅ **Always use dry-run first** - Test what will be published before committing
2. ✅ **Use semantic versioning** - Choose the right prerelease identifier (alpha/beta/rc)
3. ✅ **Communicate with teams** - Notify users about available prerelease versions

## Related Documentation

- [Main Publishing Guide](../../../CONTRIBUTING.md)
- [Versioning Strategy](./README.md#api-contract)
- [NX Release Documentation](https://nx.dev/docs/features/manage-releases)
