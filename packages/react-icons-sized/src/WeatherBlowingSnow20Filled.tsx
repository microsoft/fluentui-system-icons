import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 15a1 1 0 110 2 1 1 0 010-2zm8.5-7a2.5 2.5 0 110 5H14.59c.11.28.17.57.17.89a2.35 2.35 0 01-2.37 2.37c-1 0-1.74-.44-2.13-1.17a.75.75 0 011.27-.8l.1.17c.14.2.36.3.76.3.5 0 .87-.37.87-.87 0-.44-.36-.82-.84-.87l-.21-.01H2.74a.75.75 0 01-.1-1.5H15.44l.18-.02a1 1 0 10-1.01-1.45l-.1.21a.75.75 0 01-1.36-.6A2.5 2.5 0 0115.5 8zm-6-5a3.5 3.5 0 01.43 6.97l-.1.02H2.75a.75.75 0 01-.1-1.49H9.5a2 2 0 10-2-2 .75.75 0 01-1.5 0A3.5 3.5 0 019.5 3zM3 3a1 1 0 110 2 1 1 0 010-2zm14-1a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const WeatherBlowingSnow20Filled = wrapIcon(rawSvg({}), 'WeatherBlowingSnow20Filled');
export default WeatherBlowingSnow20Filled;
      