import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.35 6.1a.5.5 0 00-.7 0L6.5 7.24V3.5a.5.5 0 00-1 0v3.74L4.35 6.1a.5.5 0 10-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 000-.7zM6 11A5 5 0 106 1a5 5 0 000 10zm4-5a4 4 0 11-8 0 4 4 0 018 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown12Regular = wrapIcon(rawSvg({}), 'ArrowCircleDown12Regular');
export default ArrowCircleDown12Regular;
      