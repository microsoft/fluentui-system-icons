import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 3A3.5 3.5 0 0014 6.5v5a3.5 3.5 0 107 0v-5A3.5 3.5 0 0017.5 3zm2 8.5a2 2 0 11-4 0v-5a2 2 0 114 0v5z" fill={primaryFill} /><path d="M6 11.5v-5a3.5 3.5 0 117 0 .75.75 0 01-1.5 0 2 2 0 10-4 0v2.13A3.5 3.5 0 116 11.5zm1.5 0a2 2 0 104 0 2 2 0 00-4 0z" fill={primaryFill} /><path d="M20.35 17.5A2.35 2.35 0 0018 19.85V20a2.5 2.5 0 002.5 2.5h.5a1 1 0 011 1v.15c0 .47-.38.85-.85.85h-.65a1 1 0 01-1-1 .75.75 0 00-1.5 0 2.5 2.5 0 002.5 2.5h.65c1.3 0 2.35-1.05 2.35-2.35v-.15A2.5 2.5 0 0021 21h-.5a1 1 0 01-1-1v-.15c0-.47.38-.85.85-.85h1.15c.28 0 .5.22.5.5a.75.75 0 001.5 0 2 2 0 00-2-2h-1.15z" fill={primaryFill} /><path d="M5 18.25c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5H6.5v2h1.75a.75.75 0 010 1.5H6.5v2.75a.75.75 0 01-1.5 0v-7z" fill={primaryFill} /><path d="M12.25 17.5a.75.75 0 00-.75.75v7a.75.75 0 001.5 0V22.5h1.5a2.5 2.5 0 000-5h-2.25zM14.5 21H13v-2h1.5a1 1 0 110 2z" fill={primaryFill} /></svg>;
}

const Fps6028Regular = wrapIcon(rawSvg({}), 'Fps6028Regular');
export default Fps6028Regular;
      