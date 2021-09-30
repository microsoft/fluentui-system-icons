import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.55 2.15c.26-.2.63-.2.9 0a18.61 18.61 0 006.28 2.75 25.9 25.9 0 003.28.6h.05c.4.04.69.36.69.75V13c0 .5-.03 1.01-.1 1.53a4.01 4.01 0 00-1.4-1.13V6.92a23.14 23.14 0 01-2.89-.57c-1.89-.47-4.28-1.3-6.35-2.68a17.6 17.6 0 01-4.27 2.05 27.66 27.66 0 01-5.24 1.2v5.83c0 4.36 2.95 9.51 9.5 11.71.34-.12.68-.24 1-.37V25a3 3 0 00.08.67l-.85.3a.75.75 0 01-.46 0C6.47 23.61 3 17.83 3 12.74v-6.5c0-.39.3-.72.69-.75h.02a8.7 8.7 0 00.43-.04l1.23-.19C6.4 5.1 7.8 4.8 9.26 4.3c1.5-.5 3.02-1.2 4.29-2.15zM18.5 18v-1a3 3 0 116 0v1h.5a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2v-5c0-1.1.9-2 2-2h.5zm1.5-1v1h3v-1a1.5 1.5 0 00-3 0zm3 5.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill={primaryFill} /></svg>;
}

const ShieldVideo28Regular = wrapIcon(rawSvg({}), 'ShieldVideo28Regular');
export default ShieldVideo28Regular;
      