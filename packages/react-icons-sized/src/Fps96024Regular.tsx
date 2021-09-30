import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 15a2.25 2.25 0 01.15 4.5H11v1.75c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-5.5c0-.38.28-.7.65-.74l.1-.01h1.5zM18 15a2 2 0 012 2 .75.75 0 01-1.5.1V17a.5.5 0 00-.41-.5h-.72a.62.62 0 00-.09 1.24l.1.01h.5a2.13 2.13 0 01.15 4.24l-.16.01h-.62a2 2 0 01-2-2 .75.75 0 011.5-.1v.1c0 .25.18.45.41.5h.72a.62.62 0 00.09-1.24l-.1-.01h-.5a2.13 2.13 0 01-.15-4.24l.16-.01H18zM7.75 15a.75.75 0 01.1 1.5H5.5V18h1.75a.75.75 0 01.1 1.5H5.5v1.73c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-5.48c0-.38.28-.7.65-.74l.1-.01h3zm4 1.5H11V18h.75a.75.75 0 00.1-1.5h-.1zM12 3a3 3 0 013 2.82v.35a.75.75 0 01-1.5.1V5.86a1.5 1.5 0 00-3 0V7.4A3 3 0 119 10.18V6a3 3 0 013-3zM5 3a3 3 0 013 2.83V10a3 3 0 01-6 .18v-.35a.75.75 0 011.5-.1V10a1.5 1.5 0 003 .14V8.6A3 3 0 115 3zm14 0a3 3 0 013 2.82V10a3 3 0 01-2.82 3h-.37a3 3 0 01-2.8-2.82l-.01-.17V6a3 3 0 012.82-3H19zm-7 5.5c-.78 0-1.42.6-1.5 1.36V10A1.5 1.5 0 1012 8.5zm7-4c-.78 0-1.42.6-1.5 1.35V10c0 .78.6 1.42 1.35 1.5H19.15a1.5 1.5 0 001.34-1.35l.01-.14V6c0-.83-.67-1.5-1.5-1.5zm-14 0a1.5 1.5 0 101.5 1.65V6c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /></svg>;
}

const Fps96024Regular = wrapIcon(rawSvg({}), 'Fps96024Regular');
export default Fps96024Regular;
      