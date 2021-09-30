import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 18.15a.75.75 0 110 1.5.75.75 0 010-1.5zm4.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm-6.75-1a.75.75 0 110 1.5.75.75 0 010-1.5zm4.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm4.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zM12 4c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.37H6.69a3.69 3.69 0 110-7.37h.08A4.95 4.95 0 0112 4z" fill={primaryFill} /></svg>;
}

const WeatherSnow24Filled = wrapIcon(rawSvg({}), 'WeatherSnow24Filled');
export default WeatherSnow24Filled;
      