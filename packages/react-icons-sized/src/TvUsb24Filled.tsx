import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 3A2.75 2.75 0 002 5.75v8.5A2.75 2.75 0 004.75 17h9.75v-3c0-.82.4-1.54 1-2v-1A2.5 2.5 0 0118 8.5h3c.36 0 .7.07 1 .2V5.76A2.75 2.75 0 0019.25 3H4.75zm1 15.5h9l.16.28.8 1.22H5.75a.75.75 0 010-1.5zM17.5 20l-1.34-2.04a1 1 0 01-.16-.55V14a1 1 0 011-1v-2a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 011 1v3.44a1 1 0 01-.17.55L21.5 20v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm1-8.5V13h2v-1.5h-2z" fill={primaryFill} /></svg>;
}

const TvUsb24Filled = wrapIcon(rawSvg({}), 'TvUsb24Filled');
export default TvUsb24Filled;
      