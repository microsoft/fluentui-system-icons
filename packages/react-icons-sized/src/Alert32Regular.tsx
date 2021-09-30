import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 4a9 9 0 00-9 9v4.8l-1.93 4.83A1 1 0 006 24h6a3.99 3.99 0 108 0h6a1 1 0 00.93-1.37L25 17.8V13a9 9 0 00-9-9zm2 20c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2h4zM9 13a7 7 0 1114 0v5a1 1 0 00.07.37L24.52 22H7.48l1.45-3.63A1 1 0 009 18v-5z" fill={primaryFill} /></svg>;
}

const Alert32Regular = wrapIcon(rawSvg({}), 'Alert32Regular');
export default Alert32Regular;
      