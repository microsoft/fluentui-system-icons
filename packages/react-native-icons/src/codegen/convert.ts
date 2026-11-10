import { transform } from '@svgr/core';
import type { Config } from '@svgr/core';
import { parseIconName, readIconSvg, toPascalCase } from './icons.ts';
import type { IconSpec } from './icons.ts';
import { quoteString, resolveOptions } from './options.ts';
import type { CodegenOptions, QuoteStyle } from './options.ts';
import { fluentSvgPlugin } from './plugin.ts';

interface Component {
  name: string;
  code: string;
}

/**
 * Convert one icon to React components, following naming patterns for the FluentUI System Icons:
 * a sized component (`AccessTime20Regular`) and, for names containing "20", a resizable component (`AccessTimeRegular`).
 * @returns the code of each component
 */
export function generateIconComponents(icon: IconSpec, options?: CodegenOptions): string[] {
  const { quote, svgDir } = resolveOptions(options);
  const { name, svg } = typeof icon === 'string' ? { name: icon, svg: readIconSvg(icon, svgDir) } : icon;
  const { size, style } = parseIconName(name);
  // svg-icons namespaces ids per icon, but react-native-svg scopes ids to each Svg, so the prefix only bloats the output.
  const content = svg.replaceAll(`ic_fluent_${name}__`, '');
  const isColorIcon = style === 'color';

  // access_time becomes AccessTime
  const sized = toComponent(toPascalCase(name), content, name, isColorIcon, false, quote);
  if (!name.includes('20')) {
    return [sized.code];
  }
  const resizable = toComponent(toPascalCase(name.replace('20', '')), content, name, isColorIcon, true, quote);
  // Keep legacy aliases from names containing "20" separate from actual size-20 pairs.
  return size === 20 ? sharePathData(resizable, sized, quote) : [resizable.code, sized.code];
}

function toComponent(
  name: string,
  content: string,
  iconName: string,
  isColorIcon: boolean,
  resizable: boolean,
  quote: QuoteStyle,
): Component {
  const jsxCode = transform
    .sync(content, getSvgrOptions(isColorIcon, resizable), { filePath: `${iconName}.svg` })
    .trim()
    .replace(/;$/, '');
  // Without a working JSX plugin, @svgr/core returns the SVG unconverted rather than failing.
  if (!jsxCode.includes('<FluentSvg')) {
    throw new Error(
      `@svgr/core did not convert ${iconName} to a component. Install @svgr/plugin-jsx with the same version as @svgr/core.`,
    );
  }
  // Complex artwork still needs explicit fills; simple shapes inherit from FluentSvg.
  const body = jsxCode.includes('{primaryFill}')
    ? `{\n  const { primaryFill = ${quoteString('currentColor', quote)} } = props;\n  return ${jsxCode};\n}`
    : jsxCode;
  return {
    name,
    code: `
export const ${name} = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => ${body};
`,
  };
}

// These options will be passed to svgr/core
// See https://react-svgr.com/docs/options/ for more info
function getSvgrOptions(isColorIcon: boolean, isResizable: boolean): Config {
  const options: Config = {
    template: fileTemplate,
    expandProps: 'end',
    replaceAttrValues: isColorIcon ? {} : { '#212121': '{primaryFill}' },
    typescript: true,
    prettier: true,
    native: true,
    // Skip .svgrrc and svgr.config.js files found from the working directory, so the output is the same wherever codegen runs.
    runtimeConfig: false,
    // @svgr/core 7 and later no longer include the JSX plugin by default. @svgr/core loads it by name,
    // and version 6 resolves it from its own dependencies.
    plugins: ['@svgr/plugin-jsx'],
    jsx: {
      babelConfig: {
        plugins: [[fluentSvgPlugin, { resizable: isResizable, isColorIcon }]],
      },
    },
  };

  // Add icon: true only if it's not a sized icon
  if (isResizable) {
    options.icon = true;
  }

  return options;
}

function fileTemplate(variables, { tpl }) {
  variables.componentName = variables.componentName.substring(3);
  variables.componentName = variables.componentName.replace('IcFluent', '');

  return tpl`
  ${variables.jsx}
 
`;
}

/**
 * Share path strings between a resizable component and its size-20 sibling, which are generated from the same artwork.
 * Short paths remain inline when sharing would increase code size.
 * @returns the code of each component, with shared declarations ahead of the first
 */
function sharePathData(resizable: Component, sized: Component, quote: QuoteStyle): string[] {
  const paths = (code: string) => Array.from(code.matchAll(/\bd="([^"]*)"/g), (match) => match[1]);
  const resizablePaths = paths(resizable.code);
  const sizedPaths = paths(sized.code);
  const shared = new Map<string, string>();
  const declarations: string[] = [];
  for (const data of new Set(resizablePaths)) {
    if (!sizedPaths.includes(data)) {
      continue;
    }
    const name = `${sized.name}Path${shared.size}`;
    const declaration = `const ${name} = ${quoteString(data, quote)};\n`;
    const occurrences = [...resizablePaths, ...sizedPaths].filter((value) => value === data).length;
    if (occurrences * (data.length - name.length) <= declaration.length) {
      continue;
    }
    shared.set(data, name);
    declarations.push(declaration);
  }
  if (!shared.size) {
    return [resizable.code, sized.code];
  }
  const replacePaths = (code: string) =>
    code.replace(/\bd="([^"]*)"/g, (attribute, data) => (shared.has(data) ? `d={${shared.get(data)}}` : attribute));
  const sharedCode = [declarations.join('') + replacePaths(resizable.code), replacePaths(sized.code)];
  return sharedCode.join('').length < resizable.code.length + sized.code.length
    ? sharedCode
    : [resizable.code, sized.code];
}
