import remapping, { type SourceMapInput } from '@ampproject/remapping';
import type MagicString from 'magic-string';

type GeneratedSourceMap = ReturnType<MagicString['generateMap']>;

export type { SourceMapInput };

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
