import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.28 4.23l14.5 14.5a.75.75 0 11-1.06 1.05L13.93 16H6.7a3.69 3.69 0 01-.12-7.37L3.22 5.3a.75.75 0 111.06-1.06zM12 4c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 01.78 7.28L7.93 5.75A5.08 5.08 0 0112 4z" fill={primaryFill} /></svg>;
}

const CloudOffline24Filled = wrapIcon(rawSvg({}), 'CloudOffline24Filled');
export default CloudOffline24Filled;
      