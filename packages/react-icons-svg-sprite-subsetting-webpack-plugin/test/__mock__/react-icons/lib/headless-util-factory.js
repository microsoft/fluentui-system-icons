import * as React from 'react';
import { useIconState } from '../../../../../react-icons/lib/headless/useIconState';
import { cx, iconClassName } from '../../../../../react-icons/lib/headless/shared';

// Mirrors `@fluentui/react-icons/headless` sprite atoms: no CSS-in-JS runtime,
// styling is driven by the `data-fui-icon*` attributes and the shipped styles.css.
export const createFluentIcon = (iconId, size, spritePath, options) => {
  const viewBoxWidth = size === '1em' ? '20' : size;
  const Icon = React.forwardRef((props, ref) => {
    const iconState = useIconState(props, { flipInRtl: options === null || options === void 0 ? void 0 : options.flipInRtl });
    const state = {
      ...iconState,
      className: cx(iconClassName, iconState.className),
      ref,
      width: size,
      height: size,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: 'http://www.w3.org/2000/svg',
    };
    const href = spritePath ? `${spritePath}#${iconId}` : `#${iconId}`;
    return React.createElement('svg', state, React.createElement('use', { href }));
  });
  Icon.displayName = iconId;
  return Icon;
};
