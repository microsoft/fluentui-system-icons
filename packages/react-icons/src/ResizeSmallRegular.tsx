import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4C4.67 4 4 4.67 4 5.5v1a.5.5 0 01-1 0v-1A2.5 2.5 0 015.5 3h1a.5.5 0 010 1h-1zM16 5.5c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 010-1h1A2.5 2.5 0 0117 5.5v1a.5.5 0 01-1 0v-1zm0 9c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 000 1h1a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1zm-12 0c0 .83.67 1.5 1.5 1.5h1.25a.5.5 0 010 1H5.5A2.5 2.5 0 013 14.5v-1.25a.5.5 0 011 0v1.25zM8.5 7C7.67 7 7 7.67 7 8.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3zM8 8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3z" fill={primaryFill} /></svg>;
}

const ResizeSmallRegular = wrapIcon(rawSvg({}), 'ResizeSmallRegular');
export default ResizeSmallRegular;
      