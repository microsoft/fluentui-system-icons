import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 4.75z" fill={primaryFill} /><path d="M9.5 11a2.5 2.5 0 015 0v4.75a.75.75 0 001.5 0V11a4 4 0 00-8 0v4.75a.75.75 0 001.5 0V11z" fill={primaryFill} /><path d="M20.25 12.5H17V11h3.25a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M3.75 12.5H7V11H3.75a.75.75 0 000 1.5z" fill={primaryFill} /><path d="M3.75 18a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M10.5 11h3v1.5h-3V11z" fill={primaryFill} /></svg>;
}

const TextPositionBehind24Regular = wrapIcon(rawSvg({}), 'TextPositionBehind24Regular');
export default TextPositionBehind24Regular;
      