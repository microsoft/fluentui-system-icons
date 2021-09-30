import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.36 14a7.98 7.98 0 01-13.48.54.6.6 0 01.29-.9c3-1.08 4.61-2.33 5.55-4.11.98-1.88 1.24-3.94.55-6.75a.6.6 0 01.61-.74A7.98 7.98 0 0116.36 14z" fill={primaryFill} /></svg>;
}

const WeatherMoonFilled = wrapIcon(rawSvg({}), 'WeatherMoonFilled');
export default WeatherMoonFilled;
      