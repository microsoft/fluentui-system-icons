import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 9.5a2.6 2.6 0 01-.86 1.93c.82.58 1.36 1.5 1.36 2.57 0 1.86-1.64 3.25-3.5 3.25S9.5 15.86 9.5 14c0-1.07.54-1.99 1.36-2.57A2.6 2.6 0 0110 9.5c0-1.6 1.43-2.75 3-2.75s3 1.15 3 2.75zm-3-1.25c-.91 0-1.5.64-1.5 1.25s.59 1.25 1.5 1.25 1.5-.64 1.5-1.25-.59-1.25-1.5-1.25zM11 14c0 .9.83 1.75 2 1.75s2-.85 2-1.75-.83-1.75-2-1.75-2 .85-2 1.75zm7.28-1.78a.75.75 0 00-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 101.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 001.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 10-1.06-1.06l-1.22 1.22-1.22-1.22zM8.5 16.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.45 7.03c.33.09.55.38.55.72v8.5a.75.75 0 01-1.5 0V9.83c-.38.37-.84.75-1.36 1.06a.75.75 0 01-.78-1.28A6.88 6.88 0 004.6 7.37v-.01h.01a.75.75 0 01.84-.33z" fill={primaryFill} /></svg>;
}

const Multiplier18X24Regular = wrapIcon(rawSvg({}), 'Multiplier18X24Regular');
export default Multiplier18X24Regular;
      