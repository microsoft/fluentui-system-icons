import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 18.53a1 1 0 01.99.89v1.57a1 1 0 01-1.99.11v-1.57a1 1 0 011-1zm6.03-1.93l1.03 1.03a1 1 0 01-1.41 1.41l-1.03-1.03a1 1 0 011.41-1.41zm-10.66 0a1 1 0 010 1.41l-1.03 1.03a1 1 0 01-1.41-1.41l1.03-1.03a1 1 0 011.41 0zm4.64-10.13a5.52 5.52 0 110 11.05 5.52 5.52 0 010-11.05zm8.97 4.55a1 1 0 01.11 2h-1.57a1 1 0 01-.12-2h1.58zm-16.5-.03a1 1 0 01.12 2H3.02a1 1 0 01-.11-2h1.57zm1.77-6.12l.1.09 1.02 1.03a1 1 0 01-1.32 1.5l-.1-.09-1.02-1.03a1 1 0 011.32-1.5zm12.81.09a1 1 0 01.09 1.32l-.09.1-1.03 1.02a1 1 0 01-1.5-1.32l.09-.1 1.03-1.02a1 1 0 011.41 0zM12 2a1 1 0 011 .89v1.57a1 1 0 01-2 .12V3a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const WeatherSunny24Filled = wrapIcon(rawSvg({}), 'WeatherSunny24Filled');
export default WeatherSunny24Filled;
      