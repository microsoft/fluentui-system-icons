// @ts-check
import {join} from 'node:path'
import {readFileSync, writeFileSync} from 'node:fs'
import webpackBundler from 'monosize-bundler-webpack';

const packageJson = JSON.parse(readFileSync(join(import.meta.dirname, 'package.json'), 'utf-8'));
const packageName = packageJson.name;

/** @type {import('monosize').MonoSizeConfig} */
const config = {
  repository: 'https://github.com/microsoft/fluentui-system-icons',
  storage: createLocalStorage(),
  bundler: webpackBundler(config => {
    config.module = config.module ?? {};
    config.module.rules = config.module.rules ?? [];

    // Add loader for font files
    config.module.rules.push({
        test: /\.(ttf|woff2?|woff)$/,
        type: 'asset/resource',
    });

    return config;
  }),
  threshold: '10kB'
};

export default config;


/**
 * @returns {import('monosize').StorageAdapter}
 */
function createLocalStorage(){
  const storedReportPath = join(import.meta.dirname, 'monosize.json');

/**
 *
 * @param {string} reportPath
 * @returns {import('monosize').BundleSizeReport}
 */
  function getReport(reportPath){
    return JSON.parse(readFileSync(reportPath, 'utf-8'))
  }

  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRemoteReport: async (_branch) => {
      const reportPath = storedReportPath;
      const report = getReport(reportPath);
      return {
        commitSHA: 'local',
        remoteReport: report
      }
    },
    uploadReportToRemote: async () => {
      const reportPath = join(import.meta.dirname, 'dist/bundle-size/monosize.json');
      const report = getReport(reportPath);
      report.forEach(entry => {
        entry.packageName = packageName;
      });
      writeFileSync(storedReportPath, JSON.stringify(report, null, 2), 'utf-8');
    },
  }
}