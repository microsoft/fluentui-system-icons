import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 6a3.5 3.5 0 00-3.47 3H5.5a2.5 2.5 0 000 5h7a2.5 2.5 0 000-5h-.04A3.5 3.5 0 009 6zm-.21-3.18a.5.5 0 10-.89-.47l-.42.8a.5.5 0 00.88.47l.43-.8zM5 2.07a.5.5 0 10-.95.3l.26.87a.5.5 0 00.96-.3l-.27-.87zM3 7c0 .6.18 1.17.49 1.64.36-.26.78-.45 1.24-.55a4.5 4.5 0 013.56-3.03A3 3 0 003 7zM1.82 4.21a.5.5 0 10-.47.89l.8.42a.5.5 0 00.47-.88l-.8-.43zm.42 4.47a.5.5 0 00-.3-.96L1.07 8a.5.5 0 10.3.95l.87-.26z" fill={primaryFill} /></svg>;
}

const WeatherPartlyCloudyDay16Filled = wrapIcon(rawSvg({}), 'WeatherPartlyCloudyDay16Filled');
export default WeatherPartlyCloudyDay16Filled;
      