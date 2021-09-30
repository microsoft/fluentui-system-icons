import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27.98 5.37a1.25 1.25 0 00-1.35-1.35L10.12 5.39a1.25 1.25 0 00-.78 2.13l2.62 2.62a1 1 0 010 1.42L4.3 19.22a1.25 1.25 0 000 1.77L11 27.7c.49.5 1.28.5 1.77 0l7.66-7.66a1 1 0 011.42 0l2.62 2.62c.75.76 2.04.28 2.13-.78l1.37-16.51zm-1.51-3.35c2-.16 3.67 1.51 3.5 3.51L28.6 22.05a3.25 3.25 0 01-5.54 2.03l-1.91-1.92-6.96 6.96a3.25 3.25 0 01-4.6 0L2.9 22.4a3.25 3.25 0 010-4.6l6.95-6.95-1.92-1.91A3.25 3.25 0 019.95 3.4l16.52-1.38z" fill={primaryFill} /></svg>;
}

const ArrowOutlineUpRight32Regular = wrapIcon(rawSvg({}), 'ArrowOutlineUpRight32Regular');
export default ArrowOutlineUpRight32Regular;
      