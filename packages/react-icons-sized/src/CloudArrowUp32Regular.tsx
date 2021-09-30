import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.4 7a6.46 6.46 0 00-1.4 4 1 1 0 01-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 19.31 6.7 20 9 20h4.85c-.18.64-.3 1.31-.34 2H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 012 16c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 011.8-4.3A7.64 7.64 0 0116 3c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 012.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0130 16c0 .46-.04.91-.12 1.34a9.05 9.05 0 00-1.95-2.01 3.66 3.66 0 00-1.42-2.18A5.85 5.85 0 0023 12a1 1 0 01-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0016 5c-2.2 0-3.67.87-4.6 2zM30 22.5a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0zm-7.78-5.28c.3-.3.77-.3 1.06 0l4 4a.75.75 0 11-1.06 1.06l-2.72-2.72v7.69a.75.75 0 01-1.5 0v-7.69l-2.72 2.72a.75.75 0 11-1.06-1.06l4-4z" fill={primaryFill} /></svg>;
}

const CloudArrowUp32Regular = wrapIcon(rawSvg({}), 'CloudArrowUp32Regular');
export default CloudArrowUp32Regular;
      