export type IconVariant = 'svg' | 'fonts' | 'svg-sprite';

/**
 * The variant used as the ultimate safety net when neither the requested
 * `iconVariant` nor the configured `fallbackVariant` is supported by a module.
 * Every module supports `svg`, so it is always a valid resolution target.
 */
export const DEFAULT_SAFETY_VARIANT: IconVariant = 'svg';

const ICON_SUFFIX_REGEX = /(\d*)?(Regular|Filled|Light|Color)$/;

function isIconName(importName: string): boolean {
  return ICON_SUFFIX_REGEX.test(importName);
}

function toKebabCase(value: string): string {
  return value.replace(/[a-z\d](?=[A-Z])|[a-zA-Z](?=\d)|[A-Z](?=[A-Z][a-z])/g, '$&-').toLowerCase();
}

function iconBaseName(importName: string): string {
  return toKebabCase(importName.replace(ICON_SUFFIX_REGEX, ''));
}

/**
 * Describes how a single supported module's barrel imports are rewritten into
 * atomic deep paths.
 */
export interface ModuleDescriptor {
  /** The bare module specifier this descriptor applies to. */
  name: string;
  /** Icon variants this module ships atomic entry points for. */
  supportedVariants: IconVariant[];
  /**
   * Icon variants for which this module ships a *headless* (Griffel-free) build.
   * Empty when the module has no headless build at all.
   */
  headlessVariants: IconVariant[];
  /**
   * Resolves the atomic subpath for a single named import.
   *
   * @param importName - The imported binding name (e.g. `AddFilled`, `bundleIcon`).
   * @param variant - The already-resolved, supported icon variant for this module.
   * @param headless - Whether to resolve to the headless (Griffel-free) build.
   */
  resolve(importName: string, variant: IconVariant, headless: boolean): string;
}

const reactIcons: ModuleDescriptor = {
  name: '@fluentui/react-icons',
  supportedVariants: ['svg', 'fonts', 'svg-sprite'],
  // Headless ships svg + fonts today; headless svg-sprite is not generated yet.
  headlessVariants: ['svg', 'fonts'],
  resolve(importName, variant, headless) {
    if (importName === 'useIconContext' || importName === 'IconDirectionContextProvider') {
      // Context is framework-agnostic and shared by both APIs.
      return '@fluentui/react-icons/providers';
    }

    const pkg = headless ? '@fluentui/react-icons/headless' : '@fluentui/react-icons';

    if (!isIconName(importName)) {
      return `${pkg}/utils`;
    }

    return `${pkg}/${variant}/${iconBaseName(importName)}`;
  },
};

const reactBrandIcons: ModuleDescriptor = {
  name: '@fluentui/react-brand-icons',
  supportedVariants: ['svg'],
  // No headless build for brand icons yet.
  headlessVariants: [],
  resolve(importName) {
    if (!isIconName(importName)) {
      return '@fluentui/react-brand-icons/utils';
    }

    return `@fluentui/react-brand-icons/svg/${iconBaseName(importName)}`;
  },
};

export const MODULES: ModuleDescriptor[] = [reactIcons, reactBrandIcons];

export const SUPPORTED_MODULE_NAMES: string[] = MODULES.map((m) => m.name);

export function getModuleDescriptor(moduleName: string): ModuleDescriptor | undefined {
  return MODULES.find((m) => m.name === moduleName);
}

/**
 * Outcome of resolving the effective variant for a single module given the
 * requested `iconVariant` and optional `fallbackVariant`.
 *
 * - `variant` is the variant to rewrite with, when resolution succeeds.
 * - `error` is set when the module cannot be satisfied and no fallback exists.
 * - `warning` is set when the resolution succeeded only by degrading to the
 *   safety variant.
 */
export interface VariantResolution {
  variant?: IconVariant;
  error?: string;
  warning?: string;
}

/**
 * Resolves the effective icon variant for a module, applying the
 * `iconVariant` → `fallbackVariant` → safety-variant precedence. This is pure
 * policy logic; callers decide how to surface `error`/`warning`.
 */
export function resolveModuleVariant(
  descriptor: ModuleDescriptor,
  iconVariant: IconVariant,
  fallbackVariant: IconVariant | undefined,
): VariantResolution {
  if (descriptor.supportedVariants.includes(iconVariant)) {
    return { variant: iconVariant };
  }

  const supported = descriptor.supportedVariants.join(', ');

  if (fallbackVariant === undefined) {
    return {
      error:
        `"${descriptor.name}" does not support iconVariant "${iconVariant}" ` +
        `(supported: ${supported}). Provide a "fallbackVariant" option to resolve this.`,
    };
  }

  if (descriptor.supportedVariants.includes(fallbackVariant)) {
    return { variant: fallbackVariant };
  }

  return {
    variant: DEFAULT_SAFETY_VARIANT,
    warning:
      `"${descriptor.name}" supports neither iconVariant "${iconVariant}" nor ` +
      `fallbackVariant "${fallbackVariant}" (supported: ${supported}). ` +
      `Falling back to "${DEFAULT_SAFETY_VARIANT}".`,
  };
}

/**
 * Resolves whether to use a module's headless build, given the requested
 * `headless` flag and the already-resolved `variant`.
 *
 * Headless is best-effort: when a module has no headless build for the resolved
 * variant, the loader degrades to the standard (Griffel) implementation and
 * records a warning rather than failing the build.
 */
export function resolveModuleHeadless(
  descriptor: ModuleDescriptor,
  variant: IconVariant,
  headless: boolean,
): { headless: boolean; warning?: string } {
  if (!headless) {
    return { headless: false };
  }

  if (descriptor.headlessVariants.includes(variant)) {
    return { headless: true };
  }

  if (descriptor.headlessVariants.length === 0) {
    return {
      headless: false,
      warning:
        `"${descriptor.name}" has no headless build; using its standard (Griffel) ` + `implementation for this import.`,
    };
  }

  return {
    headless: false,
    warning:
      `"${descriptor.name}" has no headless build for variant "${variant}" ` +
      `(headless supports: ${descriptor.headlessVariants.join(', ')}); using its standard ` +
      `(Griffel) implementation for this import.`,
  };
}
