import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.8 4.8-3.86.57a1.35 1.35 0 00-.75 2.3l3.82 3.72-.9 5.25a1.35 1.35 0 001.95 1.42L12 18.86l4.72 2.48c.99.52 2.14-.32 1.96-1.42l-.04-.22 2.08 2.08a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M21.59 10.95l-3.78 3.68-8.5-8.51 1.48-3.02c.5-1 1.93-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3z" fill={primaryFill} /></svg>;
}

const StarOff24Filled = wrapIcon(rawSvg({}), 'StarOff24Filled');
export default StarOff24Filled;
      