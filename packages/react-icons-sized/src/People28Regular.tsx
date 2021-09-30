import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 16h11a2 2 0 012 1.85v2.65c0 4.2-4.29 5.5-7.5 5.5-3.15 0-7.33-1.25-7.5-5.25V18a2 2 0 011.85-2H4zm20 0h.15a2 2 0 011.84 1.84L26 18v2c0 3.76-3.43 5-6 5a7.74 7.74 0 01-3.3-.73c.3-.37.58-.8.79-1.26.96.42 1.99.48 2.43.49h.28c1.04-.04 4.13-.39 4.3-3.27V18a.5.5 0 00-.41-.5h-6.14c-.09-.5-.3-.96-.6-1.34l-.13-.16H24zM4 17.5l-.1.01a.5.5 0 00-.25.14.5.5 0 00-.14.25l-.01.1v2.5c0 1.34.59 2.33 1.8 3.02 1 .58 2.38.93 3.86.97l.34.01.43-.01c1.53-.07 5.38-.56 5.56-3.76l.01-.23V18a.5.5 0 00-.41-.5H4zM9.5 3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm11 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm-11-.5a4 4 0 100 8 4 4 0 000-8zm11 2a3 3 0 100 6 3 3 0 000-6z" fill={primaryFill} /></svg>;
}

const People28Regular = wrapIcon(rawSvg({}), 'People28Regular');
export default People28Regular;
      