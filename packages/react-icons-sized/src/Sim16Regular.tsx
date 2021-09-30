import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 9.5C5 8.67 5.67 8 6.5 8h3c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 015 11.5v-2zM6.5 9a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H8V9H6.5zM9 9v3h.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H9z" fill={primaryFill} /><path d="M3 3.5A2.5 2.5 0 015.5 1h3.17c.66 0 1.3.26 1.77.73l1.83 1.83c.47.47.73 1.1.73 1.77v7.17a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 013 12.5v-9zM5.5 2C4.67 2 4 2.67 4 3.5v9c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5V5.33c0-.4-.16-.78-.44-1.06L9.73 2.44A1.5 1.5 0 008.67 2H5.5z" fill={primaryFill} /></svg>;
}

const Sim16Regular = wrapIcon(rawSvg({}), 'Sim16Regular');
export default Sim16Regular;
      