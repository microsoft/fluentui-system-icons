import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 16c6.33 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73H15.38a7.37 7.37 0 110-14.73h.16C16.07 20.16 19.66 16 26 16zM7.57 24.2c.45.78.23 1.77-.5 2.29l-.14.1-1.3.74a1.75 1.75 0 01-1.9-2.94l.15-.09 1.3-.75c.84-.48 1.9-.2 2.39.64zm14.13-9.55c-3.8 1.22-6.5 4.1-7.62 7.92l-.09.34-.11.48-.42.08a9.28 9.28 0 00-3.34 1.43A7.88 7.88 0 0121.7 14.65zm-16.2-.67l.14.05 1.36.64a1.75 1.75 0 01-1.35 3.23l-.13-.06-1.36-.63a1.75 1.75 0 011.34-3.23zm19.12-5.76c.75.52.96 1.53.5 2.31l-.07.12-.87 1.23A1.75 1.75 0 0121.24 10l.08-.12.86-1.23c.55-.8 1.64-.99 2.44-.43zm-10.3-.42l.07.15.51 1.41a1.75 1.75 0 01-3.22 1.36l-.07-.16-.51-1.41a1.75 1.75 0 013.22-1.35z" fill={primaryFill} /></svg>;
}

const WeatherPartlyCloudyDay48Filled = wrapIcon(rawSvg({}), 'WeatherPartlyCloudyDay48Filled');
export default WeatherPartlyCloudyDay48Filled;
      