import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-4v-4A2.5 2.5 0 006 4H3.5a2 2 0 00-.5.06V4zm11.5 8.5h-6v-1h6a.5.5 0 010 1zM3 5c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-6C7.5 5.67 6.83 5 6 5H3zm1.5 7.5a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const PhoneLaptop16Filled = wrapIcon(rawSvg({}), 'PhoneLaptop16Filled');
export default PhoneLaptop16Filled;
      