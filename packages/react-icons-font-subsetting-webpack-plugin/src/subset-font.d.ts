// Typings for the `subset-font` npm package
declare module 'subset-font' {
  function subsetFont(
    buffer: Buffer,
    text: string,
    options?: {
      targetFormat?: 'sfnt' | 'woff' | 'woff2';
      preserveNameIds?: boolean;
    },
  ): Promise<Buffer>;
  export default subsetFont;
}
