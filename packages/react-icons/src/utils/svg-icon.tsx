import * as React from 'react';
import { mergeClasses } from '@griffel/react';

import type { FluentIconsProps } from './FluentIconsProps.types';
import { useIconState } from './useIconState';
import { useRootStyles } from './createFluentIcon.styles';
import { iconClassName } from './constants';

export type FluentIcon = React.FC<FluentIconsProps>;
type CreateFluentIconOptions = {
  flipInRtl?: boolean;
  color?: boolean;
};

export const createFluentIcon = (
  iconId: string,
  size: string,
  spritePath?: string,
  options?: CreateFluentIconOptions,
): FluentIcon => {
  const viewBoxWidth = size === '1em' ? '20' : size;

  const Icon = React.forwardRef((props: FluentIconsProps, ref: React.Ref<HTMLElement>) => {
    const styles = useRootStyles();
    const iconState = useIconState(props, { flipInRtl: options?.flipInRtl }); // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
    const state = {
      ...iconState,
      className: mergeClasses(iconClassName, iconState.className, styles.root),
      ref,
      width: size,
      height: size,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: 'http://www.w3.org/2000/svg',
    };

    const href = spritePath ? `${spritePath}#${iconId}` : `#${iconId}`;

    return React.createElement(
      'svg',
      state,
      React.createElement('use', {
        href,
        // The fill is applied to the svg element and inherited by use
      }),
    );
  }) as FluentIcon;
  Icon.displayName = iconId;
  return Icon;
};
