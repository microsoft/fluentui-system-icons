import * as acorn from 'acorn';
import tsPlugin from 'acorn-typescript';
import MagicString from 'magic-string';
import type { ImportDeclaration, ExportNamedDeclaration, ImportSpecifier, ExportSpecifier } from 'estree';

type AcornPlugin = (BaseParser: typeof acorn.Parser) => typeof acorn.Parser;

const MODULE_NAME = '@fluentui/react-icons';
const ICON_SUFFIX_REGEX = /(\d*)?(Regular|Filled|Light|Color)$/;

interface TransformOptions {
  iconVariant: 'svg' | 'fonts';
  isTypescript: boolean;
  isTsx: boolean;
}

function getAtomicImportPath(importName: string, iconVariant: 'svg' | 'fonts'): string {
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

function getName(node: { type: string; name?: string; value?: unknown }): string {
  return (node.name ?? String(node.value))!;
}

function getParser(options: TransformOptions) {
  if (!options.isTypescript) {
    return acorn.Parser;
  }

  const plugin = tsPlugin(options.isTsx ? { jsx: {} } : undefined) as unknown as AcornPlugin;
  return acorn.Parser.extend(plugin);
}

export interface TransformResult {
  code: string;
  map: ReturnType<MagicString['generateMap']>;
}

export function transformSource(source: string, options: TransformOptions): TransformResult {
  const parser = getParser(options);

  const ast = parser.parse(source, {
    sourceType: 'module',
    ecmaVersion: 'latest',
    locations: false,
  });

  const src = new MagicString(source);

  for (const node of ast.body) {
    if (node.type === 'ImportDeclaration') {
      const n = node as unknown as ImportDeclaration & { start: number; end: number };

      if (n.source.value !== MODULE_NAME) {
        continue;
      }

      const memberImports = n.specifiers.filter((s): s is ImportSpecifier => s.type === 'ImportSpecifier');

      if (memberImports.length === 0) {
        continue;
      }

      const fullImports = n.specifiers.filter((s) => s.type !== 'ImportSpecifier');
      const lines: string[] = [];

      if (fullImports.length > 0) {
        const names = fullImports
          .map((s) => (s.type === 'ImportDefaultSpecifier' ? s.local.name : `* as ${s.local.name}`))
          .join(', ');
        lines.push(`import ${names} from '${MODULE_NAME}';`);
      }

      for (const specifier of memberImports) {
        const importedName = getName(specifier.imported);
        const localName = specifier.local.name;
        const newSource = getAtomicImportPath(importedName, options.iconVariant);
        const spec = importedName === localName ? importedName : `${importedName} as ${localName}`;
        lines.push(`import { ${spec} } from '${newSource}';`);
      }

      src.overwrite(n.start, n.end, lines.join('\n'));
    }

    if (node.type === 'ExportNamedDeclaration') {
      const n = node as unknown as ExportNamedDeclaration & { start: number; end: number };

      if (!n.source || n.source.value !== MODULE_NAME) {
        continue;
      }

      const specifiers = n.specifiers.filter((s): s is ExportSpecifier => s.type === 'ExportSpecifier');

      if (specifiers.length === 0) {
        continue;
      }

      const lines: string[] = [];

      for (const specifier of specifiers) {
        const localName = getName(specifier.local);
        const exportedName = getName(specifier.exported);
        const newSource = getAtomicImportPath(localName, options.iconVariant);
        const spec = localName === exportedName ? localName : `${localName} as ${exportedName}`;
        lines.push(`export { ${spec} } from '${newSource}';`);
      }

      src.overwrite(n.start, n.end, lines.join('\n'));
    }
  }

  return {
    code: src.toString(),
    map: src.generateMap({ hires: true }),
  };
}
