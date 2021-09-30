import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 16c0-1.4.08-2.73.22-4h9.56c.09.8.15 1.64.19 2.5H17a4.5 4.5 0 00-4.5 4.5v1h-2.28c-.14-1.27-.22-2.6-.22-4zm5 3c0-1.1.9-2 2-2h7a2 2 0 012 2v.84l2.42-1.72a1 1 0 011.58.81v9.14a1 1 0 01-1.58.81L26 27.16V28a2 2 0 01-2 2h-7a2 2 0 01-2-2v-9zm-4.49 3h1.99v5.92c-.28-.48-.56-1.05-.81-1.68-.49-1.2-.89-2.64-1.18-4.24zm16.75-6.1a3.43 3.43 0 011.73-.47 13.98 13.98 0 00-.57-3.43h-6.63c.09.81.15 1.65.18 2.5H24c1.28 0 2.44.54 3.26 1.4zM8.2 20a37.62 37.62 0 010-8H1.58a14 14 0 000 8h6.63zm-5.86 2h6.13c.32 1.86.78 3.55 1.35 4.98.37.92.8 1.76 1.27 2.47A14.04 14.04 0 012.35 22zM18.3 5.76c.49 1.2.89 2.64 1.18 4.24H10.5c.3-1.6.7-3.03 1.18-4.24a9.26 9.26 0 011.7-2.9C14 2.24 14.53 2 15 2H15c.47 0 1.01.23 1.6.87.61.63 1.2 1.6 1.71 2.9zm3.2 4.24h6.14a14.04 14.04 0 00-8.75-7.45c.48.71.9 1.55 1.27 2.47A24.56 24.56 0 0121.52 10zM2.36 10h6.13c.32-1.86.78-3.55 1.35-4.98.37-.92.8-1.76 1.27-2.47A14.04 14.04 0 002.35 10z" fill={primaryFill} /></svg>;
}

const GlobeVideo32Filled = wrapIcon(rawSvg({}), 'GlobeVideo32Filled');
export default GlobeVideo32Filled;
      