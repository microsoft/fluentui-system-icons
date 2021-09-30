import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 14a12 12 0 10-24 0 12 12 0 0024 0zM13.78 8.97c.3.3.3.77 0 1.06l-3.22 3.22h8.69a.75.75 0 010 1.5h-8.69l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeft28Filled = wrapIcon(rawSvg({}), 'ArrowCircleLeft28Filled');
export default ArrowCircleLeft28Filled;
      