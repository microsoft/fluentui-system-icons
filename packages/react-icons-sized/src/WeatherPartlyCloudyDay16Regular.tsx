import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 7a2.5 2.5 0 00-2.5 2.5v.5h-1a1.5 1.5 0 000 3h7a1.5 1.5 0 000-3h-1v-.5A2.5 2.5 0 009 7zM5.53 9a3.5 3.5 0 016.93 0h.04a2.5 2.5 0 010 5h-7a2.5 2.5 0 010-5h.03zM8.8 2.82a.5.5 0 10-.89-.47l-.42.8a.5.5 0 00.88.47l.43-.8zM5 2.07a.5.5 0 10-.95.3l.26.87a.5.5 0 00.96-.3l-.27-.87zM6 4a3 3 0 012.29 1.06c-.4.06-.76.17-1.11.32a2 2 0 00-2.8 2.8c-.32.1-.62.26-.9.46A3 3 0 016 4zm-4.18.21a.5.5 0 10-.47.89l.8.42a.5.5 0 00.47-.88l-.8-.43zm.42 4.47a.5.5 0 00-.3-.96L1.07 8a.5.5 0 10.3.95l.87-.26z" fill={primaryFill} /></svg>;
}

const WeatherPartlyCloudyDay16Regular = wrapIcon(rawSvg({}), 'WeatherPartlyCloudyDay16Regular');
export default WeatherPartlyCloudyDay16Regular;
      