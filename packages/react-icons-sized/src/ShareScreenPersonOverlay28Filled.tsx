import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 4A3.75 3.75 0 002 7.75v12.5A3.75 3.75 0 005.75 24h9.44a5.83 5.83 0 01-.19-1.5v-.25a2.75 2.75 0 012.75-2.75h1.81A4 4 0 1125.5 16h.5V7.75A3.75 3.75 0 0022.25 4H5.75zM6 9.5C6 8.67 6.67 8 7.5 8h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 016 13.5v-4zM24.5 16a3 3 0 11-6 0 3 3 0 016 0zm2.5 6.5c0 3.04-2.46 4.5-5.5 4.5S16 25.54 16 22.5v-.25c0-.97.78-1.75 1.75-1.75h7.5c.97 0 1.75.78 1.75 1.75v.25z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlay28Filled = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlay28Filled');
export default ShareScreenPersonOverlay28Filled;
      