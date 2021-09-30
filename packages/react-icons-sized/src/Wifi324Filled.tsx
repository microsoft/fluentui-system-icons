import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.94 16.45a1.5 1.5 0 112.12 2.12 1.5 1.5 0 01-2.12-2.12zm-2.6-2.75a5.23 5.23 0 018.5 1.63 1 1 0 01-1.84.8 3.23 3.23 0 00-5.93-.01 1 1 0 11-1.83-.8c.27-.6.63-1.16 1.1-1.62z" fill={primaryFill} /></svg>;
}

const Wifi324Filled = wrapIcon(rawSvg({}), 'Wifi324Filled');
export default Wifi324Filled;
      