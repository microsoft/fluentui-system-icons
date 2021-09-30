import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M32.25 38.5a1.75 1.75 0 01.14 3.5H15.75a1.75 1.75 0 01-.14-3.5h16.64zm6-6a1.75 1.75 0 01.14 3.5H9.75a1.75 1.75 0 01-.14-3.49h28.64zM24 6.01c6.34 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73H13.38a7.37 7.37 0 110-14.73h.16c.53-5.1 4.12-9.26 10.46-9.26z" fill={primaryFill} /></svg>;
}

const WeatherFog48Filled = wrapIcon(rawSvg({}), 'WeatherFog48Filled');
export default WeatherFog48Filled;
      