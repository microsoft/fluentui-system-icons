import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 019.92 11.26A3.5 3.5 0 0015 14v.05a2.5 2.5 0 00-2 2.45v5c0 .15.01.3.04.45A10 10 0 1112 2zm3.22 6.97l-4.47 4.47-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5-5a.75.75 0 10-1.06-1.06zm3.28 2.53A2.5 2.5 0 0121 14v1h.54c.81.02 1.46.69 1.46 1.5v5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h.5v-1a2.5 2.5 0 012.5-2.5zm-.4 8.42a1 1 0 001.35-1.24 1 1 0 10-1.34 1.24zM17.5 14v1h2v-1a1 1 0 10-2 0z" fill={primaryFill} /></svg>;
}

const CheckmarkLock24Filled = wrapIcon(rawSvg({}), 'CheckmarkLock24Filled');
export default CheckmarkLock24Filled;
      