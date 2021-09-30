import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.04 13A12 12 0 0113 2.04v1.21a.75.75 0 001.5 0V2.01A12 12 0 0125.96 13h-1.21a.75.75 0 000 1.5h1.24A12 12 0 0114.5 25.99v-1.24a.75.75 0 10-1.5 0v1.2A12 12 0 012 14.5h1.24a.75.75 0 100-1.5h-1.2zm8.66 1.42a5 5 0 002.88 2.88l4.99 1.92c.4.15.8-.25.65-.65l-1.92-5a5 5 0 00-2.88-2.87l-5-1.92a.5.5 0 00-.64.65l1.92 5z" fill={primaryFill} /></svg>;
}

const CompassNorthwest28Filled = wrapIcon(rawSvg({}), 'CompassNorthwest28Filled');
export default CompassNorthwest28Filled;
      