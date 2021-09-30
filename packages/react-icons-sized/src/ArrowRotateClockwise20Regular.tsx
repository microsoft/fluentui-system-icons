import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 10a7 7 0 1110 6.33V14.5a.5.5 0 00-1 0v3c0 .28.22.5.5.5h3a.5.5 0 000-1h-1.62A8 8 0 102 10a.5.5 0 001 0z" fill={primaryFill} /><path d="M10 12a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const ArrowRotateClockwise20Regular = wrapIcon(rawSvg({}), 'ArrowRotateClockwise20Regular');
export default ArrowRotateClockwise20Regular;
      