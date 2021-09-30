import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.55 2.15c.26-.2.63-.2.9 0a18.61 18.61 0 006.28 2.75 25.9 25.9 0 003.28.6h.05c.4.04.69.36.69.75V13c0 4.83-3.21 10.62-10.52 12.96a.75.75 0 01-.46 0C6.47 23.62 3 17.84 3 12.75v-6.5c0-.39.3-.72.69-.75h.02a8.7 8.7 0 00.43-.04l1.23-.19C6.4 5.1 7.8 4.8 9.26 4.3c1.5-.5 3.02-1.2 4.29-2.15zM4.5 6.92v5.83c0 4.36 2.95 9.51 9.5 11.71 6.53-2.2 9.25-7.34 9.25-11.46V6.92a23.14 23.14 0 01-2.89-.57c-1.89-.47-4.28-1.3-6.35-2.68a17.6 17.6 0 01-4.27 2.05 27.66 27.66 0 01-5.24 1.2z" fill={primaryFill} /></svg>;
}

const Shield28Regular = wrapIcon(rawSvg({}), 'Shield28Regular');
export default Shield28Regular;
      