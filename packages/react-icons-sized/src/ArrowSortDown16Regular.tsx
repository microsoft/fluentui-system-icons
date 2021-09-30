import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.15 13.85c.2.2.5.2.7 0l3-3a.5.5 0 00-.7-.7L8 12.29V2.5a.5.5 0 00-1 0v9.8l-2.15-2.15a.5.5 0 00-.7.7l3 3z" fill={primaryFill} /></svg>;
}

const ArrowSortDown16Regular = wrapIcon(rawSvg({}), 'ArrowSortDown16Regular');
export default ArrowSortDown16Regular;
      