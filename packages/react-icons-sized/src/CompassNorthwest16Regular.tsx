import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.48 5.13a1 1 0 00-1.35 1.35l.99 1.9a3.5 3.5 0 001.5 1.5l1.91 1a1 1 0 001.35-1.35l-1-1.92a3.5 3.5 0 00-1.5-1.5l-1.9-.98zm-.46.89l1.9.99c.46.23.84.6 1.07 1.06L10 10 8.07 9a2.5 2.5 0 01-1.06-1.06L6 6.02z" fill={primaryFill} /><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 1v1.5a.5.5 0 001 0V2.08A6 6 0 0113.92 7H12.5a.5.5 0 000 1H14a6 6 0 01-5 5.92V12.5a.5.5 0 00-1 0V14a6 6 0 01-6-6h1.5a.5.5 0 000-1H2.08A6 6 0 018 2z" fill={primaryFill} /></svg>;
}

const CompassNorthwest16Regular = wrapIcon(rawSvg({}), 'CompassNorthwest16Regular');
export default CompassNorthwest16Regular;
      