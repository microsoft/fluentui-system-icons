import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudSyncComplete24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.2 12.19a.69.69 0 01.94 0c.23.22.26.57.07.82l-.07.08-6 5.72a.69.69 0 01-.93.01l-.08-.07-2-2.55a.62.62 0 01.14-.9.7.7 0 01.86.06l.07.08 1.54 1.95 5.46-5.2zM12 4c3.52 0 5.52 2.27 5.8 5.02h.1c2.26 0 4.1 1.78 4.1 3.99 0 2.2-1.84 3.99-4.1 3.99h-3.41l3.34-3.19c.67-.64.67-1.7 0-2.35a1.69 1.69 0 00-2.33 0l-4.65 4.45-.86-1.1a1.69 1.69 0 00-2.3-.31 1.62 1.62 0 00-.34 2.32l.14.18H6.1A4.05 4.05 0 012 13c0-2.2 1.84-3.98 4.1-3.98h.1C6.47 6.25 8.47 4 12 4z" fill={primaryFill} /></svg>;
};

export default CloudSyncComplete24Filled;