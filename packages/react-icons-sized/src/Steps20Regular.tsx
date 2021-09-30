import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 3a1 1 0 011-1h3a1 1 0 011 1v4h-1V3h-3v3a1 1 0 01-1 1H8v3a1 1 0 01-1 1H4v3h4v1H4a1 1 0 01-1-1v-3a1 1 0 011-1h3V7a1 1 0 011-1h3V3zm3 5a1 1 0 00-1 1v3h-3a1 1 0 00-1 1v3a1 1 0 001 1h5.5a2.5 2.5 0 002.5-2.5V9a1 1 0 00-1-1h-3zm0 1h3v5.5c0 .83-.67 1.5-1.5 1.5H10v-3h3a1 1 0 001-1V9z" fill={primaryFill} /></svg>;
}

const Steps20Regular = wrapIcon(rawSvg({}), 'Steps20Regular');
export default Steps20Regular;
      