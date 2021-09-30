import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v2.5h3.75V3.5h-2.5zm4 0v3.75h3.75v-2.5c0-.69-.56-1.25-1.25-1.25h-2.5zm3.75 5.25H8.75v3.75h2.5c.69 0 1.25-.56 1.25-1.25v-2.5zM7.25 12.5V8.75H3.5v2.5c0 .69.56 1.25 1.25 1.25h2.5zM2 4.75A2.75 2.75 0 014.75 2h6.5A2.75 2.75 0 0114 4.75v6.5A2.75 2.75 0 0111.25 14h-6.5A2.75 2.75 0 012 11.25v-6.5z" fill={primaryFill} /></svg>;
}

const BorderAll16Filled = wrapIcon(rawSvg({}), 'BorderAll16Filled');
export default BorderAll16Filled;
      