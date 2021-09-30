import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM4.5 3C3.67 3 3 3.67 3 4.5V7h6V3H4.5zM3 8v3.5c0 .83.67 1.5 1.5 1.5H9V8H3zm7 1h3V7h-3v2zm3 1h-3v3h1.5c.83 0 1.5-.67 1.5-1.5V10zm0-5.5c0-.83-.67-1.5-1.5-1.5H10v3h3V4.5z" fill={primaryFill} /></svg>;
}

const BoardSplit16Regular = wrapIcon(rawSvg({}), 'BoardSplit16Regular');
export default BoardSplit16Regular;
      