import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.02 6.02c2.46 0 3.86 1.57 4.06 3.47h.06a2.82 2.82 0 012.88 2.76 2.82 2.82 0 01-2.88 2.77h-.71l-.01.02-1.49 2.7a.5.5 0 01-.91-.39l.03-.08 1.24-2.25h-1.85l-.01.02-1.49 2.7a.5.5 0 01-.91-.39l.03-.08 1.24-2.25H8.43l-1.48 2.73a.5.5 0 01-.6.23l-.08-.03a.5.5 0 01-.24-.6l.04-.08 1.22-2.25h-.4a2.82 2.82 0 01-2.87-2.77c0-1.46 1.19-2.67 2.7-2.75h.23c.2-1.92 1.6-3.48 4.07-3.48zm-5.16-4a4.24 4.24 0 013.87 3.14A4.56 4.56 0 006.26 8.3l-.06.22-.05.18-.16.03c-.9.19-1.67.68-2.2 1.37l-.29-.15a4.24 4.24 0 01-1.37-1.27.63.63 0 01.3-.95c1.38-.5 2.12-1.05 2.54-1.85.47-.89.55-1.83.24-3.08-.1-.41.23-.8.65-.78z" fill={primaryFill} /></svg>;
}

const WeatherRainShowersNight20Filled = wrapIcon(rawSvg({}), 'WeatherRainShowersNight20Filled');
export default WeatherRainShowersNight20Filled;
      