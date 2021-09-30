import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 1.76c-.83 0-1.5.68-1.5 1.5v1.76H3.5c-.83 0-1.5.67-1.5 1.5V9.5c0 .83.67 1.5 1.5 1.5H5v1.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5V11h1.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H11V3.26c0-.82-.67-1.5-1.5-1.5h-3z" fill={primaryFill} /></svg>;
}

const Doctor16Filled = wrapIcon(rawSvg({}), 'Doctor16Filled');
export default Doctor16Filled;
      