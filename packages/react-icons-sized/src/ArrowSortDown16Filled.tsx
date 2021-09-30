import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.22 13.78c.3.3.77.3 1.06 0l2.75-2.75a.75.75 0 10-1.06-1.06L8.5 11.44V2.75a.75.75 0 00-1.5 0v8.69L5.53 9.97a.75.75 0 00-1.06 1.06l2.75 2.75z" fill={primaryFill} /></svg>;
}

const ArrowSortDown16Filled = wrapIcon(rawSvg({}), 'ArrowSortDown16Filled');
export default ArrowSortDown16Filled;
      