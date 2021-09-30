import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.2 6.2a1 1 0 01-1.4 0l-.8-.79V9a1 1 0 11-2 0V5.41l-.8.8a1 1 0 01-1.4-1.42l2.5-2.5A1 1 0 0112 2a1 1 0 01.7.3l2.5 2.5a1 1 0 010 1.4zM5 11a1 1 0 100 2h14a1 1 0 100-2H5zm7 11a1 1 0 00.7-.3l2.5-2.5a1 1 0 00-1.4-1.4l-.8.79V15a1 1 0 10-2 0v3.59l-.8-.8a1 1 0 00-1.4 1.42l2.5 2.5c.19.19.44.29.7.29" fill={primaryFill} /></svg>;
}

const ArrowMaximizeVertical24Filled = wrapIcon(rawSvg({}), 'ArrowMaximizeVertical24Filled');
export default ArrowMaximizeVertical24Filled;
      