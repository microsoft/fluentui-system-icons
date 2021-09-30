import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.35 3a3.5 3.5 0 00-3.38 2.58l-1.21 4.46c.16-.03.32-.04.49-.04h4.5c1.8 0 3.25 1.46 3.25 3.25V21h10a4 4 0 003.86-5.05L23.03 5.58A3.5 3.5 0 0019.65 3H8.35zM12 24l.01-.25V22.5h8.25a.75.75 0 110 1.5H12zM6.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM2 13.25C2 12.01 3 11 4.25 11h4.5C10 11 11 12 11 13.25v10.5C11 24.99 10 26 8.75 26h-4.5C3.01 26 2 25 2 23.75v-10.5zm2.25-.75a.75.75 0 00-.75.75v10.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75v-10.5a.75.75 0 00-.75-.75h-4.5z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote28Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote28Filled');
export default DeviceMeetingRoomRemote28Filled;
      