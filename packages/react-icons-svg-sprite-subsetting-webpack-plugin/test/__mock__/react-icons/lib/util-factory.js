import * as React from 'react';
import { mergeClasses } from '@griffel/react';
import { useIconState } from '../../../../../react-icons/lib/utils/useIconState';
import { useRootStyles } from '../../../../../react-icons/lib/utils/createFluentIcon.styles';
import { iconClassName } from '../../../../../react-icons/lib/utils/constants';

export const createFluentIcon = (iconId, size, spritePath, options) => {
    const viewBoxWidth = size === '1em' ? '20' : size;
    const Icon = React.forwardRef((props, ref) => {
        const styles = useRootStyles();
        const iconState = useIconState(props, { flipInRtl: options === null || options === void 0 ? void 0 : options.flipInRtl }); // HTML attributes/props for things like accessibility can be passed in, and will be expanded on the svg object at the start of the object
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
        return React.createElement('svg', state, React.createElement('use', {
            href,
        }));
    });
    Icon.displayName = iconId;
    return Icon;
};