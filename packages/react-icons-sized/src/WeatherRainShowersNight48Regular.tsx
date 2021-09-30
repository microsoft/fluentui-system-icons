import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 12c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73h-1.73c0 .03-.02.06-.04.1l-.06.12-3.5 6.07a1.5 1.5 0 01-2.67-1.38l.07-.12 2.76-4.79h-4.3l-.03.1-.07.12-3.5 6.07a1.5 1.5 0 01-2.66-1.38l.06-.12 2.77-4.79h-4.3l-.04.1-.07.12-3.5 6.07a1.5 1.5 0 01-2.66-1.38l.07-.12 2.76-4.79h-.6a7.37 7.37 0 110-14.73h.17C16.07 16.16 19.66 12 26 12zm0 2.5a8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.41 1.35H15.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.73h21.6a4.7 4.7 0 004.7-4.73 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.59-1.4-1.34A8 8 0 0026 14.5zM13.18 4a10.12 10.12 0 018.94 6.54c-.77.22-1.5.51-2.19.86-.64-1.74-2.06-3.16-3.99-4.26a6.38 6.38 0 00-1.42-.6c.36 3.05.24 5.11-1.06 7.58l-.27.48c-1.3 2.2-3.2 3.5-6.12 4.84a10.45 10.45 0 002.61 1.8c-.69.53-1.3 1.16-1.82 1.87l-.31-.17a10.12 10.12 0 01-3.28-3.03A1.5 1.5 0 015 17.64c3.28-1.17 5.05-2.5 6.06-4.43 1.1-2.1 1.31-4.35.58-7.35A1.5 1.5 0 0113.18 4z" fill={primaryFill} /></svg>;
}

const WeatherRainShowersNight48Regular = wrapIcon(rawSvg({}), 'WeatherRainShowersNight48Regular');
export default WeatherRainShowersNight48Regular;
      