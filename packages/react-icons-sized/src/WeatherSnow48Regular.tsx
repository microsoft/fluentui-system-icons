import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 36a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM15 34a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM24 8c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H13.39a7.37 7.37 0 110-14.73h.16C14.07 12.16 17.66 8 24 8zm0 2.5a8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.41 1.35H13.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.73h21.6a4.7 4.7 0 004.7-4.73 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.59-1.4-1.34A8 8 0 0024 10.5z" fill={primaryFill} /></svg>;
}

const WeatherSnow48Regular = wrapIcon(rawSvg({}), 'WeatherSnow48Regular');
export default WeatherSnow48Regular;
      