import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.97 10.4c.7-2.6 3.05-4.4 5.74-4.4h18.58c2.7 0 5.04 1.8 5.74 4.4l4.76 17.77A6.22 6.22 0 0137.78 36H10.22a6.22 6.22 0 01-6-7.83L8.96 10.4zM13.25 38a1.25 1.25 0 100 2.5h21.5a1.25 1.25 0 100-2.5h-21.5z" fill={primaryFill} /></svg>;
}

const DeviceMeetingRoom48Filled = wrapIcon(rawSvg({}), 'DeviceMeetingRoom48Filled');
export default DeviceMeetingRoom48Filled;
      