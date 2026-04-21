import { parseSync } from 'oxc-parser';
import type { StaticImport, StaticExport } from 'oxc-parser';
import MagicString from 'magic-string';

const MODULE_NAME = '@fluentui/react-icons';
const ICON_SUFFIX_REGEX = /(\d*)?(Regular|Filled|Light|Color)$/;

interface TransformOptions {
  iconVariant: 'svg' | 'fonts' | 'svg-sprite';
  path: string;
}

function getAtomicImportPath(importName: string, iconVariant: 'svg' | 'fonts' | 'svg-sprite'): string {
  if (importName === 'useIconContext' || importName === 'IconDirectionContextProvider') {
    return '@fluentui/react-icons/providers';
  }

  const isIcon = importName.match(ICON_SUFFIX_REGEX);

  if (!isIcon) {
    return '@fluentui/react-icons/utils';
  }

  const withoutSuffix = importName.replace(ICON_SUFFIX_REGEX, '');
  const kebabCase = withoutSuffix.replace(/[a-z\d](?=[A-Z])|[a-zA-Z](?=\d)|[A-Z](?=[A-Z][a-z])/g, '$&-').toLowerCase();

  return `@fluentui/react-icons/${iconVariant}/${kebabCase}`;
}

export interface TransformResult {
  code: string;
  map: ReturnType<MagicString['generateMap']>;
}

export function transformSource(source: string, options: TransformOptions): TransformResult {
  const { iconVariant, path } = options;

  const result = parseSync(path, source, {
    sourceType: 'module',
  });

  if (result.errors.length > 0) {
    throw new Error(result.errors[0].message);
  }

  const { staticImports, staticExports } = result.module;
  const src = new MagicString(source);

  for (const imp of staticImports) {
    if (imp.moduleRequest.value !== MODULE_NAME) continue;

    const namedEntries = imp.entries.filter((e) => e.importName.kind === 'Name');
    if (namedEntries.length === 0) continue;

    const otherEntries = imp.entries.filter((e) => e.importName.kind !== 'Name');
    const lines: string[] = [];

    if (otherEntries.length > 0) {
      const names = otherEntries
        .map((e) => (e.importName.kind === 'Default' ? e.localName.value : `* as ${e.localName.value}`))
        .join(', ');
      lines.push(`import ${names} from '${MODULE_NAME}';`);
    }

    for (const entry of namedEntries) {
      const importedName = entry.importName.name!;
      const localName = entry.localName.value;
      const newSource = getAtomicImportPath(importedName, iconVariant);
      const spec = importedName === localName ? importedName : `${importedName} as ${localName}`;
      lines.push(`import { ${spec} } from '${newSource}';`);
    }

    src.overwrite(imp.start, imp.end, lines.join('\n'));
  }

  for (const exp of staticExports) {
    const relevantEntries = exp.entries.filter(
      (e) => e.moduleRequest?.value === MODULE_NAME && e.exportName.kind === 'Name',
    );
    if (relevantEntries.length === 0) continue;

    const lines: string[] = [];

    for (const entry of relevantEntries) {
      const importedName = entry.importName.name!;
      const exportedName = entry.exportName.name!;
      const newSource = getAtomicImportPath(importedName, iconVariant);
      const spec = importedName === exportedName ? importedName : `${importedName} as ${exportedName}`;
      lines.push(`export { ${spec} } from '${newSource}';`);
    }

    src.overwrite(exp.start, exp.end, lines.join('\n'));
  }

  return {
    code: src.toString(),
    map: src.generateMap({ hires: true }),
  };
}
