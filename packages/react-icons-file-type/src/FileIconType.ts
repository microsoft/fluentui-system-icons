// Public, stable module path for the file type icon enum. The actual definitions are
// generated from `fileIconTypes.json` into `fileIconTypes.generated.ts` (run `npm run
// generate`); this barrel re-exports the public surface so consumers and internal code
// import from a hand-written path rather than the generated artifact.
export { FileIconType } from './fileIconTypes.generated';
export type { FileIconTypeInput } from './fileIconTypes.generated';
