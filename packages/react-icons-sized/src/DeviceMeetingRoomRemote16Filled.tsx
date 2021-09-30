import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.67 2a2 2 0 00-1.93 1.46L2.31 5 2.5 5h2A2.5 2.5 0 017 7.5V12h5.9a2.08 2.08 0 002.01-2.64l-1.66-5.9A2 2 0 0011.34 2H4.67zm2.28 12c.04-.16.05-.33.05-.5V13h4.5a.5.5 0 110 1H6.95zM3.5 9.5a.75.75 0 100-1.5.75.75 0 000 1.5zM1 7.5C1 6.67 1.67 6 2.5 6h2C5.33 6 6 6.67 6 7.5v6c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 011 13.5v-6zM2.5 7a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h2a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-2z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote16Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote16Filled');
export default DeviceMeetingRoomRemote16Filled;
      