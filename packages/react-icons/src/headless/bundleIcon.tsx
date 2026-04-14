import * as React from 'react';

import { cx, iconFilledClassName, iconRegularClassName, DATA_FUI_ICON_HIDDEN } from './shared';
import type { FluentIcon } from './shared';

/**
 * Headless bundleIcon — combines Filled and Regular icon variants.
 *
 * Renders both icons; the inactive variant gets `data-fui-icon-hidden`.
 * The shipped headless.css handles visibility via `[data-fui-icon-hidden] { display: none }`.
 */
export const bundleIcon = (FilledIcon: FluentIcon, RegularIcon: FluentIcon): FluentIcon => {
  const Component: FluentIcon = (props) => {
    const { className, filled, ...rest } = props;

    return (
      <React.Fragment>
        <FilledIcon
          {...rest}
          className={cx(iconFilledClassName, className)}
          {...(!filled ? { [DATA_FUI_ICON_HIDDEN]: '' } : undefined)}
        />
        <RegularIcon
          {...rest}
          className={cx(iconRegularClassName, className)}
          {...(filled ? { [DATA_FUI_ICON_HIDDEN]: '' } : undefined)}
        />
      </React.Fragment>
    );
  };
  Component.displayName = 'CompoundIcon';
  return Component;
};
