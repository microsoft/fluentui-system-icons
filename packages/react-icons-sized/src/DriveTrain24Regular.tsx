import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v3a2.5 2.5 0 005 0V8h2.27a2 2 0 00.98.85v6.3a2 2 0 00-.98.85H8v-.5a2.5 2.5 0 00-5 0v3a2.5 2.5 0 005 0v-1h2.06a2 2 0 003.88 0H16v1a2.5 2.5 0 005 0v-3a2.5 2.5 0 00-5 0v.5h-2.27a2 2 0 00-.98-.85v-6.3a2 2 0 00.98-.85H16v.5a2.5 2.5 0 005 0v-3a2.5 2.5 0 00-5 0v1h-2.06a2 2 0 00-3.88 0H8v-1A2.5 2.5 0 005.5 3zm-1 2.5a1 1 0 012 0v3a1 1 0 01-2 0v-3zm1 9a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm12-9a1 1 0 112 0v3a1 1 0 11-2 0v-3zm1 9a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const DriveTrain24Regular = wrapIcon(rawSvg({}), 'DriveTrain24Regular');
export default DriveTrain24Regular;
      