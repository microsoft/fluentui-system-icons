import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v1a.5.5 0 01-1 0v-1A2.5 2.5 0 014.5 2h1a.5.5 0 010 1h-1z" fill={primaryFill} /><path d="M13 4.5c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 010-1h1A2.5 2.5 0 0114 4.5v1a.5.5 0 01-1 0v-1z" fill={primaryFill} /><path d="M13 11.5c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 000 1h1a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1z" fill={primaryFill} /><path d="M3 11.5c0 .83.67 1.5 1.5 1.5h1.25a.5.5 0 010 1H4.5A2.5 2.5 0 012 11.5v-1.25a.5.5 0 011 0v1.25z" fill={primaryFill} /><path d="M5.5 4C4.67 4 4 4.67 4 5.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5zM5 5.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5z" fill={primaryFill} /></svg>;
}

const ResizeLarge16Regular = wrapIcon(rawSvg({}), 'ResizeLarge16Regular');
export default ResizeLarge16Regular;
      