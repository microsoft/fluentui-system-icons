import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.7 5.3a1 1 0 010 1.4L9.42 8l1.3 1.3a1 1 0 01-1.42 1.4L8 9.42l-1.3 1.3a1 1 0 01-1.4-1.42L6.58 8l-1.3-1.3a1 1 0 011.42-1.4L8 6.58l1.3-1.3a1 1 0 011.4 0z" fill={primaryFill} /><path d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6a6 6 0 100 12A6 6 0 008 2z" fill={primaryFill} /></svg>;
}

const PresenceOffline16Regular = wrapIcon(rawSvg({}), 'PresenceOffline16Regular');
export default PresenceOffline16Regular;
      