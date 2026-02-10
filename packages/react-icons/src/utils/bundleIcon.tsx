import * as React from 'react';
import { mergeClasses } from '@griffel/react';

import { iconFilledClassName, iconRegularClassName } from './constants';
import type { FluentIcon } from './createFluentIcon';
import { useBundledIconStyles } from './bundleIcon.styles';

/**
 *
 * Combine the Regular and Filled versions of icons
 * Could be used to toggle between them on hover.
 */
export const bundleIcon = (FilledIcon: FluentIcon, RegularIcon: FluentIcon): FluentIcon => {
  const Component: FluentIcon = (props) => {
    const { className, filled, ...rest } = props;
    const styles = useBundledIconStyles();
    return (
      <React.Fragment>
        <FilledIcon
          {...rest}
          className={mergeClasses(styles.root, filled && styles.visible, iconFilledClassName, className)}
        />
        <RegularIcon
          {...rest}
          className={mergeClasses(styles.root, !filled && styles.visible, iconRegularClassName, className)}
        />
      </React.Fragment>
    );
  };
  Component.displayName = 'CompoundIcon';
  return Component;
};
