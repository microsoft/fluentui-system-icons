import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 9.5a.5.5 0 00-1 0V11c0 .28.22.5.5.5h1.5a.5.5 0 000-1h-1v-1zM7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zm5.5 8a4 4 0 10-8 0 4 4 0 008 0z" fill={primaryFill} /></svg>;
}

const ClipboardClock20Filled = wrapIcon(rawSvg({}), 'ClipboardClock20Filled');
export default ClipboardClock20Filled;
      