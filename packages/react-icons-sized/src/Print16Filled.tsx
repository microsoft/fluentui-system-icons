import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2C4.67 2 4 2.67 4 3.5V4H3a2 2 0 00-2 2v4.5c0 .83.67 1.5 1.5 1.5H4v.5c0 .83.67 1.5 1.5 1.5h5.1c.83 0 1.5-.67 1.5-1.5V12h1.4c.83 0 1.5-.67 1.5-1.5V6a2 2 0 00-2-2h-1v-.5c0-.83-.67-1.5-1.5-1.5h-5zM11 4H5v-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V4zm-5.5 6h5.1c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5H5.5a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const Print16Filled = wrapIcon(rawSvg({}), 'Print16Filled');
export default Print16Filled;
      