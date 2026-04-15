import * as React from 'react';

import type { FluentIconsProps } from '../shared';
import { fontIconClassName, DATA_FUI_ICON, DATA_FUI_ICON_FONT, cx } from '../shared';

import { useIconState } from '../useIconState';
import { FontFile } from '../../utils/fonts/createFluentFontIcon.shared';

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
 * Headless createFluentFontIcon — font icon factory without Griffel.
 *
 * Sets data attributes for CSS targeting:
 * - data-fui-icon="font" for base font icon styles
 * - data-fui-icon-font="filled|regular|..." for font-family selection
 *
 * @access private
 * @alpha
 */
export function createFluentFontIcon(
  displayName: string,
  codepoint: string,
  font: FontFile,
  fontSize?: number,
  options?: CreateFluentFontIconOptions,
): FluentFontIcon {
  const Component: FluentFontIcon = (props) => {
    const className = cx(fontIconClassName, props.className);
    const state = useIconState<React.HTMLAttributes<HTMLElement>, HTMLElement>(
      { ...props, className },
      { flipInRtl: options?.flipInRtl },
    );

    // Override the default data-fui-icon to "font" for font-specific styles
    state[DATA_FUI_ICON] = 'font';
    state[DATA_FUI_ICON_FONT] = FONT_VARIANT_MAP[font];

    // Map primaryFill to color for font icons
    if (props.primaryFill && props.primaryFill.toLowerCase() !== 'currentcolor') {
      state.style = {
        ...state.style,
        color: props.primaryFill,
      };
    }

    if (fontSize) {
      state.style = {
        ...state.style,
        fontSize,
      };
    }

    return <i {...state}>{codepoint}</i>;
  };
  Component.displayName = displayName;
  Component.codepoint = codepoint;
  return Component;
}
