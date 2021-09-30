import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3A3.75 3.75 0 003 6.75v7.5A3.75 3.75 0 006.75 18h7.42a3 3 0 10-.13-1.5H6.75c-1.24 0-2.25-1-2.25-2.25v-7.5c0-1.24 1-2.25 2.25-2.25h7.5c1.24 0 2.25 1 2.25 2.25v.5a.75.75 0 001.5 0v-.5A3.75 3.75 0 0014.25 3h-7.5zm7.08 7a3 3 0 10.13 1.5h7.29c1.24 0 2.25 1 2.25 2.25v7.5c0 1.24-1 2.25-2.25 2.25h-7.5c-1.24 0-2.25-1-2.25-2.25v-.5a.75.75 0 00-1.5 0v.5A3.75 3.75 0 0013.75 25h7.5A3.75 3.75 0 0025 21.25v-7.5A3.75 3.75 0 0021.25 10h-7.42z" fill={primaryFill} /></svg>;
}

const ChannelShare28Filled = wrapIcon(rawSvg({}), 'ChannelShare28Filled');
export default ChannelShare28Filled;
      