import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.23 2.5a.5.5 0 00-.5-.5H2.5a.5.5 0 00-.5.5v4.23a.5.5 0 001 0V3.71l3.38 3.37a.5.5 0 10.7-.7L3.71 3h3.02a.5.5 0 00.5-.5zm5.77 2c0-.83-.67-1.5-1.5-1.5H9.27a.5.5 0 010-1h2.23A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5V9.27a.5.5 0 011 0v2.23c0 .83.67 1.5 1.5 1.5H8V9.77C8 8.79 8.8 8 9.77 8H13V4.5zM13 9H9.77a.77.77 0 00-.77.77V13h2.5c.83 0 1.5-.67 1.5-1.5V9z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft16Regular = wrapIcon(rawSvg({}), 'ExpandUpLeft16Regular');
export default ExpandUpLeft16Regular;
      