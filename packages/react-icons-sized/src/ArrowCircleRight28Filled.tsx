import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 14a12 12 0 1024 0 12 12 0 00-24 0zm12.22 5.03a.75.75 0 010-1.06l3.22-3.22H8.75a.75.75 0 010-1.5h8.69l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5c.3.3.3.77 0 1.06l-4.5 4.5c-.3.3-.77.3-1.06 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight28Filled = wrapIcon(rawSvg({}), 'ArrowCircleRight28Filled');
export default ArrowCircleRight28Filled;
      