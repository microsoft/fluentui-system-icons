import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2A3.25 3.25 0 002 5.25v3a.75.75 0 001.5 0v-3c0-.97.78-1.75 1.75-1.75h3a.75.75 0 000-1.5h-3z" fill={primaryFill} /><path d="M11.75 2a.75.75 0 000 1.5h3c.97 0 1.75.78 1.75 1.75v3a.75.75 0 001.5 0v-3C18 3.45 16.54 2 14.75 2h-3z" fill={primaryFill} /><path d="M2.75 11c.41 0 .75.34.75.75v3c0 .97.78 1.75 1.75 1.75h3a.75.75 0 010 1.5h-3A3.25 3.25 0 012 14.75v-3c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M18 11.75a.75.75 0 00-1.5 0v3c0 .97-.78 1.75-1.75 1.75h-3a.75.75 0 000 1.5h3c1.8 0 3.25-1.46 3.25-3.25v-3z" fill={primaryFill} /></svg>;
}

const Resize20Filled = wrapIcon(rawSvg({}), 'Resize20Filled');
export default Resize20Filled;
      