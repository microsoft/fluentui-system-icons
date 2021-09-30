import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.76 13.2c.3.28.33.75.06 1.06L12.7 15.5h2.28c.63 0 .98.73.59 1.22l-3.21 4.03a.75.75 0 01-1.18-.94L13.42 17h-2.4c-.65 0-.99-.77-.56-1.25l2.24-2.49a.75.75 0 011.06-.06zM13 5c3.17 0 4.97 2.1 5.23 4.64h.08a3.69 3.69 0 110 7.36h-1.75a1.75 1.75 0 00-1.58-2.5h-.13a1.75 1.75 0 00-2.9-1.9l-2.23 2.48A1.73 1.73 0 009.44 17H7.7a3.69 3.69 0 110-7.36h.08A4.95 4.95 0 0113 5zm-3-3c1.62 0 3.05.82 3.9 2.06a7.5 7.5 0 00-.9-.05c-3 0-5.17 1.68-5.94 4.21L7 8.46l-.06.24-.2.04a4.68 4.68 0 00-3.46 3.04A3.28 3.28 0 015.1 5.9h.25A4.72 4.72 0 0110 2z" fill={primaryFill} /></svg>;
}

const WeatherThunderstorm24Filled = wrapIcon(rawSvg({}), 'WeatherThunderstorm24Filled');
export default WeatherThunderstorm24Filled;
      