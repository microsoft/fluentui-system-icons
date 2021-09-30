import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 20a1 1 0 110 2 1 1 0 010-2zm-3.5-1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2zM13 6c3.17 0 4.97 2.1 5.23 4.64h.08a3.69 3.69 0 110 7.36H7.69a3.69 3.69 0 110-7.36h.08A4.95 4.95 0 0113 6zm0 1.5a3.86 3.86 0 00-3.88 3.9c0 .35-.31.63-.68.63h-.69c-1.26 0-2.28 1-2.28 2.24a2.26 2.26 0 002.28 2.24h10.5c1.26 0 2.29-1 2.29-2.24a2.26 2.26 0 00-2.29-2.24h-.69c-.36 0-.68-.28-.68-.63 0-2.29-1.8-3.9-3.88-3.9zM6.6 2a5.06 5.06 0 014.47 3.27c-.5.14-.96.34-1.39.58A3.55 3.55 0 007.48 3.7a5.97 5.97 0 01-.62 3.61l-.12.22a5.75 5.75 0 01-2.71 2.3 3.6 3.6 0 001.06.61c-.45.3-.84.69-1.16 1.12l-.16-.08a5.06 5.06 0 01-1.64-1.52.75.75 0 01.37-1.13c1.64-.59 2.53-1.25 3.03-2.21.55-1.06.66-2.18.29-3.68A.75.75 0 016.59 2z" fill={primaryFill} /></svg>;
}

const WeatherHailNight24Regular = wrapIcon(rawSvg({}), 'WeatherHailNight24Regular');
export default WeatherHailNight24Regular;
      