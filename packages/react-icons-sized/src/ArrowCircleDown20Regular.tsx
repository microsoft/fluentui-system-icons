import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.35 10.85l-3 3a.5.5 0 01-.7 0l-3-3a.5.5 0 01.7-.7l2.15 2.14V6.5a.5.5 0 011 0v5.8l2.15-2.15a.5.5 0 01.7.7zM10 18a8 8 0 100-16 8 8 0 000 16zm7-8a7 7 0 11-14 0 7 7 0 0114 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown20Regular = wrapIcon(rawSvg({}), 'ArrowCircleDown20Regular');
export default ArrowCircleDown20Regular;
      