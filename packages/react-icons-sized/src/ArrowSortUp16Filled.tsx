import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.22 2.22c.3-.3.77-.3 1.06 0l2.75 2.75a.75.75 0 11-1.06 1.06L8.5 4.56v8.69a.75.75 0 01-1.5 0V4.56L5.53 6.03a.75.75 0 01-1.06-1.06l2.75-2.75z" fill={primaryFill} /></svg>;
}

const ArrowSortUp16Filled = wrapIcon(rawSvg({}), 'ArrowSortUp16Filled');
export default ArrowSortUp16Filled;
      