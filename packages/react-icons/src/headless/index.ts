/**
 * @deprecated Transition alias. The headless implementation IS the default API as of
 * this release — `./headless` now re-exports it unchanged. Import from
 * `@fluentui/react-icons` (or `@fluentui/react-icons/utils`) instead, and import
 * `@fluentui/react-icons/styles.css` rather than `@fluentui/react-icons/headless/styles.css`.
 *
 * This subpath is kept for one release so existing headless adopters upgrade without a
 * code change, and will be removed in the next major.
 */

// Types & constants
export type { FluentIconsProps } from '../utils/FluentIconsProps.types';
export type { FluentIcon, CreateFluentIconOptions } from '../utils/createFluentIcon';
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
} from '../utils/constants';
export { cx } from '../utils/cx';

// Context
export { IconDirectionContextProvider, useIconContext } from '../contexts/index';
export type { IconDirectionContextValue } from '../contexts/index';

// Core hook
export { useIconState } from '../utils/useIconState';
export type { UseIconStateOptions } from '../utils/useIconState';

// SVG icon factories
export { createFluentIcon } from '../utils/createFluentIcon';
export { bundleIcon } from '../utils/bundleIcon';
export { wrapIcon } from '../utils/wrapIcon';
