import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 5A4.25 4.25 0 004 9.25v9.05l.25-.01H6.5V9.25c0-.97.78-1.75 1.75-1.75h31.5c.97 0 1.75.78 1.75 1.75v9.04H44V9.26C44 6.9 42.1 5 39.75 5H8.25zM4 32.75v-6.97h2.5v6.97c0 .97.78 1.75 1.75 1.75h31.5c.97 0 1.75-.78 1.75-1.75v-6.96H44v6.96C44 35.1 42.1 37 39.75 37H31v3.5h2.75a1.25 1.25 0 110 2.5h-19.5a1.25 1.25 0 110-2.5H17V37H8.25A4.25 4.25 0 014 32.75zM28.5 37h-9v3.5h9V37zm-9.56-26.13a1.25 1.25 0 00-2.37-.04L12.94 21H5.25a1.25 1.25 0 100 2.5h8.57c.53 0 1-.33 1.18-.83l2.69-7.52 5.12 15.98a1.25 1.25 0 002.32.15l5.81-12.45 1.65 3.9c.2.47.65.77 1.15.77h9.01a1.25 1.25 0 100-2.5h-8.18l-2.42-5.74a1.25 1.25 0 00-2.28-.04l-5.65 12.11-5.28-16.46z" fill={primaryFill} /></svg>;
}

const DesktopPulse48Regular = wrapIcon(rawSvg({}), 'DesktopPulse48Regular');
export default DesktopPulse48Regular;
      