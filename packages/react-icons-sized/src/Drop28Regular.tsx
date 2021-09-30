import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.47 2.22c.3-.3.77-.3 1.06 0 .52.52 2.5 2.61 4.34 5.32 1.82 2.66 3.63 6.08 3.63 9.21 0 3.04-.92 5.37-2.49 6.95A8.32 8.32 0 0114 26c-2.3 0-4.44-.73-6.01-2.3-1.57-1.58-2.49-3.9-2.49-6.95 0-3.13 1.8-6.55 3.63-9.21 1.85-2.7 3.82-4.8 4.34-5.32zM14 3.84c-.8.87-2.26 2.53-3.63 4.54C8.57 11.02 7 14.1 7 16.75c0 2.74.82 4.65 2.05 5.89A6.83 6.83 0 0014 24.5c1.98 0 3.71-.63 4.95-1.86C20.18 21.4 21 19.49 21 16.75c0-2.65-1.57-5.73-3.37-8.37A41.01 41.01 0 0014 3.84z" fill={primaryFill} /></svg>;
}

const Drop28Regular = wrapIcon(rawSvg({}), 'Drop28Regular');
export default Drop28Regular;
      