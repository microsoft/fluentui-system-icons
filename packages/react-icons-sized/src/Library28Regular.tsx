import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3h1.99a2 2 0 012 1.85V23a2 2 0 01-1.85 2H4a2 2 0 01-2-1.85V5a2 2 0 011.85-2h2.14H4zm7 0h1.99a2 2 0 012 1.85V23a2 2 0 01-1.85 2h-2.15A2 2 0 019 23.15V5a2 2 0 011.85-2h2.14-2zm9.13 2.03a2 2 0 011.9 1.36l.04.15 3.86 15.49a2 2 0 01-1.31 2.38l-.15.04-1.96.49a2 2 0 01-2.38-1.3l-.04-.16L16.23 8a2 2 0 011.3-2.38l.15-.04 1.97-.5c.16-.03.32-.05.48-.05zM5.99 4.5H4a.5.5 0 00-.5.41V23c0 .24.18.45.41.5h2.08a.5.5 0 00.5-.41V5a.5.5 0 00-.41-.5h-.09zm7 0h-2a.5.5 0 00-.49.41V23c0 .24.17.45.4.5H13a.5.5 0 00.5-.41V5a.5.5 0 00-.41-.5h-.09zm7.14 2.03h-.06l-.06.01-1.96.49a.5.5 0 00-.38.52l.01.09 3.86 15.48c.07.26.3.38.49.38h.06l.06-.02L24.1 23a.5.5 0 00.38-.52l-.02-.1-3.86-15.47a.5.5 0 00-.48-.38z" fill={primaryFill} /></svg>;
}

const Library28Regular = wrapIcon(rawSvg({}), 'Library28Regular');
export default Library28Regular;
      