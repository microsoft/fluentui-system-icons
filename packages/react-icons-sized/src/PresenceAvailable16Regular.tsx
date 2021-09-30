import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.7 6.7a1 1 0 00-1.4-1.4L7 8.58l-1.3-1.3a1 1 0 00-1.4 1.42l2 2a1 1 0 001.4 0l4-4z" fill={primaryFill} /><path d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6a6 6 0 100 12A6 6 0 008 2z" fill={primaryFill} /></svg>;
}

const PresenceAvailable16Regular = wrapIcon(rawSvg({}), 'PresenceAvailable16Regular');
export default PresenceAvailable16Regular;
      