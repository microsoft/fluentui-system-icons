import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 3.75c.41 0 .75.34.75.75V10h2.5a.75.75 0 010 1.5H17v5.55a2.51 2.51 0 00-1.5.16V4.5c0-.41.34-.75.75-.75zM16.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM4 5.5c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75 0 1.74-.36 4.37-1.48 6.59-1.13 2.24-3.1 4.16-6.27 4.16a.75.75 0 010-1.5c2.43 0 3.96-1.41 4.93-3.34.84-1.66 1.2-3.63 1.3-5.16H4.75A.75.75 0 014 5.5zM12.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const SlideDesign24Regular = wrapIcon(rawSvg({}), 'SlideDesign24Regular');
export default SlideDesign24Regular;
      