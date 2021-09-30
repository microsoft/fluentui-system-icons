import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 36a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm19.85-19A6.7 6.7 0 0144 23.75a6.7 6.7 0 01-6.82 6.74l-.18.01h-1.56c.36.76.56 1.61.56 2.51 0 3.35-2.6 6.01-6 6.01-3.15 0-4.92-1.35-5.85-3.56a1.75 1.75 0 013.23-1.35c.42.98.98 1.41 2.62 1.41 1.45 0 2.5-1.08 2.5-2.51 0-1.31-1.1-2.42-2.53-2.5l-.18-.01H5.75a1.75 1.75 0 01-.14-3.5H37.35a3.2 3.2 0 003.15-3.25 3.2 3.2 0 00-3.15-3.25c-1.33 0-2.44.78-2.81 1.98l-.05.18a1.75 1.75 0 01-3.4-.82A6.34 6.34 0 0137.35 17zM22.5 5a8.5 8.5 0 01.26 17H5.75a1.75 1.75 0 01-.14-3.5H22.5a5 5 0 100-10c-2.82 0-5 2.08-5 4.78a1.75 1.75 0 11-3.5 0A8.31 8.31 0 0122.5 5zm15 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-30-2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const WeatherBlowingSnow48Filled = wrapIcon(rawSvg({}), 'WeatherBlowingSnow48Filled');
export default WeatherBlowingSnow48Filled;
      