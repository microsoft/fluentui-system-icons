import { describe, expect, it } from 'vitest';

import loader from '../src/index';
import type { AtomicLoaderContext } from '../src/loader-context';
import { createExportSelector, SELECTOR_CAPABILITY, SELECTOR_PROTOCOL_IDENTIFIER } from '../src/selector-protocol';
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

  it('accepts a plugin registered for the complete selector protocol identifier', () => {
    const compilation = { [SELECTOR_CAPABILITY]: new Set(['fonts']) };
    const result = runLoader(
      '/app/node_modules/@fluentui/react-icons/lib/atoms/fonts/add.js',
      createExportSelector('AddFilled'),
      { compilation },
    );
    expect(result.error).toBeNull();
    expect(result.code).toContain('export const AddFilled');
  });

  it('rejects a plugin registered under a different selector key', () => {
    const wrongKeyCapability = Symbol.for('fluentui.react-icons.selector-protocol:_fluentIcon=v1');
    const compilation = { [wrongKeyCapability]: new Set(['fonts']) };
    const result = runLoader(
      '/app/node_modules/@fluentui/react-icons/lib/atoms/fonts/add.js',
      createExportSelector('AddFilled'),
      { compilation },
    );
    expect(result.error?.message).toContain(`selector protocol "${SELECTOR_PROTOCOL_IDENTIFIER}"`);
  });

  it('rejects a plugin registered under a different selector version', () => {
    const staleVersionCapability = Symbol.for('fluentui.react-icons.selector-protocol:__fluentIcon=v2');
    const compilation = { [staleVersionCapability]: new Set(['fonts']) };
    const result = runLoader(
      '/app/node_modules/@fluentui/react-icons/lib/atoms/fonts/add.js',
      createExportSelector('AddFilled'),
      { compilation },
    );
    expect(result.error?.message).toContain(`selector protocol "${SELECTOR_PROTOCOL_IDENTIFIER}"`);
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

  it.each(['?__fluentIcon', '?foo=1&__fluentIcon'])('rejects a malformed reserved query %s', (query) => {
    const result = runLoader('/app/node_modules/@fluentui/react-icons/lib/atoms/svg/add.js', query);
    expect(result.error?.message).toContain('malformed Fluent icon selector');
    expect(result.code).toBeUndefined();
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

  it('names and embeds the importer in a rewrite map without an incoming map', () => {
    const inputSource = `import { AddFilled } from '@fluentui/react-icons';`;
    const result = runLoader('/app/src/icons.js', '', { inputSource });
    expect(result.error).toBeNull();
    expect(result.map).toMatchObject({
      sources: ['/app/src/icons.js'],
      sourcesContent: [inputSource],
    });
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

  it.each([
    {
      name: 'generated package pass-through',
      resourcePath: '/app/node_modules/@fluentui/react-icons/lib/atoms/svg/add.js',
      inputSource: source,
    },
    {
      name: 'source-text fast no-op',
      resourcePath: '/app/src/plain.js',
      inputSource: 'export const value = 1;',
    },
  ])('drops an incoming map on the $name path when source maps are disabled', ({ resourcePath, inputSource }) => {
    const inputMap: SourceMapInput = { version: 3, sources: ['original.ts'], names: [], mappings: 'AAAA' };
    const result = runLoader(resourcePath, '', {
      inputSource,
      inputSourceMap: inputMap,
      sourceMap: false,
    });
    expect(result.map).toBeUndefined();
  });
});
