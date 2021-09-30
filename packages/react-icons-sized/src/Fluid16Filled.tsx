import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 2.5C1 1.67 1.67 1 2.5 1h2C5.33 1 6 1.67 6 2.5v2C6 5.33 5.33 6 4.5 6h-2A1.5 1.5 0 011 4.5v-2zm7 7C8 8.67 8.67 8 9.5 8h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 018 13.5v-4zm-5 1V7h1v3.5c0 .28.22.5.5.5H7v1H4.5A1.5 1.5 0 013 10.5zM7 3v1h3.5c.28 0 .5.22.5.5V7h1V4.5c0-.83-.67-1.5-1.5-1.5H7z" fill={primaryFill} /></svg>;
}

const Fluid16Filled = wrapIcon(rawSvg({}), 'Fluid16Filled');
export default Fluid16Filled;
      