import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.08 32.1l-.11.1a1.75 1.75 0 01-2.62-2.3l.1-.12 3.76-4.28H4.75a1.75 1.75 0 01-.14-3.5h6.6l-3.76-4.28-.1-.13a1.75 1.75 0 012.62-2.3l.1.12 5.8 6.59H22v-6.13l-6.6-5.8a1.75 1.75 0 012.2-2.72l.12.1L22 11.2V4.75a1.75 1.75 0 013.5-.14v6.6l4.28-3.76.13-.1a1.75 1.75 0 012.3 2.62l-.12.11-6.59 5.8V22h6.64l5.8-6.6a1.75 1.75 0 012.73 2.2l-.1.12L36.8 22h6.45a1.75 1.75 0 01.14 3.5H36.8l3.76 4.28a1.75 1.75 0 01-2.52 2.43l-.1-.12-5.8-6.59H25.5v6.63l6.6 5.8a1.75 1.75 0 01-2.2 2.73l-.12-.1-4.28-3.77v6.46a1.75 1.75 0 01-3.5.14v-6.6l-4.28 3.77-.12.1a1.75 1.75 0 01-2.3-2.62l.1-.11 6.6-5.8V25.5h-6.13l-5.8 6.6z" fill={primaryFill} /></svg>;
}

const WeatherSnowflake48Filled = wrapIcon(rawSvg({}), 'WeatherSnowflake48Filled');
export default WeatherSnowflake48Filled;
      