import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 19.01c.38 0 .69.28.74.65v1.6a.75.75 0 01-1.49.1v-1.6c0-.41.33-.75.75-.75zm6.02-2.07L19.08 18a.75.75 0 11-1.06 1.06L16.96 18a.75.75 0 011.06-1.06zm-10.99 0c.3.3.3.77 0 1.06l-1.06 1.06A.75.75 0 014.91 18l1.06-1.06c.3-.3.77-.3 1.06 0zM12 6.48a5.52 5.52 0 110 11.04 5.52 5.52 0 010-11.04zm0 1.5a4.02 4.02 0 100 8.05 4.02 4.02 0 000-8.05zm9.25 3.29a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h1.6zm-17-.03a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h1.6zm1.64-6.37l.08.07L7.03 6a.75.75 0 01-.97 1.13l-.09-.07L4.91 6a.75.75 0 01.98-1.13zm13.19.07c.26.27.29.68.07.98l-.07.08-1.06 1.06a.75.75 0 01-1.14-.97l.08-.09 1.06-1.06c.3-.3.77-.3 1.06 0zM12 2c.38 0 .7.28.74.65l.01.1v1.5a.75.75 0 01-1.5.1v-1.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const WeatherSunny24Regular = wrapIcon(rawSvg({}), 'WeatherSunny24Regular');
export default WeatherSunny24Regular;
      