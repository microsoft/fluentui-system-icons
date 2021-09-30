import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5a2.5 2.5 0 015 0v1h2.06a2 2 0 013.88 0H16v-1a2.5 2.5 0 015 0v3a2.5 2.5 0 01-5 0V8h-2.27a2 2 0 01-.98.85v6.3a2 2 0 01.98.85H16v-.5a2.5 2.5 0 015 0v3a2.5 2.5 0 01-5 0v-1h-2.06a2 2 0 01-3.88 0H8v1a2.5 2.5 0 01-5 0v-3a2.5 2.5 0 015 0v.5h2.27a2 2 0 01.98-.85v-6.3a2 2 0 01-.98-.85H8v.5a2.5 2.5 0 01-5 0v-3z" fill={primaryFill} /></svg>;
}

const DriveTrain24Filled = wrapIcon(rawSvg({}), 'DriveTrain24Filled');
export default DriveTrain24Filled;
      