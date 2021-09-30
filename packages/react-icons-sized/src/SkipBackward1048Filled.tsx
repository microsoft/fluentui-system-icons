import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5a1.5 1.5 0 113 0v7.03A21.57 21.57 0 0124.02 5c8.4.13 16.27 4.41 20.07 12.08a1.5 1.5 0 01-2.68 1.34C38.17 11.88 31.4 8.12 23.98 8A18.55 18.55 0 008.1 16h8.4a1.5 1.5 0 110 3h-11A1.5 1.5 0 014 17.5v-12zm15 18a1.5 1.5 0 00-2.8-.76v.02a7.67 7.67 0 01-.27.41c-.2.3-.5.7-.89 1.17-.78.94-1.9 2.05-3.26 2.87a1.5 1.5 0 101.54 2.58A15.04 15.04 0 0016 27.7V40.5a1.5 1.5 0 103 0v-17zM30.31 22a6.35 6.35 0 00-5.78 3.23c-1.1 1.88-1.47 4.32-1.47 6.77 0 2.45.37 4.9 1.47 6.77A6.35 6.35 0 0030.3 42c2.7 0 4.63-1.24 5.8-3.23 1.09-1.88 1.45-4.32 1.45-6.77 0-2.45-.36-4.9-1.46-6.77A6.35 6.35 0 0030.31 22zm-4.25 10c0-2.24.36-4.05 1.06-5.25.63-1.1 1.58-1.75 3.2-1.75 1.6 0 2.56.66 3.2 1.75.7 1.2 1.04 3.01 1.04 5.25s-.35 4.05-1.05 5.25c-.63 1.1-1.58 1.75-3.2 1.75-1.6 0-2.56-.66-3.2-1.75-.7-1.2-1.05-3.01-1.05-5.25z" fill={primaryFill} /></svg>;
}

const SkipBackward1048Filled = wrapIcon(rawSvg({}), 'SkipBackward1048Filled');
export default SkipBackward1048Filled;
      