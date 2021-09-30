import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 14c.31 0 .56-.15.73-.37.2-.24.27-.51.27-.63 0-.7.03-1.5.19-2.25.15-.75.42-1.5.94-2.08.45-.51.91-1.1 1.27-1.9.22-.5.4-1.13.51-1.89A1.5 1.5 0 0010 3.5a.5.5 0 00-1 0 .5.5 0 01-1 0v-1C8 1.67 8.67 1 9.5 1h1.22c.27 0 .54.07.77.21l1.78 1.07c.45.27.73.76.73 1.29v.93c0 .83-.67 1.5-1.5 1.5H12v6.05a2.5 2.5 0 012 2.45.5.5 0 01-.5.5H11v-.5c0-.82-.4-1.54-1-2v-2a.5.5 0 00-1 0v1.55a2.5 2.5 0 00-.5-.05H8a.5.5 0 000 1h.5a1.49 1.49 0 011.5 1.5v.5H3.75a2.75 2.75 0 01-1.53-5.04.5.5 0 11.56.83A1.75 1.75 0 003.75 14H4z" fill={primaryFill} /></svg>;
}

const AnimalDog16Filled = wrapIcon(rawSvg({}), 'AnimalDog16Filled');
export default AnimalDog16Filled;
      