import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c.38 0 .7.28.74.65l.01.1v2.37l1.5-1.32a.75.75 0 011 1.13l-2.5 2.19v2.13h2.13l2.2-2.5a.75.75 0 01.97-.13l.08.06c.29.25.34.67.14.97l-.07.1-1.32 1.5h2.37c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74h-2.47l1.32 1.52c.25.28.25.7 0 .98l-.07.08a.75.75 0 01-.98 0l-.08-.07-2.2-2.5h-2.12v2.13l2.5 2.2c.28.24.33.66.13.96l-.06.1a.75.75 0 01-.97.13l-.1-.07-1.5-1.32v2.37c0 .38-.28.7-.65.74L10 18a.75.75 0 01-.75-.65v-2.47l-1.5 1.32a.75.75 0 01-1-1.13l2.5-2.19v-2.13H7.3l-2.37 2.7a.75.75 0 11-1.13-1l1.5-1.7H2.75a.75.75 0 01-.74-.65L2 10c0-.38.28-.7.65-.74l.1-.01h2.2L3.8 7.95a.75.75 0 111.13-1l2.01 2.3h2.3V7.12l-2.49-2.2a.75.75 0 01-.13-.97l.06-.08a.75.75 0 01.97-.14l.1.07 1.5 1.32V2.75c0-.34.23-.64.55-.72L9.9 2 10 2z" fill={primaryFill} /></svg>;
}

const WeatherSnowflake20Filled = wrapIcon(rawSvg({}), 'WeatherSnowflake20Filled');
export default WeatherSnowflake20Filled;
      