import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.94 17.53A2 2 0 0015 16H3.85A2 2 0 002 18v2.75c.17 4 4.35 5.25 7.5 5.25 1.35 0 2.89-.23 4.22-.8l-1.16-1.16c-.99.32-2 .42-2.63.45l-.43.01h-.34a8.49 8.49 0 01-3.87-.98A3.27 3.27 0 013.5 20.5V18l.01-.1a.5.5 0 01.14-.25.5.5 0 01.25-.14l.1-.01h11.09a.5.5 0 01.41.5v.53l.51-.52c.27-.26.6-.42.93-.48z" fill={primaryFill} /><path d="M22.78 17.5H17.95c-.09-.5-.3-.96-.6-1.34l-.13-.16H24.15a2 2 0 011.84 1.84L26 18v2.03l-1.5-1.5V18a.5.5 0 00-.41-.5h-1.31z" fill={primaryFill} /><path d="M17.97 24.5H18v.03l-.03-.03z" fill={primaryFill} /><path d="M15 8.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-9.5 0a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /><path d="M25 9.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-7.5 0a3 3 0 116 0 3 3 0 01-6 0z" fill={primaryFill} /><path d="M17.78 19.78a.75.75 0 10-1.06-1.06l-3.5 3.5c-.3.3-.3.77 0 1.06l3.5 3.5a.75.75 0 101.06-1.06l-2.22-2.22h8.88l-2.22 2.22a.75.75 0 101.06 1.06l3.5-3.5c.3-.3.3-.77 0-1.06l-3.5-3.5a.75.75 0 10-1.06 1.06L24.44 22h-8.88l2.22-2.22z" fill={primaryFill} /></svg>;
}

const PeopleSwap28Regular = wrapIcon(rawSvg({}), 'PeopleSwap28Regular');
export default PeopleSwap28Regular;
      