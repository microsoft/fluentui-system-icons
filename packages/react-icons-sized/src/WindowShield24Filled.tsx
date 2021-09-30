import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3h.18A3.25 3.25 0 0121 6.08v6.54a3.73 3.73 0 01-2-1.18V8H5v9.75c0 .65.5 1.18 1.12 1.24l.13.01h7.13a5.87 5.87 0 001.15 2H6.25A3.25 3.25 0 013 17.93V6.25a3.25 3.25 0 013.07-3.24L6.25 3h11.5z" fill={primaryFill} /><path d="M19 12.76a4.29 4.29 0 002.6.9c.2 0 .35.15.4.34v2.58c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 01-.26 0A6.66 6.66 0 0116 21a4.83 4.83 0 01-1.56-2 6.05 6.05 0 01-.44-2.15v-2.77a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0c.24.25.48.46.72.64z" fill={primaryFill} /></svg>;
}

const WindowShield24Filled = wrapIcon(rawSvg({}), 'WindowShield24Filled');
export default WindowShield24Filled;
      