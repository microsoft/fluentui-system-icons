import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4C4.67 4 4 4.67 4 5.5v1a.5.5 0 01-1 0v-1A2.5 2.5 0 015.5 3h1a.5.5 0 010 1h-1z" fill={primaryFill} /><path d="M16 5.5c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 010-1h1A2.5 2.5 0 0117 5.5v1a.5.5 0 01-1 0v-1z" fill={primaryFill} /><path d="M16 14.5c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 000 1h1a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1z" fill={primaryFill} /><path d="M4 14.5c0 .83.67 1.5 1.5 1.5h1.25a.5.5 0 010 1H5.5A2.5 2.5 0 013 14.5v-1.25a.5.5 0 011 0v1.25z" fill={primaryFill} /><path d="M6.5 5C5.67 5 5 5.67 5 6.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7zM6 6.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7z" fill={primaryFill} /></svg>;
}

const ResizeLarge20Regular = wrapIcon(rawSvg({}), 'ResizeLarge20Regular');
export default ResizeLarge20Regular;
      