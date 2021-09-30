import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.92 13.88a1.24 1.24 0 11-1.76 1.76 1.24 1.24 0 011.76-1.76z" fill={primaryFill} /></svg>;
}

const Wifi4Filled = wrapIcon(rawSvg({}), 'Wifi4Filled');
export default Wifi4Filled;
      