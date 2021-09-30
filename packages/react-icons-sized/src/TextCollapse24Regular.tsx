import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 4.5h14.5a.75.75 0 00.1-1.5H6.75a.75.75 0 00-.1 1.5h.1z" fill={primaryFill} /><path d="M6.75 19.5h14.5a.75.75 0 00.1-1.5H6.75a.75.75 0 00-.1 1.5h.1z" fill={primaryFill} /><path d="M13.75 8a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /><path d="M13 13.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M11 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2 0a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h4a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const TextCollapse24Regular = wrapIcon(rawSvg({}), 'TextCollapse24Regular');
export default TextCollapse24Regular;
      