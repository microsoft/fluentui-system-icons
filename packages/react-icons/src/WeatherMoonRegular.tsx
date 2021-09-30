import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 13.5A6.98 6.98 0 014 14.39c2.83-1.09 4.56-2.42 5.6-4.4 1.04-2 1.33-4.16.75-6.9A6.98 6.98 0 0115.5 13.5zM5.45 16.92A7.98 7.98 0 109.88 2.04a.6.6 0 00-.61.74c.69 2.81.43 4.87-.55 6.75-.94 1.78-2.55 3.03-5.55 4.1a.6.6 0 00-.3.9 7.95 7.95 0 002.59 2.39z" fill={primaryFill} /></svg>;
}

const WeatherMoonRegular = wrapIcon(rawSvg({}), 'WeatherMoonRegular');
export default WeatherMoonRegular;
      