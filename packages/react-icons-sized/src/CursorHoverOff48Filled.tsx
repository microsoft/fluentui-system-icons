import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M36.1 37.88l5.77 5.75a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l3.29 3.3a3.5 3.5 0 00-2.41 3.32v18.5a3.5 3.5 0 003.5 3.5H18v-13.5c0-.43.09-.85.24-1.24L20 21.77v20.98a1.25 1.25 0 002.29.7l4.96-7.33c.17-.27.5-.39.8-.3l8.06 2.06z" fill={primaryFill} /><path d="M14.55 9.25l25.43 25.42a3.5 3.5 0 002.77-3.42v-18.5a3.5 3.5 0 00-3.5-3.5h-24.7z" fill={primaryFill} /></svg>;
}

const CursorHoverOff48Filled = wrapIcon(rawSvg({}), 'CursorHoverOff48Filled');
export default CursorHoverOff48Filled;
      