import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8.42c0 .84-.66 1.53-1.5 1.58V6c.84.05 1.5.74 1.5 1.58v.84z" fill={primaryFill} /><path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0011.5 2h-7zm0 3c.28 0 .5.22.5.5V8h1.5V5.5a.5.5 0 011 0v5a.5.5 0 01-1 0V9H5v1.5a.5.5 0 01-1 0v-5c0-.28.22-.5.5-.5zM9 5h.42A2.58 2.58 0 0112 7.58v.84A2.58 2.58 0 019.42 11H9a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const Hd16Filled = wrapIcon(rawSvg({}), 'Hd16Filled');
export default Hd16Filled;
      