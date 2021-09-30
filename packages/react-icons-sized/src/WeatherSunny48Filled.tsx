import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 38c.92 0 1.67.7 1.74 1.6l.01.15v3.5a1.75 1.75 0 01-3.5.14v-3.64c0-.97.78-1.75 1.75-1.75zm11.86-4.61l.12.11 2.5 2.48a1.75 1.75 0 01-2.34 2.6l-.12-.12-2.5-2.47a1.75 1.75 0 012.34-2.6zm-21.39.12c.65.64.69 1.66.12 2.35l-.12.12L12 38.46a1.75 1.75 0 01-2.59-2.35l.12-.13L12 33.51c.68-.69 1.79-.69 2.47 0zM24 13.08a10.92 10.92 0 110 21.84 10.92 10.92 0 010-21.84zM8.25 22.25a1.75 1.75 0 01.14 3.5H4.75a1.75 1.75 0 01-.14-3.5h3.64zm35 0a1.75 1.75 0 01.14 3.5h-3.64a1.75 1.75 0 01-.14-3.5h3.64zM11.84 9.43l.12.11 2.48 2.48a1.75 1.75 0 01-2.35 2.59l-.13-.12-2.47-2.47a1.75 1.75 0 012.35-2.6zm26.62.1c.64.65.68 1.67.11 2.36l-.1.12-2.48 2.48a1.75 1.75 0 01-2.6-2.35l.12-.12 2.47-2.48c.69-.68 1.8-.68 2.48 0zM24 3c.92 0 1.67.7 1.74 1.6l.01.15v3.5a1.75 1.75 0 01-3.5.14V4.75c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /></svg>;
}

const WeatherSunny48Filled = wrapIcon(rawSvg({}), 'WeatherSunny48Filled');
export default WeatherSunny48Filled;
      