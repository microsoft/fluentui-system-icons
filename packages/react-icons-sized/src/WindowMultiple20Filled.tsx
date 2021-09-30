import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2A2.75 2.75 0 002 4.75v7.5A2.75 2.75 0 004.75 15h7.5A2.75 2.75 0 0015 12.25v-7.5A2.75 2.75 0 0012.25 2h-7.5zM3.5 6h10v6.25c0 .69-.56 1.25-1.25 1.25h-7.5c-.69 0-1.25-.56-1.25-1.25V6zm1.6 10c.33 1.15 1.4 2 2.65 2h5.5A4.75 4.75 0 0018 13.25v-5.5c0-1.26-.85-2.32-2-2.65v1.65c.3.23.5.6.5 1v5.5c0 1.8-1.46 3.25-3.25 3.25h-5.5c-.4 0-.77-.2-1-.5H5.1z" fill={primaryFill} /></svg>;
}

const WindowMultiple20Filled = wrapIcon(rawSvg({}), 'WindowMultiple20Filled');
export default WindowMultiple20Filled;
      