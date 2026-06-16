import { parseSync } from 'oxc-parser';
import MagicString from 'magic-string';

import { getModuleDescriptor } from './modules';
import type { IconVariant } from './modules';

interface TransformOptions {
  /**
   * The resolved icon variant per module specifier. Only modules present in
   * this map are rewritten; any other module is left untouched.
   */
  variants: Record<string, IconVariant>;
  path: string;
}

export interface TransformResult {
  code: string;
  map: ReturnType<MagicString['generateMap']>;
}

export function transformSource(source: string, options: TransformOptions): TransformResult {
  const { variants, path } = options;

  const result = parseSync(path, source, {
    sourceType: 'module',
  });

  if (result.errors.length > 0) {
    throw new Error(result.errors[0].message);
  }

  const { staticImports, staticExports } = result.module;
  const src = new MagicString(source);

  for (const imp of staticImports) {
    const moduleName = imp.moduleRequest.value;
    const descriptor = getModuleDescriptor(moduleName);
    if (!descriptor) continue;

    const variant = variants[moduleName];
    if (!variant) continue;

    const namedEntries = imp.entries.filter((e) => e.importName.kind === 'Name');
    if (namedEntries.length === 0) continue;

    const otherEntries = imp.entries.filter((e) => e.importName.kind !== 'Name');
    const lines: string[] = [];

    if (otherEntries.length > 0) {
      const names = otherEntries
        .map((e) => (e.importName.kind === 'Default' ? e.localName.value : `* as ${e.localName.value}`))
        .join(', ');
      lines.push(`import ${names} from '${moduleName}';`);
    }

    for (const entry of namedEntries) {
      const importedName = entry.importName.name!;
      const localName = entry.localName.value;
      const newSource = descriptor.resolve(importedName, variant);
      const spec = importedName === localName ? importedName : `${importedName} as ${localName}`;
      lines.push(`import { ${spec} } from '${newSource}';`);
    }

    src.overwrite(imp.start, imp.end, lines.join('\n'));
  }

  for (const exp of staticExports) {
    const relevantEntries = exp.entries.filter(
      (e) => e.moduleRequest && getModuleDescriptor(e.moduleRequest.value) && e.exportName.kind === 'Name',
    );
    if (relevantEntries.length === 0) continue;

    // Skip indirect re-exports (`import { X } from '...'; export { X };`): oxc reports these as static
    // exports anchored at the originating `import` statement. The import loop above has already
    // rewritten that range, so emitting again here would produce duplicate declarations.
    if (source.startsWith('import', exp.start)) continue;

    const lines: string[] = [];

    for (const entry of relevantEntries) {
      const moduleName = entry.moduleRequest!.value;
      const descriptor = getModuleDescriptor(moduleName)!;
      const variant = variants[moduleName];
      if (!variant) continue;

      const importedName = entry.importName.name!;
      const exportedName = entry.exportName.name!;
      const newSource = descriptor.resolve(importedName, variant);
      const spec = importedName === exportedName ? importedName : `${importedName} as ${exportedName}`;
      lines.push(`export { ${spec} } from '${newSource}';`);
    }

    if (lines.length === 0) continue;

    src.overwrite(exp.start, exp.end, lines.join('\n'));
  }

  return {
    code: src.toString(),
    map: src.generateMap({ hires: true }),
  };
}
