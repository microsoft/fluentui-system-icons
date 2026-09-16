// @ts-check
process.env.FLUENT_ICON_SELECTOR_METRICS = '1';

const { readFileSync, readdirSync } = require('fs');
const { resolve } = require('path');
const { performance } = require('perf_hooks');

const loader = require('../lib').default;
const { getSelectorTransformMetrics, resetSelectorTransformMetrics, selectExports } = require('../lib/select-export');

const SAMPLE_SIZE = Number(process.env.ICON_BENCHMARK_EXPORTS || 2_000);
const ITERATIONS = Number(process.env.ICON_BENCHMARK_ITERATIONS || 20);
const atomDirectory = resolve(__dirname, '../../react-icons/lib/atoms/svg');

const selections = [];
for (const filename of readdirSync(atomDirectory).sort()) {
  if (!filename.endsWith('.js')) continue;
  const resourcePath = resolve(atomDirectory, filename);
  const source = readFileSync(resourcePath, 'utf8');
  for (const match of source.matchAll(/export const ([A-Za-z_$][\w$]*)\s*=/g)) {
    selections.push({ exportName: match[1], resourcePath, source });
    if (selections.length === SAMPLE_SIZE) break;
  }
  if (selections.length === SAMPLE_SIZE) break;
}

if (selections.length < SAMPLE_SIZE) {
  throw new Error(`Requested ${SAMPLE_SIZE} exports, but found only ${selections.length}.`);
}

const importerSource = `import { ${selections.map(({ exportName }) => exportName).join(', ')} } from '@fluentui/react-icons';`;

const runLoader = (source, moduleGranularity, sourceMap = false) => {
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

console.log(
  JSON.stringify(
    {
      exports: selections.length,
      physicalFamilies: new Set(selections.map(({ resourcePath }) => resourcePath)).size,
      defaultSourceMaps: false,
      results: [...results, selectionResult],
    },
    null,
    2,
  ),
);
