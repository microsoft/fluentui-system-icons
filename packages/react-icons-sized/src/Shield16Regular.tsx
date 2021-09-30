import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 2.15c.2-.2.5-.2.7 0A5.71 5.71 0 0012.5 4c.28 0 .5.22.5.5v3c0 3.22-1.64 5.4-4.84 6.47a.5.5 0 01-.32 0C4.64 12.91 3 10.72 3 7.5v-3c0-.28.22-.5.5-.5 1.53 0 2.9-.61 4.15-1.85zM8 3.19a6.65 6.65 0 01-4 1.8V7.5c0 1.43.36 2.57 1.02 3.45.64.85 1.61 1.54 2.98 2.02a6.13 6.13 0 002.98-2.02A5.57 5.57 0 0012 7.5V4.98a6.64 6.64 0 01-4-1.8z" fill={primaryFill} /></svg>;
}

const Shield16Regular = wrapIcon(rawSvg({}), 'Shield16Regular');
export default Shield16Regular;
      