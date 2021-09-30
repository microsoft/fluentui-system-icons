import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 4.55a1 1 0 00-1 1 1 1 0 101-1z" fill={primaryFill} /><path d="M2.5 3.55c-.11 0-.22.01-.32.03A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5V7.49a2 2 0 10.5-3.94zm3 2.95c0 .28.22.5.5.5h4a.5.5 0 100-1H6a.5.5 0 00-.5.5zm0 3c0 .28.22.5.5.5h2.61a.5.5 0 000-1H6a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const Channel16Filled = wrapIcon(rawSvg({}), 'Channel16Filled');
export default Channel16Filled;
      