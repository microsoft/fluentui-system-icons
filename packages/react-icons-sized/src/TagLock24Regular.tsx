import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.42.42a3.51 3.51 0 00-.95-1.17l.3-.31c.34-.33.52-.77.52-1.24V4.25a.75.75 0 00-.75-.75h-5.47c-.46 0-.9.18-1.23.51l-8.52 8.53c-.67.68-.66 1.78.02 2.46L9 19.45c.68.68 1.8.68 2.48 0l.51-.51v2.01c-1.26.8-2.95.66-4.05-.44L3.5 16.06a3.25 3.25 0 010-4.6l8.5-8.5a3.25 3.25 0 012.3-.96h5.46zM17 5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM15 15h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H20v-1a2.5 2.5 0 00-5 0v1zm1.5-1a1 1 0 112 0v1h-2v-1zm2 5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const TagLock24Regular = wrapIcon(rawSvg({}), 'TagLock24Regular');
export default TagLock24Regular;
      