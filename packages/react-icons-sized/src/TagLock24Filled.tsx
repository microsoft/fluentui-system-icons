import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.42.42A3.5 3.5 0 0014 14v.05a2.5 2.5 0 00-2 2.45v4.45c-1.26.8-2.95.66-4.05-.44L3.5 16.06a3.25 3.25 0 010-4.6l8.5-8.5a3.25 3.25 0 012.3-.96h5.46zM17 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15 15h-.5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5H20v-1a2.5 2.5 0 00-5 0v1zm1.5-1a1 1 0 112 0v1h-2v-1zm2 5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const TagLock24Filled = wrapIcon(rawSvg({}), 'TagLock24Filled');
export default TagLock24Filled;
      