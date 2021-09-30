import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 13a.5.5 0 010 1h-6a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v4.8L13.15 2.14a.5.5 0 11.7.7L3.71 13H8.5z" fill={primaryFill} /></svg>;
}

const ArrowDownLeft16Regular = wrapIcon(rawSvg({}), 'ArrowDownLeft16Regular');
export default ArrowDownLeft16Regular;
      