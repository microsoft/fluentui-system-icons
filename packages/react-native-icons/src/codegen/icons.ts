import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

export const ICON_STYLES = ['regular', 'filled', 'light', 'color'] as const;

export type IconStyle = (typeof ICON_STYLES)[number];

/**
 * An icon to generate: the name of a `@fluentui/svg-icons` file without its extension, such as `access_time_20_regular`,
 * or an explicit name with its SVG markup. The name must follow `<name>_<size>_<style>`.
 */
export type IconSpec = string | { name: string; svg: string };

// <name>_<size>_<style>, e.g. access_time_20_regular
const ICON_NAME = /^(.+)_(\d+)_([a-z]+)$/;

export interface ParsedIconName {
  /** The name without its size and style, such as `access_time`. */
  base: string;
  size: number;
  style: IconStyle;
}

export function parseIconName(name: string): ParsedIconName {
  const [, base, size, style] = ICON_NAME.exec(name) ?? [];
  if (!(ICON_STYLES as readonly string[]).includes(style)) {
    throw new Error(`Icon name does not match <name>_<size>_<${ICON_STYLES.join('|')}>: ${name}`);
  }
  return { base, size: Number(size), style: style as IconStyle };
}

/** Split snake_case icon names into letter and digit runs, so `fps_120` becomes `Fps120` and `4k` becomes `4K`. */
export function toPascalCase(name: string): string {
  return (name.match(/[A-Za-z]+|\d+/g) ?? [])
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

export const resolveSvgIconsDir = (() => {
  const cache: Record<string, string> = {};
  return (from: string = process.cwd()) => {
    if (!cache[from]) {
      try {
        const packageJson = createRequire(join(from, 'noop.js')).resolve('@fluentui/svg-icons/package.json');
        cache[from] = join(dirname(packageJson), 'icons');
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'MODULE_NOT_FOUND') {
          throw error;
        }
        throw new Error(
          `Cannot find "@fluentui/svg-icons" from ${from}. Install it, or pass svgDir or the svg markup of each icon.`,
          { cause: error },
        );
      }
    }
    return cache[from];
  };
})();

export function readIconSvg(name: string, svgDir: string = resolveSvgIconsDir()): string {
  return readFileSync(join(svgDir, `${name}.svg`), 'utf8');
}
