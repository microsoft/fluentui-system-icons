// SVG file types - for svg sprite
declare module '*.svg' {
  const content: string;
  export default content;
}

// Font file types - for icon fonts

declare module '*.ttf' {
  const uri: string;
  export default uri;
}

declare module '*.woff' {
  const uri: string;
  export default uri;
}

declare module '*.woff2' {
  const uri: string;
  export default uri;
}
