import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 0110 10v7a3 3 0 01-3 3h-3a1 1 0 01-1-1v-6a1 1 0 011-1h4.5v-2a8.5 8.5 0 00-17 0v2H8a1 1 0 011 1v6a1 1 0 01-1 1H5a3 3 0 01-3-3v-7A10 10 0 0112 2z" fill={primaryFill} /></svg>;
}

const Headphones24Filled = wrapIcon(rawSvg({}), 'Headphones24Filled');
export default Headphones24Filled;
      