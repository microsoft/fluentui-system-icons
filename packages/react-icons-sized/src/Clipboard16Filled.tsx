import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 13.5v-10C3 2.67 3.67 2 4.5 2h.59zM6.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /></svg>;
}

const Clipboard16Filled = wrapIcon(rawSvg({}), 'Clipboard16Filled');
export default Clipboard16Filled;
      