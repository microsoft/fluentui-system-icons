import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 13C10.24 13 9 14.21 9 16s1.24 3 2.5 3c.46 0 .9-.15 1.27-.42a1 1 0 111.17 1.63c-.7.5-1.53.79-2.44.79C8.9 21 7 18.63 7 16s1.9-5 4.5-5c.95 0 1.82.33 2.54.87a1 1 0 11-1.21 1.6c-.4-.3-.85-.47-1.33-.47zm7.5 3c0-1.79 1.24-3 2.5-3 .48 0 .93.16 1.33.46a1 1 0 001.2-1.6A4.18 4.18 0 0021.5 11c-2.6 0-4.5 2.37-4.5 5s1.9 5 4.5 5c.9 0 1.74-.3 2.44-.8a1 1 0 10-1.17-1.62c-.38.27-.81.42-1.27.42-1.26 0-2.5-1.21-2.5-3zM2 8.5A4.5 4.5 0 016.5 4h19A4.5 4.5 0 0130 8.5v15a4.5 4.5 0 01-4.5 4.5h-19A4.5 4.5 0 012 23.5v-15zM6.5 6A2.5 2.5 0 004 8.5v15A2.5 2.5 0 006.5 26h19a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0025.5 6h-19z" fill={primaryFill} /></svg>;
}

const ClosedCaption32Regular = wrapIcon(rawSvg({}), 'ClosedCaption32Regular');
export default ClosedCaption32Regular;
      