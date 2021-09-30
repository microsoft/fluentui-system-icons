import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 18.53a1 1 0 01.99.89v1.57a1 1 0 01-1.99.11v-1.57a1 1 0 011-1zm6.03-1.93l1.03 1.03a1 1 0 01-1.41 1.41l-1.03-1.03a1 1 0 011.41-1.41zm-10.66 0a1 1 0 010 1.41l-1.03 1.03a1 1 0 01-1.41-1.41l1.03-1.03a1 1 0 011.41 0zm4.64-10.13a5.52 5.52 0 110 11.05 5.52 5.52 0 010-11.05zM11.25 9c-.38 0-.7.28-.74.65l-.01.1v3.1c.05.34.32.6.65.65h2.2c.33-.05.6-.31.64-.64l.01-.1v-.1a.75.75 0 00-.65-.65H12V9.64a.75.75 0 00-.75-.65zm9.73 2.02a1 1 0 01.11 2h-1.57a1 1 0 01-.11-2h1.57zm-16.5-.03a1 1 0 01.12 2H3.02a1 1 0 01-.11-2h1.57zm1.77-6.12l.1.09 1.02 1.03a1 1 0 01-1.32 1.5l-.09-.09-1.03-1.03a1 1 0 011.32-1.5zm12.81.09a1 1 0 01.09 1.32l-.09.1-1.03 1.02a1 1 0 01-1.5-1.32l.09-.1 1.03-1.02a1 1 0 011.41 0zM12 2a1 1 0 011 .89v1.57a1 1 0 01-2 .12V3a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const TimeAndWeather24Filled = wrapIcon(rawSvg({}), 'TimeAndWeather24Filled');
export default TimeAndWeather24Filled;
      