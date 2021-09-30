import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 1a.75.75 0 100 1.5h1.97L2.16 5.79A.75.75 0 002.75 7h3.5a.75.75 0 100-1.5H4.28l2.56-3.29A.75.75 0 006.25 1h-3.5zM4.5 8c.32 0 .6.2.7.5l2 5.5a.75.75 0 11-1.4.5L5.6 14H3.4l-.18.5A.75.75 0 111.8 14l2-5.5c.1-.3.38-.5.7-.5zm0 2.94l-.57 1.56h1.14l-.57-1.56zm3.17.33a.75.75 0 011.06-.1l1.77 1.48V1.75a.75.75 0 011.5 0v10.9l1.77-1.48a.75.75 0 11.96 1.16l-3 2.5a.75.75 0 01-.96 0l-3-2.5a.75.75 0 01-.1-1.06z" fill={primaryFill} /></svg>;
}

const TextSortDescending16Filled = wrapIcon(rawSvg({}), 'TextSortDescending16Filled');
export default TextSortDescending16Filled;
      