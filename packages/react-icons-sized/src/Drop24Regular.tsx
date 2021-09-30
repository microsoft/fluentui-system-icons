import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.47 2.22c.3-.3.77-.3 1.06 0 .4.4 2 2.13 3.5 4.36C17.5 8.78 19 11.63 19 14.25c0 2.52-.75 4.48-2.04 5.8A6.78 6.78 0 0112 22a6.78 6.78 0 01-4.96-1.94C5.74 18.73 5 16.77 5 14.25c0-2.62 1.5-5.46 2.97-7.67 1.5-2.23 3.1-3.96 3.5-4.36zm-2.25 5.2c-1.46 2.17-2.72 4.7-2.72 6.83 0 2.23.65 3.77 1.62 4.76.96.98 2.32 1.49 3.88 1.49s2.92-.5 3.88-1.5c.97-.98 1.62-2.52 1.62-4.75 0-2.13-1.26-4.66-2.72-6.83A33.36 33.36 0 0012 3.85c-.65.73-1.74 2.02-2.78 3.57z" fill={primaryFill} /></svg>;
}

const Drop24Regular = wrapIcon(rawSvg({}), 'Drop24Regular');
export default Drop24Regular;
      