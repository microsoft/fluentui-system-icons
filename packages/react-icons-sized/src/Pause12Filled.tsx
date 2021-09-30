import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2a1 1 0 00-1 1v6a1 1 0 001 1h1a1 1 0 001-1V3a1 1 0 00-1-1H3z" fill={primaryFill} /><path d="M8 2a1 1 0 00-1 1v6a1 1 0 001 1h1a1 1 0 001-1V3a1 1 0 00-1-1H8z" fill={primaryFill} /></svg>;
}

const Pause12Filled = wrapIcon(rawSvg({}), 'Pause12Filled');
export default Pause12Filled;
      