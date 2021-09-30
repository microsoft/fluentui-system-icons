import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.25 11h-1.2A10 10 0 0111 2.05v1.2a.75.75 0 001.5 0V2.01A10 10 0 0121.95 11h-1.2a.75.75 0 000 1.5h1.24a10 10 0 01-9.49 9.49v-1.24a.75.75 0 00-1.5 0v1.2a10 10 0 01-8.99-9.45h1.24a.75.75 0 000-1.5zm11.4.53a4 4 0 00-2.2-2.14l-4.02-1.6a.5.5 0 00-.65.64l1.6 4.03a4 4 0 002.15 2.2l4.32 1.85a.5.5 0 00.66-.66l-1.86-4.32z" fill={primaryFill} /></svg>;
}

const CompassNorthwest24Filled = wrapIcon(rawSvg({}), 'CompassNorthwest24Filled');
export default CompassNorthwest24Filled;
      