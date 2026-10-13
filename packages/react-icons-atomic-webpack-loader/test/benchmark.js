// @ts-check
process.env.FLUENT_ICON_SELECTOR_METRICS = '1';

const { readFileSync, readdirSync } = require('fs');
const { resolve } = require('path');
const { performance } = require('perf_hooks');

const loader = require('../lib').default;
const { getSelectorTransformMetrics, resetSelectorTransformMetrics, selectExports } = require('../lib/select-export');

const SAMPLE_SIZE = Number(process.env.ICON_BENCHMARK_EXPORTS || 5_000);
const ITERATIONS = Number(process.env.ICON_BENCHMARK_ITERATIONS || 20);
const JSON_OUTPUT = process.env.ICON_BENCHMARK_JSON === '1';
const atomDirectory = resolve(__dirname, '../../react-icons/lib/atoms/svg');

/** @type {Array<{ exportName: string; resourcePath: string; source: string }>} */
const selections = [];
for (const filename of readdirSync(atomDirectory).sort()) {
  if (!filename.endsWith('.js')) continue;
  const resourcePath = resolve(atomDirectory, filename);
  const source = readFileSync(resourcePath, 'utf8');
  const exportPattern = /export const ([A-Za-z_$][\w$]*)\s*=/g;
  let match;
  while ((match = exportPattern.exec(source)) !== null) {
    selections.push({ exportName: match[1], resourcePath, source });
    if (selections.length === SAMPLE_SIZE) break;
  }
  if (selections.length === SAMPLE_SIZE) break;
}

if (selections.length < SAMPLE_SIZE) {
  throw new Error(`Requested ${SAMPLE_SIZE} exports, but found only ${selections.length}.`);
}

const importerSource = `import { ${selections.map(({ exportName }) => exportName).join(', ')} } from '@fluentui/react-icons';`;

/**
 * @param {string} source
 * @param {'family' | 'icon'} moduleGranularity
 * @param {boolean} [sourceMap]
 */
const runLoader = (source, moduleGranularity, sourceMap = false) => {
  /** @type {Error | null | undefined} */
  let error;
  loader.call(
    {
      resourcePath: '/app/src/benchmark.js',
      resourceQuery: '',
      sourceMap,
      getOptions: () => ({ iconVariant: 'svg', moduleGranularity }),
      emitWarning: () => undefined,
      callback: (nextError) => {
        error = nextError;
      },
    },
    source,
  );
  if (error) throw error;
};

/**
 * @param {string} name
 * @param {() => void} run
 * @param {number} [iterations]
 */
const benchmark = (name, run, iterations = ITERATIONS) => {
  run();
  const rssBefore = process.memoryUsage().rss;
  const start = performance.now();
  for (let index = 0; index < iterations; index++) run();
  return {
    name,
    iterations,
    totalMs: Number((performance.now() - start).toFixed(2)),
    rssDeltaMiB: Number(((process.memoryUsage().rss - rssBefore) / 1_048_576).toFixed(2)),
  };
};

const results = [
  benchmark('fast-skip importer', () => runLoader('export const value = 1;', 'family'), 10_000),
  benchmark('family importer rewrite', () => runLoader(importerSource, 'family')),
  benchmark('icon importer rewrite', () => runLoader(importerSource, 'icon')),
  benchmark('icon importer rewrite with source maps', () => runLoader(importerSource, 'icon', true)),
];

resetSelectorTransformMetrics();
const selectionRssBefore = process.memoryUsage().rss;
const selectionStart = performance.now();
for (const selection of selections) {
  selectExports(selection.source, selection.resourcePath, { kind: 'export', exportName: selection.exportName }, false);
}
const selectionResult = {
  name: 'selected export emission',
  iterations: selections.length,
  totalMs: Number((performance.now() - selectionStart).toFixed(2)),
  rssDeltaMiB: Number(((process.memoryUsage().rss - selectionRssBefore) / 1_048_576).toFixed(2)),
  ...getSelectorTransformMetrics(),
};

const report = {
  exports: selections.length,
  physicalFamilies: new Set(selections.map(({ resourcePath }) => resourcePath)).size,
  defaultSourceMaps: false,
  results: [...results, selectionResult],
};

if (JSON_OUTPUT) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log('Fluent icon atomic loader benchmark');
  console.log(`Exports: ${report.exports} across ${report.physicalFamilies} physical families`);
  console.log(`Default source maps: ${report.defaultSourceMaps ? 'enabled' : 'disabled'}`);
  console.table(
    report.results.map(({ name, iterations, totalMs, rssDeltaMiB }) => ({
      Scenario: name,
      Iterations: iterations,
      'Total (ms)': totalMs,
      'Avg (ms)': Number((totalMs / iterations).toFixed(4)),
      'RSS change (MiB)': rssDeltaMiB,
    })),
  );
  console.log(
    `Selector cache: ${selectionResult.parses} parses, ${selectionResult.cacheHits} hits, ` +
      `${selectionResult.cacheEntries} entries for ${selectionResult.emissions} emissions`,
  );
  console.log('Set ICON_BENCHMARK_JSON=1 for machine-readable output.');
}
