import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M28 3a1 1 0 011 1v10a1 1 0 11-2 0V6.41L6.41 27H14a1 1 0 110 2H4a1 1 0 01-1-1V18a1 1 0 112 0v7.59L25.59 5H18a1 1 0 110-2h10z" fill={primaryFill} /></svg>;
}

const ArrowMaximize32Regular = wrapIcon(rawSvg({}), 'ArrowMaximize32Regular');
export default ArrowMaximize32Regular;
      