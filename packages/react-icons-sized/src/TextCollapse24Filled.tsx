import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4a1 1 0 001 1h14a1 1 0 100-2H7a1 1 0 00-1 1z" fill={primaryFill} /><path d="M13 9a1 1 0 001 1h7a1 1 0 100-2h-7a1 1 0 00-1 1z" fill={primaryFill} /><path d="M7 18h14a1 1 0 110 2H7a1 1 0 110-2z" fill={primaryFill} /><path d="M13 14a1 1 0 001 1h7a1 1 0 100-2h-7a1 1 0 00-1 1z" fill={primaryFill} /><path d="M11 11.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2 0a.5.5 0 01-.5.5h-4a.5.5 0 010-1h4c.28 0 .5.22.5.5z" fill={primaryFill} /></svg>;
}

const TextCollapse24Filled = wrapIcon(rawSvg({}), 'TextCollapse24Filled');
export default TextCollapse24Filled;
      