import { describe, expect, it } from 'vitest';

import {
  createExportSelector,
  createGroupSelector,
  decodeExportName,
  parseSelectorQuery,
} from '../src/selector-protocol';
import { selectExports } from '../src/select-export';

describe('selector protocol', () => {
  it('serializes export names as canonical lowercase UTF-8 hex', () => {
    const query = createExportSelector('Prompt16Regular');
    expect(query).toBe('?__fluentIcon=v1&export=50726f6d70743136526567756c6172');
    expect(parseSelectorQuery(query)).toEqual({ kind: 'export', exportName: 'Prompt16Regular' });
  });

  it('sorts and deduplicates group selectors', () => {
    const query = createGroupSelector(['AddRegular', 'AddFilled', 'AddRegular']);
    expect(query).toBe('?__fluentIcon=v1&group=41646446696c6c6564.416464526567756c6172');
    expect(parseSelectorQuery(query)).toEqual({
      kind: 'group',
      exportNames: ['AddFilled', 'AddRegular'],
    });
  });

  it('accepts the export-map target suffix added by webpack and rspack', () => {
    expect(parseSelectorQuery(`${createExportSelector('AddFilled')}.js`)).toEqual({
      kind: 'export',
      exportName: 'AddFilled',
    });
  });

  it.each([
    '?__fluentIcon=v2&export=41646446696c6c6564',
    '?__fluentIcon=v1&export=ADD',
    '?__fluentIcon=v1&export=41646446696c6c6564&extra=1',
    '?__fluentIcon=v1&export=41646446696c6c6564&export=416464526567756c6172',
    '?__fluentIcon=v1&group=416464526567756c6172.41646446696c6c6564',
  ])('rejects malformed or non-canonical selector %s', (query) => {
    expect(() => parseSelectorQuery(query)).toThrow();
  });

  it('ignores unrelated resource queries', () => {
    expect(parseSelectorQuery('?raw')).toBeNull();
  });

  it('rejects invalid decoded identifiers', () => {
    expect(() => decodeExportName(Buffer.from('not-an-identifier!', 'utf8').toString('hex'))).toThrow(
      'valid JavaScript identifier',
    );
  });
});

describe('selected ESM emission', () => {
  const resourcePath = '/app/node_modules/@fluentui/react-icons/lib/atoms/svg/add.js';

  it('preserves directives and imports while emitting exactly one declaration', () => {
    const source = [
      '"use client";',
      "import { createFluentIcon } from '../../utils/createFluentIcon.js';",
      "export const AddFilled = createFluentIcon('AddFilled', '1em', ['filled']);",
      "export const AddRegular = createFluentIcon('AddRegular', '1em', ['regular']);",
    ].join('\n');

    const result = selectExports(source, resourcePath, { kind: 'export', exportName: 'AddFilled' });
    expect(result.code).toContain('"use client"');
    expect(result.code).toContain('createFluentIcon');
    expect(result.code).toContain('export const AddFilled');
    expect(result.code).not.toContain('export const AddRegular');
  });

  it('emits groups as re-exports from canonical per-icon selector modules', () => {
    const result = selectExports('', resourcePath, {
      kind: 'group',
      exportNames: ['AddFilled', 'AddRegular'],
    });
    expect(result.code).toContain(`export { AddFilled } from './add.js${createExportSelector('AddFilled')}';`);
    expect(result.code).toContain(`export { AddRegular } from './add.js${createExportSelector('AddRegular')}';`);
    expect(result.code).not.toContain('export *');
  });

  it('rejects declarations that reference another module-level binding', () => {
    const source = [
      "import { createFluentIcon } from '../../utils/createFluentIcon.js';",
      "const shared = ['path'];",
      "export const AddFilled = createFluentIcon('AddFilled', '1em', shared);",
    ].join('\n');

    expect(() => selectExports(source, resourcePath, { kind: 'export', exportName: 'AddFilled' })).toThrow(
      'depends on non-import module binding(s): shared',
    );
  });
});
