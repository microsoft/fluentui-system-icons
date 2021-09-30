import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.09 4.97c.43.52.8 1.08 1.08 1.66a2.76 2.76 0 01-3.66.93l2.58-2.59zm-1.06-1.06l-2.59 2.58a2.75 2.75 0 01.93-3.66 8.2 8.2 0 011.66 1.08zm1.5 11.05a8.26 8.26 0 001.23-6.7 4.25 4.25 0 01-5.34.38l-1.1 1.11 5.2 5.21zm-5.17-7.38a4.25 4.25 0 01.39-5.34 8.26 8.26 0 00-6.71 1.24l5.21 5.2 1.1-1.1zm-2.17 2.17l-5.3-5.3A8.21 8.21 0 005.9 7.68c1.91.3 4.44 1.02 6.53 2.82l.75-.75zm-1.46 1.46a9.17 9.17 0 011.06 1.06 12.13 12.13 0 012.56 6.08 16.24 16.24 0 01.13 1.32 2.3 2.3 0 01-2.5 2.3c-1.98-.15-5.34-.77-7.76-3.19S2.18 13 2.02 11.02v-.19a2.3 2.3 0 012.5-2.3c.34.02.72.06 1.13.12 1.8.27 4.16.93 6.08 2.56zm-3.7 2.26a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 101.06-1.06l-2.5-2.5zm8.29 4.62a13.02 13.02 0 00-2.82-6.53l.75-.75 5.3 5.3a8.21 8.21 0 01-3.23 1.98z" fill={primaryFill} /></svg>;
}

const Sport24Filled = wrapIcon(rawSvg({}), 'Sport24Filled');
export default Sport24Filled;
      