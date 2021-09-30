import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 3c.23 0 .45.1.59.28l2.94 2.94a.75.75 0 01-1.06 1.06L10.5 5.57v10.68a.75.75 0 01-1.5 0V5.55L7.28 7.3a.75.75 0 11-1.06-1.06l3-3.01A.73.73 0 019.75 3z" fill={primaryFill} /></svg>;
}

const ArrowSortUp20Filled = wrapIcon(rawSvg({}), 'ArrowSortUp20Filled');
export default ArrowSortUp20Filled;
      