import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 16.08A1 1 0 015 14.76L6.55 13H3a1 1 0 01-1-.88V12a1 1 0 01.88-1H5.8L4.24 9.25a1 1 0 111.5-1.32L8.45 11H11V8.45L7.93 5.74a1 1 0 01-.17-1.31l.08-.1a1 1 0 011.31-.17l.1.08L11 5.78V3a1 1 0 01.77-.97l.11-.02L12 2a1 1 0 011 .88V5.8l1.77-1.55a1 1 0 011.31 1.51L13 8.46V11h2.55l2.7-3.08a1 1 0 011.31-.16l.1.07a1 1 0 01.17 1.31l-.08.1L18.21 11H21a1 1 0 011 .88V12a1 1 0 01-.88 1H18.2l1.55 1.76a1 1 0 010 1.33l-.1.08a1 1 0 01-1.31 0l-.1-.09-2.7-3.08H13v2.55l3.09 2.7a1 1 0 01.17 1.3l-.08.1a1 1 0 01-1.3.18l-.1-.08L13 18.2V21a1 1 0 01-.88 1H12a1 1 0 01-1-.88v-2.9l-1.74 1.53a1 1 0 11-1.32-1.5l3.06-2.7V13H9.2l-2.7 3.08z" fill={primaryFill} /></svg>;
}

const WeatherSnowflake24Filled = wrapIcon(rawSvg({}), 'WeatherSnowflake24Filled');
export default WeatherSnowflake24Filled;
      