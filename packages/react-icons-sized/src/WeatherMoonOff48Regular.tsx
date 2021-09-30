import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.38 4.62a1.25 1.25 0 10-1.76 1.76L20.84 22.6l-.17.33c-2.1 4.02-5.74 6.84-12.52 9.26-.83.3-1.16 1.31-.66 2.04a18 18 0 0027.52 2.55l6.6 6.6a1.25 1.25 0 001.77-1.76l-37-37zM33.24 35A15.5 15.5 0 0110.46 34c6.14-2.4 9.9-5.34 12.23-9.54L33.24 35z" fill={primaryFill} /><path d="M30.06 10.59a15.5 15.5 0 016.14 20.3l1.85 1.86A18 18 0 0023.3 6.03c-.9-.05-1.6.8-1.38 1.67.9 3.68 1.08 6.78.65 9.56l2.12 2.12c.8-3.23.8-6.72 0-10.7l.48.09c1.71.32 3.37.93 4.9 1.82z" fill={primaryFill} /></svg>;
}

const WeatherMoonOff48Regular = wrapIcon(rawSvg({}), 'WeatherMoonOff48Regular');
export default WeatherMoonOff48Regular;
      