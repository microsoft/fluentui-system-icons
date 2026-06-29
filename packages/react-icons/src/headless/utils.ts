// Headless utilities endpoint — mirrors `@fluentui/react-icons/utils` for the
// headless (data-attribute) API. Pairs with the atomic `headless/*` icon atoms
// so build transforms can route utility imports here instead of the Griffel ones.
//
// NOTE: `wrapIcon` is intentionally not provided by the headless API. Importing
// it via a headless transform is accepted breakage.

export { bundleIcon } from './bundleIcon';
export { createFluentIcon } from './createFluentIcon';
export { useIconState } from './useIconState';
export {
  iconClassName,
  iconFilledClassName,
  iconRegularClassName,
  iconColorClassName,
  iconLightClassName,
} from './shared';
