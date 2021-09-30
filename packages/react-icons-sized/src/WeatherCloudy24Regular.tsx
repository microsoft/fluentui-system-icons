import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 7c3.17 0 4.97 2.1 5.23 4.64h.08a3.69 3.69 0 110 7.36H7.69a3.69 3.69 0 110-7.36h.08A4.95 4.95 0 0113 7zm0 1.5a3.86 3.86 0 00-3.88 3.9c0 .35-.31.63-.68.63h-.69c-1.26 0-2.28 1-2.28 2.24a2.26 2.26 0 002.28 2.24h10.5c1.26 0 2.29-1 2.29-2.24a2.26 2.26 0 00-2.29-2.24h-.69c-.36 0-.68-.28-.68-.63 0-2.29-1.8-3.9-3.88-3.9zM10 4c1.62 0 3.05.82 3.9 2.06a7.5 7.5 0 00-2.04.03 3.21 3.21 0 00-5.03 2.07l-.07.41a1 1 0 01-.99.83h-.49a1.78 1.78 0 00-1.26 3.04c-.32.4-.57.85-.74 1.34A3.28 3.28 0 015.1 7.9h.25A4.72 4.72 0 0110 4z" fill={primaryFill} /></svg>;
}

const WeatherCloudy24Regular = wrapIcon(rawSvg({}), 'WeatherCloudy24Regular');
export default WeatherCloudy24Regular;
      