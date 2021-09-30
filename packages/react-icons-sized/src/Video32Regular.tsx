import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 5.5A4.5 4.5 0 002 10v12a4.5 4.5 0 004.5 4.5h12A4.5 4.5 0 0023 22v-1.5l4.2 3.15c1.15.87 2.8.04 2.8-1.4V9.75a1.75 1.75 0 00-2.8-1.4L23 11.5V10a4.5 4.5 0 00-4.5-4.5h-12zM23 14l5-3.75v11.5L23 18v-4zm-2-4v12a2.5 2.5 0 01-2.5 2.5h-12A2.5 2.5 0 014 22V10a2.5 2.5 0 012.5-2.5h12A2.5 2.5 0 0121 10z" fill={primaryFill} /></svg>;
}

const Video32Regular = wrapIcon(rawSvg({}), 'Video32Regular');
export default Video32Regular;
      