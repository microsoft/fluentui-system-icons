import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3a.5.5 0 010-1h6c.28 0 .5.22.5.5v6a.5.5 0 01-1 0V3.7L2.85 13.86a.5.5 0 01-.7-.7L12.29 3H7.5z" fill={primaryFill} /></svg>;
}

const ArrowUpRight16Regular = wrapIcon(rawSvg({}), 'ArrowUpRight16Regular');
export default ArrowUpRight16Regular;
      