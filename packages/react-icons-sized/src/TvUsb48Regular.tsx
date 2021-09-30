import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 7A4.75 4.75 0 004 11.75v18.5A4.75 4.75 0 008.75 35H30.5v-2.5H8.75c-1.24 0-2.25-1-2.25-2.25v-18.5c0-1.24 1-2.25 2.25-2.25h30.5c1.24 0 2.25 1 2.25 2.25v7.75H43c.35 0 .68.05 1 .14v-7.89A4.75 4.75 0 0039.25 7H8.75zm2.5 31.5h20.21l1.58 2.5H11.25a1.25 1.25 0 110-2.5zM35 23v5h-1a1 1 0 00-1 1v6.96a1 1 0 00.15.53L36 41v4a1 1 0 001 1h5a1 1 0 001-1v-4l2.85-4.5a1 1 0 00.15-.54V29a1 1 0 00-1-1h-1v-5a1 1 0 00-1-1h-7a1 1 0 00-1 1zm2.5 1.5h4V28h-4v-3.5z" fill={primaryFill} /></svg>;
}

const TvUsb48Regular = wrapIcon(rawSvg({}), 'TvUsb48Regular');
export default TvUsb48Regular;
      