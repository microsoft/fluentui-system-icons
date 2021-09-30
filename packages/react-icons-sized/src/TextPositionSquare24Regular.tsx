import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 4a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M3 8.25c0-.41.34-.75.75-.75h2a.75.75 0 010 1.5h-2A.75.75 0 013 8.25z" fill={primaryFill} /><path d="M17.5 8.25c0-.41.34-.75.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3.75 11a.75.75 0 000 1.5h2a.75.75 0 000-1.5h-2z" fill={primaryFill} /><path d="M17.5 11.75c0-.41.34-.75.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3.75 14.5a.75.75 0 000 1.5h2a.75.75 0 000-1.5h-2z" fill={primaryFill} /><path d="M17.5 15.25c0-.41.34-.75.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M3 18.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M9.5 11a2.5 2.5 0 015 0v4.75a.75.75 0 001.5 0V11a4 4 0 00-8 0v4.75a.75.75 0 001.5 0V11z" fill={primaryFill} /></svg>;
}

const TextPositionSquare24Regular = wrapIcon(rawSvg({}), 'TextPositionSquare24Regular');
export default TextPositionSquare24Regular;
      