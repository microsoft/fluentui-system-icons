import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.99 4.93c.3.3.3.77 0 1.06a8.5 8.5 0 000 12.02.75.75 0 01-1.06 1.06 10 10 0 010-14.14c.3-.3.77-.3 1.06 0zm13.08 0a10 10 0 010 14.14.75.75 0 01-1.06-1.06 8.5 8.5 0 000-12.02.75.75 0 111.06-1.06zM8.82 7.76c.3.29.3.76 0 1.06a4.5 4.5 0 000 6.36.75.75 0 01-1.06 1.06 6 6 0 010-8.48c.29-.3.77-.3 1.06 0zm7.42 0a6 6 0 010 8.48.75.75 0 11-1.06-1.06 4.5 4.5 0 000-6.36.75.75 0 011.06-1.06zM12 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const Live24Regular = wrapIcon(rawSvg({}), 'Live24Regular');
export default Live24Regular;
      