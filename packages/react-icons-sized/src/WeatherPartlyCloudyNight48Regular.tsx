import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 16.01c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H15.39a7.37 7.37 0 110-14.73h.16c.52-5.1 4.11-9.26 10.45-9.26zm0 2.5a8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.41 1.35H15.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.72h21.6a4.7 4.7 0 004.7-4.72 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.59-1.4-1.34A8 8 0 0026 18.5zM13.18 8a10.12 10.12 0 018.94 6.53c-.77.22-1.5.51-2.18.86-.64-1.74-2.06-3.16-4-4.26a6.38 6.38 0 00-1.42-.6c.36 3.05.25 5.11-1.06 7.58l-.27.48c-1.3 2.2-3.2 3.5-6.12 4.84a10.45 10.45 0 002.61 1.8c-.69.53-1.3 1.16-1.82 1.87l-.3-.17a10.12 10.12 0 01-3.3-3.03A1.5 1.5 0 015 21.64c3.28-1.17 5.05-2.5 6.07-4.43 1.1-2.1 1.3-4.35.57-7.35A1.5 1.5 0 0113.18 8z" fill={primaryFill} /></svg>;
}

const WeatherPartlyCloudyNight48Regular = wrapIcon(rawSvg({}), 'WeatherPartlyCloudyNight48Regular');
export default WeatherPartlyCloudyNight48Regular;
      