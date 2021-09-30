import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zM3.05 3.05c.2-.2.51-.2.7 0l.71.7a.5.5 0 01-.7.71l-.71-.7a.5.5 0 010-.71zm9.9 0c.2.2.2.51 0 .7l-.7.71a.5.5 0 11-.71-.7l.7-.71c.2-.2.51-.2.71 0zM1 8c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1A.5.5 0 011 8zm12 0c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1A.5.5 0 0113 8zm-8.54 3.54c.2.2.2.5 0 .7l-.7.71a.5.5 0 11-.71-.7l.7-.71c.2-.2.52-.2.71 0zm7.08 0c.2-.2.5-.2.7 0l.71.7a.5.5 0 11-.7.71l-.71-.7a.5.5 0 010-.71zM8 13c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm0-9a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
}

const WeatherSunny16Filled = wrapIcon(rawSvg({}), 'WeatherSunny16Filled');
export default WeatherSunny16Filled;
      