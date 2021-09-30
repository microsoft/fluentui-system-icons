import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 36a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm20.52-18.5A5.98 5.98 0 1138 29.47h.04l-.15.02-.13.01h-3.03c.56.86.9 1.89.9 3 0 3.06-2.3 5.5-5.34 5.5-3.02 0-4.83-1.75-5.32-4.19a1.25 1.25 0 112.46-.49c.27 1.35 1.12 2.18 2.86 2.18 1.62 0 2.83-1.3 2.83-3 0-1.6-1.26-2.9-2.86-3h-25a1.25 1.25 0 01-.13-2.5h32.6l.27-.03a3.48 3.48 0 10-3.45-3.7 1.25 1.25 0 01-2.49-.16 5.98 5.98 0 015.97-5.61zM23 6a8 8 0 01.23 15.98l-.11.02H5.25a1.25 1.25 0 01-.13-2.5H22.8l.1-.01h.1a5.5 5.5 0 10-5.49-5.5 1.25 1.25 0 11-2.5 0A8 8 0 0123 6zM37.5 8a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-30-2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const WeatherBlowingSnow48Regular = wrapIcon(rawSvg({}), 'WeatherBlowingSnow48Regular');
export default WeatherBlowingSnow48Regular;
      