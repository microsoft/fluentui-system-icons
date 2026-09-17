import { describe, expect, it } from 'vitest';

import loader from '../src/index';
import type { AtomicLoaderContext } from '../src/loader-context';
import { createExportSelector } from '../src/selector-protocol';
import type { SourceMapInput } from '../src/source-maps';

const source = [
  '"use client";',
  "import { createFluentIcon } from '../../utils/createFluentIcon.js';",
  "export const AddFilled = createFluentIcon('AddFilled', '1em', ['filled']);",
  "export const AddRegular = createFluentIcon('AddRegular', '1em', ['regular']);",
].join('\n');

interface RunLoaderOptions {
  compilation?: unknown;
  inputSource?: string;
  inputSourceMap?: SourceMapInput;
  sourceMap?: boolean;
}

function runLoader(resourcePath: string, resourceQuery: string, options: RunLoaderOptions = {}) {
  let result: { error?: Error | null; code?: string; map?: unknown } = {};
  const context: AtomicLoaderContext = {
    resourcePath,
    resourceQuery,
    sourceMap: options.sourceMap ?? true,
    _compilation: options.compilation ?? {},
    getOptions: () => ({ moduleGranularity: 'icon' }),
    emitWarning: () => undefined,
    callback: (error, code, map) => {
      result = { error, code: typeof code === 'string' ? code : undefined, map };
    },
  };
  loader.call(context, options.inputSource ?? source, options.inputSourceMap);
  return result;
}

describe('loader selector branch', () => {
  it('runs before package and source-text bailouts', () => {
    const result = runLoader(
      '/app/node_modules/@fluentui/react-icons/lib/atoms/svg/add.js',
      createExportSelector('AddFilled'),
    );
    expect(result.error).toBeNull();
    expect(result.code).toContain('export const AddFilled');
    expect(result.code).not.toContain('export const AddRegular');
  });

  it('fails closed when font selector capability is missing', () => {
    const result = runLoader(
      '/app/node_modules/@fluentui/react-icons/lib/atoms/fonts/add.js',
      createExportSelector('AddFilled'),
    );
    expect(result.error?.message).toContain('requires a query-aware subsetting plugin');
  });

  it('rejects queried CommonJS resources', () => {
    const result = runLoader(
      '/app/node_modules/@fluentui/react-icons/lib-cjs/atoms/svg/add.cjs',
      createExportSelector('AddFilled'),
    );
    expect(result.error?.message).toContain('queried CommonJS icon resources are not supported');
  });

  it('rejects a selector whose export belongs to another physical family', () => {
    const result = runLoader(
      '/app/node_modules/@fluentui/react-icons/lib/atoms/svg/add.js',
      createExportSelector('ArrowLeftRegular'),
    );
    expect(result.error?.message).toContain('does not belong to icon family "add"');
  });

  it('passes an incoming map through unchanged on the fast no-op path', () => {
    const inputMap: SourceMapInput = { version: 3, sources: ['original.ts'], names: [], mappings: 'AAAA' };
    const result = runLoader('/app/src/plain.js', '', {
      inputSource: 'export const value = 1;',
      inputSourceMap: inputMap,
    });
    expect(result.map).toBe(inputMap);
  });

  it('composes an incoming map for ordinary barrel rewrites', () => {
    const inputMap: SourceMapInput = {
      version: 3,
      file: 'intermediate.js',
      sources: ['original.ts'],
      sourcesContent: [`import { AddFilled } from '@fluentui/react-icons';`],
      names: [],
      mappings: 'AAAA',
    };
    const result = runLoader('/app/src/icons.js', '', {
      inputSource: `import { AddFilled } from '@fluentui/react-icons';`,
      inputSourceMap: inputMap,
    });
    expect(result.error).toBeNull();
    expect((result.map as { sources: string[] }).sources).toContain('original.ts');
  });

  it('skips map generation when the bundler disables source maps', () => {
    const result = runLoader('/app/src/icons.js', '', {
      inputSource: `import { AddFilled } from '@fluentui/react-icons';`,
      sourceMap: false,
    });
    expect(result.map).toBeUndefined();
  });

  it('skips selected-module map generation when the bundler disables source maps', () => {
    const result = runLoader(
      '/app/node_modules/@fluentui/react-icons/lib/atoms/svg/add.js',
      createExportSelector('AddFilled'),
      { sourceMap: false },
    );
    expect(result.map).toBeUndefined();
  });
});
