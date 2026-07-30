import * as React from 'react';

import type { FluentIconsProps } from '../FluentIconsProps.types';
import { fontIconClassName, DATA_FUI_ICON, DATA_FUI_ICON_FONT } from '../constants';
import { cx } from '../cx';
import { useIconState } from '../useIconState';
import { FontFile } from './createFluentFontIcon.shared';
import { applyFontStyle, renderFontBody } from '../../core/fontIcon';

export type CreateFluentFontIconOptions = {
  flipInRtl?: boolean;
};

export type FluentFontIcon = React.FC<FluentIconsProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
  codepoint: string;
};

const FONT_VARIANT_MAP: Record<FontFile, string> = {
  [FontFile.Filled]: 'filled',
  [FontFile.Regular]: 'regular',
  [FontFile.Resizable]: 'resizable',
  [FontFile.Light]: 'light',
};

/**
 * Creates a Fluent font icon React component.
 *
 * Sets data attributes for CSS targeting:
 * - `data-fui-icon="font"` for the base font icon styles
 * - `data-fui-icon-font="filled|regular|resizable|light"` for font-family selection
 *
 * The `@font-face` declarations live in a separate stylesheet
 * (`@fluentui/react-icons/fonts/styles.css`) so bundlers pull the font files into the
 * dependency graph and font-subsetting plugins can process them.
 */
export function createFluentFontIcon(
  displayName: string,
  codepoint: string,
  font: FontFile,
  fontSize?: number,
  options?: CreateFluentFontIconOptions,
): FluentFontIcon {
  const Component: FluentFontIcon = (props) => {
    // `fontSize` is applied as a CSS style below, so keep it off the spread onto the `<i>` element.
    const { fontSize: fontSizeOverride, ...rest } = props;
    const className = cx(fontIconClassName, props.className);
    const state = useIconState<React.HTMLAttributes<HTMLElement>, HTMLElement>(
      { ...rest, className },
      { flipInRtl: options?.flipInRtl },
    );

    // Override the default data-fui-icon to "font" for font-specific styles
    state[DATA_FUI_ICON] = 'font';
    state[DATA_FUI_ICON_FONT] = FONT_VARIANT_MAP[font];

    // We want to keep the same API surface as the SVG icons, so translate `primaryFill` to `color`.
    // Only resizable icons (no baked-in size) honor a `fontSize` prop; sized icons keep their
    // baked-in size, mirroring sized SVG icons whose hardcoded width/height ignore `font-size`.
    applyFontStyle(state, props.primaryFill, fontSize === undefined ? fontSizeOverride : fontSize);

    return renderFontBody(state, codepoint);
  };
  Component.displayName = displayName;
  Component.codepoint = codepoint;
  return Component;
}
