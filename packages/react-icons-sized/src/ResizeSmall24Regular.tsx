import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 4.5c-.97 0-1.75.78-1.75 1.75v1.5a.75.75 0 01-1.5 0v-1.5C3 4.45 4.46 3 6.25 3h1.5a.75.75 0 010 1.5h-1.5z" fill={primaryFill} /><path d="M7.95 10.25c0-1.24 1-2.25 2.25-2.25h3.5c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25h-3.5c-1.24 0-2.25-1-2.25-2.25v-3.5zm2.25-.75a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5z" fill={primaryFill} /><path d="M17.75 4.5c.97 0 1.75.78 1.75 1.75v1.5a.75.75 0 001.5 0v-1.5C21 4.45 19.54 3 17.75 3h-1.5a.75.75 0 000 1.5h1.5z" fill={primaryFill} /><path d="M17.75 19.5c.97 0 1.75-.78 1.75-1.75v-1.5a.75.75 0 011.5 0v1.5c0 1.8-1.46 3.25-3.25 3.25h-1.5a.75.75 0 010-1.5h1.5z" fill={primaryFill} /><path d="M6.25 19.5c-.97 0-1.75-.78-1.75-1.75v-1.5a.75.75 0 00-1.5 0v1.5C3 19.55 4.46 21 6.25 21h1.5a.75.75 0 000-1.5h-1.5z" fill={primaryFill} /></svg>;
}

const ResizeSmall24Regular = wrapIcon(rawSvg({}), 'ResizeSmall24Regular');
export default ResizeSmall24Regular;
      