// Injected at build time by webpack `DefinePlugin` (see `.storybook/main.ts`),
// resolved from each package's `package.json` version.
declare const STORYBOOK_REACT_ICONS_VERSION: string;
declare const STORYBOOK_REACT_ICONS_FILE_TYPE_VERSION: string;

// Image assets imported by stories resolve to their emitted URL (webpack `asset/resource`).
declare module '*.gif' {
  const src: string;
  export default src;
}
