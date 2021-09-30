import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 8a3.25 3.25 0 013.24 3.06l.01.19v7.5a3.25 3.25 0 01-3.07 3.24h-7.68a3.25 3.25 0 01-3.24-3.06L8 18.75v-7.5A3.25 3.25 0 0111.07 8h7.68zm-3-3c1.35 0 2.51.82 3 2h-7.5A4.25 4.25 0 007 11.25v7.5a3.25 3.25 0 01-2-2.82V8.25a3.25 3.25 0 013.07-3.24L8.25 5h7.5zm-3-3c1.3 0 2.42.76 2.94 1.87l.06.13H8.04A4.26 4.26 0 004 8.26v7.5a3.25 3.25 0 01-2-2.82V5.25a3.25 3.25 0 013.07-3.24L5.25 2h7.5z" fill={primaryFill} /></svg>;
}

const Tabs24Filled = wrapIcon(rawSvg({}), 'Tabs24Filled');
export default Tabs24Filled;
      