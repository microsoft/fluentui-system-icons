import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 5.5a.75.75 0 00-.75.75v7.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-7.5a.75.75 0 00-.75-.75h-7.5zm-1-2.5C4.01 3 3 4 3 5.25v9.5C3 15.99 4 17 5.25 17h9.5c1.24 0 2.25-1 2.25-2.25v-9.5C17 4.01 16 3 14.75 3h-9.5zM4.5 5.25c0-.41.34-.75.75-.75h9.5c.41 0 .75.34.75.75v9.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 01-.75-.75v-9.5z" fill={primaryFill} /></svg>;
}

const CheckboxIndeterminate20Filled = wrapIcon(rawSvg({}), 'CheckboxIndeterminate20Filled');
export default CheckboxIndeterminate20Filled;
      