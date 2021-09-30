import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 18.15a.75.75 0 110 1.5.75.75 0 010-1.5zm4.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm-6.75-1a.75.75 0 110 1.5.75.75 0 010-1.5zm4.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm4.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zM12 4c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.37H6.69a3.69 3.69 0 110-7.37h.08A4.95 4.95 0 0112 4zm0 1.5a3.86 3.86 0 00-3.88 3.89c0 .35-.32.64-.68.64h-.7c-1.25 0-2.27 1-2.27 2.23a2.26 2.26 0 002.28 2.24h10.5c1.26 0 2.28-1 2.28-2.24a2.26 2.26 0 00-2.28-2.23h-.69c-.36 0-.68-.29-.68-.64 0-2.29-1.8-3.9-3.88-3.9z" fill={primaryFill} /></svg>;
}

const WeatherSnow24Regular = wrapIcon(rawSvg({}), 'WeatherSnow24Regular');
export default WeatherSnow24Regular;
      