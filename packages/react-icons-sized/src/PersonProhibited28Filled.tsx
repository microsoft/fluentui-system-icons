import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.11 25.72A7.48 7.48 0 0114.5 16H5a3 3 0 00-3 3v.71C2 23.43 6.21 26 12 26c1.1 0 2.14-.1 3.11-.28zM18 8A6 6 0 106 8a6 6 0 0012 0zm9 12.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-1.5 0c0-1.11-.36-2.14-.97-2.97l-7 7a5 5 0 007.97-4.03zm-9.03 2.97l7-7a5 5 0 00-7 7z" fill={primaryFill} /></svg>;
}

const PersonProhibited28Filled = wrapIcon(rawSvg({}), 'PersonProhibited28Filled');
export default PersonProhibited28Filled;
      