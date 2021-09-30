import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4c.69 0 1.25.56 1.25 1.25v1.5a1.25 1.25 0 11-2.5 0v-1.5c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /><path d="M24 10a8 8 0 100 16 8 8 0 000-16zm-5.5 8a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" fill={primaryFill} /><path d="M25.25 29.25a1.25 1.25 0 10-2.5 0v1.5a1.25 1.25 0 102.5 0v-1.5z" fill={primaryFill} /><path d="M11.25 16a1.25 1.25 0 100 2.5h1.5a1.25 1.25 0 100-2.5h-1.5z" fill={primaryFill} /><path d="M34 17.25c0-.69.56-1.25 1.25-1.25h1.5a1.25 1.25 0 110 2.5h-1.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M13.87 11.63a1.25 1.25 0 001.76-1.76l-1.5-1.5a1.25 1.25 0 00-1.76 1.76l1.5 1.5z" fill={primaryFill} /><path d="M15.63 24.37a1.25 1.25 0 00-1.76 0l-1.5 1.5a1.25 1.25 0 001.76 1.76l1.5-1.5c.5-.48.5-1.28 0-1.76z" fill={primaryFill} /><path d="M34.13 11.63a1.25 1.25 0 01-1.76-1.76l1.5-1.5a1.25 1.25 0 011.76 1.76l-1.5 1.5z" fill={primaryFill} /><path d="M32.37 24.37a1.25 1.25 0 011.76 0l1.5 1.5a1.25 1.25 0 01-1.76 1.76l-1.5-1.5a1.25 1.25 0 010-1.76z" fill={primaryFill} /><path d="M6.05 43.71c-.53.44-1.32.37-1.76-.16-.34-.41-.27-1.4.16-1.76h.01l.02-.03a7.78 7.78 0 01.35-.27 30.2 30.2 0 014.93-2.88A33.9 33.9 0 0124 35.5c6 0 10.87 1.56 14.23 3.12a30.2 30.2 0 015.21 3.08l.08.06.03.03s.84.88.16 1.76c-.44.53-1.23.6-1.76.16h-.01l-.05-.05a27.7 27.7 0 00-4.7-2.78A31.4 31.4 0 0024 38a31.4 31.4 0 00-13.18 2.88 27.69 27.69 0 00-4.76 2.82l-.01.01z" fill={primaryFill} /></svg>;
}

const WeatherSunnyHigh48Regular = wrapIcon(rawSvg({}), 'WeatherSunnyHigh48Regular');
export default WeatherSunnyHigh48Regular;
      