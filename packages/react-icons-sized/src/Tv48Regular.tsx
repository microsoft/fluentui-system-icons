import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 8A4.75 4.75 0 004 12.75v18.5A4.75 4.75 0 008.75 36h30.5A4.75 4.75 0 0044 31.25v-18.5A4.75 4.75 0 0039.25 8H8.75zM6.5 12.75c0-1.24 1-2.25 2.25-2.25h30.5c1.24 0 2.25 1 2.25 2.25v18.5c0 1.24-1 2.25-2.25 2.25H8.75c-1.24 0-2.25-1-2.25-2.25v-18.5z" fill={primaryFill} /><path d="M11.25 39.5a1.25 1.25 0 100 2.5h25.5a1.25 1.25 0 100-2.5h-25.5z" fill={primaryFill} /></svg>;
}

const Tv48Regular = wrapIcon(rawSvg({}), 'Tv48Regular');
export default Tv48Regular;
      