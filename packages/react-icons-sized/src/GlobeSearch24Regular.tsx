import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.44 9.96a4.93 4.93 0 006.23 7.57l4.26 4.25a.77.77 0 001.17-1l-.08-.1-4.21-4.2a4.93 4.93 0 00-7.37-6.52zM12.03 2a10 10 0 00-9.76 7.76 5.83 5.83 0 012.24-1.73 8.52 8.52 0 014.4-3.94l-.11.17c-.54.9-.97 2.01-1.28 3.28.5.05 1 .17 1.47.34.63-2.63 1.82-4.38 3.04-4.38h.11c1.27.12 2.49 2.12 3.06 5h-5a5.95 5.95 0 011.55 1.5h3.67a18.97 18.97 0 01-.13 5h-2.65a5.9 5.9 0 01-.3.84l-.13.27-.12.23.16.16h2.71c-.2.75-.45 1.42-.73 1.98l1.1 1.11c.5-.86.9-1.9 1.19-3.09h2.72a8.54 8.54 0 01-3.73 3.26l.22.22.13.14c.22.3.34.63.37.96A10 10 0 0012.03 2zM9.3 11.05a3.38 3.38 0 11-4.78 4.78 3.38 3.38 0 014.78-4.78zM16.93 10h3.36v.03A8.52 8.52 0 0120 15H16.8a20.31 20.31 0 00.12-5zm-1.79-5.91h.03c2.04.82 3.7 2.41 4.6 4.4h-3.04a12.36 12.36 0 00-1.59-4.4z" fill={primaryFill} /></svg>;
}

const GlobeSearch24Regular = wrapIcon(rawSvg({}), 'GlobeSearch24Regular');
export default GlobeSearch24Regular;
      