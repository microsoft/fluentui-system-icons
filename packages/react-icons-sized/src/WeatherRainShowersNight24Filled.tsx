import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.01c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.37l-.63-.01-1.55 2.63a.75.75 0 01-1.34-.66l.04-.09L15.94 18h-2.13l-1.54 2.63a.75.75 0 01-1.35-.66l.05-.09 1.1-1.88H9.95L8.4 20.63a.75.75 0 01-1.35-.66l.05-.09L8.2 18h-.6A3.6 3.6 0 014 14.32a3.69 3.69 0 013.7-3.68h.07A4.95 4.95 0 0113 6.01zm-6.41-4a5.06 5.06 0 014.47 3.26c-1.98.56-3.4 2-4 3.95L7 9.46l-.06.24-.2.04c-1.15.24-2.14.9-2.81 1.81l-.16-.08a5.06 5.06 0 01-1.64-1.51.75.75 0 01.37-1.14c1.64-.59 2.52-1.25 3.03-2.21.55-1.06.66-2.18.29-3.68A.75.75 0 016.59 2z" fill={primaryFill} /></svg>;
}

const WeatherRainShowersNight24Filled = wrapIcon(rawSvg({}), 'WeatherRainShowersNight24Filled');
export default WeatherRainShowersNight24Filled;
      