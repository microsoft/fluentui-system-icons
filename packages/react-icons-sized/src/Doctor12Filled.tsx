import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2a1 1 0 00-1 1v1H3a1 1 0 00-1 1v2a1 1 0 001 1h1v1a1 1 0 001 1h2a1 1 0 001-1V8h1a1 1 0 001-1V5a1 1 0 00-1-1H8V3a1 1 0 00-1-1H5z" fill={primaryFill} /></svg>;
}

const Doctor12Filled = wrapIcon(rawSvg({}), 'Doctor12Filled');
export default Doctor12Filled;
      