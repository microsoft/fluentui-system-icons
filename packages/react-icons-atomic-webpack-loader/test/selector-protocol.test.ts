import { describe, expect, it } from 'vitest';

import {
  assertSelectableResource,
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
    '?__fluentIcon',
    '?foo=1&__fluentIcon',
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
    expect(parseSelectorQuery('?__fluentIconExtra')).toBeNull();
  });

  it('rejects invalid decoded identifiers', () => {
    expect(() => decodeExportName(Buffer.from('not-an-identifier!', 'utf8').toString('hex'))).toThrow(
      'valid JavaScript identifier',
    );
  });
});

describe('selected ESM emission', () => {
  const source = [
    '"use client";',
    "import { createFluentIcon } from '../../utils/createFluentIcon.js';",
    "export const AddFilled = createFluentIcon('AddFilled', '1em', ['filled']);",
    "export const AddRegular = createFluentIcon('AddRegular', '1em', ['regular']);",
  ].join('\n');

  const selectExport = (resourcePath: string, moduleSource: string, exportName: string) => {
    const selector = { kind: 'export', exportName } as const;
    assertSelectableResource(resourcePath, selector);
    return selectExports(moduleSource, resourcePath, selector).code;
  };

  it('preserves directives and imports for a selected system icon declaration', () => {
    expect(
      selectExport('/app/node_modules/@fluentui/react-icons/lib/atoms/svg/add.js', source, 'AddFilled'),
    ).toMatchInlineSnapshot(
      `""use client";import { createFluentIcon } from '../../utils/createFluentIcon.js';export const AddFilled = createFluentIcon('AddFilled', '1em', ['filled']);"`,
    );
  });

  it('preserves directives and imports for a selected brand icon declaration', () => {
    const brandSource = [
      '"use client";',
      "import { createFluentIcon } from '../../utils/createFluentIcon.js';",
      "export const ProjectColor = createFluentIcon('ProjectColor', '1em', ['color']);",
      "export const ProjectRegular = createFluentIcon('ProjectRegular', '1em', ['regular']);",
    ].join('\n');
    expect(
      selectExport(
        '/app/node_modules/@fluentui/react-brand-icons/lib/atoms/svg/project.js',
        brandSource,
        'ProjectColor',
      ),
    ).toMatchInlineSnapshot(
      `""use client";import { createFluentIcon } from '../../utils/createFluentIcon.js';export const ProjectColor = createFluentIcon('ProjectColor', '1em', ['color']);"`,
    );
  });

  it('emits groups as re-exports from canonical per-icon selector modules', () => {
    const resourcePath = '/app/node_modules/@fluentui/react-icons/lib/atoms/svg/add.js';
    const result = selectExports(source, resourcePath, {
      kind: 'group',
      exportNames: ['AddFilled', 'AddRegular'],
    });
    expect(result.code).toMatchInlineSnapshot(`
      "export { AddFilled } from './add.js?__fluentIcon=v1&export=41646446696c6c6564';
      export { AddRegular } from './add.js?__fluentIcon=v1&export=416464526567756c6172';"
    `);
  });

  it('rejects declarations that reference another module-level binding', () => {
    const resourcePath = '/app/node_modules/@fluentui/react-icons/lib/atoms/svg/add.js';
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
