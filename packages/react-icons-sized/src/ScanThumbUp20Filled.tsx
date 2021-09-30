import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5C3 3.67 3.67 3 4.5 3h2a.5.5 0 000-1h-2A2.5 2.5 0 002 4.5v2a.5.5 0 001 0v-2zm14 11c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 000 1h2a2.5 2.5 0 002.5-2.5v-2a.5.5 0 00-1 0v2zM15.5 3c.83 0 1.5.67 1.5 1.5v2a.5.5 0 001 0v-2A2.5 2.5 0 0015.5 2h-2a.5.5 0 000 1h2zM3 15.5c0 .83.67 1.5 1.5 1.5h2a.5.5 0 010 1h-2A2.5 2.5 0 012 15.5v-2a.5.5 0 011 0v2zM9.52 5.4c.2-.47.8-1.08 1.63-.85.54.14.92.46 1.13.9.19.39.22.81.23 1.15 0 .36-.06.76-.14 1.1h.28c1.2 0 2.13 1.13 1.77 2.3l-.92 3a2.2 2.2 0 01-2.74 1.4l-3.6-1.08a1.82 1.82 0 01-1.19-1.07l-.35-.89c-.32-.83.03-1.74.8-2.18l1.24-.7.03-.02c.04-.04.12-.1.22-.21.2-.22.5-.6.79-1.2l.36-.71c.18-.33.3-.58.46-.94z" fill={primaryFill} /></svg>;
}

const ScanThumbUp20Filled = wrapIcon(rawSvg({}), 'ScanThumbUp20Filled');
export default ScanThumbUp20Filled;
      