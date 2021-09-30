import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 39.5A15.5 15.5 0 018.58 22.37c.08-.71-.46-1.37-1.17-1.37a1.3 1.3 0 00-1.32 1.15 18 18 0 105.4-11.1v-2.8a1.25 1.25 0 10-2.49 0v6.5c0 .69.56 1.25 1.25 1.25h6.5a1.25 1.25 0 100-2.5H12.6a15.5 15.5 0 1111.4 26z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwise48Regular = wrapIcon(rawSvg({}), 'ArrowCounterclockwise48Regular');
export default ArrowCounterclockwise48Regular;
      