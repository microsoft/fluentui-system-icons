import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 5c.28 0 .5.22.5.5V8h1.5V5.5a.5.5 0 011 0v5a.5.5 0 01-1 0V9H5v1.5a.5.5 0 01-1 0v-5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M9 5a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h.42A2.58 2.58 0 0012 8.42v-.84A2.58 2.58 0 009.42 5H9zm2 3.42c0 .84-.66 1.53-1.5 1.58V6c.84.05 1.5.74 1.5 1.58v.84z" fill={primaryFill} /><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM4.5 3C3.67 3 3 3.67 3 4.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7z" fill={primaryFill} /></svg>;
}

const Hd16Regular = wrapIcon(rawSvg({}), 'Hd16Regular');
export default Hd16Regular;
      