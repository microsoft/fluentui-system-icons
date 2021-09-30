import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.45 7.03c.33.09.55.38.55.72v8.5a.75.75 0 01-1.5 0V9.83c-.38.37-.84.75-1.36 1.06a.75.75 0 01-.78-1.28A6.88 6.88 0 004.6 7.37v-.01h.01a.75.75 0 01.84-.33zm4.97 3.22a.75.75 0 00.83-.68l.03-.12c.03-.1.1-.25.2-.38.17-.25.53-.57 1.37-.57.77 0 1.2.24 1.42.52.24.3.38.8.24 1.6-.07.44-.28.7-.61.9a5.7 5.7 0 01-.98.48l-.52.22c-.6.26-1.28.61-1.8 1.26a4.23 4.23 0 00-.85 2.77.75.75 0 00.75.75h4.75a.75.75 0 000-1.5h-3.94c.08-.5.25-.83.45-1.07.29-.36.7-.6 1.24-.84l.37-.15c.43-.18.94-.39 1.35-.66.6-.4 1.1-.98 1.27-1.9.18-1.05.05-2.04-.54-2.79-.6-.75-1.52-1.09-2.6-1.09-1.32 0-2.13.55-2.6 1.18a2.86 2.86 0 00-.5 1.22v.01s-.04.4 0 0c-.04.42.26.8.67.84zm7.86 1.97a.75.75 0 00-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 001.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 001.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 10-1.06-1.06l-1.22 1.22-1.22-1.22zM8.5 16.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const Multiplier12X24Regular = wrapIcon(rawSvg({}), 'Multiplier12X24Regular');
export default Multiplier12X24Regular;
      