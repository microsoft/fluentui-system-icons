import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.28 31.95l4.52-5.49a1.25 1.25 0 012.01 1.48l-.08.11-2.84 3.44h4.86a1.25 1.25 0 011.05 1.94l-.08.1-6.48 8a1.25 1.25 0 01-2.02-1.46l.08-.1 4.83-5.98h-4.88a1.25 1.25 0 01-1.04-1.94l.07-.1 4.52-5.49-4.52 5.49zM26 10.02c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73h-4.13a2.49 2.49 0 00.3-2.5h4.01a4.7 4.7 0 004.7-4.72 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.6-1.4-1.35a8 8 0 00-7.98-8.2 8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.41 1.35H15.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.72h4a2.5 2.5 0 00.3 2.5H15.4a7.37 7.37 0 01-.25-14.73h.4c.53-5.1 4.12-9.26 10.46-9.26zM20 4a9.43 9.43 0 017.78 4.1 15.04 15.04 0 00-3.43-.01A6.65 6.65 0 0020 6.46a6.8 6.8 0 00-6.65 5.7l-.3 1.83a1 1 0 01-1 .83h-1.94a3.85 3.85 0 00-2.54 6.62 9.27 9.27 0 00-1.05 2.1 6.55 6.55 0 014.04-11.75h.14A9.44 9.44 0 0120 4z" fill={primaryFill} /></svg>;
}

const WeatherThunderstorm48Regular = wrapIcon(rawSvg({}), 'WeatherThunderstorm48Regular');
export default WeatherThunderstorm48Regular;
      