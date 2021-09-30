import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25V18.5c-.19.14-.36.31-.5.5a2.5 2.5 0 00-4 0 2.5 2.5 0 10-4 3H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2zm3.5 1.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M17.5 22a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /><path d="M13.5 19a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /><path d="M21.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const ClipboardMore24Filled = wrapIcon(rawSvg({}), 'ClipboardMore24Filled');
export default ClipboardMore24Filled;
      