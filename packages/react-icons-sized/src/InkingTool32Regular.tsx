import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.02 2.95a1 1 0 10-2 0v4a3 3 0 003 3h.46l6.55 12.95a2 2 0 001.11.98c-.07.62-.12 1.33-.12 1.97 0 .86.19 1.82.62 2.6S14.84 30 15.98 30h.04c1.14-.01 1.91-.77 2.34-1.55.43-.78.62-1.74.62-2.6a17.46 17.46 0 00-.12-1.97 2 2 0 001.1-.98l6.56-12.95h.5a3 3 0 003-3v-4a1 1 0 10-2 0v4a1 1 0 01-1 1h-22a1 1 0 01-1-1v-4zM16.86 24a14.23 14.23 0 01.12 1.85c0 .6-.14 1.21-.37 1.64-.23.41-.44.5-.61.51-.17 0-.38-.1-.6-.5a3.58 3.58 0 01-.38-1.65c0-.53.04-1.17.11-1.73l.01-.12h1.72zm7.42-14.05L18.18 22h-4.36L7.72 9.95h16.56z" fill={primaryFill} /></svg>;
}

const InkingTool32Regular = wrapIcon(rawSvg({}), 'InkingTool32Regular');
export default InkingTool32Regular;
      