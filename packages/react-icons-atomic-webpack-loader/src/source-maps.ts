import type MagicString from 'magic-string';

type GeneratedSourceMap = ReturnType<MagicString['generateMap']>;

export type SourceMapInput =
  | string
  | {
      version: number;
      file?: string | null;
      names: string[];
      sourceRoot?: string;
      sources: (string | null)[];
      sourcesContent?: (string | null)[];
      mappings: string | unknown[][];
      x_google_ignoreList?: number[];
    };

// TS 5.0 cannot parse remapping's `export = function` declaration, so keep the
// compatibility override local until the package ships a standard CJS type declaration.
const remapping = require('@jridgewell/remapping') as (
  input: SourceMapInput | SourceMapInput[],
  loader: () => null,
) => SourceMapInput;

export function composeSourceMaps(
  generatedMap: GeneratedSourceMap | undefined,
  inputSourceMap: SourceMapInput | undefined,
): GeneratedSourceMap | ReturnType<typeof remapping> | undefined {
  if (!generatedMap || !inputSourceMap) {
    return generatedMap;
  }

  const generatedMapInput: SourceMapInput = {
    version: 3,
    file: generatedMap.file,
    names: generatedMap.names,
    sources: generatedMap.sources,
    sourcesContent: generatedMap.sourcesContent,
    mappings: generatedMap.mappings,
    x_google_ignoreList: generatedMap.x_google_ignoreList,
  };

  return remapping([generatedMapInput, inputSourceMap], () => null);
}
