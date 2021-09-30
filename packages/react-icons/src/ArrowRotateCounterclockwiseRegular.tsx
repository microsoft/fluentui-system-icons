import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 10a7 7 0 10-10 6.33V14.5a.5.5 0 011 0v3a.5.5 0 01-.5.5h-3a.5.5 0 010-1h1.62A8 8 0 1118 10a.5.5 0 01-1 0z" fill={primaryFill} /><path d="M10 12a2 2 0 110-4 2 2 0 010 4zm0-1a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const ArrowRotateCounterclockwiseRegular = wrapIcon(rawSvg({}), 'ArrowRotateCounterclockwiseRegular');
export default ArrowRotateCounterclockwiseRegular;
      