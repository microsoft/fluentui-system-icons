import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 7c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73h-2.7A1.5 1.5 0 0130.5 33a1.5 1.5 0 01-1.41-2.01H18.56l-4.31 7.17a1.75 1.75 0 01-3.08-1.66l.08-.14 3.22-5.37H13.4a7.37 7.37 0 110-14.73h.16C14.07 11.16 17.67 7 24 7zm-.41 27.27c.77.48 1.04 1.47.64 2.27l-.07.14-.92 1.49a1.75 1.75 0 01-3.06-1.7l.08-.14.92-1.49a1.75 1.75 0 012.4-.57zm4.91.73a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5-1a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const WeatherRainSnow48Filled = wrapIcon(rawSvg({}), 'WeatherRainSnow48Filled');
export default WeatherRainSnow48Filled;
      