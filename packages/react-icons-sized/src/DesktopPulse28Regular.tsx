import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 25H8.25a.75.75 0 01-.1-1.5H10V21H4.25C3.01 21 2 20 2 18.75V14.5h1.5v4.25c0 .42.34.75.75.75h19.5c.41 0 .75-.33.75-.75V14.5H26v4.25C26 20 25 21 23.75 21H18v2.5h1.75c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01zm-3.25-4h-5v2.5h5V21zM2 5.25V11h1.5V5.25c0-.41.34-.75.75-.75h19.5c.41 0 .75.34.75.75V11H26V5.25C26 4.01 25 3 23.75 3H4.25C3.01 3 2 4 2 5.25zm9.2 1.22a.75.75 0 00-1.39-.02L7.41 12H2.74a.75.75 0 000 1.5h5.14c.3 0 .57-.18.7-.45l1.88-4.35 3.33 8.33a.75.75 0 001.38.04l2.84-6.1 1.06 2.12c.13.25.39.41.67.41h5.5a.75.75 0 000-1.5h-5.04l-1.54-3.09a.75.75 0 00-1.35.02l-2.77 5.93-3.35-8.39z" fill={primaryFill} /></svg>;
}

const DesktopPulse28Regular = wrapIcon(rawSvg({}), 'DesktopPulse28Regular');
export default DesktopPulse28Regular;
      