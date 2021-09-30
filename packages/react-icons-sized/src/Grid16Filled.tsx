import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2C2.67 2 2 2.67 2 3.5v2C2 6.33 2.67 7 3.5 7h2C6.33 7 7 6.33 7 5.5v-2C7 2.67 6.33 2 5.5 2h-2zm7 0C9.67 2 9 2.67 9 3.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2zm-7 7C2.67 9 2 9.67 2 10.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2C7 9.67 6.33 9 5.5 9h-2zm7 0C9.67 9 9 9.67 9 10.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2z" fill={primaryFill} /></svg>;
}

const Grid16Filled = wrapIcon(rawSvg({}), 'Grid16Filled');
export default Grid16Filled;
      