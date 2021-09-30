import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.45 7.03c.33.09.55.38.55.72v8.5a.75.75 0 01-1.5 0V9.83c-.38.37-.84.75-1.36 1.06a.75.75 0 01-.78-1.28A6.88 6.88 0 004.6 7.37v-.01h.01a.75.75 0 01.84-.33zm5.3-.03c-.4 0-.72.3-.75.7l-.25 3.75a.75.75 0 00.86.8l2.2-.32a1.92 1.92 0 11.27 3.82h-.36c-.64 0-1.25-.27-1.68-.75l-.23-.25a.75.75 0 10-1.12 1l.24.26a3.78 3.78 0 002.8 1.24h.35a3.42 3.42 0 10-.48-6.8l-1.29.18.14-2.13h3.8a.75.75 0 100-1.5h-4.5zm7.53 5.22a.75.75 0 00-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 101.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 001.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 10-1.06-1.06l-1.22 1.22-1.22-1.22zM8.5 16.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const Multiplier15X24Regular = wrapIcon(rawSvg({}), 'Multiplier15X24Regular');
export default Multiplier15X24Regular;
      