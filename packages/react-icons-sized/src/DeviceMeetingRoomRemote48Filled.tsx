import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.97 10.4c.7-2.6 3.05-4.4 5.74-4.4h18.58c2.7 0 5.04 1.8 5.74 4.4l4.76 17.77A6.22 6.22 0 0137.78 36H21V22.75A5.75 5.75 0 0015.25 17h-7.5c-.19 0-.37 0-.55.03l1.77-6.63zM21 40.25v.25h13.75a1.25 1.25 0 100-2.5H21v2.25zM11.5 29a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3.75-7.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .69.56 1.25 1.25 1.25h7.5c.7 0 1.25-.56 1.25-1.25v-17.5c0-.69-.56-1.25-1.25-1.25h-7.5zM4 22.75A3.75 3.75 0 017.75 19h7.5A3.75 3.75 0 0119 22.75v17.5A3.75 3.75 0 0115.25 44h-7.5A3.75 3.75 0 014 40.25v-17.5z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote48Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote48Filled');
export default DeviceMeetingRoomRemote48Filled;
      