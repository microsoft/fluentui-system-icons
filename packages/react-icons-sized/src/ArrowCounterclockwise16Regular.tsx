import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 8a5 5 0 00-9-3h2.5a.5.5 0 010 1h-3a.5.5 0 01-.5-.5v-.66V2.5a.5.5 0 011 0v1.03A6 6 0 112 8a.5.5 0 011 0 5 5 0 0010 0z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise16Regular = wrapIcon(rawSvg({}), 'ArrowCounterclockwise16Regular');
export default ArrowCounterclockwise16Regular;
      