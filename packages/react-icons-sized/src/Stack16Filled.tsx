import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 2C1.67 2 1 2.67 1 3.5v5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-7zm2.58 11c.21.58.77 1 1.42 1h3A5.5 5.5 0 0015 8.5v-1c0-.65-.42-1.2-1-1.41V8.5A4.5 4.5 0 019.5 13H5.08zm-.58-1a1.5 1.5 0 01-1.42-1H9.5A2.5 2.5 0 0012 8.5V4.09c.58.2 1 .76 1 1.41v3A3.5 3.5 0 019.5 12h-5z" fill={primaryFill} /></svg>;
}

const Stack16Filled = wrapIcon(rawSvg({}), 'Stack16Filled');
export default Stack16Filled;
      