import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0117 9.24 2.82 2.82 0 0114.13 12h-.73l-.96 1.74a.5.5 0 01-.88-.48l.7-1.26H10.4l-.96 1.74a.5.5 0 01-.88-.48l.7-1.26H7.4l-.96 1.74a.5.5 0 01-.88-.48l.7-1.26h-.39A2.82 2.82 0 013 9.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 4.55 7.53 3 10 3z" fill={primaryFill} /><path d="M7.75 14.32a.5.5 0 01.18.68l-1 1.75a.5.5 0 01-.86-.5l1-1.75a.5.5 0 01.68-.18z" fill={primaryFill} /><path d="M10.93 15a.5.5 0 00-.86-.5l-1 1.75a.5.5 0 00.86.5l1-1.75z" fill={primaryFill} /></svg>;
}

const WeatherDrizzleFilled = wrapIcon(rawSvg({}), 'WeatherDrizzleFilled');
export default WeatherDrizzleFilled;
      