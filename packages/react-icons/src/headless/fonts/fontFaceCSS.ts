/**
 * Generates `@font-face` CSS declarations for Fluent System Icons font files.
 *
 * Since font file URLs are build-tool dependent (webpack, Vite, etc. resolve them differently),
 * consumers provide their own base URL and this function returns the CSS string to inject.
 *
 * @param baseUrl - Base URL path to the directory containing the font files (no trailing slash).
 *
 * @example
 * ```tsx
 * // In your app's root component:
 * const fontCSS = getFluentIconFontFaceCSS('/static/fonts');
 * // Inject via <style> tag, your CSS-in-JS solution, or a build step.
 * ```
 *
 * @example
 * ```tsx
 * // With a CDN:
 * const fontCSS = getFluentIconFontFaceCSS('https://cdn.example.com/fonts');
 * ```
 */
export function getFluentIconFontFaceCSS(baseUrl: string): string {
  return `
@font-face {
  font-family: 'FluentSystemIconsFilled';
  font-display: block;
  src: url("${baseUrl}/FluentSystemIcons-Filled.woff2") format("woff2"),
       url("${baseUrl}/FluentSystemIcons-Filled.woff") format("woff"),
       url("${baseUrl}/FluentSystemIcons-Filled.ttf") format("truetype");
}
@font-face {
  font-family: 'FluentSystemIconsRegular';
  font-display: block;
  src: url("${baseUrl}/FluentSystemIcons-Regular.woff2") format("woff2"),
       url("${baseUrl}/FluentSystemIcons-Regular.woff") format("woff"),
       url("${baseUrl}/FluentSystemIcons-Regular.ttf") format("truetype");
}
@font-face {
  font-family: 'FluentSystemIconsLight';
  src: url("${baseUrl}/FluentSystemIcons-Light.woff2") format("woff2"),
       url("${baseUrl}/FluentSystemIcons-Light.woff") format("woff"),
       url("${baseUrl}/FluentSystemIcons-Light.ttf") format("truetype");
}
@font-face {
  font-family: 'FluentSystemIcons';
  font-display: block;
  src: url("${baseUrl}/FluentSystemIcons-Resizable.woff2") format("woff2"),
       url("${baseUrl}/FluentSystemIcons-Resizable.woff") format("woff"),
       url("${baseUrl}/FluentSystemIcons-Resizable.ttf") format("truetype");
}
`.trim();
}
