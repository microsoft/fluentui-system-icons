import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.5v1H4c-.83 0-1.5.67-1.5 1.5v1H5v-.5a.5.5 0 011 0V8h4v-.5a.5.5 0 011 0V8h2.5V7c0-.83-.67-1.5-1.5-1.5h-1v-1c0-.83-.66-1.5-1.5-1.5h-3C5.69 3 5 3.67 5 4.5zM6.5 4h3c.28 0 .5.22.5.5v1H6v-1c0-.28.23-.5.5-.5z" fill={primaryFill} /><path d="M13.5 9H11v.5a.5.5 0 01-1 0V9H6v.5a.5.5 0 01-1 0V9H2.5v2c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V9z" fill={primaryFill} /></svg>;
}

const Toolbox16Filled = wrapIcon(rawSvg({}), 'Toolbox16Filled');
export default Toolbox16Filled;
      