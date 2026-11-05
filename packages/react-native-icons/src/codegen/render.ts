import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { generateIconComponents } from './convert.ts';
import type { IconSpec } from './icons.ts';
import { quoteString, resolveOptions } from './options.ts';
import type { CodegenOptions } from './options.ts';

const RN_SVG_ELEMENT_TAGS = [
  'Svg',
  'Path',
  'Circle',
  'Ellipse',
  'G',
  'Line',
  'Polygon',
  'Polyline',
  'Rect',
  'Symbol',
  'Text',
  'Use',
  'Defs',
  'LinearGradient',
  'RadialGradient',
  'Stop',
  'ClipPath',
  'Pattern',
  'Mask',
].map((element) => ({ element, tag: new RegExp(`<${element}\\b`) }));

/**
 * Assemble the source of a `.tsx` module from component code made by {@link generateIconComponents},
 * adding the imports the components need.
 */
export function renderIconModule(components: readonly string[], options?: CodegenOptions): string {
  if (!components.length) {
    return 'export {};\n';
  }

  const { quote, utilPath } = resolveOptions(options);
  // Import each react-native-svg element in the order the components first use it.
  const elements = new Set<string>();
  for (const component of components) {
    for (const { element, tag } of RN_SVG_ELEMENT_TAGS) {
      if (!elements.has(element) && tag.test(component)) {
        elements.add(element);
      }
    }
  }
  const imports = [
    ...(elements.size
      ? [`import { ${[...elements].join(', ')} } from ${quoteString('react-native-svg', quote)};`]
      : []),
    `import type { SvgProps } from ${quoteString('react-native-svg', quote)};`,
    `import type { FluentIconsProps } from ${quoteString(utilPath, quote)};`,
    `import { FluentSvg } from ${quoteString(utilPath, quote)};`,
  ];
  return [...imports, ...components].join('\n');
}

/**
 * Generate the source of one `.tsx` module that exports the components of every icon.
 * Icons that are listed more than once are generated once.
 */
export function generateIconModule(icons: readonly IconSpec[], options?: CodegenOptions): string {
  const unique = new Map(icons.map((icon) => [typeof icon === 'string' ? icon : icon.name, icon]));
  return renderIconModule(
    [...unique.values()].flatMap((icon) => generateIconComponents(icon, options)),
    options,
  );
}

/**
 * Generate a `.tsx` file that exports the components of every icon, creating its directory if needed.
 * @param file path of the file to write, which must end with `.tsx`
 */
export function generateIconFile(file: string, icons: readonly IconSpec[], options?: CodegenOptions): void {
  if (!file.endsWith('.tsx')) {
    throw new Error(`Generated icon files contain JSX and must end with .tsx: ${file}`);
  }
  const source = generateIconModule(icons, options);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, source);
}
