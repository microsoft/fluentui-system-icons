import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 8h7.74a3.25 3.25 0 013 3.06l.01.19v7.5a3.25 3.25 0 01-3.07 3.24h-7.68a3.25 3.25 0 01-3.24-3.06L8 18.75v-7.5A3.25 3.25 0 0111.07 8h.18zM9.5 18.75v.13l.02.15c.13.79.78 1.4 1.59 1.46h7.64c.92 0 1.67-.7 1.74-1.6l.01-.14v-7.5c0-.97-.78-1.75-1.75-1.75h-7.5c-.92 0-1.67.7-1.74 1.6l-.01.15v7.5zM15.75 5h.24c1.25.1 2.3.9 2.76 2h-1.78a1.74 1.74 0 00-1.08-.5H8.25c-.92 0-1.67.7-1.74 1.6l-.01.15v7.5l.01.2c.05.4.22.75.49 1.02v1.78a3.25 3.25 0 01-2-2.82V8.25a3.25 3.25 0 013.07-3.24L8.25 5h7.5zm-3-3c1.3 0 2.42.76 2.94 1.87l.06.13h-1.78a1.74 1.74 0 00-1.08-.5H5.25c-.92 0-1.67.7-1.74 1.6l-.01.15v7.5c0 .48.2.9.5 1.22v1.78a3.25 3.25 0 01-2-2.82V5.25a3.25 3.25 0 013.07-3.24L5.25 2h7.5z" fill={primaryFill} /></svg>;
}

const Tabs24Regular = wrapIcon(rawSvg({}), 'Tabs24Regular');
export default Tabs24Regular;
      