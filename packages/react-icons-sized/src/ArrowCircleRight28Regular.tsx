import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.22 19.03a.75.75 0 010-1.06l3.22-3.22H8.75a.75.75 0 010-1.5h8.69l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5c.3.3.3.77 0 1.06l-4.5 4.5c-.3.3-.77.3-1.06 0zM14 26a12 12 0 110-24 12 12 0 010 24zM3.5 14a10.5 10.5 0 1021 0 10.5 10.5 0 00-21 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight28Regular = wrapIcon(rawSvg({}), 'ArrowCircleRight28Regular');
export default ArrowCircleRight28Regular;
      