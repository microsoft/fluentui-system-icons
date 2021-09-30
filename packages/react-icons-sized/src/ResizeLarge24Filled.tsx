import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6.25c0-.97.78-1.75 1.75-1.75h1.5a.75.75 0 000-1.5h-1.5A3.25 3.25 0 003 6.25v1.5a.75.75 0 001.5 0v-1.5z" fill={primaryFill} /><path d="M17.75 4.5c.97 0 1.75.78 1.75 1.75v1.5a.75.75 0 001.5 0v-1.5C21 4.45 19.54 3 17.75 3h-1.5a.75.75 0 000 1.5h1.5z" fill={primaryFill} /><path d="M17.75 19.5c.97 0 1.75-.78 1.75-1.75v-1.5a.75.75 0 011.5 0v1.5c0 1.8-1.46 3.25-3.25 3.25h-1.5a.75.75 0 010-1.5h1.5z" fill={primaryFill} /><path d="M6.25 19.5c-.97 0-1.75-.78-1.75-1.75v-1.5a.75.75 0 00-1.5 0v1.5C3 19.55 4.46 21 6.25 21h1.5a.75.75 0 000-1.5h-1.5z" fill={primaryFill} /><path d="M8.25 6C7.01 6 6 7 6 8.25v7.5C6 16.99 7 18 8.25 18h7.5c1.24 0 2.25-1 2.25-2.25v-7.5C18 7.01 17 6 15.75 6h-7.5z" fill={primaryFill} /></svg>;
}

const ResizeLarge24Filled = wrapIcon(rawSvg({}), 'ResizeLarge24Filled');
export default ResizeLarge24Filled;
      