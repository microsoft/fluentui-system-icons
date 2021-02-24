import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudOff48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.86 24.4l.13.11L24 29.52l5.01-5 .13-.12a1.75 1.75 0 012.46 2.46l-.11.13-5.02 5 5.02 5.02a1.75 1.75 0 01-2.35 2.6l-.13-.12L24 34.47l-5.01 5.02-.13.11a1.75 1.75 0 01-2.46-2.46l.11-.13L21.52 32l-5-5.01a1.75 1.75 0 012.34-2.6zM24 8c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H29.3l3.6-3.59.17-.2a3.75 3.75 0 00-5.22-5.35l-.2.18L24 26.7l-3.6-3.6-.2-.17-.06-.06a3.75 3.75 0 00-5.04.24l-.15.15a3.75 3.75 0 00.15 5.15l3.59 3.59h-5.3a7.37 7.37 0 110-14.73h.16C14.07 12.16 17.66 8 24 8z" fill={primaryFill} /></svg>;
};

export default CloudOff48Filled;