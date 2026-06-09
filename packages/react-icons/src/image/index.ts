// Image (CSS mask / <img>) Fluent Icons API
// Import the shipped CSS file (image.css) for default styling via attribute/class selectors.

// Types & constants
export type { FluentIconsProps, FluentImageIconsProps, FluentImageIcon, CreateImageIconOptions } from './shared';
export {
  imageIconClassName,
  imageColorIconClassName,
  DATA_FUI_ICON,
  DATA_FUI_ICON_RTL,
  IMAGE_URL_CSS_VAR,
  cx,
} from './shared';

// Context
export { IconDirectionContextProvider, useIconContext } from '../contexts/index';
export type { IconDirectionContextValue } from '../contexts/index';

// Image icon factories
export { createImageIcon } from './createImageIcon';
export { createImageColorIcon } from './createImageColorIcon';
