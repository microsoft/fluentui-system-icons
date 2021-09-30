import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 15a2.25 2.25 0 01.15 4.5H11v1.75c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-5.5c0-.38.28-.7.65-.74l.1-.01h1.5zM18 15a2 2 0 012 2 .75.75 0 01-1.5.1V17a.5.5 0 00-.41-.5h-.72a.62.62 0 00-.09 1.24l.1.01h.5a2.13 2.13 0 01.15 4.24l-.16.01h-.62a2 2 0 01-2-2 .75.75 0 011.5-.1v.1c0 .25.18.45.41.5h.72a.62.62 0 00.09-1.24l-.1-.01h-.5a2.13 2.13 0 01-.15-4.24l.16-.01H18zM7.75 15a.75.75 0 01.1 1.5H5.5V18h1.75a.75.75 0 01.1 1.5H5.5v1.73c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-5.48c0-.38.28-.7.65-.74l.1-.01h3zm4 1.5H11V18h.75a.75.75 0 00.1-1.5h-.1zM5 3a3 3 0 013 3v4a3 3 0 01-2.82 3h-.43A2.75 2.75 0 012 10.25a1 1 0 012-.12v.12c0 .38.28.7.65.74l.1.01H5a1 1 0 001-.88V8.83A3 3 0 115 3zm7.25 0A2.75 2.75 0 0115 5.75a1 1 0 01-2 .12v-.12c0-.38-.28-.7-.65-.74l-.1-.01H12a1 1 0 00-1 .88v1.29A3 3 0 119 10V6a3 3 0 012.83-3H12.25zM19 3a3 3 0 013 2.82V10a3 3 0 01-6 .18V6a3 3 0 013-3zm-7 6a1 1 0 100 2 1 1 0 000-2zm7-4a1 1 0 00-1 .88V10a1 1 0 002 .12V6a1 1 0 00-1-1zM5 5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const Fps96024Filled = wrapIcon(rawSvg({}), 'Fps96024Filled');
export default Fps96024Filled;
      