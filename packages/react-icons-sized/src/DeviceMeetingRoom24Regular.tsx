import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.07 3c-1.42 0-2.65.97-2.98 2.35L2.1 13.62A3.55 3.55 0 005.55 18h12.9c2.29 0 3.98-2.15 3.44-4.38L19.9 5.35A3.06 3.06 0 0016.93 3H7.07zM5.55 5.7c.17-.7.8-1.2 1.52-1.2h9.86c.72 0 1.35.5 1.51 1.2l2 8.27a2.05 2.05 0 01-2 2.53H5.55a2.05 2.05 0 01-2-2.53l2-8.27zM6.75 19a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom24Regular = wrapIcon(rawSvg({}), 'DeviceMeetingRoom24Regular');
export default DeviceMeetingRoom24Regular;
      