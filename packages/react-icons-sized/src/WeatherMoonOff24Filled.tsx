import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l8.2 8.2c-1.18 2.19-3.2 3.73-6.93 5.07a.75.75 0 00-.36 1.13 10 10 0 0015.1 1.6l2.49 2.5a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M16.37 3.34a10 10 0 013.71 13.56L11.5 8.31c.25-1.56.15-3.3-.35-5.37A.75.75 0 0111.9 2c1.55.09 3.08.53 4.46 1.33z" fill={primaryFill} /></svg>;
}

const WeatherMoonOff24Filled = wrapIcon(rawSvg({}), 'WeatherMoonOff24Filled');
export default WeatherMoonOff24Filled;
      