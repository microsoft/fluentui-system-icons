import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0118 12.24 2.82 2.82 0 0115.13 15h-.7l-.01.04-1.49 2.7a.5.5 0 01-.91-.4l.03-.07L13.3 15h-1.85l-.02.04-1.49 2.7a.5.5 0 01-.91-.4l.03-.07L10.31 15H8.44l-1.5 2.75a.5.5 0 01-.9-.4l.03-.08L7.3 15h-.43A2.82 2.82 0 014 12.24a2.82 2.82 0 012.87-2.77h.06C7.13 7.57 8.53 6 11 6zM3.8 8.7a.5.5 0 01-.22.6l-.09.04-.8.27a.5.5 0 01-.4-.9l.08-.04.8-.28a.5.5 0 01.63.31zm5.12-4.2c.33.16.62.37.87.62a4.57 4.57 0 00-3.54 3.16l-.07.22-.04.19-.17.03c-.45.09-.87.26-1.25.5a3.28 3.28 0 014.2-4.72zm-6 .17L3 4.7l.76.37a.5.5 0 01-.35.93l-.09-.03-.76-.37a.5.5 0 01.36-.93zM9.99 2.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 01-.93-.36l.03-.08.37-.76A.5.5 0 0110 2.3zm-3.8-.04l.05.09.27.8a.5.5 0 01-.9.4l-.04-.08-.28-.8a.5.5 0 01.9-.4z" fill={primaryFill} /></svg>;
}

const WeatherRainShowersDay20Filled = wrapIcon(rawSvg({}), 'WeatherRainShowersDay20Filled');
export default WeatherRainShowersDay20Filled;
      