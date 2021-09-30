import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.27 4.2a.75.75 0 00-1.04 1.1l8.27 7.95H3.75a.75.75 0 000 1.5H22.5l-8.27 7.96a.75.75 0 001.04 1.08l9.43-9.07a1 1 0 000-1.44L15.27 4.2z" fill={primaryFill} /></svg>;
}

const ArrowRight28Regular = wrapIcon(rawSvg({}), 'ArrowRight28Regular');
export default ArrowRight28Regular;
      