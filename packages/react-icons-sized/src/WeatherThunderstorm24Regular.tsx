import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.46 15.75l2.24-2.49a.75.75 0 011.18.92l-.06.08-1.12 1.24h2.28c.6 0 .94.65.65 1.13l-.06.09-3.21 4.03a.75.75 0 01-1.24-.84l.06-.1L13.42 17h-2.4a.75.75 0 01-.62-1.17l.06-.08 2.24-2.49-2.24 2.49zM13 5c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.36h-1.79a1.33 1.33 0 000-1.5h1.73c1.26 0 2.29-1 2.29-2.23a2.26 2.26 0 00-2.29-2.24h-.69c-.36 0-.68-.28-.68-.63 0-2.29-1.8-3.9-3.88-3.9a3.86 3.86 0 00-3.88 3.9c0 .35-.31.63-.68.63h-.69c-1.26 0-2.28 1-2.28 2.24a2.26 2.26 0 002.28 2.24h1.76a1.33 1.33 0 000 1.5H7.69a3.69 3.69 0 110-7.37h.08A4.95 4.95 0 0113 5zM10 2c1.62 0 3.05.82 3.9 2.06a7.5 7.5 0 00-2.04.03 3.21 3.21 0 00-5.03 2.07l-.07.41a1 1 0 01-.99.83h-.49a1.78 1.78 0 00-1.26 3.04c-.32.4-.57.85-.74 1.34A3.28 3.28 0 015.1 5.9h.25A4.72 4.72 0 0110 2z" fill={primaryFill} /></svg>;
}

const WeatherThunderstorm24Regular = wrapIcon(rawSvg({}), 'WeatherThunderstorm24Regular');
export default WeatherThunderstorm24Regular;
      