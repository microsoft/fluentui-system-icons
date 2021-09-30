import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.22 2.07l-1.16.35A3.75 3.75 0 002.5 5.07c-.72 2.77.06 6.08 2.27 9.91 2.22 3.83 4.69 6.16 7.44 6.93 1.27.35 2.63.01 3.59-.9l.88-.83c1-.95 1.15-2.5.34-3.6l-1.28-1.78a2.75 2.75 0 00-3.03-1.02l-2.01.61c-.06.02-.2-.03-.44-.24-.34-.31-.75-.86-1.2-1.64-.62-1.07-.9-1.85-.85-2.25 0-.05.04-.11.08-.15l1.5-1.4c.86-.8 1.11-2.06.63-3.13l-.9-2a2.75 2.75 0 00-3.3-1.51zM3.96 5.45c.2-.77.78-1.37 1.53-1.6l1.17-.35c.6-.18 1.24.11 1.5.69l.9 2c.22.5.1 1.06-.29 1.43l-1.5 1.4c-.3.28-.5.66-.54 1.08-.09.8.27 1.83 1.04 3.16 1.14 1.97 2.2 2.92 3.37 2.57l2.02-.62c.5-.16 1.06.03 1.37.46l1.29 1.78c.36.5.3 1.2-.16 1.64l-.89.84c-.57.54-1.39.74-2.15.53-2.31-.64-4.5-2.7-6.54-6.23-2.03-3.52-2.72-6.45-2.12-8.78zm17.82-2.17a.75.75 0 10-1.06-1.06L15 7.94l-1.87-1.87a.75.75 0 00-1.06 1.06l2.4 2.4a.75.75 0 001.06 0l6.25-6.25z" fill={primaryFill} /></svg>;
}

const CallCheckmark24Regular = wrapIcon(rawSvg({}), 'CallCheckmark24Regular');
export default CallCheckmark24Regular;
      