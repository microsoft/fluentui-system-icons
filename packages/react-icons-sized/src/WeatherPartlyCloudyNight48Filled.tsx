import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 16.01c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H15.39a7.37 7.37 0 110-14.73h.16c.52-5.1 4.12-9.26 10.45-9.26zm-12.82-8a10.12 10.12 0 018.95 6.53 11.46 11.46 0 00-8.03 8.05l-.1.33-.1.48-.42.08a9.35 9.35 0 00-5.62 3.63l-.3-.17a10.12 10.12 0 01-3.3-3.03A1.5 1.5 0 015 21.64c3.28-1.17 5.05-2.5 6.07-4.43 1.1-2.1 1.3-4.35.57-7.35A1.5 1.5 0 0113.18 8z" fill={primaryFill} /></svg>;
}

const WeatherPartlyCloudyNight48Filled = wrapIcon(rawSvg({}), 'WeatherPartlyCloudyNight48Filled');
export default WeatherPartlyCloudyNight48Filled;
      