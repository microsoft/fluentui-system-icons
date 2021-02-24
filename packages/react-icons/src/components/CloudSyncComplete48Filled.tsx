import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudSyncComplete48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M33.5 22.53c.64.65.66 1.67.09 2.35l-.12.12-11.75 11.5c-.68.67-1.75.66-2.42.02l-.12-.12-4.75-5.44a1.75 1.75 0 012.53-2.42l.1.11 3.54 4.05 10.43-10.2c.69-.68 1.8-.66 2.47.03zM24 8c6.34 0 9.93 4.2 10.46 9.26h.16a7.38 7.38 0 110 14.74h-5.44l5.7-5.57.17-.2a3.75 3.75 0 00-5.43-5.17l-8.9 8.73-2.14-2.45-.18-.18a3.75 3.75 0 00-5.72 4.8 7.37 7.37 0 01.7-14.7h.17C14.07 12.16 17.66 8 24 8z" fill={primaryFill} /></svg>;
};

export default CloudSyncComplete48Filled;