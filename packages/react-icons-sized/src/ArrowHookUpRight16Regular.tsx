import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.88 10.9A3.4 3.4 0 007.5 12h3a.5.5 0 000-1h-3a2.4 2.4 0 01-1.88-.77A2.6 2.6 0 015 8.5c0-.64.22-1.27.62-1.73A2.4 2.4 0 017.5 6h3.8l-1.15 1.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 10-.7.7L11.29 5H7.5a3.4 3.4 0 00-2.62 1.1A3.6 3.6 0 004 8.5c0 .86.28 1.73.88 2.4z" fill={primaryFill} /></svg>;
}

const ArrowHookUpRight16Regular = wrapIcon(rawSvg({}), 'ArrowHookUpRight16Regular');
export default ArrowHookUpRight16Regular;
      