import * as React from 'react';
import { mergeClasses } from '@griffel/react';

import { FluentIconsProps } from '../FluentIconsProps.types';
import { useIconState } from '../useIconState';
import { fontIconClassName } from '../constants';

import { useRootStyles, useStaticStyles } from './createFluentFontIcon.styles';
import { FontFile } from './createFluentFontIcon.shared';
import { applyFontStyle, renderFontBody } from '../../core/fontIcon';

export type CreateFluentFontIconOptions = {
  flipInRtl?: boolean;
};

export type FluentFontIcon = React.FC<FluentIconsProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
  codepoint: string;
};

export function createFluentFontIcon(
  displayName: string,
  codepoint: string,
  font: FontFile,
  fontSize?: number,
  options?: CreateFluentFontIconOptions,
): FluentFontIcon {
  const Component: FluentFontIcon = (props) => {
    useStaticStyles();
    const styles = useRootStyles();
    // `fontSize` is applied as a CSS style below, so keep it off the spread onto the `<i>` element.
    const { fontSize: fontSizeOverride, ...rest } = props;
    const className = mergeClasses(styles.root, styles[font], fontIconClassName, props.className);
    const state = useIconState<React.HTMLAttributes<HTMLElement>, HTMLElement>(
      { ...rest, className },
      { flipInRtl: options?.flipInRtl },
    );

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
