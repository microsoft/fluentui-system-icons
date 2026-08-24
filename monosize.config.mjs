// @ts-check
import gitStorage from 'monosize-storage-git';
import webpackBundler from 'monosize-bundler-webpack';

/** @type {import('monosize').MonoSizeConfig} */
const config = {
  repository: 'https://github.com/microsoft/fluentui-system-icons',
  // Reports are stored as GitHub Actions artifacts (produced by the
  // "Bundle Size Baseline" workflow on `main`) instead of being committed to
  // git. `compare-reports` reads the latest matching artifact via the GitHub
  // API (requires `GITHUB_TOKEN`), and `upload-report` writes the aggregated
  // report to `outputPath` on disk so a workflow step can upload it as an
  // artifact.
  storage: gitStorage({
    owner: 'microsoft',
    repo: 'fluentui-system-icons',
    workflowFileName: 'bundle-size.baseline.yml',
    outputPath: 'dist/bundle-size-report.json',
  }),
  bundler: webpackBundler((config) => {
    return config;
  }),
  // Absolute per-fixture regression threshold used by `monosize compare-reports`
  // (which runs at the repo root). Without this, compare-reports falls back to the
  // 10% default, which is too strict for the small headless fixtures.
  threshold: '1kB',
};

export default config;
