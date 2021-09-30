import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.5 40a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM17 38a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-9-25.99c6.34 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73H15.38a7.37 7.37 0 110-14.73h.16c.53-5.1 4.12-9.26 10.46-9.26zm-12.82-8a10.12 10.12 0 018.94 6.53 11.46 11.46 0 00-8.03 8.05l-.09.33-.11.48-.42.08a9.35 9.35 0 00-5.61 3.63l-.31-.17a10.12 10.12 0 01-3.28-3.03A1.5 1.5 0 015 17.64c3.28-1.17 5.05-2.5 6.06-4.43 1.1-2.1 1.31-4.35.58-7.35A1.5 1.5 0 0113.18 4z" fill={primaryFill} /></svg>;
}

const WeatherSnowShowerNight48Filled = wrapIcon(rawSvg({}), 'WeatherSnowShowerNight48Filled');
export default WeatherSnowShowerNight48Filled;
      