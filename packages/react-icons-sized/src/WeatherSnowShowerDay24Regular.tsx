import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 20a.75.75 0 110 1.5.75.75 0 010-1.5zm4.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zM8.5 19a.75.75 0 110 1.5.75.75 0 010-1.5zm4.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm4.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zM13 6.01c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.37H7.69a3.69 3.69 0 110-7.37h.08A4.95 4.95 0 0113 6.01zm0 1.5a3.86 3.86 0 00-3.87 3.89c0 .35-.32.63-.69.63h-.69c-1.26 0-2.28 1-2.28 2.24a2.26 2.26 0 002.28 2.24h10.5c1.26 0 2.29-1 2.29-2.24a2.26 2.26 0 00-2.29-2.24h-.69c-.36 0-.68-.28-.68-.63 0-2.29-1.8-3.9-3.88-3.9zm-8.63 2.66c.14.35 0 .74-.32.93l-.09.05-.92.38a.75.75 0 01-.67-1.34l.1-.05.92-.38c.38-.16.82.02.98.4zm6.48-4.84l-.17.06c-.53.19-1.02.44-1.46.76a2.44 2.44 0 00-2.8 3.67c-.48.13-.94.35-1.36.63a3.94 3.94 0 015.8-5.12zm-7.9.03l.1.04.92.38A.75.75 0 013.5 7.2l-.1-.03-.93-.39a.75.75 0 01.47-1.42zm3.8-2.98l.05.09.39.92a.75.75 0 01-1.35.67l-.04-.1-.38-.92a.75.75 0 011.34-.66zm4.36-.32c.35.14.53.52.44.87l-.03.1-.39.93a.75.75 0 01-1.42-.46l.04-.1.38-.94c.16-.38.6-.56.98-.4z" fill={primaryFill} /></svg>;
}

const WeatherSnowShowerDay24Regular = wrapIcon(rawSvg({}), 'WeatherSnowShowerDay24Regular');
export default WeatherSnowShowerDay24Regular;
      