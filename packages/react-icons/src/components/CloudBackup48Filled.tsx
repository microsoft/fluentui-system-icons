import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudBackup48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.18 20.75l5.65 5.66a1.25 1.25 0 11-1.76 1.77L25.5 24.6V38c0 .65-.5 1.18-1.12 1.24l-.13.01c-.65 0-1.18-.5-1.24-1.12L23 38V24.7l-3.48 3.48a1.25 1.25 0 11-1.77-1.77l5.66-5.66a1.25 1.25 0 011.77 0zM24 9.01c6.34 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73H27.5v-3.56l.15.15a3.25 3.25 0 004.73-4.45l-.13-.15-5.66-5.65a3.25 3.25 0 00-4.45-.14l-.15.14-5.65 5.65a3.25 3.25 0 004.45 4.74l.14-.14.07-.06V33h-7.61a7.37 7.37 0 110-14.73h.16c.52-5.1 4.11-9.26 10.45-9.26z" fill={primaryFill} /></svg>;
};

export default CloudBackup48Filled;