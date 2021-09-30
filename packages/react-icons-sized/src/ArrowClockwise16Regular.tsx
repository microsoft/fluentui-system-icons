import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 8a5 5 0 019-3h-2a.5.5 0 000 1h3a.5.5 0 00.5-.5v-3a.5.5 0 00-1 0v1.53A5.99 5.99 0 002 8a6 6 0 0012 0 .5.5 0 00-1 0A5 5 0 013 8z" fill={primaryFill} /></svg>;
}

const ArrowClockwise16Regular = wrapIcon(rawSvg({}), 'ArrowClockwise16Regular');
export default ArrowClockwise16Regular;
      