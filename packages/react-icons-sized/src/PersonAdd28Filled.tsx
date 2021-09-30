import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.11 25.72A7.48 7.48 0 0114.5 16H5a3 3 0 00-3 3v.71C2 23.43 6.21 26 12 26c1.1 0 2.14-.1 3.11-.28zM18 8A6 6 0 106 8a6 6 0 0012 0zm2.5 19a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-11c.28 0 .5.22.5.5V20h3.5a.5.5 0 010 1H21v3.5a.5.5 0 01-1 0V21h-3.5a.5.5 0 010-1H20v-3.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const PersonAdd28Filled = wrapIcon(rawSvg({}), 'PersonAdd28Filled');
export default PersonAdd28Filled;
      