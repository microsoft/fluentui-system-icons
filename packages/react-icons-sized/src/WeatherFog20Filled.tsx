import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 15h7a.5.5 0 01.09 1H6.5a.5.5 0 01-.09-1h.09zm-2-2h11c.27 0 .5.22.5.5a.5.5 0 01-.41.5H4.5a.5.5 0 01-.5-.5.5.5 0 01.41-.5h.1zM10 3c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0117 9.24 2.82 2.82 0 0114.13 12H5.87A2.82 2.82 0 013 9.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 4.55 7.53 3 10 3z" fill={primaryFill} /></svg>;
}

const WeatherFog20Filled = wrapIcon(rawSvg({}), 'WeatherFog20Filled');
export default WeatherFog20Filled;
      