import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 14a10 10 0 1120 0 10 10 0 01-20 0zm10-7.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM3 32.25C3 29.9 4.9 28 7.25 28H22v2.5H7.25c-.97 0-1.75.78-1.75 1.75V33c0 2.74 1.36 4.8 3.72 6.24 2.41 1.47 5.85 2.26 9.78 2.26 2.39 0 4.59-.29 6.5-.85l1.97 1.98c-2.5.93-5.4 1.37-8.47 1.37-4.21 0-8.15-.84-11.08-2.62C4.94 39.57 3 36.76 3 33v-.75zM24 28v6.66a4 4 0 001.17 2.84l7.32 7.32a4 4 0 005.67 0l6.67-6.67a4 4 0 000-5.67l-7.32-7.32A4 4 0 0034.67 24h-6.66A4 4 0 0024 28zM29.5 31a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /></svg>;
}

const PersonTag48Regular = wrapIcon(rawSvg({}), 'PersonTag48Regular');
export default PersonTag48Regular;
      