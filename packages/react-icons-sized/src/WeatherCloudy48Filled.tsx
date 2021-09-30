import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 14.02c6.34 0 9.94 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H15.39a7.37 7.37 0 110-14.73h.16c.52-5.1 4.12-9.26 10.45-9.26zM20 8c3.23 0 6.1 1.63 7.8 4.12-.58-.07-1.18-.1-1.8-.1-6.08 0-10.48 3.44-11.96 8.61l-.08.3-.12.47-.4.07c-3.22.68-5.84 3-6.91 6.06a6.55 6.55 0 014.03-11.74h.15A9.44 9.44 0 0120 8z" fill={primaryFill} /></svg>;
}

const WeatherCloudy48Filled = wrapIcon(rawSvg({}), 'WeatherCloudy48Filled');
export default WeatherCloudy48Filled;
      