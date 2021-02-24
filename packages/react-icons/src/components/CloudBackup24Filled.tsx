import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudBackup24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4c3.52 0 5.52 2.27 5.8 5.02h.1c2.26 0 4.1 1.78 4.1 3.99 0 2.2-1.84 3.99-4.1 3.99h-4.16v-4.04l.97.98.14.12.03.02a1.75 1.75 0 002.28-2.64l-3.95-3.95-.14-.12-.03-.02a1.75 1.75 0 00-2.28.16l-3.95 3.96-.12.14-.02.03c-.51.68-.45 1.65.17 2.27l.02.03.14.12.03.02c.69.51 1.66.46 2.28-.17l.93-.92V17H6.1A4.05 4.05 0 012 13c0-2.2 1.84-3.98 4.1-3.98h.1C6.47 6.25 8.47 4 12 4z" fill={primaryFill} /><path d="M11.24 10.57v9.69a.75.75 0 001.5 0v-9.71l2.65 2.66.09.07a.75.75 0 00.98-.07c.29-.3.29-.77 0-1.06l-3.93-3.93-.08-.07a.75.75 0 00-.98.07l-3.93 3.93-.07.08c-.22.3-.2.71.07.98l.09.07a.74.74 0 00.2.1c.27.1.57.04.78-.17l2.63-2.64z" fill={primaryFill} /></svg>;
};

export default CloudBackup24Filled;