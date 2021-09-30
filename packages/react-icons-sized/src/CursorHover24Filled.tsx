import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 4A2.5 2.5 0 002 6.5v9A2.5 2.5 0 004.5 18H9v-7.25a1.75 1.75 0 012.78-1.41l7.5 7.5c.38.27.62.68.7 1.11A2.5 2.5 0 0022 15.5v-9A2.5 2.5 0 0019.5 4h-15z" fill={primaryFill} /><path d="M11.28 10.22a.75.75 0 00-1.28.53v10.5a.75.75 0 001.37.42l2.46-3.58 4.27.9a.75.75 0 00.68-1.27l-7.5-7.5z" fill={primaryFill} /></svg>;
}

const CursorHover24Filled = wrapIcon(rawSvg({}), 'CursorHover24Filled');
export default CursorHover24Filled;
      