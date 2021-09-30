import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2v8c0 1.1.9 2 2 2h8v11.6a2.4 2.4 0 01-2.4 2.4H11v-4.34a5.5 5.5 0 00-7-8.06V4.4A2.4 2.4 0 016.4 2H14zM9 23.4c.36-.19.7-.4 1-.66v3.56a.7.7 0 01-1.13.55L6.5 25l-1.04.8-1.33 1.05A.7.7 0 013 26.3v-3.56a5.51 5.51 0 006 .66zM6.5 23A4.48 4.48 0 012 18.5 4.5 4.5 0 116.5 23zm9-20.52V10c0 .27.22.5.5.5h7.5c-.09-.13-.2-.25-.3-.37L15.75 2.7a2.4 2.4 0 00-.26-.22z" fill={primaryFill} /></svg>;
}

const DocumentRibbon28Filled = wrapIcon(rawSvg({}), 'DocumentRibbon28Filled');
export default DocumentRibbon28Filled;
      