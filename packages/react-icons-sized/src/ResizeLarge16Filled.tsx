import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v1a.5.5 0 01-1 0v-1A2.5 2.5 0 014.5 2h1a.5.5 0 010 1h-1z" fill={primaryFill} /><path d="M5.5 4C4.67 4 4 4.67 4 5.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5z" fill={primaryFill} /><path d="M11.5 3c.83 0 1.5.67 1.5 1.5v1a.5.5 0 001 0v-1A2.5 2.5 0 0011.5 2h-1a.5.5 0 000 1h1z" fill={primaryFill} /><path d="M11.5 13c.83 0 1.5-.67 1.5-1.5v-1a.5.5 0 011 0v1a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1z" fill={primaryFill} /><path d="M4.5 13A1.5 1.5 0 013 11.5v-1.25a.5.5 0 00-1 0v1.25A2.5 2.5 0 004.5 14h1.25a.5.5 0 000-1H4.5z" fill={primaryFill} /></svg>;
}

const ResizeLarge16Filled = wrapIcon(rawSvg({}), 'ResizeLarge16Filled');
export default ResizeLarge16Filled;
      