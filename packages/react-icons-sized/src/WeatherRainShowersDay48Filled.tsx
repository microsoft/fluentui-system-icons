import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 12c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 01.24 14.73h-.31l-4.3 7.16a1.75 1.75 0 01-3.08-1.66l.08-.14 3.21-5.36h-3.91l-4.3 7.16a1.75 1.75 0 01-3.08-1.66l.08-.14 3.21-5.36h-3.91l-4.3 7.16a1.75 1.75 0 01-3.08-1.66l.08-.14 3.21-5.36H15.4a7.37 7.37 0 110-14.73h.16C16.07 16.16 19.66 12 26 12zM7.57 20.2c.45.78.23 1.77-.5 2.29l-.14.1-1.3.74a1.75 1.75 0 01-1.9-2.94l.15-.09 1.3-.75c.84-.48 1.9-.2 2.39.64zm14.14-9.54c-3.8 1.22-6.51 4.1-7.62 7.92l-.1.34-.11.48-.41.08a9.28 9.28 0 00-3.34 1.43 7.86 7.86 0 013.79-11.26 7.88 7.88 0 017.79 1.01zM5.5 9.98l.13.05 1.36.64a1.75 1.75 0 01-1.35 3.23l-.13-.06-1.36-.63A1.75 1.75 0 015.5 9.98zm19.1-5.76c.76.52.97 1.53.51 2.31l-.07.12-.87 1.23A1.75 1.75 0 0121.24 6l.08-.12.86-1.23c.55-.8 1.64-.99 2.44-.43zM14.33 3.8l.07.15.51 1.41a1.75 1.75 0 01-3.22 1.36l-.07-.16-.51-1.41a1.75 1.75 0 013.22-1.35z" fill={primaryFill} /></svg>;
}

const WeatherRainShowersDay48Filled = wrapIcon(rawSvg({}), 'WeatherRainShowersDay48Filled');
export default WeatherRainShowersDay48Filled;
      