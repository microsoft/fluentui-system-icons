import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudBackup48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.18 20.75l5.65 5.66a1.25 1.25 0 01-1.76 1.77L25.5 24.6V38c0 .65-.5 1.18-1.12 1.24l-.13.01c-.65 0-1.18-.5-1.24-1.12L23 38V24.7l-3.48 3.48a1.25 1.25 0 11-1.77-1.77l5.66-5.66a1.25 1.25 0 011.77 0zM24 9.02c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73L29.25 33c-.65 0-1.18-.5-1.24-1.12l-.01-.13c0-.65.5-1.18 1.12-1.24l.13-.01 5.55.01a4.7 4.7 0 004.7-4.72 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.6-1.4-1.35a8 8 0 00-7.98-8.2 8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.41 1.35H13.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.72l5.55-.01a1.25 1.25 0 01.13 2.5h-5.49a7.37 7.37 0 01-.25-14.72h.4c.53-5.1 4.12-9.26 10.46-9.26z" fill={primaryFill} /></svg>;
};

export default CloudBackup48Regular;