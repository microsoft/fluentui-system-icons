import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.85 5.74A7.64 7.64 0 0116 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 012.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0130 16c0 .46-.04.91-.12 1.34A8.99 8.99 0 0013.5 22H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 012 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 011.8-4.3zM30 22.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm-11.78 1.28l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 10-1.06-1.06l-2.72 2.72v-7.69a.75.75 0 00-1.5 0v7.69l-2.72-2.72a.75.75 0 10-1.06 1.06z" fill={primaryFill} /></svg>;
}

const CloudArrowDown32Filled = wrapIcon(rawSvg({}), 'CloudArrowDown32Filled');
export default CloudArrowDown32Filled;
      