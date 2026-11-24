import * as React from 'react';
import type { CreateFluentIconOptions, FluentIcon, FluentIconsProps } from './shared';
import { useIconState } from './useIconState';

/**
 * Wraps a custom SVG component with headless Fluent Icon behaviour.
 *
 * @deprecated Use `createFluentIcon` from `@fluentui/react-icons/headless` instead.
 * Retained for compatibility with existing custom icons and headless import transforms.
 */
export const wrapIcon = (
  Icon: (iconProps: FluentIconsProps) => React.ReactElement,
  displayName?: string,
  options?: CreateFluentIconOptions,
): FluentIcon => {
  const WrappedIcon = React.forwardRef((props: FluentIconsProps, ref: FluentIconsProps['ref']) => {
    const state = {
      ...useIconState(props, { flipInRtl: options?.flipInRtl }),
      ref,
    };
    return <Icon {...state} />;
  }) as FluentIcon;
  WrappedIcon.displayName = displayName;
  return WrappedIcon;
};
