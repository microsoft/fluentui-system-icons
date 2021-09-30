import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.97 5.58A3.5 3.5 0 018.35 3h11.3a3.5 3.5 0 013.38 2.58l2.83 10.37A4 4 0 0122 21H6a4 4 0 01-3.86-5.05L4.97 5.58zM7.75 22.5a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H7.75z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom28Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoom28Filled');
export default DeviceMeetingRoom28Filled;
      