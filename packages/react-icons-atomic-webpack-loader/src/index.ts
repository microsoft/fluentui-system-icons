import { transformSource } from './transform';
import { DEFAULT_SAFETY_VARIANT, MODULES, SUPPORTED_MODULE_NAMES } from './modules';
import type { IconVariant, ModuleDescriptor } from './modules';
import type { LoaderContext } from 'webpack';

export type { IconVariant };

export interface FluentIconsAtomicImportLoaderOptions {
  /**
   * The icon variant to resolve atomic imports to. Defaults to `'svg'`.
   *
   * Not every module supports every variant (e.g. `@fluentui/react-brand-icons`
   * only ships `svg`). When a referenced module does not support this variant,
   * `fallbackVariant` is used instead.
   */
  iconVariant?: IconVariant;
  /**
   * The variant to use for a referenced module that does not support
   * `iconVariant`. When omitted and a module cannot honor `iconVariant`, the
   * loader fails with a descriptive error.
   */
  fallbackVariant?: IconVariant;
}

interface ResolveVariantResult {
  variant?: IconVariant;
  error?: string;
  warning?: string;
}

function resolveVariantForModule(
  descriptor: ModuleDescriptor,
  iconVariant: IconVariant,
  fallbackVariant: IconVariant | undefined,
): ResolveVariantResult {
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

export default function fluentIconsAtomicImportLoader(
  this: LoaderContext<FluentIconsAtomicImportLoaderOptions>,
  sourceCode: string,
): void {
  const { resourcePath } = this;

  if (!SUPPORTED_MODULE_NAMES.some((name) => sourceCode.includes(name))) {
    return this.callback(null, sourceCode);
  }

  const { iconVariant = 'svg', fallbackVariant } = this.getOptions();

  const variants: Record<string, IconVariant> = {};

  for (const descriptor of MODULES) {
    if (!sourceCode.includes(descriptor.name)) continue;

    const resolved = resolveVariantForModule(descriptor, iconVariant, fallbackVariant);

    if (resolved.error) {
      return this.callback(new Error(`FluentIconsAtomicImportLoader: ${resolved.error}`));
    }

    if (resolved.warning) {
      this.emitWarning(new Error(`FluentIconsAtomicImportLoader: ${resolved.warning}`));
    }

    variants[descriptor.name] = resolved.variant!;
  }

  try {
    const { code, map } = transformSource(sourceCode, { variants, path: resourcePath });
    return this.callback(null, code, map);
  } catch {
    return this.callback(new Error(`FluentIconsAtomicImportLoader: Failed to transform "${resourcePath}"`));
  }
}
