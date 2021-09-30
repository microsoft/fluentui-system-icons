import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.62 12.32l2.53 2.53a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L6.38 7.1c-.86 1.93-2.75 2.58-3.97 2.8a.5.5 0 00-.36.71 6 6 0 009.57 1.72z" fill={primaryFill} /><path d="M13.46 8c0 .97-.23 1.89-.64 2.7l-5.9-5.9a8.83 8.83 0 00-.15-2.2.5.5 0 01.48-.6h.2a6 6 0 016 6z" fill={primaryFill} /></svg>;
}

const WeatherMoonOff16Filled = wrapIcon(rawSvg({}), 'WeatherMoonOff16Filled');
export default WeatherMoonOff16Filled;
      