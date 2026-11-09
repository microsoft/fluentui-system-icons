// Injected at build time by webpack `DefinePlugin` (see `.storybook/main.ts`),
// resolved from each package's `package.json` version.
declare const STORYBOOK_REACT_ICONS_VERSION: string;
declare const STORYBOOK_REACT_ICONS_FILE_TYPE_VERSION: string;
declare const STORYBOOK_SVG_ICONS_VERSION: string;
declare const STORYBOOK_SVG_ICON_PATHS: readonly string[];

declare module '*.svg?url' {
  const src: string;
  export default src;
}

declare module '*.svg?raw' {
  const markup: string;
  export default markup;
}

declare module '*.md?raw' {
  const markdown: string;
  export default markdown;
}

// Image assets imported by stories resolve to their emitted URL (webpack `asset/resource`).
declare module '*.gif' {
  const src: string;
  export default src;
}
