import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2a.5.5 0 000 1h3.8L3 12.3V8.5a.5.5 0 00-1 0v4.9c0 .33.27.6.6.6h4.9a.5.5 0 000-1H3.7L13 3.7v3.8a.5.5 0 001 0V2.6a.6.6 0 00-.6-.6H8.5z" fill={primaryFill} /></svg>;
}

const ArrowMaximize16Regular = wrapIcon(rawSvg({}), 'ArrowMaximize16Regular');
export default ArrowMaximize16Regular;
      