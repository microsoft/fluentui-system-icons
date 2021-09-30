import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.97 5.58A3.5 3.5 0 018.35 3h11.3a3.5 3.5 0 013.38 2.58l2.83 10.37A4 4 0 0122 21H12v-1.5h10a2.5 2.5 0 002.4-3.16L21.59 5.97a2 2 0 00-1.93-1.47H8.35a2 2 0 00-1.93 1.47L5.32 10H4.25c-.17 0-.33.01-.5.04l1.22-4.46zM12 24h8.26a.75.75 0 100-1.5H12V24zM6.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM2 13.25C2 12.01 3 11 4.25 11h4.5C10 11 11 12 11 13.25v10.5C11 24.99 10 26 8.75 26h-4.5C3.01 26 2 25 2 23.75v-10.5zm2.25-.75a.75.75 0 00-.75.75v10.5c0 .41.34.75.75.75h4.5c.42 0 .75-.34.75-.75v-10.5a.75.75 0 00-.75-.75h-4.5z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote28Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote28Regular');
export default DeviceMeetingRoomRemote28Regular;
      