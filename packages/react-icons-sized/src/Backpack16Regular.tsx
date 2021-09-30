import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 6a2 2 0 00-2 2 1 1 0 001 1h4a1 1 0 001-1 2 2 0 00-2-2H7zM6 8a1 1 0 011-1h2a1 1 0 011 1H6z" fill={primaryFill} /><path d="M8 1a2 2 0 00-2 2v.42A5 5 0 003 8v4.5A2.5 2.5 0 005.5 15h5a2.5 2.5 0 002.5-2.5V8a5 5 0 00-3-4.58V3a2 2 0 00-2-2zm4 9H4V8a4 4 0 118 0v2zm-6 2.5a.5.5 0 001 0V11h5v1.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 014 12.5V11h2v1.5zM8 3c-.34 0-.68.03-1 .1V3a1 1 0 012 0v.1c-.32-.07-.66-.1-1-.1z" fill={primaryFill} /></svg>;
}

const Backpack16Regular = wrapIcon(rawSvg({}), 'Backpack16Regular');
export default Backpack16Regular;
      