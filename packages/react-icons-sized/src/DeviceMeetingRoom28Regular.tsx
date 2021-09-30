import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.35 3a3.5 3.5 0 00-3.38 2.58L2.14 15.95A4 4 0 006 21h16a4 4 0 003.86-5.05L23.03 5.58A3.5 3.5 0 0019.65 3H8.35zM6.42 5.97A2 2 0 018.35 4.5h11.3a2 2 0 011.93 1.47l2.83 10.37A2.5 2.5 0 0122 19.5H6a2.5 2.5 0 01-2.4-3.16L6.41 5.97zM7.75 22.5a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H7.75z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom28Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoom28Regular');
export default DeviceMeetingRoom28Regular;
      