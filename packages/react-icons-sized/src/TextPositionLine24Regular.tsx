import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 4a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M7 8.5A2.5 2.5 0 004.5 11v4.75a.75.75 0 01-1.5 0V11a4 4 0 118 0v4.75a.75.75 0 01-1.5 0V11A2.5 2.5 0 007 8.5z" fill={primaryFill} /><path d="M13.75 14.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" fill={primaryFill} /><path d="M3.75 18a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /></svg>;
}

const TextPositionLine24Regular = wrapIcon(rawSvg({}), 'TextPositionLine24Regular');
export default TextPositionLine24Regular;
      