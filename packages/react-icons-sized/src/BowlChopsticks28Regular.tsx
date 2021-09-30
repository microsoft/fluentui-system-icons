import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.08 2.38a.75.75 0 011.04.2L12.07 10h3.2l-4.4-6.58a.75.75 0 111.25-.84L17.07 10h7.78c.63 0 1.15.52 1.15 1.15V14a12 12 0 01-6.19 10.5h3.44a.75.75 0 010 1.5H4.75a.75.75 0 010-1.5h3.44A12 12 0 012 14v-2.85c0-.63.52-1.15 1.15-1.15h7.12l-4.4-6.58a.75.75 0 01.21-1.04zM3.5 11.5V14c0 .34.02.67.05 1h20.9c.03-.33.05-.66.05-1v-2.5h-21zm10.5 13c4.94 0 9.08-3.4 10.2-8H3.8c1.12 4.6 5.26 8 10.2 8z" fill={primaryFill} /></svg>;
}

const BowlChopsticks28Regular = wrapIcon(rawSvg({}), 'BowlChopsticks28Regular');
export default BowlChopsticks28Regular;
      