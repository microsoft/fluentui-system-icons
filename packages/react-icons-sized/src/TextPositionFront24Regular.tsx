import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 4a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M12 8.5A2.5 2.5 0 009.7 10H8.14a4 4 0 017.74 0H14.3A2.5 2.5 0 0012 8.5z" fill={primaryFill} /><path d="M8 13.5h1.5v2.25a.75.75 0 01-1.5 0V13.5z" fill={primaryFill} /><path d="M16 13.5h-1.5v2.25a.75.75 0 001.5 0V13.5z" fill={primaryFill} /><path d="M20.25 11a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h16.5z" fill={primaryFill} /><path d="M3 18.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextPositionFront24Regular = wrapIcon(rawSvg({}), 'TextPositionFront24Regular');
export default TextPositionFront24Regular;
      