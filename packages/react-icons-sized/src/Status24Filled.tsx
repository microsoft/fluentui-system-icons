import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3c1.25 0 2.44.25 3.52.71l-1.16 1.17a7.5 7.5 0 104.78 4.83l1.17-1.18A9 9 0 1112 3zm9.16-.43l.14.13a2.4 2.4 0 010 3.4l-6.75 6.81a1 1 0 01-.4.25L9.8 14.53a.2.2 0 01-.25-.25l1.37-4.35a1 1 0 01.24-.4l6.76-6.82c.88-.9 2.3-.94 3.24-.14z" fill={primaryFill} /></svg>;
}

const Status24Filled = wrapIcon(rawSvg({}), 'Status24Filled');
export default Status24Filled;
      