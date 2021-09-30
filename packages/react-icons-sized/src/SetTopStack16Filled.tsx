import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 2C1.67 2 1 2.67 1 3.5v5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-7zm3.92 1.73l.63.98 1.04.2a.5.5 0 01.25.86l-.77.73.4 1.36a.5.5 0 01-.74.56L6 7.65l-1.23.77a.5.5 0 01-.75-.56l.41-1.36-.77-.73a.5.5 0 01.25-.86l1.04-.2.63-.98a.5.5 0 01.84 0z" fill={primaryFill} /><path d="M3.09 11c.2.58.76 1 1.41 1H10a3 3 0 003-3V5.5c0-.65-.42-1.2-1-1.41V9a2 2 0 01-2 2H3.09z" fill={primaryFill} /><path d="M5.09 13c.2.58.76 1 1.41 1h4A4.5 4.5 0 0015 9.5v-2c0-.65-.42-1.2-1-1.41V9.5a3.5 3.5 0 01-3.5 3.5H5.09z" fill={primaryFill} /></svg>;
}

const SetTopStack16Filled = wrapIcon(rawSvg({}), 'SetTopStack16Filled');
export default SetTopStack16Filled;
      