import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 39.5a15.5 15.5 0 0015.42-17.13c-.08-.71.46-1.37 1.17-1.37.67 0 1.25.48 1.32 1.15a18 18 0 11-5.4-11.1v-2.8a1.25 1.25 0 112.49 0v6.5c0 .69-.56 1.25-1.25 1.25h-6.5a1.25 1.25 0 110-2.5h4.15a15.5 15.5 0 10-11.4 26z" fill={primaryFill} /></svg>;
}

const ArrowClockwise48Regular = wrapIcon(rawSvg({}), 'ArrowClockwise48Regular');
export default ArrowClockwise48Regular;
      