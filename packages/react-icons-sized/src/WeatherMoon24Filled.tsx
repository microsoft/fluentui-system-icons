import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.03 17a10 10 0 01-16.9.68.75.75 0 01.36-1.13c3.77-1.35 5.79-2.91 6.96-5.15 1.23-2.35 1.55-4.93.69-8.46A.75.75 0 0111.9 2 10 10 0 0120.03 17z" fill={primaryFill} /></svg>;
}

const WeatherMoon24Filled = wrapIcon(rawSvg({}), 'WeatherMoon24Filled');
export default WeatherMoon24Filled;
      