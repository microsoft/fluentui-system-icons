import { describe, expect, it } from 'vitest';

import loader from '../src/index';
import type { AtomicLoaderContext } from '../src/loader-context';
import { createExportSelector } from '../src/selector-protocol';

const source = [
  '"use client";',
  "import { createFluentIcon } from '../../utils/createFluentIcon.js';",
  "export const AddFilled = createFluentIcon('AddFilled', '1em', ['filled']);",
  "export const AddRegular = createFluentIcon('AddRegular', '1em', ['regular']);",
].join('\n');

function runLoader(resourcePath: string, resourceQuery: string, compilation: unknown = {}) {
  let result: { error?: Error | null; code?: string } = {};
  const context: AtomicLoaderContext = {
    resourcePath,
    resourceQuery,
    _compilation: compilation,
    getOptions: () => ({ moduleGranularity: 'icon' }),
    emitWarning: () => undefined,
    callback: (error, code) => {
      result = { error, code: typeof code === 'string' ? code : undefined };
    },
  };
  loader.call(context, source);
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
});
