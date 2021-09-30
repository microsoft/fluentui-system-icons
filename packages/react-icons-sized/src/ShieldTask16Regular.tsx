import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.85 6.85a.5.5 0 00-.7-.7L7.5 8.79 6.35 7.65a.5.5 0 10-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3zm-2.5-4.7a.5.5 0 00-.7 0A5.72 5.72 0 013.5 4a.5.5 0 00-.5.5v3c0 3.22 1.64 5.4 4.84 6.47.1.04.22.04.32 0C11.36 12.91 13 10.72 13 7.5v-3a.5.5 0 00-.5-.5c-1.53 0-2.9-.61-4.15-1.85zM4 4.98a6.65 6.65 0 004-1.8 6.64 6.64 0 004 1.8V7.5c0 1.43-.36 2.57-1.02 3.45A6.13 6.13 0 018 12.97a6.13 6.13 0 01-2.98-2.02A5.57 5.57 0 014 7.5V4.98z" fill={primaryFill} /></svg>;
}

const ShieldTask16Regular = wrapIcon(rawSvg({}), 'ShieldTask16Regular');
export default ShieldTask16Regular;
      