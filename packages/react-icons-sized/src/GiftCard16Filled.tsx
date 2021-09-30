import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3h2v2.09A1.5 1.5 0 003.09 7H1V5c0-1.1.9-2 2-2z" fill={primaryFill} /><path d="M6 8.7l1.15 1.15a.5.5 0 00.7-.7L6.71 8H15v3a2 2 0 01-2 2H6V8.7z" fill={primaryFill} /><path d="M4.3 8L3.14 9.15a.5.5 0 10.7.7L5 8.71V13H3a2 2 0 01-2-2V8h3.3z" fill={primaryFill} /><path d="M7.91 7A1.5 1.5 0 006 5.09V3h7a2 2 0 012 2v2H7.91z" fill={primaryFill} /><path d="M6 6.5V7h.5a.5.5 0 10-.5-.5z" fill={primaryFill} /><path d="M5 6.5V7h-.5a.5.5 0 11.5-.5z" fill={primaryFill} /></svg>;
}

const GiftCard16Filled = wrapIcon(rawSvg({}), 'GiftCard16Filled');
export default GiftCard16Filled;
      