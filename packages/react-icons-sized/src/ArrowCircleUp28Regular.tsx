import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.03 13.78c-.3.3-.77.3-1.06 0l-3.22-3.22v8.69a.75.75 0 01-1.5 0v-8.69l-3.22 3.22a.75.75 0 11-1.06-1.06l4.5-4.5c.3-.3.77-.3 1.06 0l4.5 4.5c.3.3.3.77 0 1.06zM26 14a12 12 0 11-24 0 12 12 0 0124 0zM14 24.5a10.5 10.5 0 100-21 10.5 10.5 0 000 21z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp28Regular = wrapIcon(rawSvg({}), 'ArrowCircleUp28Regular');
export default ArrowCircleUp28Regular;
      