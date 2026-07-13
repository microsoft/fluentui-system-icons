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
  /**
   * Rewrite a narrow, statically-provable subset of dynamic `import()` barrel
   * calls into atomic dynamic imports (see {@link rewriteDynamicImports}).
   * Defaults to `false`. Un-rewritable dynamic barrel imports still warn.
   */
  allowDynamicImports?: boolean;
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

/** A minimal AST node view — oxc emits ESTree-shaped nodes with `type` + spans. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AstNode = any;

/** Depth-first walk over the oxc AST, invoking `visit` on every node with a `type`. */
function walkAst(node: AstNode, visit: (n: AstNode) => void): void {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (const child of node) walkAst(child, visit);
    return;
  }
  if (typeof node.type === 'string') visit(node);
  for (const key in node) {
    if (key === 'type' || key === 'start' || key === 'end' || key === 'range' || key === 'loc') continue;
    walkAst(node[key], visit);
  }
}

/** One atom's worth of destructured specifiers, e.g. `{ source, specs: ['AddFilled', 'AddRegular'] }`. */
type RewriteGroup = { source: string; specs: string[] };

export function transformSource(source: string, options: TransformOptions): TransformResult {
  const { iconVariant, fallbackVariant, headless = false, allowDynamicImports = false, path } = options;

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

  // Source-literal start offsets of dynamic imports that were atomized below.
  // Used to suppress the "cannot be atomized" warning for imports we rewrote.
  const rewrittenImportStarts = new Set<number>();

  if (allowDynamicImports) {
    // Resolve a single destructured name to its atomic subpath, or `null` when
    // the owning module can't be resolved (an error diagnostic is recorded).
    const resolveNameSource = (descriptor: ModuleDescriptor, importedName: string): string | null => {
      const target = targetFor(descriptor, isColorIconName(importedName));
      if (!target) return null;
      return descriptor.resolve(importedName, target.variant, target.headless);
    };

    // Turn an object pattern (`{ AddFilled, ArrowLeftRegular: arrow }`) into atom
    // groups, or `null` when any property is not a plain, statically-known
    // name→binding pair (rest, computed, default, nested pattern, string key…).
    const buildGroups = (objectPattern: AstNode, descriptor: ModuleDescriptor): RewriteGroup[] | null => {
      const bySource = new Map<string, string[]>();
      const order: string[] = [];

      for (const prop of objectPattern.properties) {
        if (prop.type !== 'Property' || prop.computed || prop.kind !== 'init') return null;
        if (prop.key?.type !== 'Identifier' || prop.value?.type !== 'Identifier') return null;

        const importedName: string = prop.key.name;
        const localName: string = prop.value.name;
        const resolvedSource = resolveNameSource(descriptor, importedName);
        if (resolvedSource === null) return null;

        const spec = importedName === localName ? importedName : `${importedName}: ${localName}`;
        if (!bySource.has(resolvedSource)) {
          bySource.set(resolvedSource, []);
          order.push(resolvedSource);
        }
        bySource.get(resolvedSource)!.push(spec);
      }

      if (order.length === 0) return null;
      return order.map((groupSource) => ({ source: groupSource, specs: bySource.get(groupSource)! }));
    };

    const importCallText = (groups: RewriteGroup[]): string =>
      groups.length === 1
        ? `import('${groups[0].source}')`
        : `Promise.all([${groups.map((g) => `import('${g.source}')`).join(', ')}])`;

    const patternText = (groups: RewriteGroup[]): string =>
      groups.length === 1
        ? `{ ${groups[0].specs.join(', ')} }`
        : `[${groups.map((g) => `{ ${g.specs.join(', ')} }`).join(', ')}]`;

    walkAst(result.program, (node) => {
      // `const { A, B } = await import('barrel')`
      if (
        node.type === 'VariableDeclarator' &&
        node.id?.type === 'ObjectPattern' &&
        node.init?.type === 'AwaitExpression' &&
        node.init.argument?.type === 'ImportExpression' &&
        node.init.argument.source?.type === 'Literal'
      ) {
        const importExpr = node.init.argument;
        const descriptor = getModuleDescriptor(importExpr.source.value);
        if (!descriptor) return;

        const groups = buildGroups(node.id, descriptor);
        if (!groups) return;

        src.overwrite(node.start, node.end, `${patternText(groups)} = await ${importCallText(groups)}`);
        rewrittenImportStarts.add(importExpr.source.start);
        return;
      }

      // `import('barrel').then(({ A, B }) => …)`
      if (
        node.type === 'CallExpression' &&
        node.callee?.type === 'MemberExpression' &&
        !node.callee.computed &&
        node.callee.property?.type === 'Identifier' &&
        node.callee.property.name === 'then' &&
        node.callee.object?.type === 'ImportExpression' &&
        node.callee.object.source?.type === 'Literal'
      ) {
        const importExpr = node.callee.object;
        const descriptor = getModuleDescriptor(importExpr.source.value);
        if (!descriptor) return;

        const callback = node.arguments?.[0];
        if (!callback || (callback.type !== 'ArrowFunctionExpression' && callback.type !== 'FunctionExpression'))
          return;

        const param = callback.params?.[0];
        if (param?.type !== 'ObjectPattern') return;

        const groups = buildGroups(param, descriptor);
        if (!groups) return;

        src.overwrite(importExpr.start, importExpr.end, importCallText(groups));
        // Multiple atoms resolve to an array, so the callback must destructure by
        // position instead of by name.
        if (groups.length > 1) {
          src.overwrite(param.start, param.end, patternText(groups));
        }
        rewrittenImportStarts.add(importExpr.source.start);
        return;
      }
    });
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

    // Skip imports we already atomized above (their usage was statically provable).
    if (rewrittenImportStarts.has(request.start)) continue;

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
