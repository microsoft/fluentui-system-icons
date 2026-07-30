// Headless utilities endpoint — mirrors `@fluentui/react-icons/utils` for the
// headless (data-attribute) API. Pairs with the atomic `headless/*` icon atoms
// so build transforms can route utility imports here instead of the Griffel ones.

export { bundleIcon } from './bundleIcon';
export { wrapIcon } from './wrapIcon';
export { createFluentIcon } from './createFluentIcon';
export { useIconState } from './useIconState';
export {
  iconClassName,
  iconFilledClassName,
  iconRegularClassName,
  iconColorClassName,
  iconLightClassName,
} from './shared';
