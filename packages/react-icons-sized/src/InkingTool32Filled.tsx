import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.02 2a2 2 0 00-2 2v.81A1 1 0 002 5v2a3 3 0 003 3h22a3 3 0 003-3V4a2 2 0 00-2-2H4.02zm9 24c.02.82.21 1.72.62 2.45.43.78 1.2 1.54 2.34 1.55h.04c1.14-.01 1.91-.77 2.34-1.55.4-.73.6-1.63.62-2.45h-5.96zm6.94-3.1L25.48 12H6.52l5.51 10.9a2 2 0 001.79 1.1h4.36a2 2 0 001.78-1.1z" fill={primaryFill} /></svg>;
}

const InkingTool32Filled = wrapIcon(rawSvg({}), 'InkingTool32Filled');
export default InkingTool32Filled;
      