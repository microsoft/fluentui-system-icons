import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 1.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zM3.76 3.05a.5.5 0 00-.71.7l.7.71a.5.5 0 00.71-.7l-.7-.71zm9.19.7a.5.5 0 10-.7-.7l-.71.7a.5.5 0 00.7.71l.71-.7zM1.5 7.5a.5.5 0 000 1h1a.5.5 0 000-1h-1zm12 0a.5.5 0 000 1h1a.5.5 0 000-1h-1zm-9.04 4.74a.5.5 0 10-.7-.7l-.71.7a.5.5 0 10.7.71l.71-.7zm7.78-.7a.5.5 0 00-.7.7l.7.71a.5.5 0 10.71-.7l-.7-.71zM8.5 13.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zM8 4a4 4 0 100 8 4 4 0 000-8zM5 8a3 3 0 116 0 3 3 0 01-6 0z" fill={primaryFill} /></svg>;
}

const WeatherSunny16Regular = wrapIcon(rawSvg({}), 'WeatherSunny16Regular');
export default WeatherSunny16Regular;
      