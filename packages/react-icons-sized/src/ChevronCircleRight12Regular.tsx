import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.85 4.15a.5.5 0 10-.7.7L6.29 6 5.15 7.15a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5zM6 1a5 5 0 100 10A5 5 0 006 1zM2 6a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /></svg>;
}

const ChevronCircleRight12Regular = wrapIcon(rawSvg({}), 'ChevronCircleRight12Regular');
export default ChevronCircleRight12Regular;
      