import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.03 17a10 10 0 01-16.9.68.75.75 0 01.36-1.13c3.77-1.35 5.79-2.91 6.96-5.15 1.23-2.35 1.55-4.93.69-8.46A.75.75 0 0111.9 2 10 10 0 0120.03 17zm-8.25-4.9c-1.25 2.39-3.31 4.1-6.82 5.5a8.5 8.5 0 0013.77-1.35 8.5 8.5 0 00-5.9-12.63c.64 3.39.22 6.05-1.05 8.48z" fill={primaryFill} /></svg>;
}

const WeatherMoon24Regular = wrapIcon(rawSvg({}), 'WeatherMoon24Regular');
export default WeatherMoon24Regular;
      