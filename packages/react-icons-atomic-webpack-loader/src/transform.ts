import { parseSync } from 'oxc-parser';
import MagicString from 'magic-string';

import { getModuleDescriptor, resolveModuleVariant, resolveModuleHeadless } from './modules';
import type { IconVariant, ModuleDescriptor } from './modules';

interface TransformOptions {
  /** The requested icon variant. Applied to every supported module. */
  iconVariant: IconVariant;
  /** The variant to fall back to when a module does not support `iconVariant`. */
  fallbackVariant?: IconVariant;
  /** Resolve to the headless (Griffel-free) build where the module supports it. */
  headless?: boolean;
  path: string;
}

export interface Diagnostic {
  level: 'error' | 'warning';
  message: string;
}

export interface TransformResult {
  code: string;
  map: ReturnType<MagicString['generateMap']>;
  /**
   * Diagnostics gathered while rewriting. Only modules that are actually
   * imported/re-exported (as reported by the parsed module record) contribute
   * diagnostics, so mentions in comments or string literals never trigger one.
   */
  diagnostics: Diagnostic[];
}

/** A module's resolved rewrite target: the icon variant and whether to use its headless build. */
type ResolvedTarget = { variant: IconVariant; headless: boolean };

export function transformSource(source: string, options: TransformOptions): TransformResult {
  const { iconVariant, fallbackVariant, headless = false, path } = options;

  const result = parseSync(path, source, {
    sourceType: 'module',
  });

  if (result.errors.length > 0) {
    throw new Error(result.errors[0].message);
  }

  const { staticImports, staticExports } = result.module;
  const src = new MagicString(source);

  const diagnostics: Diagnostic[] = [];
  // Resolve (and diagnose) each referenced module at most once.
  const resolvedTargets = new Map<string, ResolvedTarget | null>();

  /**
   * Returns the target (variant + headless) to rewrite a referenced module
   * with, or `null` when it could not be resolved (an error diagnostic has been
   * recorded and the module should be left untouched).
   */
  const targetFor = (descriptor: ModuleDescriptor): ResolvedTarget | null => {
    if (resolvedTargets.has(descriptor.name)) {
      return resolvedTargets.get(descriptor.name)!;
    }

    const resolution = resolveModuleVariant(descriptor, iconVariant, fallbackVariant);

    if (resolution.warning) {
      diagnostics.push({ level: 'warning', message: resolution.warning });
    }
    if (resolution.error) {
      diagnostics.push({ level: 'error', message: resolution.error });
    }

    if (!resolution.variant) {
      resolvedTargets.set(descriptor.name, null);
      return null;
    }

    const headlessResolution = resolveModuleHeadless(descriptor, resolution.variant, headless);
    if (headlessResolution.warning) {
      diagnostics.push({ level: 'warning', message: headlessResolution.warning });
    }

    const target: ResolvedTarget = { variant: resolution.variant, headless: headlessResolution.headless };
    resolvedTargets.set(descriptor.name, target);
    return target;
  };

  for (const imp of staticImports) {
    const moduleName = imp.moduleRequest.value;
    const descriptor = getModuleDescriptor(moduleName);
    if (!descriptor) continue;

    const variant = targetFor(descriptor);
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
      const newSource = descriptor.resolve(importedName, variant.variant, variant.headless);
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
      const variant = targetFor(descriptor);
      if (!variant) continue;

      const importedName = entry.importName.name!;
      const exportedName = entry.exportName.name!;
      const newSource = descriptor.resolve(importedName, variant.variant, variant.headless);
      const spec = importedName === exportedName ? importedName : `${importedName} as ${exportedName}`;
      lines.push(`export { ${spec} } from '${newSource}';`);
    }

    if (lines.length === 0) continue;

    src.overwrite(exp.start, exp.end, lines.join('\n'));
  }

  return {
    code: src.toString(),
    map: src.generateMap({ hires: true }),
    diagnostics,
  };
}
