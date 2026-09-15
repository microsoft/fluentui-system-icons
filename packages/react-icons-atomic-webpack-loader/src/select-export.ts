import { createHash } from 'crypto';
import { basename } from 'path';
import { parseSync } from 'oxc-parser';
import type { Statement } from 'oxc-parser';
import MagicString from 'magic-string';

import { createExportSelector, SELECTOR_CACHE_SALT, type Selector } from './selector-protocol';

interface Range {
  start: number;
  end: number;
}

interface StructuralModule {
  preservedRanges: Range[];
  exports: Map<string, Range>;
  dependencies: Map<string, string[]>;
}

const MAX_CACHE_ENTRIES = 256;
const structuralCache = new Map<string, StructuralModule>();

export function selectExports(
  source: string,
  resourcePath: string,
  selector: Selector,
): { code: string; map: ReturnType<MagicString['generateMap']> } {
  if (selector.kind === 'group') {
    const filename = basename(resourcePath);
    const code = selector.exportNames
      .map((exportName) => `export { ${exportName} } from './${filename}${createExportSelector(exportName)}';`)
      .join('\n');
    const generated = new MagicString(code);
    return { code, map: generated.generateMap({ hires: true, source: resourcePath, includeContent: true }) };
  }

  const structure = getStructure(source, resourcePath);
  const selectedRange = structure.exports.get(selector.exportName);
  if (!selectedRange) {
    throw new Error(`export "${selector.exportName}" was not found in "${resourcePath}"`);
  }

  const dependencies = structure.dependencies.get(selector.exportName) ?? [];
  if (dependencies.length > 0) {
    throw new Error(
      `export "${selector.exportName}" in "${resourcePath}" depends on non-import module binding(s): ` +
        dependencies.join(', '),
    );
  }

  const src = new MagicString(source);
  const retained = [...structure.preservedRanges, selectedRange].sort((a, b) => a.start - b.start);
  let cursor = 0;
  for (const range of retained) {
    if (cursor < range.start) {
      src.remove(cursor, range.start);
    }
    cursor = range.end;
  }
  if (cursor < source.length) {
    src.remove(cursor, source.length);
  }

  return {
    code: src.toString(),
    map: src.generateMap({ hires: true, source: resourcePath, includeContent: true }),
  };
}

function getStructure(source: string, resourcePath: string): StructuralModule {
  const hash = createHash('sha256').update(SELECTOR_CACHE_SALT).update('\0').update(source).digest('hex');
  const key = `${resourcePath}\0${hash}`;
  const cached = structuralCache.get(key);
  if (cached) {
    structuralCache.delete(key);
    structuralCache.set(key, cached);
    return cached;
  }

  const parsed = parseSync(resourcePath, source, { sourceType: 'module' });
  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0].message);
  }

  const preservedRanges: Range[] = [];
  const exports = new Map<string, Range>();
  const moduleBindings = new Set<string>();

  for (const statement of parsed.program.body) {
    if (isDirective(statement) || statement.type === 'ImportDeclaration') {
      preservedRanges.push({ start: statement.start, end: statement.end });
      continue;
    }

    if (statement.type !== 'ExportNamedDeclaration' || statement.declaration?.type !== 'VariableDeclaration') {
      collectTopLevelBindings(statement, moduleBindings);
      continue;
    }

    if (statement.declaration.declarations.length !== 1) {
      throw new Error(`generated export declarations in "${resourcePath}" must declare exactly one binding`);
    }
    const declaration = statement.declaration.declarations[0];
    if (declaration.id.type !== 'Identifier') {
      throw new Error(`generated export declarations in "${resourcePath}" must use identifier bindings`);
    }
    exports.set(declaration.id.name, {
      start: getLeadingCommentStart(source, parsed.comments, statement.start),
      end: statement.end,
    });
    moduleBindings.add(declaration.id.name);
  }

  const references: Array<{ name: string; start: number }> = [];
  collectIdentifiers(parsed.program, references);

  const dependencies = new Map<string, string[]>();
  for (const [exportName, range] of exports) {
    const externalBindings = references
      .filter((reference) => reference.start >= range.start && reference.start < range.end)
      .map((reference) => reference.name)
      .filter((name) => name !== exportName && moduleBindings.has(name));
    dependencies.set(exportName, Array.from(new Set(externalBindings)).sort());
  }

  const structure = { preservedRanges, exports, dependencies };
  structuralCache.set(key, structure);
  if (structuralCache.size > MAX_CACHE_ENTRIES) {
    structuralCache.delete(structuralCache.keys().next().value!);
  }

  function getLeadingCommentStart(
    source: string,
    comments: Array<{ start: number; end: number }>,
    statementStart: number,
  ): number {
    let start = statementStart;
    for (let index = comments.length - 1; index >= 0; index--) {
      const comment = comments[index];
      if (comment.end > start) continue;
      if (source.slice(comment.end, start).trim() !== '') break;
      start = comment.start;
    }
    return start;
  }

  function collectIdentifiers(value: unknown, references: Array<{ name: string; start: number }>): void {
    if (!value || typeof value !== 'object') {
      return;
    }
    const node = value as Record<string, unknown>;
    if (node.type === 'Identifier' && typeof node.name === 'string' && typeof node.start === 'number') {
      references.push({ name: node.name, start: node.start });
    }
    for (const [key, child] of Object.entries(node)) {
      if (key === 'parent') continue;
      if (Array.isArray(child)) {
        for (const item of child) collectIdentifiers(item, references);
      } else {
        collectIdentifiers(child, references);
      }
    }
  }
  return structure;
}

function isDirective(statement: Statement): boolean {
  return statement.type === 'ExpressionStatement' && typeof statement.directive === 'string';
}

function collectTopLevelBindings(statement: Statement, bindings: Set<string>): void {
  const declaration =
    statement.type === 'ExportNamedDeclaration' && statement.declaration ? statement.declaration : statement;
  if (declaration.type === 'VariableDeclaration') {
    for (const declarator of declaration.declarations) {
      if (declarator.id.type === 'Identifier') {
        bindings.add(declarator.id.name);
      }
    }
  } else if (
    (declaration.type === 'FunctionDeclaration' || declaration.type === 'ClassDeclaration') &&
    declaration.id
  ) {
    bindings.add(declaration.id.name);
  }
}
