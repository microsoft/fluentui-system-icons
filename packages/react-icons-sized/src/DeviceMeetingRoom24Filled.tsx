import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.1 5.35A3.06 3.06 0 017.06 3h9.86c1.41 0 2.65.97 2.98 2.35l1.99 8.27A3.55 3.55 0 0118.45 18H5.55a3.55 3.55 0 01-3.45-4.38l2-8.27zM6.74 19a.75.75 0 100 1.5h10.5a.75.75 0 100-1.5H6.75z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom24Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoom24Filled');
export default DeviceMeetingRoom24Filled;
      