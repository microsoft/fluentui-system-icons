import * as React from 'react';

import { cx, iconFilledClassName, iconRegularClassName, DATA_FUI_ICON_HIDDEN, DATA_FUI_ICON_VARIANT } from './shared';
import type { FluentIcon } from './shared';

/**
 * Headless bundleIcon — combines Filled and Regular icon variants.
 *
 * Renders both icons; each glyph states its own variant with `data-fui-icon-variant`, and the
 * inactive one additionally gets `data-fui-icon-hidden`.
 * The shipped styles.css handles visibility via `[data-fui-icon-hidden] { display: none }`.
 */
export const bundleIcon = (FilledIcon: FluentIcon, RegularIcon: FluentIcon): FluentIcon => {
  const Component: FluentIcon = (props) => {
    const { className, filled, ...rest } = props;

    return (
      <React.Fragment>
        <FilledIcon
          {...rest}
          className={cx(iconFilledClassName, className)}
          {...{ [DATA_FUI_ICON_VARIANT]: 'filled' }}
          {...(!filled ? { [DATA_FUI_ICON_HIDDEN]: '' } : undefined)}
        />
        <RegularIcon
          {...rest}
          className={cx(iconRegularClassName, className)}
          {...{ [DATA_FUI_ICON_VARIANT]: 'regular' }}
          {...(filled ? { [DATA_FUI_ICON_HIDDEN]: '' } : undefined)}
        />
      </React.Fragment>
    );
  };
  Component.displayName = 'CompoundIcon';
  return Component;
};
