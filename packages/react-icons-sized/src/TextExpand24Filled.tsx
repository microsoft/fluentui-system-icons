import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 18a1 1 0 100 2h14a1 1 0 100-2H7z" fill={primaryFill} /><path d="M13 9a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1z" fill={primaryFill} /><path d="M6 4a1 1 0 011-1h14a1 1 0 110 2H7a1 1 0 01-1-1z" fill={primaryFill} /><path d="M13 14a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1z" fill={primaryFill} /><path d="M11 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V11H4.5a.5.5 0 000 1H6v1.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H7V9.5z" fill={primaryFill} /></svg>;
}

const TextExpand24Filled = wrapIcon(rawSvg({}), 'TextExpand24Filled');
export default TextExpand24Filled;
      