import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.55 2.1a1 1 0 01.9 0l8 4a1 1 0 010 1.8L19.24 11l6.2 3.1a1 1 0 010 1.8L18 19.61V29a1 1 0 01-1.49.87l-8-4.5A1 1 0 018 24.5V7a1 1 0 01.55-.9l8-4zM18 17.39L22.76 15 18 12.62v4.76zm-2-8V4.62L11.24 7 16 9.38zm-6-.76v4.76L14.76 11 10 8.62zm0 8v7.3l6 3.37v-7.67l-6-3zm6 .76v-4.76L11.24 15 16 17.38zm2-12.76v4.76L22.76 7 18 4.62z" fill={primaryFill} /></svg>;
}

const Fluent32Regular = wrapIcon(rawSvg({}), 'Fluent32Regular');
export default Fluent32Regular;
      