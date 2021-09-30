import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3A2.75 2.75 0 003 5.75v4.68A3.73 3.73 0 014.75 10h5.5A3.75 3.75 0 0114 13.75v5.5c0 .63-.16 1.23-.43 1.75h4.68A2.75 2.75 0 0021 18.25V8h-7.75C12.01 8 11 7 11 5.75V3H5.75z" fill={primaryFill} /><path d="M12.5 3v2.75c0 .41.34.75.75.75H21v-.75A2.75 2.75 0 0018.25 3H12.5z" fill={primaryFill} /><path d="M10.5 14.5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M5.25 11A3.25 3.25 0 002 14.25v4.5C2 20.55 3.46 22 5.25 22h4.5c1.8 0 3.25-1.46 3.25-3.25v-4.5c0-1.8-1.46-3.25-3.25-3.25h-4.5zM3.5 14.25c0-.97.78-1.75 1.75-1.75h4.5c.97 0 1.75.78 1.75 1.75v4.5c0 .2-.04.4-.1.59l-2.3-2.31a2.25 2.25 0 00-3.2 0l-2.3 2.3c-.06-.18-.1-.37-.1-.58v-4.5zm1.16 6.15l2.31-2.3c.3-.3.77-.3 1.06 0l2.3 2.3c-.18.06-.37.1-.58.1h-4.5c-.2 0-.4-.04-.59-.1z" fill={primaryFill} /></svg>;
}

const TabDesktopImage24Filled = wrapIcon(rawSvg({}), 'TabDesktopImage24Filled');
export default TabDesktopImage24Filled;
      