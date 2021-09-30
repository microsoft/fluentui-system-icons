import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 22a4 4 0 01-4 4h-3a1 1 0 01-1-1v-8a1 1 0 011-1h5v-2a10 10 0 00-20 0v2h5a1 1 0 011 1v8a1 1 0 01-1 1H6a4 4 0 01-4-4v-8a12 12 0 1124 0v8z" fill={primaryFill} /></svg>;
}

const Headphones28Filled = wrapIcon(rawSvg({}), 'Headphones28Filled');
export default Headphones28Filled;
      