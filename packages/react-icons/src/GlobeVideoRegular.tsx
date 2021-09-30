import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 17.42a8 8 0 1110.99-7.9c-.11.04-.22.1-.32.17l-.67.44a7.28 7.28 0 00-.46-2.63h-2.73c.07.48.13.98.16 1.5h-1c-.04-.52-.1-1.02-.18-1.5H7.21a14.87 14.87 0 00-.17 3.57c-.03.14-.04.28-.04.43v3.86c-.24-.56-.45-1.18-.61-1.86H3.94A7.03 7.03 0 007 16.33v1.09zM12.02 4.9C11.41 3.59 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 00-.56-1.6zM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 003.94 6.5h2.45zM6 10c0-.87.07-1.71.2-2.5H3.45a6.98 6.98 0 000 5h2.73C6.07 11.71 6 10.87 6 10zm10.06-3.5a7.02 7.02 0 00-3.77-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45zM9.5 10c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5V17l2.22 1.48a.5.5 0 00.78-.41v-7.14a.5.5 0 00-.78-.41L16 12v-.5c0-.83-.67-1.5-1.5-1.5h-5z" fill={primaryFill} /></svg>;
}

const GlobeVideoRegular = wrapIcon(rawSvg({}), 'GlobeVideoRegular');
export default GlobeVideoRegular;
      