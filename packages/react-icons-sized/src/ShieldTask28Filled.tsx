import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.55 2.15c.26-.2.63-.2.9 0a18.61 18.61 0 006.28 2.75 25.9 25.9 0 003.28.6h.05c.4.04.69.36.69.75V13c0 4.83-3.21 10.62-10.52 12.96a.75.75 0 01-.46 0C6.47 23.62 3 17.84 3 12.75v-6.5c0-.39.3-.72.69-.75H3.75a12.99 12.99 0 00.93-.12c.63-.09 1.51-.24 2.52-.48a17.87 17.87 0 006.35-2.75zm6.22 8.14a.75.75 0 00-1.04-1.08l-7.25 7.01-2.23-2.02a.75.75 0 00-1 1.1L11 17.8c.29.27.74.26 1.02-.01l7.75-7.5z" fill={primaryFill} /></svg>;
}

const ShieldTask28Filled = wrapIcon(rawSvg({}), 'ShieldTask28Filled');
export default ShieldTask28Filled;
      