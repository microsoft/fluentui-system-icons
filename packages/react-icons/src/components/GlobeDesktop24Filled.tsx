import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobeDesktop24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 16.5H8.9l.06.3C9.6 19.9 10.8 22 12 22c.5 0 1-.36 1.45-1H13a2 2 0 01-2-2v-2.5z" fill={primaryFill} /><path d="M11 15H8.67a25.36 25.36 0 01-.13-4.51l.04-.49h6.84c.05.65.08 1.31.08 2H13a2 2 0 00-2 2v1z" fill={primaryFill} /><path d="M22 12h-5c0-.45 0-.9-.03-1.34l-.04-.66h4.87c.13.65.2 1.32.2 2z" fill={primaryFill} /><path d="M7.37 16.5h-4.3l.14.28a10.03 10.03 0 005.95 4.81 13.93 13.93 0 01-1.79-5.09z" fill={primaryFill} /><path d="M7.07 10H2.2a10.05 10.05 0 00.26 5h4.7l-.06-.58A27.94 27.94 0 017.07 10z" fill={primaryFill} /><path d="M14.84 2.4l.1.18c.88 1.43 1.53 3.5 1.84 5.92h4.6a10.03 10.03 0 00-6.54-6.1z" fill={primaryFill} /><path d="M9.16 2.4l-.12.04A10.03 10.03 0 002.63 8.5h4.59l.06-.44c.35-2.32 1-4.3 1.88-5.65z" fill={primaryFill} /><path d="M15.21 8.19C14.65 4.54 13.31 2 12 2c-1.36 0-2.72 2.7-3.26 6.5h6.52l-.05-.31z" fill={primaryFill} /><path d="M12 14a1 1 0 011-1h9a1 1 0 011 1v5a1 1 0 01-1 1h-3v2h.5a.5.5 0 010 1h-4a.5.5 0 010-1h.5v-2h-3a1 1 0 01-1-1v-5z" fill={primaryFill} /></svg>;
};

export default GlobeDesktop24Filled;