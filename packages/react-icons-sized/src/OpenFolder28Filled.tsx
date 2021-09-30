import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 7.75a5 5 0 015-5h12a5 5 0 015 5V13a1 1 0 11-2 0V7.75a3 3 0 00-3-3H8a3 3 0 00-3 3V20a3 3 0 003 3h5a1 1 0 110 2H8a5 5 0 01-5-5V7.75z" fill={primaryFill} /><path d="M10 11a1 1 0 011-1h8a1 1 0 110 2h-5.53l8.24 8.3a1 1 0 01-1.42 1.4L12 13.36V19a1 1 0 11-2 0v-8z" fill={primaryFill} /></svg>;
}

const OpenFolder28Filled = wrapIcon(rawSvg({}), 'OpenFolder28Filled');
export default OpenFolder28Filled;
      