import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 16.67A.67.67 0 1111 18a.67.67 0 010-1.33zM8.67 16a.67.67 0 110 1.33.67.67 0 010-1.33zm4.66 0a.67.67 0 110 1.33.67.67 0 010-1.33zM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0118 12.24 2.82 2.82 0 0115.13 15H6.87A2.82 2.82 0 014 12.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 7.55 8.53 6 11 6zM5.84 2a4.24 4.24 0 013.88 3.14 4.56 4.56 0 00-3.47 3.14l-.07.22-.04.19-.17.03c-.89.18-1.66.67-2.2 1.36l-.28-.15A4.24 4.24 0 012.1 8.66a.63.63 0 01.3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78z" fill={primaryFill} /></svg>;
}

const WeatherHailNightFilled = wrapIcon(rawSvg({}), 'WeatherHailNightFilled');
export default WeatherHailNightFilled;
      