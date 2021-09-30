import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.66 11a4.5 4.5 0 014.38-5.47A4.48 4.48 0 0114.4 11h3.09a.5.5 0 010 1h-15a.5.5 0 010-1h3.16z" fill={primaryFill} /><path d="M10.13 18a.5.5 0 01-.21 0h.21z" fill={primaryFill} /><path d="M5.08 4.38L5 4.32a.5.5 0 00-.64.77l.86.86.07.05a.5.5 0 00.63-.76l-.85-.86z" fill={primaryFill} /><path d="M15.74 5.02a.5.5 0 00-.77-.64l-.85.86-.06.07a.5.5 0 00.76.64l.86-.86.06-.07z" fill={primaryFill} /><path d="M10.52 2.43a.5.5 0 00-1 .1v1.2l.02.1a.5.5 0 00.99-.1v-1.2l-.01-.1z" fill={primaryFill} /><path d="M8.5 16a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M5 14c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 015 14z" fill={primaryFill} /></svg>;
}

const WeatherSunnyLow20Filled = wrapIcon(rawSvg({}), 'WeatherSunnyLow20Filled');
export default WeatherSunnyLow20Filled;
      