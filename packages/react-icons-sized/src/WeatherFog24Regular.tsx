import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.74 19.5h8.5a.75.75 0 01.1 1.5h-8.6a.75.75 0 01-.1-1.5h8.6-8.5zm-2.99-2.98h14.5a.75.75 0 01.1 1.5H4.75a.75.75 0 01-.1-1.5h.1zM12 3c3.17 0 4.97 2.1 5.23 4.64h.08a3.69 3.69 0 110 7.36H6.69a3.69 3.69 0 110-7.36h.08A4.95 4.95 0 0112 3zm0 1.5a3.86 3.86 0 00-3.88 3.9c0 .35-.32.63-.68.63h-.7c-1.25 0-2.27 1-2.27 2.24a2.26 2.26 0 002.28 2.23h10.5c1.26 0 2.28-1 2.28-2.23a2.26 2.26 0 00-2.28-2.24h-.69c-.36 0-.68-.28-.68-.64 0-2.28-1.8-3.89-3.88-3.89z" fill={primaryFill} /></svg>;
}

const WeatherFog24Regular = wrapIcon(rawSvg({}), 'WeatherFog24Regular');
export default WeatherFog24Regular;
      