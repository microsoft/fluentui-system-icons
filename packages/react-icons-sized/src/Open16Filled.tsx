import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 011.5 0v1.5A2.75 2.75 0 0111.25 14h-6.5A2.75 2.75 0 012 11.25v-6.5A2.75 2.75 0 014.75 2h1.5a.75.75 0 010 1.5h-1.5zM8 2.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75v4.5a.75.75 0 01-1.5 0V4.56L9.28 7.78a.75.75 0 11-1.06-1.06l3.22-3.22H8.75A.75.75 0 018 2.75z" fill={primaryFill} /></svg>;
}

const Open16Filled = wrapIcon(rawSvg({}), 'Open16Filled');
export default Open16Filled;
      