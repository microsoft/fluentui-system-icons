import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.37h-.85a.75.75 0 01-.09.17l-1 1.5a.75.75 0 01-1.24-.84l.56-.83h-2.23a.75.75 0 01-.09.17l-1 1.5a.75.75 0 11-1.24-.84l.56-.83H8.46a.75.75 0 01-.09.17l-1 1.5a.75.75 0 01-1.24-.84l.56-.83a3.69 3.69 0 110-7.37h.08A4.95 4.95 0 0112 3z" fill={primaryFill} /><path d="M7.13 18.83a.75.75 0 101.24.84l1-1.5a.75.75 0 10-1.24-.84l-1 1.5z" fill={primaryFill} /><path d="M11.33 19.87a.75.75 0 01-.2-1.04l1-1.5a.75.75 0 111.24.84l-1 1.5a.75.75 0 01-1.04.2z" fill={primaryFill} /></svg>;
}

const WeatherDrizzle24Filled = wrapIcon(rawSvg({}), 'WeatherDrizzle24Filled');
export default WeatherDrizzle24Filled;
      