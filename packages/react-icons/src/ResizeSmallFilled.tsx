import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4C4.67 4 4 4.67 4 5.5v1a.5.5 0 01-1 0v-1A2.5 2.5 0 015.5 3h1a.5.5 0 010 1h-1z" fill={primaryFill} /><path d="M8.5 7C7.67 7 7 7.67 7 8.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3z" fill={primaryFill} /><path d="M14.5 4c.83 0 1.5.67 1.5 1.5v1a.5.5 0 001 0v-1A2.5 2.5 0 0014.5 3h-1a.5.5 0 000 1h1z" fill={primaryFill} /><path d="M14.5 16c.83 0 1.5-.67 1.5-1.5v-1a.5.5 0 011 0v1a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1z" fill={primaryFill} /><path d="M5.5 16A1.5 1.5 0 014 14.5v-1.25a.5.5 0 00-1 0v1.25A2.5 2.5 0 005.5 17h1.25a.5.5 0 000-1H5.5z" fill={primaryFill} /></svg>;
}

const ResizeSmallFilled = wrapIcon(rawSvg({}), 'ResizeSmallFilled');
export default ResizeSmallFilled;
      