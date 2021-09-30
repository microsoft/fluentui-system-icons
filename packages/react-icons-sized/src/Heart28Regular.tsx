import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.6 6.2a6.52 6.52 0 119.51 8.9l-9.58 9.68a.75.75 0 01-1.06 0L3.89 15.1a6.52 6.52 0 119.5-8.92l.61.68.6-.68zm8.65 1a5.02 5.02 0 00-7.52-.01L14.56 8.5a.75.75 0 01-1.12 0L12.27 7.2a5.02 5.02 0 10-7.32 6.86L14 23.18l9.05-9.13a5.02 5.02 0 00.2-6.85z" fill={primaryFill} /></svg>;
}

const Heart28Regular = wrapIcon(rawSvg({}), 'Heart28Regular');
export default Heart28Regular;
      