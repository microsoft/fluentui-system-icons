import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0118 13.24 2.82 2.82 0 0115.13 16H6.87A2.82 2.82 0 014 13.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 8.55 8.53 7 11 7zm0 1a3.04 3.04 0 00-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 15 6.82 15h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0011 8zM5.84 3a4.24 4.24 0 013.88 3.14c-.39.08-.74.2-1.08.36A3.05 3.05 0 007 4.38c-.19-.1-.34-.18-.54-.25a5.87 5.87 0 01-.62 3.44 5 5 0 01-2.56 1.9c.14.12.3.23.45.34.31.2.62.35.92.46-.33.22-.63.5-.88.8l-.28-.14A4.24 4.24 0 012.1 9.66a.63.63 0 01.3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78z" fill={primaryFill} /></svg>;
}

const WeatherPartlyCloudyNightRegular = wrapIcon(rawSvg({}), 'WeatherPartlyCloudyNightRegular');
export default WeatherPartlyCloudyNightRegular;
      