import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 8c3.17 0 4.97 2.1 5.23 4.64h.08a3.69 3.69 0 110 7.36H7.69a3.69 3.69 0 110-7.36h.08A4.95 4.95 0 0113 8zm-8.63 4.16c.14.35 0 .75-.32.94l-.09.04-.92.39a.75.75 0 01-.67-1.34l.1-.05.92-.38c.38-.16.82.02.98.4zm6.48-4.83l-.17.06c-1.78.63-3.06 2-3.61 3.82l-.07.25-.06.24-.2.04c-.61.12-1.18.37-1.68.71a3.94 3.94 0 015.8-5.12zm-7.9.03l.1.04.92.38A.75.75 0 013.5 9.2l-.1-.04-.93-.38a.75.75 0 01.47-1.42zm3.8-2.99l.05.1.39.92a.75.75 0 01-1.35.67l-.04-.1-.38-.92a.75.75 0 011.34-.67zm4.36-.31c.35.14.53.52.44.87l-.03.1-.39.93a.75.75 0 01-1.42-.47l.04-.1.38-.93c.16-.38.6-.56.98-.4z" fill={primaryFill} /></svg>;
}

const WeatherPartlyCloudyDay24Filled = wrapIcon(rawSvg({}), 'WeatherPartlyCloudyDay24Filled');
export default WeatherPartlyCloudyDay24Filled;
      