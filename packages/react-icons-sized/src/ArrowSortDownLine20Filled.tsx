import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 17c.23 0 .45-.1.59-.28l2.94-2.94a.75.75 0 00-1.06-1.06L7.5 14.43V3.75a.75.75 0 00-1.5 0v10.7L4.28 12.7a.75.75 0 10-1.06 1.06l3 3.01c.15.15.34.22.53.22zm3-13a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" fill={primaryFill} /></svg>;
}

const ArrowSortDownLine20Filled = wrapIcon(rawSvg({}), 'ArrowSortDownLine20Filled');
export default ArrowSortDownLine20Filled;
      