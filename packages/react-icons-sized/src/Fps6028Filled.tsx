import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 4.75c-.83 0-1.5.67-1.5 1.5v2.09a3.5 3.5 0 11-2 3.16V6.25a3.5 3.5 0 117 0v.25a1 1 0 11-2 0v-.25c0-.83-.67-1.5-1.5-1.5zm0 8.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /><path d="M14 6.5a3.5 3.5 0 117 0v5a3.5 3.5 0 11-7 0v-5zm5 0a1.5 1.5 0 00-3 0v5a1.5 1.5 0 003 0v-5z" fill={primaryFill} /><path d="M20.35 17.5A2.35 2.35 0 0018 19.85V20a2.5 2.5 0 002.5 2.5h.5a1 1 0 011 1v.15c0 .47-.38.85-.85.85h-.65a1 1 0 01-1-1 .75.75 0 00-1.5 0 2.5 2.5 0 002.5 2.5h.65c1.3 0 2.35-1.05 2.35-2.35v-.15A2.5 2.5 0 0021 21h-.5a1 1 0 01-1-1v-.15c0-.47.38-.85.85-.85h1.15c.28 0 .5.22.5.5a.75.75 0 001.5 0 2 2 0 00-2-2h-1.15z" fill={primaryFill} /><path d="M5 18.25c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5H6.5v2h1.75a.75.75 0 010 1.5H6.5v2.75a.75.75 0 01-1.5 0v-7z" fill={primaryFill} /><path d="M12.25 17.5a.75.75 0 00-.75.75v7a.75.75 0 001.5 0V22.5h1.5a2.5 2.5 0 000-5h-2.25zM14.5 21H13v-2h1.5a1 1 0 110 2z" fill={primaryFill} /></svg>;
}

const Fps6028Filled = wrapIcon(rawSvg({}), 'Fps6028Filled');
export default Fps6028Filled;
      