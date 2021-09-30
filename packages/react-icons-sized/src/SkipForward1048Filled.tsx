import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M42.5 4c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-11a1.5 1.5 0 110-3h8.4a18.55 18.55 0 00-15.88-8C16.6 8.11 9.83 11.88 6.6 18.42a1.5 1.5 0 01-2.68-1.34C7.7 9.41 15.58 5.13 23.98 5c6.73-.1 12.8 2.58 17.02 7.53V5.5c0-.83.67-1.5 1.5-1.5zM30.31 22a6.35 6.35 0 00-5.78 3.23c-1.1 1.88-1.47 4.32-1.47 6.77 0 2.45.37 4.9 1.47 6.77A6.35 6.35 0 0030.3 42c2.7 0 4.63-1.24 5.8-3.23 1.09-1.88 1.45-4.32 1.45-6.77 0-2.45-.36-4.9-1.46-6.77A6.35 6.35 0 0030.31 22zm-4.25 10c0-2.24.36-4.05 1.06-5.25.63-1.1 1.58-1.75 3.2-1.75 1.6 0 2.56.66 3.2 1.75.7 1.2 1.04 3.01 1.04 5.25s-.35 4.05-1.05 5.25c-.63 1.1-1.58 1.75-3.2 1.75-1.6 0-2.56-.66-3.2-1.75-.7-1.2-1.05-3.01-1.05-5.25zM19 23.5a1.5 1.5 0 00-2.8-.76v.02a5.29 5.29 0 01-.27.41 13.31 13.31 0 01-4.15 4.04 1.5 1.5 0 001.54 2.58A15.04 15.04 0 0016 27.7V40.5a1.5 1.5 0 103 0v-17z" fill={primaryFill} /></svg>;
}

const SkipForward1048Filled = wrapIcon(rawSvg({}), 'SkipForward1048Filled');
export default SkipForward1048Filled;
      