import { parseSync } from 'oxc-parser';
import MagicString from 'magic-string';

import {
  getModuleDescriptor,
  resolveModuleVariant,
  resolveColorVariant,
  resolveModuleHeadless,
  isColorIconName,
  SUPPORTED_MODULE_NAMES,
} from './modules';
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

  const { staticImports, staticExports, dynamicImports } = result.module;
  const src = new MagicString(source);

  const diagnostics: Diagnostic[] = [];
  // Dedupe diagnostics by message so a module's variant / color / headless
  // concern surfaces at most once, even though resolution now runs per
  // (module, color-ness) rather than per module.
  const seenDiagnostics = new Set<string>();
  const pushDiagnostic = (diagnostic: Diagnostic): void => {
    const key = `${diagnostic.level}:${diagnostic.message}`;
    if (seenDiagnostics.has(key)) return;
    seenDiagnostics.add(key);
    diagnostics.push(diagnostic);
  };

  // Resolve each referenced module at most once per color-ness: color icons may
  // route to a different variant than their non-color siblings, so the cache key
  // is `${name}:${isColor}`. Resolution stays O(#modules × 2) regardless of how
  // many icons a file imports.
  const resolvedTargets = new Map<string, ResolvedTarget | null>();

  /**
   * Returns the target (variant + headless) to rewrite a single referenced
   * import with, or `null` when the module could not be resolved (an error
   * diagnostic has been recorded and the import should be left untouched).
   */
  const targetFor = (descriptor: ModuleDescriptor, isColor: boolean): ResolvedTarget | null => {
    const cacheKey = `${descriptor.name}:${isColor}`;
    if (resolvedTargets.has(cacheKey)) {
      return resolvedTargets.get(cacheKey)!;
    }

    const resolution = resolveModuleVariant(descriptor, iconVariant, fallbackVariant);

    if (resolution.warning) {
      pushDiagnostic({ level: 'warning', message: resolution.warning });
    }
    if (resolution.error) {
      pushDiagnostic({ level: 'error', message: resolution.error });
    }

    if (!resolution.variant) {
      resolvedTargets.set(cacheKey, null);
      return null;
    }

    let variant = resolution.variant;

    // Color icons are SVG-only; reroute them off any color-less variant (fonts)
    // to a color-capable one, honoring the fallback precedence.
    if (isColor) {
      const colorResolution = resolveColorVariant(descriptor, variant, iconVariant, fallbackVariant);
      if (colorResolution.warning) {
        pushDiagnostic({ level: 'warning', message: colorResolution.warning });
      }
      variant = colorResolution.variant;
    }

    const headlessResolution = resolveModuleHeadless(descriptor, variant, headless);
    if (headlessResolution.warning) {
      pushDiagnostic({ level: 'warning', message: headlessResolution.warning });
    }

    const target: ResolvedTarget = { variant, headless: headlessResolution.headless };
    resolvedTargets.set(cacheKey, target);
    return target;
  };

  for (const imp of staticImports) {
    const moduleName = imp.moduleRequest.value;
    const descriptor = getModuleDescriptor(moduleName);
    if (!descriptor) continue;

    const namedEntries = imp.entries.filter((e) => e.importName.kind === 'Name');
    if (namedEntries.length === 0) continue;

    // Resolve each named specifier independently — color icons may route to a
    // different variant than their non-color siblings in the same statement.
    const resolvedEntries = namedEntries.map((entry) => ({
      entry,
      importedName: entry.importName.name!,
      target: targetFor(descriptor, isColorIconName(entry.importName.name!)),
    }));

    // A module-level resolution error is independent of color-ness, so if any
    // specifier is unresolved they all are — leave the whole statement untouched.
    if (resolvedEntries.some(({ target }) => !target)) continue;

    const otherEntries = imp.entries.filter((e) => e.importName.kind !== 'Name');
    const lines: string[] = [];

    if (otherEntries.length > 0) {
      const names = otherEntries
        .map((e) => (e.importName.kind === 'Default' ? e.localName.value : `* as ${e.localName.value}`))
        .join(', ');
      lines.push(`import ${names} from '${moduleName}';`);
    }

    for (const { entry, importedName, target } of resolvedEntries) {
      const localName = entry.localName.value;
      const newSource = descriptor.resolve(importedName, target!.variant, target!.headless);
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
      const importedName = entry.importName.name!;
      const target = targetFor(descriptor, isColorIconName(importedName));
      if (!target) continue;

      const exportedName = entry.exportName.name!;
      const newSource = descriptor.resolve(importedName, target.variant, target.headless);
      const spec = importedName === exportedName ? importedName : `${importedName} as ${exportedName}`;
      lines.push(`export { ${spec} } from '${newSource}';`);
    }

    if (lines.length === 0) continue;

    src.overwrite(exp.start, exp.end, lines.join('\n'));
  }

  // Dynamic imports of a barrel (`import('@fluentui/react-icons')`) cannot be
  // atomized: the returned namespace object is a runtime value whose usage is
  // not statically known, so the whole icon set ends up in the async chunk. We
  // can't rewrite it safely, but we can warn and point at the atomic escape
  // hatch (`import('@fluentui/react-icons/svg/add')`). Atomic and subpath
  // requests don't match a barrel descriptor, so they never warn.
  for (const dyn of dynamicImports) {
    const request = dyn.moduleRequest;
    if (!request) continue;

    // Unlike static imports, oxc doesn't resolve a dynamic import's argument to a
    // specifier value — it's an arbitrary expression. Match the raw span against
    // each supported module's quoted spellings; this naturally ignores variables,
    // interpolated templates, and subpath/atomic requests (module names never
    // contain quotes).
    const raw = source.slice(request.start, request.end);
    const moduleName = SUPPORTED_MODULE_NAMES.find(
      (name) => raw === `'${name}'` || raw === `"${name}"` || raw === `\`${name}\``,
    );
    if (!moduleName) continue;

    pushDiagnostic({
      level: 'warning',
      message:
        `dynamic import of the "${moduleName}" barrel cannot be atomized, so the entire icon ` +
        `set will be bundled into the async chunk. Import an atomic path directly instead, ` +
        `e.g. import('${moduleName}/svg/add').`,
    });
  }

  return {
    code: src.toString(),
    map: src.generateMap({ hires: true }),
    diagnostics,
  };
}
