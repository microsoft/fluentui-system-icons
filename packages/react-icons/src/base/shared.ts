// Data attribute names used by base icons for CSS targeting.
// The shipped base.css file uses these attribute selectors for styling.

/** Base data attribute applied to all icons (SVG and font). */
export const DATA_FUI_ICON = 'data-fui-icon';

/** Data attribute applied to icons that should flip in RTL text direction. */
export const DATA_FUI_ICON_RTL = 'data-fui-icon-rtl';

/** Data attribute applied to the inactive variant in a bundled icon pair. */
export const DATA_FUI_ICON_HIDDEN = 'data-fui-icon-hidden';

/** Data attribute for font icon font-family variant selection (filled|regular|resizable|light). */
export const DATA_FUI_ICON_FONT = 'data-fui-icon-font';

// Re-export existing constants (CSS class names for consumer targeting)
export {
  iconClassName,
  iconFilledClassName,
  iconRegularClassName,
  iconLightClassName,
  iconColorClassName,
  fontIconClassName,
} from '../utils/constants';

// Re-export types
export type { FluentIconsProps } from '../utils/FluentIconsProps.types';
export type { FluentIcon, CreateFluentIconOptions } from './createFluentIcon';

/**
 * Joins class name strings, filtering out falsy values.
 */
export function cx(...classes: (string | false | undefined | null)[]): string | undefined {
  const result = classes.filter(Boolean).join(' ');
  return result || undefined;
}
