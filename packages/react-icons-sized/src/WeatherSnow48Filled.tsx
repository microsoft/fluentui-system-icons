import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 36a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM15 34a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM24 8c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H13.39a7.37 7.37 0 110-14.73h.16C14.07 12.16 17.67 8 24 8z" fill={primaryFill} /></svg>;
}

const WeatherSnow48Filled = wrapIcon(rawSvg({}), 'WeatherSnow48Filled');
export default WeatherSnow48Filled;
      