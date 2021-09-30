import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm10.2 5.2a1 1 0 10-1.4-1.4l-1.5 1.5a1 1 0 001.4 1.4l1.5-1.5zM5.8 5.8a1 1 0 011.4 0l1.5 1.5a1 1 0 01-1.4 1.4L5.8 7.2a1 1 0 010-1.4zM9 16a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 100 10 5 5 0 000-10zm10 5.02a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM3 15a1 1 0 100 2h2a1 1 0 100-2H3zm20.3 8.3a1 1 0 011.4 0l1.5 1.5a1 1 0 11-1.4 1.4l-1.5-1.5a1 1 0 010-1.4zM8.7 24.7a1 1 0 10-1.4-1.4l-1.5 1.5a1 1 0 101.4 1.4l1.5-1.5zm8.3 2.32a1 1 0 10-2 0V29a1 1 0 102 0v-1.98z" fill={primaryFill} /></svg>;
}

const WeatherSunny32Regular = wrapIcon(rawSvg({}), 'WeatherSunny32Regular');
export default WeatherSunny32Regular;
      