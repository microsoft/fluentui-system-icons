import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.78 8.97c.3.3.3.77 0 1.06l-3.22 3.22h8.69a.75.75 0 010 1.5h-8.69l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5c.3-.3.77-.3 1.06 0zM14 2a12 12 0 110 24 12 12 0 010-24zm10.5 12a10.5 10.5 0 10-21 0 10.5 10.5 0 0021 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft28Regular = wrapIcon(rawSvg({}), 'ArrowCircleLeft28Regular');
export default ArrowCircleLeft28Regular;
      