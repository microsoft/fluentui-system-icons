import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h12a3 3 0 013 3v6.02a6.46 6.46 0 00-2-.85V6a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1h5.17c.17.72.46 1.4.85 2H6a3 3 0 01-3-3V6z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
}

const TabAdd24Filled = wrapIcon(rawSvg({}), 'TabAdd24Filled');
export default TabAdd24Filled;
      