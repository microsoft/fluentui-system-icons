import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.06 14.18c.46 1.43.69 2.68.69 3.76 0 2.4-.94 4.24-2.5 4.24-.8 0-1.08-.45-1.38-1.54l-.27-1.02a257.4 257.4 0 00-.56-1.9l-2.87-4.49a5.89 5.89 0 00-2.85-2.32l-1.26-.48a1.75 1.75 0 01-1.09-1.97l.69-3.54c.16-.86.82-1.55 1.67-1.76l8.25-2.02a4.75 4.75 0 015.73 3.44l1.58 6.17a2.75 2.75 0 01-2.67 3.43h-3.16z" fill={primaryFill} /></svg>;
}

const ThumbDislike24Filled = wrapIcon(rawSvg({}), 'ThumbDislike24Filled');
export default ThumbDislike24Filled;
      