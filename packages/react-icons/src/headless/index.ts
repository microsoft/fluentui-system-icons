// Headless Fluent Icons API
// Import the shipped CSS file (headless.css) for default styling via data-attribute selectors.

// Types & constants
export type { FluentIconsProps } from './shared';
export type { FluentIcon, CreateFluentIconOptions } from './createFluentIcon';
export {
  iconClassName,
  iconFilledClassName,
  iconRegularClassName,
  iconLightClassName,
  iconColorClassName,
  fontIconClassName,
  DATA_FUI_ICON,
  DATA_FUI_ICON_RTL,
  DATA_FUI_ICON_HIDDEN,
  DATA_FUI_ICON_FONT,
} from './shared';

// Context
export { IconDirectionContextProvider, useIconContext } from '../contexts/index';
export type { IconDirectionContextValue } from '../contexts/index';

// Core hook
export { useIconState } from './useIconState';
export type { UseIconStateOptions } from './useIconState';

// SVG icon factories
export { createFluentIcon } from './createFluentIcon';
export { bundleIcon } from './bundleIcon';

// TODO: to maintain API compat for build transform we will probably need to export this as well
// export { wrapIcon } from './wrapIcon';
