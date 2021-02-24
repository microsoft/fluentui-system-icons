import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EyeTrackingOn16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h1.5a.5.5 0 010 1H4a1 1 0 00-1 1v1.5a.5.5 0 01-1 0V4z" fill={primaryFill} /><path d="M2 12c0 1.1.9 2 2 2h1.5a.5.5 0 000-1H4a1 1 0 01-1-1v-1.5a.5.5 0 00-1 0V12z" fill={primaryFill} /><path d="M12 2a2 2 0 012 2v1.5a.5.5 0 01-1 0V4a1 1 0 00-1-1h-1.5a.5.5 0 010-1H12z" fill={primaryFill} /><path d="M14 12a2 2 0 01-2 2h-1.5a.5.5 0 010-1H12a1 1 0 001-1v-1.5a.5.5 0 011 0V12z" fill={primaryFill} /><path d="M5.5 9a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" fill={primaryFill} /><path d="M3.31 7.96a.5.5 0 00.65-.27v-.01L4 7.62c.02-.06.07-.14.13-.24.13-.2.34-.48.64-.76A4.6 4.6 0 018 5.5a4.6 4.6 0 013.23 1.12 3.73 3.73 0 01.8 1.06s.25.45.66.28a.5.5 0 00.27-.65c-.1-.22 0 0 0 0V7.3a1.8 1.8 0 00-.06-.13c-.04-.08-.1-.2-.19-.33a4.73 4.73 0 00-.81-.96A5.6 5.6 0 008 4.5a5.6 5.6 0 00-3.9 1.38A4.73 4.73 0 003.04 7.3v.01a.5.5 0 00.27.65z" fill={primaryFill} /></svg>;
};

export default EyeTrackingOn16Filled;