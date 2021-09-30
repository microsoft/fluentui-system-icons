import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.7 8.6a20.03 20.03 0 0124.24 7.35H31.4a1.25 1.25 0 000 2.5h11.35c.69 0 1.25-.55 1.25-1.25V5.85a1.25 1.25 0 10-2.5 0v6.7A22.53 22.53 0 0015.74 6.3 22.67 22.67 0 004.13 17.2a1.25 1.25 0 002.24 1.1 20.17 20.17 0 0110.32-9.7zM30.3 22a6.07 6.07 0 00-5.57 3.2c-1.06 1.86-1.43 4.3-1.43 6.8s.37 4.95 1.43 6.8A6.07 6.07 0 0030.3 42a6.07 6.07 0 005.58-3.2c1.06-1.85 1.42-4.3 1.42-6.8s-.36-4.94-1.42-6.8a6.07 6.07 0 00-5.58-3.2zm-4.5 10c0-2.33.36-4.26 1.1-5.57a3.59 3.59 0 013.4-1.93c1.69 0 2.72.72 3.4 1.93.75 1.31 1.1 3.24 1.1 5.57s-.35 4.27-1.1 5.57a3.59 3.59 0 01-3.4 1.93 3.59 3.59 0 01-3.4-1.93c-.74-1.3-1.1-3.24-1.1-5.57zm-7.84-9.77a1.24 1.24 0 01.53 1.05v17.47a1.25 1.25 0 01-2.5 0V26.92c-.76.77-1.75 1.59-3.1 2.4a1.25 1.25 0 11-1.3-2.14c2.5-1.5 3.45-2.9 4.27-4.12l.34-.5a1.25 1.25 0 011.74-.34l.02.01z" fill={primaryFill} /></svg>;
}

const SkipForward1048Regular = wrapIcon(rawSvg({}), 'SkipForward1048Regular');
export default SkipForward1048Regular;
      