import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a2 2 0 00-2 2v3c0 1.1.9 2 2 2h3.09a1.5 1.5 0 100-1H3a1 1 0 01-1-1V3a1 1 0 011-1h3a1 1 0 011 1h1a2 2 0 00-2-2H3zm6 10a2 2 0 002-2V6a2 2 0 00-2-2H5.91a1.5 1.5 0 100 1H9a1 1 0 011 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1H4c0 1.1.9 2 2 2h3z" fill={primaryFill} /></svg>;
}

const ChannelShare12Filled = wrapIcon(rawSvg({}), 'ChannelShare12Filled');
export default ChannelShare12Filled;
      