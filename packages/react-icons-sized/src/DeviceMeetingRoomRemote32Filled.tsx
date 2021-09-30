import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.38 7.11A4.25 4.25 0 019.48 4h13.05c1.91 0 3.58 1.27 4.1 3.11l3.22 11.6A4.18 4.18 0 0125.82 24H14.5v-9.5a4 4 0 00-4-4H4.43l.95-3.39zM14.47 28H24a1 1 0 100-2h-9.5v1.5c0 .17 0 .34-.03.5zM4.5 14a.5.5 0 00-.5.5v13c0 .28.22.5.5.5h6a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-6zm-2.5.5A2.5 2.5 0 014.5 12h6a2.5 2.5 0 012.5 2.5v13a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 012 27.5v-13zM7.5 20a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote32Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote32Filled');
export default DeviceMeetingRoomRemote32Filled;
      