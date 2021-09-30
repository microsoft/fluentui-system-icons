import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.1 5.35A3.06 3.06 0 017.06 3h9.86c1.42 0 2.65.97 2.98 2.35l1.99 8.27A3.55 3.55 0 0118.45 18H10.5v-1.5h7.95c1.32 0 2.3-1.24 2-2.53l-2-8.27c-.17-.7-.8-1.2-1.52-1.2H7.07c-.72 0-1.35.5-1.52 1.2l-.67 2.8H3.75c-.14 0-.29.01-.42.03l.76-3.18zm6.39 15.15h6.76a.75.75 0 100-1.5H10.5v1.25l-.01.25zm-4.74-6a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM2 11.25c0-.97.78-1.75 1.75-1.75h4c.97 0 1.75.78 1.75 1.75v9c0 .97-.78 1.75-1.75 1.75h-4C2.78 22 2 21.22 2 20.25v-9zM3.75 11a.25.25 0 00-.25.25v9c0 .14.11.25.25.25h4c.14 0 .25-.11.25-.25v-9a.25.25 0 00-.25-.25h-4z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote24Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote24Regular');
export default DeviceMeetingRoomRemote24Regular;
      