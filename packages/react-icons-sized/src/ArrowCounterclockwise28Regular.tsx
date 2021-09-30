import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.17 6.5A9.5 9.5 0 114.5 14c0-.45.03-.66.1-1.14a.75.75 0 00-1.48-.22v.01c-.08.5-.12.79-.12 1.35a11 11 0 104-8.49V3.75a.75.75 0 00-1.5 0v3.5c0 .41.34.75.75.75h3.5a.75.75 0 000-1.5H8.17z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise28Regular = wrapIcon(rawSvg({}), 'ArrowCounterclockwise28Regular');
export default ArrowCounterclockwise28Regular;
      