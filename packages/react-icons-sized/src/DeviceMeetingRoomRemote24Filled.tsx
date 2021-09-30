import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.07 3c-1.41 0-2.64.97-2.97 2.35l-.77 3.18.42-.03h4a2.75 2.75 0 012.75 2.75V18h7.95c2.3 0 3.99-2.15 3.45-4.38l-2-8.27A3.06 3.06 0 0016.94 3H7.07zm3.42 17.5l.01-.25V19h6.75a.75.75 0 010 1.5H10.5zm-4.74-6a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM2 11.25c0-.97.78-1.75 1.75-1.75h4c.97 0 1.75.78 1.75 1.75v9c0 .97-.78 1.75-1.75 1.75h-4C2.78 22 2 21.22 2 20.25v-9zM3.75 11a.25.25 0 00-.25.25v9c0 .14.11.25.25.25h4c.14 0 .25-.11.25-.25v-9a.25.25 0 00-.25-.25h-4z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote24Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote24Filled');
export default DeviceMeetingRoomRemote24Filled;
      