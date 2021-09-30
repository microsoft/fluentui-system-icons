import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.47 4a4.25 4.25 0 00-4.1 3.11l-.93 3.4.06-.01h2.01l.8-2.85A2.25 2.25 0 019.46 6h13.06c1.01 0 1.9.67 2.17 1.65l3.22 11.59a2.18 2.18 0 01-2.1 2.76H14.5v2h11.32a4.18 4.18 0 004.03-5.3L26.63 7.11A4.25 4.25 0 0022.53 4H9.47zm5.03 22H24a1 1 0 110 2h-9.53c.02-.16.03-.33.03-.5V26zm-10-12a.5.5 0 00-.5.5v13c0 .28.22.5.5.5h6a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-6zm-2.5.5A2.5 2.5 0 014.5 12h6a2.5 2.5 0 012.5 2.5v13a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 012 27.5v-13zM7.5 20a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoomRemote32Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoomRemote32Regular');
export default DeviceMeetingRoomRemote32Regular;
      