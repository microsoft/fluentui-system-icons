import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 2a.75.75 0 00-.75.75v7a5.75 5.75 0 005 5.7v5.06l-2.25-.01a.75.75 0 000 1.5l3 .01 3.5-.01a.75.75 0 000-1.5H12.5v-5.04c3.1-.38 5.5-3.01 5.5-6.21v-6.5a.75.75 0 00-.75-.75H6.75zm.75 5V3.5h9V7h-9zm8.18 2.7a3.73 3.73 0 01-2.91 2.97.5.5 0 01-.2-.98 2.74 2.74 0 002.13-2.17.5.5 0 01.98.19z" fill={primaryFill} /></svg>;
}

const DrinkWine24Filled = wrapIcon(rawSvg({}), 'DrinkWine24Filled');
export default DrinkWine24Filled;
      