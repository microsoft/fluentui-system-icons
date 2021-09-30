import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 4a1 1 0 011 1v8a1 1 0 11-2 0V5a1 1 0 011-1z" fill={primaryFill} /><path d="M4 18a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1z" fill={primaryFill} /><path d="M7.7 6.3a1 1 0 00-1.4 1.4l7 7a1 1 0 001.4-1.4l-7-7z" fill={primaryFill} /></svg>;
}

const New24Filled = wrapIcon(rawSvg({}), 'New24Filled');
export default New24Filled;
      