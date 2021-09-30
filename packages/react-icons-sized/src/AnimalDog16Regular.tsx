import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 2a.5.5 0 00-.5.5v1a.5.5 0 001 0 .5.5 0 011 0 1.5 1.5 0 01-2.08 1.38c-.11.91-.33 1.66-.6 2.3-.42.94-.96 1.6-1.45 2.15a3.4 3.4 0 00-.7 1.61C6.03 11.6 6 12.33 6 13c0 .3-.11.67-.31 1H9.9a1.5 1.5 0 00-1.41-1H8a.5.5 0 010-1h.5c.17 0 .34.02.5.05V10.5a.5.5 0 011 0v2c.48.36.83.89.95 1.5h1.96c-.2-.58-.76-1-1.41-1a.5.5 0 01-.5-.5v-7c0-.28.22-.5.5-.5h1a.5.5 0 00.5-.5v-.93a.5.5 0 00-.24-.43l-1.78-1.07a.5.5 0 00-.26-.07H9.5zM4 14c.31 0 .56-.15.73-.37.2-.24.27-.51.27-.63 0-.7.03-1.5.19-2.25.15-.75.42-1.5.94-2.08.45-.51.91-1.1 1.27-1.9.35-.79.6-1.83.6-3.27v-1C8 1.67 8.67 1 9.5 1h1.22c.27 0 .54.07.77.21l1.78 1.07c.45.27.73.76.73 1.29v.93c0 .83-.67 1.5-1.5 1.5H12v6.05a2.5 2.5 0 012 2.45.5.5 0 01-.5.5H3.75a2.75 2.75 0 01-1.53-5.04.5.5 0 11.56.83A1.75 1.75 0 003.75 14H4z" fill={primaryFill} /></svg>;
}

const AnimalDog16Regular = wrapIcon(rawSvg({}), 'AnimalDog16Regular');
export default AnimalDog16Regular;
      