import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 4A11.5 11.5 0 004 15.5V18h7a1 1 0 011 1v10a1 1 0 01-1 1H6.5A4.5 4.5 0 012 25.5v-10a13.5 13.5 0 0127 0v10a4.5 4.5 0 01-4.5 4.5H20a1 1 0 01-1-1V19a1 1 0 011-1h7v-2.5A11.5 11.5 0 0015.5 4zM27 20h-6v8h3.5a2.5 2.5 0 002.5-2.5V20zM4 20v5.5A2.5 2.5 0 006.5 28H10v-8H4z" fill={primaryFill} /></svg>;
}

const Headphones32Regular = wrapIcon(rawSvg({}), 'Headphones32Regular');
export default Headphones32Regular;
      