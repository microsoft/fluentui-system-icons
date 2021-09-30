import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.15 8.85l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 00-.7-.7L8.5 9.79V5a.5.5 0 00-1 0v4.8L5.85 8.14a.5.5 0 10-.7.7zM8 15A7 7 0 118 1a7 7 0 010 14zM2 8a6 6 0 1012 0A6 6 0 002 8z" fill={primaryFill} /></svg>;
}

const ArrowCircleDown16Regular = wrapIcon(rawSvg({}), 'ArrowCircleDown16Regular');
export default ArrowCircleDown16Regular;
      