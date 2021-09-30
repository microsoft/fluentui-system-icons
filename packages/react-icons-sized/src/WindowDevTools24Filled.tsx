import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.05c-.62.63-1 1.5-1 2.45v11A3.5 3.5 0 005.5 20h7.01c.06-.25.15-.5.28-.74l.73-1.26H5.5A1.5 1.5 0 014 16.5V7h14v1.25a4.52 4.52 0 012-.24V5.5c0-.95-.38-1.82-1-2.45V3h-.05c-.63-.62-1.5-1-2.45-1h-11c-.95 0-1.82.38-2.45 1H3v.05zM19.21 9a3.5 3.5 0 01.96.04l-1.65 2.86a1.17 1.17 0 102.02 1.17l1.65-2.86a3.5 3.5 0 01-2.97 5.76l-3.03 5.25a1.46 1.46 0 01-2.53-1.46l3.02-5.24A3.5 3.5 0 0119.21 9zm-8.9.24c.27.3.25.78-.05 1.06l-2.4 2.2 2.4 2.2a.75.75 0 01-1.02 1.1l-3-2.75a.75.75 0 010-1.1l3-2.75a.75.75 0 011.06.04zm2.95 6.56l2.02-1.85a4.5 4.5 0 01-.01-2.9L13.26 9.2a.75.75 0 00-1.02 1.1l2.4 2.2-2.4 2.2a.75.75 0 001.02 1.1z" fill={primaryFill} /></svg>;
}

const WindowDevTools24Filled = wrapIcon(rawSvg({}), 'WindowDevTools24Filled');
export default WindowDevTools24Filled;
      