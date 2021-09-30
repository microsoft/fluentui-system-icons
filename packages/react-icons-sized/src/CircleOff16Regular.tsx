import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.87 12.58l2.28 2.27a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l2.27 2.28a6 6 0 008.46 8.46zm-.7-.7a5 5 0 01-7.04-7.04l7.03 7.03zM13 8c0 .83-.2 1.62-.57 2.31l.74.74a6 6 0 00-8.22-8.22l.74.74A5 5 0 0113 8z" fill={primaryFill} /></svg>;
}

const CircleOff16Regular = wrapIcon(rawSvg({}), 'CircleOff16Regular');
export default CircleOff16Regular;
      