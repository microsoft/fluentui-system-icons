import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2.5a.5.5 0 00-1 0v4.9c0 .33.27.6.6.6h4.9a.5.5 0 000-1H5.9l3.48-3.02a4 4 0 015.25 6.04l-8.17 7.1a.5.5 0 00.65.76l8.17-7.1a5 5 0 00-6.56-7.55L5 6.46V2.5z" fill={primaryFill} /></svg>;
}

const ArrowUndo20Regular = wrapIcon(rawSvg({}), 'ArrowUndo20Regular');
export default ArrowUndo20Regular;
      