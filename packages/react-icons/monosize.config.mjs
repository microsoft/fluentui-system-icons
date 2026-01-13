// @ts-check
import { join } from 'node:path';
import { writeFileSync } from 'node:fs';
import webpackBundler from 'monosize-bundler-webpack';

/** @type {import('monosize').MonoSizeConfig} */
const config = {
  repository: 'https://github.com/microsoft/fluentui-system-icons',
  storage: createLocalStorage(),
  bundler: webpackBundler((config) => {
    config.module = config.module ?? {};
    config.module.rules = config.module.rules ?? [];

    // Add loader for font files
    config.module.rules.push({
      test: /\.(ttf|woff2?|woff)$/,
      type: 'asset/resource',
    });

    return config;
  }),
  threshold: '10kB',
};

export default config;

/**
 * Creates a local storage adapter for Monosize.
 * This adapter reads and writes bundle size reports to a local JSON file.
 * It is used to store the bundle size reports locally for the package.
 * TODO: needs to be reworked to leverage GHA artifacts because pushing from CI to protected branch is not allowed.
 * @returns {import('monosize').StorageAdapter}
 */
function createLocalStorage() {
  const storageFileName = 'monosize.baseline.json';

  return {
    getRemoteReport: async (branch) => {
      const url = `https://raw.githubusercontent.com/microsoft/fluentui-system-icons/${branch}/packages/react-icons/${storageFileName}`;

      const emptyReport = { commitSHA: 'initial', remoteReport: [] };

      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.log(`Failed to fetch baseline from ${url}: ${response.statusText}`);
          return emptyReport;
        }
        /** @type {{branch: string; commitSHA: string; report: import('monosize').BundleSizeReport}}} */
        const data = await response.json();

        return { commitSHA: data.commitSHA, remoteReport: data.report };
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.log(`Error fetching baseline: ${message}`);
        return emptyReport;
      }
    },
    uploadReportToRemote: async (branch, commitSHA, localReport) => {
      const storageData = { branch, commitSHA, report: localReport };
      const storedReportPath = join(import.meta.dirname, storageFileName);

      writeFileSync(storedReportPath, JSON.stringify(storageData, null, 2), 'utf-8');
    },
  };
}
