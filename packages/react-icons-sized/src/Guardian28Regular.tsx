import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 9a4 4 0 100-8 4 4 0 000 8zm0-1.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM19.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-1.5a2 2 0 110-4 2 2 0 010 4zm-4 8.66a2.25 2.25 0 01-2.5.71v4.75a2.37 2.37 0 01-4 1.74 2.37 2.37 0 01-4-1.73v-4.76a2.25 2.25 0 01-3-2.12v-4A2.75 2.75 0 014.75 10h8.5c1.25 0 2.3.84 2.64 1.98h7.36A2.75 2.75 0 0126 14.73v2.67a2.25 2.25 0 01-3 2.13v4.24a2.25 2.25 0 01-3.75 1.67 2.25 2.25 0 01-3.75-1.68v-5.6zm.5-4.68v2.81a.75.75 0 011 .7v6.78a.75.75 0 001.5 0v-3.63a.75.75 0 111.5 0v3.63a.75.75 0 001.5 0v-7.95a.75.75 0 011.5 0v1.58a.75.75 0 001.5 0v-2.67c0-.69-.56-1.25-1.25-1.25H16zm-4.5.22a.75.75 0 111.5 0v3.05a.75.75 0 001.5 0v-4c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 001.5 0V13.6a.75.75 0 011.5 0v10.03a.88.88 0 001.75 0v-3.88a.75.75 0 011.5 0v3.88a.88.88 0 001.75 0V13.7z" fill={primaryFill} /></svg>;
}

const Guardian28Regular = wrapIcon(rawSvg({}), 'Guardian28Regular');
export default Guardian28Regular;
      