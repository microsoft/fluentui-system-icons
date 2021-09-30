import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 8.01c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.37H7.69a3.69 3.69 0 110-7.37h.08A4.95 4.95 0 0113 8.01zm-6.41-4a5.06 5.06 0 014.47 3.26c-1.98.57-3.4 2-4 3.95l-.06.25-.06.23-.2.04c-1.15.24-2.14.9-2.81 1.82l-.16-.09a5.06 5.06 0 01-1.64-1.51.75.75 0 01.37-1.13c1.64-.6 2.53-1.25 3.03-2.22.55-1.06.66-2.17.29-3.68A.75.75 0 016.59 4z" fill={primaryFill} /></svg>;
}

const WeatherPartlyCloudyNight24Filled = wrapIcon(rawSvg({}), 'WeatherPartlyCloudyNight24Filled');
export default WeatherPartlyCloudyNight24Filled;
      