import * as React from 'react';

import { iconFilledClassName, iconRegularClassName, DATA_FUI_ICON_HIDDEN } from './constants';
import { cx } from './cx';
import type { FluentIcon } from './createFluentIcon';

/**
 * Combine the Regular and Filled versions of icons.
 * Could be used to toggle between them on hover.
 *
 * Both icons are rendered; the inactive variant gets `data-fui-icon-hidden`, which the
 * shipped stylesheet resolves via `[data-fui-icon-hidden] { display: none }`.
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
