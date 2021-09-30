import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 5.43a1.5 1.5 0 00-2.65-.97L11.27 9.3a2 2 0 01-1.53.71H6a4 4 0 00-4 4v4a4 4 0 004 4h3.74a2 2 0 011.53.7l4.08 4.84a1.5 1.5 0 002.65-.97V5.43zm3.43 3.75a1 1 0 011.4.25A11.53 11.53 0 0125.05 16c0 2.24-.77 4.44-2.24 6.57a1 1 0 11-1.64-1.14A9.54 9.54 0 0023.06 16c0-1.76-.6-3.56-1.88-5.43a1 1 0 01.25-1.4zm4.26-3.9a1 1 0 00-1.38 1.44C26.7 9 27.94 12.46 27.94 16c0 3.54-1.24 7-3.63 9.28a1 1 0 001.38 1.44C28.55 24 29.94 19.96 29.94 16c0-3.96-1.39-8-4.25-10.72z" fill={primaryFill} /></svg>;
}

const Speaker232Filled = wrapIcon(rawSvg({}), 'Speaker232Filled');
export default Speaker232Filled;
      