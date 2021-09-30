import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.82 2.3a.75.75 0 00-.15.67c.65 2.6 1.1 6.52-.61 9.94a9.79 9.79 0 01-4.17 4 22.06 22.06 0 01-5.32 2.01.75.75 0 00-.47 1.1A12 12 0 1014.46 2.05a.75.75 0 00-.64.26zm1.54 1.37A10.5 10.5 0 114.94 20.1a22.45 22.45 0 004.68-1.88 11.27 11.27 0 004.78-4.64c1.72-3.44 1.5-7.21.96-9.92z" fill={primaryFill} /></svg>;
}

const WeatherMoon28Regular = wrapIcon(rawSvg({}), 'WeatherMoon28Regular');
export default WeatherMoon28Regular;
      