import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 40a2 2 0 110 4 2 2 0 010-4zm-7-2a2 2 0 110 4 2 2 0 010-4zm14 0a2 2 0 110 4 2 2 0 010-4zm-7-25.99c6.34 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73H15.38a7.37 7.37 0 110-14.73h.16c.53-5.1 4.12-9.26 10.46-9.26zM7.57 20.19c.45.79.23 1.78-.5 2.3l-.14.1-1.3.74a1.75 1.75 0 01-1.9-2.94l.15-.09 1.3-.75c.84-.48 1.9-.2 2.39.64zm14.14-9.53c-3.8 1.22-6.51 4.1-7.62 7.92l-.1.34-.11.48-.41.08a9.28 9.28 0 00-3.34 1.43 7.86 7.86 0 013.79-11.26 7.88 7.88 0 017.79 1.01zM5.5 9.98l.13.05 1.36.64a1.75 1.75 0 01-1.35 3.23l-.13-.06-1.36-.63A1.75 1.75 0 015.5 9.98zm19.1-5.76c.76.52.97 1.53.51 2.31l-.07.12-.87 1.23A1.75 1.75 0 0121.24 6l.08-.12.86-1.23c.55-.8 1.64-.99 2.44-.43zM14.33 3.8l.07.15.51 1.41a1.75 1.75 0 01-3.22 1.36l-.07-.16-.51-1.41a1.75 1.75 0 013.22-1.35z" fill={primaryFill} /></svg>;
}

const WeatherHailDay48Filled = wrapIcon(rawSvg({}), 'WeatherHailDay48Filled');
export default WeatherHailDay48Filled;
      