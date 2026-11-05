export type QuoteStyle = '"' | "'";

export interface CodegenOptions {
  /**
   * Quote character for the generated import specifiers and string literals.
   * JSX attribute values always use double quotes, like the `jsx-quotes` default.
   * @default '"'
   */
  quote?: QuoteStyle;
  /**
   * Module specifier the generated components import `FluentSvg` and `FluentIconsProps` from.
   * Code inside this package uses a relative path, so it builds with any module resolution mode.
   * @default '@fluentui/react-native-icons/utils'
   */
  utilPath?: string;
  /**
   * Directory containing `<name>.svg` files for icons passed by name.
   * @default the `icons` directory of `@fluentui/svg-icons`
   */
  svgDir?: string;
}

export const DEFAULT_UTIL_PATH = '@fluentui/react-native-icons/utils';

export interface ResolvedCodegenOptions {
  quote: QuoteStyle;
  utilPath: string;
  svgDir: string | undefined;
}

export function resolveOptions({
  quote = '"',
  utilPath = DEFAULT_UTIL_PATH,
  svgDir,
}: CodegenOptions = {}): ResolvedCodegenOptions {
  if (quote !== '"' && quote !== "'") {
    throw new Error(`Unsupported quote style ${JSON.stringify(quote)}; use '"' or "'".`);
  }
  if (!utilPath) {
    throw new Error('The utilPath option must not be empty.');
  }
  return { quote, utilPath, svgDir };
}

const LITERAL_ESCAPES: Record<string, string> = {
  '\\': '\\\\',
  '\n': '\\n',
  '\r': '\\r',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

/** Write `value` as a JavaScript string literal delimited by `quote`. */
export function quoteString(value: string, quote: QuoteStyle): string {
  const escaped = value.replace(/[\\\n\r\u2028\u2029]/g, (character) => LITERAL_ESCAPES[character]);
  return `${quote}${escaped.replaceAll(quote, `\\${quote}`)}${quote}`;
}
