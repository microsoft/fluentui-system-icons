import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.04 20a11 11 0 0121.92 0h.29a7.75 7.75 0 010 15.5h-22.5a7.75 7.75 0 010-15.5h.3zm7.21-2a1.25 1.25 0 100 2.5h7.5a1.25 1.25 0 100-2.5h-7.5zM11 27.25c0 .69.56 1.25 1.25 1.25h8.5a1.25 1.25 0 100-2.5h-8.5c-.69 0-1.25.56-1.25 1.25zM27.25 26a1.25 1.25 0 100 2.5h8.5a1.25 1.25 0 100-2.5h-8.5z" fill={primaryFill} /></svg>;
}

const CloudWords48Filled = wrapIcon(rawSvg({}), 'CloudWords48Filled');
export default CloudWords48Filled;
      