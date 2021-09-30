import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 20a2 2 0 11-4 0 2 2 0 014 0zm-8-10V8a6 6 0 0112 0v2h1.5a3.5 3.5 0 013.5 3.5v13a3.5 3.5 0 01-3.5 3.5h-15A3.5 3.5 0 015 26.5v-13A3.5 3.5 0 018.5 10H10zm2-2v2h8V8a4 4 0 00-8 0zm-3.5 4c-.83 0-1.5.67-1.5 1.5v13c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-15z" fill={primaryFill} /></svg>;
}

const LockClosed32Regular = wrapIcon(rawSvg({}), 'LockClosed32Regular');
export default LockClosed32Regular;
      